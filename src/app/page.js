import Link from "next/link";
import Image from "next/image";
import RealScoutListings from "@/components/widgets/RealScoutListings";
import { PHONE, COMMUNITY, COLLECTIONS, AGENT } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.home);

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[420px] items-center justify-center md:min-h-[520px]">
        <Image
          src="/images/hero-mountain.jpg"
          alt="Regency at Summerlin luxury 55+ homes with Red Rock mountain views in Las Vegas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy-900/85 via-navy-900/80 to-navy-800/70" />
        <div className="relative z-20 max-w-4xl px-4">
          <div className="mx-auto rounded-2xl bg-black/55 px-6 py-8 text-center text-white shadow-xl backdrop-blur-sm md:px-10 md:py-10">
            <h1 className="mb-4 font-playfair text-3xl font-bold md:text-5xl lg:text-6xl">
              Regency at Summerlin Homes for Sale
            </h1>
            <p className="mb-8 text-base text-gray-100 md:text-xl">
              Luxury 55+ guard-gated living in The Cliffs village of Summerlin, Las Vegas &mdash;
              single-story Toll Brothers homes with resort-style amenities and lock-and-leave
              convenience.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/homes-for-sale"
                className="rounded-lg bg-amber-500 px-8 py-3 text-sm font-semibold text-navy-900 shadow hover:bg-amber-600 transition"
              >
                View Available Homes
              </Link>
              <a
                href={`tel:${PHONE.marketing}`}
                className="rounded-lg border border-white/70 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Call/Text {PHONE.marketing}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="bg-navy-800 text-white py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 text-center md:text-left">
          <div>
            <div className="text-2xl font-bold text-amber-400">
              {COMMUNITY.totalHomes}
            </div>
            <div className="text-sm text-gray-200">Luxury Homes</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-400">
              {COMMUNITY.acreage}
            </div>
            <div className="text-sm text-gray-200">Acres in The Cliffs</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-400">
              ${COMMUNITY.price.min.toLocaleString()} - $
              {COMMUNITY.price.max.toLocaleString()}+
            </div>
            <div className="text-sm text-gray-200">Typical Price Range</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-400">
              ${COMMUNITY.hoa.total}/mo
            </div>
            <div className="text-sm text-gray-200">All-In HOA</div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="bg-stone-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-3 text-center font-playfair text-3xl text-navy-800 md:text-4xl">
            Three Distinct Home Collections
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-gray-600 md:text-base">
            Explore all nine single-story floor plans across the Summit, Palisades, and
            Pinnacle Collections—each crafted for lock-and-leave 55+ living in{" "}
            {COMMUNITY.name}.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              COLLECTIONS.summit,
              COLLECTIONS.palisades,
              COLLECTIONS.pinnacle,
            ].map((col) => (
              <Link
                key={col.name}
                href={
                  col === COLLECTIONS.summit
                    ? "/summit-collection"
                    : col === COLLECTIONS.palisades
                    ? "/palisades-collection"
                    : "/pinnacle-collection"
                }
                className="group block rounded-xl bg-white shadow hover:shadow-lg transition"
              >
                <div className="h-40 bg-stone-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-navy-900/5 transition" />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 font-playfair text-xl font-semibold text-navy-800">
                    {col.name}
                  </h3>
                  <p className="mb-1 text-sm text-gray-600">
                    {col.sqftRange} • {col.beds} beds • {col.baths} baths
                  </p>
                  <p className="text-xs text-gray-500">Lot size {col.lotSize}</p>
                  <p className="mt-4 text-sm font-semibold text-amber-600 group-hover:text-amber-700">
                    View Collection →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-3 text-center font-playfair text-3xl text-navy-800 md:text-4xl">
            Current Regency at Summerlin Listings
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-gray-600 md:text-base">
            Included below are homes for sale and real estate in {COMMUNITY.name}. Click
            any property for full details, photos, and the option to request a private
            tour.
          </p>
          <RealScoutListings />
        </div>
      </section>

      {/* Amenities preview */}
      <section className="bg-navy-800 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-3 text-center font-playfair text-3xl md:text-4xl">
            Resort-Style 55+ Amenities
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-gray-200 md:text-base">
            Enjoy a private clubhouse, indoor and outdoor pools, fitness center, tennis
            and pickleball, and a full calendar of social events curated by an on-site
            lifestyle director.
          </p>
          <div className="mb-10 grid gap-6 text-center sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="mb-2 text-3xl">🏊</div>
              <p className="text-sm font-semibold">Indoor & Outdoor Pools</p>
            </div>
            <div>
              <div className="mb-2 text-3xl">💪</div>
              <p className="text-sm font-semibold">Fitness & Wellness</p>
            </div>
            <div>
              <div className="mb-2 text-3xl">🎾</div>
              <p className="text-sm font-semibold">Tennis & Pickleball</p>
            </div>
            <div>
              <div className="mb-2 text-3xl">🎯</div>
              <p className="text-sm font-semibold">Clubs & Social Events</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/amenities"
              className="inline-block rounded-lg bg-amber-500 px-8 py-3 text-sm font-semibold text-navy-900 hover:bg-amber-600 transition"
            >
              Explore All Amenities
            </Link>
          </div>
        </div>
      </section>

      {/* Agent CTA */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-3 font-playfair text-3xl text-navy-800 md:text-4xl">
            Work with a Regency at Summerlin Expert
          </h2>
          <p className="mb-2 text-lg text-gray-700">
            {AGENT.name} · {AGENT.title}
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-sm text-gray-600 md:text-base">
            With a Ph.D. in Market Research, $127M+ in closed sales, and 500+ families
            served, {AGENT.name} provides data-driven guidance for buying or selling in{" "}
            {COMMUNITY.name} and across Las Vegas.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${PHONE.marketing}`}
              className="rounded-lg bg-navy-800 px-8 py-3 text-sm font-semibold text-white hover:bg-navy-900 transition"
            >
              Call/Text {PHONE.marketing}
            </a>
            <Link
              href="/contact"
              className="rounded-lg border border-navy-800 px-8 py-3 text-sm font-semibold text-navy-800 hover:bg-stone-100 transition"
            >
              Schedule a Private Tour
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
