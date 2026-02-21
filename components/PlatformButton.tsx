
import React from 'react';
import { PlatformInfo } from '../types';

interface Props {
  platform: PlatformInfo;
  isActive: boolean;
  onClick: () => void;
}

export const PlatformButton: React.FC<Props> = ({ platform, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative group px-5 py-3.5 rounded-2xl flex items-center gap-3 transition-all duration-500 whitespace-nowrap overflow-hidden ${
        isActive 
          ? `text-white shadow-2xl scale-105 z-10` 
          : 'text-slate-400 hover:text-white hover:bg-white/5'
      }`}
      style={{
        background: isActive ? `linear-gradient(135deg, ${platform.glow} 0%, rgba(255,255,255,0.05) 100%)` : 'transparent',
        boxShadow: isActive ? `0 0 20px -5px ${platform.glow}` : 'none'
      }}
    >
      {/* Icon Wrapper */}
      <div className={`transition-transform duration-500 ${isActive ? 'scale-110' : 'group-hover:scale-110 opacity-70 group-hover:opacity-100'}`}>
        {platform.icon}
      </div>
      
      {/* Label */}
      <span className="font-bold text-sm tracking-tight smooth-text">{platform.name}</span>

      {/* Background Animated Gradient for active state */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full animate-[shimmer_3s_infinite]" />
      )}
    </button>
  );
};
