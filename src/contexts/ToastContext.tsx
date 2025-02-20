"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
} from 'react';
import Toast, { ToastContainer, ToastType } from '../components/ui/Toast';

interface ToastOptions {
  type?: ToastType;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  icon?: ReactNode;
}

interface ToastContextType {
  showToast: (message: string, options?: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface Toast {
  id: number;
  message: string;
  options?: ToastOptions;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, options?: ToastOptions) => {
    setToasts((prev) => {
      const newId = prev.length > 0 ? Math.max(...prev.map(t => t.id)) + 1 : 0;
      return [...prev, { id: newId, message, options }];
    });
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            onClose={() => removeToast(toast.id)}
            {...toast.options}
          />
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

// Helper functions for common toast types
export function useToastHelpers() {
  const { showToast } = useToast();

  return {
    success: (message: string, options?: Omit<ToastOptions, 'type'>) =>
      showToast(message, { ...options, type: 'success' }),
    error: (message: string, options?: Omit<ToastOptions, 'type'>) =>
      showToast(message, { ...options, type: 'error' }),
    warning: (message: string, options?: Omit<ToastOptions, 'type'>) =>
      showToast(message, { ...options, type: 'warning' }),
    info: (message: string, options?: Omit<ToastOptions, 'type'>) =>
      showToast(message, { ...options, type: 'info' }),
  };
}