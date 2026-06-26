export function calculateAnnualPrice(monthlyUSD: number, discountPct: number, rate: number): number {
  return Math.round(monthlyUSD * (1 - discountPct / 100) * rate);
}

export function calculateAnnualSavings(monthlyUSD: number, discountPct: number, rate: number): number {
  const monthly = Math.round(monthlyUSD * rate);
  const annual = calculateAnnualPrice(monthlyUSD, discountPct, rate);
  return (monthly - annual) * 12;
}
