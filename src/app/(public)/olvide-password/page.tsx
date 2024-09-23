import { Title } from '@/components/navegation/Title';
import { ResetePassword } from '@/components/auth/ResetPassword';

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:gap-3">
      <Title text={'Recuperar Contraseña'} />
      <ResetePassword />
    </div>
  );
};

export default page;
