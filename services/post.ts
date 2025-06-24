import prisma from "../client";
import { CreatePostData } from "../types/post";

export const createPost = async (data: CreatePostData) => {
  try {
    const post = await prisma.post.create({
      data: {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return post;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create post");
  }
};
