import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center gap-6 bg-[var(--color-space)]">
      <h1 className="font-display font-bold text-6xl text-gradient">404</h1>
      <p className="text-[var(--color-muted)] text-lg">Page not found</p>
      <Button variant="primary" as="a" href="/" size="md">← Back home</Button>
    </main>
  );
}
