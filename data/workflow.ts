export interface WorkflowStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
  detail: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: 'w1',
    step: 1,
    title: 'Connect your data sources',
    description: 'Link databases, APIs, and SaaS tools in minutes with 200+ pre-built connectors.',
    icon: '🔌',
    detail: 'OAuth, API keys, webhooks — we handle the auth complexity for you.',
  },
  {
    id: 'w2',
    step: 2,
    title: 'Design your AI pipeline',
    description: 'Drag-and-drop workflow builder. Add AI models, conditions, transformers, and actions.',
    icon: '🎨',
    detail: 'Visual canvas with real-time validation and one-click test runs.',
  },
  {
    id: 'w3',
    step: 3,
    title: 'Deploy to production',
    description: 'One click to ship. Auto-scaling, monitoring, and alerts included out of the box.',
    icon: '🚀',
    detail: 'Blue-green deployments with instant rollback on any pipeline version.',
  },
  {
    id: 'w4',
    step: 4,
    title: 'Monitor & optimize',
    description: 'Real-time dashboards show latency, cost, and accuracy. AI suggests optimizations.',
    icon: '📈',
    detail: 'Automated cost attribution and anomaly detection on every run.',
  },
];
