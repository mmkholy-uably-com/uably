import Site from "@/components/site";
import { COPY } from "@/components/copy";
import { buildHomeMetadata, organizationLd, websiteLd, faqLd } from "@/lib/seo";

export const metadata = buildHomeMetadata("fr");

export default function HomeFR() {
  const copy = COPY.fr;
  const ld = [organizationLd("fr"), websiteLd(), faqLd(copy)];
  return (
    <div lang="fr">
      {ld.map((node, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }} />
      ))}
      <Site lang="fr" copy={copy} />
    </div>
  );
}
