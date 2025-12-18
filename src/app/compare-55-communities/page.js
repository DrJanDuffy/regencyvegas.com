import { COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.compare);

export default function CompareCommunitiesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="mb-4 font-playfair text-3xl text-navy-800 md:text-4xl">
        Regency at Summerlin vs Other Las Vegas 55+ Communities
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-navy-800">
        How Regency at Summerlin Compares
      </h2>
      <p className="mb-4 text-sm text-gray-600 md:text-base">
        Las Vegas offers a variety of 55+ options—including Sun City communities,
        Siena, Trilogy, and others—but {COMMUNITY.name} stands out for its Toll
        Brothers construction, guard-gated privacy, and elevated Summerlin location.
        Understanding the differences can help you decide if this is the right fit.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-navy-800">
        Key Comparison Points
      </h2>
      <ul className="mb-4 list-disc pl-5 text-sm text-gray-700 md:text-base">
        <li>Home age and architectural style</li>
        <li>Amenities, clubhouse quality, and programming</li>
        <li>HOA fees and what they include</li>
        <li>Location, views, and surrounding development</li>
      </ul>
      <h3 className="mb-2 text-lg font-semibold text-navy-800">
        Request a Side-by-Side Comparison
      </h3>
      <p className="text-sm text-gray-600 md:text-base">
        For a detailed, side-by-side comparison of {COMMUNITY.name} and other 55+
        communities you&apos;re considering, call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span>. We&apos;ll help you
        understand which neighborhood best matches your priorities.
      </p>
    </main>
  );
}


