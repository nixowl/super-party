import { type Request, type Response } from "express"
import { getPostById, getAllUserPosts, inserPost } from "~/modules/post/post.service"
import { type UserType } from "~/utils/schema"

type RequestWithUser = Request & { user?: UserType }

export async function getPostByIdHandler(req: Request, res: Response) {
  const { id } = req.params
  const post = await getPostById(id)

  if (!post) {
    res.status(404).json({ msg: "Post not found" })
    return
  }

  res.status(200).json(post)
}

export async function getAllUserPostsHandler(req: RequestWithUser, res: Response) {
  const { user } = req

  if (!user) {
    res.status(401).json({ msg: "Unauthorized" })
    return
  }

  const posts = await getAllUserPosts(user.id)
  console.log("posts: ", posts)

  res.status(200).json(posts)
}

export async function createPostHandler(req: RequestWithUser, res: Response) {
  const { user } = req

  if (!user) {
    res.status(401).json({ msg: "Unauthorized" })
    return
  }

  const { content } = req.body as { content: string }
  const post = await inserPost({ content, userId: user.id })

  res.status(201).json(post)
}
