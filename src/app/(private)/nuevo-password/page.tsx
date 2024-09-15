'use client';
import { Title } from '@/components/Title';
import { NewPassword } from '@/components/auth/NewPassword';

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:gap-3">
      <Title text={'Nueva Contraseña'} />
      <NewPassword />
    </div>
  );
};

export default page;
