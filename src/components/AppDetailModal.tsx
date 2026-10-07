'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ShieldCheck, 
  Check, 
  Sparkles,
  Smartphone
} from 'lucide-react';
import { AppItem } from '@/types';
import { PhoneMockup } from './PhoneMockup';
import { DynamicIcon } from './DynamicIcon';
import { GithubIcon } from './SocialIcons';
import { AppStoreBadge, GooglePlayBadge } from './StoreBadges';

interface AppDetailModalProps {
  app: AppItem | null;
  onClose: () => void;
}

export const AppDetailModal: React.FC<AppDetailModalProps> = ({ app, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (app) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [app, onClose]);

  if (!app) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        
        {/* Dark Glass Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#04060a]/85 backdrop-blur-xl"
        />

        {/* Modal Window with Spring Entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-[#0f172a]/95 via-[#0b0f19]/95 to-[#07090e]/98 border border-white/[0.12] rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.8)] z-10 text-white p-5 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 text-slate-400 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] rounded-full transition-colors z-20 cursor-pointer border border-white/[0.08]"
            aria-label="Kapat"
          >
            <X size={18} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Mockup */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center pt-2">
              <PhoneMockup app={app} size="sm" />
              <p className="text-[11px] text-slate-400 mt-3 text-center flex items-center gap-1">
                <Smartphone size={12} className="text-blue-400" /> Ekranlar arasında geçiş yapmak için alttaki noktaları kullanın
              </p>
            </div>

            {/* Right Column: App In-Depth Info */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Header Info */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`text-xs px-3 py-1 rounded-full font-bold border ${app.accentColor.badgeBg} ${app.accentColor.badgeText} ${app.accentColor.border}`}>
                    {app.category}
                  </span>
                  {app.badge && (
                    <span className="text-xs px-3 py-1 rounded-full bg-white/[0.04] text-slate-300 font-semibold border border-white/[0.08]">
                      {app.badge}
                    </span>
                  )}
                  <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 font-semibold border border-blue-500/20">
                    {app.platformText}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {app.image && (
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border border-white/20 bg-[#06080e] p-0.5 shadow-xl shadow-blue-500/15 shrink-0">
                      <img src={app.image} alt={app.title} className="w-full h-full object-cover rounded-xl" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                      {app.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-blue-400 mt-1">
                      {app.tagline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {app.longDescription}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-2xl bg-black/40 border border-white/[0.06]">
                {app.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-[11px] text-slate-400">{m.label}</div>
                    <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Features List */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-blue-400" /> Öne Çıkan Özellikler
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {app.features.map((f, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-colors flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-500/20">
                        {f.icon ? <DynamicIcon name={f.icon} size={14} /> : <Check size={14} />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{f.title}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">{f.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Highlights Badges */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-blue-400" /> Güvenlik & Platform Yetenekleri
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {app.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl text-xs font-medium bg-white/[0.03] border border-white/[0.06] text-slate-300 flex items-center gap-1.5"
                    >
                      <Check size={12} className="text-blue-400" />
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions / Official Store Download Badges */}
              <div className="pt-4 border-t border-white/[0.08]">
                <div className="text-xs text-slate-400 font-semibold mb-3">
                  Resmi Mağazalardan İndirin:
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {app.links.appStore && (
                    <AppStoreBadge url={app.links.appStore} size="md" className="flex-1 min-w-[180px]" />
                  )}
                  {app.links.playStore && (
                    <GooglePlayBadge url={app.links.playStore} size="md" className="flex-1 min-w-[180px]" />
                  )}
                  {app.links.github && (
                    <a
                      href={app.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-all shadow-md"
                      title="GitHub"
                    >
                      <GithubIcon size={22} />
                    </a>
                  )}
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
