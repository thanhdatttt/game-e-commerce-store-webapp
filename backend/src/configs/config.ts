import dotenv from "dotenv";

dotenv.config();

// read env
export const config = {
    PORT: process.env.PORT || 5000,
    DATABASE_URL: process.env.DATABASE_URL,
    CLIENT_URL: process.env.CLIENT_URL,

    RAWG_API_URL: process.env.RAWG_API_URL,
    RAWG_API_KEY: process.env.RAWG_API_KEY,
};