import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

//export a function that connects to db

const db = () =>
{
    mongoose.connect(process.env.MONGO_URL)
    .then( () => 
    {
        console.log("Connected to mongodb");
    })
    .catch((err) =>
    {
        console.log("Error Connecting to mongoDB")
    });
}

export default db;

//MongoDB
//userID: maninagpure070
//password: jCVAkMBG3Y5mjKhl