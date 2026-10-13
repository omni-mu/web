import type { CSSProperties } from 'react';
import { Services } from '@/components/site/services';
import { RouteMark } from '@/components/site/route-mark';
import { Partners } from '@/components/site/partners';
import { CityGlyph, PhoneGlyph, WheelGlyph } from '@/components/site/glyphs';
import { ArrowIcon } from '@/components/icons';
import { DRIVER_APP, RIDER_APP, SITE_URL } from '@/lib/site';

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': `${SITE_URL}/#org`, name: 'Omni', url: SITE_URL, logo: `${SITE_URL}/logo-omni.svg`, areaServed: { '@type': 'City', name: 'Bengaluru' } },
    { '@type': 'MobileApplication', name: 'Omni', operatingSystem: 'ANDROID', applicationCategory: 'TravelApplication', url: RIDER_APP, publisher: { '@id': `${SITE_URL}/#org` } },
    { '@type': 'MobileApplication', name: 'Omni Captain', operatingSystem: 'ANDROID', applicationCategory: 'BusinessApplication', url: DRIVER_APP, publisher: { '@id': `${SITE_URL}/#org` } },
  ],
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

const PROBLEMS = [
  ['Three apps, three fleets', 'Rides, food and parcels each run their own vehicles on the same roads. Too many of them are half-empty.'],
  ['The drive back', 'A driver drops off and heads home with nothing on board. That distance still burns fuel and time.'],
  ['You cover the cost', 'Idle kilometers get priced into fares and waits. Customers, drivers and cities all pay.'],
];

const COMBOS = ['Rides + Food', 'Food + Parcel', 'Parcel + Ride', 'All in one'];

const SCHEDULE = [
  ['09:10', 'Ride', 'Indiranagar → MG Road'],
  ['09:24', 'Parcel', 'MG Road → Shivajinagar'],
  ['09:41', 'Food', 'Shivajinagar → Cunningham Rd'],
  ['09:58', 'Ride', 'Cunningham Rd → Hebbal'],
];

const AUDIENCE = [
  { title: 'Drivers', body: 'More paid kilometers per trip. Rides, food and parcels back to back, so less time spent driving empty.', cta: 'Drive with Omni', Glyph: WheelGlyph },
  { title: 'Customers', body: 'One app for every move. Shared routes keep fares low without slowing you down.', cta: 'Get the app', Glyph: PhoneGlyph },
  { title: 'Cities', body: 'Fewer half-empty vehicles on the road. Less traffic and less fuel for the same deliveries.', cta: null, Glyph: CityGlyph },
];

const TECH = [
  ['Route clustering', 'Requests headed the same way are grouped onto one vehicle and one path.'],
  ['Multi-task optimization', 'Rides, meals and parcels are sequenced together instead of queued in separate apps.'],
  ['Real-time matching', 'A new request goes to the nearest vehicle already heading that way.'],
];

const Mark = () => (
  <svg viewBox="0 0 48 28" aria-hidden="true">
    <rect x="3" y="3" width="42" height="22" rx="11" fill="none" stroke="currentColor" strokeWidth="5" />
  </svg>
);

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <header className="nav">
        <a href="#top" className="logo" aria-label="Omni home">
          <Mark />
          <span>Omni</span>
        </a>
        <nav aria-label="Primary">
          <a href="#how">How it works</a>
          <a href="#drivers">Drivers</a>
          <a href="#technology">Technology</a>
        </nav>
        <a href={DRIVER_APP} {...ext} className="btn btn-yellow btn-sm">Drive with Omni</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="soon"><i aria-hidden="true" /> Live in Bengaluru</p>
            <h1>
              <span className="w" style={{ '--i': 0 } as CSSProperties}>One app.</span>{' '}
              <span className="w" style={{ '--i': 1 } as CSSProperties}>Every move.</span>
            </h1>
            <p className="sub">
              Ride, order dinner, send a parcel. One network moves all three, so fares drop and drivers stop running empty.
            </p>
            <div className="cta-row">
              <a href={DRIVER_APP} {...ext} className="btn btn-yellow">Drive with Omni <ArrowIcon className="ico" /></a>
              <a href={RIDER_APP} {...ext} className="btn btn-ghost">Get the app</a>
            </div>
          </div>
          <RouteMark />
        </section>

        <Services />

        <section className="problem" id="how">
          <h2>Every empty kilometer is paid for by someone.</h2>
          <ol>
            {PROBLEMS.map(([title, body]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="network">
          <div className="network-copy">
            <h2>One network. Every kind of trip.</h2>
            <p>When a vehicle finishes one job, Omni finds the next one nearby. A ride, a meal, a parcel: whatever is closest goes next.</p>
            <ul className="combos" aria-label="Service combinations">
              {COMBOS.map(c => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <div className="schedule">
            <p className="schedule-label">A sample morning for one vehicle (illustrative)</p>
            {SCHEDULE.map(([time, type, route]) => (
              <div className="row" key={time}>
                <time>{time}</time>
                <b data-type={type}>{type}</b>
                <span>{route}</span>
              </div>
            ))}
          </div>
        </section>

        <Partners />

        <section className="audience" id="drivers">
          {AUDIENCE.map(({ title, body, cta, Glyph }) => (
            <article key={title}>
              <Glyph className="aud-glyph" />
              <h3>{title}</h3>
              <p>{body}</p>
              {cta && <a href={title === 'Drivers' ? DRIVER_APP : RIDER_APP} {...ext} className="link">{cta} <ArrowIcon className="ico" /></a>}
            </article>
          ))}
        </section>

        <section className="tech" id="technology">
          <h2>Smart routing, quietly doing the work.</h2>
          {TECH.map(([title, body]) => (
            <div className="tech-row" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </section>

        <section className="closer" id="join">
          <h2>Move with Omni.</h2>
          <p>Live in Bengaluru today. Download the app and get moving.</p>
          <div className="cta-row">
            <a href={DRIVER_APP} {...ext} className="btn btn-green">Drive with Omni <ArrowIcon className="ico" /></a>
            <a href={RIDER_APP} {...ext} className="btn btn-outline">Get the app</a>
          </div>
        </section>
      </main>

      <footer className="foot">
        <span className="logo"><Mark /><span>Omni</span></span>
        <small>© {new Date().getFullYear()} Omni. One app. Every move.</small>
      </footer>
    </>
  );
}
