'use client';
import { Title } from '@/components/Title';
import { SignUp } from '@/components/auth/SignUp';

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:gap-3">
      <Title text={'Nueva Contraseña'} />
      <SignUp />
    </div>
  );
};

export default page;
