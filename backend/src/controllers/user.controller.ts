import { Request, Response } from "express";
import { createResponse } from "../utils/response";

export const getMe = async (req: Request & {user?: any}, res: Response) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(404)
            .json(createResponse({message: "Not found", error: "User not found"}));
        }

        return res.status(200).json(createResponse({message: "Get user info successfully", data: user}));
    } catch (err: any) {
        console.log("Error when getting user info: ", err.message);
        return res.status(500).json(createResponse({message: "System error", error: err.message}));
    }
}