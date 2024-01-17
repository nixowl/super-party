import { eq } from "drizzle-orm"
import { nanoid } from "nanoid"
import { db } from "~/utils/db"
import { type PostType, type PostInsertType, posts } from "~/utils/schema"

export async function inserPost({ content, userId }: Omit<PostInsertType, "id">): Promise<PostType> {
  const post = await db
    .insert(posts)
    .values({
      id: nanoid(),
      content,
      userId,
    })
    .returning()

  return post[0]
}

export async function getPostById(id: string): Promise<PostType | undefined> {
  const dbPosts = await db.select().from(posts).where(eq(posts.id, id))

  return dbPosts[0]
}


export async function getAllUserPosts(userId: string): Promise<PostType[] | []> {
  const dbPosts = await db.select().from(posts).where(eq(posts.userId, userId))

  return dbPosts
}
