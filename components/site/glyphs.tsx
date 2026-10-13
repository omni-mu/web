import type { SVGProps } from 'react';

function Glyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export const RideGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Glyph {...p}>
    <circle cx="24" cy="15" r="6" />
    <path d="M11 38c1.5-8 6.5-12 13-12s11.5 4 13 12" />
  </Glyph>
);

export const FoodGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Glyph {...p}>
    <path d="M8 24h32c0 8.5-6.5 15-16 15S8 32.5 8 24Z" />
    <path d="M17 19c-2-2.5 2-4.5 0-7M25 19c-2-2.5 2-4.5 0-7M33 19c-2-2.5 2-4.5 0-7" />
  </Glyph>
);

export const ParcelGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Glyph {...p}>
    <path d="M24 6 40 14v20L24 42 8 34V14L24 6Z" />
    <path d="M8 14l16 8 16-8M24 22v20M16 10l16 8" />
  </Glyph>
);

export const WheelGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Glyph {...p}>
    <circle cx="24" cy="24" r="17" />
    <circle cx="24" cy="24" r="4" />
    <path d="M7.5 22c5 .5 9.5 1 12.5 2M40.5 22c-5 .5-9.5 1-12.5 2M24 28v13" />
  </Glyph>
);

export const PhoneGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Glyph {...p}>
    <rect x="13" y="5" width="22" height="38" rx="5" />
    <path d="M21 37h6" />
    <path d="M19 17c2-4 8-4 10 0M17 24h14" />
  </Glyph>
);

export const CityGlyph = (p: SVGProps<SVGSVGElement>) => (
  <Glyph {...p}>
    <path d="M5 42h38M10 42V22h10v20M20 42V10h12v32M32 42V26h6v16" />
    <path d="M25 17h2M25 24h2M25 31h2M14 28h2M14 34h2" />
  </Glyph>
);
