import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppItem } from '@/types';
import { 
  Wifi, 
  Battery, 
  Signal, 
  MapPin, 
  Compass, 
  Moon, 
  Gamepad2, 
  Sparkles, 
  BookOpen, 
  Search, 
  Star, 
  Layers, 
  Trophy,
  Play,
  Pause,
  Zap,
  ChevronLeft,
  ChevronRight,
  MousePointerClick,
  Volume2,
  VolumeX
} from 'lucide-react';

interface PhoneMockupProps {
  app: AppItem;
  interactive?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ 
  app, 
  interactive = true,
  className = '',
  size = 'md'
}) => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const totalScreens = app.screens.length;
  const currentScreen = app.screens[activeScreenIndex] || app.screens[0];
  const isLandscape = app.orientation === 'landscape';

  // Reset screen index when app changes
  useEffect(() => {
    setActiveScreenIndex(0);
    setIsPlaying(true);
  }, [app.id]);

  // Video Autoplay & Audio Volume Setup
  useEffect(() => {
    if (currentScreen?.video && videoRef.current) {
      videoRef.current.volume = 0.35; // Ortanın biraz altında (35% rahatsız etmeyen ideal ses)
      videoRef.current.muted = isMuted;
      videoRef.current.currentTime = 0;
      setIsPlaying(true);
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Tarayıcı ilk tıklamadan önce sesli oynatmayı kısıtlarsa sessiz başlat
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
          }
        });
      }
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [activeScreenIndex, app.id, currentScreen?.video]);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      if (!nextMuted) {
        videoRef.current.volume = 0.35;
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
      setIsMuted(nextMuted);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (totalScreens <= 1) return;
    setSlideDirection(-1);
    setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : totalScreens - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (totalScreens <= 1) return;
    setSlideDirection(1);
    setActiveScreenIndex((prev) => (prev < totalScreens - 1 ? prev + 1 : 0));
  };

  const handleSelectScreen = (idx: number) => {
    setSlideDirection(idx > activeScreenIndex ? 1 : -1);
    setActiveScreenIndex(idx);
  };

  const portraitSizeStyles = {
    sm: 'w-[220px] sm:w-[250px] h-[440px] sm:h-[500px] rounded-[32px] sm:rounded-[38px] p-2 sm:p-2.5',
    md: 'w-[260px] sm:w-[320px] h-[520px] sm:h-[620px] rounded-[38px] sm:rounded-[48px] p-2.5 sm:p-3',
    lg: 'w-[280px] sm:w-[350px] h-[560px] sm:h-[660px] rounded-[40px] sm:rounded-[52px] p-3 sm:p-3.5'
  };

  const landscapeSizeStyles = {
    sm: 'w-[290px] sm:w-[420px] h-[170px] sm:h-[240px] rounded-[30px] sm:rounded-[36px] p-2 sm:p-2.5',
    md: 'w-[290px] sm:w-[480px] md:w-[520px] h-[175px] sm:h-[270px] md:h-[295px] rounded-[32px] sm:rounded-[42px] p-2 sm:p-2.5',
    lg: 'w-[300px] sm:w-[520px] md:w-[580px] h-[180px] sm:h-[290px] md:h-[325px] rounded-[34px] sm:rounded-[46px] p-2.5 sm:p-3'
  };

  return (
    <div className={`relative select-none max-w-full flex flex-col items-center ${className}`}>
      
      {/* Ambient Glow behind phone */}
      <div 
        className="absolute -inset-3 sm:-inset-4 rounded-[60px] blur-xl sm:blur-2xl opacity-40 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${app.accentColor.secondary} 0%, rgba(0,0,0,0) 70%)`
        }}
      />

      {/* Titanium Outer Frame Container with Navigation Arrows */}
      <div className="relative flex items-center justify-center">
        
        {/* Floating Left Arrow (If multiple screens) */}
        {interactive && totalScreens > 1 && (
          <button
            onClick={handlePrev}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-2.5 rounded-full bg-zinc-900/90 border border-white/20 text-white shadow-2xl hover:scale-110 hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer backdrop-blur-md"
            title="Önceki Ekran"
            aria-label="Önceki Ekran"
          >
            <ChevronLeft size={16} className="text-zinc-200" />
          </button>
        )}

        {/* Floating Right Arrow (If multiple screens) */}
        {interactive && totalScreens > 1 && (
          <button
            onClick={handleNext}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-2.5 rounded-full bg-zinc-900/90 border border-white/20 text-white shadow-2xl hover:scale-110 hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer backdrop-blur-md"
            title="Sonraki Ekran"
            aria-label="Sonraki Ekran"
          >
            <ChevronRight size={16} className="text-zinc-200" />
          </button>
        )}

        {/* The Titanium Phone Body */}
        <div className={`relative bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 shadow-2xl border-[3px] sm:border-4 border-slate-600/60 shadow-black/80 shrink-0 transition-all duration-500 ${isLandscape ? landscapeSizeStyles[size] : portraitSizeStyles[size]}`}>
          
          {/* Hardware buttons for Portrait vs Landscape */}
          {!isLandscape ? (
            <>
              <div className="absolute -left-[5px] sm:-left-[7px] top-20 sm:top-24 w-[2px] sm:w-[3px] h-7 sm:h-9 bg-slate-600 rounded-l-md" />
              <div className="absolute -left-[5px] sm:-left-[7px] top-30 sm:top-36 w-[2px] sm:w-[3px] h-9 sm:h-12 bg-slate-600 rounded-l-md" />
              <div className="absolute -left-[5px] sm:-left-[7px] top-42 sm:top-52 w-[2px] sm:w-[3px] h-9 sm:h-12 bg-slate-600 rounded-l-md" />
              <div className="absolute -right-[5px] sm:-right-[7px] top-28 sm:top-32 w-[2px] sm:w-[3px] h-12 sm:h-16 bg-slate-600 rounded-r-md" />
            </>
          ) : (
            <>
              <div className="absolute -top-[5px] sm:-top-[7px] left-20 sm:left-24 h-[2px] sm:h-[3px] w-7 sm:w-9 bg-slate-600 rounded-t-md" />
              <div className="absolute -top-[5px] sm:-top-[7px] left-32 sm:left-36 h-[2px] sm:h-[3px] w-9 sm:w-12 bg-slate-600 rounded-t-md" />
              <div className="absolute -bottom-[5px] sm:-bottom-[7px] right-28 sm:right-32 h-[2px] sm:h-[3px] w-12 sm:w-16 bg-slate-600 rounded-b-md" />
            </>
          )}

          {/* Screen Inner Bezel */}
          <div className={`relative w-full h-full bg-black ${isLandscape ? 'rounded-[26px] sm:rounded-[34px]' : 'rounded-[32px] sm:rounded-[40px]'} overflow-hidden flex flex-col border border-white/10`}>
            
            {/* Status Bar */}
            {!isLandscape ? (
              /* Portrait Status Bar */
              <div className="relative z-20 flex items-center justify-between px-4 sm:px-6 pt-2.5 sm:pt-3 pb-1 text-white text-[10px] sm:text-[11px] font-semibold tracking-tight">
                <span>12:45</span>
                
                {/* Dynamic Island */}
                <div className="absolute left-1/2 -translate-x-1/2 top-2 sm:top-2.5 h-4 sm:h-5 w-20 sm:w-24 bg-black rounded-full border border-white/15 flex items-center justify-between px-1.5 sm:px-2 shadow-inner">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-slate-900 border border-white/20" />
                </div>

                <div className="flex items-center gap-1 sm:gap-1.5 opacity-90">
                  <Signal size={11} />
                  <Wifi size={11} />
                  <Battery size={12} className="text-emerald-400" />
                </div>
              </div>
            ) : (
              /* Landscape Dynamic Island on the left edge */
              <div className="absolute left-2 top-1/2 -translate-y-1/2 h-12 sm:h-16 w-3 sm:w-4 bg-black rounded-full border border-white/20 z-30 flex flex-col items-center justify-between py-1.5 shadow-inner">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-cyan-400 animate-pulse" />
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-slate-900 border border-white/20" />
              </div>
            )}

            {/* Screen Content Container with Drag / Swipe */}
            <div className={`relative flex-1 overflow-hidden flex flex-col justify-between text-white ${isLandscape ? 'pl-6 pr-3 py-2 sm:pl-8 sm:pr-4 sm:py-2.5' : 'p-2 sm:p-3'}`}>
              
              {currentScreen?.video ? (
                /* Live Gameplay / Showcase Video with Autoplay, Play/Pause and Sound Controls */
                <AnimatePresence mode="popLayout" custom={slideDirection}>
                  <motion.div
                    key={`${app.id}-${currentScreen.id}`}
                    custom={slideDirection}
                    initial={{ x: slideDirection * 40 }}
                    animate={{ x: 0 }}
                    exit={{ x: -slideDirection * 40 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    drag={interactive && totalScreens > 1 ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={(e, { offset, velocity }) => {
                      if (offset.x < -30 || velocity.x < -250) {
                        handleNext();
                      } else if (offset.x > 30 || velocity.x > 250) {
                        handlePrev();
                      }
                    }}
                    onClick={togglePlay}
                    className="absolute inset-0 w-full h-full z-10 cursor-pointer flex items-center justify-center bg-black overflow-hidden group"
                  >
                    <video
                      ref={videoRef}
                      src={currentScreen.video}
                      autoPlay
                      loop
                      playsInline
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />

                    {/* Big Center Play Indicator when paused */}
                    {!isPlaying && (
                      <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px] pointer-events-none">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/70 border-2 border-white/60 flex items-center justify-center shadow-2xl backdrop-blur-md">
                          <Play size={24} className="fill-white text-white translate-x-0.5" />
                        </div>
                      </div>
                    )}
                    
                    {/* Bottom Controls Bar (Play/Pause & Sound) */}
                    <div className="absolute bottom-2.5 inset-x-2.5 z-30 flex items-center justify-between pointer-events-auto">
                      {/* Play / Pause Toggle Button */}
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 hover:bg-black/95 border border-white/20 text-white backdrop-blur-md shadow-xl transition-all active:scale-95 cursor-pointer"
                        title={isPlaying ? 'Videoyu Durdur' : 'Videoyu Oynat'}
                      >
                        {isPlaying ? (
                          <>
                            <Pause size={11} className="text-amber-400 fill-amber-400" />
                            <span className="text-[10px] font-mono font-semibold text-zinc-200">Durdur</span>
                          </>
                        ) : (
                          <>
                            <Play size={11} className="text-emerald-400 fill-emerald-400" />
                            <span className="text-[10px] font-mono font-semibold text-emerald-300">Oynat</span>
                          </>
                        )}
                      </button>

                      {/* Floating Audio Control Button */}
                      <button
                        type="button"
                        onClick={toggleSound}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 hover:bg-black/95 border border-white/20 text-white backdrop-blur-md shadow-xl transition-all active:scale-95 cursor-pointer"
                        title={isMuted ? 'Sesi Aç (35% Seviye)' : 'Sesi Kapat'}
                      >
                        {isMuted ? (
                          <>
                            <VolumeX size={13} className="text-rose-400" />
                            <span className="text-[10px] font-mono font-semibold text-zinc-300">Ses Kapalı</span>
                          </>
                        ) : (
                          <>
                            <Volume2 size={13} className="text-emerald-400 animate-pulse" />
                            <span className="text-[10px] font-mono font-semibold text-emerald-300">Ses %35</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              ) : currentScreen?.image ? (
                /* Real In-App Screenshot with Drag Swipe & Bulletproof Visibility */
                <AnimatePresence mode="popLayout" custom={slideDirection}>
                  <motion.div
                    key={`${app.id}-${currentScreen.id}`}
                    custom={slideDirection}
                    initial={{ x: slideDirection * 40 }}
                    animate={{ x: 0 }}
                    exit={{ x: -slideDirection * 40 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    drag={interactive && totalScreens > 1 ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={(e, { offset, velocity }) => {
                      if (offset.x < -30 || velocity.x < -250) {
                        handleNext();
                      } else if (offset.x > 30 || velocity.x > 250) {
                        handlePrev();
                      }
                    }}
                    className="absolute inset-0 w-full h-full z-10 cursor-grab active:cursor-grabbing flex items-center justify-center bg-black"
                  >
                    <img 
                      src={currentScreen.image} 
                      alt={currentScreen.title || app.title} 
                      className="w-full h-full object-cover object-top pointer-events-none select-none"
                      loading="eager"
                      decoding="async"
                    />
                  </motion.div>
                </AnimatePresence>
              ) : (
                /* Simulated Native App Widget UI */
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${app.id}-${currentScreen?.id || 0}`}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="flex-1 flex flex-col justify-between h-full"
                  >
                    {/* NEON RUNNER (Landscape Widescreen Arcade) */}
                    {app.id === 'neon-runner' && (
                      <div className="flex-1 flex flex-col justify-between h-full w-full py-1">
                        <div className="flex justify-between items-center z-10 text-[10px] sm:text-xs font-mono font-black border-b border-fuchsia-500/30 pb-1.5">
                          <div className="flex items-center gap-2">
                            <Gamepad2 size={13} className="text-fuchsia-400" />
                            <span className="text-white font-bold tracking-wider">NEON RUNNER: CYBER DASH</span>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-cyan-400">SCORE: 24,850</span>
                            <span className="text-fuchsia-300 bg-fuchsia-950 px-2 py-0.5 rounded border border-fuchsia-500/50 text-[9px]">
                              60 FPS • 4X SPEED
                            </span>
                          </div>
                        </div>

                        <div className="relative flex-1 my-1 sm:my-2 rounded-xl bg-gradient-to-r from-purple-950/90 via-slate-950 to-indigo-950/90 border border-fuchsia-500/30 overflow-hidden flex flex-col justify-center px-4">
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(217,70,239,0.08)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

                          <div className="relative flex items-center justify-between z-10 my-auto">
                            <motion.div 
                              animate={{ y: [0, -14, 0] }}
                              transition={{ repeat: Infinity, duration: 0.7, ease: 'easeInOut' }}
                              className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-pink-500 border-2 border-white shadow-[0_0_20px_rgba(217,70,239,0.8)] flex items-center justify-center text-sm sm:text-base font-black"
                            >
                              🤖
                            </motion.div>

                            <div className="flex gap-4 sm:gap-6">
                              <span className="text-amber-300 text-sm sm:text-base animate-pulse">💎</span>
                              <span className="text-cyan-300 text-sm sm:text-base animate-pulse delay-100">⚡</span>
                              <span className="text-amber-300 text-sm sm:text-base animate-pulse delay-200">💎</span>
                            </div>

                            <div className="flex gap-2 items-center">
                              <div className="w-3 sm:w-4 h-12 sm:h-16 rounded bg-gradient-to-t from-red-600 to-fuchsia-500 shadow-lg shadow-red-500 animate-pulse" />
                              <div className="w-3 sm:w-4 h-8 sm:h-10 rounded bg-gradient-to-t from-purple-600 to-cyan-400 shadow-md shadow-cyan-400 animate-pulse delay-75" />
                            </div>
                          </div>

                          <div className="h-1.5 sm:h-2 w-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-500 rounded-full shadow-[0_0_15px_rgba(217,70,239,0.9)] z-10" />
                        </div>

                        <div className="flex justify-between items-center text-[10px] sm:text-xs z-10">
                          <div className="flex items-center gap-2 text-zinc-400 font-mono text-[9px] sm:text-[10px]">
                            <Trophy size={11} className="text-amber-400" />
                            <span>EN YÜKSEK SKOR: <strong>48.200</strong></span>
                          </div>
                          <div className="flex gap-2">
                            <button className="px-3 py-1 rounded-lg bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-zinc-950 font-black text-[10px] sm:text-[11px] flex items-center gap-1 shadow-md shadow-fuchsia-500/30">
                              <Play size={10} className="fill-zinc-950" /> OYNA
                            </button>
                            <button className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-bold">
                              ⚡ Yükselt
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              )}

              {/* iOS/Android Home Indicator Bar */}
              {!isLandscape ? (
                <div className="w-20 sm:w-28 h-1 bg-white/40 rounded-full mx-auto mt-1 sm:mt-2 z-20" />
              ) : (
                <div className="absolute right-1 top-1/2 -translate-y-1/2 w-1 h-16 sm:h-20 bg-white/30 rounded-full z-20" />
              )}

            </div>
          </div>
        </div>

      </div>

      {/* Interactive Screen Selector Pills & Swipe Guide (If multiple screens) */}
      {interactive && totalScreens > 1 && (
        <div className="flex flex-col items-center gap-2.5 mt-3 sm:mt-4 w-full">
          
          {/* Active Screen Title & Counter Pill */}
          <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/80 px-3.5 py-1 rounded-full border border-white/10 shadow-sm">
            <MousePointerClick size={12} className="text-emerald-400" />
            <span className="text-white font-medium">{currentScreen.title}</span>
            <span className="text-zinc-600">•</span>
            <span className="text-emerald-400 font-mono font-semibold">{activeScreenIndex + 1} / {totalScreens}</span>
          </div>

          {/* Interactive Screen Switcher Tabs */}
          <div className="flex items-center justify-center gap-1.5 p-1 rounded-2xl bg-zinc-900/60 border border-white/5 max-w-full overflow-x-auto scrollbar-none">
            {app.screens.map((screen, idx) => {
              const isActive = activeScreenIndex === idx;
              return (
                <button
                  key={screen.id}
                  onClick={() => handleSelectScreen(idx)}
                  className={`relative px-3 py-1 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId={`screenPill-${app.id}`}
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 bg-white/10 border border-white/15 rounded-xl shadow-inner"
                    />
                  )}
                  <span className={`relative z-10 w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-400' : 'bg-zinc-600'}`} />
                  <span className="relative z-10 truncate max-w-[120px]">{screen.title.split('&')[0].trim()}</span>
                </button>
              );
            })}
          </div>

          <div className="text-[10px] text-zinc-500 font-mono flex items-center gap-1">
            <span>👈 Ekranı kaydırabilir veya oklara tıklayabilirsiniz 👉</span>
          </div>

        </div>
      )}

    </div>
  );
};
