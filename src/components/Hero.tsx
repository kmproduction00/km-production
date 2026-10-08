'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronRight,
  ChevronDown
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-5 sm:pb-8 overflow-hidden bg-studio-grid">
      
      {/* Ambient Depth Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[700px] h-[300px] sm:h-[500px] bg-blue-600/[0.12] blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-4 sm:right-10 w-64 sm:w-80 h-64 sm:h-80 bg-indigo-600/[0.08] blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Invisible spacer for flex layout centering */}
      <div className="w-full h-1 pointer-events-none" />

      {/* Main Centered Content Container */}
      <div className="my-auto flex flex-col items-center text-center max-w-4xl mx-auto py-2 sm:py-4 w-full">
        
        {/* Official Studio Logo (Enlarged & Prominent) */}
        <motion.div 
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative mb-5 sm:mb-7 group"
        >
          <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/40 via-indigo-600/40 to-purple-600/40 rounded-[32px] blur-2xl opacity-70 group-hover:opacity-90 transition duration-500 pointer-events-none" />
          <div className="relative w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 rounded-[28px] sm:rounded-[34px] p-1.5 bg-zinc-900/95 border-2 border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-2xl group-hover:scale-105 transition-transform duration-300">
            <img 
              src="/logo.png" 
              alt="KM Production" 
              className="w-full h-full object-cover rounded-[22px] sm:rounded-[26px]"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Moniker Badge */}
        <motion.div 
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/95 border border-white/15 text-zinc-200 text-xs sm:text-sm font-mono mb-4 sm:mb-6 shadow-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold tracking-wide">KM PRODUCTION • BAĞIMSIZ MOBİL ÜRÜN STÜDYOSU</span>
        </motion.div>

        {/* Headline (Bigger & Impactful on Mobile & PC) */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.15] px-2"
        >
          Milyonların cebinde <span className="text-zinc-400 font-semibold italic">kusursuz çalışan</span> mobil deneyimler.
        </motion.h1>

        {/* Subtitle / Paragraph */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-4 sm:mt-5 text-sm xs:text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed px-2 font-normal"
        >
          Fikirden App Store ve Google Play yayınlanmasına kadar tüm süreci uçtan uca tasarlayan ve geliştiren bir mobil stüdyoyuz.
        </motion.p>

        {/* Action CTAs (Bigger, Tap-Friendly, Prominent) */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="mt-6 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto max-w-md sm:max-w-none px-2"
        >
          <Link
            href="/uygulamalar"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl sm:rounded-full bg-white text-zinc-950 hover:bg-zinc-200 font-bold text-sm sm:text-base shadow-2xl shadow-white/10 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Uygulamalarımızı Keşfedin</span>
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/iletisim"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl sm:rounded-full bg-zinc-900/95 hover:bg-zinc-800 text-white font-semibold text-sm sm:text-base border border-white/20 hover:border-white/40 shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Projeniz İçin Teklif Alın</span>
            <ChevronRight size={17} className="text-zinc-400" />
          </Link>
        </motion.div>

      </div>

      {/* Subtle Bottom Scroll Indicator to Guide Users Downwards */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-auto pt-2 z-10"
      >
        <a
          href="#live-preview"
          className="flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer group"
          aria-label="Canlı önizleme için aşağı kaydırın"
        >
          <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase opacity-70 group-hover:opacity-100">
            Canlı Önizleme İçin Kaydırın
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <ChevronDown size={16} className="text-zinc-400 group-hover:text-emerald-400 transition-colors" />
          </motion.div>
        </a>
      </motion.div>

    </section>
  );
};
