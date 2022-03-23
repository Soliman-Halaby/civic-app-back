import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "../../../firebase.js";

const auth = getAuth();
// console.log(auth);
// Register user with email and password entered in frontend
export const login = async (parent, args, context) => {
  // Create user with Firestore ùmethod
  signInWithEmailAndPassword(auth, args.email, args.password)
    .then((cred) => {
      // console.log(cred.user.reloadUserInfo.email);
      console.log("user logged:", cred.user);
      // console.log("user created");
    })

    .catch((err) => {
      console.log(err.message);
    });

  // console.log("cc");
  // userInfo.push(user);
  // console.log(user);
  // return user;

  // return {
  //   // Return token to use it to fetch
  //   token: cred.user.accessToken,
  // };
};
