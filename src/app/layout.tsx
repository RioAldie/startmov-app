import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Appbar } from '@/components/layout/navbar';
import { SearchProvider } from '@/context/searchContext';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StartMov',
  description: 'Find Best Movies',
  icons: '/icons/startmov-icon.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Appbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
