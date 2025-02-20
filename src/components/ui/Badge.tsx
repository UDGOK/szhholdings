"use client";

import { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isAnimated?: boolean;
}

const variantStyles = {
  primary: 'bg-blue-100 text-blue-800',
  secondary: 'bg-gray-100 text-gray-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
  info: 'bg-indigo-100 text-indigo-800',
};

const sizeStyles = {
  sm: 'text-xs px-1.5 py-0.5',
  md: 'text-sm px-2 py-1',
  lg: 'text-base px-2.5 py-1.5',
};

const Badge = ({
  children,
  variant = 'primary',
  size = 'sm',
  className,
  isAnimated = false,
}: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        variantStyles[variant],
        sizeStyles[size],
        isAnimated && 'animate-pulse',
        className
      )}
    >
      {children}
    </span>
  );
};

Badge.displayName = 'Badge';

// Compound components for specific use cases
const NewBadge = ({ className, ...props }: Omit<BadgeProps, 'variant' | 'children'>) => (
  <Badge
    variant="success"
    className={cn('bg-green-50 text-green-700', className)}
    {...props}
  >
    New
  </Badge>
);
NewBadge.displayName = 'Badge.New';
Badge.New = NewBadge;

const BetaBadge = ({ className, ...props }: Omit<BadgeProps, 'variant' | 'children'>) => (
  <Badge
    variant="warning"
    className={cn('bg-yellow-50 text-yellow-700', className)}
    {...props}
  >
    Beta
  </Badge>
);
BetaBadge.displayName = 'Badge.Beta';
Badge.Beta = BetaBadge;

const HotBadge = ({ className, ...props }: Omit<BadgeProps, 'variant' | 'children'>) => (
  <Badge
    variant="error"
    className={cn('bg-red-50 text-red-700', className)}
    isAnimated
    {...props}
  >
    Hot
  </Badge>
);
HotBadge.displayName = 'Badge.Hot';
Badge.Hot = HotBadge;

const CountBadge = ({
  count,
  max = 99,
  className,
  ...props
}: Omit<BadgeProps, 'variant' | 'children'> & { count: number; max?: number }) => (
  <Badge
    variant="primary"
    className={cn('bg-blue-50 text-blue-700', className)}
    {...props}
  >
    {count > max ? `${max}+` : count}
  </Badge>
);
CountBadge.displayName = 'Badge.Count';
Badge.Count = CountBadge;

export default Badge;