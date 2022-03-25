import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  addDoc,
  serverTimestamp,
  collection,
  query,
  where,
  getDocs,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../../firebase.js";

const colRef = collection(db, "users");

// export const getUseraData = async (uid) => {
//   // Create a query against the collection.
//   //   console.log("args", args);
//   console.log(uid);
//   const q = query(colRef, where("uid", "==", uid));
//   console.log();

//   // console.log(q);
//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     console.log("cc");
//     // doc.data() is never undefined for query doc snapshots
//     console.log("userId", doc.id);
//     return doc.id;
//   });
// };

// const uid = "bMVmnjpIF2U08uwaE6iJ9pYptgq2";

let result = [];
let username = "";
let image = "";
let email = "";
let number = 123;
export const getUserData = async (parent, args, context) => {
  // console.log(args);
  // console.log(uid);
  const q = query(collection(db, "users"), where("userId", "==", args.uid));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((docu) => {
    // doc.data() is never undefined for query doc snapshots
    console.log("docid:", docu.id);
    // console.log("doc id", docId);
    // get a single document

    console.log(docu.id);
    const singleDocRef = doc(db, "users", docu.id);

    const unsubDoc = onSnapshot(singleDocRef, (user) => {
      result = [];
      // console.log(user.data(), user.id, "doc data");
      // console.log(user.data());
      result.push({ ...user.data(), id: user.id });
      // user.id = user.userId;
      // console.log("data", user.data());
      // console.log("resultusername", result[0]["username"]);
      username = result[0]["username"];
      console.log("username", username);
      // console.log("resultusername", result[0]["profilPicture"]);
      image = result[0]["profilPicture"];
      // console.log("resultusername", result[0]["email"]);
      email = result[0]["email"];
      // console.log("resultusername", result[0]["number"]);
      number = result[0]["number"];
      // console.log("username", username);
      // return user.data();
    });
  });
  return {
    // Return token to use it to fetch
    username,
    image: image,
    email: email,
    number: number,
    // username: username,
    // number: number,
  };
};

// getUserData("bMVmnjpIF2U08uwaE6iJ9pYptgq2");
