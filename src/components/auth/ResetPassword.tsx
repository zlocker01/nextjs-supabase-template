'use client';
import { createClient } from '@/utils/supabase/client';
import { z } from 'zod';
import { resetPasswordSchema } from '@/schemas/userSchemas/resetPasswordSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Navigation } from './Navigation';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

/**
 * @description Asynchronous function to handle form reset password.
 *
 * @param {z.infer<typeof userFormSchema>} values - The values submitted in the form.
 * @return {void} This function does not return anything.
 */
export const ResetePassword = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
    const supabase = createClient();

    const data = {
      email: values.email as string,
    };

    const { error } = await supabase.auth.resetPasswordForEmail(data.email);
    if (error) {
      return toast({
        title: '¡Error inesperado! 😱',
        description: 'Intenta nuevamente.',
        variant: 'destructive',
      });
    } else {
      toast({
        title: '¡Listo! 👋',
        description: 'Hemos enviado un correo para restablecer tu contraseña.',
        variant: 'success',
      });
    }
  }

  return (
    <div className="border rounded-md p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Escribe tu correo aquí"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Este es el correo al que enviaremos tu enlace de
                  restablecimiento.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button size={'xs'} type="submit">
            Enviar Correo
          </Button>
        </form>
      </Form>
      <Navigation
        link1="Registrarse"
        href1="/registro"
        link2="Iniciar sesión"
        href2="/login"
      />
    </div>
  );
};
