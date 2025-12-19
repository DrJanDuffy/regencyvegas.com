'use client';

import { trackPhoneClick } from '@/lib/analytics';

/**
 * Tracked Phone Link Component
 * Wraps phone links with GA4 event tracking
 */
export default function TrackedPhoneLink({ phone, location, children, className, ...props }) {
  const handleClick = () => {
    trackPhoneClick(phone, location);
  };

  return (
    <a
      href={`tel:${phone}`}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children || phone}
    </a>
  );
}

