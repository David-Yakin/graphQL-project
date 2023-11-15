export const typeDefs = `#graphql
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
