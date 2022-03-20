import gql from "graphql-tag";

export const typeDefs = gql`
  #   scalar Date

  type Post {
    id: ID
    content: String
    # date: Date
  }

  type User {
    id: ID!
    username: String!
    number: Int!
    posts: [Post]
    # date: Date
  }

  type Query {
    Users: [User]
    Posts: [Post]
  }
`;
// export default { typeDefs };
