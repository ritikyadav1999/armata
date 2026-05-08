import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Armata | Startup Operational Support",
  description:
    "Strategic operating partners deploying validation pipelines, engineering systems, and growth infrastructure for early-stage ventures.",
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
