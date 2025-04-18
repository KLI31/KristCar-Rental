import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Mínimo 2 caracteres").max(50),
  cv: z
    .string()
    .regex(/^\d+$/, "Debe ser numérico")
    .min(2, "Mínimo 2 dígitos")
    .max(4, "Máximo 4 dígitos"),
  transmission: z.enum(["manual", "automatic"]).default("manual"),
  people: z.string().regex(/^[2-7]$/, "Solo valores 2-7"),
  photo: z.string().url("URL inválida").min(1, "Requerido"),
  engine: z.enum(["gasoil", "diesel", "electric", "hybrid"]).default("gasoil"),
  type: z.enum(["sedan", "suv", "familiar", "luxe"]).default("sedan"),
  priceDay: z
    .string()
    .regex(/^\d+$/, "Debe ser número")
    .min(2, "Mínimo 2 dígitos")
    .max(5, "Máximo 5 dígitos"),
  isPublish: z.boolean(),
});
