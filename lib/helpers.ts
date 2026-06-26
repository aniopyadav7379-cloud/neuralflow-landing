export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function range(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i);
}
