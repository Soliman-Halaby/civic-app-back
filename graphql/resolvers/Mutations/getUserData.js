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

let result = [];
let username = "";
let image = "";
let email = "";
let number = 123;
export const getUserData = async (parent, args, context) => {
  const q = query(collection(db, "users"), where("userId", "==", args.uid));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((docu) => {
    // doc.data() is never undefined for query doc snapshots
    // get a single document
    const singleDocRef = doc(db, "users", docu.id);

    const unsubDoc = onSnapshot(singleDocRef, (user) => {
      result = [];
      // console.log(user.data(), user.id, "doc data");
      // console.log(user.data());
      result.push({ ...user.data(), id: user.id });
      username = result[0]["username"];
      // console.log("username", username);
      // console.log("resultusername", result[0]["profilPicture"]);
      image = result[0]["profilPicture"];
      email = result[0]["email"];
      number = result[0]["number"];
      // console.log("resultusername", result[0]["email"]);
      // console.log("resultusername", result[0]["number"]);
      // console.log("username", username);
      // return user.data();
    });
  });
  return {
    // Return data to  fetch it
    username,
    image: image,
    email: email,
    number: number,
  };
};
