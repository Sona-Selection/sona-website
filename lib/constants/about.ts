import {
  AboutUsHeroSection,
  LeadershipSection,
  PeopleCultureSection,
  ValuesSection,
} from "@/lib/types";

import { figmaAssets } from "./assets";

/**
 * About Us Hero Section Data
 */
export const aboutUsHero: AboutUsHeroSection = {
  title: "Welcome to Sona.",
  subtitle: "Where tradition meets innovation in the fabric of excellence.",
  foundingInfo: "Founded in 1987, by visionary entrepreneur Subhash Nuwal.",
  description:
    "At Sona, we specialize in producing a wide range of textile products, including PV and polyester suitings, as well as a variety of cotton fabrics. With a production capacity exceeding 12 million meters per month, we are equipped to meet the diverse needs of our global clientele.",
  image: figmaAssets.aboutUs.heroImage,
  backgroundImage: figmaAssets.aboutUs.heroBackground,
  textureImage: figmaAssets.aboutUs.heroTexture,
};

/**
 * People & Culture Section Data
 */
export const aboutUsPeopleCulture: PeopleCultureSection = {
  heading: "Our strength lies not just in our machines, but in our people.",
  description:
    "Our team of dedicated professionals is driven by a passion for textiles and a commitment to excellence. This ethos permeates every level of our operation, from the factory floor to the executive suite. As we look to the future, Sona remains dedicated to expanding our reach, enhancing our capabilities, and contributing positively to our communities. We are not just creating textiles; we are weaving a better world for tomorrow. Join us in our journey of continuous innovation and dedicated craftsmanship. At Sona, we don't just make fabrics—we craft legacies.",
  image: figmaAssets.aboutUs.peopleCultureImage,
};

/**
 * Values Section Data
 */
export const aboutUsValues: ValuesSection = {
  badge: "Our Values",
  title: "What we stand for",
  values: [
    {
      icon: "Lightbulb",
      title: "Drive Innovation and Excellence",
      description:
        "Always push the envelope to deliver superior products that set industry benchmarks.",
    },
    {
      icon: "Heart",
      title: "Exceed Customer Expectations",
      description:
        "Anticipate needs and deliver exceptional, personalized service that delights and retains.",
    },
    {
      icon: "Award",
      title: "Guarantee Unmatched Quality",
      description:
        "Commit to the highest standards, ensuring every product exemplifies perfection.",
    },
    {
      icon: "Scale",
      title: "Practice Unwavering Integrity",
      description:
        "Adhere to the highest ethical standards, ensuring transparency and fairness in every interaction.",
    },
  ],
};

/**
 * Leadership Section Data for About Us Page
 */
export const aboutUsLeadership: LeadershipSection = {
  badge: "Leadership",
  title: "Meet Our Leadership",
  team: [
    {
      name: "Subhash Nuwal",
      role: "Chairman",
      description:
        "Mr. Subhash Nuwal, a seasoned entrepreneur with over 35 years of experience in the textile industry, spearheads our journey. He began his entrepreneurial voyage in 1988, establishing a weaving unit & later expanding into dyeing and processing. As Managing Director of Sona Group, he oversees one of India's largest textile processing capacities, currently at 12 million meters per month. Renowned brands such as Siyaram and Marks & Spencer have relied on his expertise in fabric processing. Since 1995, when he established Sona Processors Ltd., he has been leading the company to new heights, his vision & leadership have been pivotal in the company's Success. Under him, Sona Group has served several blue-chip brands, setting industry benchmarks in quality.",
      image: figmaAssets.aboutUs.leadership.subhashImage,
      logo: figmaAssets.leadership.companyLogo,
      linkedinUrl: "https://www.linkedin.com/in/subhash-nuwal",
    },
    {
      name: "Harshil Nuwal",
      role: "Founder and MD",
      description:
        "Mr. Harshil Nuwal has an MBA from the S.P. Jain Institute of Management. He joined the family business in 2010 and he brings to our team a fresh perspective and extensive experience. Under his guidance, Sona Group expanded its capabilities with a state-of-the-art textile weaving unit, boasting 60 brand-new airjet looms. In 2022, he initiated the acquisition of a processing unit, establishing M/s Sona Selection India Limited, enhancing our presence in the textile industry. With a vision for sustainable expansion, he spearheaded the establishment of a cutting-edge cotton fabrics processing plant, slated for completion in May 2024, positioning us as leaders in cotton fabric processing in India.",
      image: figmaAssets.aboutUs.leadership.harshilImage,
      linkedinUrl: "https://www.linkedin.com/in/harshil-nuwal",
    },
    {
      name: "Deepank Bhandari",
      role: "Founder and MD",
      description:
        "Mr Deepank has completed his B.Tech from IIT Delhi in 2007 and obtained an MSc in finance from ESCP Europe in 2011, blending technical expertise with financial acumen. Garnered over 4 years of comprehensive experience in Trading, Investment Banking and Private Equity across Europe, mastering the intricacies of global financial markets. Demonstrated over 9 years of adeptness in India's e-commerce landscape, pioneering the development of the most efficient hyperlocal supply chain in one of the world's most complex demographics. Held key leadership positions at distinguished organizations including Grofers (now Blinkit), leadership roles at 1Mg, Alcazar Capital, BNP Paribas, and Aviva, showcasing a track record of driving success and innovation in diverse sectors.",
      image: figmaAssets.aboutUs.leadership.deepankImage,
      linkedinUrl: "https://www.linkedin.com/in/deepank-bhandari",
    },
  ],
};
