"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Breadcrumbs = () => {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  if (paths.length === 0) return null;

  return (
    <nav className="flex px-4 sm:px-6 lg:px-8 py-3 bg-white/50 backdrop-blur-sm border-b border-gray-100/20">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link 
            href="/"
            className="text-gray-500 hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
          >
            <HomeIcon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join('/')}`;
          const isLast = index === paths.length - 1;
          const displayText = path.replace(/-/g, ' ');

          return (
            <li key={path} className="flex items-center">
              <ChevronRightIcon className="h-4 w-4 text-gray-400 mx-1" />
              {isLast ? (
                <span className="text-primary font-medium">
                  {capitalizeFirstLetter(displayText)}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-gray-500 hover:text-primary transition-colors duration-200"
                >
                  {capitalizeFirstLetter(displayText)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;