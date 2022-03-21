import gql from "graphql-tag";
import { GraphQLScalarType, Kind } from "graphql"; // ES6

export const typeDefs = gql`
  # scalar Date

  type Post {
    id: ID
    content: String
    createdAt: String
  }

  type Mutation {
    register(email: String): User
  }

  type User {
    id: ID
    username: String
    profilPicture: String
    number: Int
    # posts: [Post]
    email: String
    createdAt: String
    # date: Date
  }

  # input RegisterInput {
  #   password: String
  #   email: String
  # }

  type Query {
    Users: [User]
    Posts: [Post]
    Feed: [User]
  }
`;

// export const dateScalar = new GraphQLScalarType({
//   name: "Date",
//   description: "Date custom scalar type",
//   serialize(value) {
//     console.log("step1");
//     return value.getTime();
//     // .toISOString(); // Convert outgoing Date to integer for JSON
//   },
//   parseValue(value) {
//     console.log("step2");
//     return new Date(value); // Convert incoming integer to Date
//   },
//   parseLiteral(ast) {
//     console.log("step3");
//     if (ast.kind === Kind.INT) {
//       return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
//     }
//     return null; // Invalid hard-coded value (not an integer)
//   },
// });

// export default { typeDefs };
