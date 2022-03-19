import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphql/typeDefs.js";
import { db } from "./firebase.js";

// import { resolvers } from "./graphql/resolvers"
import { collection, onSnapshot } from "firebase/firestore";

// Get collection with specified Reference
const colRef = collection(db, "user");

let users = [];

// Real time collection data
const unsubCol = onSnapshot(colRef, (snapshot) => {
  users = [];
  snapshot.docs.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });
  console.log(users);
  // return Users;
});

const resolvers = {
  Query: {
    Users: () => users,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
