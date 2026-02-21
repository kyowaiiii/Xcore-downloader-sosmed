
import React from 'react';
import { DownloadResult, PlatformInfo, MediaItem } from '../types';

interface Props {
  result: DownloadResult;
  platform: PlatformInfo;
}

const AudioIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
);

const VideoIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line><line x1="7" y1="21" x2="7" y2="17"></line><line x1="17" y1="21" x2="17" y2="17"></line></svg>
);

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

const HeartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
);

const ChatIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
);

const UsersIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
);

export const ResultDisplay: React.FC<Props> = ({ result, platform }) => {
  const title = result.title || 'Konten Berhasil Diekstrak';
  const thumbnail = result.thumbnail || `https://placehold.co/600x400/020617/white?text=${platform.name}`;
  const medias = result.medias || [];

  return (
    <div className="bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden fade-up-init shadow-2xl backdrop-blur-xl group">
      <div className="flex flex-col lg:flex-row">
        {/* Preview Side */}
        <div className="w-full lg:w-2/5 relative aspect-video lg:aspect-square bg-black/60 overflow-hidden">
          <img 
            src={thumbnail} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90" />
          
          <div className="absolute top-6 left-6">
             <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest bg-gradient-to-r ${platform.color} text-white shadow-xl`}>
               {platform.icon} {platform.name}
             </div>
          </div>

          {result.duration && (
            <div className="absolute bottom-6 left-6 font-mono text-xs bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white/90">
              {result.duration}
            </div>
          )}

          {/* Stats Badges */}
          {result.stats && (
            <div className="absolute bottom-6 right-6 flex flex-col gap-2">
              {result.stats.likes && (
                <div className="flex items-center gap-2 bg-red-500/20 backdrop-blur-md px-3 py-1 rounded-full border border-red-500/30 text-red-400 text-[10px] font-bold">
                  <HeartIcon /> {result.stats.likes}
                </div>
              )}
              {result.stats.comments && (
                <div className="flex items-center gap-2 bg-indigo-500/20 backdrop-blur-md px-3 py-1 rounded-full border border-indigo-500/30 text-indigo-400 text-[10px] font-bold">
                  <ChatIcon /> {result.stats.comments}
                </div>
              )}
              {result.stats.followers && (
                <div className="flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                  <UsersIcon /> {result.stats.followers}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Side */}
        <div className="w-full lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-10">
            <h3 className="text-2xl md:text-4xl font-black text-white mb-4 line-clamp-2 leading-tight tracking-tighter">
              {title}
            </h3>
            {result.author && (
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                <span className="opacity-50">BY</span> @{result.author}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mb-4 pl-1">
              READY FOR DOWNLOAD
            </p>
            
            {medias.length > 0 ? medias.map((media, idx) => (
              <a
                key={idx}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between w-full p-6 rounded-[2rem] transition-all duration-500 group/item border ${
                  media.type === 'audio' 
                    ? 'bg-emerald-500/5 border-emerald-500/10 hover:border-emerald-500/40 hover:bg-emerald-500/10' 
                    : 'bg-indigo-500/5 border-indigo-500/10 hover:border-indigo-500/40 hover:bg-indigo-500/10'
                }`}
              >
                <div className="flex items-center gap-6">
                  <div className={`p-4 rounded-2xl shadow-inner ${
                    media.type === 'audio' ? 'text-emerald-400 bg-emerald-400/10' : 'text-indigo-400 bg-indigo-400/10'
                  }`}>
                    {media.type === 'audio' ? <AudioIcon /> : <VideoIcon />}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-lg text-white group-hover/item:translate-x-1 transition-transform uppercase tracking-tight">
                      DOWNLOAD {media.type === 'audio' ? 'MP3' : 'MP4'}
                    </span>
                    <span className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">
                      {media.quality} • {media.extension}
                    </span>
                  </div>
                </div>
                
                <div className={`p-4 rounded-2xl transition-all duration-500 group-hover/item:scale-110 shadow-lg ${
                   media.type === 'audio' 
                    ? 'bg-emerald-500 text-black shadow-emerald-500/20' 
                    : 'bg-white text-black shadow-white/10'
                }`}>
                  <DownloadIcon />
                </div>
              </a>
            )) : (
              <div className="py-12 text-center border-2 border-dashed border-white/5 rounded-[2.5rem]">
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest animate-pulse">
                  Fetching Download Links...
                </p>
              </div>
            )}
          </div>
          
          <p className="mt-8 text-[9px] text-slate-600 font-bold uppercase tracking-widest text-center italic">
            * Nexa uses end-to-end encryption for all media extractions.
          </p>
        </div>
      </div>
    </div>
  );
};
