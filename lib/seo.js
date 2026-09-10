// Centralised SEO configuration and structured-data builders.

export const SITE_URL = "https://uably.com";
export const SITE_NAME = "Uably";
export const CONTACT_EMAIL = "contact@uably.com";

// Booking link used by every "book a call" CTA. Override at build time with
// NEXT_PUBLIC_BOOKING_URL (e.g. a Calendly / Cal.com link) without touching code.
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendly.com/melkhouly/prospect";

// Google Analytics 4 measurement ID (e.g. "G-XXXXXXXXXX"). Empty = GA disabled.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Google Tag Manager container ID (e.g. "GTM-XXXXXXX"). Loads GTM on every page.
// Override at build time with NEXT_PUBLIC_GTM_ID. Empty = GTM disabled.
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-TM9L9F9J";

// Google Search Console HTML-tag verification token. Empty = tag omitted.
export const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION || "";

// Per-locale, per-page metadata content.
export const META = {
  en: {
    locale: "en_CA",
    home: {
      title: "Uably — IT Consulting, Cybersecurity & ServiceNow GRC",
      description:
        "Senior IT consulting for Canadian enterprises, banks & government: cloud transformation, ISO 27001 & SOC 2, ServiceNow GRC/TPRM, DevSecOps and Everbridge.",
    },
  },
  fr: {
    locale: "fr_CA",
    home: {
      title: "Uably — Conseil TI, cybersécurité et ServiceNow GRC",
      description:
        "Conseil TI senior pour entreprises, banques et gouvernement au Canada : transformation cloud, ISO 27001 et SOC 2, ServiceNow GRC/TPRM, DevSecOps et Everbridge.",
    },
  },
};

const PATHS = { en: "/", fr: "/fr" };

// Build a Next.js Metadata object for a given locale's home page.
export function buildHomeMetadata(lang) {
  const m = META[lang].home;
  const path = PATHS[lang];
  const canonical = lang === "en" ? "/" : path;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical,
      languages: {
        "en-CA": "/",
        "fr-CA": "/fr",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: m.title,
      description: m.description,
      url: `${SITE_URL}${canonical}`,
      locale: META[lang].locale,
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
    },
  };
}

// schema.org ProfessionalService / Organization node.
export function organizationLd(lang) {
  const desc =
    lang === "fr"
      ? "Conseil TI senior pour grandes entreprises, institutions financières et gouvernement : transformation cloud, ISO 27001 et SOC 2, ServiceNow GRC/TPRM, DevSecOps et Everbridge."
      : "Senior IT consulting for enterprises, financial institutions and government: cloud transformation, ISO 27001 & SOC 2, ServiceNow GRC/TPRM, DevSecOps and Everbridge.";
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/uably-logo.png`,
    image: `${SITE_URL}/uably-logo.png`,
    description: desc,
    email: CONTACT_EMAIL,
    inLanguage: lang === "fr" ? "fr-CA" : "en-CA",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9900 Boulevard Cavendish, Suite 200",
      addressLocality: "Montreal",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "Place", name: "North America" },
    ],
    knowsAbout: [
      "ISO 27001",
      "SOC 2",
      "NIST Cybersecurity Framework",
      "SOX IT General Controls",
      "Cloud transformation",
      "AWS",
      "DevSecOps",
      "ServiceNow GRC",
      "ServiceNow IRM",
      "ServiceNow TPRM",
      "ServiceNow ITOM",
      "Everbridge CEM",
      "Business Continuity Management",
      "Fractional CISO",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT_EMAIL,
      availableLanguage: ["en", "fr"],
    },
  };
}

// schema.org WebSite node.
export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: ["en-CA", "fr-CA"],
  };
}

// schema.org FAQPage node built from the site copy.
export function faqLd(copy) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
