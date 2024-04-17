import { Router } from "express";
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler'
import bcrypt from "bcrypt";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import { User, UserModel } from "../models/user.models";

const router = Router();

router.post("/login", asyncHandler(async (req, res) => {

    const { email, password } = req.body;//destructuring;
    const user = await UserModel.findOne({
        email
    })
    if (user&&(await bcrypt.compare(password,user.password))) {
        res.send(generateTokenResponse(user));
    }
    else {
        res.status(HTTP_BAD_REQUEST).send("User name or password is not valid!");
    }
}));

router.post("/register",asyncHandler(async(req,res)=>{
    const {name,email,password,dob}=req.body;
    const user=await UserModel.findOne({email});
    if(user){
        res.status(HTTP_BAD_REQUEST).send("User already exist!");
        return;
    }
    const encriptedPassword=await bcrypt.hash(password,10);
    const newUser:User={
        email:email.toLowerCase(),
        name,
        password:encriptedPassword,
        dob,
    };
    const dbUser=await UserModel.create(newUser);
    res.send(generateTokenResponse(dbUser));//after register it directly login
}));

const generateTokenResponse = (user: any) => {

    const token = jwt.sign({
        email: user.email,
        dob:user.dob,
        name:user.name
    }, process.env.JWT_SECRET!, {
        expiresIn: "30d"
    });
    console.log(user);
    return {
        id: user.id,
        email: user.email,
        name: user.name,
        dob: user.dob,
        token: token
    };
}
export default router;
