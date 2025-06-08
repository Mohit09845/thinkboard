import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB connected successfully")
    } catch (error) {
        console.error("Connection failed ", error);
        process.exit(1);
    }
}