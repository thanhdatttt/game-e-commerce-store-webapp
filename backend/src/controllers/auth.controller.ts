import { Request, Response } from "express";
import { createResponse } from "../utils/response";
import { auth } from "../lib/auth";
import { regex } from "../utils/regex";

export const signUp = async (req: Request, res: Response) => {
    try {
        const {username, email, password} = req.body;
        if (!username || !email || !password) {
            return res.status(400)
            .json(createResponse({message: "Bad request", error: "Missing fields"}));
        }

        const result = await auth.api.signUpEmail({
            body: {
                name: username,
                username: username,
                email,
                password,
            },
            headers: new Headers(req.headers as Record<string, string>),
            asResponse: true,
        });

        result.headers.forEach((value, key) => {
            res.setHeader(key, value);
        });
        const data = await result.json();

        return res.status(201).json(createResponse({message: "Signup successfully", data: data.user})); 
    } catch (err: any) {
        console.log("Error when signing up: ", err.message);

        if (err.statusCode !== 500) {
            return res.status(err.statusCode)
            .json(createResponse({message: err.status, error: err.message}));
        }
        return res.status(500).json(createResponse({message: "System error", error: err.message}));
    }
}

export const verifyEmail = async (req: Request, res: Response) => {
    try {
        const { token } = req.query;
        if (!token) {
            return res.status(400)
            .json(createResponse({message: "Bad request", error: "Missing token"}));
        }

        const result = await auth.api.verifyEmail({
            query: {
                token: token as string,
            },
        });

        return res.status(200).json(createResponse({message: "Email verified", data: result}));
    } catch (err: any) {
        console.log("Error when verifying email: ", err.message);
        return res.status(500).json(createResponse({message: "System error", error: err.message}));
    }
}

export const signIn = async (req: Request, res: Response) => {
    try {
        const {usernameOrEmail, password} = req.body;
        if (!usernameOrEmail || !password) {
            return res.status(400)
            .json(createResponse({message: "Bad request", error: "Missing fields"}));
        }

        const isEmail = regex.email.test(usernameOrEmail);
        let result;
        if (isEmail) {
            result = await auth.api.signInEmail({
                body: {
                    email: usernameOrEmail,
                    password: password,
                },
                headers: new Headers(req.headers as Record<string, string>),
                asResponse: true,
            });
        } else {
            result = await auth.api.signInUsername({
                body: {
                    username: usernameOrEmail,
                    password: password,
                },
                headers: new Headers(req.headers as Record<string, string>),
                asResponse: true,
            });
        }

        result.headers.forEach((value, key) => {
            res.setHeader(key, value);
        });
        const data = await result.json();
        
        return res.status(200).json(createResponse({message: "Signin successfully", data: data.user}));
    } catch (err: any) {
        console.log("Error when signing in: ", err.message);

        if (err.statusCode !== 500) {
            return res.status(err.statusCode)
            .json(createResponse({message: err.status, error: err.message}));
        }

        return res.status(500).json(createResponse({message: "System error", error: err.message}));
    }
}

export const signOut = async (req: Request, res: Response) => {
    try {
        const result = await auth.api.signOut({
            headers: new Headers(req.headers as Record<string, string>),
            asResponse: true,
        });

        const setCookieHeaders = result.headers.getSetCookie(); 
        if (setCookieHeaders.length > 0) {
            res.setHeader("Set-Cookie", setCookieHeaders);
        }
        result.headers.forEach((value, key) => {
            if (key.toLowerCase() !== "set-cookie") {
                res.setHeader(key, value);
            }
        });

        return res.status(200).json(createResponse({ message: "Signout successfully" }));
    } catch (err: any) {
        console.log("Error when signing out: ", err.message);

        if (err.statusCode !== 500) {
            return res.status(err.statusCode)
            .json(createResponse({message: err.status, error: err.message}));
        }

        return res.status(500).json(createResponse({message: "System error", error: err.message}));
    }
}

export const signInSocial = async (req: Request, res: Response) => {
    try {
        const { provider } = req.params;

        const result = await auth.api.signInSocial({
            body: {
                provider: provider as string,
                callbackURL: "/",
            },
            headers: new Headers(req.headers as Record<string, string>),
            asResponse: true,
        });

        result.headers.forEach((value, key) => {
            res.setHeader(key, value);
        });
        const data = await result.json();

        return res.status(200).json(createResponse({
            message: "Redirecting to social provider",
            data: data
        }));
    } catch (err: any) {
        console.log("Error when signing in: ", err.message);

        if (err.statusCode !== 500) {
            return res.status(err.statusCode)
            .json(createResponse({message: err.status, error: err.message}));
        }

        return res.status(500).json(createResponse({message: "System error", error: err.message}));
    } 
}