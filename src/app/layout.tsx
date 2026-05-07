import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARMATA | Startup Operating Infrastructure",
  description:
    "Strategic operating partners deploying validation pipelines, engineering systems, and growth infrastructure for early-stage ventures."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
