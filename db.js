import mongoose from "mongoose";
// const MONGOURI="mongodb://localhost:27017/expense";
const MONGOURI="mongodb+srv://amk135721:rRMMnFfQmjdxSsGs@cluster0.w9buwnj.mongodb.net/expense"
const connectdb=async()=>{
    try {
        await mongoose.connect(MONGOURI);
        console.log("MONGO_DB CONNECTED")
    } catch (error) {
        console.log(error);
    }
};export default connectdb;
