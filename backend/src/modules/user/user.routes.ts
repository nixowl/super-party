import express from "express"
import { getUserByIdHandler, loginUserHandler, registerUserHandler } from "./user.controller"

const router = express.Router()

router.post("/register", registerUserHandler)
router.post("/login", loginUserHandler)
router.get("/:id", getUserByIdHandler)

export default router
