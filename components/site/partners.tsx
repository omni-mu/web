// Official logo files live in public/partners; a partner without `logo` falls back to its name in text.
// `tint` recolors a single-color logo (Zomato's file is white-only); the rest keep their own colors.
const PARTNERS: { name: string; logo?: string; tint?: string }[] = [
  { name: 'Zomato', logo: '/partners/zomato.png', tint: '#e23744' },
  { name: 'Swiggy', logo: '/partners/swiggy.png' },
  { name: 'Myntra', logo: '/partners/myntra.svg' },
  { name: 'Pidge', logo: '/partners/pidge.svg' },
  { name: 'Zippee', logo: '/partners/zippee.png' },
];

export function Partners() {
  return (
    <section className="partners" aria-labelledby="partners-h">
      <h2 id="partners-h">Moving alongside the brands you already know</h2>
      <ul>
        {PARTNERS.map(({ name, logo, tint }) => (
          <li key={name}>
            {logo && tint ? (
              <span
                className="partner-logo partner-tint"
                role="img"
                aria-label={name}
                style={{ backgroundColor: tint, maskImage: `url(${logo})`, WebkitMaskImage: `url(${logo})` }}
              />
            ) : logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="partner-logo" src={logo} alt={name} height={44} />
            ) : (
              <span className="partner-text">{name}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
