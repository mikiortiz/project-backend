import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Debe ser un correo electrónico válido")
    .required("El correo electrónico es requerido"),
  password: Yup.string()
    .min(4, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es requerida"),
  username: Yup.string().required("El nombre de usuario es requerido"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Debe ser un correo electrónico válido")
    .required("El correo electrónico es requerido"),
  password: Yup.string().required("La contraseña es requerida"),
});
