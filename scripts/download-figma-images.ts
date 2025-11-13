import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

/**
 * Script to download all images from Figma URLs and save them locally
 * Run with: npx tsx scripts/download-figma-images.ts
 */

interface ImageMapping {
  figmaUrl: string;
  localPath: string;
  description: string;
}

// Map all Figma URLs to local paths
const imageMappings: ImageMapping[] = [
  // Investor Relations
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/ee5dab9d-8060-4217-96d6-5d5dfca0eaab",
    localPath: "/images/investor-relations/hero-background.jpg",
    description: "Investor Relations Hero Background",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/6eed488a-5eea-42ae-b079-cc93b506b285",
    localPath: "/images/investor-relations/board-background.jpg",
    description: "Investor Relations Board Background",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/74b14f6e-4d1e-44e1-a6a8-feb55372d5f7",
    localPath: "/images/investor-relations/harshil-image.jpg",
    description: "Investor Relations Harshil Image",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/31a1c3db-86a7-43ec-a2e8-d4ee53ae2a3d",
    localPath: "/images/investor-relations/deepank-image.jpg",
    description: "Investor Relations Deepank Image",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/36f95bcc-d73a-42c7-821b-d10b49e82720",
    localPath: "/images/investor-relations/company-logo.png",
    description: "Investor Relations Company Logo",
  },
  // Hero section
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/eb649094-d915-41ac-a317-d06840cd791f",
    localPath: "/images/home/hero/background.jpg",
    description: "Hero Background",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/53820fd3-1c19-4726-9662-e1ce2f8de41d",
    localPath: "/images/home/hero/texture.jpg",
    description: "Hero Texture",
  },
  // Trusted brands logos
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/caf1d410-40f0-4b1b-9335-0b86531fe7a6",
    localPath: "/images/home/brands/brand-1.png",
    description: "Brand 1 Logo",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/bced14c5-2b3b-491a-ad5b-936d5a928af0",
    localPath: "/images/home/brands/brand-2.png",
    description: "Brand 2 Logo",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/ee72be32-513c-456b-8188-660fbce6c677",
    localPath: "/images/home/brands/brand-3.png",
    description: "Brand 3 Logo",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/52049474-2a5b-4188-bea8-a12d23edc3c5",
    localPath: "/images/home/brands/brand-4.png",
    description: "Brand 4 Logo",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/20e2e2e0-6b91-4a96-a0a3-f288452f19d2",
    localPath: "/images/home/brands/brand-5.png",
    description: "Brand 5 Logo",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/ac5af905-74fc-432c-a378-fe2404a39580",
    localPath: "/images/home/brands/brand-6.png",
    description: "Brand 6 Logo",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/ee58d07f-53f0-488f-85fb-61122bf67fc0",
    localPath: "/images/home/brands/brand-7.png",
    description: "Brand 7 Logo",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/c681c31c-a09f-4e09-b2cd-1bead1b11ee0",
    localPath: "/images/home/brands/brand-8.png",
    description: "Brand 8 Logo",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/49a0e06c-d024-43cc-988f-c91f7c09e708",
    localPath: "/images/home/brands/brand-9.png",
    description: "Brand 9 Logo",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/7db39479-d204-42dc-b5cb-862e3ccd1478",
    localPath: "/images/home/brands/brand-10.png",
    description: "Brand 10 Logo",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/55041a32-aacf-496d-bcfc-3fb9d6248e7e",
    localPath: "/images/home/brands/brand-11.png",
    description: "Brand 11 Logo",
  },
  // About section
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/20875515-a5a8-4d1b-ad0d-6caf71f8f03c",
    localPath: "/images/home/about/card-1.jpg",
    description: "About Card 1",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/eb649094-d915-41ac-a317-d06840cd791f",
    localPath: "/images/home/about/card-2.jpg",
    description: "About Card 2",
  },
  // Capabilities section
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/9a918c19-2773-4efd-b7b9-071e36404a00",
    localPath: "/images/home/capabilities/yarn-to-fabric.jpg",
    description: "Capability Yarn to Fabric",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/6c5bfb2f-b0a4-4ea7-b7be-9f7a0dd9531e",
    localPath: "/images/home/capabilities/garmenting.jpg",
    description: "Capability Garmenting",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/437556f9-fbda-4d70-871e-22b23fafaee3",
    localPath: "/images/home/capabilities/quality-rd.jpg",
    description: "Capability Quality R&D",
  },
  // Products section
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/6de2471e-ce28-40ed-b518-80dd0738389c",
    localPath: "/images/home/products/main.jpg",
    description: "Products Main Image",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/f7710eaa-584a-46fe-9977-33ea5b837eb1",
    localPath: "/images/home/products/texture-overlay.jpg",
    description: "Products Texture Overlay",
  },
  // Sustainability section - feature images (all same URL)
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/cedd7641-a927-4a83-b5e7-fb54adbefb84",
    localPath: "/images/home/sustainability/main.jpg",
    description: "Sustainability Main Image",
  },
  // Sustainability certifications
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/930b0607-8587-48e5-96cb-a4e8a2c9aa5d",
    localPath: "/images/home/sustainability/cert-1.png",
    description: "Sustainability Cert 1",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/08cec710-b898-49a9-a9d8-6b78d569d0e1",
    localPath: "/images/home/sustainability/cert-2.png",
    description: "Sustainability Cert 2",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/dd2f1269-b0f8-45e7-b485-b71eddd0c446",
    localPath: "/images/home/sustainability/cert-3.png",
    description: "Sustainability Cert 3",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/4d4a827f-364a-43ca-aaff-48425ea607db",
    localPath: "/images/home/sustainability/cert-4.png",
    description: "Sustainability Cert 4",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/57e988ce-9381-479f-9a2e-5473ceb75511",
    localPath: "/images/home/sustainability/cert-5.png",
    description: "Sustainability Cert 5",
  },
  // Leadership section
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/749368ce-1e1b-40e1-8b4f-c5f415c4cf23",
    localPath: "/images/home/leadership/member-1.jpg",
    description: "Leadership Member 1",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/7e3d6a7f-e9af-42c8-85b6-4da27c5346bd",
    localPath: "/images/home/leadership/member-2.jpg",
    description: "Leadership Member 2",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/f5d8d56c-d855-44c5-8e94-f44dad4dc00c",
    localPath: "/images/home/leadership/member-3.jpg",
    description: "Leadership Member 3",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/94df50b2-1272-4182-b5da-745a802828cc",
    localPath: "/images/home/leadership/company-logo.png",
    description: "Leadership Company Logo",
  },
  // CTA section
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/bcb4814b-a5cf-4e0c-b3fd-9c0c2b6663f7",
    localPath: "/images/home/cta/background.jpg",
    description: "CTA Background",
  },
  // Logo
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/8ee56c3f-154f-4d06-9b54-bbed98323a2a",
    localPath: "/images/home/logo/icon.svg",
    description: "Logo Icon",
  },
  // About Us page
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/eb649094-d915-41ac-a317-d06840cd791f",
    localPath: "/images/about/hero-background.jpg",
    description: "About Us Hero Background",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/2e5f8b15-3331-46b5-8c75-0ee393f94281",
    localPath: "/images/about/hero-texture.jpg",
    description: "About Us Hero Texture",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/8465bbc8-63cf-4519-a2d9-9bf58adbb549",
    localPath: "/images/about/hero-image.jpg",
    description: "About Us Hero Image",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/0ac0740b-4004-403e-ab40-e03acab84831",
    localPath: "/images/about/people-culture.jpg",
    description: "About Us People Culture Image",
  },
  // About Us Leadership
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/99923845-8f00-4d2e-a83d-acf0601e7689",
    localPath: "/images/about/leadership-background-blur.jpg",
    description: "About Us Leadership Background Blur",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/5fdfec38-5952-4c5f-8a0c-c6d7ecd9fb40",
    localPath: "/images/about/leadership-subhash.jpg",
    description: "About Us Leadership Subhash Image",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/5fdfec38-5952-4c5f-8a0c-c6d7ecd9fb40",
    localPath: "/images/about/leadership-harshil.jpg",
    description: "About Us Leadership Harshil Image",
  },
  {
    figmaUrl:
      "https://www.figma.com/api/mcp/asset/37e56141-d03b-41c2-b8e8-d52310a7ebee",
    localPath: "/images/about/leadership-deepank.jpg",
    description: "About Us Leadership Deepank Image",
  },
];

/**
 * Get file extension from content type or URL
 */
function getFileExtension(
  contentType: string | null,
  localPath: string
): string {
  if (contentType) {
    if (contentType.includes("image/png")) return ".png";
    if (contentType.includes("image/jpeg") || contentType.includes("image/jpg"))
      return ".jpg";
    if (contentType.includes("image/svg+xml")) return ".svg";
    if (contentType.includes("image/webp")) return ".webp";
  }

  // Fallback to extension from local path
  const ext = path.extname(localPath);
  return ext || ".jpg";
}

/**
 * Download a single image from Figma URL
 */
async function downloadImage(
  mapping: ImageMapping,
  publicDir: string
): Promise<boolean> {
  try {
    console.log(`Downloading: ${mapping.description}...`);

    const response = await fetch(mapping.figmaUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    if (!response.ok) {
      console.error(
        `Failed to download ${mapping.description}: ${response.status} ${response.statusText}`
      );
      return false;
    }

    const contentType = response.headers.get("content-type");
    const fileExtension = getFileExtension(contentType, mapping.localPath);

    // Update local path with correct extension
    const localPath = mapping.localPath.replace(
      /\.(jpg|png|svg|webp)$/i,
      fileExtension
    );
    const fullPath = path.join(publicDir, localPath);

    // Create directory if it doesn't exist
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Check if file already exists
    if (fs.existsSync(fullPath)) {
      console.log(`Skipping ${mapping.description} (already exists)`);
      return true;
    }

    // Download and save file
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(fullPath, Buffer.from(buffer));

    console.log(`✓ Downloaded: ${mapping.description} -> ${localPath}`);
    return true;
  } catch (error) {
    console.error(`Error downloading ${mapping.description}:`, error);
    return false;
  }
}

/**
 * Main function to download all images
 */
async function main() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const projectRoot = path.resolve(__dirname, "..");
  const publicDir = path.join(projectRoot, "public");

  console.log("Starting image download process...\n");

  let successCount = 0;
  let failCount = 0;

  for (const mapping of imageMappings) {
    const success = await downloadImage(mapping, publicDir);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }

    // Small delay to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  console.log(`\n=== Download Complete ===`);
  console.log(`Success: ${successCount}`);
  console.log(`Failed: ${failCount}`);
  console.log(`Total: ${imageMappings.length}`);

  if (failCount > 0) {
    console.log(
      "\n⚠ Some images failed to download. Please check the errors above."
    );
    process.exit(1);
  }
}

// Run the script
main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
