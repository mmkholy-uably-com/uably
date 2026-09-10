import LegalPage from "@/components/legal";
import { SITE_URL, SITE_NAME, META } from "@/lib/seo";

export const metadata = {
  title: "Privacy Policy — Uably",
  description:
    "How Uably collects, uses and protects your personal information, and your rights under Quebec Law 25.",
  alternates: {
    canonical: "/privacy/",
    languages: {
      "en-CA": "/privacy/",
      "fr-CA": "/fr/confidentialite/",
      "x-default": "/privacy/",
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Privacy Policy — Uably",
    description:
      "How Uably collects, uses and protects your personal information, and your rights under Quebec Law 25.",
    url: `${SITE_URL}/privacy/`,
    locale: META.en.locale,
  },
  robots: { index: true, follow: true },
};

export default function PrivacyEN() {
  return <LegalPage lang="en" />;
}
