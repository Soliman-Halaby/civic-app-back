import { users } from "./users.js";
const resolvers = {
  // Date: dateScalar,
  Query: {
    Users: () => users,
  },
};

// export { resolvers };
export { resolvers };
