import { ApolloServer } from "apollo-server";
// import { ApolloServer } from "apollo-server";
// import "graphql-tag"
import gql from "graphql-tag";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
const typeDefs = gql`
  type User {
    username: String!
    number: Int!
  }

  type Query {
    Users: [User]
  }
`;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.CIVIC_FIREBASE_API_KEY,
  authDomain: process.env.CIVIC_FIREBASE_AUTH_DOMAIN,
  projectId: "civic-app-database",
  storageBucket: process.env.CIVIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.CIVIC_FIREBASE_MESSAGING_SEND_ID,
  appId: process.env.CIVIC_FIREBASE_APP_ID,
  measurementId: process.env.CIVIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, "user");

let users = [];

// Real time collection data
const unsubCol = onSnapshot(colRef, (snapshot) => {
  users = [];
  snapshot.docs.forEach((doc) => {
    users.push({ ...doc.data(), id: doc.id });
  });
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
