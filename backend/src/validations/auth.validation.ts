import z from "zod";

export const userSignUpSchema = {
    body: z.object({
        username: z.string().min(3, "Username must be at least 3 characters").max(150),
        email: z.email("Email is invalid"),
        password: z.string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Must have uppercase character")
        .regex(/[a-z]/, "Must have lowercase character")
        .regex(/[0-9]/, "Must have number")
        .regex(/[@$!%*?&]/, "Must have at least 1 special character (@$!%*?&)"),
    }),
}

export const userSignInSchema = {
    body: z.object({
        usernameOrEmail: z.string().min(1, "Username or email is required"),
        password: z.string().min(1, "Password is required"),
    }),
}