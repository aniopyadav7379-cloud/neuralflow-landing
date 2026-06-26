import { HeroContent } from './HeroContent';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 bg-hero grid-bg overflow-hidden"
      aria-label="Hero section"
    >
      {/* Glow orbs */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[var(--cyan-glow)]/5 blur-[100px]" />
      </div>
      <HeroContent />
    </section>
  );
}
