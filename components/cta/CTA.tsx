import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export function CTA() {
  return (
    <section className="py-24" aria-label="Call to action">
      <Container>
        <div className="cta-gradient rounded-3xl border border-[var(--border-glow)] p-12 text-center relative overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-indigo-500/10 blur-[80px]" />
          </div>

          <div className="relative z-10">
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4">
              Ready to automate
              <br />
              <span className="text-gradient-indigo">everything?</span>
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-8 max-w-lg mx-auto">
              Join 12,000+ teams already running production AI workflows on NeuralFlow.
              Start free — no credit card needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Start building free →
              </Button>
              <Button variant="outline" size="lg">
                Talk to sales
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
