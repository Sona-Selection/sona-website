import {
  AdvancedFinishesSection,
  ProductCategorySection,
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
