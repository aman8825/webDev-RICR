// Environnment variable load
import dotenv from 'dotenv';
dotenv.config();

//express
import  express from 'express';

//object
const app= express();

// API CREATION
app.get("/",(req,res)=>{
console.log("Default Get API Hit");
res.json({message:"Welcome to my first backend Project"})

})

app.post("/login",(req,res)=>{
    res.json({message:"Login Succesful"})
})
//process ki help se Environment variables access kar sakte ho
const port =process.env.PORT || 5000;
//listen create connection with port
//app.listen() is used to start your Express server and make it wait for incoming requests on a specific port.
app.listen(port,()=>{

    console.log("Server started on PORT:",port);
    
})
