import Link from "next/link";
import Image from "next/image";
import RealScoutListings from "@/components/widgets/RealScoutListings";
import { PHONE, COMMUNITY, COLLECTIONS, AGENT } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.home);

const amenities = [
  {
    title: "Indoor & Outdoor Pools",
    icon: (
      <svg
        className="h-8 w-8 md:h-10 md:w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 18c1.5 0 2.25-1 3-1s1.5 1 3 1 2.25-1 3-1 1.5 1 3 1 2.25-1 3-1 1.5 1 3 1"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 6h16v6H4z"
        />
      </svg>
    ),
  },
  {
    title: "Fitness & Wellness",
    icon: (
      <svg
        className="h-8 w-8 md:h-10 md:w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M6.75 6.75h2.5v10.5h-2.5zM14.75 6.75h2.5v10.5h-2.5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 9h3M17 9h3M4 15h3M17 15h3"
        />
      </svg>
    ),
  },
  {
    title: "Tennis & Pickleball",
    icon: (
      <svg
        className="h-8 w-8 md:h-10 md:w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="9" cy="9" r="4" strokeWidth={1.5} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14 14l6 6"
        />
      </svg>
    ),
  },
  {
    title: "Clubs & Social Events",
    icon: (
      <svg
        className="h-8 w-8 md:h-10 md:w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 5h14v7H5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 12l7 4 7-4M9 21h6"
        />
      </svg>
    ),
  },
];

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
          <div className="mx-auto rounded-2xl bg-black/55 px-6 py-8 text-center text-white shadow-soft backdrop-blur-sm md:px-10 md:py-10 animate-fade-in">
            <h1 className="mb-4 font-playfair text-3xl font-bold md:text-5xl lg:text-6xl">
              Regency at Summerlin Homes for Sale
            </h1>
            <p className="mb-8 text-base text-gray-100 md:text-xl">
              Luxury 55+ guard-gated living in The Cliffs village of Summerlin, Las Vegas &mdash;
              single-story Toll Brothers homes with resort-style amenities and lock-and-leave
              convenience.
            </p>
            <div className="mt-2 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/homes-for-sale"
                className="rounded-lg bg-amber-500 px-8 py-4 text-sm font-semibold text-navy-900 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-xl"
              >
                View Available Homes
              </Link>
              <a
                href={`tel:${PHONE.marketing}`}
                className="rounded-lg border-2 border-white/80 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
              >
                Call/Text {PHONE.marketing}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="bg-navy-800 py-6 text-white md:py-8">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            <div className="border-r border-navy-700 text-center last:border-r-0 md:border-r">
              <div className="mb-1 text-3xl font-bold text-amber-400 md:text-4xl">
                {COMMUNITY.totalHomes}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-300 md:text-sm">
                Luxury Homes
              </div>
            </div>
            <div className="border-r border-navy-700 text-center last:border-r-0 md:border-r">
              <div className="mb-1 text-3xl font-bold text-amber-400 md:text-4xl">
                {COMMUNITY.acreage}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-300 md:text-sm">
                Acres in The Cliffs
              </div>
            </div>
            <div className="border-r border-navy-700 text-center last:border-r-0 md:border-r">
              <div className="mb-1 text-2xl font-bold text-amber-400 md:text-3xl">
                ${COMMUNITY.price.min.toLocaleString()} - $
                {COMMUNITY.price.max.toLocaleString()}+
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-300 md:text-sm">
                Typical Price Range
              </div>
            </div>
            <div className="text-center">
              <div className="mb-1 text-3xl font-bold text-amber-400 md:text-4xl">
                ${COMMUNITY.hoa.total}/mo
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-300 md:text-sm">
                All-In HOA
              </div>
            </div>
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
                className="group block rounded-2xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-44 bg-linear-to-br from-stone-200 to-stone-300 overflow-hidden md:h-52">
                  <div className="absolute inset-0 bg-navy-900/10 transition-all duration-300 group-hover:bg-navy-900/5" />
                  <span className="absolute right-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-navy-900 shadow">
                    Collection
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-playfair text-xl font-semibold text-navy-800 transition-colors group-hover:text-amber-600">
                    {col.name}
                  </h3>
                  <p className="mb-1 text-sm text-gray-700">
                    {col.sqftRange} sq ft
                  </p>
                  <p className="mb-4 text-sm text-gray-500">
                    {col.beds} beds • {col.baths} baths • lots {col.lotSize}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-amber-600 transition-colors group-hover:text-amber-700">
                    View Collection
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
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
          <div className="mb-10 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {amenities.map((item) => (
              <div key={item.title} className="group">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-amber-400 transition-colors group-hover:bg-white/20">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold">{item.title}</p>
              </div>
            ))}
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
