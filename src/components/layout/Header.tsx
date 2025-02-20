"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Tooltip from '../ui/Tooltip';
import { useToastHelpers } from '@/contexts/ToastContext';

const navItems = [
  { 
    name: 'About',
    href: '/about',
    tooltip: 'Learn more about our company and mission'
  },
  { 
    name: 'Team',
    href: '/team',
    tooltip: 'Meet our experienced leadership team'
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
    name: 'Investment Strategy',
    href: '/investments/strategy',
    tooltip: 'Understand our investment approach'
  },
  { 
    name: 'Portfolio',
    href: '/investments/portfolio',
    tooltip: 'View our current investments',
    badge: { type: 'hot' as const }
  },
  { 
    name: 'Case Studies',
    href: '/investments/case-studies',
    tooltip: 'Detailed analysis of our successful investments',
    badge: { type: 'beta' as const }
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [isHidden, setIsHidden] = useState(false);
  const toast = useToastHelpers();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update header background
      setIsScrolled(currentScrollY > 50);
      
      // Hide/show header based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show welcome toast on mount
  useEffect(() => {
    toast.info('Welcome to Ares Commercial Real Estate', {
      duration: 5000,
      icon: <BellIcon className="h-5 w-5" />,
      action: {
        label: 'Learn More',
        onClick: () => window.location.href = '/about',
      },
    });
  }, [toast]);

  const handleNewsClick = () => {
    toast.success('3 new updates available', {
      duration: 4000,
      action: {
        label: 'View All',
        onClick: () => window.location.href = '/news',
      },
    });
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          y: isHidden ? -100 : 0,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
        className={cn(
          'fixed w-full z-50 transition-colors duration-300',
          isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
        )}
      >
        {/* Top bar with notifications */}
        <div className="bg-primary/90 backdrop-blur-sm h-8 flex justify-end items-center gap-4 px-4 sm:px-6 lg:px-8">
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
              href="mailto:contact@arescre.com"
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
      </motion.header>

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