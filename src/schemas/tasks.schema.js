import * as Yup from "yup";

export const createTaskSchema = Yup.object().shape({
  title: Yup.string().required("El título es requerido"),
  description: Yup.string().required("La descripción es requerida"),
  date: Yup.date().nullable(),
});
