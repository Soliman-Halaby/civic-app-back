import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "../../../firebase.js";
const postsColRef = collection(db, "posts");

const auth = getAuth();

// let uid = "";
// let token = "";
// let error;
let tag = "";
let error;

export const createPost = async (parent, args, context) => {
  addDoc(postsColRef, {
    title: args.title,
    content: args.content,
    // image: args.image,
    image: "https://placekitten.com/300/300",
    tag: args.tag,
    lat: args.lat,
    uid: args.uid,
    lng: args.lng,
    createdAt: serverTimestamp(),
  })
    .then((cred) => {
      console.log("icc", cred.firestore._queue);
      tag = args.tag;
    })
    .catch((err) => {
      const errorMessage = err.message;
      const regExp = /\(([^)]+)\)/;
      error = regExp.exec(errorMessage);
      // Fetch the value between the parentheses
      error = error[1];
      tag = "error";
    });
  // console.log("rererere", error);

  return {
    // Return token to use it to fetch
    error: error,
    tag: tag,
  };
};
