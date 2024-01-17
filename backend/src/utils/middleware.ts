import { type Request, type Response, type NextFunction } from "express"
import { findTokenByHash, findUserById } from "~/modules/user/user.service"
import { type UserType } from "~/utils/schema"

type RequestWithUser = Request & { user?: UserType }

export async function authenticateMiddleware(req: RequestWithUser, res: Response, next: NextFunction) {
  console.log("authenticateMiddleware")
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.sendStatus(401) // No token provided or wrong format (unauthorized)
  }

  // client will send a header like this:
  // Bearer 1234567890 (where 1234567890 is the token) (hash in db)
  const token = authHeader.split(" ")[1]

  try {
    const foundToken = await findTokenByHash(token)
    if (!foundToken || new Date() > new Date(foundToken.expiry)) {
      return res.sendStatus(403) // Forbidden (token expired)
    }

    req.user = await findUserById(foundToken.userId)
    next()
  } catch (error) {
    return res.sendStatus(403)
  }
}
