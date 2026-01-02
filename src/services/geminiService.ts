
import { GoogleGenAI } from "@google/genai";

// Use directly process.env.GEMINI_API_KEY
export const getDesignAdvice = async (userInput: string) => {
    // Initialize lazily to prevent startup errors if key is missing/invalid
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-1.5-flash',
            contents: userInput, // 'contents' expects a Part[] or string in some versions, check SDK. Reference used string.
            config: {
                // Utilizing systemInstruction for brand persona and task framing
                systemInstruction: `You are an expert artisan design assistant for 'Art Tales'. 
      The brand specializes in handcrafted resin art (ocean themes, geode styles, floral preservation) and premium scented soy candles.
      Help the user refine their vision for a custom piece. Be creative, professional, and descriptive.`,
                temperature: 0.7,
                topP: 0.8
            }
        });
        // response.text() is usually a function in some SDK versions, but reference had .text property.
        // The @google/genai SDK usually returns a response object where you might need response.text() function.
        // However, the reference used response.text property. I will trust the reference or use checking. 
        // Actually, recent SDKs use .text() method. I'll use `response.text()` if it's a newer SDK, or `response.response.text()`?
        // The reference used `response.text`. I'll try that first, but wrap in try/catch or safety.
        // Actually, looking at reference `package.json` it uses `@google/genai`: `^1.34.0`. 
        // This is the Python SDK versioning? No, it's JS. 
        // If it's the new `google-genai` SDK (not `@google/generative-ai`), the API is different.
        // Reference: `import { GoogleGenAI } from "@google/genai";`
        // This looks like the newest SDK. `ai.models.generateContent`.
        // I'll stick to reference code exactly for the call, just changing the API key variable name.
        return response.text;
    } catch (error) {
        console.error("AI Assistant Error:", error);
        return "I'm sorry, I'm having a little trouble thinking of ideas right now. Could you describe your preference in colors or styles?";
    }
};
