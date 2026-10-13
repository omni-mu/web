const ROUTE =
  'M 60 380 C 180 380 200 150 340 190 C 480 230 520 340 600 260 C 650 210 660 150 670 110';

// City blocks: 100 x 70 with 20px streets between them.
const BLOCKS = Array.from({ length: 6 * 5 }, (_, i) => ({
  x: 10 + (i % 6) * 120,
  y: 20 + Math.floor(i / 6) * 90,
  park: i === 8 || i === 21,
}));

const STOPS = [
  { x: 185, y: 281, title: 'Ride', note: 'Rider on board', card: { x: 36, y: 318 }, cls: 'c1' },
  { x: 388, y: 208, title: 'Food', note: 'Meal picked up', card: { x: 308, y: 108 }, cls: 'c2' },
  { x: 603, y: 257, title: 'Parcel', note: 'Parcel on board', card: { x: 500, y: 316 }, cls: 'c3' },
];

const ICONS = {
  Ride: <><circle cx="24" cy="15" r="6" /><path d="M11 38c1.5-8 6.5-12 13-12s11.5 4 13 12" /></>,
  Food: <><path d="M8 24h32c0 8.5-6.5 15-16 15S8 32.5 8 24Z" /><path d="M17 19c-2-2.5 2-4.5 0-7M25 19c-2-2.5 2-4.5 0-7M33 19c-2-2.5 2-4.5 0-7" /></>,
  Parcel: <><path d="M24 6 40 14v20L24 42 8 34V14L24 6Z" /><path d="M8 14l16 8 16-8M24 22v20" /></>,
};

/** A city map. One vehicle threads a single route and ends up carrying a rider, a meal and a parcel, while empty vehicles drift past. */
export function RouteMark() {
  return (
    <svg className="route" viewBox="0 0 720 480" role="img" aria-label="One vehicle picks up a rider, a meal and a parcel on a single route while other vehicles drive past empty">
      <g className="blocks">
        {BLOCKS.map(b => (
          <rect key={`${b.x}-${b.y}`} x={b.x} y={b.y} width="100" height="70" rx="12" className={b.park ? 'park' : undefined} />
        ))}
      </g>

      <g className="empty e1"><rect x="-20" y="-9" width="40" height="18" rx="9" /></g>
      <g className="empty e2"><rect x="-20" y="-9" width="40" height="18" rx="9" /></g>

      <g className="run">
        <path d={ROUTE} className="road" />
        <path d={ROUTE} className="trail" pathLength="1" />

        <circle cx="60" cy="380" r="9" className="origin" />
        <g transform="translate(670 110)" className="dest">
          <circle r="16" />
          <path d="M-5 6V-7l11 4-11 4" />
        </g>

        {STOPS.map(s => (
          <g key={s.title} className={`pickup ${s.cls}`}>
            <circle cx={s.x} cy={s.y} r="22" className="halo" />
            <circle cx={s.x} cy={s.y} r="22" className="ring" />
            <circle cx={s.x} cy={s.y} r="8" className="pin" />
            <g transform={`translate(${s.card.x} ${s.card.y})`}>
              <g className="card">
                <rect width="164" height="52" rx="14" />
                <circle cx="26" cy="26" r="16" />
                <g transform="translate(14 14) scale(0.5)" className="gl">{ICONS[s.title as keyof typeof ICONS]}</g>
                <text x="52" y="23" className="t1">{s.title}</text>
                <text x="52" y="40" className="t2">{s.note}</text>
              </g>
            </g>
          </g>
        ))}

        <g className="vehicle">
          <rect x="-24" y="-12" width="48" height="24" rx="12" className="car" />
          <rect x="6" y="-8" width="14" height="16" rx="7" className="car-cab" />
          <circle cx="-17" cy="0" r="3.5" className="cargo k1" />
          <circle cx="-8" cy="0" r="3.5" className="cargo k2" />
          <circle cx="1" cy="0" r="3.5" className="cargo k3" />
        </g>
      </g>
    </svg>
  );
}
