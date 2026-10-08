import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Neon Runner: Cyber Dash • Oyunu İndir',
  description: 'Siberpunk neon dünyasında 60 FPS aksiyon dolu sonsuz koşu oyunu. Android için hemen indirin.',
  icons: {
    icon: '/neon-runner.png',
    shortcut: '/neon-runner.png',
    apple: '/neon-runner.png',
  },
  openGraph: {
    title: 'Neon Runner: Cyber Dash • Oyunu İndir',
    description: 'Siberpunk neon dünyasında 60 FPS aksiyon dolu sonsuz koşu oyunu. Android için hemen indirin.',
    url: 'https://km-production-ruddy.vercel.app/indir/neon-runner',
    siteName: 'Neon Runner: Cyber Dash',
    images: [
      {
        url: 'https://km-production-ruddy.vercel.app/neon-runner.png',
        width: 512,
        height: 512,
        alt: 'Neon Runner Logo',
      },
    ],
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary',
    title: 'Neon Runner: Cyber Dash • Oyunu İndir',
    description: 'Siberpunk neon dünyasında 60 FPS aksiyon dolu koşu oyunu.',
    images: ['https://km-production-ruddy.vercel.app/neon-runner.png'],
  },
};

export default function NeonRunnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
