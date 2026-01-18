import { config } from "./configs/config";
import app from "./app";
import http from "http";

const server = http.createServer(app);

// run server 
server.listen(config.PORT, () => {
    console.log(`Server is running on PORT: ${config.PORT}...`);
});