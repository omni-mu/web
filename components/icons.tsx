import type { SVGProps } from 'react';

function Icon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props} />;
}

export const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <Icon {...props}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>
);

export const SpinnerIcon = (props: SVGProps<SVGSVGElement>) => (
  <Icon {...props}><path d="M12 3a9 9 0 1 0 9 9" /></Icon>
);

export const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <Icon {...props}><path d="M5 12.5l4.5 4.5L19 7.5" /></Icon>
);

export const AlertIcon = (props: SVGProps<SVGSVGElement>) => (
  <Icon {...props}><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16.5v.01" /></Icon>
);
