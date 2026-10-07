'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Layout, 
  Server, 
  Rocket, 
  CheckCircle2, 
  Cpu, 
  ArrowUpRight,
  Workflow,
  ArrowRight
} from 'lucide-react';
import { companyData } from '@/data/company';
import { ProcessSection } from '@/components/ProcessSection';

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-24 bg-studio-grid">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] h-[280px] sm:h-[450px] bg-blue-600/[0.07] blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-300 text-[10px] sm:text-xs font-mono mb-3.5">
            <Cpu size={13} className="text-zinc-400" />
            <span>MÜHENDİSLİK & YETKİNLİKLER</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Uçtan Uca Mobil Ürün Hizmetlerimiz
          </h1>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-zinc-400 max-w-xl leading-relaxed">
            Fikrinizi piyasada rekabet edebilecek, sıfır takılmalı ve lüks bir mobil ürüne dönüştürmek için sunduğumuz stüdyo yetkinlikleri.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 mb-20">
          
          {/* Bento 1: iOS & Android Core (Span 7) */}
          <div className="lg:col-span-7 rounded-3xl bg-zinc-950/80 border border-white/[0.08] hover:border-white/20 p-6 sm:p-8 flex flex-col justify-between transition-all group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-200 mb-5 group-hover:scale-105 transition-transform">
                <Smartphone size={22} />
              </div>
              
              <h3 className="text-xl font-bold text-white tracking-tight">
                iOS & Android Mobil Uygulama Geliştirme
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                Her iki platformda da en yüksek kare hızında (60-120 FPS), batarya dostu ve sıfır takılmalı yerel kullanıcı deneyimi sunan uygulamalar kodluyoruz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6 pt-5 border-t border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>Çapraz Platform & Native Uyum</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>Offline-First (Çevrimdışı) Mimari</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>Biyometrik Giriş (Face ID / Parmak İzi)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>Hızlı Başlatma & Düşük Bellek Tüketimi</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] text-zinc-400 font-mono">
              PERFORMANS MİMARİSİ
            </div>
          </div>

          {/* Bento 2: UI/UX & Product Design (Span 5) */}
          <div className="lg:col-span-5 rounded-3xl bg-zinc-950/80 border border-white/[0.08] hover:border-white/20 p-6 sm:p-8 flex flex-col justify-between transition-all group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-200 mb-5 group-hover:scale-105 transition-transform">
                <Layout size={22} />
              </div>
              
              <h3 className="text-xl font-bold text-white tracking-tight">
                UI/UX & Etkileşim Tasarımı
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                Kullanıcı alışkanlıklarını analiz ederek estetik, sezgisel ve parmak ucunda hissettiren modern ekranlar tasarlıyoruz.
              </p>

              <div className="space-y-2 mt-6 pt-5 border-t border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>Apple Human Interface & Material 3</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>Özel Spring & Mikro-Animasyonlar</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>Karanlık Mod (Dark Mode) Tasarımı</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] text-zinc-400 font-mono">
              PİKSEL HASSASİYETİ
            </div>
          </div>

          {/* Bento 3: Cloud & Backend (Span 5) */}
          <div className="lg:col-span-5 rounded-3xl bg-zinc-950/80 border border-white/[0.08] hover:border-white/20 p-6 sm:p-8 flex flex-col justify-between transition-all group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-200 mb-5 group-hover:scale-105 transition-transform">
                <Server size={22} />
              </div>
              
              <h3 className="text-xl font-bold text-white tracking-tight">
                Bulut & Güvenli Entegrasyonlar
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                Yüksek kullanıcı trafiğini sıfır kesintiyle karşılayan veritabanı, anlık bildirim ve ödeme sistemleri kuruyoruz.
              </p>

              <div className="space-y-2 mt-6 pt-5 border-t border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>Apple Pay & In-App Purchase Satın Alma</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>Anlık Push Notification Bildirimleri</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] text-zinc-400 font-mono">
              KESİNTİSİZ ALTYAPI
            </div>
          </div>

          {/* Bento 4: Store Launch & ASO (Span 7) */}
          <div className="lg:col-span-7 rounded-3xl bg-zinc-950/80 border border-white/[0.08] hover:border-white/20 p-6 sm:p-8 flex flex-col justify-between transition-all group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-200 mb-5 group-hover:scale-105 transition-transform">
                <Rocket size={22} />
              </div>
              
              <h3 className="text-xl font-bold text-white tracking-tight">
                Mağaza Yayın Yönetimi & ASO (Lansman)
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                Uygulamanızın App Store ve Google Play inceleme süreçlerini sıfır red ile onaylatıyor, arama sıralamasında üst sıralara çıkması için optimizasyon yapıyoruz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6 pt-5 border-t border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>App Store & Google Play İnceleme Yönetimi</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>Anahtar Kelime & ASO Optimizasyonu</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>Canlı Performans & Hata İzleme</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>Sürekli Sürüm & Güncelleme Desteği</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] text-zinc-400 font-mono">
              GLOBAL YAYINCILIK
            </div>
          </div>

        </div>

        {/* Process Section Inclusion */}
        <ProcessSection />

        {/* Bottom Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-zinc-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-white">Bir mobil proje fikriniz mi var?</h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">KM Production ekibiyle görüşerek projenizin yol haritasını ve bütçesini planlayın.</p>
          </div>
          <Link
            href="/iletisim"
            className="px-6 py-3.5 rounded-full bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all shrink-0 flex items-center gap-2"
          >
            <span>Teklif İsteyin</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
}
