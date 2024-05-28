import { gql } from "apollo-server-core";

const User = gql`
  type User {
    id: Int!
    name: String!
    email: String!
  }
`;
export default User;
