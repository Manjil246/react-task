import mongoose from "mongoose";

export const connectToMongo = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to mongodb successfully")
    }catch(e){
        console.log(e)
    }
}