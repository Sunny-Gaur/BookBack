import  mongoose  from "mongoose";

const Userscema=mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
})

const User=mongoose.model("User",Userscema);
export default User;