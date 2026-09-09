import "./globals.css";
import { SITE_URL, SITE_NAME, GSC_VERIFICATION } from "@/lib/seo";
import { Analytics } from "@/components/analytics";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "Uably — Senior IT Consulting for Enterprises",
    template: "%s",
  },
  description:
    "Senior IT consulting for enterprises, financial institutions and government — cloud transformation, cybersecurity, compliance and ServiceNow GRC.",
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  ...(GSC_VERIFICATION ? { verification: { google: GSC_VERIFICATION } } : {}),
};

export const viewport = {
  themeColor: "#070a14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body data-bg="gradient">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
