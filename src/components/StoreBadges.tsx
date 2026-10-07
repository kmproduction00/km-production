import React from 'react';

export const AppleLogo: React.FC<{ className?: string; size?: number }> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 170 170"
    fill="currentColor"
    className={className}
  >
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.85-11.96-14.44-7.21-11.22-12.75-23.77-16.63-37.66-3.88-13.88-5.82-26.65-5.82-38.31 0-14.44 3.59-26.47 10.77-36.08 7.18-9.61 16.37-14.54 27.56-14.78 4.58 0 9.8 1.25 15.66 3.76 5.86 2.5 9.74 3.76 11.64 3.76 1.7 0 5.8-1.31 12.31-3.93 6.51-2.61 12.19-3.76 17.04-3.44 12.87.64 23.36 5.38 31.47 14.22-11.33 6.86-16.89 16.27-16.68 28.23.21 9.48 3.82 17.37 10.84 23.68 7.02 6.31 15.23 9.77 24.63 10.38-2.34 7.22-5.41 14.42-9.22 21.6zM119.22 31.95c0-7.39 2.65-14.42 7.95-21.09 5.3-6.67 11.89-10.86 19.77-12.57.85 7.18-1.58 14.1-7.29 20.77-5.71 6.67-12.51 10.96-20.43 12.89z" />
  </svg>
);

export const GooglePlayLogo: React.FC<{ className?: string; size?: number }> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    className={className}
  >
    <path
      fill="#00D76B"
      d="M28.4 18.6L267.8 256 28.4 493.4c-3.7-4.1-5.9-9.5-5.9-15.4V34c0-5.9 2.2-11.3 5.9-15.4z"
    />
    <path
      fill="#FF334B"
      d="M336.8 187L78.6 37.9c-8.9-5.1-18.4-5.3-24.6-2.5L267.8 256l69-69z"
    />
    <path
      fill="#FFC700"
      d="M495.2 238.9l-111-64.1-69 69 69 69 111-64.1c11.2-6.5 17.8-18.3 17.8-31.1 0-12.8-6.6-24.6-17.8-28.7z"
    />
    <path
      fill="#00B0FF"
      d="M54 476.6c6.2 2.8 15.7 2.6 24.6-2.5L336.8 325l-69-69L54 476.6z"
    />
  </svg>
);

interface StoreBadgeProps {
  url: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const AppStoreBadge: React.FC<StoreBadgeProps> = ({ url, size = 'sm', className = '' }) => {
  if (size === 'sm') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-slate-500 hover:shadow-lg hover:shadow-white/5 transition-all duration-200 group ${className}`}
        title="App Store'dan İndirin"
      >
        <AppleLogo size={16} className="text-white group-hover:scale-110 transition-transform shrink-0" />
        <div className="flex flex-col items-start leading-none text-left">
          <span className="text-[8px] text-slate-400 font-medium tracking-tight">Download on the</span>
          <span className="text-[11px] font-bold text-white tracking-tight">App Store</span>
        </div>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-3 py-3 px-5 rounded-2xl bg-black hover:bg-slate-900 text-white border border-slate-700 hover:border-slate-500 hover:shadow-xl hover:shadow-white/5 transition-all duration-200 group ${className}`}
      title="App Store'dan İndirin"
    >
      <AppleLogo size={24} className="text-white group-hover:scale-105 transition-transform shrink-0" />
      <div className="flex flex-col items-start leading-none text-left">
        <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">App Store'dan</span>
        <span className="text-sm font-extrabold text-white mt-0.5 tracking-tight">İndirin</span>
      </div>
    </a>
  );
};

export const GooglePlayBadge: React.FC<StoreBadgeProps> = ({ url, size = 'sm', className = '' }) => {
  if (size === 'sm') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-slate-500 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-200 group ${className}`}
        title="Google Play'den Edinin"
      >
        <GooglePlayLogo size={15} className="group-hover:scale-110 transition-transform shrink-0" />
        <div className="flex flex-col items-start leading-none text-left">
          <span className="text-[8px] text-slate-400 font-medium tracking-tight">GET IT ON</span>
          <span className="text-[11px] font-bold text-white tracking-tight">Google Play</span>
        </div>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-3 py-3 px-5 rounded-2xl bg-black hover:bg-slate-900 text-white border border-slate-700 hover:border-slate-500 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-200 group ${className}`}
      title="Google Play'den Edinin"
    >
      <GooglePlayLogo size={22} className="group-hover:scale-105 transition-transform shrink-0" />
      <div className="flex flex-col items-start leading-none text-left">
        <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">Google Play'den</span>
        <span className="text-sm font-extrabold text-white mt-0.5 tracking-tight">Edinin</span>
      </div>
    </a>
  );
};
