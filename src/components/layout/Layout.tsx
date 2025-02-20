"use client";

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {!isHomePage && <Breadcrumbs />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;