'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { AppItem } from '@/types';
import { DynamicIcon } from './DynamicIcon';
import { AppStoreBadge, GooglePlayBadge } from './StoreBadges';

interface AppCardProps {
  app: AppItem;
  onSelect: (app: AppItem) => void;
}

export const AppCard: React.FC<AppCardProps> = ({ app, onSelect }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col justify-between rounded-3xl bg-zinc-950/70 border border-white/[0.08] hover:border-white/20 transition-all duration-300 overflow-hidden backdrop-blur-xl p-6 sm:p-7 shadow-xl hover:shadow-2xl flex-1"
    >
      <div>
        
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-3.5">
            {/* App Icon / Real Artwork */}
            <div className="w-13 h-13 rounded-2xl bg-zinc-900 border border-white/15 p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300 overflow-hidden shrink-0">
              {app.image ? (
                <img src={app.image} alt={app.title} className="w-full h-full object-cover rounded-[14px]" />
              ) : (
                <div className={`w-full h-full rounded-[14px] bg-gradient-to-tr ${app.accentColor.primary} flex items-center justify-center text-white`}>
                  <DynamicIcon name={app.icon} size={22} />
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                {app.title}
              </h3>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[11px] text-zinc-400 font-mono">
                  {app.category}
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-[11px] text-emerald-400 font-medium">
                  {app.platformText}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onSelect(app)}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer border border-white/5"
            title="Detayları İncele"
          >
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Tagline */}
        <p className="text-xs font-semibold text-zinc-300 mb-2">
          {app.tagline}
        </p>

        {/* Description */}
        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-5 font-normal">
          {app.description}
        </p>

        {/* Feature Highlights */}
        <div className="space-y-1.5 mb-6 pt-3 border-t border-white/[0.06]">
          {app.highlights.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
              <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Action Area: Store Links & Detail Trigger */}
      <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
        <div className="grid grid-cols-2 gap-2">
          {app.links.appStore ? (
            <AppStoreBadge url={app.links.appStore} size="sm" />
          ) : (
            <div className="flex items-center justify-center py-2 px-2.5 rounded-xl bg-zinc-900/60 border border-white/[0.04] text-[10px] text-zinc-500 font-mono select-none">
              iOS Yakında
            </div>
          )}

          {app.links.playStore ? (
            <GooglePlayBadge url={app.links.playStore} size="sm" />
          ) : (
            <div className="flex items-center justify-center py-2 px-2.5 rounded-xl bg-zinc-900/60 border border-white/[0.04] text-[10px] text-zinc-500 font-mono select-none">
              Android Yakında
            </div>
          )}
        </div>

        <button
          onClick={() => onSelect(app)}
          className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] text-zinc-300 hover:text-white font-medium text-xs border border-white/[0.06] hover:border-white/15 transition-all cursor-pointer"
        >
          <span>Ekran Görüntüleri & Özellikler</span>
          <ChevronRight size={13} className="text-zinc-500" />
        </button>
      </div>

    </motion.div>
  );
};
