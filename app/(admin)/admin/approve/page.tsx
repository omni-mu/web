'use client';

import { useState } from 'react';
import { Approval, ApproveForm } from '@/components/approve-form';
import { RecentApprovals } from '@/components/recent-approvals';

const MAX_RECENT = 5;

export default function Home() {
  const [approvals, setApprovals] = useState<Approval[]>([]);

  const addApproval = (approval: Approval) =>
    setApprovals(current => [approval, ...current].slice(0, MAX_RECENT));

  return (
    <>
      <main>
        <section className="card" aria-labelledby="title">
          <header className="brand">
            <img src="/logo.svg" alt="Omni Captain" width={48} height={48} />
            <span>Captain Admin</span>
          </header>

          <h1 id="title">Approve a driver</h1>
          <p className="lede">
            Enter the email they signed up with. Their account is verified the moment you approve.
          </p>

          <ApproveForm onApproved={addApproval} />
          <RecentApprovals approvals={approvals} />
        </section>
      </main>

      <footer className="band">
        <span>Omni</span>
        <b>Captain</b>
      </footer>
    </>
  );
}
