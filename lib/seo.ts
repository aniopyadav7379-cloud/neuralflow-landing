import type { Metadata } from 'next';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from './constants';

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    title: {
      default: `${SITE_NAME} — ${SITE_DESCRIPTION.slice(0, 60)}`,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@neuralflow',
      creator: '@neuralflow',
    },
    robots: { index: true, follow: true },
    ...overrides,
  };
}
