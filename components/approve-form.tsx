'use client';

import { FormEvent, useRef, useState } from 'react';
import { AlertIcon, ArrowIcon, CheckIcon, SpinnerIcon } from './icons';

export type Approval = { email: string; approvedAt: string };

type Status = 'idle' | 'loading' | 'success' | 'error';

const NETWORK_ERROR = 'Can’t reach the server. Check your connection and try again.';

const formatTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

export function ApproveForm({ onApproved }: { onApproved: (approval: Approval) => void }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const isLoading = status === 'loading';
  const hasError = status === 'error';

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus('success');
        setMessage(data.email);
        setEmail('');
        onApproved({ email: data.email, approvedAt: formatTime() });
      } else {
        setStatus('error');
        setMessage(data.error ?? 'Something went wrong. Try again.');
      }
    } catch {
      setStatus('error');
      setMessage(NETWORK_ERROR);
    }

    inputRef.current?.focus();
  }

  function handleChange(value: string) {
    setEmail(value);
    if (!isLoading) setStatus('idle');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field" data-invalid={hasError}>
        <input
          ref={inputRef}
          type="email"
          inputMode="email"
          autoComplete="off"
          autoCapitalize="none"
          spellCheck={false}
          autoFocus
          required
          aria-label="Driver email"
          aria-invalid={hasError}
          aria-describedby="feedback"
          placeholder="driver@example.com"
          value={email}
          onChange={event => handleChange(event.target.value)}
        />
        <button type="submit" disabled={isLoading} data-state={status}>
          <span>{isLoading ? 'Approving' : 'Approve'}</span>
          <span className="icons">
            <ArrowIcon className="i-arrow" />
            <SpinnerIcon className="i-spin" />
            <CheckIcon className="i-check" />
          </span>
        </button>
      </div>

      <div id="feedback" className="feedback" role="status" aria-live="polite">
        {status === 'success' && (
          <p className="ok">
            <CheckIcon />
            <span><strong>{message}</strong> is verified and can go online.</span>
          </p>
        )}
        {hasError && (
          <p className="err" key={message}>
            <AlertIcon />
            <span>{message}</span>
          </p>
        )}
      </div>
    </form>
  );
}
