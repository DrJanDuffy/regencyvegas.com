import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

const amenities = [
  {
    title: 'Pool & Clubhouse',
    community: 'Regency-style living in Las Vegas',
    description:
      'Enjoy a resort-inspired pool, elegant clubhouse, and spaces designed for daily connection with neighbors and friends.',
  },
  {
    title: 'Wellness & Fitness',
    community: 'Active 55+ lifestyle',
    description:
      'Stay energized with fitness centers, yoga lawns, walking and biking paths, and spaces for pickleball or tennis.',
  },
  {
    title: 'Social Events & Clubs',
    community: 'Lifestyle programming',
    description:
      'From wine tastings and game nights to interest-based clubs, a full calendar of events keeps life fresh and engaging.',
  },
  {
    title: 'Low-Maintenance Living',
    community: 'Lock-and-leave convenience',
    description:
      'Thoughtfully planned, low-maintenance homes let you travel, entertain, and focus on what you love most.',
  },
];

const homeTypes = [
  {
    label: 'Single-Family Homes',
    description:
      'Spacious, open-concept floor plans designed for everyday elegance and entertaining, with main-level living for true comfort.',
  },
  {
    label: 'Townhomes',
    description:
      'Beautifully efficient townhomes that blend lock-and-leave convenience with stylish finishes and flexible living spaces.',
  },
  {
    label: 'Duets & Paired Homes',
    description:
      'Perfectly sized homes that offer the feel of a single-family residence with the ease of shared-maintenance living.',
  },
];

const stats = [
  { label: 'Total Listings', value: '11' },
  { label: 'Average Price', value: '$1,082,023' },
  { label: 'Highest Listing Price', value: '$2,399,999' },
  { label: 'Lowest Listing Price', value: '$755,000' },
];

const areasOfInterest = [
  'Las Vegas - Summerlin',
  'Las Vegas - Henderson',
  'Las Vegas - Southwest',
  'North Las Vegas',
  'Nearby 55+ Communities',
];

const RegencySection = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success('Thank you! A local 55+ expert will reach out shortly.');
    event.currentTarget.reset();
  };

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Helmet>
        <title>Regency at Summerlin Real Estate | Luxury Adult Homes in The Cliffs</title>
        <meta
          name="description"
          content="Explore low-maintenance luxury 55+ homes in Regency at Summerlin in The Cliffs village, with resort-style amenities, incredible views, and quick access to Downtown Summerlin and the Las Vegas Strip."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* Hero / Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-primaryColor uppercase">
            Regency at Summerlin
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-Merriweather font-bold text-slate-900">
            Regency at Summerlin Real Estate
          </h2>
          <p className="mt-2 text-base md:text-lg font-semibold text-slate-800">
            Luxury Adult Homes in The Cliffs
          </p>
          <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
            Everyone is talking about Regency at Summerlin. Low-maintenance luxury homes in an
            age-qualified neighborhood by a premier builder create one of the most desirable 55+
            communities in Las Vegas. Spanning more than 100 acres in The Cliffs village, residents
            enjoy incredible views, resort-style recreation at their doorstep, and quick access to
            Downtown Summerlin shopping plus the dining and entertainment of the Las Vegas Strip.
          </p>
        </div>

        {/* Listing stats */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 md:px-5 md:py-4 shadow-sm text-center"
            >
              <p className="text-[0.7rem] md:text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
                {stat.label}
              </p>
              <p className="mt-2 text-base md:text-xl font-Merriweather font-bold text-slate-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-Merriweather font-semibold text-slate-900">
              Resort-style amenities
            </h3>
            <p className="mt-3 text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
              Imagine waking up every day with access to a private club, sparkling pool, fitness and
              wellness spaces, and endless opportunities to stay active and connected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {amenities.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primaryColor">
                  {item.community}
                </p>
                <h4 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h4>
                <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Home types */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-Merriweather font-semibold text-slate-900">
              A 55+ community built around you
            </h3>
            <p className="mt-3 text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
              Whether you prefer a lock-and-leave townhome, an elegant duet, or a spacious
              single-family residence, you can choose the home that fits how you want to live now
              and in the years ahead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {homeTypes.map((type) => (
              <article
                key={type.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col"
              >
                <h4 className="text-lg md:text-xl font-semibold text-slate-900">
                  {type.label}
                </h4>
                <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
                  {type.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Talk to a local expert */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-Merriweather font-semibold text-slate-900">
              Talk to a local 55+ expert
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Get matched with a local Las Vegas real estate professional who understands Regency
              and other premier 55+ communities—amenities, floor plans, HOA details, and everything
              in between. Share what you are looking for and we&apos;ll help you compare options and
              schedule private tours.
            </p>
            <ul className="mt-2 space-y-2 text-sm md:text-base text-slate-700">
              <li>• Learn which 55+ communities best fit your lifestyle</li>
              <li>• Compare HOA fees, amenities, and travel convenience</li>
              <li>• Get alerts when ideal homes hit the market</li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-800 mb-1">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  name="fullName"
                  type="text"
                  required
                  className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm md:text-base placeholder-slate-400 focus:border-primaryColor focus:outline-none focus:ring-1 focus:ring-primaryColor"
                  placeholder="First and last name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-800 mb-1">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm md:text-base placeholder-slate-400 focus:border-primaryColor focus:outline-none focus:ring-1 focus:ring-primaryColor"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-800 mb-1">
                  Area of Interest<span className="text-red-500">*</span>
                </label>
                <select
                  name="area"
                  required
                  className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm md:text-base text-slate-700 focus:border-primaryColor focus:outline-none focus:ring-1 focus:ring-primaryColor"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an area
                  </option>
                  {areasOfInterest.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-800 mb-1">
                  Phone Number (optional)
                </label>
                <input
                  name="phone"
                  type="tel"
                  className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm md:text-base placeholder-slate-400 focus:border-primaryColor focus:outline-none focus:ring-1 focus:ring-primaryColor"
                  placeholder="(702) 555-0123"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-800 mb-1">Comments</label>
              <textarea
                name="comments"
                rows={4}
                className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm md:text-base placeholder-slate-400 focus:border-primaryColor focus:outline-none focus:ring-1 focus:ring-primaryColor"
                placeholder="Tell us about your ideal 55+ lifestyle and home."
              />
            </div>

            <p className="text-xs text-slate-500">
              By submitting this form, you agree to be contacted by a local real estate
              professional. Your information will be handled in accordance with our privacy policy.
            </p>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-primaryColor px-4 py-2.5 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-orange-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryColor focus-visible:ring-offset-2"
            >
              Request Info
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegencySection;


