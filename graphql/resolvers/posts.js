import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase.js";
let posts = [];

const colRef = collection(db, "post");

// Real time collection data
const unsubCol = onSnapshot(colRef, (snapshot) => {
  posts = [];
  snapshot.docs.forEach((doc) => {
    posts.push({ ...doc.data(), id: doc.id });
  });
  //   console.log(posts);
  // return posts;
});

export { posts };
