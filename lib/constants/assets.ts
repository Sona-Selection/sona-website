/**
 * Asset URLs from Figma
 * These URLs are valid for 7 days from extraction
 * After that, images should be downloaded and stored locally
 */

export const figmaAssets = {
  // Hero section
  hero: {
    background:
      "https://www.figma.com/api/mcp/asset/eb649094-d915-41ac-a317-d06840cd791f",
    texture:
      "https://www.figma.com/api/mcp/asset/53820fd3-1c19-4726-9662-e1ce2f8de41d",
  },

  // Trusted brands logos
  brands: {
    brand1:
      "https://www.figma.com/api/mcp/asset/caf1d410-40f0-4b1b-9335-0b86531fe7a6",
    brand2:
      "https://www.figma.com/api/mcp/asset/bced14c5-2b3b-491a-ad5b-936d5a928af0",
    brand3:
      "https://www.figma.com/api/mcp/asset/ee72be32-513c-456b-8188-660fbce6c677",
    brand4:
      "https://www.figma.com/api/mcp/asset/52049474-2a5b-4188-bea8-a12d23edc3c5",
    brand5:
      "https://www.figma.com/api/mcp/asset/20e2e2e0-6b91-4a96-a0a3-f288452f19d2",
    brand6:
      "https://www.figma.com/api/mcp/asset/ac5af905-74fc-432c-a378-fe2404a39580",
    brand7:
      "https://www.figma.com/api/mcp/asset/ee58d07f-53f0-488f-85fb-61122bf67fc0",
    brand8:
      "https://www.figma.com/api/mcp/asset/c681c31c-a09f-4e09-b2cd-1bead1b11ee0",
    brand9:
      "https://www.figma.com/api/mcp/asset/49a0e06c-d024-43cc-988f-c91f7c09e708",
    brand10:
      "https://www.figma.com/api/mcp/asset/7db39479-d204-42dc-b5cb-862e3ccd1478",
    brand11:
      "https://www.figma.com/api/mcp/asset/55041a32-aacf-496d-bcfc-3fb9d6248e7e",
  },

  // About section
  about: {
    card1:
      "https://www.figma.com/api/mcp/asset/20875515-a5a8-4d1b-ad0d-6caf71f8f03c",
    card2:
      "https://www.figma.com/api/mcp/asset/eb649094-d915-41ac-a317-d06840cd791f",
  },

  // Capabilities section
  capabilities: {
    card1:
      "https://www.figma.com/api/mcp/asset/9a918c19-2773-4efd-b7b9-071e36404a00",
    card2:
      "https://www.figma.com/api/mcp/asset/6c5bfb2f-b0a4-4ea7-b7be-9f7a0dd9531e",
    card3:
      "https://www.figma.com/api/mcp/asset/437556f9-fbda-4d70-871e-22b23fafaee3",
  },

  // Products section
  products: {
    mainImage:
      "https://www.figma.com/api/mcp/asset/a5c0b74b-b1e9-41d1-9e39-96ab9977cd37",
  },

  // Sustainability section
  sustainability: {
    mainImage:
      "https://www.figma.com/api/mcp/asset/2f65b0f7-bbdd-4935-8ef6-dc6a6064ccf5",
    cert1:
      "https://www.figma.com/api/mcp/asset/e5945783-5e38-49ed-b277-1bea2bfad5a1",
    cert2:
      "https://www.figma.com/api/mcp/asset/50aeb3dc-d5f6-4737-a2b9-6dc50cdd5727",
    cert3:
      "https://www.figma.com/api/mcp/asset/92569b18-3bcc-4bc3-a1f0-e4ce80d88e5f",
    cert4:
      "https://www.figma.com/api/mcp/asset/66c1028e-22e1-4056-bff1-91dbd8b964d0",
    cert5:
      "https://www.figma.com/api/mcp/asset/57e7bd99-650b-473a-8dbf-755c1e9dc298",
  },

  // Leadership section
  leadership: {
    member1:
      "https://www.figma.com/api/mcp/asset/749368ce-1e1b-40e1-8b4f-c5f415c4cf23",
    member2:
      "https://www.figma.com/api/mcp/asset/7e3d6a7f-e9af-42c8-85b6-4da27c5346bd",
    member3:
      "https://www.figma.com/api/mcp/asset/f5d8d56c-d855-44c5-8e94-f44dad4dc00c",
    companyLogo:
      "https://www.figma.com/api/mcp/asset/94df50b2-1272-4182-b5da-745a802828cc",
  },

  // CTA section
  cta: {
    background:
      "https://www.figma.com/api/mcp/asset/bcb4814b-a5cf-4e0c-b3fd-9c0c2b6663f7",
  },

  // Logo
  logo: {
    icon: "https://www.figma.com/api/mcp/asset/8ee56c3f-154f-4d06-9b54-bbed98323a2a",
  },
};

/**
 * Local asset paths (to be used after downloading assets)
 * These paths should be used once images are downloaded locally
 */
export const localAssets = {
  hero: {
    background: "/images/home/hero/background.jpg",
    texture: "/images/home/hero/texture.jpg",
  },

  brands: [
    { name: "Brand 1", logo: "/images/home/brands/brand-1.png" },
    { name: "Brand 2", logo: "/images/home/brands/brand-2.png" },
    { name: "Brand 3", logo: "/images/home/brands/brand-3.png" },
    { name: "Brand 4", logo: "/images/home/brands/brand-4.svg" },
    { name: "Brand 5", logo: "/images/home/brands/brand-5.png" },
    { name: "Brand 6", logo: "/images/home/brands/brand-6.png" },
    { name: "Brand 7", logo: "/images/home/brands/brand-7.png" },
    { name: "Brand 8", logo: "/images/home/brands/brand-8.png" },
    { name: "Brand 9", logo: "/images/home/brands/brand-9.png" },
    { name: "Brand 10", logo: "/images/home/brands/brand-10.png" },
    { name: "Brand 11", logo: "/images/home/brands/brand-11.png" },
  ],

  about: {
    card1: "/images/home/about/card-1.jpg",
    card2: "/images/home/about/card-2.jpg",
  },

  capabilities: [
    { image: "/images/home/capabilities/yarn-to-fabric.jpg" },
    { image: "/images/home/capabilities/garmenting.jpg" },
    { image: "/images/home/capabilities/quality-rd.jpg" },
  ],

  products: {
    mainImage: "/images/home/products/main.jpg",
  },

  sustainability: {
    mainImage: "/images/home/sustainability/main.jpg",
    certifications: [
      { name: "GOTS", image: "/images/home/sustainability/cert-1.png" },
      { name: "BCI", image: "/images/home/sustainability/cert-2.png" },
      { name: "Organic", image: "/images/home/sustainability/cert-3.png" },
      { name: "Recycled", image: "/images/home/sustainability/cert-4.png" },
      { name: "OEKO-TEX", image: "/images/home/sustainability/cert-5.png" },
    ],
  },

  leadership: [
    {
      name: "Subhash Nuwal",
      image: "/images/home/leadership/member-1.jpg",
      logo: "/images/home/leadership/company-logo.png",
    },
    {
      name: "Harshil Nuwal",
      image: "/images/home/leadership/member-2.jpg",
    },
    {
      name: "Deepank Bhandari",
      image: "/images/home/leadership/member-3.jpg",
    },
  ],

  cta: {
    background: "/images/home/cta/background.jpg",
  },

  logo: {
    icon: "/images/home/logo/icon.svg",
  },
};

// Use Figma assets for now until images are downloaded
export const assets = figmaAssets;
