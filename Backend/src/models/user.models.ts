import { Schema, model } from "mongoose";

export interface User {
    email: string;
    name: string;
    password: string;
    dob:string;
}
export const UserSchema = new Schema<User>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dob:{
        type:String,
        required:true
    }
},
    {
        timestamps: true,
        toJSON: {
            virtuals: true
        },
        toObject:{
            virtuals:true
        }
    });
export const UserModel=model<User>('user',UserSchema);