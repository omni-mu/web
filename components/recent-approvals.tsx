import type { Approval } from './approve-form';

export function RecentApprovals({ approvals }: { approvals: Approval[] }) {
  if (approvals.length === 0) return null;

  return (
    <div className="recent">
      <h2>Approved this session</h2>
      <ul>
        {approvals.map(({ email, approvedAt }) => (
          <li key={`${email}-${approvedAt}`}>
            <span className="email">{email}</span>
            <time>{approvedAt}</time>
          </li>
        ))}
      </ul>
    </div>
  );
}
