'use client';

import { FormEvent, useState } from 'react';
import { SkippedEntry, todayInIndia } from '@/lib/earnings-input';
import { postJson } from '@/lib/post-json';
import { AlertIcon, ArrowIcon, CheckIcon, SpinnerIcon } from './icons';

type Status = 'idle' | 'loading' | 'success' | 'error';
type Published = { date: string; saved: number; skipped: SkippedEntry[] };

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00`).toLocaleDateString([], { day: 'numeric', month: 'short', year: 'numeric' });

export function EarningsForm() {
  const [date, setDate] = useState(todayInIndia);
  const [entries, setEntries] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [published, setPublished] = useState<Published | null>(null);

  const isLoading = status === 'loading';
  const hasError = status === 'error';

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus('loading');

    const result = await postJson<Published>('/api/earnings', { date, entries });

    if (result.ok) {
      setStatus('success');
      setPublished(result.data);
      setEntries('');
    } else {
      setStatus('error');
      setError(result.error);
    }
  }

  function markEdited() {
    if (!isLoading) setStatus('idle');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <input
          type="date"
          required
          max={todayInIndia()}
          aria-label="Earnings date"
          value={date}
          onChange={event => {
            setDate(event.target.value);
            markEdited();
          }}
        />
      </div>

      <div className="control" data-invalid={hasError}>
        <textarea
          required
          rows={8}
          spellCheck={false}
          autoCapitalize="none"
          aria-label="Driver earnings, one per line"
          aria-invalid={hasError}
          aria-describedby="feedback"
          placeholder={'driver@example.com, 1250\nanother@example.com, 980.50'}
          value={entries}
          onChange={event => {
            setEntries(event.target.value);
            markEdited();
          }}
        />
      </div>

      <button type="submit" className="wide" disabled={isLoading} data-state={status}>
        <span>{isLoading ? 'Publishing' : 'Publish leaderboard'}</span>
        <span className="icons">
          <ArrowIcon className="i-arrow" />
          <SpinnerIcon className="i-spin" />
          <CheckIcon className="i-check" />
        </span>
      </button>

      <div id="feedback" className="feedback" role="status" aria-live="polite">
        {status === 'success' && published && (
          <>
            <p className="ok">
              <CheckIcon />
              <span>
                <strong>{published.saved}</strong> {published.saved === 1 ? 'driver' : 'drivers'} saved for{' '}
                <strong>{formatDate(published.date)}</strong>. The leaderboard is updated.
              </span>
            </p>
            {published.skipped.length > 0 && <SkippedList skipped={published.skipped} />}
          </>
        )}
        {hasError && (
          <p className="err" key={error}>
            <AlertIcon />
            <span>{error}</span>
          </p>
        )}
      </div>
    </form>
  );
}

function SkippedList({ skipped }: { skipped: SkippedEntry[] }) {
  return (
    <div className="recent">
      <h2>Skipped ({skipped.length})</h2>
      <ul>
        {skipped.map(({ label, reason }) => (
          <li key={`${label}-${reason}`}>
            <span className="email">{label}</span>
            <span className="reason">{reason}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
