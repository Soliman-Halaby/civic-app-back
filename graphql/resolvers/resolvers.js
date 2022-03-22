import { users, userColRef } from "./users.js";
import { posts } from "./posts.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, serverTimestamp } from "firebase/firestore";
const auth = getAuth();

// import { dateScalar } from "../typeDefs.js";
// import { Mutation } from "./users.js";
let userInfo = [
  {
    id: "user-0",
    email: "solimanalhalabygmailcom",
  },
];

console.log(userInfo);
const resolvers = {
  // Date: dateScalar,
  Query: {
    Users: () => users,
    Posts: () => posts,
    UserInfo: () => userInfo,
  },
  // Mutation: {
  //   ...Mutation,
  // },
  // Date: dateScalar,
  Mutation: {
    // 2
    register: (parent, args) => {
      // let idCount = userInfo.length;

      console.log(args);
      // const user = {
      //   id: `user-${idCount++}`,
      //   email: args.email,
      // };

      createUserWithEmailAndPassword(auth, args.email, args.password)
        .then((cred) => {
          // console.log(cred.user.reloadUserInfo.email);
          // console.log("user created:", cred.user);
          addDoc(userColRef, {
            username: "Jojo",
            profilPicture: "Profileepicture",
            acessToken: cred.user.accessToken,
            password: cred.user.reloadUserInfo.passwordHash,
            account_valide: cred.user.reloadUserInfo.emailVerified,
            email: cred.user.reloadUserInfo.email,
            number: "0635836974",
            // geohash: hash,
            // lat: lat,
            // long: lng,
            createdAt: serverTimestamp(),
          });
          console.log("user created");
        })

        .catch((err) => {
          console.log(err.message);
        });

      // console.log("cc");
      // userInfo.push(user);
      // console.log(user);
      // return user;
    },
  },
};

// export { resolvers };
export { resolvers };
