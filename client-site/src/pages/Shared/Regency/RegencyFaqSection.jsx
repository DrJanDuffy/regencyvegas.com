import { Helmet } from "react-helmet";

const faqs = [
  {
    question: "Is Regency at Summerlin a 55+ community?",
    answer:
      "Yes. Regency at Summerlin is an age-qualified 55+ community in The Cliffs village of Summerlin, designed specifically for active adult living with resort-style amenities and low-maintenance homes.",
  },
  {
    question: "What types of homes are available in Regency at Summerlin?",
    answer:
      "You’ll primarily find single-story luxury homes with open-concept floor plans, covered outdoor living, and modern finishes, many with options for den, flex space, or multi-gen suites.",
  },
  {
    question: "What amenities does Regency at Summerlin offer?",
    answer:
      "Residents enjoy a private clubhouse, pools, fitness and wellness spaces, social lounges, pickleball and tennis-style courts, walking paths, organized events, and more, depending on the specific section of the community.",
  },
  {
    question: "How close is Regency at Summerlin to shopping and the Las Vegas Strip?",
    answer:
      "Regency at Summerlin is minutes from Downtown Summerlin shopping and dining, Red Rock Casino, and has convenient freeway access to reach the Las Vegas Strip for entertainment and shows.",
  },
  {
    question: "What is the price range for homes in Regency at Summerlin?",
    answer:
      "Recent resale listings have ranged roughly from the mid $700,000s to well over $2,000,000 depending on size, upgrades, views, and lot location. Pricing is dynamic, so reach out for today’s numbers and available homes.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const RegencyFaqSection = () => {
  return (
    <section className="bg-white border-y border-slate-100">
      <Helmet>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-4 md:pr-6">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-primaryColor uppercase">
            Regency at Summerlin
          </p>
          <h3 className="text-2xl md:text-3xl font-Merriweather font-semibold text-slate-900">
            Regency at Summerlin FAQs
          </h3>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Buyers often ask about age restrictions, HOA details, amenities, and how Regency at
            Summerlin compares to other Las Vegas 55+ communities. Start with these common
            questions, then connect with us for tailored guidance.
          </p>
        </div>

        <div className="md:col-span-2 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 md:px-5 md:py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                <span className="text-sm md:text-base font-semibold text-slate-900">
                  {item.question}
                </span>
                <span className="text-primaryColor text-lg leading-none group-open:rotate-180 transition-transform">
                  ▾
                </span>
              </summary>
              <p className="mt-2 text-sm md:text-base text-slate-700 leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegencyFaqSection;


