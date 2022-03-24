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

// console.log(user);
export const getUser = async (uid) => {
  const q = query(collection(db, "users"), where("userId", "==", uid));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((docu) => {
    // doc.data() is never undefined for query doc snapshots
    console.log("docid:", docu.id);
    // console.log("doc id", docId);
    // get a single document

    console.log(docu.id);
    const singleDocRef = doc(db, "users", docu.id);

    const unsubDoc = onSnapshot(singleDocRef, (user) => {
      // console.log(user.data(), user.id, "doc data");
      // console.log(user.data());
      result.push({ ...user.data(), id: doc.id });
      // user.id = user.userId;
      console.log("data", user.data());
      return user.data();
    });
  });
  return result;
};
// export const getUser = async (uid) => {
//   // const id = getUserById(uid);
//   // console.log("id", id);

//   const singleDocRef = doc(db, "user", "lxD3jyESfYBwGFclv6my");

//   const unsubDoc = onSnapshot(singleDocRef, (doc) => {
//     console.log(doc.data(), doc.id, "doc data");
//   });
// };
