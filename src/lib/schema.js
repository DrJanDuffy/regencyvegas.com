import { AGENT, COMMUNITY, PHONE } from "./constants";

export const agentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: AGENT.name,
  description: `Las Vegas Real Estate Expert specializing in ${COMMUNITY.name} 55+ community`,
  telephone: PHONE.marketing,
  url: "https://regencyvegas.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: COMMUNITY.zipCode,
  },
  areaServed: {
    "@type": "Place",
    name: "Summerlin, Las Vegas, Nevada",
  },
  priceRange: `$${(COMMUNITY.price.min / 1000).toFixed(0)}K - $${(
    COMMUNITY.price.max / 1000000
  ).toFixed(1)}M+`,
};

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: `${AGENT.name} - ${COMMUNITY.name} Specialist`,
  description: `Luxury 55+ real estate specialist for ${COMMUNITY.name} in Las Vegas`,
  telephone: PHONE.marketing,
  url: "https://regencyvegas.com",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: COMMUNITY.zipCode,
  },
};

export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://regencyvegas.com${item.path}`,
    })),
  };
}

export function generateFloorPlanSchema(plan) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${plan.name} - ${COMMUNITY.name}`,
    description: plan.description,
    brand: {
      "@type": "Brand",
      name: "Toll Brothers",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: plan.priceMin,
      highPrice: plan.priceMax,
      offerCount: plan.available || "Multiple",
    },
  };
}


