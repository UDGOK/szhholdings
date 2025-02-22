"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Badge from '../ui/Badge';
import Drawer from '../ui/Drawer';

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

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  investmentItems: InvestmentItem[];
}

const MobileNav = ({ isOpen, onClose, navItems, investmentItems }: MobileNavProps) => {
  const [isInvestmentsOpen, setIsInvestmentsOpen] = useState(false);

  return (
    <Drawer isOpen={isOpen} onClose={onClose} position="right" size="sm">
      <div className="space-y-6">
        {/* Main Navigation */}
        <nav className="space-y-1">
          {navItems.map((item) => (
            !item.hasDropdown ? (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center justify-between px-3 py-2.5 text-[15px] font-normal text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={onClose}
              >
                <span>{item.name}</span>
                {item.badge?.type === 'new' && (
                  <Badge.Count count={item.badge.count ?? 0} max={9} size="sm" />
                )}
              </Link>
            ) : (
              <div key={item.name} className="space-y-1">
                <button
                  onClick={() => setIsInvestmentsOpen(!isInvestmentsOpen)}
                  className="flex items-center justify-between w-full px-3 py-2.5 text-[15px] font-normal text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  <span>{item.name}</span>
                  <ChevronRightIcon 
                    className={cn(
                      "h-4 w-4 text-gray-400 transition-transform duration-200",
                      isInvestmentsOpen && "rotate-90"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {isInvestmentsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-1"
                    >
                      {investmentItems.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="flex items-center justify-between px-3 py-2.5 text-[14px] text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200"
                          onClick={onClose}
                        >
                          <span>{subitem.name}</span>
                          {subitem.badge?.type === 'hot' && (
                            <Badge.Hot size="sm" />
                          )}
                          {subitem.badge?.type === 'beta' && (
                            <Badge.Beta size="sm" />
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          ))}
        </nav>

        {/* Divider */}
        <div className="h-px bg-gray-200" />

        {/* Contact Information */}
        <div className="space-y-4 px-3">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-900">Contact Us</h3>
            <div className="space-y-2">
              <Link
                href="mailto:contact@szhholdings.com"
                className="flex items-center gap-2 text-[14px] text-gray-600 hover:text-primary transition-colors duration-200"
                onClick={onClose}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                contact@szhholdings.com
              </Link>
              <Link
                href="tel:+19493869749"
                className="flex items-center gap-2 text-[14px] text-gray-600 hover:text-primary transition-colors duration-200"
                onClick={onClose}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
                </svg>
                949.386.9749
              </Link>
            </div>
          </div>

          <Link
            href="/about"
            className="block w-full py-2.5 text-center text-[14px] font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-md transition-all duration-300"
            onClick={onClose}
          >
            ABOUT SZH HOLDINGS
          </Link>
        </div>
      </div>
    </Drawer>
  );
};

export default MobileNav;