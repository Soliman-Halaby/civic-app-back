import { users } from "./users.js";
import { posts } from "./posts.js";
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
    Feed: () => userInfo,
  },
  // Mutation: {
  //   ...Mutation,
  // },
  // Date: dateScalar,
  Mutation: {
    // 2
    register: (parent, args) => {
      let idCount = userInfo.length;

      const user = {
        id: `user-${idCount++}`,
        email: args.email,
      };
      // console.log("cc");
      userInfo.push(user);
      console.log(user);
      return user;
    },
  },
};

// export { resolvers };
export { resolvers };
