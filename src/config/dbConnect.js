import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect("...")
    console.log("Mongoose Connected !!!");
    } catch (error) {
        console.log("MongoDB Connection Failed : ", error.message);
        process.exit(1); //it terminate the code
    
    }
}