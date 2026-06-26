import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { workflowSteps } from '@/data/workflow';

export function Workflow() {
  return (
    <section id="workflow" className="py-24" aria-labelledby="workflow-heading">
      <Container>
        <header className="text-center mb-16">
          <Badge color="#00D4FF" className="mb-4">How It Works</Badge>
          <h2 id="workflow-heading" className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            From idea to production
            <br />
            <span className="text-gradient-indigo">in four steps</span>
          </h2>
        </header>

        <ol className="relative flex flex-col gap-0" aria-label="Workflow steps">
          {workflowSteps.map((step, idx) => (
            <li key={step.id} className="flex gap-8 group">
              {/* Step connector */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-[var(--cyan-glow)] flex items-center justify-center text-white font-bold text-lg shadow-glow-indigo">
                  {step.step}
                </div>
                {idx < workflowSteps.length - 1 && (
                  <div className="step-line w-0.5 flex-1 my-3" aria-hidden="true" />
                )}
              </div>

              {/* Content */}
              <div className={`pb-12 ${idx === workflowSteps.length - 1 ? 'pb-0' : ''}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl" aria-hidden="true">{step.icon}</span>
                  <h3 className="font-display font-semibold text-xl text-white">{step.title}</h3>
                </div>
                <p className="text-[var(--color-muted)] mb-2">{step.description}</p>
                <p className="text-sm text-[var(--color-faint)] glass-card rounded-xl px-4 py-3 inline-block">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
