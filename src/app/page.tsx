'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Smartphone, 
  Cpu, 
  Users, 
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Layers
} from 'lucide-react';
import { Hero } from '@/components/Hero';
import { StatsSection } from '@/components/StatsSection';
import { appsData } from '@/data/apps';

export default function Home() {
  const portals = [
    {
      title: 'Uygulamalarımız',
      badge: '3 Canlı Uygulama',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      description: 'App Store ve Google Play\'de yayında olan aktif mobil ürünlerimiz ve canlı ekran görüntüleri.',
      href: '/uygulamalar',
      icon: Smartphone,
      ctaText: 'Ürünleri İncele',
      highlight: true
    },
    {
      title: 'Hizmetlerimiz',
      badge: 'Uçtan Uca',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      description: 'iOS & Android native geliştirme, UI/UX etkileşim tasarımı, bulut altyapı ve ASO mağaza lansmanı.',
      href: '/hizmetler',
      icon: Cpu,
      ctaText: 'Yetkinlikleri Gör',
      highlight: false
    },
    {
      title: 'Hakkımızda',
      badge: 'Stüdyo',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      description: 'KM Production stüdyo manifestosu, bağımsız üretim yaklaşımımız ve temel mühendislik ilkelerimiz.',
      href: '/hakkimizda',
      icon: Users,
      ctaText: 'Stüdyoyu Tanı',
      highlight: false
    },
    {
      title: 'İletişim & Teklif',
      badge: '2-4 Saat Yanıt',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      description: 'Yeni mobil projenizin kapsamını, yol haritasını ve tahmini bütçesini stüdyomuzla planlayın.',
      href: '/iletisim',
      icon: MessageSquare,
      ctaText: 'Mesaj Gönder',
      highlight: false
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#030305] text-slate-100 flex flex-col justify-between">
      
      {/* 1. HERO SECTION (With Live Interactive Device Preview) */}
      <Hero />

      {/* 2. DEDICATED PORTAL NAVIGATION HUB (4 DIRECT BUTTON CARDS) */}
      <section className="relative py-12 sm:py-16 bg-studio-grid border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-zinc-300 text-[11px] sm:text-xs font-mono mb-3">
              <Layers size={13} className="text-zinc-400" />
              <span>STÜDYO SAYFALARI & ERİŞİM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Keşfetmek İstediğiniz Alanı Seçin
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Aşağıdaki butonlara tıklayarak stüdyomuzun özel sayfalarına doğrudan ulaşabilirsiniz.
            </p>
          </div>

          {/* 4 Clean Portal Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {portals.map((portal, idx) => {
              const Icon = portal.icon;
              return (
                <Link
                  key={portal.title}
                  href={portal.href}
                  className={`group relative p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    portal.highlight
                      ? 'bg-zinc-900/90 border-white/20 hover:border-white/40 shadow-xl'
                      : 'bg-zinc-950/70 border-white/[0.08] hover:border-white/20 shadow-lg'
                  }`}
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                        <Icon size={20} />
                      </div>
                      <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${portal.badgeColor}`}>
                        {portal.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                      {portal.title}
                    </h3>

                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-normal">
                      {portal.description}
                    </p>
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">
                    <span>{portal.ctaText}</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. STUDIO DNA STRIP */}
      <StatsSection />

    </div>
  );
}
