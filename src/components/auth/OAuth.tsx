import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

/**
 * @description Asynchronous function to handle form submission sign up and login.
 *
 * @param {z.infer<typeof userFormSchema>} values - The values submitted in the form.
 * @return {void} This function does not return anything.
 */
export const OAuth = () => {
  const { toast } = useToast();

  async function onSubmit() {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    });
    if (error || !data.url) {
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
        description: 'Conecta con tu cuenta de Facebook.',
        variant: 'success',
      });
    }
  }

  return (
    <div className="w-100">
      <Button variant="facebook" size={'lg'} type="submit" onClick={onSubmit}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-facebook mx-2"
          viewBox="0 0 16 16"
        >
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
        </svg>
        Iniciar Sesión con Facebook
      </Button>
    </div>
  );
};
