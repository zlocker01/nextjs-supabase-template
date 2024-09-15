import { z } from 'zod';

export const newPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
      .regex(/[a-z]/, {
        message: 'La contraseña debe contener al menos una letra minúscula',
      })
      .regex(/[A-Z]/, {
        message: 'La contraseña debe contener al menos una letra mayúscula',
      })
      .regex(/\d/, {
        message: 'La contraseña debe contener al menos un número',
      })
      .regex(/[@]/, {
        message: 'La contraseña debe contener al menos un signo especial como "@"',
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });
