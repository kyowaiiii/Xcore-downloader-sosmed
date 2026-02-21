
import React from 'react';
import { Platform, PlatformInfo } from './types';

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const StoryIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10zM12 6v12M6 12h12"></path></svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
);

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
);

const SpotifyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12.5s2-1 4-1 4 1 4 1"></path><path d="M7 10.5s2.5-1.5 5-1.5 5 1.5 5 1.5"></path><path d="M9 14.5s1.5-.5 3-.5 3 .5 3 .5"></path></svg>
);

export const PLATFORMS: PlatformInfo[] = [
  {
    id: Platform.INSTAGRAM,
    name: 'Instagram',
    icon: <InstagramIcon />,
    placeholder: 'https://www.instagram.com/p/... (Post/Reel)',
    color: 'from-purple-600 to-pink-500',
    glow: 'rgba(217, 70, 239, 0.3)'
  },
  {
    id: Platform.IG_STORY,
    name: 'IG Story',
    icon: <StoryIcon />,
    placeholder: 'https://www.instagram.com/stories/... (Story)',
    color: 'from-orange-500 to-red-500',
    glow: 'rgba(249, 115, 22, 0.3)'
  },
  {
    id: Platform.TIKTOK,
    name: 'TikTok',
    icon: <TikTokIcon />,
    placeholder: 'https://www.tiktok.com/@user/video/...',
    color: 'from-cyan-500 to-blue-500',
    glow: 'rgba(6, 182, 212, 0.3)'
  },
  {
    id: Platform.YOUTUBE_MP4,
    name: 'YouTube',
    icon: <YouTubeIcon />,
    placeholder: 'https://www.youtube.com/watch?v=...',
    color: 'from-red-600 to-red-800',
    glow: 'rgba(220, 38, 38, 0.3)'
  },
  {
    id: Platform.SPOTIFY,
    name: 'Spotify',
    icon: <SpotifyIcon />,
    placeholder: 'https://open.spotify.com/track/...',
    color: 'from-green-500 to-green-700',
    glow: 'rgba(34, 197, 94, 0.3)'
  }
];

export const BACKGROUND_IMAGE = 'https://files.useyapi.com/projects/jYaWDB-0iSo0DPGsRZWnO/uploads/5b7973b3-072c-4a2d-a41a-bbc492705d72-1001928846.jpg';
