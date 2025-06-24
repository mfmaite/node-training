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

export const getPosts = async () => {
  try {
    const posts = await prisma.post.findMany();
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get posts");
  }
};

export const getPost = async (id: number) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });

    return post;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get post");
  }
};
