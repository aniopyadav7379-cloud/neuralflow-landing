import { cn } from '@/lib/helpers';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export function Badge({ children, className, color }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border',
        className
      )}
      style={color ? { color, borderColor: `${color}40`, background: `${color}15` } : undefined}
    >
      {children}
    </span>
  );
}
