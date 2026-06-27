import express from "express"
 import {
    loginUser,
    LogoutUser,
    RegisterUser
 } from "../controllers/auth.controller.js";

 import { sampleMiddleWare,sampleMiddleWare2 } from "../middlewares/auth.middleware.js";
const router=express.Router();

router.post("/login",sampleMiddleWare2,loginUser);
router.post("/register",sampleMiddleWare,sampleMiddleWare2 ,RegisterUser);
router.post("/logout",sampleMiddleWare,LogoutUser);

export default router;