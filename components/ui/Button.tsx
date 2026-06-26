import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/helpers';
import type { Variant, Size } from '@/types/common';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-indigo-600 hover:bg-indigo-700 text-white border border-indigo-500 shadow-glow-indigo hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]',
  secondary:
    'bg-[var(--color-surface-3)] hover:bg-[var(--color-surface-2)] text-white border border-[rgba(99,102,241,0.25)] hover:border-[rgba(99,102,241,0.5)]',
  ghost:
    'bg-transparent hover:bg-[var(--color-surface-2)] text-[var(--color-muted)] hover:text-white',
  outline:
    'bg-transparent border border-[rgba(99,102,241,0.4)] text-[var(--indigo-light)] hover:bg-[rgba(99,102,241,0.1)]',
};

const sizeClasses: Record<Size, string> = {
  xs: 'px-3 py-1.5 text-xs rounded-md',
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm font-semibold rounded-xl',
  lg: 'px-8 py-4 text-base font-semibold rounded-xl',
  xl: 'px-10 py-5 text-lg font-semibold rounded-2xl',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isLoading, className, children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium cursor-pointer transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-space)]',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : null}
      {children}
    </button>
  )
);
Button.displayName = 'Button';
