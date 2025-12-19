'use client';

import Link from "next/link";
import { BUSINESS, PHONE } from "@/lib/constants";
import TrackedPhoneLink from "./TrackedPhoneLink";

/**
 * Google Business Profile action buttons
 * Call, Directions, and View Google Reviews
 */
export default function GoogleActionButtons({ location = "page", className = "" }) {
  const encodedAddress = encodeURIComponent(BUSINESS.fullAddress);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  const reviewsUrl = BUSINESS.reviews.googleReviewsUrl || `https://www.google.com/maps/place/${encodedAddress}`;

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <TrackedPhoneLink
        phone={PHONE.marketing}
        location={location}
        className="flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-base font-semibold text-navy-900 transition hover:bg-amber-600"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        Call {PHONE.marketing}
      </TrackedPhoneLink>

      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-lg border-2 border-amber-500 bg-transparent px-6 py-3 text-base font-semibold text-amber-500 transition hover:bg-amber-500/10"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
        Get Directions
      </a>

      <a
        href={reviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-lg border-2 border-amber-500 bg-transparent px-6 py-3 text-base font-semibold text-amber-500 transition hover:bg-amber-500/10"
      >
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        {BUSINESS.reviews.count > 0 ? (
          <>
            View Reviews ({BUSINESS.reviews.rating}★)
          </>
        ) : (
          'View on Google'
        )}
      </a>
    </div>
  );
}

