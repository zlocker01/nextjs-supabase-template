import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { LogoutButton } from '@/components/auth/LogoutButton';

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  console.log('🚀 ~ PrivatePage ~ data:', data);
  if (error || !data?.user) {
    redirect('/login');
  }

  return (
    <>
      <p>Hello {data.user.email}</p>
      <LogoutButton />)
    </>
  );
}
