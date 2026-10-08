'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Search, 
  Share2, 
  Check, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Layers,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { appsData } from '@/data/apps';
import { AppCategory, AppItem } from '@/types';
import { PhoneMockup } from '@/components/PhoneMockup';
import { AppStoreBadge, GooglePlayBadge } from '@/components/StoreBadges';
import { DynamicIcon } from '@/components/DynamicIcon';

const categories: AppCategory[] = [
  'Tümü',
  'Şehir & Yaşam',
  'İnanç & Yaşam',
  'Oyun & Eğlence'
];

export default function AppsPage() {
  const [selectedAppId, setSelectedAppId] = useState<string>(appsData[0].id);
  const [selectedCategory, setSelectedCategory] = useState<AppCategory>('Tümü');
  const [searchQuery, setSearchQuery] = useState('');
  const [linkCopied, setLinkCopied] = useState(false);

  const currentApp = appsData.find(a => a.id === selectedAppId) || appsData[0];

  const filteredApps = appsData.filter((app) => {
    const matchesCategory = selectedCategory === 'Tümü' || app.category === selectedCategory;
    const matchesSearch = 
      app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleShare = async () => {
    if (typeof window === 'undefined') return;
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${currentApp.title} - KM Production`,
          text: currentApp.tagline,
          url: shareUrl
        });
      } catch {
        // user cancelled
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2500);
    }
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-24 bg-studio-grid">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[280px] sm:h-[500px] bg-blue-600/[0.07] blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header (Bespoke Studio Hub) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-300 text-[10px] sm:text-xs font-mono mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>KM PRODUCTION MOBİL PORTFÖYÜ</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Canlı Mobil Uygulamalarımız
          </h1>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-zinc-400 max-w-xl leading-relaxed">
            App Store ve Google Play'de yayınlanan, kullanıcıların günlük hayatına değer katan resmi mobil ürünlerimiz.
          </p>
        </div>

        {/* Prominent, Eye-Catching App Switcher Grid (Ultra-Optimized for Mobile & Desktop) */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 text-xs font-mono text-zinc-400 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-zinc-300">İncelemek İstediğiniz Uygulamayı Seçin:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4">
            {appsData.map((app) => {
              const isSelected = selectedAppId === app.id;
              return (
                <button
                  key={app.id}
                  onClick={() => setSelectedAppId(app.id)}
                  className={`relative p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 flex items-center gap-3.5 text-left cursor-pointer group ${
                    isSelected 
                      ? 'bg-zinc-900/95 border-white/40 shadow-xl shadow-black/60 ring-2 ring-white/20 scale-[1.01]' 
                      : 'bg-zinc-950/70 border-white/10 hover:border-white/25 hover:bg-zinc-900/60 opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* App Icon */}
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border p-0.5 shrink-0 shadow-md transition-transform group-hover:scale-105 ${
                    isSelected ? 'border-white/30' : 'border-white/15 bg-zinc-900'
                  }`}>
                    {app.image ? (
                      <img 
                        src={app.image} 
                        alt={app.title} 
                        className="w-full h-full object-cover rounded-[10px]" 
                      />
                    ) : (
                      <div className="w-full h-full rounded-[10px] bg-zinc-800 flex items-center justify-center">
                        <Smartphone size={20} className="text-zinc-400" />
                      </div>
                    )}
                  </div>

                  {/* App Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className={`text-sm sm:text-base font-bold truncate transition-colors ${
                        isSelected ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                      }`}>
                        {app.title}
                      </h3>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-mono truncate mt-0.5">
                      {app.badge} • {app.platformText}
                    </p>
                  </div>

                  {/* Active Radio Indicator */}
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                    isSelected 
                      ? 'border-emerald-400 bg-emerald-500/20 text-emerald-400' 
                      : 'border-white/20 group-hover:border-white/40'
                  }`}>
                    {isSelected && (
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Spotlight Showcase Container (Ultra Optimized for Mobile Ads & Desktop Showcase) */}
        <div
          key={currentApp.id}
          className="rounded-3xl bg-zinc-950/90 border border-white/10 p-4 sm:p-7 lg:p-10 shadow-2xl backdrop-blur-2xl mb-12 sm:mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Interactive Phone Device with Real In-App Screenshots */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-1">
              <PhoneMockup app={currentApp} size="md" />
              
              {/* Direct Download Badges Immediately Below Preview (Mobile First) */}
              <div className="w-full mt-4 p-3.5 sm:p-4 rounded-2xl bg-zinc-900/95 border border-white/15 shadow-2xl flex flex-col gap-2.5 lg:hidden">
                <div className="text-xs font-bold text-white flex items-center justify-between px-0.5">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Hemen Ücretsiz İndirin:
                  </span>
                  <span className="text-[10px] text-zinc-400 font-mono">Resmi Mağazalar</span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch gap-2">
                  {currentApp.links.appStore && (
                    <AppStoreBadge url={currentApp.links.appStore} size="md" className="flex-1 justify-center py-3 text-xs" />
                  )}
                  {currentApp.links.playStore && (
                    <GooglePlayBadge url={currentApp.links.playStore} size="md" className="flex-1 justify-center py-3 text-xs" />
                  )}
                </div>
              </div>

              <p className="text-[10px] sm:text-[11px] text-zinc-500 mt-2.5 font-mono text-center items-center gap-1 hidden lg:flex">
                <Smartphone size={12} className="text-zinc-400" />
                <span>Gerçek uygulama ekranı önizlemesi</span>
              </p>
            </div>

            {/* Right Column: App In-Depth & Direct Install CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4 sm:space-y-6 order-2 lg:order-2">
              
              {/* Badges & Share Bar */}
              <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-white/[0.08]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 text-[11px] font-mono">
                    {currentApp.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Yayında ✅
                  </span>
                </div>

                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-xs transition-colors cursor-pointer"
                  title="Sayfayı Paylaş"
                >
                  {linkCopied ? <Check size={13} className="text-emerald-400" /> : <Share2 size={13} />}
                  <span>{linkCopied ? 'Kopyalandı' : 'Paylaş'}</span>
                </button>
              </div>

              {/* Title & Description */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  {currentApp.image && (
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl overflow-hidden border border-white/15 bg-zinc-900 p-0.5 shrink-0 shadow-md">
                      <img src={currentApp.image} alt={currentApp.title} className="w-full h-full object-cover rounded-xl" />
                    </div>
                  )}
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {currentApp.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                      {currentApp.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 mt-3 leading-relaxed font-normal">
                  {currentApp.longDescription || currentApp.description}
                </p>
              </div>

              {/* Highlights & Capabilities */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 font-mono">
                  ÖNE ÇIKAN YETENEKLER:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentApp.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300 bg-zinc-900/60 p-2.5 rounded-xl border border-white/5">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Big Tap-Friendly Download Badges (Desktop View) */}
              <div className="hidden lg:block p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-white/10 space-y-3">
                <div className="text-xs font-bold text-white flex items-center justify-between">
                  <span>Hemen Ücretsiz İndirin:</span>
                  <span className="text-[10px] text-zinc-400 font-mono">Resmi Mağazalar</span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                  {currentApp.links.appStore && (
                    <AppStoreBadge url={currentApp.links.appStore} size="md" className="flex-1 justify-center py-3 text-xs" />
                  )}
                  {currentApp.links.playStore && (
                    <GooglePlayBadge url={currentApp.links.playStore} size="md" className="flex-1 justify-center py-3 text-xs" />
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* All Apps Grid Overview (Quick Switcher) */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Tüm Ürünlerimiz</h3>
              <p className="text-xs text-zinc-400 mt-1">KM Production stüdyosu tarafından geliştirilen aktif portföy.</p>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1 p-1 rounded-full bg-zinc-900/80 border border-white/10 overflow-x-auto scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs transition-colors cursor-pointer ${
                    selectedCategory === cat ? 'bg-white text-zinc-950 font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                onClick={() => {
                  setSelectedAppId(app.id);
                  window.scrollTo({ top: 180, behavior: 'smooth' });
                }}
                className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between group ${
                  selectedAppId === app.id
                    ? 'bg-zinc-900 border-white/30 shadow-xl'
                    : 'bg-zinc-950/60 border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/15 p-0.5 overflow-hidden">
                      {app.image ? (
                        <img src={app.image} alt={app.title} className="w-full h-full object-cover rounded-xl" />
                      ) : (
                        <div className={`w-full h-full rounded-xl bg-gradient-to-tr ${app.accentColor.primary} flex items-center justify-center text-white`}>
                          <DynamicIcon name={app.icon} size={20} />
                        </div>
                      )}
                    </div>
                    <span className="text-[11px] text-zinc-400 font-mono">{app.platformText}</span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-zinc-200 transition-colors">
                    {app.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 group-hover:text-white transition-colors font-medium">
                  <span>Cihazda Önizle</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
