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
    // console.log("docid:", docu.id);
    // get a single document

    console.log(docu.id);
    const singleDocRef = doc(db, "users", docu.id);

    const unsubDoc = onSnapshot(singleDocRef, (user) => {
      result.push({ ...user.data(), id: doc.id });
      // console.log("data", user.data());
      return user.data();
    });
  });
  return result;
};
