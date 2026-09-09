import Site from "@/components/site";
import { COPY } from "@/components/copy";
import { buildHomeMetadata, organizationLd, websiteLd, faqLd } from "@/lib/seo";

export const metadata = buildHomeMetadata("en");

export default function HomeEN() {
  const copy = COPY.en;
  const ld = [organizationLd("en"), websiteLd(), faqLd(copy)];
  return (
    <>
      {ld.map((node, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }} />
      ))}
      <Site lang="en" copy={copy} />
    </>
  );
}
