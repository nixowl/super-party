import { nanoid } from "nanoid"
import { findUserByEmail, findUserById, hashPassword, inserToken, insertUser, verifyPassword } from "./user.service"
import { LoginUser, RegisterUser, loginUserValidator, registerUserValidator } from "./user.validator"
import { Request, Response } from "express"

const day = 24 * 60 * 60 * 1000

export async function registerUserHandler(req: Request, res: Response) {
  const { name, email, password } = req.body as RegisterUser

  const { success } = registerUserValidator.safeParse({ name, email, password })
  if (!success) {
    res.status(400).json({ msg: "Invalid request body" })
    return
  }

  try {
    console.log("password: ", password)
    const hashedPassword = await hashPassword(password)
    console.log("HASHED password: ", hashedPassword)
    const user = await insertUser({ name, email, password: hashedPassword })
    const token = await inserToken({
      hash: nanoid(),
      userId: user.id,
      scope: "authentication",
      expiry: new Date(Date.now() + 30 * day),
    })

    res.status(201).json({
      user,
      token: token.hash,
    })
  } catch (e) {
    console.log(e)
    // TOOD better error handling
    res.status(400).json({ msg: "Amazingg error handling" })
  }
}

export async function loginUserHandler(req: Request, res: Response) {
  const { email, password } = req.body as LoginUser

  const { success } = loginUserValidator.safeParse({ email, password })

  if (!success) {
    res.status(400).json({ msg: "Invalid request body" })
    return
  }

  try {
    const user = await findUserByEmail(email)
    if (!user) {
      return res.status(401).json({ msg: "Invalid credentials" })
    }

    const passwordValid = await verifyPassword(password, user.password)
    const token = await inserToken({
      hash: nanoid(),
      userId: user.id,
      scope: "authentication",
      expiry: new Date(Date.now() + 30 * day),
    })

    if (!passwordValid) {
      return res.status(401).json({ msg: "Invalid credentials" })
    }

    res.status(200).json({
      user,
      token: token.hash,
    })
  } catch (e) {
    console.log(e)
    // TOOD better error handling
    res.status(400).json({ msg: "Amazingg error handling" })
  }
}

export async function getUserByIdHandler(req: Request, res: Response) {
  const { id } = req.params

  const user = await findUserById(id)
  if (!user) {
    return res.status(404).json({ msg: "User not found" })
  }

  res.status(200).json(user)
}
