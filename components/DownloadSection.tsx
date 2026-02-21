
import React, { useState } from 'react';
import { Platform, DownloadResult } from '../types';
import { PLATFORMS } from '../constants';
import { PlatformButton } from './PlatformButton';
import { ResultDisplay } from './ResultDisplay';
import { fetchDownload } from '../services/downloadService';

export const DownloadSection: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(Platform.INSTAGRAM);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DownloadResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const activePlatform = PLATFORMS.find(p => p.id === selectedPlatform)!;

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      setError('Harap masukkan tautan yang valid.');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await fetchDownload({ platform: selectedPlatform, link: url });
      if (data.status) {
        setResult(data);
      } else {
        setError(data.error || 'Gagal memproses video. Pastikan tautan benar.');
      }
    } catch (err) {
      console.error(err);
      setError('Terjadi kesalahan pada server. Silakan coba lagi nanti.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-8 space-y-10">
      {/* Platform Selector Grid */}
      <div className="flex flex-wrap justify-center gap-3">
        {PLATFORMS.map((platform) => (
          <PlatformButton 
            key={platform.id}
            platform={platform}
            isActive={selectedPlatform === platform.id}
            onClick={() => {
              setSelectedPlatform(platform.id);
              setError(null);
            }}
          />
        ))}
      </div>

      {/* Input Field Area */}
      <form onSubmit={handleDownload} className="relative group max-w-3xl mx-auto">
        {/* Animated Glow Border */}
        <div 
          className="absolute -inset-[1px] rounded-3xl blur-[2px] opacity-20 transition-all duration-700 group-hover:opacity-40 group-focus-within:opacity-50"
          style={{ background: `linear-gradient(90deg, #6366f1, #a855f7, #ec4899)` }}
        ></div>

        <div className="relative bg-[#020617]/80 backdrop-blur-3xl rounded-[1.4rem] flex flex-col md:flex-row items-stretch md:items-center overflow-hidden border border-white/5">
          <div className="flex-1 flex items-center px-6">
             <div className="text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                {activePlatform.icon}
             </div>
             <input 
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={activePlatform.placeholder}
              className="flex-1 bg-transparent px-4 py-6 text-white placeholder-slate-600 focus:outline-none text-base font-medium smooth-text"
            />
          </div>
          
          <button 
            type="submit"
            disabled={loading}
            className={`px-10 py-5 md:py-0 h-full text-sm font-extrabold uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-3 ${
              loading 
                ? 'bg-slate-900 text-slate-500 cursor-not-allowed' 
                : 'bg-white text-black hover:bg-indigo-50 active:scale-95'
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing
              </>
            ) : (
              <>
                Extract
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Error State */}
      {error && (
        <div className="max-w-xl mx-auto bg-red-500/10 border border-red-500/20 backdrop-blur-xl text-red-300 px-6 py-4 rounded-2xl animate-fade-up">
          <p className="flex items-center gap-3 text-sm font-bold">
            <span className="bg-red-500/20 p-1.5 rounded-lg text-xs">ERR</span> {error}
          </p>
        </div>
      )}

      {/* Result Display Section */}
      {result && (
        <div className="max-w-4xl mx-auto pt-4">
           <ResultDisplay result={result} platform={activePlatform} />
        </div>
      )}
    </div>
  );
};
