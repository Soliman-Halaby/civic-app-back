import {
  onSnapshot,
  collection,
  serverTimestamp,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../../firebase.js";
let result = [];

// Function to fetch posts
export const getUsers = async () => {
  // Fetch posts from posts collection in Firestore
  const postColRef = collection(db, "users");
  // console.log(postColRef);
  // Real time collection data
  const unsubCol = onSnapshot(postColRef, (snapshot) => {
    result = [];
    snapshot.docs.forEach((doc) => {
      result.push({ ...doc.data(), id: doc.id });
    });
    // console.log(result);
    // return result;
  });
  return result;
};

// console.log(hash);
// addDoc(postColRef, {
//   content: "Je suis un post",
//   createdAt: serverTimestamp(),
// });

// setDoc(doc(db, `posts/p6iZMyGm7FcFqKY4cBKE/likes`, "like"), {
//     username: "post1",
//     time: serverTimestamp(),
//   });
