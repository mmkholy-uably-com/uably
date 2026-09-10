import LegalPage from "@/components/legal";
import { SITE_URL, SITE_NAME, META } from "@/lib/seo";

export const metadata = {
  title: "Politique de confidentialité — Uably",
  description:
    "Comment Uably recueille, utilise et protège vos renseignements personnels, et vos droits en vertu de la Loi 25 du Québec.",
  alternates: {
    canonical: "/fr/confidentialite/",
    languages: {
      "en-CA": "/privacy/",
      "fr-CA": "/fr/confidentialite/",
      "x-default": "/privacy/",
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Politique de confidentialité — Uably",
    description:
      "Comment Uably recueille, utilise et protège vos renseignements personnels, et vos droits en vertu de la Loi 25 du Québec.",
    url: `${SITE_URL}/fr/confidentialite/`,
    locale: META.fr.locale,
  },
  robots: { index: true, follow: true },
};

export default function PrivacyFR() {
  return <LegalPage lang="fr" />;
}
