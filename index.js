import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphql/typeDefs.js";
import { db } from "./firebase.js";

// import { resolvers } from "./graphql/resolvers/index.js";
import { collection, onSnapshot } from "firebase/firestore";
import { users } from "./graphql/resolvers/users.js";
// import { posts } from "./graphql/resolvers/posts.js";

console.log(users);
// Get collection with specified Reference
// const colRef = collection(db, "user");

// let users = [];

// Real time collection data
// const unsubCol = onSnapshot(colRef, (snapshot) => {
//   users = [];
//   snapshot.docs.forEach((doc) => {
//     users.push({ id: doc.id, ...doc.data() });
//   });
//   console.log(users);
//   // return Users;
// });

const resolvers = {
  Query: {
    Users: () => users,
    // Posts: () => posts,
  },
};

// console.log(resolvers);
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
