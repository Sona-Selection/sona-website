import {
  structuredDataLocalBusiness,
  structuredDataOrganization,
} from "@/lib/constants/metadata";

/**
 * StructuredData Component
 * Injects JSON-LD structured data for SEO
 */
export default function StructuredData() {
  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredDataOrganization),
        }}
      />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredDataLocalBusiness),
        }}
      />
    </>
  );
}
