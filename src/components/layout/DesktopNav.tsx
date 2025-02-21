"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';
import Tooltip from '../ui/Tooltip';
import Badge from '../ui/Badge';

interface BadgeType {
  type: 'hot' | 'beta' | 'new';
  count?: number;
}

interface NavItem {
  name: string;
  href: string;
  tooltip: string;
  hasDropdown?: boolean;
  badge?: BadgeType;
}

interface InvestmentItem {
  name: string;
  href: string;
  tooltip: string;
  badge?: Omit<BadgeType, 'new'>;
}

interface DesktopNavProps {
  isScrolled: boolean;
  navItems: NavItem[];
  investmentItems: InvestmentItem[];
}

const Ripple = ({ color = "rgba(255, 255, 255, 0.35)" }) => {
  return (
    <span className="absolute inset-0 overflow-hidden rounded-md">
      <span className="absolute inset-0 rounded-md bg-[rgba(255,255,255,0.1)] transition-opacity duration-500 hover:opacity-0" />
      <span
        className="absolute inset-0 rounded-md transition-transform duration-500 hover:scale-[2]"
        style={{
          background: `radial-gradient(circle at center, ${color} 0%, transparent 50%)`,
          opacity: 0,
        }}
      />
    </span>
  );
};

const DesktopNav = ({ isScrolled, navItems, investmentItems }: DesktopNavProps) => {
  const [isInvestmentsOpen, setIsInvestmentsOpen] = useState(false);

  return (
    <div className="hidden md:flex items-center space-x-14">
      {navItems.map((item) => (
        item.hasDropdown ? (
          <div
            key={item.name}
            className="relative group"
            onMouseEnter={() => setIsInvestmentsOpen(true)}
            onMouseLeave={() => setIsInvestmentsOpen(false)}
          >
            <Tooltip content={item.tooltip}>
              <button
                className={cn(
                  'text-[15px] font-normal tracking-wide transition-all duration-200 focus:outline-none group-hover:scale-105',
                  isScrolled
                    ? 'text-gray-900 hover:text-primary'
                    : 'text-white hover:text-gray-300'
                )}
              >
                {item.name}
              </button>
            </Tooltip>
            <AnimatePresence>
              {isInvestmentsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute left-0 mt-1 w-52 bg-white/90 backdrop-blur-sm shadow-lg border border-gray-100/20 rounded-lg py-1.5 z-50"
                >
                  {investmentItems.map((subitem) => (
                    <Tooltip key={subitem.name} content={subitem.tooltip} position="right">
                      <Link
                        href={subitem.href}
                        className="relative block px-5 py-2.5 text-[14px] text-gray-700 hover:text-primary transition-colors overflow-hidden group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="relative z-10">{subitem.name}</span>
                          {subitem.badge?.type === 'hot' && (
                            <Badge.Hot size="sm" />
                          )}
                          {subitem.badge?.type === 'beta' && (
                            <Badge.Beta size="sm" />
                          )}
                        </div>
                        <span className="absolute inset-0 bg-gray-50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </Link>
                    </Tooltip>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <Tooltip key={item.name} content={item.tooltip}>
            <Link
              href={item.href}
              className={cn(
                'relative text-[15px] font-normal tracking-wide transition-all duration-200 hover:scale-105 flex items-center gap-2',
                isScrolled
                  ? 'text-gray-900 hover:text-primary'
                  : 'text-white hover:text-gray-300'
              )}
            >
              {item.name}
              {item.badge?.type === 'new' && (
                <Badge.Count count={item.badge.count ?? 0} max={9} size="sm" />
              )}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform origin-left scale-x-0 transition-transform duration-300 hover:scale-x-100" />
            </Link>
          </Tooltip>
        )
      ))}

      <Tooltip content="Learn more about SZH Holdings">
        <Link
          href="/about"
          className="relative overflow-hidden group rounded-md bg-accent-blue text-white px-7 py-2.5 text-[14px] font-normal tracking-wide hover:bg-primary transition-all duration-300 hover:-translate-y-0.5"
        >
          <span className="relative z-10">ABOUT SZH HOLDINGS</span>
          <Ripple />
        </Link>
      </Tooltip>
    </div>
  );
};

export default DesktopNav;