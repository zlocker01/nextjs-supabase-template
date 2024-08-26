'use client';
import { Title } from '@/components/Title';
import { Login } from '@/components/auth/Login';
import { OAuth } from '@/components/auth/OAuth';
// import { InfoDialog } from '@/components/InfoDialog';
// import { MagicLinkAuth } from '@/components/auth/MagicLinkAuth';

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:gap-3">
      <Title text={'Iniciar Sesión'} />
      {/* <InfoDialog description="Utilizamos MagicLink para iniciar sesión. MagicLink es una forma moderna y más segura de acceder a tu cuenta sin necesidad de recordar contraseñas. Cada vez que desees iniciar sesión, recibirás un enlace único en tu correo electrónico." /> */}
      <Login />
      {/* <MagicLinkAuth /> */}
      <OAuth />
    </div>
  );
};

export default page;
