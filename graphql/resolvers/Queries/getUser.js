import {
  onSnapshot,
  collection,
  setDoc,
  addDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../firebase.js";

let result = [];

// Function to fetch User
export const getUser = async () => {
  // Fetch Users from Users collection in Firestore
  const userColRef = collection(db, "users");

  // Real time collection data
  const unsubCol = onSnapshot(userColRef, (snapshot) => {
    result = [];
    snapshot.docs.forEach((doc) => {
      result.push({ ...doc.data(), id: doc.id });
    });
    console.log(result);
  });
  return result;
};

// getUser();

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
