import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'BrainRot MemeCoin',
  description: 'BrainRot MemeCoin lands with bold chaos, clear buy steps, meme-driven tokenomics, and a community-first vibe. Clear steps to join the chaos.',
  keywords: ['memecoin','brainrot','meme','buy crypto','tokenomics','community','cryptocurrency','landing page'],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'BrainRot MemeCoin — chaotic memecoin landing page for fans',
    description: 'BrainRot MemeCoin lands with bold chaos, clear buy steps, meme-driven tokenomics, and a community-first vibe. Clear steps to join the chaos.',
    type: 'website',
    url: '/',
    siteName: 'BrainRot MemeCoin',
    images: [{
      url: '/images/logo.svg',
      width: 1200,
      height: 630,
      alt: 'BrainRot MemeCoin — chaotic memecoin landing page for fans'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrainRot MemeCoin — chaotic memecoin landing page for fans',
    description: 'BrainRot MemeCoin lands with bold chaos, clear buy steps, meme-driven tokenomics, and a community-first vibe. Clear steps to join the chaos.',
    images: ['/images/logo.svg']
  },
  robots: {
    index: true,
    follow: true
  },
  icons: { icon: '/favicon.ico' }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`$\{interTight.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}