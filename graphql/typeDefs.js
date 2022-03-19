import gql from "graphql-tag";

export const typeDefs = gql`
  #   scalar Date

  type User {
    id: ID!
    username: String!
    number: Int!
    # date: Date
  }

  type Query {
    Users: [User]
  }
`;
export default { typeDefs };
