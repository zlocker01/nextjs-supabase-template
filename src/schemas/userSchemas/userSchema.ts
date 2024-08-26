import { z } from 'zod';

export const userFormSchema = z.object({
  email: z.string().email({ message: 'Ingresa un correo válido' }),
  password: z
    .string()
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    .regex(/[a-z]/, {
      message: 'La contraseña debe contener al menos una letra minúscula',
    })
    .regex(/[A-Z]/, {
      message: 'La contraseña debe contener al menos una letra mayúscula',
    })
    .regex(/\d/, { message: 'La contraseña debe contener al menos un número' })
    .regex(/[@]/, {
      message:
        'La contraseña debe contener al menos un signo especial como "@"',
    }),
});
