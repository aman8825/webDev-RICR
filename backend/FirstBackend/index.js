// Environnment variable load
import dotenv from 'dotenv';
dotenv.config();

//express
import  express from 'express';
import AuthRouter from "./src/routers/auth.route.js"
import PublicRouter from "./src/routers/public.route.js"
import connectDB from "./src/config/dbConnection.config.js"
//object
const app= express();


app.use(express.json())

app.use("/auth",AuthRouter);
app.use("/public",PublicRouter);
// API CREATION (Default API)

app.get("/",(req,res)=>{
console.log("Default Get API Hit");
res.json({message:"Welcome to my first backend Project"})

})

app.post("/login",(req,res)=>{
    res.json({message:"Login Succesful"})
})

// app.get("/logout",(req,res)=>{
//     res.json({message:"Logout Succesful"})
// })

// app.put("/update",(req,res)=>{
//     res.json({message:"Updste Succesful"})
// })

// app.post("/register",(req,res)=>{
//     res.json({message:"Register Succesful"})
// })

// app.post("/delete",(req,res)=>{
//     res.json({message:"Delete Succesful"})
// })
//process ki help se Environment variables access kar sakte ho
const port =process.env.PORT || 5000;
//listen create connection with port
//app.listen() is used to start your Express server and make it wait for incoming requests on a specific port.
app.listen(port,()=>{

    console.log("Server started on PORT:",port);
    connectDB()
    
})
