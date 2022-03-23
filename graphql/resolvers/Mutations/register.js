import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "../../../firebase.js";
const userColRef = collection(db, "users");

const auth = getAuth();

let token;
// Register user with email and password entered in frontend
export const register = (parent, args, context) => {
  // Create user with Firestore ùmethod
  createUserWithEmailAndPassword(auth, args.email, args.password)
    .then((cred) => {
      // console.log(cred.user.reloadUserInfo.email);
      console.log("user created:", cred.user);
      addDoc(userColRef, {
        username: "Jojo",
        profilPicture: "Profileepicture",
        accessToken: cred.user.accessToken,
        password: cred.user.reloadUserInfo.passwordHash,
        account_valide: cred.user.reloadUserInfo.emailVerified,
        email: cred.user.reloadUserInfo.email,
        number: "0635836974",
        // geohash: hash,
        // lat: lat,
        // long: lng,
        createdAt: serverTimestamp(),
      });
      token = cred.user.accessToken;
      // console.log("user created");
    })

    .catch((err) => {
      console.log(err.message);
    });

  // console.log("cc");
  // userInfo.push(user);
  // console.log(user);
  // return user;

  // console.log("oui", cred.user.accessToken);
  return {
    // Return token to use it to fetch
    token: token,
  };
};
