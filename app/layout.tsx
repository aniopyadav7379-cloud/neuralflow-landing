import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'NeuralFlow — Next-Gen AI Data Automation Platform',
    template: '%s | NeuralFlow',
  },
  description:
    'Automate complex data workflows with AI. Build, deploy, and scale intelligent pipelines in minutes — no code required.',
  metadataBase: new URL('https://neuralflow.ai'),
  keywords: ['AI automation', 'data pipeline', 'workflow automation', 'machine learning', 'AI platform'],
  authors: [{ name: 'NeuralFlow' }],
  creator: 'NeuralFlow',
  openGraph: {
    type: 'website',
    siteName: 'NeuralFlow',
    title: 'NeuralFlow — Next-Gen AI Data Automation Platform',
    description:
      'Automate complex data workflows with AI. Build, deploy, and scale intelligent pipelines in minutes.',
    url: 'https://neuralflow.ai',
    images: [{ url: '/og/og-image.png', width: 1200, height: 630, alt: 'NeuralFlow Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@neuralflow',
    creator: '@neuralflow',
    title: 'NeuralFlow — Next-Gen AI Data Automation Platform',
    description: 'Automate complex data workflows with AI.',
    images: ['/og/og-image.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050816" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--color-space)] font-body antialiased overflow-x-hidden">
        {/* Page loader */}
        <div id="page-loader" aria-hidden="true">
          <div className="loader-ring" />
        </div>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                var loader = document.getElementById('page-loader');
                if (loader) {
                  loader.classList.add('hidden');
                  setTimeout(function(){ loader.style.display='none'; }, 220);
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
