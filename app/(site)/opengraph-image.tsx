import { ImageResponse } from 'next/og';

export const alt = 'Omni: One app. Every move.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 80, background: '#1c683c', color: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 96, height: 56, borderRadius: 28, border: '10px solid #fff' }} />
          <div style={{ fontSize: 56, letterSpacing: -2 }}>Omni</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 132, lineHeight: 1, letterSpacing: -4 }}>
          <div>One app.</div>
          <div style={{ color: '#f5c518' }}>Every move.</div>
        </div>
        <div style={{ fontSize: 32, color: 'rgba(255,255,255,0.8)' }}>Rides, food and parcels. Live in Bengaluru.</div>
      </div>
    ),
    size,
  );
}
