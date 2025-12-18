import { COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.amenities);

export default function AmenitiesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="mb-4 font-playfair text-3xl text-navy-800 md:text-4xl">
        Amenities at Regency at Summerlin
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-navy-800">
        Resort-Style Clubhouse and Lifestyle
      </h2>
      <p className="mb-4 text-sm text-gray-600 md:text-base">
        {COMMUNITY.name} offers amenities that rival high-end resorts, anchored by a
        private clubhouse where neighbors gather to work out, relax, and socialize.
        Residents enjoy indoor and outdoor pools, a state-of-the-art fitness center,
        movement studios, multi-purpose rooms, and comfortable lounges designed for
        connection and community.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-navy-800">
        Fitness, Sports, and Wellness
      </h2>
      <p className="mb-2 text-sm text-gray-600 md:text-base">
        Wellness is a core part of life at {COMMUNITY.name}. Outdoor amenities may
        include:
      </p>
      <ul className="mb-4 list-disc pl-5 text-sm text-gray-700 md:text-base">
        <li>Resort-style outdoor pool and spa</li>
        <li>Indoor lap or fitness pool (community-specific)</li>
        <li>Tennis and pickleball courts</li>
        <li>Walking paths and opportunities for outdoor fitness</li>
      </ul>
      <h3 className="mb-2 text-lg font-semibold text-navy-800">
        Social Events and Clubs
      </h3>
      <p className="text-sm text-gray-600 md:text-base">
        A dedicated lifestyle team and active resident committees help coordinate
        events, clubs, and activities throughout the year. From fitness classes and
        educational seminars to holiday parties and hobby groups, there is always
        something happening at {COMMUNITY.name}. For a detailed amenities overview or
        current activity calendar, call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span>.
      </p>
    </main>
  );
}


