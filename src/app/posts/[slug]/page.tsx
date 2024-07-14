import prisma from "@/lib/db";
import { unstable_cache } from "next/cache";

const getCachedPost = unstable_cache((slug: string) => {
  console.log(`Ye call hua hai`);
  return prisma.post.findUnique({
    where: {
      slug,
    },
  });
});

const PostSinglePage = async ({ params }: { params: any }) => {
  console.log("--->", params);
  // const user = await prisma.post.findUnique({
  //   where: {
  //     slug: params.slug,
  //   },
  // });
  const user = await getCachedPost(params.slug)
  console.log("-----",user);

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
