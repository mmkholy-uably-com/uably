// Reusable atoms + first batch of sections

const { useEffect, useRef, useState } = React;

// ─── Reveal on scroll ────────────────────────────────────────────────
function Reveal({ children, delay = 0, as: As = "div", ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("in"), delay);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <As ref={ref} className={`reveal ${rest.className || ""}`} {...rest}>{children}</As>;
}

// ─── Calendly Integration ─────────────────────────────────────────────
const CALENDLY_URL = "https://calendly.com/melkhouly/prospect";
function openCalendly() {
  window.open(CALENDLY_URL, "_blank", "width=800,height=600");
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

// ─── Icon set (replaces bi icons) ────────────────────────────────────
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

// ─── Logo ────────────────────────────────────────────────────────────
// ─── Photo tile (replaces image-slot) ────────────────────────────────
function PhotoTile({ src, alt, radius = 18, style = {} }) {
  return (
    <div style={{
      width: "100%", height: "100%", borderRadius: radius, overflow: "hidden",
      border: "1px solid var(--line-strong)",
      boxShadow: "0 20px 60px -25px rgba(0,0,0,.5)",
      position: "relative", ...style
    }}>
      <img src={src} alt={alt} loading="lazy"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block",
          filter: "brightness(.92) contrast(1.05)" }} />
    </div>
  );
}

function Logo({ size = 32 }) {
  // Logo PNG is 213×254 → roughly 0.84 aspect ratio. We scale height to ~1.15× size
  // so the U sits at the same optical weight as the wordmark next to it.
  const h = Math.round(size * 1.15);
  const w = Math.round(h * (213 / 254));
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
      <img
        src="uably-logo.png"
        alt="Uably"
        width={w}
        height={h}
        style={{ display: "block", objectFit: "contain", marginRight: 2 }}
      />
      <span style={{ fontSize: size * 0.78, fontWeight: 500, letterSpacing: "-0.03em" }}>ably</span>
    </div>
  );
}

// ─── Stats strip (under hero) ─────────────────────────────────────────
function StatsStrip({ t }) {
  const icons = ["cap", "scale", "upload", "shield"];
  return (
    <section style={{ padding: "40px 0 80px" }}>
      <div className="wrap">
        <Reveal>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 0,
            border: "1px solid var(--line)",
            borderRadius: 18,
            background: "linear-gradient(180deg, rgba(255,255,255,.025), transparent)",
            overflow: "hidden"
          }}>
            {t.stats.map((s, i) => (
              <div key={i} style={{
                padding: "32px 28px",
                borderRight: i < t.stats.length - 1 ? "1px solid var(--line)" : "none",
                display: "flex", alignItems: "center", gap: 18
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "rgba(46,107,255,.12)", color: "var(--blue-hi)",
                  display: "grid", placeItems: "center", flexShrink: 0
                }}><Icon name={icons[i]} size={22} /></div>
                <div>
                  <div style={{
                    fontSize: 28, fontWeight: 500, letterSpacing: "-0.03em",
                    lineHeight: 1, marginBottom: 6,
                    background: "linear-gradient(180deg, #fff, #c8d2ed)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
                  }}>{s.k}</div>
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

// ─── About / "Big 4 Caliber. Zero Overhead." ─────────────────────────
function AboutSection({ t }) {
  return (
    <section id="about" data-screen-label="About">
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <Reveal>
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "20px 0 24px" }}>
            {t.about.title.split(".").filter(Boolean).map((s, i, a) => (
              <span key={i} style={{ color: i === 1 ? "var(--blue-hi)" : "inherit" }}>
                {s.trim()}.{i < a.length - 1 ? <br /> : null}
              </span>
            ))}
          </h2>
          <p style={{ fontSize: 18, color: "var(--ink-dim)", lineHeight: 1.6, maxWidth: 580, marginBottom: 36 }}>
            {t.about.body}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 32px", marginBottom: 40 }}>
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

          {/* profile + contact */}
          <div style={{ display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap", padding: "20px 0", borderTop: "1px solid var(--line)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                background: "linear-gradient(135deg, var(--blue), var(--plum))",
                display: "grid", placeItems: "center", color: "#fff", fontWeight: 600, fontSize: 18
              }}>UC</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>{t.about.profileName}</div>
                <div style={{ fontSize: 13, color: "var(--ink-dim)" }}>{t.about.profileRole}</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--ink-dim)" }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                border: "1px solid var(--line-strong)",
                display: "grid", placeItems: "center"
              }}><Icon name="mail" size={18} /></div>
              <div>
                <div style={{ fontSize: 12, color: "var(--ink-mute)" }}>{t.about.contactLabel}</div>
                <div style={{ fontSize: 14, color: "var(--ink)", fontWeight: 500 }}>{t.about.contactEmail}</div>
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
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "260px 200px",
        gap: 14
      }}>
        <PhotoTile src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80"
          alt="Consulting meeting"
          style={{ gridColumn: "1 / span 2" }} radius={18} />
        <PhotoTile src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80"
          alt="Senior consultant" radius={16} />
        <div style={{
          borderRadius: 16, overflow: "hidden", position: "relative",
          background: "linear-gradient(135deg, var(--blue), var(--plum))",
          padding: 24, color: "#fff",
          display: "flex", flexDirection: "column", justifyContent: "space-between"
        }}>
          <div style={{
            position: "absolute", inset: 0, opacity: .22,
            background: "radial-gradient(400px 200px at 100% 0%, #fff, transparent 50%)"
          }}></div>
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

// ─── Expertise tabs ──────────────────────────────────────────────────
function ExpertiseSection({ t }) {
  const [active, setActive] = useState(0);
  const tab = t.expertise.tabs[active];
  return (
    <section id="expertise" data-screen-label="Expertise">
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow>{t.expertise.eyebrow}</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "20px 0 16px" }}>
              {t.expertise.title}
            </h2>
            <p style={{ color: "var(--ink-dim)", fontSize: 17, maxWidth: 640, margin: "0 auto", lineHeight: 1.5 }}>
              {t.expertise.sub}
            </p>
          </div>
        </Reveal>

        {/* Tab bar */}
        <Reveal>
          <div style={{
            display: "flex", gap: 8, padding: 6,
            border: "1px solid var(--line-strong)", borderRadius: 999,
            background: "rgba(255,255,255,.02)", maxWidth: 760, margin: "0 auto 56px",
            justifyContent: "center", flexWrap: "wrap"
          }}>
            {t.expertise.tabs.map((tb, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                padding: "12px 22px", borderRadius: 999, border: 0, cursor: "pointer",
                fontSize: 14, fontWeight: 500, transition: "all .25s",
                fontFamily: "inherit", letterSpacing: "-0.005em",
                background: active === i ? "var(--blue)" : "transparent",
                color: active === i ? "#fff" : "var(--ink-dim)",
                boxShadow: active === i ? "0 8px 24px -8px rgba(46,107,255,.6)" : "none"
              }}>{tb.name}</button>
            ))}
          </div>
        </Reveal>

        {/* Content */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div key={active} style={{ animation: "fadeUp .5s ease both" }}>
            <h3 style={{ fontSize: "clamp(28px, 3.2vw, 42px)", fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.15, margin: "0 0 20px" }}>
              {tab.h}
            </h3>
            <p style={{ color: "var(--ink-dim)", fontSize: 17, lineHeight: 1.6, marginBottom: 28, fontStyle: "italic" }}>
              {tab.p}
            </p>
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
            <PhotoTile src={[
              "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80"
            ][active]} alt={tab.imgLabel} radius={18}
            style={{ aspectRatio: "5/4" }} />
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeUp { from {opacity:0; transform:translateY(12px)} to {opacity:1; transform:none} }`}</style>
    </section>
  );
}

// ─── Why us — 4 cards ────────────────────────────────────────────────
function WhySection({ t }) {
  return (
    <section style={{ paddingTop: 60 }}>
      <div className="wrap">
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 60, marginBottom: 48, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 720 }}>
              <Eyebrow>{t.why.eyebrow}</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: "20px 0 0" }}>
                {t.why.title}
              </h2>
            </div>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {t.why.cards.map((c, i) => (
            <Reveal key={i} delay={i * 80}>
              <WhyCard c={c} idx={i} />
            </Reveal>
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
    <div ref={ref} onMouseMove={onMove}
      className="svc-card" style={{ minHeight: 260, padding: 28 }}>
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: `color-mix(in oklab, ${accent} 16%, transparent)`,
        color: accent === "var(--lime)" ? "var(--lime)" : accent,
        display: "grid", placeItems: "center", marginBottom: 22
      }}><Icon name={c.i} size={22} /></div>
      <h3 style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 12px", lineHeight: 1.25 }}>{c.h}</h3>
      <p style={{ fontSize: 14, color: "var(--ink-dim)", lineHeight: 1.6, margin: 0 }}>{c.p}</p>
    </div>
  );
}

// ─── Delivery / "Approach" — 3 left, mockup center, 3 right ──────────
function DeliverySection({ t }) {
  return (
    <section id="approach" data-screen-label="Approach"
      style={{ background: "linear-gradient(180deg, transparent, rgba(46,107,255,.04), transparent)" }}>
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <Eyebrow>{t.delivery.eyebrow}</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 68px)", margin: "20px auto 16px", maxWidth: 980 }}>
              {t.delivery.title}
            </h2>
            <p style={{ color: "var(--ink-dim)", fontSize: 17, maxWidth: 640, margin: "0 auto", lineHeight: 1.5 }}>
              {t.delivery.sub}
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48, alignItems: "center" }}>
          {/* LEFT items */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {t.delivery.left.map((it, i) => (
              <Reveal key={i} delay={i * 80}>
                <DeliveryItem it={it} align="right" />
              </Reveal>
            ))}
          </div>

          {/* CENTER — visual */}
          <Reveal delay={200}>
            <div style={{ position: "relative" }}>
              <div className="aurora-a" style={{ width: 320, height: 320, top: -40, left: -20, opacity: .6 }}></div>
              <PhotoTile src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
                alt="Delivery dashboard" radius={20}
                style={{ aspectRatio: "3/4", position: "relative" }} />
              {/* floating badge */}
              <div style={{
                position: "absolute", bottom: -16, left: "50%", transform: "translateX(-50%)",
                background: "rgba(13,18,36,.92)", backdropFilter: "blur(20px)",
                border: "1px solid var(--line-strong)", borderRadius: 999,
                padding: "10px 18px", display: "flex", alignItems: "center", gap: 10,
                whiteSpace: "nowrap",
                boxShadow: "0 12px 32px -8px rgba(0,0,0,.5)"
              }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e",
                  boxShadow: "0 0 0 4px rgba(34,197,94,.18)" }}></span>
                <span style={{ fontSize: 12, fontFamily: "JetBrains Mono, monospace",
                  letterSpacing: "0.08em", color: "var(--ink)" }}>Weekly to your sponsor</span>
              </div>
            </div>
          </Reveal>

          {/* RIGHT items */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {t.delivery.right.map((it, i) => (
              <Reveal key={i} delay={i * 80 + 100}>
                <DeliveryItem it={it} align="left" />
              </Reveal>
            ))}
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
    <div style={{
      display: "flex", gap: 18, alignItems: "flex-start",
      flexDirection: align === "right" ? "row-reverse" : "row",
      textAlign: align === "right" ? "right" : "left"
    }}>
      <div style={{
        width: 56, height: 56, borderRadius: 14, flexShrink: 0,
        border: "1px solid var(--line-strong)",
        background: "linear-gradient(180deg, rgba(46,107,255,.12), transparent)",
        color: "var(--blue-hi)",
        display: "grid", placeItems: "center"
      }}><Icon name={icon} size={22} /></div>
      <div>
        <h3 style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.015em", margin: "0 0 8px" }}>{it.h}</h3>
        <p style={{ fontSize: 14, color: "var(--ink-dim)", lineHeight: 1.55, margin: 0 }}>{it.p}</p>
      </div>
    </div>
  );
}

// Expose
Object.assign(window, {
  Reveal, Eyebrow, Arrow, Icon, Logo, PhotoTile,
  StatsStrip, AboutSection, ExpertiseSection, WhySection, DeliverySection
});
