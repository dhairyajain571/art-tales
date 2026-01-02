
import React, { useEffect, useRef, useState } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';

interface Props {
  onClose: () => void;
}

const LiveConsultation: React.FC<Props> = ({ onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [transcription, setTranscription] = useState<string[]>([]);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const sessionRef = useRef<any>(null);

  const startConsultation = async () => {
    setIsConnecting(true);
    // Initializing SDK instance immediately before use as per recommended pattern
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
    outputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const sessionPromise = ai.live.connect({
      model: 'gemini-2.5-flash-native-audio-preview-09-2025',
      callbacks: {
        onopen: () => {
          setIsConnecting(false);
          setIsActive(true);
          const source = audioContextRef.current!.createMediaStreamSource(stream);
          const scriptProcessor = audioContextRef.current!.createScriptProcessor(4096, 1, 1);
          
          scriptProcessor.onaudioprocess = (e) => {
            const inputData = e.inputBuffer.getChannelData(0);
            const l = inputData.length;
            const int16 = new Int16Array(l);
            for (let i = 0; i < l; i++) int16[i] = inputData[i] * 32768;
            
            // Manual base64 encoding for raw PCM data stream
            const bytes = new Uint8Array(int16.buffer);
            let binary = '';
            for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
            const base64 = btoa(binary);

            // Solely rely on sessionPromise resolution for streaming
            sessionPromise.then(s => s.sendRealtimeInput({ 
              media: { data: base64, mimeType: 'audio/pcm;rate=16000' } 
            }));
          };
          source.connect(scriptProcessor);
          scriptProcessor.connect(audioContextRef.current!.destination);
        },
        onmessage: async (message: LiveServerMessage) => {
          if (message.serverContent?.outputTranscription) {
            const text = message.serverContent.outputTranscription.text;
            setTranscription(prev => [...prev, `AI: ${text}`]);
          }

          // Audio output handling with manual decoding logic
          const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
          if (base64Audio) {
            const binaryString = atob(base64Audio);
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) bytes[i] = binaryString.charCodeAt(i);
            
            const dataInt16 = new Int16Array(bytes.buffer);
            const frameCount = dataInt16.length;
            const buffer = outputAudioContextRef.current!.createBuffer(1, frameCount, 24000);
            const channelData = buffer.getChannelData(0);
            for (let i = 0; i < frameCount; i++) channelData[i] = dataInt16[i] / 32768.0;

            const source = outputAudioContextRef.current!.createBufferSource();
            source.buffer = buffer;
            source.connect(outputAudioContextRef.current!.destination);
            
            // Gapless playback queue management
            nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputAudioContextRef.current!.currentTime);
            source.start(nextStartTimeRef.current);
            nextStartTimeRef.current += buffer.duration;
            sourcesRef.current.add(source);
            source.onended = () => sourcesRef.current.delete(source);
          }

          // Handling interruption events to clear playback queue
          const interrupted = message.serverContent?.interrupted;
          if (interrupted) {
            for (const source of sourcesRef.current.values()) {
              source.stop();
              sourcesRef.current.delete(source);
            }
            nextStartTimeRef.current = 0;
          }
        },
        onerror: (e) => console.error('Live API Error', e),
        onclose: () => setIsActive(false),
      },
      config: {
        responseModalities: [Modality.AUDIO],
        outputAudioTranscription: {},
        systemInstruction: "You are Aashwi Maheshwari's artisan assistant. Help users choose resin colors, scents for candles, or explain the preservation process. Be warm, creative, and professional. You can't see them, but you can listen and talk.",
        speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } } }
      }
    });

    sessionRef.current = await sessionPromise;
  };

  const stopConsultation = () => {
    if (sessionRef.current) sessionRef.current.close();
    setIsActive(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary/30 backdrop-blur-xl">
      <div className="glass-panel w-full max-w-lg !rounded-[3rem] overflow-hidden flex flex-col h-[70vh] shadow-2xl border-white/60">
        <div className="p-8 bg-gradient-to-r from-primary to-primary-light flex justify-between items-center text-white">
          <div className="flex items-center gap-4">
            <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-green-400 animate-pulse' : 'bg-slate-400'}`}></div>
            <div>
              <h2 className="text-xl font-bold">Artisan Consultation</h2>
              <p className="text-xs opacity-80 uppercase tracking-widest font-bold">Live with Aashwi AI</p>
            </div>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full hover:bg-white/20 flex items-center justify-center">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-4 hide-scrollbar bg-white/40">
          {!isActive && !isConnecting && (
            <div className="h-full flex flex-col items-center justify-center text-center gap-6">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-gem">
                <span className="material-symbols-outlined text-5xl">mic</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Ready to Design?</h3>
                <p className="text-slate-600 font-medium">Connect via voice to discuss your custom art piece or pick the perfect scent.</p>
              </div>
              <button 
                onClick={startConsultation}
                className="btn-resin h-14 px-10 rounded-full font-bold flex items-center gap-3"
              >
                Start Live Audio <span className="material-symbols-outlined">graphic_eq</span>
              </button>
            </div>
          )}

          {isConnecting && (
            <div className="h-full flex flex-col items-center justify-center gap-4">
              <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
              <p className="text-primary font-bold animate-pulse">Establishing secure link...</p>
            </div>
          )}

          {isActive && (
            <div className="flex flex-col gap-6">
              <div className="p-6 rounded-[2rem] bg-white/60 border border-white/80 shadow-inner flex flex-col items-center gap-6">
                <div className="flex items-center gap-2">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-1 bg-primary rounded-full animate-bounce" style={{ height: `${Math.random() * 20 + 10}px`, animationDelay: `${i * 0.1}s` }}></div>
                  ))}
                  <p className="text-xs font-black text-primary uppercase tracking-widest px-4">AI Assistant is Listening</p>
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-1 bg-primary rounded-full animate-bounce" style={{ height: `${Math.random() * 20 + 10}px`, animationDelay: `${i * 0.1}s` }}></div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                {transcription.slice(-5).map((line, i) => (
                  <div key={i} className={`text-sm font-medium ${line.startsWith('AI:') ? 'text-primary' : 'text-slate-500'}`}>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {isActive && (
          <div className="p-6 bg-white/60 border-t border-white/60 flex justify-center">
            <button 
              onClick={stopConsultation}
              className="h-14 px-10 rounded-full bg-secondary-dark text-white font-bold shadow-lg hover:bg-pink-600 transition-colors flex items-center gap-3"
            >
              End Session <span className="material-symbols-outlined">call_end</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveConsultation;
