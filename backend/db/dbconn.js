import mongoose from "mongoose";

const connectDB = () => {
    const dbURL = "mongodb://127.0.0.1/crudops";
    mongoose
    .connect(dbURL)
    .then(() => {
      console.log("connection successful");
    })
    .catch((err) => console.log(err));
}


export default connectDB;