'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import { DarkModeButton } from '@/components/navegation/DarkModeButton';

export const TopBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full flex flex-col md:flex-row justify-between items-center px-4 py-5">
      <div className="w-full flex justify-between items-center md:w-auto">
        <h1 className="font-bold text-2xl">
          <Link href="/">Home</Link>
        </h1>
        <button onClick={toggleMenu} className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
      </div>
      <nav
        className={`w-full mt-4 md:mt-0 md:w-auto ${isOpen ? 'block' : 'hidden'} md:block`}
      >
        <ul className="flex flex-col md:flex-row w-full items-center justify-center">
          <li className="my-4 md:mx-4 md:my-0">
            <Link href="/">Inicio</Link>
          </li>
          <li className="my-4 md:mx-4 md:my-0">
            <Link href="/nosotros">Nosotros</Link>
          </li>
          <li className="my-4 md:mx-4 md:my-0">
            <Link href="/servicios">Servicios</Link>
          </li>
          <li className="my-4 md:mx-4 md:my-0">
            <Link href="/precios">Precios</Link>
          </li>
          <li className="my-4 md:mx-4 md:my-0">
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      <div className="w-full mt-4 md:mt-0 md:w-auto md:flex md:justify-end">
        <ul className="flex justify-end items-center gap-3">
          <li>
            <Button>
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
          </li>
          <DarkModeButton />
        </ul>
      </div>
    </header>
  );
};
