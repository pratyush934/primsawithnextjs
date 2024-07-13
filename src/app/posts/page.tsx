import prisma from "@/lib/db";
import Link from "next/link";

const page = async () => {
  const user = await prisma.post.findMany({
    // where: {
    //   published: false,
    // },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      slug: true,
    },
    take: 2,
  });

  // console.log(user);

  return (
    <div>
      <div className="h-screen w-full flex flex-auto justify-center bg-gray-500">
        <h1 className="font-mono text-blue-300-700 font-bold text-5xl pt-[100px]">
          {user.map((u) => (
            <li
              key={u.id}
              className="flex flex-row items-center justify-center pb-4"
            >
              <Link href={`/posts/${u.slug}`}>{u.title}</Link>
            </li>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default page;
