import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

// Load all GraphQL type definitions from the `./graphql` directory
export const typeDefs = loadSchemaSync("./**/*.gql", {
  loaders: [new GraphQLFileLoader()],
});

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
