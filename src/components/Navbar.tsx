'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { companyData } from '@/data/company';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname.startsWith('/indir') || pathname === '/deneme' || pathname === '/ezan-vakti' || pathname === '/diyarbakir-life') return null;

  const navLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Uygulamalarımız', href: '/uygulamalar', highlight: true },
    { name: 'Hizmetlerimiz', href: '/hizmetler' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030305]/90 backdrop-blur-2xl border-b border-white/[0.08] py-3.5 shadow-2xl'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Studio Identity */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-white/15 bg-zinc-900 p-0.5 shadow-md group-hover:border-white/40 transition-all duration-300 group-hover:scale-105 shrink-0">
            <img 
              src="/logo.png" 
              alt="KM Production" 
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
              <span>{companyData.name}</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">
              Mobile App Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/70 border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1 text-xs font-medium transition-colors duration-200 rounded-full flex items-center gap-1.5 ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navActivePill"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    className="absolute inset-0 bg-white/10 border border-white/15 rounded-full"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
                {link.highlight && !isActive && (
                  <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/iletisim"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/10"
          >
            <span>Proje Başlat</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 text-zinc-300 hover:text-white bg-zinc-900/80 border border-white/10 rounded-xl active:scale-95 transition-all"
          aria-label="Menüyü Aç"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0a0a0e]/98 border-b border-white/10 backdrop-blur-2xl px-5 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 text-sm font-medium rounded-xl transition-all flex items-center justify-between ${
                      isActive 
                        ? 'bg-white/10 text-white font-semibold border border-white/10' 
                        : 'text-zinc-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.name}
                      {link.highlight && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Yayında
                        </span>
                      )}
                    </span>
                    <ArrowUpRight size={14} className={isActive ? 'text-white' : 'text-zinc-500'} />
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-white/10 mt-2">
                <Link
                  href="/iletisim"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold bg-white text-zinc-950 shadow-md active:scale-98 transition-all"
                >
                  <span>Proje Başlat / Teklif Al</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
