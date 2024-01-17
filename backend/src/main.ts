import express from "express"
import userRoutes from "~/modules/user/user.routes"
import postRoutes from "~/modules/post/post.routes"
import { logger } from "~/utils/logger"
const app = express()
const port = 3000

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get("/json", (req, res) => {
  res.json({ message: "Hello World!" })
})

// Routes
app.use("/api/v1/users", userRoutes)
app.use("/api/v1/posts", postRoutes)

app.listen(port, () => {
  logger.info(`Server running on http://localhost:${port}`)
})
