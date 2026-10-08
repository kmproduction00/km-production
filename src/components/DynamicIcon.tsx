'use client';

import React from 'react';
import {
  Compass,
  Moon,
  Gamepad2,
  BookOpen,
  MapPin,
  ShieldCheck,
  Sparkles,
  Layers,
  Timer,
  Award,
  Zap,
  Star,
  Download,
  Smartphone,
  Server,
  Rocket,
  Layout,
  Briefcase,
  TrendingUp,
  Sun,
  Users,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Compass,
  Moon,
  Gamepad2,
  BookOpen,
  MapPin,
  ShieldCheck,
  Sparkles,
  Layers,
  Timer,
  Award,
  Zap,
  Star,
  Download,
  Smartphone,
  Server,
  Rocket,
  Layout,
  Briefcase,
  TrendingUp,
  Sun,
  Users
};

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = 'w-5 h-5', size = 20 }) => {
  const IconComponent = iconMap[name] || Sparkles;
  return <IconComponent className={className} size={size} />;
};
