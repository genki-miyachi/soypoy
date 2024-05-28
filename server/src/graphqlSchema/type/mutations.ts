import { gql } from "apollo-server-core";

const Mutations = gql`
  type Mutation {
    createUser(name: String!, email: String!): User!
    createPost(title: String!, content: String, authorId: Int!): Post!
  }
`;

export default Mutations;
