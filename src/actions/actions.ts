"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

//important hai bhai samjho

export async function createPost(formData: FormData) {
  try {
    await prisma.post.create({
      data: {
        title: formData.get("title") as string,
        slug: (formData.get("title") as string)
          .replace("/s+/g", "-")
          .toLowerCase(),
        content: formData.get("content") as string,
        //important ishe dekhiye
        author: {
          connect: {
            email: "gigagiga@gmail.com",
          },
        }, // Add the 'author' property here
      },
    });
    revalidatePath("/posts");
  } catch (error) {
    console.log(`Error in action.ts createPost`, error);
  }
}

export async function editPost(postId: string, formData: FormData) {
  await prisma.post.update({
    where: { id: postId },
    data: {
      title: formData.get("title") as string,
      slug: (formData.get("title") as string)
        .replace("/s+/g", "-")
        .toLowerCase(),
      content: formData.get("content") as string,
    },
  });
  revalidatePath("/posts");
}

export async function deletePost(postId: string) {
  await prisma.post.delete({
    where: { id: postId },
  });
  revalidatePath("/posts");
}
