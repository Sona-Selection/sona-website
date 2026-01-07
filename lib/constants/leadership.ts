import { LeadershipSection } from "@/lib/types";
import { assets } from "./assets";

/**
 * Shared Leadership Section Data
 * Used across both Home and About Us pages
 */
export const leadershipData: LeadershipSection = {
  badge: "Leadership",
  title: "Experienced Promoters. Long-Term Vision.",
  subtitle:
    "Sona Selection is led by promoters with deep operational expertise and long-term commitment to the textile sector.",
  team: [
    {
      name: "Subhash Chandra Nuwal",
      role: "Promoter & Chairman",
      description:
        "Seasoned entrepreneur with over 35 years of experience in the textile industry. As Chairman of Sona Group, he oversees one of India's largest textile processing capacities, currently 12 million meters per month",
      image: assets.leadership.subhashImage,
      aboutImage: assets.aboutUs.leadership.aboutSubhashImage,
      logo: assets.leadership.companyLogo,
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      name: "Harshil Nuwal",
      role: "Promoter & Managing Director",
      description:
        "Under his guidance, Sona Group expanded its capabilities with a state-of-the-art textile weaving unit. With a vision for sustainable expansion, he spearheaded the establishment of a cutting-edge cotton fabrics processing plant, slated for completion in May 2024, positioning us as leaders in cotton fabric processing in India.",
      image: assets.leadership.harshilImage,
      aboutImage: assets.aboutUs.leadership.aboutHarshilImage,
      linkedinUrl: "https://www.linkedin.com/in/harshil-nuwal-75401321",
    },
    {
      name: "Deepank Bhandari",
      role: "Promoter",
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

/**
 * Execution Team Section for About Us Page
 * Features management team members with operational expertise
 */
export const executionTeamData: LeadershipSection = {
  badge: "Management Team",
  title: "Execution-Focused Management Team",
  subtitle:
    "The promoters are supported by a seasoned management team with deep domain expertise.",
  team: [
    {
      name: "Rajnikant Saraswat",
      role: "General Manager",
      description: "39+ years of experience in operations and financial planning",
      image: "/placeholder-rajnikant.jpg",
      aboutImage: "/placeholder-rajnikant.jpg",
      linkedinUrl: "/",
    },
    {
      name: "Ajay Jain",
      role: "Plant Head",
      description: "24+ years of experience in fabric processing",
      image: "/placeholder-ajay.jpg",
      aboutImage: "/placeholder-ajay.jpg",
      linkedinUrl: "/",
    },
  ],
  bottomParagraph:
    "The broader team blends engineering expertise with digital process controls to deliver scalable, customised textile solutions while maintaining operational efficiency and quality discipline.",
};
