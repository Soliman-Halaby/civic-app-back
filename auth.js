import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "./firebase.js";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { userColRef } from "./graphql/resolvers/users.js";
const auth = getAuth();
import { typeDefs } from "./graphql/typeDefs.js";
// console.log(getAuth());

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

const email = "coucouu@robin.fr";
const password = "coucou";
createUserWithEmailAndPassword(auth, email, password)
  .then((cred) => {
    // console.log(cred.user.reloadUserInfo.email);
    console.log("user created");
    // console.log("user created:", cred.user);
    addDoc(userColRef, {
      username: "Soliman",
      profilPicture: "Profilepicture",
      acessToken: cred.user.accessToken,
      password: cred.user.reloadUserInfo.passwordHash,
      account_valide: cred.user.reloadUserInfo.emailVerified,
      email: cred.user.reloadUserInfo.email,
      number: "0635836974",
      // geohash: hash,
      // lat: lat,
      // long: lng,
      createdAt: serverTimestamp(),
    });
  })

  .catch((err) => {
    console.log(err.message);
  });
