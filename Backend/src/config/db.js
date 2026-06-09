import mongoose from "mongoose";

const connectDB = async () => {
  console.log("Connecting to db.....");
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;