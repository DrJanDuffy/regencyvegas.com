import { useEffect, useRef } from "react";

// RealScout simple search widget wrapper
// Appears on every page via Mainlayout.

const RealScoutSearch = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) return;
    // Ensure the required agent id attribute is present
    widgetRef.current.setAttribute("agent-encoded-id", "QWdlbnQtMjI1MDUw");
  }, []);

  return (
    <div className="w-full bg-white/80 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-center">
        {/* eslint-disable-next-line react/no-unknown-property */}
        <realscout-simple-search ref={widgetRef}></realscout-simple-search>
      </div>
    </div>
  );
};

export default RealScoutSearch;


