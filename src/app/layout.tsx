import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { GlobalModals } from '@/components/modals/GlobalModals';
import { ModalProvider } from '@/context/ModalContext';
import { DEALERSHIP } from '@/config/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${DEALERSHIP.name} | Authorized TATA Motors Dealership in Bangalore`,
  description: `Explore new Tata cars (Curvv, Nexon, Harrier, Safari, Punch, Altroz, Tiago, Tigor, and Tata.ev), book a doorstep test drive, calculate on-road price, and find certified workshops across Bangalore.`,
  keywords: [
    'Tata Motors Bangalore',
    'Key Motors Tata',
    'Tata Curvv',
    'Tata Curvv EV',
    'Tata Nexon EV Bangalore',
    'Tata Showroom Mysore Road',
    'Tata Service Center Bangalore',
    'Book Tata Test Drive',
    'Tata on road price Bangalore',
  ],
  authors: [{ name: DEALERSHIP.name }],
  metadataBase: new URL('https://keymotors.in'),
  openGraph: {
    title: `${DEALERSHIP.name} | Authorized TATA Motors Dealership Bangalore`,
    description: DEALERSHIP.tagline,
    url: 'https://keymotors.in',
    siteName: DEALERSHIP.name,
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-accent selection:text-white`}>
        <ModalProvider>
          <Header />
          <main className="flex-1 pb-16 sm:pb-0">{children}</main>
          <Footer />
          <GlobalModals />
          <FloatingActions />
        </ModalProvider>
      </body>
    </html>
  );
}
