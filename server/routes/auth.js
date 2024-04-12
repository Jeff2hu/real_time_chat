import express from "express";
import { signUp, login, logout } from "../controllers/auth.js";

const router = express.Router();

router.post("/signUp", signUp);
router.post("/login", login);
router.post("/logout", logout);

export default router;