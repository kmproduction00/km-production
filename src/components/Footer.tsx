'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { companyData } from '@/data/company';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020204] border-t border-white/[0.08] pt-14 pb-10 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/[0.06]">
          
          {/* Brand with Official Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/15 bg-zinc-900 p-0.5 shadow-md group-hover:border-white/30 transition-all shrink-0">
              <img 
                src="/logo.png" 
                alt="KM Production" 
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                <span>{companyData.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                {companyData.brandTagline}
              </div>
            </div>
          </Link>

          {/* Dedicated Page Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <Link href="/uygulamalar" className="hover:text-white transition-colors text-zinc-200 font-semibold flex items-center gap-1">
              <span>Uygulamalarımız</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </Link>
            <Link href="/hizmetler" className="hover:text-white transition-colors">Hizmetlerimiz</Link>
            <Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link>
            <Link href="/iletisim" className="hover:text-white transition-colors">İletişim</Link>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer text-xs"
            title="Sayfa Başına Dön"
          >
            <span>Yukarı Çık</span>
            <ArrowUp size={13} />
          </button>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-zinc-400 font-mono">
          <div>
            © {new Date().getFullYear()} {companyData.name}. Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <span>İstanbul, TR</span>
            <span>•</span>
            <a href={`mailto:${companyData.email}`} className="text-zinc-300 hover:text-white transition-colors underline">
              {companyData.email}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
