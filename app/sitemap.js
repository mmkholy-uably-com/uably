import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap() {
  const lastModified = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "en-CA": `${SITE_URL}/`,
          "fr-CA": `${SITE_URL}/fr`,
        },
      },
    },
    {
      url: `${SITE_URL}/fr`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          "en-CA": `${SITE_URL}/`,
          "fr-CA": `${SITE_URL}/fr`,
        },
      },
    },
  ];
}
