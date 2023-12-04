import recipeTypes, {
  recipesTypeQueries,
} from "../recipes/typeDef/recipeTypes";
import bookTypes, { booksTypeQueries } from "../books/typeDefs/booksTypes";
import booksTypes from "../books/typeDefs/booksTypes";

const typeDefs = `#graphql   

  ${booksTypes}
  ${recipeTypes}

  type Query{
    ${booksTypeQueries}
    ${recipesTypeQueries}
  } 

   `;

export default typeDefs;
