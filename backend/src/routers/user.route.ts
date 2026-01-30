import express from "express";
import { getMe } from "../controllers/user.controller";

const router = express();

router.get("/me", getMe);

export default router;