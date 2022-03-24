import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "../../../firebase.js";
const postsColRef = collection(db, "posts");

const auth = getAuth();

let uid = "";
let token = "";
let error;
// console.log("acces");
// Register user with email and password entered in frontend
export const createPost = (parent, args, context) => {
  // Create user with Firestore ùmethod
  // createUserWithEmailAndPassword(auth, args.email, args.password)
  //   .then((cred) => {
  //     // console.log(cred.user.reloadUserInfo.email);
  //     // console.log(args.username);
  //     // console.log("user created:", cred.user);
  console.log("post created", args);
  addDoc(postsColRef, {
    title: args.title,
    content: args.content,
    // image: args.image,
    tag: args.tag,
    lat: args.lat,
    lng: args.lng,
    createdAt: serverTimestamp(),
    // username: args.username,
    // userId: cred.user.uid,
    // profilPicture: "https://placekitten.com/300/200",
    // accessToken: cred.user.accessToken,
    // password: cred.user.reloadUserInfo.passwordHash,
    // account_valide: cred.user.reloadUserInfo.emailVerified,
    // email: cred.user.reloadUserInfo.email,
    // number: "0635836974",
    // geohash: hash,
    // lat: lat,
    // long: lng,
  });
  // token = cred.user.accessToken;
  // uid = cred.user.uid;
  // error = null;
  // console.log("user created");
  // })

  // .catch((err) => {
  //   const errorMessage = err.message;
  //   const regExp = /\(([^)]+)\)/;
  //   error = regExp.exec(errorMessage);
  //   //Fetch the value between the parentheses
  //   error = error[1];
  //   console.log(error);
  //   uid = null;
  //   token = null;
  //   // console.log(err.message);
  // });

  return {
    // Return token to use it to fetch
    // token: token,
    // error: error,
    // uid: uid,
  };
};
