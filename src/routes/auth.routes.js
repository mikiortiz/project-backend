import { Router } from "express";
import {
  register,
  login,
  logout,
  perofile,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
const router = Router();

// Define las rutas utilizando las funciones importadas
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.get("/profile", authRequired, perofile);

export default router;
