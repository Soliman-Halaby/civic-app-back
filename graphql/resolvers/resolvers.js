import { users } from "./users.js";
import { posts } from "./posts.js";
// import { dateScalar } from "../typeDefs.js";
const resolvers = {
  // Date: dateScalar,
  Query: {
    Users: () => users,
    Posts: () => posts,
  },
  // Date: dateScalar,
};

// export { resolvers };
export { resolvers };
