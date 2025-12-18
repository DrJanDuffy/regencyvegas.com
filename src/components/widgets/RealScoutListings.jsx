'use client';

import { useEffect, useState } from "react";
import Script from "next/script";
import { AGENT, COMMUNITY, PHONE } from "@/lib/constants";

export default function RealScoutListings({
  priceMin = COMMUNITY.price.min,
  priceMax = COMMUNITY.price.max,
  sortOrder = "NEWEST",
  listingStatus = "For Sale",
  propertyTypes = ",SFR",
  className = "",
}) {
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    if (status !== "loading") return;

    const timeoutId = setTimeout(() => {
      setStatus((current) => (current === "loading" ? "error" : current));
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [status]);

  return (
    <div className={`realscout-container min-h-[320px] w-full ${className}`}>
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        type="module"
        strategy="afterInteractive"
        onLoad={() => setStatus("ready")}
        onError={() => setStatus("error")}
      />

      {status === "loading" && (
        <div className="flex flex-col items-center justify-center py-16 text-gray-600">
          <div className="relative mb-4 h-12 w-12">
            <div className="absolute inset-0 rounded-full border-4 border-stone-200" />
            <div className="absolute inset-0 rounded-full border-4 border-amber-500 border-t-transparent animate-spin" />
          </div>
          <p className="text-sm">Loading available Regency at Summerlin homes...</p>
        </div>
      )}

      {status === "error" && (
        <div className="flex flex-col items-center justify-center rounded-xl bg-stone-50 px-4 py-16 text-center">
          <p className="mb-4 text-sm text-gray-600">
            We&apos;re having trouble loading live listings right now. Please refresh the page
            or contact us directly for current availability in Regency at Summerlin.
          </p>
          <a
            href={`tel:${PHONE.marketing}`}
            className="rounded-lg bg-navy-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-900"
          >
            Call {PHONE.marketing}
          </a>
        </div>
      )}

      {status === "ready" && (
        <realscout-office-listings
          agent-encoded-id={AGENT.realscoutId}
          sort-order={sortOrder}
          listing-status={listingStatus}
          property-types={propertyTypes}
          price-min={priceMin.toString()}
          price-max={priceMax.toString()}
        />
      )}
    </div>
  );
}

