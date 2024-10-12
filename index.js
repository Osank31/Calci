import express from "express"
import "dotenv/config"
import path from "path"
const app = express()

import { unlink } from "node:fs/promises"
import { fileURLToPath } from "url"
import { aiResponse } from "./googleai.response.js"
import { upload } from "./multer.middleware.js"

app.use(express.static("public"))
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.post("/upload", upload.single("image"), async (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded.")
    }

    const answer = await aiResponse(req.file.path)
    res.json({ answer })
    await unlink(req.file.path)
})

app.listen(process.env.port || 3000)
