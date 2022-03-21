import {
  onSnapshot,
  collection,
  serverTimestamp,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase.js";
let posts = [];

const postColRef = collection(db, "posts");

// Real time collection data
const unsubCol = onSnapshot(postColRef, (snapshot) => {
  posts = [];
  snapshot.docs.forEach((doc) => {
    posts.push({ ...doc.data(), id: doc.id });
  });
  console.log(posts);
  // return posts;
});

// console.log(hash);
// addDoc(postColRef, {
//   content: "Je suis un post",
//   createdAt: serverTimestamp(),
// });

setDoc(doc(db, `posts/p6iZMyGm7FcFqKY4cBKE/likes`, "like"), {
  username: "post1",
  time: serverTimestamp(),
});

export { posts };
