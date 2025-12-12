# Metadata & SEO Setup - Remaining Tasks

## ✅ Completed

All metadata implementation is complete:
- ✅ Type definitions added to `lib/types/index.ts`
- ✅ Centralized metadata constants in `lib/constants/metadata.ts`
- ✅ StructuredData component created for JSON-LD
- ✅ Root layout updated with comprehensive metadata
- ✅ All page-specific metadata added (Home, About Us, Products, Capabilities, Investor Relations)
- ✅ Build passes without errors

## 📋 Remaining Tasks

### 1. Create Open Graph Image
**Priority: High**

Create a social sharing image for better visibility on LinkedIn, Twitter, Facebook, etc.

**Requirements:**
- Dimensions: 1200x630 pixels
- Format: JPG or PNG
- Location: `/public/og-image.jpg`
- Content: Should include company branding, logo, and tagline

**Current Reference:** `lib/constants/metadata.ts:16`

**Design Suggestions:**
- Company logo prominently displayed
- Tagline: "Excellence in Textile Manufacturing"
- Background: Professional image of fabrics/manufacturing
- Company colors/branding

---

### 2. Add Company Logo
**Priority: Medium**

Add logo for structured data (helps search engines identify your brand).

**Requirements:**
- Format: PNG (transparent background preferred)
- Location: `/public/logo.png`
- Recommended size: 600x60 to 1200x120 pixels
- Square or rectangular with 10:1 max ratio

**Current Reference:** `lib/constants/metadata.ts:249`

---

### 3. Google Search Console Verification
**Priority: Medium**

Add verification code after setting up Google Search Console.

**Steps:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://sonaselection.com`
3. Choose "HTML tag" verification method
4. Copy verification code
5. Add to `app/layout.tsx:68` (uncomment and replace)

**Current Code Location:** `app/layout.tsx:67-70`
```typescript
verification: {
  // google: 'your-google-site-verification-code',
  // Add your verification codes here when available
},
```

---

### 4. Verify Company Name Consistency
**Priority: High**

**Current Issue:**
- `company.ts` uses: `"Sona"`
- `metadata.ts` uses: `"Sonaselection India Limited"`

**Decision Needed:**
Which brand name should be used consistently across the site?

**Options:**
1. **Sona** - Shorter, easier to remember
2. **Sonaselection India Limited** - Full legal name, better for corporate/investor pages

**Recommendation:**
- Use "Sona" for general pages (Home, Products, Capabilities)
- Use "Sonaselection India Limited" for corporate pages (About Us, Investor Relations)

**Files to Update if needed:**
- `lib/constants/company.ts:4` (currently "Sona")
- `lib/constants/metadata.ts` (update structured data and page metadata accordingly)

---

### 5. Verify Geographic Coordinates
**Priority: Low**

Confirm the geo-coordinates for Bhilwara location are accurate.

**Current Coordinates:** `lib/constants/metadata.ts:277-280`
```typescript
geo: {
  "@type": "GeoCoordinates",
  latitude: 25.3467,
  longitude: 74.6317,
}
```

**How to verify:**
1. Search "1 SANGAM TOWER OLD RTO ROAD GANDHI NAGAR BHILWARA" on Google Maps
2. Right-click on exact location → "What's here?"
3. Update coordinates if needed

---

### 6. Create Page-Specific OG Images (Optional)
**Priority: Low**

For better social sharing, create unique OG images for each major page.

**Pages:**
- `/public/og-images/about-us.jpg`
- `/public/og-images/products.jpg`
- `/public/og-images/capabilities.jpg`
- `/public/og-images/investor-relations.jpg`

**Then update:** `lib/constants/metadata.ts`
```typescript
// Example for About Us page
images: [
  {
    url: '/og-images/about-us.jpg',
    width: 1200,
    height: 630,
    alt: 'About Sonaselection India Limited',
  },
],
```

---

### 7. Add robots.txt (Optional)
**Priority: Low**

Create a robots.txt file to control search engine crawling.

**File:** `/public/robots.txt`
```txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://sonaselection.com/sitemap.xml
```

---

### 8. Generate sitemap.xml (Optional)
**Priority: Low**

Next.js can auto-generate sitemaps.

**Create:** `app/sitemap.ts`
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sonaselection.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://sonaselection.com/about-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://sonaselection.com/products',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://sonaselection.com/capabilities',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://sonaselection.com/investor-relations',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
```

---

### 9. Update Social Media URLs
**Priority: Medium**

Verify and update social media URLs in `lib/constants/company.ts:14-26`

**Currently set to:**
- LinkedIn: `https://linkedin.com/company/sona-selection`
- Twitter: Commented out
- Facebook: Commented out

**Action:** Update with actual company social media profiles

---

### 10. SEO Keywords Review
**Priority: Low**

Review and refine SEO keywords based on:
- Target audience search behavior
- Competitor analysis
- Google Search Console data (after setup)

**File:** `lib/constants/metadata.ts:23-58`

---

## 🔍 Testing Checklist

After completing remaining tasks, test:

### Social Media Sharing
1. **Facebook:** Use [Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. **Twitter:** Use [Card Validator](https://cards-dev.twitter.com/validator)
3. **LinkedIn:** Share link and check preview

### Search Engine Optimization
1. **Google Rich Results:** Use [Rich Results Test](https://search.google.com/test/rich-results)
2. **Structured Data:** Validate JSON-LD with [Schema.org Validator](https://validator.schema.org/)

### General Metadata
1. View page source and check `<head>` tags
2. Verify all pages have unique titles and descriptions
3. Check canonical URLs are correct

---

## 📚 Additional Resources

- [Next.js Metadata Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Schema.org Organization](https://schema.org/Organization)
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)

---

## 📞 Questions or Issues?

If you need to update metadata in the future:
1. **Site-wide changes:** Edit `lib/constants/metadata.ts`
2. **Company info changes:** Edit `lib/constants/company.ts`
3. **Page-specific changes:** Edit the respective page's metadata export

All changes are centralized in constants for easy maintenance!
