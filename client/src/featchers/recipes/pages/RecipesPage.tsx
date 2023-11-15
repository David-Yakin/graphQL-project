import { useEffect, useState } from "react";
import { QUERY_RECIPES } from "../services/apollo/queries";
import { useQuery } from "@apollo/client";
import RecipeInterface from "../interfaces/RecipeInterface";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<null | RecipeInterface[]>(null);
  const { loading, error, data } = useQuery(QUERY_RECIPES);

  useEffect(() => {
    data && setRecipes(data.getRecipes);
  }, [data]);

  if (loading) return <p>Loading... </p>;
  if (error) return <p>{error.message}</p>;

  if (recipes)
    return (
      <div>
        {recipes.map((recipe, i) => (
          <p key={i}>{recipe._id}</p>
        ))}
      </div>
    );
};

export default RecipesPage;
