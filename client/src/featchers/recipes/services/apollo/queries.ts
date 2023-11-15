import { gql } from "@apollo/client";

export const QUERY_RECIPES = gql`
  query Recipes {
    getRecipes {
      _id
      title
      ingredients {
        measure
        name
      }
      instructions
    }
  }
`;
