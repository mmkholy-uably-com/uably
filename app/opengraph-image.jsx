import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Uably — Senior IT consulting for enterprises";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #050918 0%, #0a1432 45%, #1745C9 100%)",
          color: "#f4f6fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em" }}>
          <span style={{ color: "#5C8CFF" }}>U</span>
          <span>ably</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.04em", maxWidth: 900 }}>
            Transform your IT. Strengthen security. Scale with confidence.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#9aa3b8", maxWidth: 940 }}>
            Cloud transformation · ISO 27001 &amp; SOC 2 · ServiceNow GRC · DevSecOps · Everbridge
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#5C8CFF", letterSpacing: "0.04em" }}>
          Big 4 caliber. Zero overhead. — uably.com
        </div>
      </div>
    ),
    { ...size }
  );
}
