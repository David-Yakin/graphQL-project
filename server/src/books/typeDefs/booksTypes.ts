const booksTypes = `
  type Book {
    title: String
    author: String
  }
`;

export const booksTypeQueries = `
  getBooks:[Book]
`;

export default booksTypes;
