import { Title } from '@/components/Title';
import { Navigation } from '@/components/auth/Navigation';

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:gap-3">
      <Title text={'Recuperar Contraseña'} />
      <Navigation
        link1="Registrarse"
        href1="/registro"
        link2="Iniciar sesión"
        href2="/login"
      />
    </div>
  );
};

export default page;
