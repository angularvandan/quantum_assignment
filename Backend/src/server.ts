import express from "express";
import {dbConnect} from "./config/database.config";
import userRouter from "./routers/user.router";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();
dbConnect();

const app=express();
app.use(express.json());

app.use(cors({//it is used to solve localhost:4200 communicate with 5000
    credentials:true,
    origin:["http://localhost:4200"]//cors tail to use 4200 to request
}));

app.use('/api/user',userRouter);

const PORT=3000;
app.listen(PORT,()=>{
    console.log('server running on ',PORT);
    
})