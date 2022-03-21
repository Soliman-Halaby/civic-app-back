import { users } from "./users.js";
import { posts } from "./posts.js";
// import { dateScalar } from "../typeDefs.js";
// import { Mutation } from "./users.js";
let links = [
  {
    id: "link-0",
    email: "solimanalhalabygmailcom",
  },
];

console.log(links);
const resolvers = {
  // Date: dateScalar,
  Query: {
    Users: () => users,
    Posts: () => posts,
    Feed: () => links,
  },
  // Mutation: {
  //   ...Mutation,
  // },
  // Date: dateScalar,
  Mutation: {
    // 2
    register: (parent, args) => {
      let idCount = links.length;

      const link = {
        id: `link-${idCount++}`,
        email: args.email,
      };
      // console.log("cc");
      links.push(link);
      console.log(link);
      return link;
    },
  },
};

// export { resolvers };
export { resolvers };
