import { EarningsForm } from '@/components/earnings-form';

export default function EarningsPage() {
  return (
    <>
      <main>
        <section className="card wide" aria-labelledby="title">
          <header className="brand">
            <img src="/logo.svg" alt="Omni Captain" width={48} height={48} />
            <span>Captain Admin</span>
          </header>

          <h1 id="title">Daily earnings</h1>
          <p className="lede">
            Pick the day and paste one driver per line as email, amount. The leaderboard shows the day you updated
            most recently, and submitting a day again replaces its amounts.
          </p>

          <EarningsForm />
        </section>
      </main>

      <footer className="band">
        <span>Omni</span>
        <b>Captain</b>
      </footer>
    </>
  );
}
