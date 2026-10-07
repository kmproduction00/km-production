'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Smartphone, Layers } from 'lucide-react';
import { AppCategory, AppItem } from '@/types';
import { appsData } from '@/data/apps';
import { AppCard } from './AppCard';
import { AppDetailModal } from './AppDetailModal';

const categories: AppCategory[] = [
  'Tümü',
  'Şehir & Yaşam',
  'İnanç & Yaşam',
  'Oyun & Eğlence'
];

export const AppsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<AppCategory>('Tümü');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModalApp, setSelectedModalApp] = useState<AppItem | null>(null);

  const filteredApps = useMemo(() => {
    return appsData.filter((app) => {
      const matchesCategory = 
        selectedCategory === 'Tümü' || app.category === selectedCategory;
      
      const matchesSearch = 
        app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="apps" className="relative py-20 sm:py-28 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-zinc-300 text-[11px] sm:text-xs font-mono mb-4">
            <Layers size={13} className="text-zinc-400" />
            <span>SEÇİLMİŞ ÜRÜNLER & PORTFÖY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Canlıda Olan Mobil Ürünlerimiz
          </h2>

          <p className="mt-3.5 text-xs sm:text-base text-zinc-400 max-w-2xl font-normal">
            Her biri belirli bir problemi çözmek ve kullanıcıların günlük hayatına değer katmak üzere tasarlanmış aktif uygulamalarımız.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          
          {/* Categories Pill Selector */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-zinc-900/80 border border-white/10 overflow-x-auto scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                    isSelected ? 'text-zinc-950 font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="appsCategoryActivePill"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 bg-white rounded-full"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Uygulama veya özellik ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full bg-zinc-900/80 border border-white/10 hover:border-white/20 text-base sm:text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/40 transition-all"
            />
          </div>

        </div>

        {/* Apps Grid */}
        {filteredApps.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredApps.map((app) => (
                <AppCard
                  key={app.id}
                  app={app}
                  onSelect={(selected) => setSelectedModalApp(selected)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-16 bg-zinc-950/40 rounded-3xl border border-white/5 p-6">
            <Smartphone size={28} className="mx-auto text-zinc-500 mb-2" />
            <h4 className="text-sm font-bold text-white">Sonuç bulunamadı</h4>
            <p className="text-xs text-zinc-400 mt-1">Filtrelerinizi sıfırlayarak tekrar deneyebilirsiniz.</p>
            <button
              onClick={() => { setSelectedCategory('Tümü'); setSearchQuery(''); }}
              className="mt-3 px-4 py-1.5 rounded-full bg-white/5 text-xs text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              Filtreleri Temizle
            </button>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      <AppDetailModal
        app={selectedModalApp}
        onClose={() => setSelectedModalApp(null)}
      />
    </section>
  );
};
