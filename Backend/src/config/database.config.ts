
import {connect} from 'mongoose';
export const dbConnect=()=>{
    connect(process.env.MONGO_URI!).then(
        ()=>console.log("Connect Successfully"),
        (error)=>console.log(error)
    );
}
