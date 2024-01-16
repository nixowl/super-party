
import {RegisterUser} from "../user/user.validator"
import {db} from "../../utils/db"
import {users,UserType} from "../../utils/schema"
import argon2 from "argon2";
import {eq} from "drizzle-orm"
import { nanoid } from "nanoid"

export async function insertUser(user: RegisterUser): Promise<UserType>  {
    const {name, email, password} = user

    const dbUser =  await db
    .insert(users)
    .values({
        id: nanoid(),
        name,
        email,
        password,
    })
    .returning()

    return dbUser[0]
}

export async function findUserByEmail(email: string): Promise<UserType | undefined> {
    const dbUsers = await db.select().from(users).where(eq(users.email, email))

    return dbUsers[0]
}

export async function findUserById(id: string): Promise<UserType | undefined> {
    const dbUsers = await db.select().from(users).where(eq(users.id, id))

    return dbUsers[0]
}

export async function hashPassword(password: string): Promise<string> {
    return argon2.hash(password)
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
    return argon2.verify(hash, password)
}
