import { Helmet } from "react-helmet";
import Properties from "../../Properties/Properties";
import Blogs from "../../Shared/Blogs/Blogs";
import Footer from "../../Shared/Footer/Footer";
import LocationForYou from "../../Shared/LocationForYou/LocationForYou";
import UserReview from "../../Shared/Reviews/UserReview/UserReview";
import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import RegencySection from "../../Shared/Regency/RegencySection";
import RegencyFaqSection from "../../Shared/Regency/RegencyFaqSection";
import { siteConfig } from "../../../config/siteConfig";

const Home = () => {
  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.businessName,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.addressCountry,
    },
    areaServed: {
      "@type": "City",
      name: "Las Vegas",
    },
    "@id": `${siteConfig.url}#business`,
  };

  return (
    <>
      <Helmet>
        <title>Regency at Summerlin Real Estate | Regency Vegas</title>
        <meta
          name="description"
          content="Explore low-maintenance luxury 55+ homes in Regency at Summerlin and the Las Vegas area with Regency Vegas Real Estate. Local expertise, resort-style communities, and personalized home search."
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }}
        />
      </Helmet>

      <main className="pt-16 bg-slate-50">
        <Banner />
        <Advertisement />
        <RegencySection />
        <RegencyFaqSection />

        {/* Highlighted property search section */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-primaryColor uppercase">
                Find Your Next Home
              </p>
              <h2 className="mt-3 text-2xl md:text-4xl font-Merriweather font-bold text-slate-900">
                Browse Regency at Summerlin & Las Vegas 55+ listings
              </h2>
              <p className="mt-3 text-sm md:text-base text-slate-600">
                View the latest homes, compare floor plans and prices, and save your favorites.
                When you&apos;re ready, our team can schedule private tours and help you evaluate
                each community.
              </p>
            </div>

            <Properties />
          </div>
        </section>

        <LocationForYou />
        <UserReview />
        <Blogs />

        {/* NAP + quick contact strip above footer */}
        <section className="bg-slate-900 text-slate-100">
          <div className="max-w-6xl mx-auto px-4 py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-Merriweather font-semibold">
                {siteConfig.businessName}
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-200">
                {siteConfig.streetAddress}, {siteConfig.addressLocality},{" "}
                {siteConfig.addressRegion} {siteConfig.postalCode}
              </p>
              <p className="mt-1 text-sm md:text-base text-slate-200">
                Call us today:{" "}
                <a href={`tel:${siteConfig.phone}`} className="underline underline-offset-4">
                  {siteConfig.phone}
                </a>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center rounded-md bg-primaryColor px-5 py-2.5 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-orange-600 transition-colors"
              >
                Call Now
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Regency+at+Summerlin"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-slate-500 px-5 py-2.5 text-sm md:text-base font-semibold text-slate-100 hover:bg-slate-800 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Home;