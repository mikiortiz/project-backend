import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ortizmichel390:Larissa2015@cluster0.viztkjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(">>> DB is conected<<<");
  } catch (error) {
    console.log(error);
  }
};
