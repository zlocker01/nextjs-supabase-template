import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'nombre de la app',
  description: 'app descripcion',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <TopBar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
