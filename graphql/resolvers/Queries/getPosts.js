import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../../firebase.js";
let result = [];

// Function to fetch posts
export const getPosts = async () => {
  // Fetch posts from posts collection in Firestore
  const postColRef = collection(db, "posts");
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
