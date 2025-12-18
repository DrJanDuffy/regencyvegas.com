'use client';

import { useState } from "react";
import Script from "next/script";
import { AGENT, COMMUNITY } from "@/lib/constants";

export default function RealScoutListings({
  priceMin = COMMUNITY.price.min,
  priceMax = COMMUNITY.price.max,
  sortOrder = "NEWEST",
  listingStatus = "For Sale",
  propertyTypes = ",SFR",
  className = "",
}) {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className={`realscout-container min-h-[320px] w-full ${className}`}>
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        type="module"
        strategy="afterInteractive"
        onLoad={() => setIsReady(true)}
      />

      {!isReady && (
        <div className="flex items-center justify-center py-12 text-gray-600">
          <svg className="mr-3 h-6 w-6 animate-spin" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          <span className="text-sm">Loading Regency at Summerlin listings...</span>
        </div>
      )}

      <realscout-office-listings
        agent-encoded-id={AGENT.realscoutId}
        sort-order={sortOrder}
        listing-status={listingStatus}
        property-types={propertyTypes}
        price-min={priceMin.toString()}
        price-max={priceMax.toString()}
      />
    </div>
  );
}

