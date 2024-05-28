import { gql } from "apollo-server-core";

const Queries = gql`
  type Query {
    users: [User!]!
    posts: [Post!]!
  }
`;
export default Queries;
