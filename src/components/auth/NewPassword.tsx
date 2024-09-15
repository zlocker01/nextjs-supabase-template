import { createClient } from '@/utils/supabase/client';
import { z } from 'zod';
import { newPasswordSchema } from '@/schemas/userSchemas/newPasswordSchema';
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

/**
 * @description Asynchronous function to handle form submission and set a new password.
 *
 * @param {z.infer<typeof newPasswordSchema>} values - The values submitted in the form.
 * @return {void} This function does not return anything.
 */
export const NewPassword = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(values: z.infer<typeof newPasswordSchema>) {
    const supabase = createClient();

    // Actualizamos la contraseña del usuario
    const { error } = await supabase.auth.updateUser({ password: values.password });

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
        description: 'Tu contraseña ha sido actualizada exitosamente.',
        variant: 'success',
      });
    }
  }

  return (
    <div className="border rounded-md p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Campo de nueva contraseña */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nueva Contraseña</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Escribe tu nueva contraseña"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Ingresa una contraseña de al menos 6 caracteres.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Campo de confirmación de contraseña */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar Contraseña</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Repite tu contraseña"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Repite tu contraseña.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button size={'xs'} type="submit">
            Actualizar Contraseña
          </Button>
        </form>
      </Form>
    </div>
  );
};