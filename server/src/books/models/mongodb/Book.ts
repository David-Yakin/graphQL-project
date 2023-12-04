import { Schema, model } from "mongoose";

const string = {
  type: String,
  require: true,
  trim: true,
  lowercase: true,
  minLength: 2,
};

const BookSchema = new Schema({
  title: string,
  author: string,
});

const Book = model("Book", BookSchema);

export default Book;
