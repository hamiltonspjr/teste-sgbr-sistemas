import { z } from "zod";

export const loginSchema = z.object({
  user: z.string().min(5, "username deve conter no mínimo 5 caracteres"),
  password: z.string().min(3, "senha deve conter no mínimo 3 caracteres"),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
