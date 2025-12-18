import { useEffect, useRef } from "react";

// RealScout advanced search widget wrapper
// Included globally via Mainlayout.

const RealScoutAdvancedSearch = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) return;
    widgetRef.current.setAttribute("agent-encoded-id", "QWdlbnQtMjI1MDUw");
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-center">
        {/* eslint-disable-next-line react/no-unknown-property */}
        <realscout-advanced-search ref={widgetRef}></realscout-advanced-search>
      </div>
    </div>
  );
};

export default RealScoutAdvancedSearch;


