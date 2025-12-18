import RealScoutListings from "@/components/widgets/RealScoutListings";
import { COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.homesForSale);

export default function HomesForSalePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <section className="mb-10">
        <h1 className="mb-4 font-playfair text-3xl text-navy-800 md:text-4xl">
          Regency at Summerlin Homes &amp; Real Estate for Sale
        </h1>
        <h2 className="mb-3 text-xl font-semibold text-navy-800">
          Browse Available Homes in Regency at Summerlin
        </h2>
        <p className="mb-4 text-sm text-gray-600 md:text-base">
          Included below are homes for sale and real estate listings in{" "}
          {COMMUNITY.name}. Listings are updated frequently, allowing you to see the
          latest opportunities in this luxury 55+ guard-gated community in Summerlin.
          Explore single-story floor plans, premium lots, and lock-and-leave homes
          designed for upscale active adult living.
        </p>
        <h2 className="mb-3 text-xl font-semibold text-navy-800">
          Request Details or Schedule a Private Tour
        </h2>
        <p className="mb-4 text-sm text-gray-600 md:text-base">
          If you would like more information on any of these {COMMUNITY.name} homes,
          just click on a property to view full details. From there you can request
          additional information, ask questions about HOA fees or recent sales, or
          schedule a private tour. We are happy to provide disclosures, past sales
          history, dates and prices of recently sold properties nearby, and guidance
          on how each home compares within the community.
        </p>
        <h3 className="mb-2 text-lg font-semibold text-navy-800">
          Work with a Local Regency at Summerlin Specialist
        </h3>
        <p className="text-sm text-gray-600 md:text-base">
          When you&apos;re ready to take the next step, call or text{" "}
          <span className="font-semibold">{PHONE.marketing}</span> to connect with a
          {` ${COMMUNITY.name}`} expert who understands the nuances of this Toll
          Brothers community and the broader Las Vegas 55+ market.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-navy-800">
          Current Regency at Summerlin Listings
        </h2>
        <RealScoutListings />
      </section>
    </main>
  );
}


