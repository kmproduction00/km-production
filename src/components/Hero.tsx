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
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-6 sm:pb-8 overflow-hidden bg-studio-grid">
      
      {/* Ambient Depth Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] h-[280px] sm:h-[450px] bg-blue-600/[0.08] blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-4 sm:right-10 w-60 sm:w-72 h-60 sm:h-72 bg-indigo-600/[0.05] blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Invisible spacer for flex layout centering */}
      <div className="w-full h-2 pointer-events-none" />

      {/* Main Centered Content Container (Red Box Area) */}
      <div className="my-auto flex flex-col items-center text-center max-w-4xl mx-auto py-4">
        
        {/* Official Studio Logo */}
        <motion.div 
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative mb-5 sm:mb-6 group"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-purple-600/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500 pointer-events-none" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl p-1 bg-zinc-900/90 border border-white/20 shadow-2xl overflow-hidden backdrop-blur-xl group-hover:scale-105 transition-transform duration-300">
            <img 
              src="/logo.png" 
              alt="KM Production" 
              className="w-full h-full object-cover rounded-[20px]"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Moniker Badge */}
        <motion.div 
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-300 text-[10px] sm:text-xs font-mono mb-4 sm:mb-6 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>KM PRODUCTION • BAĞIMSIZ MOBİL ÜRÜN STÜDYOSU</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight"
        >
          Milyonların cebinde <span className="text-zinc-400 font-normal italic">kusursuz çalışan</span> mobil deneyimler.
        </motion.h1>

        {/* Subtitle / Paragraph */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-3.5 sm:mt-5 text-xs sm:text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed"
        >
          Fikirden App Store ve Google Play yayınlanmasına kadar tüm süreci uçtan uca tasarlayan ve geliştiren bir mobil stüdyoyuz.
        </motion.p>

        {/* Action CTAs */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
        >
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
