import { AGENT, PHONE, COMMUNITY } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.contact);

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <h1 className="mb-4 font-playfair text-3xl text-navy-800 md:text-4xl">
        Contact {AGENT.name}
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-navy-800">
        Schedule a Tour or Ask a Question
      </h2>
      <p className="mb-4 text-sm text-gray-600 md:text-base">
        Whether you&apos;re just beginning to explore {COMMUNITY.name} or are ready
        to schedule a private tour, {AGENT.name} is here to help. Share your goals,
        timeline, and any questions you have about homes, amenities, or the buying
        and selling process.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-navy-800">
        Call, Text, or Email
      </h2>
      <ul className="mb-4 list-disc pl-5 text-sm text-gray-700 md:text-base">
        <li>
          Phone/Text:{" "}
          <a href={`tel:${PHONE.marketing}`} className="text-amber-600">
            {PHONE.marketing}
          </a>
        </li>
        <li>
          Email:{" "}
          <a href={`mailto:${AGENT.email}`} className="text-amber-600">
            {AGENT.email}
          </a>
        </li>
      </ul>
      <h3 className="mb-2 text-lg font-semibold text-navy-800">
        How Can We Help?
      </h3>
      <p className="text-sm text-gray-600 md:text-base">
        Let us know if you&apos;d like listing updates, a custom home search, a
        market valuation, or simply an introduction to life at {COMMUNITY.name}. We
        look forward to connecting.
      </p>
    </main>
  );
}


