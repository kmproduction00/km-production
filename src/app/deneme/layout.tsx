import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diyarbakır Life 21 • Uygulamayı İndir',
  description: 'Diyarbakır\'ın dijital yaşam uygulaması. iOS ve Android cihazınıza hemen indirin.',
  icons: {
    icon: '/diyarbakir-life.png',
    shortcut: '/diyarbakir-life.png',
    apple: '/diyarbakir-life.png',
  },
  openGraph: {
    title: 'Diyarbakır Life 21 • Uygulamayı İndir',
    description: 'Diyarbakır\'ın dijital yaşam uygulaması. iOS ve Android cihazınıza hemen indirin.',
    url: 'https://km-production-ruddy.vercel.app/deneme',
    siteName: 'Diyarbakır Life 21',
    images: [
      {
        url: 'https://km-production-ruddy.vercel.app/diyarbakir-life.png',
        width: 512,
        height: 512,
        alt: 'Diyarbakır Life 21 Logo',
      },
    ],
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary',
    title: 'Diyarbakır Life 21 • Uygulamayı İndir',
    description: 'Diyarbakır\'ın dijital yaşam uygulaması. iOS ve Android cihazınıza hemen indirin.',
    images: ['https://km-production-ruddy.vercel.app/diyarbakir-life.png'],
  },
};

export default function DenemeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
