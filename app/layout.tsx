import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ variable: '--font-montserrat', subsets: ['latin'] });
const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant', subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Origen & Fusión | Café, cacao y especialidad',
  description: 'Café de origen, cacao e infusiones botánicas preparados con intención.',
  openGraph: {
    title: 'Origen & Fusión',
    description: 'Café, cacao y especialidad. Ingredientes con origen, encuentros con intención.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Origen & Fusión — Café, cacao y especialidad' }],
    locale: 'es_GT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Origen & Fusión',
    description: 'Café, cacao y especialidad. Ingredientes con origen, encuentros con intención.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${montserrat.variable} ${cormorant.variable}`}>{children}</body></html>;
}
