import { z } from "zod";

const campaignSchema = z.object({
  name: z.string().min(1, "Campo obligatorio"),
  description: z.string().min(1, "Campo obligatorio"),
  start_date: z.string().refine(
    (date) => !isNaN(Date.parse(date)),
    { message: "Fecha de inicio no válida" }
  ),
  end_date: z.string().refine(
    (date) => !isNaN(Date.parse(date)),
    { message: "Fecha de fin no válida" }
  ),
}).refine(
  (data) => new Date(data.start_date) <= new Date(data.end_date),
  {
    message: "La fecha de inicio debe ser anterior o igual a la fecha de fin",
    path: ["start_date"],
  }
);

export default campaignSchema;