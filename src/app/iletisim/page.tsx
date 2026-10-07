'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  Clock, 
  MapPin, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyData } from '@/data/company';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Yeni Mobil Uygulama (iOS & Android)',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(companyData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: 'Yeni Mobil Uygulama (iOS & Android)',
        message: ''
      });
    }, 6000);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-24 bg-studio-grid">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] h-[280px] sm:h-[450px] bg-blue-600/[0.07] blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-300 text-[10px] sm:text-xs font-mono mb-3.5">
            <MessageSquare size={13} className="text-zinc-400" />
            <span>KM PRODUCTION İLETİŞİM</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Mobil Projenizi Birlikte Hayata Geçirelim
          </h1>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-zinc-400 max-w-xl leading-relaxed">
            Aklınızdaki mobil uygulama fikri veya mevcut ürününüzü ölçeklemek için KM Production stüdyosuyla doğrudan iletişime geçin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Left Column: Direct Studio Channels */}
          <div className="lg:col-span-5 flex flex-col gap-5 w-full">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 shadow-xl space-y-6">
              
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Doğrudan İletişim Kanalları
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Projenizle ilgili detayları doğrudan e-posta adresimize gönderebilir veya formu doldurabilirsiniz.
                </p>
              </div>

              {/* Direct Copy Email Box */}
              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-white/10 text-white flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] text-zinc-400 font-mono">RESMİ E-POSTA</div>
                    <div className="text-xs sm:text-sm font-bold text-white truncate font-mono">
                      {companyData.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-white/10 transition-colors shrink-0 cursor-pointer"
                  title="E-postayı Kopyala"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Working Guarantees */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <Clock size={16} className="text-zinc-400 shrink-0" />
                  <span>Ortalama Dönüş Süresi: <strong className="text-white font-semibold">2-4 Saat</strong></span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <MapPin size={16} className="text-zinc-400 shrink-0" />
                  <span>Merkez: <strong className="text-white font-semibold">İstanbul, Türkiye</strong> (Global)</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                  <span>Gizlilik: <strong className="text-white font-semibold">Fikri Mülkiyet & NDA Koruması</strong></span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Clean Project Brief Form */}
          <div className="lg:col-span-7 w-full">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 shadow-xl relative">
              
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-4">
                      <Check size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-white">Mesajınız Alındı!</h4>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-md leading-relaxed">
                      Proje detaylarınız için teşekkür ederiz. KM Production ekibi olarak en kısa sürede belirttiğiniz e-posta üzerinden dönüş yapacağız.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                          Adınız & Şirket / Marka *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Örn: Ahmet Yılmaz"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-base sm:text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/40 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                          E-Posta Adresiniz *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="ornek@sirket.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-base sm:text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/40 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Proje Türü
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-base sm:text-xs text-white focus:outline-none focus:border-white/40 transition-all cursor-pointer"
                      >
                        <option value="Yeni Mobil Uygulama (iOS & Android)">Yeni Mobil Uygulama (iOS & Android)</option>
                        <option value="UI/UX Tasarım & Prototipleme">UI/UX Tasarım & Prototipleme</option>
                        <option value="Mevcut Uygulamayı Yenileme">Mevcut Uygulamayı Yenileme / Ölçekleme</option>
                        <option value="Stratejik İş Ortaklığı">Stratejik İş Ortaklığı / Yayıncılık</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Proje Detayları & Hedefleriniz *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Uygulamanızın hedefi, temel özellikleri ve varsa referanslarınız..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-base sm:text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/40 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all shadow-lg active:scale-98 cursor-pointer"
                    >
                      <Send size={15} />
                      <span>Teklif Talebini Gönder</span>
                    </button>

                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
