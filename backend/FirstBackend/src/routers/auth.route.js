import express from "express"
 import {
    loginUser,
    LogoutUser,
    RegisterUser
 } from "../controllers/auth.controller.js";
const router=express.Router();

router.post("/login",loginUser);
router.post("/register" ,RegisterUser);
router.post("/logout",LogoutUser);

export default router;