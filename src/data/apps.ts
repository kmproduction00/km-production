import { AppItem } from '@/types';

export const appsData: AppItem[] = [
  {
    id: 'diyarbakir-life',
    title: 'Diyarbakır Life',
    tagline: 'Şehir Rehberi, Tarihi Mekanlar, Haberler & Yerel Keşif',
    description: "Diyarbakır'ın tarihi ve turistik yerlerini, zengin gastronomi duraklarını, güncel şehir haberlerini ve nöbetçi eczanelerini tek platformda sunan kapsamlı şehir yaşam rehberi.",
    longDescription: "Diyarbakır Life; kadim şehir Diyarbakır'ı keşfetmek isteyen yerli ve yabancı ziyaretçiler ile şehir sakinleri için KM Production tarafından geliştirilmiş modern bir şehir rehberidir. Tarihi surlar, Hevsel Bahçeleri, On Gözlü Köprü gibi kültürel noktaları harita üzerinde detaylandırır; güncel etkinlikleri, lezzet duraklarını ve acil şehir bilgilerini anında kullanıcıya ulaştırır.",
    icon: 'Compass',
    image: '/diyarbakir-life.png',
    coverImage: '/diyarbakir-life.png',
    category: 'Şehir & Yaşam',
    badge: 'Şehir Rehberi',
    platformText: 'iOS & Android',
    accentColor: {
      primary: 'from-amber-500 via-orange-600 to-red-700',
      secondary: 'rgba(245, 158, 11, 0.15)',
      border: 'border-orange-500/30',
      badgeBg: 'bg-orange-500/10',
      badgeText: 'text-orange-400',
    },
    highlights: [
      'Tarihi & Turistik Rotalar',
      'İnteraktif Şehir Haritası',
      'Nöbetçi Eczaneler & Acil',
      'Yerel Lezzet & Mekan Keşfi',
      'Güncel Şehir Haberleri'
    ],
    features: [
      {
        title: 'Tarihi Mekanlar & Rotalar',
        description: 'Ulu Cami, Diyarbakır Surları, Hasan Paşa Hanı gibi noktalar için detaylı bilgi ve navigasyon.',
        icon: 'MapPin'
      },
      {
        title: 'Nöbetçi Eczane & Acil Servisler',
        description: 'Konumunuza en yakın açık nöbetçi eczaneleri ve yol tarifini anlık olarak bulma.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Gastronomi & Lezzet Durakları',
        description: 'Geleneksel lezzetleri bulabileceğiniz en popüler restoran ve mekan önerileri.',
        icon: 'Sparkles'
      },
      {
        title: 'Haber & Etkinlik Akışı',
        description: 'Şehirdeki konserler, kültürel etkinlikler ve güncel duyurular.',
        icon: 'Layers'
      }
    ],
    links: {
      appStore: 'https://apps.apple.com/tr/app/diyarbak%C4%B1r-life-21/id6804522256?l=tr',
      playStore: 'https://play.google.com/store/apps/details?id=com.diyarbakir.life',
      webDemo: '#demo-diyarbakir',
      github: 'https://github.com'
    },
    screens: [
      {
        id: 'screen-1',
        title: 'Ana Sayfa & Keşfet',
        subtitle: 'Hava durumu, nöbetçi eczaneler, kurlar ve öne çıkan haberler',
        type: 'screenshot',
        image: '/screenshots/diyarbakir-life-1.png'
      },
      {
        id: 'screen-2',
        title: 'Şehir Menüsü & Hizmetler',
        subtitle: 'Rehber, ilanlar, eczaneler ve hava durumu sekmeleri',
        type: 'screenshot',
        image: '/screenshots/diyarbakir-life-2.png'
      },
      {
        id: 'screen-3',
        title: 'İş İlanları & Kariyer',
        subtitle: 'Diyarbakır genelinde filtreli güncel istihdam ilanları',
        type: 'screenshot',
        image: '/screenshots/diyarbakir-life-3.png'
      }
    ],
    metrics: [
      { label: 'Kategori', value: 'Şehir & Yaşam' },
      { label: 'Platform', value: 'iOS & Android' },
      { label: 'Konum', value: 'Diyarbakır' },
      { label: 'Mağaza Durumu', value: 'Yayında ✅' }
    ]
  },
  {
    id: 'ezan-vakitleri',
    title: 'Ezan Vakitleri (Hikaye - Dua)',
    tagline: 'Hassas Vakitler, Kıble Pusulası, Zengin Dualar & İbretlik Hikayeler',
    description: 'Konuma duyarlı hatasız ezan saatleri, sesli bildirimler, kıble yönü bulucu, her güne özel dualar ve manevi hikayeler sunan kapsamlı İslami yaşam uygulaması.',
    longDescription: 'Ezan Vakitleri (Hikaye - Dua); kullanıcıların günlük ibadetlerini huzurla takip etmelerini sağlayan, Diyanet ile tam uyumlu vakit motoruna sahip modern bir uygulamadır. Kıble pusulası, sesli ezan hatırlatıcıları, geniş dua ve zikir kütüphanesi ile her gün yenilenen ibretlik dini hikayeler içerir.',
    icon: 'Moon',
    image: '/ezan-vakti.png',
    coverImage: '/ezan-vakti.png',
    category: 'İnanç & Yaşam',
    badge: 'Yaşam Asistanı',
    platformText: 'iOS & Android',
    accentColor: {
      primary: 'from-cyan-500 via-blue-600 to-indigo-800',
      secondary: 'rgba(6, 182, 212, 0.15)',
      border: 'border-cyan-500/30',
      badgeBg: 'bg-cyan-500/10',
      badgeText: 'text-cyan-400',
    },
    highlights: [
      'Diyanet Uyumlu Ezan Saatleri',
      'Hassas Kıble Pusulası',
      'Günün Duası & Zikirmatik',
      'İbretlik Dini Hikayeler',
      'Çevrimdışı Çalışma'
    ],
    features: [
      {
        title: 'Konuma Özel Hassas Vakitler',
        description: 'GPS veya seçilen şehre göre tam zamanında vakit hesaplaması ve kalan süre sayacı.',
        icon: 'Timer'
      },
      {
        title: 'Kıble Yönü Pusulası',
        description: 'Cihazın manyetik sensörleriyle Kabe yönünü saniyeler içinde hatasız tespit etme.',
        icon: 'Compass'
      },
      {
        title: 'Dua & Zikir Arşivi',
        description: 'Günlük hayat için özel dualar, sureler ve sesli/titreşimli zikirmatik desteği.',
        icon: 'BookOpen'
      },
      {
        title: 'Günlük Manevi Hikayeler',
        description: 'Her gün yenilenen ibret verici, eğitici ve ilham dolu hikayeler arşivi.',
        icon: 'Sparkles'
      }
    ],
    links: {
      appStore: 'https://apps.apple.com/tr/app/ezan-vakti-hikaye-dua/id6804218531?l=tr',
      playStore: 'https://play.google.com/store/apps/details?id=com.ezanvakti.hikayedua.pro',
      webDemo: '#demo-ezan',
      github: 'https://github.com'
    },
    screens: [
      {
        id: 'screen-1',
        title: 'Vakitler & Geri Sayım',
        subtitle: 'Hassas ezan saatleri, sonraki vakit sayacı ve günün manevi notu',
        type: 'screenshot',
        image: '/screenshots/ezan-vakti-1.png'
      },
      {
        id: 'screen-video',
        title: 'Canlı Tanıtım Videosu 🎬',
        subtitle: 'Uygulama arayüzü ve sesli özelliklerin canlı video önizlemesi',
        type: 'video',
        video: '/videos/ezan-vakti-preview.mp4'
      },
      {
        id: 'screen-2',
        title: 'Zikirmatik & Tesbih',
        subtitle: 'Sesli ve titreşimli dijital zikirmatik sayacı',
        type: 'screenshot',
        image: '/screenshots/ezan-vakti-2.png'
      },
      {
        id: 'screen-3',
        title: 'Hicri Takvim & Dini Günler',
        subtitle: 'Yıllık kandiller, bayramlar ve önemli dini günler takvimi',
        type: 'screenshot',
        image: '/screenshots/ezan-vakti-3.png'
      },
      {
        id: 'screen-4',
        title: 'Sesli Dini Hikayeler',
        subtitle: 'Peygamberler tarihi sesli anlatım ve hız ayarlı oynatıcı',
        type: 'screenshot',
        image: '/screenshots/ezan-vakti-4.png'
      }
    ],
    metrics: [
      { label: 'Kategori', value: 'İnanç & Yaşam' },
      { label: 'Platform', value: 'iOS & Android' },
      { label: 'Hesaplama', value: 'Diyanet Uyumlu' },
      { label: 'Mağaza Durumu', value: 'Yayında ✅' }
    ]
  },
  {
    id: 'neon-runner',
    title: 'Neon Runner: Cyber Dash',
    tagline: 'Hızlı Tempolu, Siberpunk Neon Dünyasında Sonsuz Koşu & Refleks Oyunu',
    description: 'Neon ışıklarıyla parlayan siber dünyada engellerden kaçtığınız, dinamik synthwave müzikleri eşliğinde reflekslerinizi test ettiğiniz aksiyon dolu koşu oyunu.',
    longDescription: 'Neon Runner: Cyber Dash; KM Production stüdyosu tarafından geliştirilen, retro-fütüristik siberpunk atmosferine ve akıcı 60 FPS mekaniklere sahip yüksek tempolu bir arcade mobil oyundur. Özel karakter görünümleri, güçlendiriciler (power-ups), dinamik engeller ve küresel liderlik tablosu sunar.',
    icon: 'Gamepad2',
    image: '/neon-runner.png',
    coverImage: '/neon-runner.png',
    orientation: 'landscape',
    category: 'Oyun & Eğlence',
    badge: 'Arcade Oyun 🎮',
    platformText: 'Android',
    accentColor: {
      primary: 'from-fuchsia-500 via-pink-600 to-violet-800',
      secondary: 'rgba(217, 70, 239, 0.15)',
      border: 'border-fuchsia-500/30',
      badgeBg: 'bg-fuchsia-500/10',
      badgeText: 'text-fuchsia-400',
    },
    highlights: [
      'Akıcı 60 FPS Oynanış',
      'Siberpunk Neon Grafikler',
      'Synthwave Müzikler & Efektler',
      'Özel Güçlendiriciler (Power-ups)',
      'Liderlik Tablosu'
    ],
    features: [
      {
        title: 'Hızlı Tempolu Refleks Oynanışı',
        description: 'Lazerler, hareketli bariyerler ve ani tuzaklardan kayarak ve zıplayarak kaçın.',
        icon: 'Zap'
      },
      {
        title: 'Açılabilir Neon Karakterler',
        description: 'Topladığınız siber enerji kristalleriyle yeni robotik koşucuları ve efektleri açın.',
        icon: 'Award'
      },
      {
        title: 'Özel Yetenek & Kalkanlar',
        description: 'Mıknatıs, zaman yavaşlatıcı ve çift zıplama güçlendiricileriyle rekor kırın.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Sonsuz Mod & Görevler',
        description: 'Her oyunda değişen dinamik pistler ve günlük ödüllü görev sistemi.',
        icon: 'Sparkles'
      }
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.zkproduction.neonrunner',
      webDemo: '#demo-neon',
      github: 'https://github.com'
    },
    screens: [
      {
        id: 'screen-video',
        title: 'Canlı Oynanış Videosu 🎬',
        subtitle: 'Siberpunk synthwave müzikleri eşliğinde 60 FPS aksiyon dolu oynanış',
        type: 'video',
        video: '/videos/neon-runner-gameplay.mp4'
      },
      {
        id: 'screen-1',
        title: 'Ana Menü & Skor',
        subtitle: 'Siberpunk ana menü, Play, Shop, Maps ve rekor göstergesi',
        type: 'screenshot',
        image: '/screenshots/neon-runner-1.png'
      },
      {
        id: 'screen-2',
        title: 'Cyber Dash Oynanış',
        subtitle: 'Neon pisti, engeller, altın toplama ve dinamik kontroller',
        type: 'screenshot',
        image: '/screenshots/neon-runner-2.png'
      },
      {
        id: 'screen-3',
        title: 'Karakter Mağazası (Shop)',
        subtitle: 'Classic Block, Neon Box, Pixel Warrior siber karakterleri',
        type: 'screenshot',
        image: '/screenshots/neon-runner-3.png'
      }
    ],
    metrics: [
      { label: 'Kategori', value: 'Arcade Oyun' },
      { label: 'Platform', value: 'Android' },
      { label: 'Performans', value: '60 FPS' },
      { label: 'Mağaza Durumu', value: 'Yayında ✅' }
    ]
  }
];
