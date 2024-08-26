import { z } from 'zod';

export const userFormSchema = z.object({
  email: z.string().email({ message: 'Ingresa un correo válido' }),
  password: z.string().min(6, { message: 'Ingresa una contraseña' }),
});
