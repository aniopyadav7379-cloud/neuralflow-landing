export interface Partner {
  id: string;
  name: string;
  abbr: string;
}

export const partners: Partner[] = [
  { id: 'p1', name: 'OpenAI', abbr: 'OAI' },
  { id: 'p2', name: 'Google Cloud', abbr: 'GCP' },
  { id: 'p3', name: 'AWS', abbr: 'AWS' },
  { id: 'p4', name: 'Anthropic', abbr: 'ANT' },
  { id: 'p5', name: 'Snowflake', abbr: 'SNF' },
  { id: 'p6', name: 'Databricks', abbr: 'DBX' },
];
