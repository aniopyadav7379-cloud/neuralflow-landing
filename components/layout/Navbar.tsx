'use client';
import { useState, useEffect } from 'react';
import { Container } from './Container';
import { Button } from '@/components/ui/Button';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';
import { cn } from '@/lib/helpers';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass border-b border-[var(--border-subtle)] py-3' : 'bg-transparent py-5'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between gap-8" aria-label="Main navigation">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group" aria-label={SITE_NAME}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-[var(--cyan-glow)] flex items-center justify-center text-white font-bold text-sm shadow-glow-indigo group-hover:shadow-[0_0_24px_rgba(99,102,241,0.7)] transition-shadow duration-200">
              N
            </div>
            <span className="font-display font-bold text-lg text-white tracking-tight">
              {SITE_NAME}
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-muted)] hover:text-white hover:bg-[var(--color-surface-3)] transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Sign in</Button>
            <Button variant="primary" size="sm">Start free →</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-[var(--color-muted)] hover:text-white hover:bg-[var(--color-surface-3)] transition-all duration-200"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span className={cn('h-0.5 bg-current rounded transition-all duration-300', menuOpen && 'rotate-45 translate-y-2')} />
              <span className={cn('h-0.5 bg-current rounded transition-all duration-300', menuOpen && 'opacity-0')} />
              <span className={cn('h-0.5 bg-current rounded transition-all duration-300', menuOpen && '-rotate-45 -translate-y-2')} />
            </div>
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            menuOpen ? 'max-h-72 mt-4 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--color-surface-1)] p-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-[var(--color-soft)] hover:text-white hover:bg-[var(--color-surface-3)] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-[var(--border-subtle)] flex flex-col gap-2">
              <Button variant="ghost" size="sm" className="justify-center">Sign in</Button>
              <Button variant="primary" size="sm" className="justify-center">Start free →</Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
