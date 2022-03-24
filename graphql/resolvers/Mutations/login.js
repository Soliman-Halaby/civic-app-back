import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  addDoc,
  serverTimestamp,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../../firebase.js";
import { getUser } from "../Queries/getUser.js";
import { getUserId } from "../Queries/getUserId.js";
// import { db } from "../../../firebase.js";
// collection ref
const colRef = collection(db, "users");

const auth = getAuth();

let token;
let error;
export let email = "";
let uid = "";
let username;
let number;
// console.log(auth);
// Register user with email and password entered in frontend
export const login = async (parent, args, context) => {
  // Create user with Firestore ùmethod
  signInWithEmailAndPassword(auth, args.email, args.password)
    .then((cred) => {
      // console.log(cred.user.reloadUserInfo.email);
      // console.log("user logged:", cred.user);
      // console.log("user created");
      // console.log(cred.user);
      uid = cred.user.uid;
      token = cred.user.accessToken;
      email = cred.user.email;
      // console.log("cc");
    })

    .catch((err) => {
      const errorMessage = err.message;
      const regExp = /\(([^)]+)\)/;
      error = regExp.exec(errorMessage);
      // Fetch the value between the parentheses
      error = error[1];
      // console.log(error);
      token = null;
      email = null;
    });
  await getUser(uid);
  const userInfo = await getUser(uid);
  const userData = userInfo[0];

  console.log("userdata", userData.username, userData.email, userData.number);

  username = userData.username;
  number = userData.number;
  // console.log(userInfo["email"]);
  // console.log("cc");
  // const userId = getUserId(email);
  // console.log("userid", userId);
  // console.log("email", email);

  return {
    // Return token to use it to fetch
    token: token,
    error: error,
    uid: uid,
    email: email,
    username: username,
    number: number,
  };
};

// login("bjjonsoir@gmsjjsail.com", "ccsssoucocuo");
