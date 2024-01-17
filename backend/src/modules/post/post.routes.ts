import express from "express"
import { authenticateMiddleware } from "~/utils/middleware"
import { getPostByIdHandler, createPostHandler, getAllUserPostsHandler } from "~/modules/post/post.controller"

const router = express.Router()

router.get("/post/:id", authenticateMiddleware, getPostByIdHandler)
router.get("/user-posts", authenticateMiddleware, getAllUserPostsHandler)
router.post("/", authenticateMiddleware, createPostHandler)

export default router
