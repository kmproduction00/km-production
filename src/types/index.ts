export type AppCategory = 
  | 'Tümü'
  | 'Şehir & Yaşam' 
  | 'İnanç & Yaşam' 
  | 'Oyun & Eğlence';

export interface AppFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface AppScreen {
  id: string;
  title: string;
  subtitle: string;
  type?: 'dashboard' | 'analytics' | 'chat' | 'list' | 'settings' | 'game' | 'screenshot';
  image?: string;
  gradient?: string;
}

export interface AppItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  image?: string;
  coverImage?: string;
  screenshots?: string[];
  orientation?: 'portrait' | 'landscape';
  category: AppCategory;
  badge?: string;
  platformText: string;
  accentColor: {
    primary: string;
    secondary: string;
    border: string;
    badgeBg: string;
    badgeText: string;
  };
  highlights: string[];
  features: AppFeature[];
  links: {
    appStore?: string;
    playStore?: string;
    webDemo?: string;
    github?: string;
  };
  screens: AppScreen[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface CompanyService {
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export interface CompanyProfile {
  name: string;
  brandTagline: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  email: string;
  experienceYears: string;
  totalApps: string;
  socials: {
    name: string;
    url: string;
    icon: string;
    username: string;
  }[];
  services: CompanyService[];
  values: {
    title: string;
    desc: string;
    icon: string;
  }[];
}
