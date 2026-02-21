
import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Xcore Downloader | Premium Media Saver', // kalian bisa ganti name di sini
  description: 'Download media from Instagram, TikTok, YouTube, and Spotify in MP4 and MP3.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={jakarta.className}>
      <body className="bg-[#020617] text-white">
        {children}
      </body>
    </html>
  );
}
