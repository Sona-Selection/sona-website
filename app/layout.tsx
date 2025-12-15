import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { companyInfo } from "@/lib/constants/company";
import { pageMetadata, seoKeywords, siteMetadata } from "@/lib/constants/metadata";
import StructuredData from "@/components/common/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: pageMetadata.home.title,
    template: `%s | ${companyInfo.name}`,
  },
  description: pageMetadata.home.description,
  keywords: [...seoKeywords.general, ...seoKeywords.products, ...seoKeywords.sustainability],
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  publisher: companyInfo.name,
  icons: {
    icon: "/Icons/logo-orange.svg",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteMetadata.locale,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.siteName,
    title: pageMetadata.home.openGraph.title,
    description: pageMetadata.home.openGraph.description,
    images: [
      {
        url: pageMetadata.home.openGraph.images[0].url,
        width: pageMetadata.home.openGraph.images[0].width,
        height: pageMetadata.home.openGraph.images[0].height,
        alt: pageMetadata.home.openGraph.images[0].alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.home.twitter.title,
    description: pageMetadata.home.twitter.description,
    images: pageMetadata.home.twitter.images,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: 'your-google-site-verification-code',
    // Add your verification codes here when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
