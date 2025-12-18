'use client';

import { useEffect, useState } from "react";
import { AGENT, COMMUNITY } from "@/lib/constants";

export default function RealScoutListings({
  priceMin = COMMUNITY.price.min,
  priceMax = COMMUNITY.price.max,
  sortOrder = "NEWEST",
  listingStatus = "For Sale",
  propertyTypes = ",SFR",
  className = "",
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const existingScript = document.querySelector(
      'script[src="https://em.realscout.com/widgets/realscout-web-components.umd.js"]'
    );

    if (existingScript) return;

    const script = document.createElement("script");
    script.src =
      "https://em.realscout.com/widgets/realscout-web-components.umd.js";
    script.type = "module";
    script.onload = () => setIsLoaded(true);
    document.head.appendChild(script);
    // If a script already existed, we assume widgets are available and skip
    // updating state to avoid cascading renders in strict mode.
  }, []);

  return (
    <div className={`min-h-[320px] w-full ${className}`}>
      {!isLoaded && (
        <div className="flex items-center justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-navy-800" />
          <span className="ml-3 text-sm text-gray-600">
            Loading Regency at Summerlin listings...
          </span>
        </div>
      )}
      <realscout-office-listings
        agent-encoded-id={AGENT.realscoutId}
        sort-order={sortOrder}
        listing-status={listingStatus}
        property-types={propertyTypes}
        price-min={priceMin.toString()}
        price-max={priceMax.toString()}
        style={{
          "--rs-listing-divider-color": "#1a365d",
          width: "100%",
        }}
      />
    </div>
  );
}


