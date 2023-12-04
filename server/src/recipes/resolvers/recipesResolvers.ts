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

export const getRecipe = async (_: any, { id }: { id: string }) => {
  try {
    const recipes = await Recipe.findById(id);
    return recipes;
  } catch (error) {
    console.log(error);
    return null;
  }
};
