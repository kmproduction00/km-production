import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ezan Vakitleri (Hikaye - Dua) • Uygulamayı İndir',
  description: 'Diyanet uyumlu ezan saatleri, kıble pusulası, zikirmatik, dualar ve sesli dini hikayeler. iOS ve Android cihazınıza hemen indirin.',
  icons: {
    icon: '/ezan-vakti.png',
    shortcut: '/ezan-vakti.png',
    apple: '/ezan-vakti.png',
  },
  openGraph: {
    title: 'Ezan Vakitleri (Hikaye - Dua) • Uygulamayı İndir',
    description: 'Diyanet uyumlu ezan saatleri, kıble pusulası, zikirmatik, dualar ve sesli dini hikayeler. iOS ve Android cihazınıza hemen indirin.',
    url: 'https://km-production-ruddy.vercel.app/indir/ezan-vakti',
    siteName: 'Ezan Vakitleri (Hikaye - Dua)',
    images: [
      {
        url: 'https://km-production-ruddy.vercel.app/ezan-vakti.png',
        width: 512,
        height: 512,
        alt: 'Ezan Vakitleri Logo',
      },
    ],
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary',
    title: 'Ezan Vakitleri (Hikaye - Dua) • Uygulamayı İndir',
    description: 'Diyanet uyumlu ezan saatleri, kıble pusulası, dualar ve hikayeler. iOS ve Android için indirin.',
    images: ['https://km-production-ruddy.vercel.app/ezan-vakti.png'],
  },
};

export default function EzanVaktiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
