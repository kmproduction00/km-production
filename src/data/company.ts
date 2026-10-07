import { CompanyProfile } from '@/types';

export const companyData: CompanyProfile = {
  name: 'KM Production',
  brandTagline: 'Dijital Ürün & Mobil Uygulama Stüdyosu',
  title: 'Yeni Nesil Mobil Uygulamalar & Dijital Çözümler',
  subtitle: 'Kullanıcı odaklı, yüksek performanslı ve modern mimarilere sahip iOS & Android mobil uygulamaları geliştiriyoruz.',
  bio: 'KM Production; tasarım, mühendislik ve ürün stratejisini bir araya getiren bağımsız bir mobil ürün geliştirme stüdyosudur. Fikirden mağaza lansmanına kadar uçtan uca modern mobil uygulamalar üretiyor, kullanıcıların günlük hayatını kolaylaştıran dijital deneyimler tasarlıyoruz.',
  location: 'İstanbul, Türkiye • Worldwide',
  email: 'kmproduction00@gmail.com',
  experienceYears: '6+ Yıl',
  totalApps: '3 Canlı Uygulama',
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: 'Github',
      username: '@kmproduction'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'Linkedin',
      username: 'KM Production Studio'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com',
      icon: 'Twitter',
      username: '@kmproduction_dev'
    },
    {
      name: 'E-Posta',
      url: 'mailto:kmproduction00@gmail.com',
      icon: 'Mail',
      username: 'kmproduction00@gmail.com'
    }
  ],
  services: [
    {
      title: 'Mobil Uygulama Geliştirme',
      description: 'iOS ve Android platformları için ultra akıcı, güvenli ve yüksek performanslı yerel kalitede mobil uygulamalar inşa ediyoruz.',
      icon: 'Smartphone',
      items: [
        'iOS & Android Çapraz Platform Mimarisi',
        'Yüksek Hızlı & Sıfır Takılmalı Arayüzler',
        'Çevrimdışı (Offline-First) Çalışma Desteği',
        'Biyometrik & Uçtan Uca Veri Güvenliği'
      ]
    },
    {
      title: 'UI/UX & Ürün Tasarımı',
      description: 'Kullanıcı alışkanlıklarını analiz ederek estetik, sezgisel ve modern arayüz tasarımları oluşturuyoruz.',
      icon: 'Layout',
      items: [
        'Kullanıcı Deneyimi (UX) Araştırması',
        'Etkileşimli Prototipleme & Test',
        'Özel Mikro-Animasyonlar',
        'Tasarım Sistemi & Marka Kimliği'
      ]
    },
    {
      title: 'Bulut Altyapı & Entegrasyonlar',
      description: 'Milyonlarca kullanıcıyı sorunsuz kaldırabilecek ölçeklenebilir sunucu, veri tabanı ve ödeme altyapıları kuruyoruz.',
      icon: 'Server',
      items: [
        'Güvenli Kimlik Doğrulama & Biyometri',
        'Apple Pay, Google Pay & İyzico Ödeme',
        'Anlık Bildirim (Push Notification) Motoru',
        'Canlı Senkronizasyon & WebSocket'
      ]
    },
    {
      title: 'Lansman & Mağaza Optimizasyonu (ASO)',
      description: 'Uygulamalarınızın App Store ve Google Play onay süreçlerini yönetiyor, organik indirmeleri artıran ASO stratejileri uyguluyoruz.',
      icon: 'Rocket',
      items: [
        'App Store & Play Store Yayın Yönetimi',
        'Arama Motoru & Mağaza Sıralama (ASO)',
        'Kullanıcı Geri Bildirim Takibi',
        'Sürekli Güncelleme & Canlı İzleme'
      ]
    }
  ],
  values: [
    {
      title: 'Kullanıcı Odaklı Deneyim',
      desc: 'Her pikseli kullanıcıların uygulamanızı keyifle ve zorlanmadan kullanması için tasarlıyoruz.',
      icon: 'Users'
    },
    {
      title: 'Ödün Verilmeyen Performans',
      desc: 'Batarya dostu, hafif ve saniyeler içinde açılan akıcı uygulamalar üretiyoruz.',
      icon: 'Zap'
    },
    {
      title: 'Uçtan Uca Ekip Desteği',
      desc: 'Fikir aşamasından mağazada kullanıcılara ulaşana kadar tüm süreçte yanınızdayız.',
      icon: 'ShieldCheck'
    }
  ]
};
