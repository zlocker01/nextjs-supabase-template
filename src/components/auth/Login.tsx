import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { z } from 'zod';
import { userFormSchema } from '@/schemas/userSchemas/userSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
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
 * @description Asynchronous function to handle form submission sign up and login.
 *
 * @param {z.infer<typeof userFormSchema>} values - The values submitted in the form.
 * @return {void} This function does not return anything.
 */
export const Login = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof userFormSchema>) {
    const supabase = createClient();

    const data = {
      email: values.email as string,
      password: values.password as string,
    };

    const { error } = await supabase.auth.signInWithPassword(data);
    if (error?.message === 'Invalid login credentials') {
      return toast({
        title: '¡Error inesperado! 😱',
        description: 'Este correo no está registrado.',
        variant: 'destructive',
      });
    } else if (error?.message === 'Email rate limit exceeded') {
      return toast({
        title: '¡Error inesperado! 😱',
        description:
          'Ocurrió un error inesperado, por favor intenta nuevamente.',
        variant: 'destructive',
      });
    } else {
      toast({
        title: '¡Listo! 👋',
        description: 'Bienvenido nuevamente.',
        variant: 'success',
      });
      router.push('/perfil');
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
                  Este es el correo con el que iniciarás sesión siempre.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Escribe tu contraseña aquí"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Tu contraseña de al menos 6 caracteres.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button size={'xs'} type="submit">
            Iniciar Sesión
          </Button>
        </form>
      </Form>
      <Link href="/registro" className="text-blue-500">
        Registrate
      </Link>
    </div>
  );
};
