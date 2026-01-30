import express from "express";
import { auth } from "../lib/auth";
import { toNodeHandler } from "better-auth/node";
import { signIn, signUp, signOut, verifyEmail, signInSocial } from "../controllers/auth.controller";
import { validate } from "../middlewares/validate.middleware";
import { userSignInSchema, userSignUpSchema } from "../validations/auth.validation";

const router = express();

router.post("/signup", validate(userSignUpSchema), signUp);
router.post("/signin", validate(userSignInSchema), signIn);
router.post("/signout", signOut);
router.get("/verify-email", verifyEmail);
router.get("/social/:provider", signInSocial);

export default router;