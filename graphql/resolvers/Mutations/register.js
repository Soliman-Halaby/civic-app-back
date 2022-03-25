import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "../../../firebase.js";
const userColRef = collection(db, "users");

const auth = getAuth();

let uid = "";
let token = "";
let error;
let email = "";
let username = " ";
// console.log("acces");
// Register user with email and password entered in frontend
export const register = async (parent, args, context) => {
  // Create user with Firestore ùmethod
  createUserWithEmailAndPassword(auth, args.email, args.password)
    .then((cred) => {
      addDoc(userColRef, {
        username: args.username,
        userId: cred.user.uid,
        profilPicture: "https://placekitten.com/300/200",
        accessToken: cred.user.accessToken,
        password: cred.user.reloadUserInfo.passwordHash,
        account_valide: cred.user.reloadUserInfo.emailVerified,
        email: cred.user.reloadUserInfo.email,
        number: "0635836974",
        // geohash: hash,
        // lat: lat,
        // long: lng,
        createdAt: serverTimestamp(),
      });
      // console.log("cred user:", cred.user);
      token = cred.user.accessToken;
      console.log("token", cred.user.accessToken);
      uid = cred.user.uid;
      console.log("uid", cred.user.uid);
      email = cred.user.email;
      console.log("email", email);
      username = args.username;
      console.log("username", username);
      error = null;

      // console.log("user created");
    })

    .catch((err) => {
      const errorMessage = err.message;
      const regExp = /\(([^)]+)\)/;
      error = regExp.exec(errorMessage);
      //Fetch the value between the parentheses
      error = error[1];
      console.log(error);
      uid = null;
      token = null;
    });

  return {
    // Return token to use it to fetch
    token: token,
    error: error,
    uid: uid,
    email: email,
    username: username,
  };
};
