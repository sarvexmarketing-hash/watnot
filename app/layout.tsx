import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Watnot Technologies — Web Design & Development",
  description:
    "Premium Web Design, Development, and SEO services to help your business stand out. Minimalist creative design and high-performance digital craftsmanship.",
  keywords: [
    "Watnot Technologies",
    "Web Designer",
    "Web Developer",
    "SEO Services",
    "Framer Designer",
    "Portfolio",
    "Creative Agency",
    "Digital Design",
  ],
  authors: [{ name: "Watnot Technologies" }],
  openGraph: {
    title: "Watnot Technologies — Web Design & Development",
    description:
      "Premium Web Design, Development, and SEO services to help your business stand out.",
    url: "https://personal-outcomes-516279.framer.app/",
    siteName: "Watnot Technologies Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Watnot Technologies — Web Design & Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Watnot Technologies — Web Design & Development",
    description:
      "Premium Web Design, Development, and SEO services to help your business stand out.",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0E0E0E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-[#0E0E0E] text-[#DAC5A7] antialiased selection:bg-[#DAC5A7] selection:text-[#0E0E0E] relative min-h-screen">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
