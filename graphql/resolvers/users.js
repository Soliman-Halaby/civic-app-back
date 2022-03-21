import {
  onSnapshot,
  collection,
  setDoc,
  addDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase.js";
import geofire from "geofire-common";
let users = [];

export const userColRef = collection(db, "users");

// Real time collection data
const unsubCol = onSnapshot(userColRef, (snapshot) => {
  users = [];
  snapshot.docs.forEach((doc) => {
    users.push({ ...doc.data(), id: doc.id });
  });
  // console.log(users);
  // return Users;
});

// const lat = 49.5074;
// const lng = 0.1278;
// const hash = geofire.geohashForLocation([lat, lng]);

// // console.log(hash);
// addDoc(userColRef, {
//   username: "Soliman",
//   number: "0635836974",
//   // geohash: hash,
//   // lat: lat,
//   // long: lng,
//   createdAt: serverTimestamp(),
// });

export { users };
