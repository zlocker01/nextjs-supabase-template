import { createClient } from '@/utils/supabase/client';
import { z } from 'zod';
import { userFormSchema } from '@/schemas/userSchemas/userSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Navigation } from './Navigation';

/**
 * @description Asynchronous function to handle form submission sign up and login.
 *
 * @param {z.infer<typeof userFormSchema>} values - The values submitted in the form.
 * @return {void} This function does not return anything.
 */
export const Password = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof userFormSchema>) {
    // setEmail(values.email);
    const supabase = createClient();
    console.log('🚀 ~ onSubmit ~ supabase:', supabase);

    const { data, error } = await supabase.auth.resetPasswordForEmail(
      values.email,
      {
        redirectTo: 'https://localhost:3000/nuevo-password',
      }
    );
    if (error) {
      console.error('❌ error!!! -->', error);
      return toast({
        title: '¡Error inesperado! 😱',
        description:
          'Ocurrió un error inesperado, por favor intenta nuevamente.',
        variant: 'destructive',
      });
    } else {
      toast({
        title: '¡Listo! 😎',
        description: 'Revisa tu correo para cambiar tu contraseña.',
        variant: 'success',
      });
      console.log('data --> 👁️', data);
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
                    placeholder="Correo de recuperación"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Escribe el correo al que enviaremos el enlace de recuperación
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
      <Navigation link1="Iniciar Sesión" link2="Registrarse" />
    </div>
  );
};
