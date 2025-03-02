"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { cn } from '@/utils/cn';
import { Bars3Icon, BellIcon, UserGroupIcon } from '@heroicons/react/24/outline';
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
    href: '/investments/portfolio',
    tooltip: 'View our successful investments',
    badge: { type: 'new' as const, count: 25 }
  },
  {
    name: 'Current Offerings',
    href: '/offerings',
    tooltip: 'Explore our current investment opportunities',
    badge: { type: 'new' as const, count: 1 }
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
    name: 'Strategy',
    href: '/investments/strategy',
    tooltip: 'Learn about our investment approach',
    badge: { type: 'hot' as const }
  },
  {
    name: 'Portfolio',
    href: '/investments/portfolio',
    tooltip: 'View our investment portfolio',
  },
  {
    name: 'Case Studies',
    href: '/investments/case-studies',
    tooltip: 'Explore our success stories',
  },
  {
    name: 'Impact',
    href: '/investments/impact',
    tooltip: 'See our investment impact',
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
        {/* Top bar with contact info */}
        <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm py-2 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-white/90 text-sm">
              <Tooltip content="Send us an email">
                <Link
                  href="mailto:contact@szhholdings.com"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                >
                  <EnvelopeIcon className="h-4 w-4" />
                  <span className="hidden sm:inline">contact@szhholdings.com</span>
                </Link>
              </Tooltip>
              <Tooltip content="Call us">
                <Link
                  href="tel:+19493869749"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.8-3.2-8-8-8v2c3.7 0 6 2.3 6 6zm-4 0h2c0-2.4-1.6-4-4-4v2c1.3 0 2 .7 2 2z"/>
                  </svg>
                  <span className="hidden sm:inline">949.386.9749</span>
                </Link>
              </Tooltip>
            </div>
            <div className="flex items-center gap-4">
              <Tooltip content="Contact Us">
                <Link
                  href="/contact"
                  className="text-white/90 hover:text-white transition-colors duration-200"
                >
                  <UserGroupIcon className="h-5 w-5" />
                </Link>
              </Tooltip>
              <ThemeToggle />
            </div>
          </div>
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