import { Container } from './Container';
import { SITE_NAME } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] py-12 mt-20">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-[var(--cyan-glow)] flex items-center justify-center text-white font-bold text-xs">
              N
            </div>
            <span className="font-display font-semibold text-white">{SITE_NAME}</span>
          </div>
          <p className="text-sm text-[var(--color-faint)]">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <nav aria-label="Footer navigation" className="flex gap-6">
            {['Privacy', 'Terms', 'Security', 'Status'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-[var(--color-faint)] hover:text-[var(--color-soft)] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
