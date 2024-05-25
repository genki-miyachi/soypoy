import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const startServer = async() => {
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  };
  // FIXME: Express と Apollo sever の version 競合で Type error が発生する
  // 同様の Issue が報告されているものの解決せず。
  // https://github.com/apollographql/apollo-server/issues/4592
  const app: any = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
