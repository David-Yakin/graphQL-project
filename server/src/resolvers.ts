import { getRecipes } from "./recipes/controllers/recipesControllers";

export const resolvers = {
  Query: {
    getRecipes,
  },
};
