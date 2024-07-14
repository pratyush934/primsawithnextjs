import { Prisma, PrismaClient } from "@prisma/client";
import { connect } from "http2";
const prisma = new PrismaClient();

const intialPosts: Prisma.PostCreateInput[] = [
  {
    title: "Post 1",
    slug: "post-1",
    content: "Content for Post1 ",
    author: {
      connectOrCreate: {
        where: {
          email: "giga@gmail.com",
        },
        create: {
          email: "giga@gmail.com",
          hashedPassword: "Pratyush",
        },
      },
    },
  },
];

async function main() {

    console.log(`Start seeding`);

    for(const post of intialPosts) {
        const newPost = await prisma.post.create({
            data: post
        })
        console.log(`Created post with id: `, newPost.id);
    }
    console.log(`Seeding completed`);

}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
