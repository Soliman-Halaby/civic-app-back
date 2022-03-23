import { ApolloServer } from "apollo-server";
// import { typeDefs } from "./graphql/typeDefs.js";
import { typeDefs, resolvers } from "./graphql/index.js";

// Cors to authorize the request from the client
const corsOptions = {
  origin: "*",
  credentials: true,
};

// Launch the server
const server = new ApolloServer({
  typeDefs,
  cors: corsOptions,
  resolvers,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
