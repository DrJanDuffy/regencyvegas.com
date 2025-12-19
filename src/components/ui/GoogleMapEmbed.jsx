import { BUSINESS } from "@/lib/constants";

/**
 * Google Maps embed component with pin for business location
 * Optimized for performance with lazy loading
 * Uses Google Maps embed URL that doesn't require an API key
 */
export default function GoogleMapEmbed({ className = "" }) {
  // Encode address for Google Maps embed URL
  const encodedAddress = encodeURIComponent(BUSINESS.fullAddress);
  
  // Google Maps embed URL (no API key required for basic embed)
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed&zoom=15`;
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <div className={`w-full ${className}`}>
      <iframe
        src={mapUrl}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
        title={`Map showing ${BUSINESS.fullAddress}`}
      />
      <p className="mt-2 text-xs text-gray-400 text-center">
        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-500 underline"
        >
          View larger map
        </a>
      </p>
    </div>
  );
}
