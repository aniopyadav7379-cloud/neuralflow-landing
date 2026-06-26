export type ID = string | number;
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';

export interface BaseProps {
  className?: string;
  id?: string;
}

export interface WithChildren extends BaseProps {
  children: React.ReactNode;
}
