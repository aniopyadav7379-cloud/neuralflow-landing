import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function HeroContent() {
  return (
    <Container className="relative z-10">
      <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">

        {/* Eyebrow badge */}
        <Badge color="#6366F1" className="animate-[fadeInDown_0.5s_ease-out_both]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--cyan-glow)] animate-pulse inline-block" />
          Now in Public Beta — 2,400 teams onboarded this month
        </Badge>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
          AI Automation
          <br />
          <span className="text-gradient">At Warp Speed</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-[var(--color-muted)] max-w-2xl leading-relaxed">
          Build production-grade AI pipelines in minutes. Chain models, APIs, and data sources
          visually — then ship with one click. No DevOps, no code, no waiting.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Button variant="primary" size="lg">
            Start building free
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
          <Button variant="outline" size="lg">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6 5.5l5 2.5-5 2.5V5.5z" fill="currentColor"/>
            </svg>
            Watch demo
          </Button>
        </div>

        {/* Social proof numbers */}
        <div className="flex flex-wrap justify-center gap-8 mt-6 pt-8 border-t border-[var(--border-subtle)] w-full">
          {[
            { value: '12K+', label: 'Active workflows' },
            { value: '4.2B', label: 'Tasks automated' },
            { value: '99.9%', label: 'Uptime SLA' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-2xl text-white">{stat.value}</div>
              <div className="text-sm text-[var(--color-faint)] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
