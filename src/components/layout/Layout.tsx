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
      {/* Add margin-top to account for fixed header height (h-20 + top-bar h-8) */}
      <div className="mt-28">
        {!isHomePage && (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs />
          </div>
        )}
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;