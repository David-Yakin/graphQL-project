const recipeTypes = `#graphql
type Query {
    getRecipes: [Recipe]
}

type Ingredient {
    name: String
    measure: String
}

type Recipe {
    _id: ID
    title: String!
    ingredients: [Ingredient]
    instructions: [String]
}
`;

export default recipeTypes;
