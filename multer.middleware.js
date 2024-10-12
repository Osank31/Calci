import path from "path"
import multer from "multer"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        const originalExtension = path.extname(file.originalname)
        const originalName = path.basename(file.originalname, originalExtension)
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
        cb(null, originalName + "-" + uniqueSuffix + originalExtension)
    },
})

export const upload = multer({ storage })
