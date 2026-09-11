"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BOOKING_URL, FORM_ENDPOINT, FORM_ACCESS_KEY, CONTACT_EMAIL } from "@/lib/seo";
import { track } from "@/components/analytics";

const CALENDLY_URL = BOOKING_URL;

/* ─── Reveal on scroll ─────────────────────────────────────────────── */
function Reveal({ children, delay = 0, as: As = "div", ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("in"), delay);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <As ref={ref} className={`reveal ${rest.className || ""}`} {...rest}>
      {children}
    </As>
  );
}

function Eyebrow({ children, color }) {
  return (
    <div className="eyebrow">
      <span className="dot" style={color ? { background: color, boxShadow: `0 0 0 4px ${color}30` } : null}></span>
      {children}
    </div>
  );
}

function Arrow({ size = 14 }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Icon({ name, size = 22 }) {
  const s = size;
  const p = { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "cloud":   return <svg {...p}><path d="M16 12a4 4 0 0 0-7.7-1.5A3.5 3.5 0 0 0 7 17h9a4 4 0 0 0 0-5Z"/><path d="M12 12v6m0 0 2-2m-2 2-2-2"/></svg>;
    case "shield":  return <svg {...p}><path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>;
    case "code":    return <svg {...p}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/></svg>;
    case "diagram": return <svg {...p}><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="9" y="15" width="6" height="6" rx="1"/><path d="M6 9v3h12V9M12 12v3"/></svg>;
    case "scale":   return <svg {...p}><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"/></svg>;
    case "loop":    return <svg {...p}><path d="M3 12a9 9 0 0 1 15-6.7L21 8m0-5v5h-5M21 12a9 9 0 0 1-15 6.7L3 16m0 5v-5h5"/></svg>;
    case "person":  return <svg {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/><path d="m17 6 1 1 2-2"/></svg>;
    case "search":  return <svg {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
    case "users":   return <svg {...p}><circle cx="9" cy="8" r="4"/><path d="M1 21a8 8 0 0 1 16 0"/><circle cx="17" cy="6" r="3"/><path d="M23 18a6 6 0 0 0-6-6"/></svg>;
    case "upload":  return <svg {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 9l5-5 5 5M12 4v12"/></svg>;
    case "kanban":  return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 7v8M14 7v5M20 7v3"/></svg>;
    case "cap":     return <svg {...p}><path d="M2 9 12 4l10 5-10 5L2 9Z"/><path d="M6 10.5V15c0 1.5 3 3 6 3s6-1.5 6-3v-4.5M22 9v6"/></svg>;
    case "pin":     return <svg {...p}><path d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13Z"/><circle cx="12" cy="9" r="3"/></svg>;
    case "phone":   return <svg {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.5 19.5 0 0 1 5 12.7 19.8 19.8 0 0 1 2 4.1 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L7.9 9.8a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"/></svg>;
    case "mail":    return <svg {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>;
    case "check":   return <svg {...p}><path d="m4 12 5 5L20 6"/></svg>;
    default:        return null;
  }
}

function PhotoTile({ src, alt, radius = 18, style = {} }) {
  return (
    <div style={{
      width: "100%", height: "100%", borderRadius: radius, overflow: "hidden",
      border: "1px solid var(--line-strong)",
      boxShadow: "0 20px 60px -25px rgba(0,0,0,.5)",
      position: "relative", ...style
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block",
          filter: "brightness(.92) contrast(1.05)" }} />
    </div>
  );
}

export function Logo({ size = 32 }) {
  const h = Math.round(size * 1.15);
  const w = Math.round(h * (213 / 254));
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/uably-logo.png" alt="Uably" width={w} height={h}
        style={{ display: "block", objectFit: "contain", marginRight: 2 }} />
      <span style={{ fontSize: size * 0.78, fontWeight: 500, letterSpacing: "-0.03em" }}>ably</span>
    </div>
  );
}

/* ─── Nav ───────────────────────────────────────────────────────────── */
function Nav({ lang, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const ids = ["home", "about", "services", "approach", "engagements", "faq", "contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  const go = (id) => { scrollTo(id); setMenuOpen(false); };

  const langToggle = (
    <div style={{ display: "flex", padding: 3, borderRadius: 999, border: "1px solid var(--line-strong)", background: "rgba(255,255,255,.02)" }}>
      {[{ l: "en", href: "/" }, { l: "fr", href: "/fr/" }].map((o) => (
        <Link key={o.l} href={o.href} hrefLang={o.l} style={{
          padding: "5px 12px", borderRadius: 999, border: 0, cursor: "pointer",
          fontSize: 12, fontWeight: 500, letterSpacing: "0.05em",
          fontFamily: "JetBrains Mono, monospace",
          background: lang === o.l ? "var(--ink)" : "transparent",
          color: lang === o.l ? "#0a0e1a" : "var(--ink-dim)",
          transition: "all .2s", textDecoration: "none"
        }}>{o.l.toUpperCase()}</Link>
      ))}
    </div>
  );

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a onClick={() => go("home")} style={{ cursor: "pointer" }}><Logo size={32} /></a>

        <div className="nav-links" style={{ display: "flex", gap: 28, marginLeft: 28 }}>
          {t.nav.map((label, i) => (
            <a key={i} className={`nav-link ${active === ids[i] ? "active" : ""}`} onClick={() => go(ids[i])}>{label}</a>
          ))}
        </div>

        <div className="nav-actions" style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 16 }}>
          {langToggle}
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={() => track("book_call", { location: "nav" })} className="btn btn-blue nav-cta" style={{ padding: "10px 18px", fontSize: 13 }}>
            {t.cta} <Arrow />
          </a>
          <button
            className={`nav-burger ${menuOpen ? "open" : ""}`}
            aria-label="Toggle menu" aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <div className={`nav-mobile ${menuOpen ? "open" : ""}`}>
        <div className="nav-mobile-inner">
          {t.nav.map((label, i) => (
            <a key={i} className="nav-mobile-link" onClick={() => go(ids[i])}>{label}</a>
          ))}
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
            onClick={() => { track("book_call", { location: "nav_mobile" }); setMenuOpen(false); }}
            className="btn btn-blue" style={{ justifyContent: "center", marginTop: 6 }}>
            {t.cta} <Arrow />
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────────── */
function useEntryReveal() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const id = setTimeout(() => ref.current && ref.current.classList.add("in"), 80);
    return () => clearTimeout(id);
  }, []);
  return ref;
}

function Hero({ t }) {
  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };
  return (
    <section id="home" className="hero-section" style={{ paddingTop: 160, paddingBottom: 80, position: "relative", overflow: "hidden", minHeight: "92vh" }}>
      <div className="aurora-a" style={{ top: -100, right: -60 }}></div>
      <div className="aurora-b" style={{ bottom: -120, left: -40 }}></div>
      <div style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none",
        background: "linear-gradient(110deg, transparent 38%, rgba(46,107,255,.04) 38%, rgba(46,107,255,.04) 42%, transparent 42%)" }}></div>

      <div className="wrap hero-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center", position: "relative" }}>
        <div>
          <Reveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "6px 14px", borderRadius: 999,
              border: "1px solid var(--line-strong)", background: "rgba(46,107,255,.08)", color: "var(--blue-hi)",
              fontSize: 12, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 28 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z" fill="var(--blue-hi)" stroke="var(--blue-hi)" strokeWidth="0.8" strokeLinejoin="round" />
              </svg>
              {t.hero.eyebrow}
            </div>
          </Reveal>

          <h1 className="display reveal hero-title" style={{ fontSize: "clamp(56px, 7.2vw, 112px)", margin: "0 0 36px", letterSpacing: "-0.045em" }} ref={useEntryReveal()}>
            {t.hero.title.map((p, i) => (
              <span key={i} style={{
                display: "block",
                color: p.c === "blue" ? "transparent" : "var(--ink)",
                ...(p.c === "blue" ? { backgroundImage: "linear-gradient(110deg, #5C8CFF, #2E6BFF 40%, #7C5BFF)", WebkitBackgroundClip: "text", backgroundClip: "text" } : {})
              }}>{p.t}</span>
            ))}
          </h1>

          <Reveal delay={300}>
            <p style={{ fontSize: 19, color: "var(--ink-dim)", lineHeight: 1.55, maxWidth: 580, margin: "0 0 40px" }}>{t.hero.sub}</p>
          </Reveal>

          <Reveal delay={400}>
            <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={() => track("book_call", { location: "hero" })} className="btn btn-blue">{t.hero.primary} <Arrow /></a>
              <button className="btn btn-ghost" onClick={scrollToServices}>{t.hero.secondary} <Arrow /></button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <HeroVisual t={t} />
        </Reveal>
      </div>
    </section>
  );
}

function HeroVisual({ t }) {
  return (
    <div className="hero-visual" style={{ position: "relative", aspectRatio: "5/6", maxHeight: 640 }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: 22, overflow: "hidden", border: "1px solid var(--line-strong)", boxShadow: "0 40px 80px -30px rgba(0,0,0,.5)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80"
          alt="Enterprise workspace" loading="eager"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(.9) contrast(1.05)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(7,10,20,.05), rgba(7,10,20,.35))" }}></div>
      </div>

      <div className="hero-float" style={{ position: "absolute", left: -28, bottom: 64, background: "rgba(13, 18, 36, 0.86)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid var(--line-strong)",
        borderRadius: 18, padding: "20px 22px", boxShadow: "0 20px 60px -20px rgba(0,0,0,.6)", minWidth: 240 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 0 4px rgba(34,197,94,.18)" }}></span>
          <span style={{ fontSize: 11, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-dim)" }}>Live · ISO 27001</span>
        </div>
        <div style={{ fontSize: 30, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1 }}>Certified</div>
        <div style={{ fontSize: 13, color: "var(--ink-dim)", marginTop: 6 }}>Programs delivered audit-clean</div>
      </div>

      <div className="hero-float" style={{ position: "absolute", right: -16, top: 40, background: "rgba(13, 18, 36, 0.86)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid var(--line-strong)",
        borderRadius: 16, padding: "14px 18px", boxShadow: "0 20px 60px -20px rgba(0,0,0,.6)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex" }}>
            {["#2E6BFF", "#7C5BFF", "#FF3D7F", "#C8FF3A"].map((c, i) => (
              <div key={i} style={{ width: 30, height: 30, borderRadius: "50%", background: `linear-gradient(135deg, ${c}, ${c}aa)`, border: "2px solid #0d1224", marginLeft: i ? -10 : 0 }}></div>
            ))}
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--ink)", color: "#0a0e1a", fontSize: 11, fontWeight: 600, display: "grid", placeItems: "center", border: "2px solid #0d1224", marginLeft: -10 }}>12+</div>
          </div>
          <div><div style={{ fontSize: 12, color: "var(--ink-dim)" }}>{t.hero.socialProof}</div></div>
        </div>
      </div>

      <div className="hero-float" style={{ position: "absolute", right: -8, bottom: -16, background: "var(--blue)", color: "#fff", borderRadius: 16, padding: "16px 20px", boxShadow: "0 20px 60px -20px rgba(46,107,255,.6)" }}>
        <div style={{ fontSize: 11, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.12em", textTransform: "uppercase", opacity: .85 }}>Principal-led</div>
        <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.03em", marginTop: 4 }}>Every engagement</div>
      </div>
    </div>
  );
}

/* ─── Stats strip ───────────────────────────────────────────────────── */
function StatsStrip({ t }) {
  const icons = ["cap", "scale", "upload", "shield"];
  return (
    <section style={{ padding: "40px 0 80px" }}>
      <div className="wrap">
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 0, border: "1px solid var(--line)", borderRadius: 18, background: "linear-gradient(180deg, rgba(255,255,255,.025), transparent)", overflow: "hidden" }}>
            {t.stats.map((s, i) => (
              <div key={i} style={{ padding: "32px 28px", borderRight: i < t.stats.length - 1 ? "1px solid var(--line)" : "none", display: "flex", alignItems: "center", gap: 18 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(46,107,255,.12)", color: "var(--blue-hi)", display: "grid", placeItems: "center", flexShrink: 0 }}><Icon name={icons[i]} size={22} /></div>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 6, background: "linear-gradient(180deg, #fff, #c8d2ed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.k}</div>
                  <div style={{ fontSize: 13, color: "var(--ink-dim)" }}>
                    {s.sub ? <span style={{ color: "var(--ink)", fontWeight: 500 }}>{s.sub} · </span> : null}{s.l}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── About ─────────────────────────────────────────────────────────── */
function AboutSection({ t }) {
  return (
    <section id="about">
      <div className="wrap two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <Reveal>
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "20px 0 24px" }}>
            {t.about.title.split(".").filter(Boolean).map((s, i, a) => (
              <span key={i} style={{ color: i === 1 ? "var(--blue-hi)" : "inherit" }}>{s.trim()}.{i < a.length - 1 ? <br /> : null}</span>
            ))}
          </h2>
          <p style={{ fontSize: 18, color: "var(--ink-dim)", lineHeight: 1.6, maxWidth: 580, marginBottom: 36 }}>{t.about.body}</p>
          <div className="bullets-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 32px", marginBottom: 40 }}>
            {t.about.bullets.map((b, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="10" cy="10" r="10" fill="var(--blue)" />
                  <path d="M6 10.2L8.8 13L14.2 7.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: 15, color: "var(--ink)" }}>{b}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap", padding: "20px 0", borderTop: "1px solid var(--line)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, var(--blue), var(--plum))", display: "grid", placeItems: "center", color: "#fff", fontWeight: 600, fontSize: 18 }}>UC</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>{t.about.profileName}</div>
                <div style={{ fontSize: 13, color: "var(--ink-dim)" }}>{t.about.profileRole}</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--ink-dim)" }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, border: "1px solid var(--line-strong)", display: "grid", placeItems: "center" }}><Icon name="mail" size={18} /></div>
              <div>
                <div style={{ fontSize: 12, color: "var(--ink-mute)" }}>{t.about.contactLabel}</div>
                <a href={`mailto:${t.about.contactEmail}`} style={{ fontSize: 14, color: "var(--ink)", fontWeight: 500 }}>{t.about.contactEmail}</a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <AboutCollage t={t} />
        </Reveal>
      </div>
    </section>
  );
}

function AboutCollage({ t }) {
  return (
    <div style={{ position: "relative" }}>
      <div className="about-collage" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "260px 200px", gap: 14 }}>
        <PhotoTile src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80" alt="Consulting meeting" style={{ gridColumn: "1 / span 2" }} radius={18} />
        <PhotoTile src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80" alt="Senior consultant" radius={16} />
        <div style={{ borderRadius: 16, overflow: "hidden", position: "relative", background: "linear-gradient(135deg, var(--blue), var(--plum))", padding: 24, color: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ position: "absolute", inset: 0, opacity: .22, background: "radial-gradient(400px 200px at 100% 0%, #fff, transparent 50%)" }}></div>
          <div style={{ position: "relative", fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: .85 }}>Track record</div>
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: 44, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1 }}>{t.about.badgeNum}</div>
            <div style={{ fontSize: 14, marginTop: 4, opacity: .9 }}>{t.about.badgeWord} — {t.about.badgeSub}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Expertise tabs ────────────────────────────────────────────────── */
function ExpertiseSection({ t }) {
  const [active, setActive] = useState(0);
  const tab = t.expertise.tabs[active];
  const imgs = [
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80"
  ];
  return (
    <section id="expertise">
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow>{t.expertise.eyebrow}</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "20px 0 16px" }}>{t.expertise.title}</h2>
            <p style={{ color: "var(--ink-dim)", fontSize: 17, maxWidth: 640, margin: "0 auto", lineHeight: 1.5 }}>{t.expertise.sub}</p>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ display: "flex", gap: 8, padding: 6, border: "1px solid var(--line-strong)", borderRadius: 999, background: "rgba(255,255,255,.02)", maxWidth: 760, margin: "0 auto 56px", justifyContent: "center", flexWrap: "wrap" }}>
            {t.expertise.tabs.map((tb, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                padding: "12px 22px", borderRadius: 999, border: 0, cursor: "pointer", fontSize: 14, fontWeight: 500, transition: "all .25s",
                fontFamily: "inherit", letterSpacing: "-0.005em",
                background: active === i ? "var(--blue)" : "transparent",
                color: active === i ? "#fff" : "var(--ink-dim)",
                boxShadow: active === i ? "0 8px 24px -8px rgba(46,107,255,.6)" : "none"
              }}>{tb.name}</button>
            ))}
          </div>
        </Reveal>

        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div key={active} style={{ animation: "fadeUp .5s ease both" }}>
            <h3 style={{ fontSize: "clamp(28px, 3.2vw, 42px)", fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.15, margin: "0 0 20px" }}>{tab.h}</h3>
            <p style={{ color: "var(--ink-dim)", fontSize: 17, lineHeight: 1.6, marginBottom: 28, fontStyle: "italic" }}>{tab.p}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {tab.li.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ flexShrink: 0, marginTop: 4, color: "var(--blue-hi)" }}><Icon name="check" size={18} /></span>
                  <span style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div key={`img-${active}`} style={{ animation: "fadeUp .5s ease both" }}>
            <PhotoTile src={imgs[active % imgs.length]} alt={tab.imgLabel} radius={18} style={{ aspectRatio: "5/4" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Why us ────────────────────────────────────────────────────────── */
function WhySection({ t }) {
  return (
    <section style={{ paddingTop: 60 }}>
      <div className="wrap">
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 60, marginBottom: 48, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 720 }}>
              <Eyebrow>{t.why.eyebrow}</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: "20px 0 0" }}>{t.why.title}</h2>
            </div>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {t.why.cards.map((c, i) => (
            <Reveal key={i} delay={i * 80}><WhyCard c={c} idx={i} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCard({ c, idx }) {
  const accents = ["var(--blue)", "var(--plum)", "var(--lime)", "var(--pop)"];
  const accent = accents[idx % accents.length];
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} onMouseMove={onMove} className="svc-card" style={{ minHeight: 260, padding: 28 }}>
      <div style={{ width: 48, height: 48, borderRadius: 12, background: `color-mix(in oklab, ${accent} 16%, transparent)`, color: accent === "var(--lime)" ? "var(--lime)" : accent, display: "grid", placeItems: "center", marginBottom: 22 }}><Icon name={c.i} size={22} /></div>
      <h3 style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 12px", lineHeight: 1.25 }}>{c.h}</h3>
      <p style={{ fontSize: 14, color: "var(--ink-dim)", lineHeight: 1.6, margin: 0 }}>{c.p}</p>
    </div>
  );
}

/* ─── Delivery / Approach ───────────────────────────────────────────── */
function DeliverySection({ t }) {
  return (
    <section id="approach" style={{ background: "linear-gradient(180deg, transparent, rgba(46,107,255,.04), transparent)" }}>
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <Eyebrow>{t.delivery.eyebrow}</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 68px)", margin: "20px auto 16px", maxWidth: 980 }}>{t.delivery.title}</h2>
            <p style={{ color: "var(--ink-dim)", fontSize: 17, maxWidth: 640, margin: "0 auto", lineHeight: 1.5 }}>{t.delivery.sub}</p>
          </div>
        </Reveal>

        <div className="delivery-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48, alignItems: "center" }}>
          <div className="delivery-col" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {t.delivery.left.map((it, i) => (<Reveal key={i} delay={i * 80}><DeliveryItem it={it} align="right" /></Reveal>))}
          </div>

          <Reveal delay={200}>
            <div className="delivery-photo" style={{ position: "relative" }}>
              <div className="aurora-a" style={{ width: 320, height: 320, top: -40, left: -20, opacity: .6 }}></div>
              <PhotoTile src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80" alt="Delivery dashboard" radius={20} style={{ aspectRatio: "3/4", position: "relative" }} />
              <div style={{ position: "absolute", bottom: -16, left: "50%", transform: "translateX(-50%)", background: "rgba(13,18,36,.92)", backdropFilter: "blur(20px)", border: "1px solid var(--line-strong)", borderRadius: 999, padding: "10px 18px", display: "flex", alignItems: "center", gap: 10, whiteSpace: "nowrap", boxShadow: "0 12px 32px -8px rgba(0,0,0,.5)" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 0 4px rgba(34,197,94,.18)" }}></span>
                <span style={{ fontSize: 12, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em", color: "var(--ink)" }}>Weekly to your sponsor</span>
              </div>
            </div>
          </Reveal>

          <div className="delivery-col" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {t.delivery.right.map((it, i) => (<Reveal key={i} delay={i * 80 + 100}><DeliveryItem it={it} align="left" /></Reveal>))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DeliveryItem({ it, align }) {
  const iconMap = {
    "Business-first discovery": "search", "Risk & compliance by design": "shield", "Executive alignment": "users",
    "Cloud architecture & migration": "upload", "Agile, iterative delivery": "kanban", "Capability transfer": "cap",
    "Découverte axée affaires": "search", "Risque et conformité par conception": "shield", "Alignement exécutif": "users",
    "Architecture et migration cloud": "upload", "Livraison agile et itérative": "kanban", "Transfert de capacité": "cap"
  };
  const icon = iconMap[it.h] || "check";
  return (
    <div className={`delivery-item align-${align}`} style={{ display: "flex", gap: 18, alignItems: "flex-start", flexDirection: align === "right" ? "row-reverse" : "row", textAlign: align === "right" ? "right" : "left" }}>
      <div style={{ width: 56, height: 56, borderRadius: 14, flexShrink: 0, border: "1px solid var(--line-strong)", background: "linear-gradient(180deg, rgba(46,107,255,.12), transparent)", color: "var(--blue-hi)", display: "grid", placeItems: "center" }}><Icon name={icon} size={22} /></div>
      <div>
        <h3 style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.015em", margin: "0 0 8px" }}>{it.h}</h3>
        <p style={{ fontSize: 14, color: "var(--ink-dim)", lineHeight: 1.55, margin: 0 }}>{it.p}</p>
      </div>
    </div>
  );
}

/* ─── CTA banner 1 ──────────────────────────────────────────────────── */
function CTABanner1({ t }) {
  return (
    <section style={{ padding: "40px 0 80px" }}>
      <div className="wrap">
        <Reveal>
          <div className="cta1-grid" style={{ position: "relative", overflow: "hidden", borderRadius: 22, border: "1px solid var(--line-strong)", background: "linear-gradient(135deg, rgba(46,107,255,.08), rgba(124,91,255,.05))", padding: "56px 56px", display: "grid", gridTemplateColumns: "1.4fr auto", gap: 40, alignItems: "center" }}>
            <div style={{ position: "absolute", right: -60, top: -60, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(46,107,255,.25), transparent 60%)", filter: "blur(60px)" }}></div>
            <div style={{ position: "relative" }}>
              <Eyebrow>{t.cta1.eyebrow}</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", margin: "16px 0 14px" }}>{t.cta1.title}</h2>
              <p style={{ color: "var(--ink-dim)", fontSize: 16, lineHeight: 1.6, margin: 0, maxWidth: 640 }}>{t.cta1.sub}</p>
            </div>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={() => track("book_call", { location: "cta_banner_1" })} className="btn btn-blue" style={{ position: "relative", whiteSpace: "nowrap" }}>{t.cta1.btn} <Arrow /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Clients marquee ───────────────────────────────────────────────── */
function ClientsMarquee({ t }) {
  const doubled = [...t.clients.items, ...t.clients.items];
  return (
    <section style={{ padding: "60px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap" style={{ marginBottom: 28 }}>
        <Reveal><Eyebrow>{t.clients.eyebrow}</Eyebrow></Reveal>
      </div>
      <div className="marquee" style={{ overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 160, zIndex: 2, background: "linear-gradient(90deg, var(--bg), transparent)", pointerEvents: "none" }}></div>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 160, zIndex: 2, background: "linear-gradient(-90deg, var(--bg), transparent)", pointerEvents: "none" }}></div>
        <div className="marquee-track" style={{ alignItems: "center" }}>
          {doubled.map((name, i) => (
            <span key={i} style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--ink-dim)", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 64 }}>
              {name}<span style={{ color: "var(--ink-mute)", fontSize: 20 }}>•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ──────────────────────────────────────────────────── */
function TestimonialsSection({ t }) {
  return (
    <section>
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow>{t.testimonials.eyebrow}</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 68px)", margin: "20px 0 16px" }}>{t.testimonials.title}</h2>
            <p style={{ color: "var(--ink-dim)", fontSize: 17, maxWidth: 560, margin: "0 auto" }}>{t.testimonials.sub}</p>
          </div>
        </Reveal>
        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {t.testimonials.items.map((tt, i) => (<Reveal key={i} delay={i * 80}><TestimonialCard tt={tt} idx={i} /></Reveal>))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ tt, idx }) {
  const tones = [
    { bg: "rgba(46,107,255,.05)", border: "rgba(46,107,255,.18)" },
    { bg: "rgba(124,91,255,.05)", border: "rgba(124,91,255,.18)" },
    { bg: "rgba(255,61,127,.04)", border: "rgba(255,61,127,.18)" },
    { bg: "rgba(200,255,58,.04)", border: "rgba(200,255,58,.18)" }
  ];
  const tone = tones[idx % tones.length];
  const initials = tt.name.split(" ").map((s) => s[0]).join("");
  return (
    <div style={{ padding: 36, borderRadius: 18, position: "relative", border: `1px solid ${tone.border}`, background: tone.bg, transition: "all .25s ease", minHeight: 280, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <svg width="42" height="36" viewBox="0 0 42 36" fill="none" style={{ opacity: .25, marginBottom: 12 }}>
        <path d="M0 36V22c0-7.4 2-13.5 6-18.4C10 -1.3 14.7-1 19-1l1 5c-3.8.8-6.6 2.7-8.6 5.6-2 2.8-3 6.2-3 10.2H20v16H0Zm22 0V22c0-7.4 2-13.5 6-18.4C32-1.3 36.7-1 41-1l1 5c-3.8.8-6.6 2.7-8.6 5.6-2 2.8-3 6.2-3 10.2H42v16H22Z" fill="var(--blue-hi)" />
      </svg>
      <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--ink)", margin: 0, fontWeight: 400, letterSpacing: "-0.01em" }}>&ldquo;{tt.quote}&rdquo;</p>
      <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--line)", display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, var(--blue), var(--plum))", display: "grid", placeItems: "center", color: "#fff", fontWeight: 600, fontSize: 14, flexShrink: 0 }}>{initials}</div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 500 }}>{tt.name}</div>
          <div style={{ fontSize: 13, color: "var(--ink-dim)" }}>{tt.role}</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Services ──────────────────────────────────────────────────────── */
function ServicesSection({ t }) {
  return (
    <section id="services">
      <div className="wrap">
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 60, marginBottom: 56, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 760 }}>
              <Eyebrow>{t.services.eyebrow}</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "20px 0 0" }}>{t.services.title}</h2>
            </div>
            <p style={{ maxWidth: 380, color: "var(--ink-dim)", fontSize: 16, lineHeight: 1.6, margin: 0 }}>{t.services.sub}</p>
          </div>
        </Reveal>

        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {t.services.items.map((s, i) => (<Reveal key={i} delay={i * 80}><ServiceCard s={s} readmore={t.services.readmore} /></Reveal>))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ s, readmore }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div className="svc-card" ref={ref} onMouseMove={onMove} style={{ minHeight: 320, padding: 36, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(46,107,255,.14)", color: "var(--blue-hi)", display: "grid", placeItems: "center" }}><Icon name={s.icon} size={26} /></div>
        <div className="step-num">{s.n}</div>
      </div>
      <h3 style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.025em", margin: "0 0 14px", lineHeight: 1.2 }}>{s.t}</h3>
      <p style={{ fontSize: 15, color: "var(--ink-dim)", lineHeight: 1.6, margin: "0 0 24px", flex: 1 }}>{s.d}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 22 }}>
        {s.tags.map((tag, i) => (
          <span key={i} style={{ fontSize: 11, fontFamily: "JetBrains Mono, monospace", padding: "5px 10px", borderRadius: 999, border: "1px solid var(--line-strong)", color: "var(--ink-dim)" }}>{tag}</span>
        ))}
      </div>
      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={() => track("book_call", { location: "service_card" })} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--blue-hi)", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>{readmore} <Arrow /></a>
    </div>
  );
}

/* ─── Engagement models ─────────────────────────────────────────────── */
function EngagementSection({ t }) {
  return (
    <section id="engagements">
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow>{t.engagement.eyebrow}</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "20px 0 16px" }}>{t.engagement.title}</h2>
            <p style={{ color: "var(--ink-dim)", fontSize: 17, maxWidth: 640, margin: "0 auto", lineHeight: 1.5 }}>{t.engagement.sub}</p>
          </div>
        </Reveal>

        <div className="tiers-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {t.engagement.tiers.map((tier, i) => (<Reveal key={i} delay={i * 80}><TierCard tier={tier} t={t} /></Reveal>))}
        </div>
      </div>
    </section>
  );
}

function TierCard({ tier, t }) {
  const pop = tier.popular;
  return (
    <div style={{ position: "relative", padding: 36, borderRadius: 22, border: pop ? "1px solid rgba(120,160,255,.4)" : "1px solid var(--line)", background: pop ? "linear-gradient(160deg, rgba(46,107,255,.18), rgba(124,91,255,.06))" : "rgba(255,255,255,.015)", transition: "all .25s ease", minHeight: 540, display: "flex", flexDirection: "column", boxShadow: pop ? "0 24px 60px -20px rgba(46,107,255,.4)" : "none", transform: pop ? "translateY(-8px)" : "none" }}>
      {pop && (
        <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "var(--lime)", color: "#0a0e1a", fontSize: 11, fontWeight: 600, padding: "5px 12px", borderRadius: 999, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>{t.engagement.badge}</div>
      )}
      <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 10px" }}>{tier.name}</h3>
      <div style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.03em", marginBottom: 18, lineHeight: 1 }}>{tier.price}</div>
      <p style={{ color: "var(--ink-dim)", fontSize: 14, lineHeight: 1.6, margin: "0 0 24px", minHeight: 88 }}>{tier.desc}</p>
      <div style={{ fontSize: 11, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-mute)", marginBottom: 16 }}>{t.engagement.included}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        {tier.li.map((item, i) => (
          <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, lineHeight: 1.5 }}>
            <span style={{ flexShrink: 0, marginTop: 2, color: "var(--blue-hi)" }}><Icon name="check" size={16} /></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={() => track("book_call", { location: "engagement" })} className={pop ? "btn btn-primary" : "btn btn-ghost"} style={{ justifyContent: "center", display: "inline-flex" }}>{t.engagement.btn} <Arrow /></a>
    </div>
  );
}

/* ─── FAQ ───────────────────────────────────────────────────────────── */
function FAQSection({ t }) {
  return (
    <section id="faq">
      <div className="wrap two-col" style={{ display: "grid", gridTemplateColumns: "0.6fr 1fr", gap: 80, alignItems: "start" }}>
        <Reveal>
          <Eyebrow>{t.faq.eyebrow}</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 54px)", margin: "20px 0 24px" }}>{t.faq.title}</h2>
          <p style={{ color: "var(--ink-dim)", fontSize: 16, lineHeight: 1.6, maxWidth: 320 }}>{t.faq.sub}</p>
        </Reveal>
        <Reveal delay={120}>
          <div>
            {t.faq.items.map((item, i) => (
              <details key={i} className="faq" open={i === 0}>
                <summary>
                  <span>{item.q}</span>
                  <span className="faq-icon">
                    <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 7H12M7 2V12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                  </span>
                </summary>
                <div className="faq-body">{item.a}</div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── CTA 2 ─────────────────────────────────────────────────────────── */
function CTABanner2({ t }) {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="wrap">
        <Reveal>
          <div className="cta2-inner" style={{ position: "relative", overflow: "hidden", borderRadius: 28, background: "linear-gradient(135deg, #050918 0%, #0a1432 30%, #1a3a8c 70%, #2E6BFF 100%)", padding: "96px 64px", border: "1px solid rgba(120,160,255,.25)", textAlign: "center" }}>
            <div style={{ position: "absolute", right: -120, top: -120, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,61,127,.55), transparent 60%)", filter: "blur(70px)" }}></div>
            <div style={{ position: "absolute", left: -100, bottom: -100, width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,255,58,.3), transparent 60%)", filter: "blur(70px)" }}></div>
            <div style={{ position: "relative", maxWidth: 880, margin: "0 auto" }}>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5.6vw, 84px)", margin: "0 0 28px", color: "#fff" }}>{t.cta2.title}</h2>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,.82)", maxWidth: 720, lineHeight: 1.55, margin: "0 auto 40px" }}>{t.cta2.sub}</p>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={() => track("book_call", { location: "cta_banner_2" })} className="btn btn-primary" style={{ fontSize: 15, padding: "16px 28px" }}>{t.cta2.btn} <Arrow /></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Contact ───────────────────────────────────────────────────────── */
function Input({ as = "input", ...rest }) {
  const Tag = as;
  const style = {
    width: "100%", padding: "14px 16px", background: "rgba(255,255,255,.03)", border: "1px solid var(--line-strong)",
    borderRadius: 12, color: "var(--ink)", fontSize: 14, fontFamily: "inherit", outline: "none",
    transition: "all .2s ease", resize: as === "textarea" ? "vertical" : "none"
  };
  return <Tag {...rest} style={style}
    onFocus={(e) => { e.target.style.borderColor = "var(--blue-hi)"; e.target.style.background = "rgba(46,107,255,.05)"; }}
    onBlur={(e) => { e.target.style.borderColor = "var(--line-strong)"; e.target.style.background = "rgba(255,255,255,.03)"; }} />;
}

function ContactSection({ t }) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: bots fill hidden fields — silently accept and drop.
    if (data.company_website) { setStatus("sent"); form.reset(); return; }

    const payload = {
      name: data.name || "",
      email: data.email || "",
      subject: data.subject || "New enquiry from uably.com",
      message: data.message || "",
      _source: "uably.com contact form",
    };
    if (FORM_ACCESS_KEY) payload.access_key = FORM_ACCESS_KEY;

    // No endpoint configured → never lose the lead: open the visitor's email client.
    if (!FORM_ENDPOINT) {
      track("generate_lead", { location: "contact_form", method: "mailto" });
      const body = `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 6000);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Bad status ${res.status}`);
      track("generate_lead", { location: "contact_form", method: "form" });
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 8000);
    } catch (err) {
      setStatus("error");
    }
  };

  const btnLabel = status === "sending" ? t.contact.sending
    : status === "sent" ? t.contact.sentBtn
    : t.contact.btn;

  return (
    <section id="contact">
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow>{t.contact.eyebrow}</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "20px 0 16px" }}>{t.contact.title}</h2>
            <p style={{ color: "var(--ink-dim)", fontSize: 17, maxWidth: 720, margin: "0 auto", lineHeight: 1.5 }}>{t.contact.sub}</p>
          </div>
        </Reveal>

        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 32, alignItems: "stretch" }}>
          <Reveal>
            <div style={{ padding: 40, borderRadius: 22, height: "100%", border: "1px solid var(--line)", background: "linear-gradient(180deg, rgba(46,107,255,.06), rgba(124,91,255,.03))" }}>
              <h3 style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 12px" }}>{t.contact.infoTitle}</h3>
              <p style={{ color: "var(--ink-dim)", fontSize: 14, lineHeight: 1.6, margin: "0 0 36px" }}>{t.contact.infoSub}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {t.contact.blocks.map((b, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(46,107,255,.14)", color: "var(--blue-hi)", display: "grid", placeItems: "center", flexShrink: 0 }}><Icon name={["pin", "phone", "mail"][i]} size={20} /></div>
                    <div>
                      <div style={{ fontSize: 11, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-mute)", marginBottom: 6 }}>{b.h}</div>
                      <div style={{ fontSize: 15, color: "var(--ink)" }}>{b.p1}</div>
                      <div style={{ fontSize: 13, color: "var(--ink-dim)", marginTop: 2 }}>{b.p2}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} style={{ padding: 40, borderRadius: 22, height: "100%", border: "1px solid var(--line)", background: "rgba(255,255,255,.015)" }}>
              <h3 style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 12px" }}>{t.contact.formTitle}</h3>
              <p style={{ color: "var(--ink-dim)", fontSize: 14, lineHeight: 1.6, margin: "0 0 28px" }}>{t.contact.formSub}</p>
              <div className="form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                <Input name="name" placeholder={t.contact.ph.name} aria-label={t.contact.ph.name} required />
                <Input name="email" placeholder={t.contact.ph.email} type="email" aria-label={t.contact.ph.email} required />
              </div>
              <div style={{ marginBottom: 14 }}><Input name="subject" placeholder={t.contact.ph.subject} aria-label={t.contact.ph.subject} /></div>
              <div style={{ marginBottom: 22 }}><Input name="message" placeholder={t.contact.ph.message} aria-label={t.contact.ph.message} as="textarea" rows={6} required /></div>
              {/* Honeypot — hidden from users, catches bots */}
              <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
              <button type="submit" disabled={status === "sending"} className="btn btn-blue" style={{ justifyContent: "center", width: "100%", opacity: status === "sending" ? 0.7 : 1, cursor: status === "sending" ? "default" : "pointer" }}>
                {btnLabel} {status === "idle" ? <Arrow /> : null}
              </button>
              {status === "sent" ? (
                <p role="status" style={{ marginTop: 16, fontSize: 14, color: "var(--lime)", lineHeight: 1.5 }}>{t.contact.sentMsg}</p>
              ) : null}
              {status === "error" ? (
                <p role="alert" style={{ marginTop: 16, fontSize: 14, color: "var(--pop)", lineHeight: 1.5 }}>{t.contact.errorMsg}</p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────────────────── */
function Footer({ t }) {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "64px 0 32px" }}>
      <div className="wrap">
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr", gap: 40, marginBottom: 56 }}>
          <div>
            <Logo size={32} />
            <div style={{ marginTop: 18, color: "var(--ink-dim)", fontSize: 14, lineHeight: 1.7 }}>
              {t.footer.addr.map((line, i) => <div key={i}>{line}</div>)}
              <div style={{ marginTop: 14 }}>
                <span style={{ color: "var(--ink-mute)", fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>Serving · </span>
                <span style={{ color: "var(--ink)" }}>{t.footer.serving}</span>
              </div>
              <div style={{ marginTop: 6 }}>
                <span style={{ color: "var(--ink-mute)", fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>Email · </span>
                <a href={`mailto:${t.footer.email}`} style={{ color: "var(--blue-hi)" }}>{t.footer.email}</a>
              </div>
            </div>
            <div style={{ marginTop: 22, display: "flex", gap: 10 }}>
              {["in", "X", "Li"].map((label, i) => (
                <span key={i} style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid var(--line-strong)", display: "grid", placeItems: "center", color: "var(--ink-dim)", fontSize: 12, fontWeight: 600 }}>{label}</span>
              ))}
            </div>
          </div>
          {t.footer.cols.map((c, i) => (
            <div key={i}>
              <div className="step-num" style={{ marginBottom: 16 }}>{c.h.toUpperCase()}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {c.l.map((l, j) => (<li key={j}><span style={{ color: "var(--ink-dim)", fontSize: 14 }}>{l}</span></li>))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 24, paddingTop: 24, borderTop: "1px solid var(--line)", fontSize: 13, color: "var(--ink-mute)", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" }}>
            <span>© {new Date().getFullYear()} Uably. {t.footer.rights}.</span>
            {t.footer.legalHref ? (
              <a href={t.footer.legalHref} style={{ color: "var(--ink-dim)", textDecoration: "none" }}>{t.footer.legalLabel}</a>
            ) : null}
          </div>
          <div style={{ fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.05em" }}>uably.com</div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Root ──────────────────────────────────────────────────────────── */
export default function Site({ lang, copy }) {
  return (
    <>
      <Nav lang={lang} t={copy} />
      <main>
        <Hero t={copy} />
        <StatsStrip t={copy} />
        <AboutSection t={copy} />
        <ExpertiseSection t={copy} />
        <WhySection t={copy} />
        <DeliverySection t={copy} />
        <CTABanner1 t={copy} />
        <ClientsMarquee t={copy} />
        <TestimonialsSection t={copy} />
        <ServicesSection t={copy} />
        <EngagementSection t={copy} />
        <FAQSection t={copy} />
        <CTABanner2 t={copy} />
        <ContactSection t={copy} />
      </main>
      <Footer t={copy} />
    </>
  );
}
