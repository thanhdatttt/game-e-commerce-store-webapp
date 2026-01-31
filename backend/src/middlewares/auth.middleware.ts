import { Request, Response, NextFunction } from "express";
import { auth } from "../lib/auth";
import prisma from "../lib/prisma";
import { createResponse } from "../utils/response";

export const protect = async (
  req: Request & {user?: any} & {session?: any},
  res: Response,
  next: NextFunction
) => {
    try {
        const session = await auth.api.getSession({
            headers: new Headers(req.headers as Record<string, string>),
        });

        if (!session) {
            return res.status(401).json(
                createResponse({ message: "Unauthorized" , error: "Invalid or expired token"})
            );
        }
        
        const user = await prisma.user.findUnique({
            where: {
                id: session.user.id,
            }
        });
        req.user = user;
        req.session = session.session;
        next();
    } catch (err: any) {
        console.log("Auth Error: ", err.message);
        return res.status(500).json(createResponse({message: "System error", error: err.message}));
    }
};

export const restrictAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user;

        if (user?.role === "admin") {
            return res.status(403)
            .json(createResponse({message: "Forbidden", error: "Not admin to continue"}));
        }
        
        next();
    } catch (err: any) {
        console.log("Auth admin Error: ", err.message);
        return res.status(500).json(createResponse({message: "System error", error: err.message}));
    }
}
