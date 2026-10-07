'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, CheckCircle, ShieldCheck, Flame } from 'lucide-react';
import { companyData } from '@/data/company';

export const StatsSection: React.FC = () => {
  const items = [
    {
      title: 'iOS & Android Native',
      subtitle: 'Apple App Store ve Google Play standartlarında tam uyumlu mimari.',
      icon: Smartphone
    },
    {
      title: 'Canlı Yayında 3 Ürün',
      subtitle: 'Gerçek kullanıcılar tarafından günlük kullanılan aktif mağaza uygulamaları.',
      icon: CheckCircle
    },
    {
      title: '6+ Yıl Üretim Deneyimi',
      subtitle: 'Mobil arayüz, performans optimizasyonu ve ürün yönetimi uzmanlığı.',
      icon: Flame
    },
    {
      title: 'Gizlilik & NDA Standartları',
      subtitle: 'Tüm projelerinizde fikri mülkiyet ve veri güvenliği önceliğimizdir.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="relative border-y border-white/[0.08] bg-[#050508] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-zinc-950/40 border border-white/[0.04] sm:border-transparent sm:bg-transparent"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 shrink-0 mt-0.5">
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5 sm:mt-1 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
