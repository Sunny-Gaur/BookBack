import  express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/book.route.js"
import userRoute from "./routes/user.route.js"

import cors from 'cors';
const app=express();
app.use(cors());
app.use(express.json())

dotenv.config();
let port=process.env.PORT||3000

const uri=process.env.MONOGODBURI;
// mongodb connection

try{
mongoose.connect(uri,{
useNewUrlParser:true,
useUnifiedTopology:true
});
console.log("connected to mongodb");


}catch(error){
    console.log("Error",error);
}

// deffining routes

app.use("/bookdata",bookRoute);
app.use("/users",userRoute);

// app.get("*",(req,res)=>{
//     res.send("NO page found check again");
// })

app.get("/bookdatas",(req,res)=>{
    console.log(res);
})
app.listen(port,()=>{
console.log("The server is connected");
})

