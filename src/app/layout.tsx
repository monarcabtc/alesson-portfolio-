import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig, profile } from "@/data/content";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico?v=2",
    shortcut: "/favicon.ico?v=2",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Alesson Souza",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Alesson Souza — AEM & Digital Content Specialist Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
  keywords: [
    "Adobe Experience Manager specialist",
    "AEM content migration expert",
    "Drupal to AEM migration",
    "Digital content specialist portfolio",
    "Digital product manager New Zealand",
    "AEM specialist remote",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteConfig.url,
  jobTitle: "Digital Content & AEM Specialist",
  description: siteConfig.description,
  email: `${profile.email.user}@${profile.email.domain}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Auckland",
    addressCountry: "NZ",
  },
  sameAs: [profile.linkedin],
  knowsAbout: [
    "Adobe Experience Manager",
    "AEM Content Migration",
    "Drupal to AEM Migration",
    "Digital Product Management",
    "Content Strategy",
    "Digital Transformation",
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Université Lyon 2",
    },
    {
      "@type": "EducationalOrganization",
      name: "Université Lyon 3",
    },
  ],
  knowsLanguage: ["en", "fr", "pt", "it", "es", "de", "ru"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
