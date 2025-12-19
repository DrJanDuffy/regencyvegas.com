import Link from "next/link";
import { COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.buyingGuide);

export default function BuyingGuidePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="mb-4 font-playfair text-3xl text-navy-800 md:text-4xl">
        How to Buy a Home in Regency at Summerlin
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-navy-800">
        Step-by-Step Guide to Purchasing in a 55+ Community
      </h2>
      <p className="mb-4 text-sm text-gray-600 md:text-base">
        Buying in {COMMUNITY.name} is a bit different from purchasing in a
        traditional neighborhood. Age-qualification rules, HOA structures, and the
        limited number of resale homes mean it pays to have a clear plan and a local
        expert on your side from the beginning.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-navy-800">
        Key Steps in the Regency at Summerlin Buying Process
      </h2>
      <ol className="mb-4 list-decimal pl-5 text-sm text-gray-700 md:text-base">
        <li>Clarify your needs, budget, and ideal move-in timeline.</li>
        <li>Review current and upcoming listings in {COMMUNITY.name}.</li>
        <li>Tour the community, clubhouse, and example floor plans.</li>
        <li>Evaluate HOA details, fees, and lifestyle programming.</li>
        <li>Prepare financing or proof of funds with a trusted lender.</li>
        <li>Make a competitive offer when the right home appears.</li>
      </ol>
      <h3 className="mb-2 text-lg font-semibold text-navy-800">
        Talk Through Your Plan with an Expert
      </h3>
      <p className="mb-4 text-sm text-gray-600 md:text-base">
        Start by reviewing{" "}
        <Link href="/homes-for-sale" className="font-semibold text-amber-600 hover:underline">
          current homes for sale in {COMMUNITY.name}
        </Link>
        ,{" "}
        <Link href="/floor-plans" className="font-semibold text-amber-600 hover:underline">
          comparing all 9 floor plans
        </Link>
        , and{" "}
        <Link
          href="/compare-55-communities"
          className="font-semibold text-amber-600 hover:underline"
        >
          seeing how Regency compares to other Las Vegas 55+ communities
        </Link>
        .
      </p>
      <p className="text-sm text-gray-600 md:text-base">
        To discuss timing, availability, and strategy for buying in{" "}
        {COMMUNITY.name}, call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span> today.
      </p>
    </main>
  );
}


