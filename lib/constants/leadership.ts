import { LeadershipSection } from "@/lib/types";
import { assets } from "./assets";

/**
 * Shared Leadership Section Data
 * Used across both Home and About Us pages
 */
export const leadershipData: LeadershipSection = {
  badge: "Leadership",
  title: "Meet Our Leadership",
  team: [
    {
      name: "Subhash Nuwal",
      role: "Chairman",
      description:
        "Seasoned entrepreneur with over 35 years of experience in the textile industry. As Chairman of Sona Group, he oversees one of India's largest textile processing capacities, currently 12 million meters per month",
      image: assets.leadership.subhashImage,
      aboutImage: assets.aboutUs.leadership.aboutSubhashImage,
      logo: assets.leadership.companyLogo,
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      name: "Harshil Nuwal",
      role: "Founder and MD",
      description:
        "Under his guidance, Sona Group expanded its capabilities with a state-of-the-art textile weaving unit. With a vision for sustainable expansion, he spearheaded the establishment of a cutting-edge cotton fabrics processing plant, slated for completion in May 2024, positioning us as leaders in cotton fabric processing in India.",
      image: assets.leadership.harshilImage,
      aboutImage: assets.aboutUs.leadership.aboutHarshilImage,
      linkedinUrl: "https://www.linkedin.com/in/harshil-nuwal-75401321",
    },
    {
      name: "Deepank Bhandari",
      role: "Founder",
      description:
        "Garnered over 4 years of comprehensive experience in Trading, Investment Banking and Private Equity across Europe, mastering the intricacies of global financial markets. Demonstrated over 9 years of adeptness in India's e-commerce landscape.",
      image: assets.leadership.deepankImage,
      aboutImage: assets.aboutUs.leadership.aboutDeepankImage,
      linkedinUrl: "https://www.linkedin.com/in/deepankbhandari",
    },
  ],
};

/**
 * Leadership Section for Home Page
 * Uses the same data but with a different badge
 */
export const leadershipSection: LeadershipSection = {
  ...leadershipData,
  badge: "cut from a different cloth",
};

/**
 * Leadership Section for About Us Page
 */
export const aboutUsLeadership: LeadershipSection = leadershipData;
