import { connect } from "mongoose";

const connectToMongoDb = async () => {
  try {
    await connect("mongodb://127.0.0.1:27017/graphql-app");
    return "Connect to mongoDB successfully!";
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectToMongoDb;
