import cors from "cors";
import express, { Application } from "express";
import authRoute from "./routers/auth.route";
import userRoute from "./routers/user.route";
import { config } from "./configs/config";
import { protect } from "./middlewares/auth.middleware";

// app setup
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: config.CLIENT_URL, credentials: true}));

// routes
app.use("/api/auth", authRoute);

app.use(protect);
app.use("/api/users", userRoute);

export default app;