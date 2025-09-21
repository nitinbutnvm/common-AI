import express from "express"
import { auth } from "../middlewares/auth.js"
import { generateArticle, generateBlogTitle, generateImage, removeImageBackground } from "../controllers/aiController.js"
import { upload } from "../configs/multer.js"


const aiRouter =  express.Router()

aiRouter.post('/generate-article', auth, generateArticle)
aiRouter.post('/generate-blog-title', auth, generateBlogTitle)
aiRouter.post('/generate-image', auth, generateImage)
aiRouter.post('/remove-image-background', upload.single("image"), auth, removeImageBackground)

export default aiRouter