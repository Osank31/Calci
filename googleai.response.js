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
                "You have been given an image of equation. You only have to tell the answer of that equation and nothing else.If the equation cannot be solved with given set of input reply \"Incomplete set of Equation. I need more Info\". If You dont see an equation then reply \"That's a good piece of art but i dont see an equation!!!\". If the answer is anything bizzare like infinity or imaginary numbers reply \"I can deal with this.......... Too difficult\". If the answer is in decimal round it off to two decimal places always",
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
