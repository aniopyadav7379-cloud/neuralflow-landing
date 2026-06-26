export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarInitials: string;
  avatarColor: string;
  rating: number;
  metric: string;
  metricLabel: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'We replaced 3 engineers worth of manual data processing with a single NeuralFlow pipeline. It runs 24/7 without babysitting.',
    author: 'Priya Sharma',
    role: 'CTO',
    company: 'FinStack',
    avatarInitials: 'PS',
    avatarColor: '#6366F1',
    rating: 5,
    metric: '340%',
    metricLabel: 'throughput increase',
  },
  {
    id: 't2',
    quote:
      'The custom model fine-tuning is the real deal. We trained on 10 years of customer support tickets and accuracy went from 67% to 94%.',
    author: 'Marcus Chen',
    role: 'Head of AI',
    company: 'Zendesk Partner',
    avatarInitials: 'MC',
    avatarColor: '#00D4FF',
    rating: 5,
    metric: '94%',
    metricLabel: 'classification accuracy',
  },
  {
    id: 't3',
    quote:
      'We evaluated 8 platforms. NeuralFlow was the only one that handled our 2M daily events without needing a dedicated ops team.',
    author: 'Anika Weber',
    role: 'Engineering Director',
    company: 'LogiTech GmbH',
    avatarInitials: 'AW',
    avatarColor: '#8B5CF6',
    rating: 5,
    metric: '2M+',
    metricLabel: 'events per day',
  },
];
