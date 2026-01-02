
import { GoogleGenAI } from "@google/genai";

// Use directly process.env.API_KEY without assertion for standard compliance
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDesignAdvice = async (userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userInput,
      config: {
        // Utilizing systemInstruction for brand persona and task framing
        systemInstruction: `You are an expert artisan design assistant for 'Art Tales'. 
      The brand specializes in handcrafted resin art (ocean themes, geode styles, floral preservation) and premium scented soy candles.
      Help the user refine their vision for a custom piece. Be creative, professional, and descriptive.`,
        temperature: 0.7,
        topP: 0.8
      }
    });
    // response.text is a direct property, not a method call
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm sorry, I'm having a little trouble thinking of ideas right now. Could you describe your preference in colors or styles?";
  }
};
