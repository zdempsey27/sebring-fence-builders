import fs from 'fs';

// ============================================================================
// IMAGE AUTO-DISCOVERY — No need to edit image paths manually
// ============================================================================

function getImagesMatching(prefix) {
  try {
    const files = fs.readdirSync('./public/images');
    return files
      .filter(f => f.startsWith(prefix) && /\.(jpe?g|png|webp)$/i.test(f))
      .sort()
      .map(f => `/images/${f}`);
  } catch {
    return [];
  }
}

function getFirstImage(prefix) {
  const images = getImagesMatching(prefix);
  return images[0] || null;
}

// ============================================================================
// MASTER DETAILS — EDIT THIS SECTION ONLY
// ============================================================================

const BUSINESS_NAME = "Sebring Fence Builders";
const SITE_URL = "https://sebringfencebuilders.com";
const TAGLINE = "Quality Fencing You Can Trust";
const PHONE_DISPLAY = "(863) 451-9795";
const PHONE_TEL = "tel:+18634519795";
const PHONE_RAW = "8634519795";
const EMAIL = "";
const CLIENT_EMAIL = "client@domain.com";

const CITY = "Sebring";
const STATE = "Florida";
const STATE_ABBR = "FL";
const COUNTY = "Highlands County";
const REGION = "Florida Hearrtland Region";
const GEO_LAT = 34.7698;
const GEO_LNG = -84.9702;

const PRIMARY_COLOR = "#2C3E50";
const PRIMARY_DARK = "#1A252F";
const SECONDARY_COLOR = "#7D6B5D";
const ACCENT_COLOR = "#E67E22";
const OVERLAY_COLOR = "44, 62, 80"; // RGB values of PRIMARY_COLOR for rgba() overlays

// Hero & Trust Signals — customize per client
const HERO_TAGLINE = "PROFESSIONAL FENCE INSTALLATION";
const HERO_HEADLINE = `${CITY}'s Top-Rated Fence Contractors`;
const HERO_DESCRIPTION = `${BUSINESS_NAME} delivers quality fence installations using premium materials and expert craftsmanship to secure your property and boost curb appeal.`;
const HERO_CTA_TEXT = "Request Your Free Estimate";
const FORM_HEADING = "Get Your Free Estimate";
const FORM_URGENCY_TEXT = "Limited Slots Available This Month!";

// Reviews & Trust (set to 0 to hide)
const REVIEW_RATING = 4.9;
const REVIEW_COUNT = 100;
const TRUST_BADGES = [
  { text: "Licensed & Insured", icon: "shield" },
  { text: "Locally Owned", icon: "award" },
];

// Business Hours
const BUSINESS_HOURS = "Mon-Fri: 7:00 AM - 6:00 PM";

// Why Choose Us Stats (progress bars)
const STATS = [
  { label: "Quality Materials", value: 95 },
  { label: "Customer Satisfaction", value: 98 },
  { label: "On-Time Completion", value: 94 },
];

// Testimonials
const TESTIMONIALS = [
  {
    quote: "They built a solid board-on-board privacy fence around our backyard off Dug Gap Road. The crew showed up on time, worked clean, and finished in a day and a half. Exactly what we needed.",
    name: "Robert M.",
    location: "Dalton"
  },
  {
    quote: "We needed a farm fence for our horse property in Murray County. They understood exactly what we needed for the terrain and delivered quality work at a fair price. Would use them again.",
    name: "Sarah T.",
    location: "Chatsworth"
  },
  {
    quote: "After a storm knocked over a section of our fence, they came out quickly and had it repaired within a few days. Good communication and honest pricing.",
    name: "Mike & Linda K.",
    location: "Ringgold"
  },
  {
    quote: "Professional from the estimate to the final walkthrough. Our new vinyl fence looks great and the installation was clean and efficient. These guys know what they're doing.",
    name: "Jennifer H.",
    location: "Rocky Face"
  },
];

// Just type the area names — slugs generate automatically.
// Put your primary city FIRST.
const SERVICE_AREA_NAMES = [
  "Sebring",
  "Avon Park",
  "Lake Placid",
  "Frostproof",
  "Wauchula",
  "Arcadia",
  "Okeechobee",
  "Lake Wales",
  "Fort Meade",
];

// ============================================================================
// STOP EDITING HERE — Everything below auto-populates from above
// ============================================================================

function toSlug(name) {
  return name.toLowerCase().replace(/[&]/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const siteConfig = {
  businessName: BUSINESS_NAME,
  siteUrl: SITE_URL,
  tagline: TAGLINE,
  niche: "Fencing",
  nicheLC: "fencing",

  phone: {
    display: PHONE_DISPLAY,
    tel: PHONE_TEL,
    raw: PHONE_RAW,
  },

  email: EMAIL,

  location: {
    city: CITY,
    state: STATE,
    stateAbbr: STATE_ABBR,
    county: COUNTY,
    region: REGION,
    fullAddress: `${CITY}, ${STATE_ABBR}`,
    mapQuery: `${CITY},+${STATE_ABBR}`,
    geo: {
      lat: GEO_LAT,
      lng: GEO_LNG,
    },
  },

  hero: {
    tagline: HERO_TAGLINE,
    headline: HERO_HEADLINE,
    description: HERO_DESCRIPTION,
    ctaText: HERO_CTA_TEXT,
    formHeading: FORM_HEADING,
    urgencyText: FORM_URGENCY_TEXT,
    reviews: {
      rating: REVIEW_RATING,
      count: REVIEW_COUNT,
    },
    trustBadges: TRUST_BADGES,
  },

  stats: STATS,
  testimonials: TESTIMONIALS,
  businessHours: BUSINESS_HOURS,

  services: [
    {
      name: "Chain-Link Fence",
      slug: "chain-link-fence",
      shortDesc: "Affordable, durable chain link fencing for security and property boundaries. Options for privacy slats, different heights, and coated finishes for residential and commercial properties.",
    },
    {
      name: "Vinyl Fence",
      slug: "vinyl-fence",
      shortDesc: "Low-maintenance vinyl fencing that resists warping, rot, and fading. Privacy, semi-privacy, and picket styles built to look great for decades with virtually no upkeep.",
    },
    {
      name: "Wood Fence",
      slug: "wood-fence",
      shortDesc: "Classic wood fencing built to handle local climate conditions. Privacy fences, picket fences, and custom designs using quality lumber and proven construction techniques.",
    },
    {
      name: "Wrought Iron Fence",
      slug: "wrought-iron-fence",
      shortDesc: "Elegant wrought iron fencing that combines timeless style with serious security. Custom ornamental iron fences and gates for homes and businesses.",
    },
    {
      name: "Metal Fence",
      slug: "metal-fence",
      shortDesc: "Modern metal fencing options including steel panels, corrugated metal, and aluminum. Durable, low-maintenance fences for contemporary style or industrial strength.",
    },
    {
      name: "Farm & Ranch Fence",
      slug: "farm-ranch-fence",
      shortDesc: "Agricultural fencing for farms, ranches, and rural properties. Pipe and rail, wire field fence, horse-safe no-climb, and livestock corrals for real working conditions.",
    },
    {
      name: "Fence Repair",
      slug: "fence-repair",
      shortDesc: "Fast, reliable fence repair for storm damage, leaning posts, broken boards, and general wear. We fix all fence types and materials. Full replacement is not always necessary.",
    },
    {
      name: "Commercial Fencing",
      slug: "commercial-fencing",
      shortDesc: "Professional commercial fencing for businesses, industrial sites, and multi-family properties. Security perimeters, access control, and durable fencing for high-traffic use.",
    },
  ],

  serviceAreas: SERVICE_AREA_NAMES.map((name, i) => ({
    name,
    slug: toSlug(name),
    ...(i === 0 ? { isPrimary: true } : {}),
  })),

  colors: {
    primary: PRIMARY_COLOR,
    primaryDark: PRIMARY_DARK,
    secondary: SECONDARY_COLOR,
    accent: ACCENT_COLOR,
    overlay: OVERLAY_COLOR,
    dark: "#1a1a1a",
    light: "#f5f5f5",
    white: "#ffffff",
    gray: "#555555",
  },

  images: {
    // Logo - discovers logo.jpg, logo.png, logo.webp, etc.
    logo: getFirstImage("logo"),
    
    // Branded truck - supports "Branded-truck-*" or "branded-truck-*"
    brandedTruck: getFirstImage("Branded-truck") || getFirstImage("branded-truck"),
    
    // Trust badges - case-insensitive prefix matching
    badges: {
      licensed: getFirstImage("Licensed") || getFirstImage("licensed"),
      award: getFirstImage("Award") || getFirstImage("award"),
      fiveStars: getFirstImage("Five-stars") || getFirstImage("five-stars") || getFirstImage("5-star"),
    },
    
    // Fence installer images - array for variety across page sections
    installers: getImagesMatching("fence-installer"),
    
    // Section backgrounds - used for overlays throughout site
    backgrounds: {
      wood: getFirstImage("wood-fence"),
      vinyl: getFirstImage("vinyl-fence"),
      chainLink: getFirstImage("chain-link-fence"),
      metal: getFirstImage("metal-fence"),
      installer: getFirstImage("fence-installer"),
      commercial: getFirstImage("commercial-fencing"),
      farmRanch: getFirstImage("farm-ranch-fence"),
    },

    heroMain: getFirstImage("hero") || getFirstImage("fence-installer"),
    
    serviceCards: {
      "chain-link-fence": getFirstImage("chain-link-fence"),
      "vinyl-fence": getFirstImage("vinyl-fence"),
      "wrought-iron-fence": getFirstImage("wrought-iron-fence"),
      "wood-fence": getFirstImage("wood-fence"),
      "metal-fence": getFirstImage("metal-fence"),
      "farm-ranch-fence": getFirstImage("farm-ranch-fence"),
      "fence-repair": getFirstImage("fence-repair") || getFirstImage("fence-installer"),
      "commercial-fencing": getFirstImage("commercial-fencing"),
    },

    gallery: [
      ...getImagesMatching("wood-fence").slice(0, 2),
      ...getImagesMatching("vinyl-fence").slice(0, 1),
      ...getImagesMatching("chain-link-fence").slice(0, 1),
      ...getImagesMatching("metal-fence").slice(0, 1),
      ...getImagesMatching("farm-ranch-fence").slice(0, 1),
    ].slice(0, 6).map((src, i) => ({ 
      src, 
      alt: `Fence Installation in ${CITY}, ${STATE_ABBR}` 
    })),

    serviceGalleries: {
      "chain-link-fence": getImagesMatching("chain-link-fence"),
      "vinyl-fence": getImagesMatching("vinyl-fence"),
      "wood-fence": getImagesMatching("wood-fence"),
      "wrought-iron-fence": getImagesMatching("wrought-iron-fence"),
      "metal-fence": getImagesMatching("metal-fence"),
      "farm-ranch-fence": getImagesMatching("farm-ranch-fence"),
      "fence-repair": getImagesMatching("fence-repair").length > 0 
        ? getImagesMatching("fence-repair") 
        : getImagesMatching("fence-installer"),
      "commercial-fencing": getImagesMatching("commercial-fencing"),
    },

    aboutWork: getFirstImage("fence-installer"),
    formImage: getFirstImage("form-image") || getFirstImage("fence-installer"),
  },

  seo: {
    titleTemplate: "{page} | {businessName}",
    defaultTitle: `${BUSINESS_NAME} | Fencing Installation & Repair in ${CITY}, ${STATE_ABBR}`,
    defaultDescription: `Professional fencing contractor in ${CITY}, ${STATE_ABBR}. We install chain-link, vinyl, and wood fences. Call ${PHONE_DISPLAY} for a free estimate.`,
  },

  footerAbout: `At ${BUSINESS_NAME}, we specialize in custom fencing tailored to your needs. From privacy fences to decorative options, our skilled team ensures high-quality craftsmanship and durability.`,

  social: {
    facebook: "",
    instagram: "",
    google: "",
    yelp: "",
  },

  forms: {
    action: "https://lead-form-handler.zak-b7e.workers.dev",
    clientEmail: CLIENT_EMAIL,
    serviceOptions: [
      { value: "chain-link", label: "Chain-Link Fence" },
      { value: "vinyl", label: "Vinyl Fence" },
      { value: "wood", label: "Wood Fence" },
      { value: "wrought iron", label: "Wrought Iron Fence" },
      { value: "metal fence", label: "Metal Fence" },
      { value: "farm & ranch", label: "Farm & Ranch Fence" },
      { value: "commercial", label: "Commercial" },
      { value: "other", label: "Other" },
    ],
  },
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getFullLocation() {
  return `${siteConfig.location.city}, ${siteConfig.location.stateAbbr}`;
}

export function getSeoTitle(pageTitle) {
  if (!pageTitle) return siteConfig.seo.defaultTitle;
  return `${pageTitle} | ${siteConfig.businessName}`;
}

export function getServiceBySlug(slug) {
  return siteConfig.services.find(s => s.slug === slug);
}

export function getServiceAreaBySlug(slug) {
  return siteConfig.serviceAreas.find(a => a.slug === slug);
}
