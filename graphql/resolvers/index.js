import * as Queries from "./Queries/index.js";
import * as Mutations from "./Mutations/index.js";

export const resolvers = {
  Query: {
    // Fetch all queries
    ...Queries,
  },
  Mutation: {
    // Fetch all mutations
    ...Mutations,
  },
};
