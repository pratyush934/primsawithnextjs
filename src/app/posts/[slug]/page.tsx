import prisma from "@/lib/db";
import Link from "next/link";
import React from "react";

const PostSinglePage = async ({ params }) => {
  console.log("--->", params);
  const user = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
  });
  console.log(user);

 
  return (
    <div>
      <div className="h-screen w-full flex flex-auto justify-center bg-gray-500">
        <h1 className="font-mono text-blue-300-700 font-bold text-5xl pt-[100px]">
          {user?.content}
        </h1>
      </div>
    </div>
  );
};

export default PostSinglePage;
