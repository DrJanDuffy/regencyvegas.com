import { COMMUNITY, PHONE } from "@/lib/constants";
import { PAGE_SEO, generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.blog);

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="mb-4 font-playfair text-3xl text-navy-800 md:text-4xl">
        Regency at Summerlin Blog
      </h1>
      <h2 className="mb-3 text-xl font-semibold text-navy-800">
        News, Updates, and Tips for 55+ Living in Las Vegas
      </h2>
      <p className="mb-4 text-sm text-gray-600 md:text-base">
        The {COMMUNITY.name} blog will feature market updates, community news, and
        practical tips for buying, selling, and living in Las Vegas 55+ communities.
        Check back for articles on pricing trends, new listings, amenity spotlights,
        and comparisons to other active adult neighborhoods across the valley.
      </p>
      <h3 className="mb-2 text-lg font-semibold text-navy-800">
        Have a Topic You&apos;d Like Covered?
      </h3>
      <p className="text-sm text-gray-600 md:text-base">
        If you have questions you&apos;d like to see answered on the blog—or if
        you&apos;d like a one-on-one conversation about your plans—call or text{" "}
        <span className="font-semibold">{PHONE.marketing}</span>.
      </p>
    </main>
  );
}


