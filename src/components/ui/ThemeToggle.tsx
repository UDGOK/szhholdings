"use client";

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/contexts/ThemeContext';
import Tooltip from './Tooltip';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <Tooltip content={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      <button
        onClick={toggleTheme}
        className="text-white hover:text-gray-300 transition-colors duration-200"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <MoonIcon className="h-4 w-4" />
        ) : (
          <SunIcon className="h-4 w-4" />
        )}
      </button>
    </Tooltip>
  );
}