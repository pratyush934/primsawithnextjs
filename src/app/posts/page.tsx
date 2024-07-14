import { createPost } from "@/actions/actions";
import prisma from "@/lib/db";
import Link from "next/link";

const page = async () => {
  const user = await prisma.post.findMany({
    where: {
      // published: false,
      // title: {
      //   endsWith: "Post" || "post",
      // },
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      slug: true,
      //can have multiple options
    },
    // take: 2,
    //skip : 2
  });

  const postCount = await prisma.post.count();

  const user2 = await prisma.user.findUnique({
    where: {
      email: "gigagiga@gmail.com",
    },
    include: {
      posts: true
    }
  });

  console.log(user2);

  return (
    <div>
      <div className="h-1/2 w-full flex flex-auto justify-center bg-gray-500">
        <h1 className="font-mono text-blue-300-700 font-bold text-5xl pt-[100px]">
          <h1 className="text-center font-bole text-gray-950">
            All posts {postCount}
          </h1>
          {user2?.posts.map((u) => (
            <li
              key={u.id}
              className="flex flex-row items-center justify-center pb-4"
            >
              <Link href={`/posts/${u.slug}`}>{u.title}</Link>
            </li>
          ))}
        </h1>
      </div>
      <form className="mt-8" action={createPost}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter content"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
