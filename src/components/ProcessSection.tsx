'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  PenTool, 
  Code, 
  Rocket, 
  ArrowRight,
  Workflow
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Ürün Kapsamı & Mimarisi',
      desc: 'Hedef kitleyi ve uygulamanın temel akışlarını belirleyip, ölçeklenebilir bir teknik mimari ve yol haritası kuruyoruz.'
    },
    {
      num: '02',
      title: 'UI/UX & İnteraktif Prototip',
      desc: 'Kullanıcıların elinden bırakmak istemeyeceği, modern ve akıcı arayüz tasarımlarını piksel kusursuzluğunda hazırlıyoruz.'
    },
    {
      num: '03',
      title: 'Temiz Kod & Performans Testi',
      desc: 'iOS ve Android için sıfır takılmalı, batarya dostu ve güvenlik testlerinden geçmiş temiz bir kod tabanı inşa ediyoruz.'
    },
    {
      num: '04',
      title: 'Mağaza Lansmanı & Büyüme',
      desc: 'App Store ve Google Play onay süreçlerini yönetip uygulamanızı canlıya alıyor, güncelleme ve ASO desteği sunuyoruz.'
    }
  ];

  return (
    <section id="process" className="relative py-20 sm:py-28 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-zinc-300 text-[11px] sm:text-xs font-mono mb-4">
            <Workflow size={13} className="text-zinc-400" />
            <span>ÜRETİM STANDARTLARI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Şeffaf ve Disiplinli Üretim Süreci
          </h2>

          <p className="mt-3.5 text-xs sm:text-base text-zinc-400 max-w-2xl font-normal">
            Sürprizlere yer bırakmayan, her aşaması test edilen ve zamanında teslim edilen stüdyo metodolojimiz.
          </p>
        </div>

        {/* 4 Step Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-3xl bg-zinc-950/70 border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-zinc-600 group-hover:text-zinc-300 transition-colors mb-3 sm:mb-4">
                  {item.num}
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                <span>AŞAMA {item.num}</span>
                <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
