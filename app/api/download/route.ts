
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { platform, link } = body;

    if (!platform || !link) {
      return NextResponse.json({ status: false, error: "Tautan wajib diisi." }, { status: 400 });
    }

    const encodedLink = encodeURIComponent(link);
    let endpoint = "";

    switch (platform) {
      case 'instagram': 
        endpoint = `https://api.nexray.web.id/downloader/v1/instagram?url=${encodedLink}`; 
        break;
      case 'igstory': 
        endpoint = `https://api-faa.my.id/faa/igdl?url=${encodedLink}`; 
        break;
      case 'tiktok': 
        endpoint = `https://api.nexray.web.id/downloader/tiktok?url=${encodedLink}`; 
        break;
      case 'ytmp4': 
        endpoint = `https://api.nexray.web.id/downloader/ytmp4?url=${encodedLink}&resolusi=1080`; 
        break;
      case 'spotify': 
        endpoint = `https://api.nexray.web.id/downloader/spotify?url=${encodedLink}`; 
        break;
      default: 
        return NextResponse.json({ status: false, error: "Platform tidak didukung." }, { status: 400 });
    }

    const res = await fetch(endpoint, { 
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (!res.ok) {
      return NextResponse.json({ status: false, error: `API Provider Error (${res.status})` }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Download Route Error:", error);
    return NextResponse.json({ status: false, error: "Terjadi kesalahan pada server Nexa." }, { status: 500 });
  }
}
