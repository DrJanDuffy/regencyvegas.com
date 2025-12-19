export const PHONE = {
  marketing: "702-222-1964",
  professional: "702-500-1955",
};

export const AGENT = {
  name: "Dr. Jan Duffy",
  title: "Las Vegas Real Estate Expert",
  license: "S.0197614.LLC",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  realscoutId: "QWdlbnQtMjI1MDUw",
  email: "DrDuffySells@RegencyVegas.com",
};

export const BUSINESS = {
  streetAddress: "10126 Regency Square Ave",
  city: "Las Vegas",
  state: "NV",
  zipCode: "89148",
  fullAddress: "10126 Regency Square Ave, Las Vegas, NV 89148",
  // Google Business Profile URL - update with actual GBP URL
  googleBusinessUrl: "https://www.google.com/maps/place/10126+Regency+Square+Ave,+Las+Vegas,+NV+89148",
  // Business hours (24-hour format for schema, display format for UI)
  hours: {
    monday: { open: "09:00", close: "18:00", display: "9:00 AM - 6:00 PM" },
    tuesday: { open: "09:00", close: "18:00", display: "9:00 AM - 6:00 PM" },
    wednesday: { open: "09:00", close: "18:00", display: "9:00 AM - 6:00 PM" },
    thursday: { open: "09:00", close: "18:00", display: "9:00 AM - 6:00 PM" },
    friday: { open: "09:00", close: "18:00", display: "9:00 AM - 6:00 PM" },
    saturday: { open: "10:00", close: "16:00", display: "10:00 AM - 4:00 PM" },
    sunday: { open: "10:00", close: "16:00", display: "10:00 AM - 4:00 PM" },
  },
  // Google Reviews - update with actual data from GBP
  reviews: {
    rating: 5.0,
    count: 0, // Update with actual review count
    googleReviewsUrl: "https://www.google.com/maps/place/10126+Regency+Square+Ave,+Las+Vegas,+NV+89148", // Update with actual reviews URL
  },
};

export const COMMUNITY = {
  name: "Regency at Summerlin",
  builder: "Toll Brothers",
  totalHomes: 457,
  acreage: "100+",
  yearBuilt: "2016-2023",
  zipCode: "89148",
  village: "The Cliffs",
  city: "Las Vegas",
  state: "NV",
  hoa: {
    regency: 358,
    master: 57,
    total: 415,
  },
  price: {
    min: 700000,
    max: 1100000,
    median: 879000,
  },
};

export const COLLECTIONS = {
  summit: {
    name: "Summit Collection",
    sqftRange: "1,665 - 1,792",
    beds: "2-3",
    baths: "2.5",
    lotSize: "55'x90'",
    plans: ["Delmar", "Gilmore", "Stony Ridge"],
  },
  palisades: {
    name: "Palisades Collection",
    sqftRange: "2,003 - 2,223",
    beds: "2-3",
    baths: "2.5",
    lotSize: "65'x90'",
    plans: ["Bristol Bay", "Clay Hill", "Sun Dance"],
  },
  pinnacle: {
    name: "Pinnacle Collection",
    sqftRange: "2,235 - 2,659",
    beds: "2",
    baths: "2.5",
    lotSize: "75'x90'",
    plans: ["Largest floor plans"],
  },
};

export const NAV_LINKS = [
  {
    label: "Homes for Sale",
    href: "/homes-for-sale",
    children: [{ label: "Recently Sold", href: "/recently-sold" }],
  },
  {
    label: "Floor Plans",
    href: "/floor-plans",
    children: [
      { label: "Summit Collection", href: "/summit-collection" },
      { label: "Palisades Collection", href: "/palisades-collection" },
      { label: "Pinnacle Collection", href: "/pinnacle-collection" },
    ],
  },
  { label: "Amenities", href: "/amenities" },
  {
    label: "Community",
    href: "/location",
    children: [
      { label: "Location", href: "/location" },
      { label: "HOA & Fees", href: "/hoa-fees" },
      { label: "Lifestyle", href: "/lifestyle" },
      { label: "Nearby Amenities", href: "/nearby-amenities" },
      {
        label: "Compare 55+ Communities",
        href: "/compare-55-communities",
      },
    ],
  },
  { label: "Buying", href: "/buying-guide" },
  { label: "Selling", href: "/selling" },
  {
    label: "Resources",
    href: "/blog",
    children: [
      { label: "Market Report", href: "/market-report" },
      { label: "Photos", href: "/photos" },
      { label: "Virtual Tours", href: "/virtual-tours" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];


