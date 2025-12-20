import { PHONE } from '@/lib/constants';
import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';

const communities = [
  {
    name: 'Sun City Summerlin',
    url: 'https://suncitysummerlinhomesforsale.com',
    description: "Las Vegas's largest 55+ community with 3 golf courses",
    builder: 'Del Webb',
    priceRange: '$300K-$700K',
  },
  {
    name: 'Heritage at Stonebridge',
    url: 'https://heritagestonebridge.com',
    description: 'Guard-gated Lennar homes near Red Rock Canyon',
    builder: 'Lennar',
    priceRange: '$465K-$700K',
  },
  {
    name: 'Reverence',
    url: 'https://reverencesummerlinhomes.com',
    description: "Pulte's newest 55+ community in Summerlin",
    builder: 'Pulte',
    priceRange: '$500K-$900K',
  },
  {
    name: 'Trilogy Sunstone',
    url: 'https://trilogysunstonehomes.com',
    description: "Henderson's resort-style 55+ by Shea Homes",
    builder: 'Shea Homes',
    priceRange: '$400K-$800K',
  },
  {
    name: 'Del Webb North Ranch',
    url: 'https://delwebbnorthranchhomes.com',
    description: 'Affordable Del Webb living in North Las Vegas',
    builder: 'Del Webb',
    priceRange: '$350K-$600K',
  },
];

export default function FiftyPlusCommunities({ title = 'Explore Other 55+ Communities' }) {
  return (
    <section className="py-8 rounded-lg bg-luxury-900 border border-stone-700">
      <div className="px-4 md:px-6">
        <h2 className="text-2xl font-playfair font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-200 mb-6 text-base md:text-lg">
          Comparing 55+ communities? Dr. Jan Duffy specializes in all Las Vegas active adult neighborhoods.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {communities.map((community) => (
            <a
              key={community.url}
              href={community.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-luxury-black rounded-lg border border-stone-700 hover:border-amber-500 transition-colors"
            >
              <h3 className="font-semibold text-white text-lg mb-2">{community.name}</h3>
              <p className="text-sm text-gray-400 mb-2">{community.builder}</p>
              <p className="text-sm text-gray-300">{community.description}</p>
              <p className="text-xs text-amber-400 mt-2">{community.priceRange}</p>
            </a>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a
            href="https://lasvegas55plushomes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-amber-400 hover:text-amber-500 font-medium transition-colors"
          >
            View All 55+ Communities →
          </a>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-300 mb-3">
            Need help comparing communities? Call or text{' '}
            <TrackedPhoneLink
              phone={PHONE.marketing}
              location="fifty-plus-communities"
              className="font-semibold text-amber-400 hover:text-amber-500"
            >
              {PHONE.marketing}
            </TrackedPhoneLink>
          </p>
        </div>
      </div>
    </section>
  );
}

