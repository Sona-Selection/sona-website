import { CapabilitiesHeroSection, FacilitiesGallerySection } from "@/lib/types";

/**
 * Capabilities Hero Section Data
 */
export const capabilitiesHero: CapabilitiesHeroSection = {
  title: "Manufacturing & Capabilities",
  description:
    "Our Company’s manufacturing facility is located in Bhilwara, Rajasthan, which is widely known as the “Vastranagari” or the “Manchester of Rajasthan” and is spread across an aggregate land area of approximately 49,540 Sq. Mtr. Our manufacturing facility has an installed processing capacity of 82.44 million meters per annum.",
  backgroundImage: "/images/capabilties/hero/cover.png",
  capacityCards: [
    // {
    //   label: "SONA PROCESSORS",
    //   value: "5M Meters/Month",
    //   image: "/images/capabilties/hero/1.png",
    // },
    {
      label: "SONA SELECTION",
      value: "82.44M Meters per annum",
      image: "/images/capabilties/hero/2.png",
    },
    // {
    //   label: "SONA STYLES",
    //   value: "2M Meters/Month",
    //   image: "/images/capabilties/hero/3.png",
    // },
  ],
  qualityLab: {
    badge: "STATE OF THE ART",
    title: "Sona Quality Control Lab",
    description: [
      "Quality standards in line with the customer testing conditions and global standards.",
      "Latest machines & updated global quality standards",
    ],
    ctaLabel: "See All Facilities",
    ctaHref: "/facilities",
  },
  facilities: [
    {
      name: "Datacolor",
      country: "(USA)",
      logo: "/images/capabilties/facilities/1.png",
    },
    {
      name: "Mathis",
      country: "(Switzerland)",
      logo: "/images/capabilties/facilities/2.png",
    },
    {
      name: "James Heal",
      country: "(UK)",
      logo: "/images/capabilties/facilities/3.png",
    },
  ],
};

/**
 * Placeholder image path - Update with actual images later
 */

const PLACEHOLDER_IMAGE1 = "/images/capabilties/sections/1.svg";
const PLACEHOLDER_IMAGE2 = "/images/capabilties/sections/2.svg";
const PLACEHOLDER_IMAGE3 = "/images/capabilties/sections/3.svg";
const PLACEHOLDER_IMAGE4 = "/images/capabilties/sections/4.svg";
const PLACEHOLDER_IMAGE5 = "/images/capabilties/sections/5.svg";
const PLACEHOLDER_IMAGE6 = "/images/capabilties/sections/6.svg";

/**
 * SONA Processors Facilities Gallery Data
 * TODO: Replace placeholder images with actual facility photos
 */
export const sonaProcessorsFacilities: FacilitiesGallerySection = {
  heading: "SONA PROCESSORS",
  images: [
    {
      image: PLACEHOLDER_IMAGE1,
      label: "FABRIC TENSILE STRENGTH TESTING",
    },
    {
      image: PLACEHOLDER_IMAGE2,
      label: "FABRIC QUALITY INSPECTION",
    },
    {
      image: PLACEHOLDER_IMAGE3,
      label: "AUTOMATED QUALITY CONTROL",
    },
    {
      image: PLACEHOLDER_IMAGE4,
      label: "LATEST INFRASTRUCTURE",
    },
    {
      image: PLACEHOLDER_IMAGE5,
      label: "COLOURFASTNESS AND WASH TEST",
    },
    {
      image: PLACEHOLDER_IMAGE6,
      label: "IN-HOUSE LAB LAUNDERING",
    },
  ],
};

/**
 * SONA Selection Facilities Gallery Data
 * TODO: Replace placeholder images with actual facility photos
 */
export const sonaSelectionFacilities: FacilitiesGallerySection = {
  heading: "SONA SELECTION",
  images: [
    {
      image: PLACEHOLDER_IMAGE1,
      label: "LAB EQUIPMENT",
    },
    {
      image: PLACEHOLDER_IMAGE2,
      label: "FABRIC INSPECTION",
    },
    {
      image: PLACEHOLDER_IMAGE3,
      label: "QUALITY ASSURANCE",
    },
    {
      image: PLACEHOLDER_IMAGE4,
      label: "PRODUCTION FLOOR",
    },
    {
      image: PLACEHOLDER_IMAGE5,
      label: "TEXTILE PROCESSING",
    },
    {
      image: PLACEHOLDER_IMAGE6,
      label: "FINISHING DEPARTMENT",
    },
  ],
};

/**
 * SONA Styles Facilities Gallery Data
 * TODO: Replace placeholder images with actual facility photos
 */
export const sonaStylesFacilities: FacilitiesGallerySection = {
  heading: "SONA STYLES",
  images: [
    {
      image: PLACEHOLDER_IMAGE1,
      label: "CUTTING SECTION",
    },
    {
      image: PLACEHOLDER_IMAGE2,
      label: "SEWING OPERATIONS",
    },
    {
      image: PLACEHOLDER_IMAGE3,
      label: "GARMENT ASSEMBLY",
    },
    {
      image: PLACEHOLDER_IMAGE4,
      label: "FINISHING & PRESSING",
    },
    {
      image: PLACEHOLDER_IMAGE5,
      label: "QUALITY CHECK",
    },
    {
      image: PLACEHOLDER_IMAGE6,
      label: "PACKAGING UNIT",
    },
  ],
};

/**
 * Facilities/Machines Data
 */
export interface Facility {
  srNo: number;
  name: string;
  category: string;
}

export const facilities: Facility[] = [
  {
    srNo: 1,
    name: "Titans (Universal Strength Tester)",
    category: "In-house laboratory",
  },
  {
    srNo: 2,
    name: "Elmatear 1555 (Intelligent Digital Tear Tester)",
    category: "In-house laboratory",
  },
  {
    srNo: 3,
    name: "Auto Colour Dispencer",
    category: "In-house laboratory",
  },
  {
    srNo: 4,
    name: "Stenter",
    category: "Manufacturing process",
  },
  {
    srNo: 5,
    name: "Merceriser",
    category: "Manufacturing process",
  },
  {
    srNo: 6,
    name: "Washing range",
    category: "Manufacturing process",
  },
  {
    srNo: 7,
    name: "Sanforiser",
    category: "Manufacturing process",
  },
  {
    srNo: 8,
    name: "Singeing",
    category: "Manufacturing process",
  },
  {
    srNo: 9,
    name: "Microsand suiding machine",
    category: "Manufacturing process",
  },
  {
    srNo: 10,
    name: "KD jaguar",
    category: "Manufacturing process",
  },
  {
    srNo: 11,
    name: "Cloth pressing machine model formula 1 multipla",
    category: "Manufacturing process",
  },
];
