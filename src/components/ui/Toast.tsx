"use client";

import { ReactNode, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
  icon?: ReactNode;
}

const toastStyles: Record<ToastType, string> = {
  success: 'bg-green-50 text-green-800 border-green-200',
  error: 'bg-red-50 text-red-800 border-red-200',
  warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
  info: 'bg-blue-50 text-blue-800 border-blue-200',
};

const Toast = ({
  message,
  type = 'info',
  duration = 5000,
  onClose,
  action,
  icon,
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for exit animation
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'fixed bottom-4 right-4 flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg max-w-md',
            toastStyles[type]
          )}
        >
          {/* Icon */}
          {icon && <span className="flex-shrink-0">{icon}</span>}

          {/* Content */}
          <div className="flex-grow min-w-0">
            <p className="text-sm font-medium truncate">{message}</p>
          </div>

          {/* Action Button */}
          {action && (
            <button
              onClick={action.onClick}
              className={cn(
                'px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200',
                type === 'success' && 'bg-green-100 hover:bg-green-200',
                type === 'error' && 'bg-red-100 hover:bg-red-200',
                type === 'warning' && 'bg-yellow-100 hover:bg-yellow-200',
                type === 'info' && 'bg-blue-100 hover:bg-blue-200'
              )}
            >
              {action.label}
            </button>
          )}

          {/* Close Button */}
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className="flex-shrink-0 p-1 rounded-full transition-colors duration-200 hover:bg-black/5"
          >
            <XMarkIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Toast Container to manage multiple toasts
interface ToastContainerProps {
  children: ReactNode;
}

export const ToastContainer = ({ children }: ToastContainerProps) => {
  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 space-y-4">
      {children}
    </div>
  );
};

export default Toast;