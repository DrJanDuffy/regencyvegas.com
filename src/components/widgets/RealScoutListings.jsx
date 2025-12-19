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

  // Fix GLVAR disclaimer text color after widget loads
  useEffect(() => {
    if (status !== "ready") return;

    const fixDisclaimerText = () => {
      // Find the widget element
      const widget = document.querySelector("realscout-office-listings");
      if (!widget) return;

      // Use a MutationObserver to catch dynamically added content
      const observer = new MutationObserver(() => {
        // Find all text nodes containing GLVAR or disclaimer text
        const walker = document.createTreeWalker(
          widget.shadowRoot || widget,
          NodeFilter.SHOW_TEXT,
          null
        );

        let node;
        while ((node = walker.nextNode())) {
          const text = node.textContent || "";
          if (
            text.includes("GLVAR") ||
            text.includes("Greater Las Vegas Association") ||
            text.includes("Information Deemed Reliable")
          ) {
            // Find parent element and style it
            let parent = node.parentElement;
            while (parent && parent !== widget && parent !== document.body) {
              // Check if text is white
              const computedStyle = window.getComputedStyle(parent);
              const color = computedStyle.color;
              if (
                color === "rgb(255, 255, 255)" ||
                color === "#ffffff" ||
                color === "#fff" ||
                parent.style.color === "white" ||
                parent.style.color === "#fff" ||
                parent.style.color === "#ffffff"
              ) {
                parent.style.color = "#4b5563"; // gray-600
                parent.style.fontSize = "0.75rem";
              }
              parent = parent.parentElement;
            }
          }
        }

        // Also try to find and style common disclaimer elements
        const allElements = (widget.shadowRoot || widget).querySelectorAll("*");
        allElements.forEach((el) => {
          const text = el.textContent || "";
          if (
            (text.includes("GLVAR") ||
              text.includes("Greater Las Vegas Association") ||
              text.includes("Information Deemed Reliable")) &&
            (el.tagName === "P" ||
              el.tagName === "SMALL" ||
              el.tagName === "SPAN" ||
              el.tagName === "DIV")
          ) {
            const computedStyle = window.getComputedStyle(el);
            const color = computedStyle.color;
            if (
              color === "rgb(255, 255, 255)" ||
              color === "#ffffff" ||
              color === "#fff"
            ) {
              el.style.color = "#4b5563";
              el.style.fontSize = "0.75rem";
            }
          }
        });
      });

      // Observe changes to the widget
      observer.observe(widget.shadowRoot || widget, {
        childList: true,
        subtree: true,
        characterData: true,
      });

      // Run once immediately
      observer.disconnect();
      observer.observe(widget.shadowRoot || widget, {
        childList: true,
        subtree: true,
        characterData: true,
      });
      setTimeout(() => {
        // Give widget time to render, then fix
        const allElements = (widget.shadowRoot || widget).querySelectorAll("*");
        allElements.forEach((el) => {
          const text = el.textContent || "";
          if (
            text.includes("GLVAR") ||
            text.includes("Greater Las Vegas Association") ||
            text.includes("Information Deemed Reliable")
          ) {
            el.style.color = "#4b5563";
            el.style.fontSize = "0.75rem";
          }
        });
      }, 1000);

      return () => observer.disconnect();
    };

    // Wait for widget to be in DOM, then fix
    const timer = setTimeout(fixDisclaimerText, 500);
    const interval = setInterval(() => {
      const widget = document.querySelector("realscout-office-listings");
      if (widget) {
        fixDisclaimerText();
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
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
        <div className="realscout-widget-wrapper">
          <realscout-office-listings
            agent-encoded-id={AGENT.realscoutId}
            sort-order={sortOrder}
            listing-status={listingStatus}
            property-types={propertyTypes}
            price-min={priceMin.toString()}
            price-max={priceMax.toString()}
          />
        </div>
      )}
    </div>
  );
}

