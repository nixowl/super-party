import express from "express"
import { getSessionUserHandler, getUserByIdHandler, loginUserHandler, registerUserHandler } from "~/modules/user/user.controller"
import { authenticateMiddleware } from "~/utils/middleware"

const router = express.Router()

router.post("/register", registerUserHandler)
router.post("/login", loginUserHandler)
router.get("/user/:id", getUserByIdHandler)
router.get("/me", authenticateMiddleware, getSessionUserHandler)

export default router
