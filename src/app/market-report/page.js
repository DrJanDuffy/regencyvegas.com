import { COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.marketReport);

export default function MarketReportPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="mb-4 font-playfair text-3xl text-navy-800 md:text-4xl">
        Regency at Summerlin Market Report
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-navy-800">
        Prices, Trends, and Inventory Overview
      </h2>
      <p className="mb-4 text-sm text-gray-600 md:text-base">
        Stay informed about current pricing and trends in {COMMUNITY.name}. Median
        values, days on market, and inventory levels can shift quickly in this
        limited-supply 55+ community, and having accurate data helps you make
        confident decisions as a buyer or seller.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-navy-800">
        What&apos;s Included in a Custom Market Report
      </h2>
      <ul className="mb-4 list-disc pl-5 text-sm text-gray-700 md:text-base">
        <li>Recent closed sales and price per square foot</li>
        <li>Active, pending, and withdrawn listings</li>
        <li>Median and average sale prices by collection</li>
        <li>Time-on-market trends and seasonal patterns</li>
      </ul>
      <h3 className="mb-2 text-lg font-semibold text-navy-800">
        Request Your Personalized Report
      </h3>
      <p className="text-sm text-gray-600 md:text-base">
        For a custom {COMMUNITY.name} market report tailored to your specific
        situation—whether you&apos;re planning to buy, sell, or simply monitor your
        home&apos;s value—call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span>.
      </p>
    </main>
  );
}


