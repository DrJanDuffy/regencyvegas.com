import { COLLECTIONS, COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.floorPlans);

export default function FloorPlansPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="mb-4 font-playfair text-3xl text-navy-800 md:text-4xl">
        Regency at Summerlin Floor Plans
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-navy-800">
        Compare All 9 Single-Story Floor Plans
      </h2>
      <p className="mb-4 text-sm text-gray-600 md:text-base">
        {COMMUNITY.name} offers nine thoughtfully designed single-story floor plans
        across three collections: Summit, Palisades, and Pinnacle. Each plan is
        optimized for 55+ living, with open-concept great rooms, oversized primary
        suites, and outdoor spaces that embrace the desert climate and mountain
        views.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-navy-800">
        Floor Plan Collections at a Glance
      </h2>
      <div className="grid gap-6 md:grid-cols-3 text-sm text-gray-700 md:text-base">
        <div className="rounded-lg border border-stone-200 bg-cream-50 p-4">
          <h3 className="mb-1 text-lg font-semibold text-navy-800">
            {COLLECTIONS.summit.name}
          </h3>
          <p>{COLLECTIONS.summit.sqftRange}</p>
          <p>{COLLECTIONS.summit.beds} beds • {COLLECTIONS.summit.baths} baths</p>
          <p className="mt-2 text-sm text-gray-600">
            Plans: {COLLECTIONS.summit.plans.join(", ")}
          </p>
        </div>
        <div className="rounded-lg border border-stone-200 bg-cream-50 p-4">
          <h3 className="mb-1 text-lg font-semibold text-navy-800">
            {COLLECTIONS.palisades.name}
          </h3>
          <p>{COLLECTIONS.palisades.sqftRange}</p>
          <p>
            {COLLECTIONS.palisades.beds} beds + den • {COLLECTIONS.palisades.baths} baths
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Plans: {COLLECTIONS.palisades.plans.join(", ")}
          </p>
        </div>
        <div className="rounded-lg border border-stone-200 bg-cream-50 p-4">
          <h3 className="mb-1 text-lg font-semibold text-navy-800">
            {COLLECTIONS.pinnacle.name}
          </h3>
          <p>{COLLECTIONS.pinnacle.sqftRange}</p>
          <p>{COLLECTIONS.pinnacle.beds} beds • {COLLECTIONS.pinnacle.baths} baths</p>
          <p className="mt-2 text-sm text-gray-600">
            Plans: {COLLECTIONS.pinnacle.plans.join(", ")}
          </p>
        </div>
      </div>
      <h3 className="mt-8 mb-2 text-lg font-semibold text-navy-800">
        Get Help Choosing the Right Plan
      </h3>
      <p className="text-sm text-gray-600 md:text-base">
        Not sure which floor plan is the best fit for your lifestyle? Call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span> to review options,
        see example layouts, and match plans to current resale opportunities in{" "}
        {COMMUNITY.name}.
      </p>
    </main>
  );
}


