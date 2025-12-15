import {
  AdvancedFinishesSection,
  ProductCategorySection,
  ProductRangeSection,
  ProductsHeroSection,
} from "@/lib/types";

/**
 * Products Page Constants
 */

export const productsHero: ProductsHeroSection = {
  badge: "Product Range",
  title: "Textile Solutions:",
  subtitle: "Built to Perform.",
  paragraphs: [
    "Since 1987, we have been at the forefront of India's textile evolution, seamlessly blending tradition with modern advancements.",
    "We currently produce approximately 8.5 million meters of fabric annually, with plans to increase our annual production capacity to almost 30 million meters. These fabrics cater to a wide range of industries and applications.",
    "Our commitment to sustainability is reflected in our range of health and eco-friendly fabrics, including those made from Better Cotton Initiative (BCI) and organic cotton. These fabrics promote responsible cotton production and environmental stewardship.",
  ],
  image: "/images/products/hero.png",
};

export const productRange: ProductRangeSection = {
  title: "Our Product Range",
  items: [
    {
      id: "100-cotton",
      title: "100% Cotton Fabric",
      image: "/images/products/woven_fabrics/1.svg",
      detailTitle: "100% Cotton Fabric",
      detailDescription:
        "Our 100% cotton fabrics are known for their breathability, softness, and durability, making them suitable for applications in fashion apparel and casual wear. With controlled processing and quality-focused manufacturing, we ensure consistent fabric strength, color fastness, and comfort-oriented performance.",
      detailImages: [
        "/images/products/woven_fabrics/1.svg",
        "/images/products/product_applications/1.png",
        "/images/products/woven_fabrics/2.svg",
      ],
    },
    {
      id: "cotton-lycra",
      title: "Cotton Lycra Fabric",
      image: "/images/products/woven_fabrics/2.svg", // Using 2 as placeholder
      detailTitle: "Cotton Lycra (Stretch) Fabric",
      detailDescription:
        "Our cotton Lycra (stretch) fabrics combine the natural comfort of cotton with the stretch and recovery properties of elastane, offering flexibility and enhanced fit. These fabrics are widely used in garment industry. Through our Company's precise finishing processes, we achieve uniform stretchability, shape retention, and long-lasting performance, meeting the requirements of both casual and formal segment.",
      detailImages: [
        "/images/products/woven_fabrics/2.svg",
        "/images/products/product_applications/2.png",
        "/images/products/woven_fabrics/3.svg",
      ],
    },
    {
      id: "cotton-blends",
      title: "Cotton Blends",
      image: "/images/products/woven_fabrics/2.svg",
      detailTitle: "Cotton Blends",
      detailDescription:
        "We produce a variety of cotton blend fabrics that integrate cotton with fibres such as polyester, viscose, to achieve enhanced durability, drape, and ease of maintenance. These blends offer balanced characteristics including improved wrinkle resistance, and reduced shrinkage, making them suitable for a wide range of apparel.",
      detailImages: [
        "/images/products/woven_fabrics/2.svg",
        "/images/products/product_applications/3.png",
        "/images/products/woven_fabrics/4.svg",
      ],
    },
    {
      id: "polyester-blends",
      title: "Polyester Blends",
      image: "/images/products/woven_fabrics/4.svg",
      detailTitle: "Polyester Blends",
      detailDescription:
        "Polyester blends are designed to create textiles that are more durable, wrinkle-resistant, and resilient than natural fibers alone, while also offering advantages like softness and breathability from the blended fibre.",
      detailImages: [
        "/images/products/woven_fabrics/4.svg",
        "/images/products/product_applications/4.png",
        "/images/products/woven_fabrics/1.svg",
      ],
    },
  ],
};

export const wovenFabrics: ProductCategorySection = {
  title: "Woven Fabrics",
  description:
    "At Sona, we own the entire supply chain, from yarn sourcing to finished garments. We deliver faster turnarounds, smaller MOQs, and sustainable innovation for the fashion industry.",
  products: [
    {
      image: "/images/products/woven_fabrics/1.svg",
      title: "100% Cotton Fabrics",
    },
    {
      image: "/images/products/woven_fabrics/2.svg",
      title: "Cotton Blends",
    },
    {
      image: "/images/products/woven_fabrics/3.svg",
      title: "100% Polyester Fabrics",
    },
    {
      image: "/images/products/woven_fabrics/4.svg",
      title: "Polyester Blends",
    },
  ],
  showViewAll: true,
  showArrowNav: true,
  viewAllHref: "/",
};

export const specialityWeaves: ProductCategorySection = {
  title: "Speciality Weaves",
  description:
    "At Sona, we own the entire supply chain, from yarn sourcing to finished garments. We deliver faster turnarounds, smaller MOQs, and sustainable innovation for the fashion industry.",
  products: [
    {
      image: "/images/products/speciality_weaves/1.svg",
      title: "TWILLS, GABARDINES, AND BROKEN TWILL",
    },
    {
      image: "/images/products/speciality_weaves/2.svg",
      title: "DUCKS, PLAIN TUSSIOR, AND DOBBY",
    },
    {
      image: "/images/products/speciality_weaves/3.svg",
      title: "CORD, OTTOMAN, AND MORE TWILL",
    },
  ],
  showViewAll: false,
  showArrowNav: false,
};

export const finishedFabrics: ProductCategorySection = {
  title: "Finished Fabrics",
  description:
    "We offer a complete range of Ready for Dye (RFD) and dyed fabrics made from 100% cotton and blends, designed for the fashion, apparel, and work wear industries.",
  products: [
    {
      image: "/images/products/finished_fabrics/1.svg",
      title: "100% Cotton And Cotton Spandex Fabrics",
    },
    {
      image: "/images/products/finished_fabrics/2.svg",
      title: "100% Polyester And PV Fabrics",
    },
    {
      image: "/images/products/finished_fabrics/3.svg",
      title: "RFD, Bleached, And Dyed Fabrics",
    },
  ],
  showViewAll: false,
  showArrowNav: false,
};

export const productApplications: ProductCategorySection = {
  title: "Product Applications",
  description:
    "At Sona, we own the entire supply chain, from yarn sourcing to finished garments. We deliver faster turnarounds, smaller MOQs, and sustainable innovation for the fashion industry.",
  products: [
    {
      image: "/images/products/product_applications/1.png",
      title: "Casual Wear",
    },
    {
      image: "/images/products/product_applications/2.png",
      title: "Formal Wear",
    },
    {
      image: "/images/products/product_applications/3.png",
      title: "School Uniforms",
    },
    {
      image: "/images/products/product_applications/4.png",
      title: "Protective Clothing",
    },
  ],
  showViewAll: true,
  showArrowNav: true,
  viewAllHref: "/",
};

export const advancedFinishes: AdvancedFinishesSection = {
  title: "Advanced Finishes",
  description:
    "Our use of mechanical finishes enables us to reduce the usage of softening chemicals in fabric finishing. Beyond conventional soft and peach finishes, we provide specialty finishes including:",
  finishes: [
    {
      image: "/images/products/advanced_finishes/1.png",
      label: "Anti-Microbial",
    },
    {
      image: "/images/products/advanced_finishes/2.png",
      label: "Teflon",
    },
    {
      image: "/images/products/advanced_finishes/3.png",
      label: "Oil And Water Repellent",
    },
    {
      image: "/images/products/advanced_finishes/4.png",
      label: "Biomagical(Peach + Airo)",
    },
    {
      image: "/images/products/advanced_finishes/5.png",
      label: "Enzyme",
    },
    {
      image: "/images/products/advanced_finishes/6.png",
      label: "Bio-Polishing",
    },
  ],
};
