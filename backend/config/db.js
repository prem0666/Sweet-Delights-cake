import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const url = process.env.data_base;
    await mongoose.connect(url);
    console.log("mongoose conect successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;
