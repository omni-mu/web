'use client';

import { FormEvent, useRef, useState } from 'react';
import { postJson } from '@/lib/post-json';
import { AlertIcon, ArrowIcon, CheckIcon, SpinnerIcon } from './icons';

export type Approval = { email: string; approvedAt: string };

type Status = 'idle' | 'loading' | 'success' | 'error';

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

    const result = await postJson<{ email: string }>('/api/approve', { email });

    if (result.ok) {
      setStatus('success');
      setMessage(result.data.email);
      setEmail('');
      onApproved({ email: result.data.email, approvedAt: formatTime() });
    } else {
      setStatus('error');
      setMessage(result.error);
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
