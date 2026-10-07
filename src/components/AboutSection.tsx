'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MapPin, 
  Mail, 
  ShieldCheck, 
  Flame,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { companyData } from '@/data/company';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 sm:py-28 md:py-32 bg-[#050508] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
          
          {/* Left Column: Official Studio Emblem Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm rounded-3xl bg-zinc-950 border border-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              
              {/* Studio Logo Container */}
              <div className="relative mx-auto w-32 h-32 rounded-3xl p-1 bg-zinc-900 border border-white/15 shadow-2xl mb-6 overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="KM Production" 
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-white tracking-tight">{companyData.name}</h3>
                <p className="text-xs text-zinc-400 font-mono mt-1">{companyData.brandTagline}</p>
                <p className="text-xs text-zinc-400 mt-2 flex items-center justify-center gap-1.5 font-normal">
                  <MapPin size={13} className="text-zinc-500" /> {companyData.location}
                </p>
              </div>

              {/* Status Indicator */}
              <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs">
                <span className="text-zinc-400">Stüdyo Durumu:</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Yeni Projelere Açık
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Resmi E-Posta:</span>
                <a href={`mailto:${companyData.email}`} className="text-white hover:text-zinc-300 font-mono text-[11px] underline transition-colors">
                  {companyData.email}
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Studio Manifesto & Principles */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-zinc-300 text-[11px] sm:text-xs font-mono mb-4">
              <Users size={13} className="text-zinc-400" />
              <span>STÜDYO MANİFESTOSU</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Kullanıcıların Elinden Düşürmeyeceği Mobil Ürünler Tasarlıyoruz.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              KM Production; tasarım, mühendislik ve ürün stratejisini bir araya getiren bağımsız bir mobil ürün stüdyosudur. Fikirden mağaza lansmanına kadar uçtan uca modern mobil uygulamalar üretiyor, kullanıcıların günlük hayatını kolaylaştıran dijital deneyimler geliştiriyoruz.
            </p>

            {/* Core Values */}
            <div className="mt-8 space-y-3.5 w-full">
              {companyData.values.map((val, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-950/60 border border-white/[0.06] hover:border-white/15 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{val.title}</h4>
                    <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed font-normal">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all shadow-md active:scale-98"
              >
                <Mail size={14} />
                <span>Ekibimizle İletişime Geçin</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
