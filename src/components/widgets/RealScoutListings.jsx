'use client';

import { useEffect, useState } from "react";
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

    if (typeof window === "undefined" || !window.customElements) {
      const fallbackTimeout = setTimeout(() => {
        setStatus((current) => (current === "loading" ? "error" : current));
      }, 10000);

      return () => clearTimeout(fallbackTimeout);
    }

    if (window.customElements.get("realscout-office-listings")) {
      setStatus("ready");
      return;
    }

    const checkId = setInterval(() => {
      if (window.customElements.get("realscout-office-listings")) {
        setStatus("ready");
        clearInterval(checkId);
      }
    }, 250);

    const timeoutId = setTimeout(() => {
      setStatus((current) => (current === "loading" ? "error" : current));
      clearInterval(checkId);
    }, 10000);

    return () => {
      clearInterval(checkId);
      clearTimeout(timeoutId);
    };
  }, [status]);

  return (
    <div className={`realscout-container min-h-[320px] w-full ${className}`}>
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

