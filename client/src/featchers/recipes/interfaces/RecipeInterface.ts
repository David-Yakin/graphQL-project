interface Ingredient {
  name: string;
  measure: string;
}

interface RecipeInterface {
  ingredients: Ingredient[];
  instructions: string[];
  _id: string;
}
export default RecipeInterface;
