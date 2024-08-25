import { createClient } from '@/utils/supabase/server';
import { Button } from '../ui/button';

export const LogoutButton = () => {
  const supabase = createClient();
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    } else {
      window.location.reload();
    }
  }
  return <Button onClick={signOut}>Cerrar Sesión</Button>;
};
