"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { cn } from '@/utils/cn';
import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import ThemeToggle from '../ui/ThemeToggle';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Tooltip from '../ui/Tooltip';
import { useToastHelpers } from '@/contexts/ToastContext';

const navItems = [
  {
    name: 'Team',
    href: '/team',
    tooltip: 'Meet our experienced leadership team'
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
    tooltip: 'View our successful investments',
    badge: { type: 'new' as const }
  },
  {
    name: 'News',
    href: '/news',
    tooltip: 'Latest updates and press releases',
    badge: { type: 'new' as const, count: 3 }
  },
  {
    name: 'Contact',
    href: '/contact',
    tooltip: 'Get in touch with us'
  },
  {
    name: 'Investments',
    href: '/investments',
    hasDropdown: true,
    tooltip: 'Explore our investment opportunities'
  },
];

const investmentItems = [
  { 
    name: 'Stocks & ETFs',
    href: '/investments/stocks-etfs',
    tooltip: 'Explore our stock and ETF investment options',
    badge: { type: 'hot' as const }
  },
  { 
    name: 'Real Estate',
    href: '/investments/real-estate',
    tooltip: 'Discover real estate investment opportunities',
  },
  { 
    name: 'Fixed Income',
    href: '/investments/fixed-income',
    tooltip: 'Explore bonds and fixed-income securities',
  },
  { 
    name: 'Alternative Investments',
    href: '/investments/alternative',
    tooltip: 'Discover unique investment opportunities',
    badge: { type: 'beta' as const }
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toast = useToastHelpers();
  const router = useRouter();
  const welcomeShownRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!welcomeShownRef.current) {
      welcomeShownRef.current = true;
      toast.info('Welcome to SZH Holdings', {
        duration: 5000,
        icon: <BellIcon className="h-5 w-5" />,
        action: {
          label: 'Learn More',
          onClick: () => router.push('/about'),
        },
      });
    }
  }, [toast, router]);

  const handleNewsClick = () => {
    toast.success('3 new updates available', {
      duration: 4000,
      action: {
        label: 'View All',
        onClick: () => router.push('/news'),
      },
    });
  };

  return (
    <>
      <div className="fixed inset-x-0 top-0 h-[7rem] bg-gradient-to-b from-gray-900/80 to-transparent pointer-events-none z-40" />
      <header
        className={cn(
          'fixed w-full z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md'
            : 'bg-transparent'
        )}
      >
        {/* Top bar with notifications */}
        <div className="bg-primary/90 backdrop-blur-sm h-8 flex justify-end items-center gap-4 px-4 sm:px-6 lg:px-8">
          <ThemeToggle />
          <Tooltip content="View latest updates">
            <button
              onClick={handleNewsClick}
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              <BellIcon className="h-4 w-4" />
            </button>
          </Tooltip>
          <Tooltip content="Send us an email">
            <Link 
              href="mailto:contact@szhholdings.com"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              <EnvelopeIcon className="h-4 w-4" />
            </Link>
          </Tooltip>
        </div>

        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex-shrink-0 transition-transform duration-200 hover:scale-105">
              <Logo />
            </Link>
            
            {/* Desktop Navigation */}
            <DesktopNav 
              isScrolled={isScrolled}
              navItems={navItems}
              investmentItems={investmentItems}
            />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md transition-colors duration-200 hover:bg-gray-100/10"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Bars3Icon className={cn(
                "h-6 w-6",
                isScrolled ? "text-gray-900" : "text-white"
              )} />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        investmentItems={investmentItems}
      />
    </>
  );
};

export default Header;