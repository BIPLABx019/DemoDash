import express from "express";
import { signup, login } from "../controllers/authController.js";
import {getUserDetails} from "../controllers/getUserDetails.js"

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.get("/me",getUserDetails);

export default router;
