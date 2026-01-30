import prisma from "./prisma";
import { betterAuth } from "better-auth";
import { username } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { sendVerificationEmail } from "../utils/email";
import { config } from "../configs/config";

export const auth = betterAuth({
    baseURL: config.BETTER_AUTH_URL,
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
    },
    emailVerification: {
        sendOnSignUp: true,
        sendVerificationEmail: async ({user, url}) => {
            const tokenPart = url.split('token=')[1];
            const token = tokenPart ? tokenPart.split('&')[0] : '';
            const apiVerifyUrl = `${config.BETTER_AUTH_URL}/verify-email?token=${token}`;
            await sendVerificationEmail(user.email, apiVerifyUrl);
        }
    },
    socialProviders: {
        facebook: {
            clientId: config.FB_CLIENT_ID as string,
            clientSecret: config.FB_CLIENT_SECRET as string,
            scope: ["email", "public_profile"],
        },
        github: {
            clientId: config.GITHUB_CLIENT_ID as string,
            clientSecret: config.GITHUB_CLIENT_SECRET as string,
        }
    },
    advanced: {
        cookiePrefix: "better-auth",
    },
    plugins: [
        username(),
    ]
});