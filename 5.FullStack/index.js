import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js";
import cookieParser from "cookie-parser";



//import all routes from routes
import userRoutes from "./routes/user.routes.js";


dotenv.config()

const app = express()//we are giving powers to app

app.use(cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ['Content-Type', 'Authorization']
})
);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


const port = process.env.PORT || 4000;

//route
app.get('/', (req, res) => {
  res.send("Cohort !");
})

app.get("/manish", (req, res) =>
{
    res.send("Manish");
})

    
//connect to db
db()

//user routes
//users me jitne bhi routes hai vo sb excute ho jayenge
//api/v1/users/ -> itna patter or request url match ho gaya to vo request "userRoutes" trf transfer ho jayegi.
//http://127.0.0.1:4000/api/v1/users -> request will transfer to controllers userRoutes
app.use("/api/v1/users", userRoutes);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})