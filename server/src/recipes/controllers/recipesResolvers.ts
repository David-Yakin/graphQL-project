import Recipe from "../models/Recipe";

export const getRecipes = async () => {
  try {
    const recipes = await Recipe.find({});
    return recipes;
  } catch (error) {
    console.log(error);
    return null;
  }
};
