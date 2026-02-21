
'use client';

import React, { useState, useEffect } from 'react';
import { DownloadSection } from '../components/DownloadSection';
import { BACKGROUND_IMAGE } from '../constants';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start py-8 px-4 sm:px-6 md:px-12 lg:justify-center bg-[#020617]">
      {/* Background Image Layer */}
      <div 
        className={`fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-[3000ms] ease-out ${mounted ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
        style={{ 
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          backgroundColor: '#020617'
        }}
      />
      
      {/* Premium Overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-black/90 via-black/50 to-black/90" />
      
      {/* Animated Light Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-6xl fade-up-init">
        <header className="text-center mb-8 md:mb-14 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full premium-glass text-indigo-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2 animate-pulse">
            Xcore Media Downloader
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black title-reveal tracking-tighter leading-[1.1]">
            Xcore Downloader
          </h1>
          <p className="text-slate-300 text-sm md:text-lg lg:text-xl font-medium max-w-2xl mx-auto px-4 leading-relaxed opacity-80">
            Platform premium untuk menyimpan konten favorit Anda dengan kualitas terbaik secara instan dan aman.
          </p>
        </header>

        <div className="premium-glass rounded-[2rem] md:rounded-[3rem] p-1 shadow-2xl overflow-hidden backdrop-blur-xl border border-white/10">
          <DownloadSection />
        </div>
      </main>

      <footer className="relative z-10 mt-12 md:mt-20 text-slate-500 text-[9px] md:text-[10px] font-semibold tracking-widest uppercase pb-6 text-center">
        &copy; {new Date().getFullYear()} Xcore • Next.js Architecture • Vercel Optimized
      </footer>
    </div>
  );
}
