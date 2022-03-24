import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "../../../firebase.js";

const auth = getAuth();

let token;
let error;

// console.log(auth);
// Register user with email and password entered in frontend
export const login = async (parent, args, context) => {
  // Create user with Firestore ùmethod
  signInWithEmailAndPassword(auth, args.email, args.password)
    .then((cred) => {
      // console.log(cred.user.reloadUserInfo.email);
      console.log("user logged:", cred.user);
      // console.log("user created");
      token = cred.user.accessToken;
    })

    .catch((err) => {
      const errorMessage = err.message;
      const regExp = /\(([^)]+)\)/;
      error = regExp.exec(errorMessage);
      // Fetch the value between the parentheses
      error = error[1];
      // console.log(error);
      token = null;
    });

  return {
    // Return token to use it to fetch
    token: token,
    error: error,
  };
};
// login("bjjonsoir@gmsjjsail.com", "ccsssoucocuo");
