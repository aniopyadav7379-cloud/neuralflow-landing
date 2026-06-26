import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/hero/Hero';
import { Stats } from '@/components/stats/Stats';
import { Features } from '@/components/features/Features';
import { Workflow } from '@/components/workflow/Workflow';
import { Pricing } from '@/components/pricing/Pricing';
import { Testimonials } from '@/components/testimonials/Testimonials';
import { CTA } from '@/components/cta/CTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <Features />
        <Workflow />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
