import User from "../models/user.model.js";

export const RegisterUser = async (req, res,next) => {
  try {
    console.log(0);
    
    const { fullName, email, password, phone, gender, dob } = req.body;
    if (!fullName || !email || !password || !phone || !gender || !dob) {
         console.log(1);
    //   res.status(400).json({ message: "All Feilds Required" });
    const error=new Error("All fiels Required")
    error.statusCode(400)
      return next(error);
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {

    //   res.status(409).json({ message: "Email Already Registred" });
    //   return;
    const error=new Error("Email Already Registred")
    error.statusCode(409)
      return next(error);
    }

    //create profile of firt later
    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase}`;
    const photo = {
      url: photoUrl,
      publicId: null,
    };
    //create new user
    const newUser = await User.create({
      fullName,
      email,
      password,
      phone,
      gender,
      dob,
      photo,
    });
    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const loginUser = (req, res) => {
  res.json({ message: "Login Successfull From Controller" });
};
export const LogoutUser = (req, res) => {
  res.json({ message: "Login Successfull From Controller" });
};
