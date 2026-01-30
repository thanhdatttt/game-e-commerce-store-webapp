import dotenv from "dotenv";

dotenv.config();

// read env
export const config = {
    // database and client url
    PORT: process.env.PORT || 5000,
    DATABASE_URL: process.env.DATABASE_URL,
    CLIENT_URL: process.env.CLIENT_URL,

    // game api
    RAWG_API_URL: process.env.RAWG_API_URL,
    RAWG_API_KEY: process.env.RAWG_API_KEY,

    // better auth
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,

    // facebook
    FB_CLIENT_ID: process.env.FB_CLIENT_ID,
    FB_CLIENT_SECRET: process.env.FB_CLIENT_SECRET,

    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,

    // email resend api
    RESEND_API_KEY: process.env.RESEND_API_KEY,
};