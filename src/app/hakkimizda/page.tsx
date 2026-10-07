'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  MapPin, 
  Mail, 
  ShieldCheck, 
  Flame, 
  ArrowRight,
  Sparkles,
  Smartphone,
  CheckCircle2
} from 'lucide-react';
import { companyData } from '@/data/company';
import { StatsSection } from '@/components/StatsSection';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-24 bg-studio-grid">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] h-[280px] sm:h-[450px] bg-blue-600/[0.07] blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-300 text-[10px] sm:text-xs font-mono mb-3.5">
            <Users size={13} className="text-zinc-400" />
            <span>KM PRODUCTION HAKKINDA</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Bağımsız Mobil Ürün Stüdyosu
          </h1>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-zinc-400 max-w-xl leading-relaxed">
            Tasarım, mühendislik ve ürün stratejisini tek bir çatı altında birleştirerek yaşayan dijital ürünler üretiyoruz.
          </p>
        </div>

        {/* Studio DNA Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center mb-20">
          
          {/* Left Column: Official Studio Emblem Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-3xl bg-zinc-950 border border-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              
              {/* Studio Logo */}
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
          </div>

          {/* Right Column: Studio Manifesto & Principles */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Kullanıcıların Severek Kullandığı Mobil Deneyimler
            </h2>

            <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              {companyData.bio}
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

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/iletisim"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all shadow-md active:scale-98"
              >
                <Mail size={14} />
                <span>Ekibimizle İletişime Geçin</span>
              </Link>
              <Link
                href="/uygulamalar"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-zinc-300 font-medium text-xs sm:text-sm hover:bg-zinc-800 border border-white/10 transition-all"
              >
                <span>Ürünlerimizi İnceleyin</span>
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>

        </div>

        {/* Studio Metrics Strip */}
        <StatsSection />

      </div>
    </div>
  );
}
