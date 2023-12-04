import recipesQueries from "../recipes/queries/recipesQueries";
import booksQueries from "../books/queries/booksQueries";

const resolvers = {
  Query: {
    ...booksQueries,
    ...recipesQueries,
  },
};

export default resolvers;
