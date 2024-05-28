import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const postResolvers = {
  Query: {
    posts: () => prisma.post.findMany(),
  },
  Mutation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createPost: (_: any, args: { title: string; content: string; authorId: number }) =>
      prisma.post.create({
        data: {
          title: args.title,
          content: args.content,
          authorId: args.authorId,
        },
      }),
  },
  Post: {
    author: (parent: { authorId: number }) =>
      prisma.user.findUnique({
        where: { id: parent.authorId },
      }),
  },
};

export default postResolvers;
