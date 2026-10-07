import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { companyData } from '@/data/company';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#030305',
};

export const metadata: Metadata = {
  title: `${companyData.name} • ${companyData.brandTagline} | Mobil Uygulama Vitrini`,
  description: `${companyData.name} - iOS ve Android platformları için geliştirilmiş yüksek performanslı ve kullanıcı odaklı mobil uygulamalar.`,
  keywords: [
    'KM Production',
    'Mobil Uygulama Stüdyosu',
    'Mobile App Studio',
    'iOS Uygulama Geliştirme',
    'Android Uygulama Geliştirme',
    'Dijital Ürün Tasarımı',
    'UI/UX Tasarım',
    'Mobil Portföy'
  ],
  authors: [{ name: companyData.name }],
  openGraph: {
    title: `${companyData.name} • Dijital Ürün & Mobil Uygulama Stüdyosu`,
    description: 'iOS ve Android için geliştirdiğimiz yeni nesil mobil uygulamaları keşfedin.',
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${companyData.name} • Mobile Studio`,
    description: 'Yeni nesil mobil ürün ve uygulama vitrini.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} dark scroll-smooth`}>
      <body className="min-h-screen w-full overflow-x-hidden bg-[#030305] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black flex flex-col justify-between">
        <Navbar />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
