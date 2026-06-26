export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  { id: 's1', value: 12000, suffix: '+', label: 'Active workflows', description: 'Running in production today' },
  { id: 's2', value: 99.9, suffix: '%', label: 'Uptime SLA', description: 'Across all enterprise accounts' },
  { id: 's3', value: 4.2, suffix: 'B', label: 'Tasks automated', description: 'And counting since 2022' },
  { id: 's4', value: 78, suffix: '%', label: 'Cost reduction', description: 'Average for migrated teams' },
];
