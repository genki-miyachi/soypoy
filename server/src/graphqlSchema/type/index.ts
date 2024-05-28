import { gql } from "apollo-server-core";
import User from "./user";
import Post from "./post";
import Queries from "./queries";
import Mutations from "./mutations";

const typeDefs = gql`
  ${User}
  ${Post}

  ${Queries}
  ${Mutations}
`;

export default typeDefs;
