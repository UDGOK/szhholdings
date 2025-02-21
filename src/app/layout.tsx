"use client";

import { Inter } from 'next/font/google';
import Layout from '@/components/layout/Layout';
import { ToastProvider } from '@/contexts/ToastContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ToastProvider>
            <Layout>{children}</Layout>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
