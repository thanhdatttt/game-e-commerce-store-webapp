import express, { Application } from "express";
import cors from "cors";

// app setup
const app: Application = express();

app.use(cors());
app.use(express.json());

export default app;