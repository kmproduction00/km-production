'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Smartphone,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { appsData } from '@/data/apps';
import { PhoneMockup } from './PhoneMockup';
import { AppStoreBadge, GooglePlayBadge } from './StoreBadges';

export const Hero: React.FC = () => {
  const [selectedAppId, setSelectedAppId] = useState<string>(appsData[0].id);
  const currentApp = appsData.find(a => a.id === selectedAppId) || appsData[0];

  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 overflow-hidden bg-studio-grid">
      
      {/* Ambient Depth Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] h-[280px] sm:h-[450px] bg-blue-600/[0.08] blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-4 sm:right-10 w-60 sm:w-72 h-60 sm:h-72 bg-indigo-600/[0.05] blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Studio Moniker & Official Logo */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          
          {/* Official Studio Logo */}
          <div className="relative mb-5 group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-purple-600/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500 pointer-events-none" />
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl p-1 bg-zinc-900/90 border border-white/20 shadow-2xl overflow-hidden backdrop-blur-xl group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/logo.png" 
                alt="KM Production" 
                className="w-full h-full object-cover rounded-[20px]"
                loading="eager"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-300 text-[10px] sm:text-xs font-mono mb-4 sm:mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>KM PRODUCTION • BAĞIMSIZ MOBİL ÜRÜN STÜDYOSU</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Milyonların cebinde <span className="text-zinc-400 font-normal italic">kusursuz çalışan</span> mobil deneyimler.
          </h1>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Fikirden App Store ve Google Play yayınlanmasına kadar tüm süreci uçtan uca tasarlayan ve geliştiren bir mobil stüdyoyuz.
          </p>

          {/* Action CTAs Linking to Dedicated Pages */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <Link
              href="/uygulamalar"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 font-semibold text-xs sm:text-sm shadow-xl shadow-white/5 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Uygulamalarımızı Keşfedin</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/iletisim"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm border border-white/10 hover:border-white/20 transition-all cursor-pointer"
            >
              <span>Projeniz İçin Teklif Alın</span>
              <ChevronRight size={14} className="text-zinc-500" />
            </Link>
          </div>

        </div>

        {/* Interactive Device Showcase Stage */}
        <div className="relative max-w-5xl mx-auto rounded-3xl bg-zinc-950/90 border border-white/10 p-4 sm:p-7 md:p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          
          {/* Header Switcher Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-white/[0.08]">
            
            {/* Stage Title */}
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Smartphone size={14} className="text-zinc-300" />
              <span className="font-semibold text-white">Canlı Cihaz Önizlemesi:</span>
              <span className="text-zinc-500 hidden sm:inline">• Tıklayarak uygulamayı değiştirin</span>
            </div>

            {/* App Selectors */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 bg-zinc-900/90 p-1 rounded-2xl border border-white/10 w-full sm:w-auto">
              {appsData.map((app) => {
                const isSelected = selectedAppId === app.id;
                return (
                  <button
                    key={app.id}
                    onClick={() => setSelectedAppId(app.id)}
                    className={`relative px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'text-white bg-white/10 border border-white/15'
                        : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
                    }`}
                  >
                    {app.image ? (
                      <img 
                        src={app.image} 
                        alt={app.title} 
                        className="w-3.5 h-3.5 rounded-md object-cover border border-white/10" 
                      />
                    ) : (
                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-emerald-400' : 'bg-zinc-600'}`} />
                    )}
                    <span>{app.title}</span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Stage Body (Split Layout: Info Left, Device Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center pt-5 sm:pt-7">
            
            {/* Left: Current App Breakdown */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4 sm:space-y-5 order-2 lg:order-1">
              
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 text-[10px] sm:text-[11px] font-mono">
                    {currentApp.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] sm:text-[11px] font-medium flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-400" /> {currentApp.platformText}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {currentApp.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-zinc-300 font-medium mt-1">
                  {currentApp.tagline}
                </p>

                <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed font-normal">
                  {currentApp.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-1.5 pt-1">
                {currentApp.highlights.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action: Link to Dedicated App Hub + Store Badges */}
              <div className="pt-4 border-t border-white/[0.08] space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  {currentApp.links.appStore && (
                    <AppStoreBadge url={currentApp.links.appStore} size="sm" />
                  )}
                  {currentApp.links.playStore && (
                    <GooglePlayBadge url={currentApp.links.playStore} size="sm" />
                  )}
                </div>

                <Link
                  href="/uygulamalar"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-zinc-300 transition-colors"
                >
                  <span>Bu uygulamayı ve diğerlerini detaylı inceleyin</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>

            </div>

            {/* Right: Live Interactive Smartphone Mockup */}
            <div className="lg:col-span-6 flex items-center justify-center order-1 lg:order-2">
              <PhoneMockup app={currentApp} size="md" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
