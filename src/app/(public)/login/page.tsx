'use client';
import { Title } from '@/components/Title';
import { MagicLinkAuth } from '@/components/auth/MagicLinkAuth';
import { InfoDialog } from '@/components/InfoDialog';
import { OAuth } from '@/components/auth/OAuth';

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:gap-3">
      <Title text={'Iniciar Sesión'} />
      <InfoDialog description="Utilizamos MagicLink para iniciar sesión. MagicLink es una forma moderna y más segura de acceder a tu cuenta sin necesidad de recordar contraseñas. Cada vez que desees iniciar sesión, recibirás un enlace único en tu correo electrónico." />
      <MagicLinkAuth />
      <OAuth />
    </div>
  );
};

export default page;
