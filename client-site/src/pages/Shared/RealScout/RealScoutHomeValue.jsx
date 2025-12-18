import { useEffect, useRef } from "react";

// RealScout home value widget wrapper
// Can be reused on any page; currently included globally via Mainlayout.

const RealScoutHomeValue = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    widgetRef.current.setAttribute("agent-encoded-id", "QWdlbnQtMjI1MDUw");
    widgetRef.current.setAttribute("include-name", "");
    widgetRef.current.setAttribute("include-phone", "");
  }, []);

  return (
    <div className="w-full bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        {/* eslint-disable-next-line react/no-unknown-property */}
        <realscout-home-value ref={widgetRef}></realscout-home-value>
      </div>
    </div>
  );
};

export default RealScoutHomeValue;


