export function formatCurrency(amount: number, symbol: string, locale: string): string {
  if (amount === 0) return 'Free';
  return `${symbol}${new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(amount)}`;
}
