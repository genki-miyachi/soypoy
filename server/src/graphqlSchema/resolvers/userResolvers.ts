import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userResolvers = {
  Query: {
    users: () => prisma.user.findMany(),
  },
  Mutation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createUser: (_: any, args: { name: string; email: string }) =>
      prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
        },
      }),
  },
};

export default userResolvers;
