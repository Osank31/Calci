import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai"
import { GoogleAIFileManager } from "@google/generative-ai/server"

const aiResponse = async (path) => {
    const apiKey = process.env.GEMINI_API_KEY
    const genAI = new GoogleGenerativeAI(apiKey)
    const fileManager = new GoogleAIFileManager(apiKey)

    try {
        const uploadResult = await fileManager.uploadFile(`${path}`, {
            mimeType: "image/png",
            displayName: "Jetpack Drawing",
        })

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

        const generationConfig = {
            temperature: 0.1,
            topP: 0.95,
            topK: 64,
            maxOutputTokens: 8192,
            responseMimeType: "application/json",
        }

        const result = await model.generateContent(
            [
                "You have been given an image of equation. You only have to tell the answer of that equation and nothing else",
                {
                    fileData: {
                        fileUri: uploadResult.file.uri,
                        mimeType: uploadResult.file.mimeType,
                    },
                },
            ],
            generationConfig
        )
        return result.response.candidates[0].content.parts[0].text
    } catch (error) {
        return "Error processing image."
    }
}

export { aiResponse }
