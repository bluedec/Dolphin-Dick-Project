import express from "express";
import delfinesRoutes from "./routes/delfines.routes.js";
import cors from "cors";

const app = express();
app.use(cors());

//middlewares
app.use(express.json());
app.use(delfinesRoutes);

export default app;
