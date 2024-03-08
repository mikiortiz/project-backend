import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
// Importa el enrutador de autenticación
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
// Monta el enrutador de autenticación en la aplicación
app.use("/api", authRouter);

export default app;
