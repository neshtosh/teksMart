import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/components/cart/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TeksMart - Kenya\'s Wholesale Tech Marketplace',
  description: 'Source vetted tech products with full supplier transparency, simplified invoicing, and embedded financing for SMEs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
        {children}
        <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}