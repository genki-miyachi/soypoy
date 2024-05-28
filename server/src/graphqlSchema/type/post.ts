import { gql } from "apollo-server-core";

const Post = gql`
  type Post {
    id: Int!
    title: String!
    content: String
    published: Boolean!
    authorId: Int!
    author: User!
  }
`;
export default Post;
