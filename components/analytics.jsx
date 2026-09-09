"use client";

import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/seo";

// Injects the Google Analytics 4 tag. Renders nothing when NEXT_PUBLIC_GA_ID
// is not set, so preview / local builds stay clean.
export function Analytics() {
  if (!GA_MEASUREMENT_ID) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}

// Fire a GA4 event. Safe to call before GA loads or when GA is disabled.
export function track(event, params) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params || {});
  }
}
