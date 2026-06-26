import type { Feature } from '@/types/feature';

export const features: Feature[] = [
  {
    id: 'neural-engine',
    title: 'Neural Workflow Engine',
    description:
      'Build multi-step AI pipelines visually. Chain models, conditions, and APIs with zero code — then deploy to production in one click.',
    icon: '⚡',
    colSpan: 2,
    rowSpan: 1,
    accentColor: '#6366F1',
    tag: 'Core',
  },
  {
    id: 'real-time-sync',
    title: 'Real-time Data Sync',
    description:
      'Keep every tool in your stack synchronized. Live webhooks, event streams, and bidirectional integrations.',
    icon: '🔄',
    colSpan: 1,
    rowSpan: 1,
    accentColor: '#00D4FF',
    tag: 'Integrations',
  },
  {
    id: 'custom-models',
    title: 'Custom AI Models',
    description:
      'Fine-tune foundation models on your proprietary data. Deploy privately with full version control and rollback.',
    icon: '🧠',
    colSpan: 1,
    rowSpan: 2,
    accentColor: '#8B5CF6',
    tag: 'AI',
  },
  {
    id: 'smart-routing',
    title: 'Smart Task Routing',
    description:
      'Automatically balance load across model providers. Optimize for cost, speed, or quality based on task priority.',
    icon: '🎯',
    colSpan: 1,
    rowSpan: 1,
    accentColor: '#F59E0B',
    tag: 'Performance',
  },
  {
    id: 'analytics',
    title: 'Deep Analytics',
    description:
      'Every workflow run is instrumented. Latency, token usage, error rates, and cost attribution at the step level.',
    icon: '📊',
    colSpan: 2,
    rowSpan: 1,
    accentColor: '#10B981',
    tag: 'Observability',
  },
  {
    id: 'security',
    title: 'Enterprise Security',
    description:
      'SOC 2 Type II certified. Data never leaves your VPC. Role-based access, audit logs, and SAML SSO.',
    icon: '🔒',
    colSpan: 1,
    rowSpan: 1,
    accentColor: '#EF4444',
    tag: 'Security',
  },
];
