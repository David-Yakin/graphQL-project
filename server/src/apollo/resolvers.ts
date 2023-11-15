import recipesQueries from "../recipes/apollo/queries/recipesQueries";

export const resolvers = {
  Query: {
    ...recipesQueries,
  },
};
