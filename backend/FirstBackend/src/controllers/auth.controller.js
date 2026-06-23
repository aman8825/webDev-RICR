import User from "../models/user.model.js"

export const RegisterUser= async(req,res)=>{
    try {
        const {fullName,email,password,phone,gender,dob} =req.body;
        if(!fullName || !email || !password || !phone || !gender || !dob){
            res.status(400).json({message:"All Feilds Required"});
            return;
        }
        const existingUser= await User.findOne({email });
        if(existingUser){
             res.status(409).json({message:"Email Already Registered"});
             return;
        }
        

    } catch (error) {
        
    }
};


export const loginUser=(req,res)=>{
    res.json({message:"Login Successfull From Controller"})
}
export const LogoutUser=(req,res)=>{
    res.json({message:"Login Successfull From Controller"})
}
 