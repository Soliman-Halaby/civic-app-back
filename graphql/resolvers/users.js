import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase.js";
let users = [];

const colRef = collection(db, "user");

// Real time collection data
const unsubCol = onSnapshot(colRef, (snapshot) => {
  users = [];
  snapshot.docs.forEach((doc) => {
    users.push({ ...doc.data(), id: doc.id });
  });
  //   console.log(users);
  // return Users;
});

export { users };
