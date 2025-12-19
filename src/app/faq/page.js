import { COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";
import { generateFAQSchema } from "@/lib/schema";

const faqs = [
  {
    question: "Is Regency at Summerlin a 55+ age-restricted community?",
    answer:
      "Yes. Regency at Summerlin is an age-qualified 55+ community, designed specifically for active adults who meet the age requirements. Certain exceptions may apply for occupants and guests—ask for current HOA rules.",
  },
  {
    question: "What types of homes are in Regency at Summerlin?",
    answer:
      "Regency at Summerlin features single-story luxury homes across three collections—Summit, Palisades, and Pinnacle—with a focus on open-concept living, outdoor spaces, and low-maintenance design.",
  },
  {
    question: "Are pets allowed in Regency at Summerlin?",
    answer:
      "Most 55+ communities in Las Vegas, including Regency at Summerlin, allow pets with certain limitations on number, size, and breed. Always review the most current CC&Rs and HOA guidelines for specifics.",
  },
];

const faqSchema = generateFAQSchema(faqs);

export const metadata = generatePageMetadata(PAGE_SEO.faq);

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="mb-4 font-playfair text-3xl text-white md:text-4xl">
        Regency at Summerlin FAQ
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-white">
        Common Questions About Living in Regency at Summerlin
      </h2>
      <p className="mb-6 text-base text-gray-200 md:text-lg">
        Below are answers to some of the most frequently asked questions about{" "}
        {COMMUNITY.name}. If you don&apos;t see your question here, reach out
        anytime—our goal is to make your decision as clear and confident as
        possible.
      </p>
      <div className="space-y-4">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="rounded-lg border border-stone-700 bg-luxury-900 p-4"
          >
            <summary className="cursor-pointer text-sm font-semibold text-white md:text-base">
              {item.question}
            </summary>
            <p className="mt-2 text-base text-gray-200 md:text-lg">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
      <h3 className="mt-8 mb-2 text-lg font-semibold text-white">
        Have More Questions?
      </h3>
      <p className="text-base text-gray-200 md:text-lg">
        For detailed, up-to-date answers tailored to your situation, call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span>. We&apos;re here
        to help you navigate every aspect of buying or selling in {COMMUNITY.name}.
      </p>
    </main>
  );
}


