import {
  AboutUsHeroSection,
  JourneySection,
  PeopleCultureSection,
  ValuesSection,
} from "@/lib/types";

import { assets } from "./assets";

/**
 * About Us Hero Section Data
 */
export const aboutUsHero: AboutUsHeroSection = {
  title: "Welcome to Sona.",
  subtitle: "Where tradition meets innovation in the fabric of excellence.",
  foundingInfo: "",
  description:
    "We are an integrated fabric manufacturing and processing company engaged in the production of value added products. Leveraging advanced technology, well established production capabilities and stringent quality systems, we convert raw textiles into finished, high‑quality fabrics. Our model enables us to offer a diversified product portfolio, maintain consistent quality, support innovation in fabric development and provide our customers with reliable, cost‑efficient and timely solutions, thereby positioning us as a preferred partner for brands seeking consistency, innovation and faster delivery timelines. We specialize in the manufacturing of 100% cotton fabric, cotton lycra (stretch) fabric, cotton blends, polyester blends, and in the processing of fabric including 100% cotton, cotton blends, polyester-viscose (P/V) and polyester fabric.Our Company’s manufacturing facility is located in Bhilwara, Rajasthan, which is widely known as the “Vastranagari” or the “Manchester of Rajasthan” (Source: CareEdge Report) and is spread across an aggregate land area of approximately 49,540 Sq. Mtr. Our manufacturing facility has an installed processing capacity of 82.44 million meters per annum.Our manufacturing process commences with (i) procurement of greige fabric from third-party suppliers; or (ii) procurement of yarn, which is subsequently converted into greige fabric through outsourced job-work arrangements undertaken in accordance with our technical specifications. Upon receipt of the greige fabric, all subsequent processing operations, including bleaching, dyeing and finishing, are carried out in-house at our manufacturing facility. Through these processes, we convert greige fabric into finished fabric of the requisite quality, specifications and end-use requirements.",

  image: assets.aboutUs.heroImage,
  backgroundImage: assets.aboutUs.heroBackground,
  textureImage: assets.aboutUs.heroTexture,
};

/**
 * People & Culture Section Data
 */
export const aboutUsPeopleCulture: PeopleCultureSection = {
  heading: "Our strength lies not just in our machines, but in our people.",
  description:
    "Our manufacturing facility is equipped with advanced machinery sourced from reputed manufacturers. This includes stenter, merceriser, washing range, sanforiser, singeing, microsand suiding machine, KD jaguar and cloth pressing machine model formula 1 multipla, many of which are integrated with real-time digital monitoring tools to ensure uniformity and reduce defects. As part of our ongoing commitment to product innovation and quality assurance, we have in place our in-house quality assurance lab equipped with machines such as Titans (Universal Strength Tester), Elmatear 1555 (Intelligent Digital Tear Tester) and Auto Colour Dispencer sourced from companies based out of China, Switzerland and UK. The combination of in-house manufacturing and job-work services provides us with the ability to manage capacity effectively and operate at optimal utilization levels. During the Three Months Period ended June 2025, Fiscal 2025, Fiscal 2024 and Fiscal 2023, our capacity utilization stood at 81.65%, 71.50%, 89.50% and 87.65%, respectively. Our Company’s revenue from operations has increased by a CAGR of 83.42% from Fiscal 2023 to Fiscal 2025. Similarly, our EBITDA and profitability have increased at a CAGR of 79.31% and 172.00% respectively, from Fiscal 2023 to Fiscal 2025.",
  image: assets.aboutUs.peopleCultureImage,
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

// Re-export leadership section from shared leadership constants
export { aboutUsLeadership } from "./leadership";

/**
 * Journey Section Data for About Us Page
 */
export const aboutUsJourney: JourneySection = {
  badge: "Leadership",
  title: "Our Journey",
  milestones: [
    {
      year: "1987",
      title: "The Visionary Start",
      description:
        "Subhash Nuwal embarked on his journey in the textiles industry, driven by a passion for excellence and a keen understanding of market dynamics. Starting from humble beginnings, he quickly established a reputation for quality and innovation.",
      image: assets.aboutUs.journey.milestone1,
    },
    {
      year: "1995",
      title: "Establishing Sona Processors Ltd.",
      description:
        "Recognizing the need for superior processing capabilities, Subhash founded Sona Processors Ltd. in 1995. This unit specialized in PV and Polyester suiting's and soon became the finest in its class, boasting a remarkable capacity of over 5 million meters per month. This achievement marked the beginning of Sona's dominance in the textile processing industry.",
      image: assets.aboutUs.journey.milestone2,
    },
    {
      year: "2015",
      title: "Expansion into Natural Fibers",
      description:
        "With a keen eye on market trends and growing consumer demand for natural fibers, Sona Group launched a cotton processing facility. This strategic move allowed the company to capture a significant share of the expanding cotton market, diversifying its product portfolio and reinforcing its market position.",
      image: assets.aboutUs.journey.milestone3,
    },
    {
      year: "2022",
      title: "Weaving Unit and Strategic Acquisitions",
      description:
        "In a year of significant growth, Sona Group made two pivotal advancements",
      image: assets.aboutUs.journey.milestone4,
    },
    {
      year: "",
      title: "Sona Styles Ltd.",
      description:
        "A state-of-the-art weaving unit equipped with brand new Airjet looms was established, with a capacity of 0.7 million meters per month. This addition enhanced Sona’s manufacturing capabilities, ensuring superior quality and efficiency.",
      image: assets.aboutUs.journey.milestone5,
    },
    {
      year: "",
      title: "Sona Selection (I) Ltd.",
      description:
        "To further expand processing capacities, Sona acquired an existing processing unit. Immediate modernization efforts were undertaken, incorporating cutting-edge technology and machinery for cotton processing. This acquisition aimed to meet increasing demand and uphold Sona’s commitment to quality.",
      image: assets.aboutUs.journey.milestone6,
    },
    {
      year: "2024",
      title: "Scaling New Heights",
      description:
        "The relentless pursuit of excellence led to the creation of a processing facility capable of handling about 10.15 million meters per month, with 5 million meters dedicated to cotton processing. This expansion solidified Sona’s position as a leader in the textile processing industry.",
      image: assets.aboutUs.journey.milestone8,
    },
    {
      year: "2025",
      title: "Future Prospects",
      description:
        "Looking ahead, Sona Group plans to add another weaving facility with a capacity of 1.8 million meters per month. Equipped with the latest sizing machines, this facility will enable seamless manufacturing of high-quality fabrics, meeting the evolving needs of global markets.",
      image: assets.aboutUs.journey.milestone9,
    },
  ],
};
