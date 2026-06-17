import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const siteUrl = "https://wisam.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Wisam | Yazılım Geliştirici",
  description:
    "Wisam — Irak'tan genç ve tutkulu bir yazılım geliştirici. Python, JavaScript, Flutter, React Native ve yapay zeka ile modern uygulamalar geliştiriyorum.",
  keywords: [
    "Wisam",
    "Yazılım Geliştirici",
    "Software Developer",
    "Python",
    "Flutter",
    "React Native",
    "JavaScript",
    "Yapay Zeka",
    "Portföy",
  ],
  authors: [{ name: "Wisam" }],
  creator: "Wisam",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    title: "Wisam | Yazılım Geliştirici",
    description:
      "Genç ve tutkulu yazılım geliştirici. Modern uygulamalar, mobil geliştirme ve yapay zeka.",
    siteName: "Wisam Portföy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisam | Yazılım Geliştirici",
    description:
      "Genç ve tutkulu yazılım geliştirici. Modern uygulamalar, mobil geliştirme ve yapay zeka.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060912",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
        />
      </head>
      <body className="font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
