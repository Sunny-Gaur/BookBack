import User from "../modal/User.modal.js";
import bcrypt from  "bcryptjs";
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashpassword= await bcrypt.hash(password,10);
        const createdUSer = new User({
            fullname:fullname,
            email:email,
            password:hashpassword,
        })
        await createdUSer.save();
        res.status(201).json({ message: "user is created successfully",createdUSer });

    } catch (error) {
        console.log(error);
    }
};


export const login=async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        const isMatch= await bcrypt.compare(password,user.password);
        if(!user||!isMatch){
            return res.status(400).json({message:"invalid username or password"})
        }
        else{
            res.status(200).json({message:"Login Successfully",user:{
                _id:user._id,
                fulname:user.fullname,
                email:user.email
            }})
        }
    }catch(error){
        console.log("Error"+error.message);
        res.status(500).json({message:"internal server error"})
    }
}