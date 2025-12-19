import Link from "next/link";
import { COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.amenities);

export default function AmenitiesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 bg-luxury-black">
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        Amenities at Regency at Summerlin
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Resort-Style Clubhouse and Lifestyle
      </h2>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        {COMMUNITY.name} offers amenities that rival high-end resorts, anchored by a
        private clubhouse where neighbors gather to work out, relax, and socialize.
        Residents enjoy indoor and outdoor pools, a state-of-the-art fitness center,
        movement studios, multi-purpose rooms, and comfortable lounges designed for
        connection and community.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Fitness, Sports, and Wellness
      </h2>
      <p className="mb-2 text-base text-gray-200 md:text-lg">
        Wellness is a core part of life at {COMMUNITY.name}. Outdoor amenities may
        include:
      </p>
      <ul className="mb-4 list-disc pl-5 text-base text-gray-200 md:text-lg">
        <li>Resort-style outdoor pool and spa</li>
        <li>Indoor lap or fitness pool (community-specific)</li>
        <li>Tennis and pickleball courts</li>
        <li>Walking paths and opportunities for outdoor fitness</li>
      </ul>
      <h3 className="mb-2 text-lg font-semibold text-white">
        Social Events and Clubs
      </h3>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        A dedicated lifestyle team and active resident committees help coordinate
        events, clubs, and activities throughout the year. From fitness classes and
        educational seminars to holiday parties and hobby groups, there is always
        something happening at {COMMUNITY.name}. Explore{" "}
        <Link href="/lifestyle" className="font-semibold text-amber-400 hover:text-amber-500 hover:underline">
          more about the active adult lifestyle at {COMMUNITY.name}
        </Link>{" "}
        and the full range of programming available to residents.
      </p>
      <p className="text-base text-gray-200 md:text-lg">
        For a detailed amenities overview or current activity calendar, call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span>.
      </p>
    </main>
  );
}


