import { COLLECTIONS, COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.floorPlans);

export default function FloorPlansPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 bg-luxury-black">
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        Regency at Summerlin Floor Plans
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Compare All 9 Single-Story Floor Plans
      </h2>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        {COMMUNITY.name} offers nine thoughtfully designed single-story floor plans
        across three collections: Summit, Palisades, and Pinnacle. Each plan is
        optimized for 55+ living, with open-concept great rooms, oversized primary
        suites, and outdoor spaces that embrace the desert climate and mountain
        views.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Floor Plan Collections at a Glance
      </h2>
      <div className="grid gap-6 md:grid-cols-3 text-base text-gray-200 md:text-lg">
        <div className="rounded-lg border border-stone-700 bg-luxury-900 p-4">
          <h3 className="mb-1 text-lg font-semibold text-white">
            {COLLECTIONS.summit.name}
          </h3>
          <p>{COLLECTIONS.summit.sqftRange}</p>
          <p>{COLLECTIONS.summit.beds} beds • {COLLECTIONS.summit.baths} baths</p>
          <p className="mt-2 text-sm text-gray-300">
            Plans: {COLLECTIONS.summit.plans.join(", ")}
          </p>
        </div>
        <div className="rounded-lg border border-stone-700 bg-luxury-900 p-4">
          <h3 className="mb-1 text-lg font-semibold text-white">
            {COLLECTIONS.palisades.name}
          </h3>
          <p>{COLLECTIONS.palisades.sqftRange}</p>
          <p>
            {COLLECTIONS.palisades.beds} beds + den • {COLLECTIONS.palisades.baths} baths
          </p>
          <p className="mt-2 text-sm text-gray-300">
            Plans: {COLLECTIONS.palisades.plans.join(", ")}
          </p>
        </div>
        <div className="rounded-lg border border-stone-700 bg-luxury-900 p-4">
          <h3 className="mb-1 text-lg font-semibold text-white">
            {COLLECTIONS.pinnacle.name}
          </h3>
          <p>{COLLECTIONS.pinnacle.sqftRange}</p>
          <p>{COLLECTIONS.pinnacle.beds} beds • {COLLECTIONS.pinnacle.baths} baths</p>
          <p className="mt-2 text-sm text-gray-300">
            Plans: {COLLECTIONS.pinnacle.plans.join(", ")}
          </p>
        </div>
      </div>
      <h3 className="mt-8 mb-2 text-lg font-semibold text-white">
        Get Help Choosing the Right Plan
      </h3>
      <p className="text-base text-gray-200 md:text-lg">
        Not sure which floor plan is the best fit for your lifestyle? Call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span> to review options,
        see example layouts, and match plans to current resale opportunities in{" "}
        {COMMUNITY.name}.
      </p>
    </main>
  );
}


