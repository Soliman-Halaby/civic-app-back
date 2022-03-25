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
export const getPosts = async () => {
  // Fetch posts from posts collection in Firestore
  const postColRef = collection(db, "posts");
  // console.log(postColRef);
  // Real time collection data
  const unsubCol = onSnapshot(postColRef, (snapshot) => {
    result = [];
    snapshot.docs.forEach((doc) => {
      console.log(doc.data());
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
