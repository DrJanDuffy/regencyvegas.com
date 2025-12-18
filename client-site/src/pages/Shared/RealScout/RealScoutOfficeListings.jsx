import { useEffect, useRef } from "react";

// RealScout office listings widget wrapper
// Can be reused on any page to show current office listings.

const RealScoutOfficeListings = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    widgetRef.current.setAttribute("agent-encoded-id", "QWdlbnQtMjI1MDUw");
    widgetRef.current.setAttribute("sort-order", "NEWEST");
    widgetRef.current.setAttribute("listing-status", "For Sale");
    widgetRef.current.setAttribute("property-types", ",SFR");
    widgetRef.current.setAttribute("price-min", "400000");
    widgetRef.current.setAttribute("price-max", "1100000");
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* eslint-disable-next-line react/no-unknown-property */}
        <realscout-office-listings ref={widgetRef}></realscout-office-listings>
      </div>
    </div>
  );
};

export default RealScoutOfficeListings;


