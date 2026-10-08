'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Smartphone,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { appsData } from '@/data/apps';
import { PhoneMockup } from './PhoneMockup';
import { AppStoreBadge, GooglePlayBadge } from './StoreBadges';

export const DeviceShowcaseSection: React.FC = () => {
  const [selectedAppId, setSelectedAppId] = useState<string>(appsData[0].id);
  const currentApp = appsData.find(a => a.id === selectedAppId) || appsData[0];

  return (
    <section id="live-preview" className="relative py-16 sm:py-24 md:py-28 bg-[#030305] border-t border-white/[0.08] overflow-hidden">
      
      {/* Ambient Depth Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[300px] sm:h-[500px] bg-blue-600/[0.06] blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-300 text-[10px] sm:text-xs font-mono mb-3.5 shadow-sm">
            <Smartphone size={13} className="text-emerald-400" />
            <span>İNTERAKTİF CİHAZ SİMÜLASYONU</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Canlı Cihaz Önizlemesi
          </h2>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-zinc-400 max-w-xl leading-relaxed">
            Uygulamalarımızın gerçek ekran görüntülerini, canlı oynanış videolarını ve mobil deneyimlerini doğrudan cihaz üzerinden test edin.
          </p>
        </div>

        {/* Interactive Device Showcase Stage */}
        <div className="relative max-w-5xl mx-auto rounded-3xl bg-zinc-950/90 border border-white/10 p-4 sm:p-7 md:p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          
          {/* Header Switcher Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-white/[0.08]">
            
            {/* Stage Title */}
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">İncelemek İstediğiniz Uygulama:</span>
            </div>

            {/* App Selectors (Prominent & Clear) */}
            <div className="flex flex-wrap items-center justify-center gap-2 bg-zinc-900/95 p-1.5 rounded-2xl border border-white/10 w-full sm:w-auto shadow-inner">
              {appsData.map((app) => {
                const isSelected = selectedAppId === app.id;
                return (
                  <button
                    key={app.id}
                    onClick={() => setSelectedAppId(app.id)}
                    className={`relative px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'text-white bg-white/15 border border-white/20 shadow-md scale-[1.02]'
                        : 'text-zinc-400 hover:text-white border border-transparent hover:bg-white/5'
                    }`}
                  >
                    {app.image ? (
                      <img 
                        src={app.image} 
                        alt={app.title} 
                        className="w-5 h-5 rounded-lg object-cover border border-white/15 shadow-sm" 
                      />
                    ) : (
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-400' : 'bg-zinc-600'}`} />
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
