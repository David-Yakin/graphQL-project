import Book from "../models/mongodb/Book";

export const getBooks = async () => {
  try {
    const book = await Book.find({});
    return book;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};
