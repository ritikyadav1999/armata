import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

const siteUrl = "https://www.armata.co.in";
const siteTitle = "Armata | Startup Validation, MVP Building & Operating Systems";
const siteDescription =
  "Armata helps early-stage startups validate ideas, build focused MVPs, install operating systems, and create growth infrastructure with clarity.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Armata"
  },
  description: siteDescription,
  applicationName: "Armata",
  authors: [{ name: "Armata" }],
  creator: "Armata",
  publisher: "Armata",
  keywords: [
    "Armata",
    "startup support",
    "startup validation",
    "startup operating system",
    "MVP development",
    "MVP building",
    "early stage startup",
    "founder support",
    "startup growth",
    "startup execution",
    "idea validation",
    "product validation",
    "growth infrastructure",
    "startup operations"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Armata",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/armata-logo.png",
        width: 1200,
        height: 630,
        alt: "Armata startup operating support"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/armata-logo.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  category: "technology",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
