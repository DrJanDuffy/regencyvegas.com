import { COLLECTIONS, COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";
import { generateFloorPlanSchema } from "@/lib/schema";

export const metadata = generatePageMetadata(PAGE_SEO.palisades);

export default function PalisadesCollectionPage() {
  const col = COLLECTIONS.palisades;
  const schema = generateFloorPlanSchema({
    name: col.name,
    description: `Larger single-story homes in the ${col.name} at ${COMMUNITY.name}, offering ${col.sqftRange} with ${col.beds} bedrooms plus den and ${col.baths} baths in a luxury 55+ community.`,
  });
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 bg-luxury-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        {col.name} Homes in Regency at Summerlin
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Spacious 55+ Homes with Flexible Living
      </h2>
      <p className="mb-4 text-base text-gray-200 md:text-lg">
        The {col.name} at {COMMUNITY.name} features larger single-story homes from{" "}
        {col.sqftRange}, offering {col.beds} bedrooms plus den and {col.baths} baths.
        These plans are ideal for those who want additional space for guests, hobbies,
        or working from home while still enjoying low-maintenance luxury living in a
        guard-gated 55+ community.
      </p>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Palisades Collection Floor Plans
      </h2>
      <ul className="mb-4 list-disc pl-5 text-base text-gray-200 md:text-lg">
        {col.plans.map((plan) => (
          <li key={plan}>{plan}</li>
        ))}
      </ul>
      <h3 className="mb-2 text-lg font-semibold text-white">
        Discuss Your Options with a Local Expert
      </h3>
      <p className="text-base text-gray-200 md:text-lg">
        Curious which {col.name} plan is right for you? Call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span> for a personalized
        consultation and current availability in {COMMUNITY.name}.
      </p>
    </main>
  );
}


