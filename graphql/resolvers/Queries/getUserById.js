// import {
//   onSnapshot,
//   collection,
//   setDoc,
//   addDoc,
//   doc,
//   serverTimestamp,
// } from "firebase/firestore";
// import { db } from "../../../firebase.js";

// let result = [];

// // Function to fetch User
// export const getUser = async () => {
//   const userColRef = collection(db, "users");
//   // Fetch Users from Users collection in Firestore

//   // Real time collection data
//   const unsubCol = onSnapshot(userColRef, (snapshot) => {
//     result = [];
//     snapshot.docs.forEach((doc) => {
//       result.push({ ...doc.data(), id: doc.id });
//     });
//     // console.log(result);
//   });
//   return result;
// };

// // getUser ();

// // const lat = 49.5074;
// // const lng = 0.1278;
// // const hash = geofire.geohashForLocation([lat, lng]);

// // // console.log(hash);
// // addDoc(userColRef, {
// //   username: "Soliman",
// //   number: "0635836974",
// //   // geohash: hash,
// //   // lat: lat,
// //   // long: lng,
// //   createdAt: serverTimestamp(),
// // });

import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../../../firebase.js";

let result = [];
let username = "";
console.log("ccHorsScop");
// console.log(user);
export const getUserById = async (parent, args, context) => {
  console.log(args.id);
  console.log("jecomprendspas");
  // console.log("yo");
  // console.log("args", args);
  const q = query(collection(db, "users"), where("userId", "==", args.id));
  // console.log(q);
  const querySnapshot = await getDocs(q);
  await getDocs(q);
  // console.log(querySnapshot);
  querySnapshot.forEach((doc) => {
    console.log("docdata:", doc.data());
    //   // doc.data() is never undefined for query doc snapshots
    //   result.push({ ...docu.data() });
    //   // console.log(docu.data());
    //   username = result[0].username;
    //   console.log("username", username);
  });
  return {
    username: username,
  };
};

// getUserById("");
// export const getUser = async (uid) => {
//   // const id = getUserById(uid);
//   // console.log("id", id);

//   const singleDocRef = doc(db, "user", "lxD3jyESfYBwGFclv6my");

//   const unsubDoc = onSnapshot(singleDocRef, (doc) => {
//     console.log(doc.data(), doc.id, "doc data");
//   });
// };
