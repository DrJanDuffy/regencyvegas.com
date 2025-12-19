'use client';

import { trackEmailClick } from '@/lib/analytics';

/**
 * Tracked Email Link Component
 * Wraps email links with GA4 event tracking
 */
export default function TrackedEmailLink({ email, location, children, className, ...props }) {
  const handleClick = () => {
    trackEmailClick(email, location);
  };

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children || email}
    </a>
  );
}

