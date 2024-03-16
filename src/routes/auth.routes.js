import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validatorSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/schemas.validator.js";
const router = Router();

// Define las rutas utilizando las funciones importadas
router.post("/register", validatorSchema(registerSchema), register);
router.post("/login", validatorSchema(loginSchema), login);
router.post("/logout", logout);

router.get("/profile", authRequired, profile);

export default router;
