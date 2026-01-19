import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { config } from "../configs/config";

const connectionString = `${config.DATABASE_URL}`;

// using prisma
const adapter = new PrismaPg({connectionString});
const prisma = new PrismaClient({adapter});

export default prisma;