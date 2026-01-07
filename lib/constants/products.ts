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
  title: "Engineered Fabrics. ",
  subtitle: "Market-Ready Solutions.",
  paragraphs: [
    "Sona Selection offers a diversified portfolio of finished fabrics engineered for performance, consistency, and scale. Our product range supports a wide spectrum of fashion and apparel applications, enabling brands to move efficiently from concept to commercialisation.",
    "By combining material expertise with controlled processing and finishing, Sona Selection delivers fabrics that meet evolving aesthetic, functional, and sustainability expectations across domestic and international markets.",
  ],
  image: "/images/products/hero.png",
};

export const productRange: ProductRangeSection = {
  title: "Core Fabric Categories:",
  items: [
    {
      id: "100-cotton",
      title: "100% Cotton Fabric",
      image: "/images/products/woven_fabrics/1.svg",
      detailTitle: "100% Cotton Fabric",
      detailDescription:
        "Premium cotton fabrics developed for comfort, breathability, and durability. Designed to deliver consistent hand-feel, colour depth, and performance across casualwear, formalwear, and everyday essentials.",
      applications: [
        "Shirts and tops",
        "Bottomwear",
        "Casual and lifestyle apparel",
      ],
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
        "Stretch-enabled cotton fabrics offering enhanced comfort, flexibility, and fit retention. These fabrics combine natural fibre appeal with performance-driven stretch properties.",
      applications: [
        "Bottomwear",
        "Contemporary casualwear",
        "Fashion-led silhouettes",
      ],
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
        "Blended fabrics engineered to balance comfort, durability, and cost efficiency. These fabrics are optimised for high-volume programs while maintaining aesthetic and performance consistency.",
      applications: [
        "Workwear",
        "Uniforms",
        "Mass-market apparel",
      ],
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
        "Performance-oriented blends designed for strength, colourfastness, and long-term wear. These fabrics support demanding use-cases and offer superior dimensional stability.",
      applications: [
        "Formalwear",
        "Functional apparel",
        "High-rotation garments",
      ],
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
