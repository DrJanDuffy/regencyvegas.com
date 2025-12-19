import { COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.selling);

export default function SellingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 bg-luxury-black">
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        Sell Your Regency at Summerlin Home
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Maximize Your Return in a High-Demand 55+ Community
      </h2>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        Homes in {COMMUNITY.name} are highly sought after, and the right pricing and
        marketing strategy can make a meaningful difference in your final sale price.
        We combine hyper-local knowledge, data-driven market analysis, and targeted
        55+ marketing to position your home for success.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-white">
        What&apos;s Included with Our Listing Services
      </h2>
      <ul className="mb-4 list-disc pl-5 text-base text-gray-200 md:text-lg">
        <li>Comprehensive pricing analysis using recent Regency sales</li>
        <li>Professional photography and optional video/virtual tours</li>
        <li>Targeted marketing to active adult and relocation buyers</li>
        <li>Staging recommendations and showing strategy</li>
      </ul>
      <h3 className="mb-2 text-lg font-semibold text-white">
        Request a Free Home Valuation
      </h3>
      <p className="text-base text-gray-200 md:text-lg">
        To receive a personalized valuation and strategy session for your{" "}
        {COMMUNITY.name} home, call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span>. We&apos;ll
        discuss timing, preparation, and what today&apos;s buyers are looking for in
        this community.
      </p>
    </main>
  );
}


