import { COLLECTIONS, COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.pinnacle);

export default function PinnacleCollectionPage() {
  const col = COLLECTIONS.pinnacle;
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="mb-4 font-playfair text-3xl text-navy-800 md:text-4xl">
        {col.name} Homes in Regency at Summerlin
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-navy-800">
        The Largest Luxury Homes in Regency at Summerlin
      </h2>
      <p className="mb-4 text-sm text-gray-600 md:text-base">
        The {col.name} represents the pinnacle of single-story living in{" "}
        {COMMUNITY.name}. With expansive floor plans from {col.sqftRange}, these homes
        are perfect for those who want generous entertaining spaces, extended outdoor
        living, and the ability to host friends and family in comfort while enjoying a
        lock-and-leave 55+ lifestyle.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-navy-800">
        Pinnacle Collection Highlights
      </h2>
      <ul className="mb-4 list-disc pl-5 text-sm text-gray-700 md:text-base">
        <li>Largest homes in Regency at Summerlin</li>
        <li>Premium lots, many with mountain or city light views</li>
        <li>Gourmet kitchens and expanded great rooms</li>
        <li>Luxury primary suites with spa-inspired baths</li>
      </ul>
      <h3 className="mb-2 text-lg font-semibold text-navy-800">
        Explore Pinnacle Homes and Pricing
      </h3>
      <p className="text-sm text-gray-600 md:text-base">
        To request current listings or arrange a private tour of {col.name} homes in{" "}
        {COMMUNITY.name}, call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span>.
      </p>
    </main>
  );
}


