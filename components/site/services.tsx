'use client';

import { useId, useState } from 'react';
import { FoodGlyph, ParcelGlyph, RideGlyph } from './glyphs';

const SERVICES = [
  {
    key: 'Ride',
    line: 'Get in a vehicle that’s already headed your way. Shared roads, lower fares.',
    stops: [['Pickup', RideGlyph], ['Shared stretch', null], ['Drop', null]],
  },
  {
    key: 'Food',
    line: 'Dinner rides with a trip that’s passing the kitchen. Hot on arrival, cheaper to send.',
    stops: [['Restaurant', FoodGlyph], ['On the way', null], ['Doorstep', null]],
  },
  {
    key: 'Parcel',
    line: 'Send it across town without hiring a van for one box.',
    stops: [['Collect', ParcelGlyph], ['Grouped route', null], ['Deliver', null]],
  },
  {
    key: 'Multi',
    line: 'A ride, a meal and a parcel on one trip. The network stitches it together.',
    stops: [['Ride', RideGlyph], ['Food', FoodGlyph], ['Parcel', ParcelGlyph]],
  },
] as const;

export function Services() {
  const [active, setActive] = useState(0);
  const id = useId();
  const current = SERVICES[active];

  return (
    <section className="choose" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`}>Pick a move. Or stack three.</h2>
      <div className="tabs" role="tablist" aria-label="Services">
        {SERVICES.map((s, i) => (
          <button
            key={s.key}
            role="tab"
            id={`${id}-t${i}`}
            aria-selected={i === active}
            aria-controls={`${id}-p`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={e => {
              if (e.key === 'ArrowRight') setActive((i + 1) % SERVICES.length);
              if (e.key === 'ArrowLeft') setActive((i + SERVICES.length - 1) % SERVICES.length);
            }}
          >
            {s.key}
          </button>
        ))}
      </div>
      <div className="panel" role="tabpanel" id={`${id}-p`} aria-labelledby={`${id}-t${active}`} key={current.key}>
        <p>{current.line}</p>
        <ol className="stops">
          {current.stops.map(([label, Glyph]) => (
            <li key={label}>
              {Glyph && <Glyph className="stop-glyph" />}
              {label}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
