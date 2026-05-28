// Second batch: CTA1, Clients marquee, Testimonials, Services, Engagement,
// FAQ, CTA2, Contact, Footer

const { useState: useStateB } = React;

// ─── CTA banner 1 (between Delivery and Clients) ─────────────────────
function CTABanner1({ t }) {
  return (
    <section style={{ padding: "40px 0 80px" }}>
      <div className="wrap">
        <Reveal>
          <div style={{
            position: "relative", overflow: "hidden",
            borderRadius: 22,
            border: "1px solid var(--line-strong)",
            background: "linear-gradient(135deg, rgba(46,107,255,.08), rgba(124,91,255,.05))",
            padding: "56px 56px", display: "grid",
            gridTemplateColumns: "1.4fr auto", gap: 40, alignItems: "center"
          }}>
            <div style={{
              position: "absolute", right: -60, top: -60, width: 320, height: 320,
              borderRadius: "50%", background: "radial-gradient(circle, rgba(46,107,255,.25), transparent 60%)",
              filter: "blur(60px)"
            }}></div>
            <div style={{ position: "relative" }}>
              <Eyebrow>{t.cta1.eyebrow}</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", margin: "16px 0 14px" }}>{t.cta1.title}</h2>
              <p style={{ color: "var(--ink-dim)", fontSize: 16, lineHeight: 1.6, margin: 0, maxWidth: 640 }}>{t.cta1.sub}</p>
            </div>
            <a href="https://calendly.com/melkhouly/prospect" target="_blank" rel="noopener noreferrer" className="btn btn-blue" style={{ position: "relative", whiteSpace: "nowrap" }}>{t.cta1.btn} <Arrow /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Clients marquee ─────────────────────────────────────────────────
function ClientsMarquee({ t }) {
  const items = t.clients.items;
  const doubled = [...items, ...items];
  return (
    <section style={{ padding: "60px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap" style={{ marginBottom: 28 }}>
        <Reveal>
          <Eyebrow>{t.clients.eyebrow}</Eyebrow>
        </Reveal>
      </div>
      <div className="marquee" style={{ overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 160, zIndex: 2, background: "linear-gradient(90deg, var(--bg), transparent)", pointerEvents: "none" }}></div>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 160, zIndex: 2, background: "linear-gradient(-90deg, var(--bg), transparent)", pointerEvents: "none" }}></div>
        <div className="marquee-track" style={{ alignItems: "center" }}>
          {doubled.map((name, i) => (
            <span key={i} style={{
              fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em",
              color: "var(--ink-dim)", whiteSpace: "nowrap",
              display: "flex", alignItems: "center", gap: 64
            }}>
              {name}
              <span style={{ color: "var(--ink-mute)", fontSize: 20 }}>•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ────────────────────────────────────────────────────
function TestimonialsSection({ t }) {
  return (
    <section data-screen-label="Testimonials">
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow>{t.testimonials.eyebrow}</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 68px)", margin: "20px 0 16px" }}>{t.testimonials.title}</h2>
            <p style={{ color: "var(--ink-dim)", fontSize: 17, maxWidth: 560, margin: "0 auto" }}>{t.testimonials.sub}</p>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {t.testimonials.items.map((tt, i) => (
            <Reveal key={i} delay={i * 80}>
              <TestimonialCard tt={tt} idx={i} />
            </Reveal>
          ))}
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
  const initials = tt.name.split(" ").map(s => s[0]).join("");
  return (
    <div style={{
      padding: 36, borderRadius: 18, position: "relative",
      border: `1px solid ${tone.border}`, background: tone.bg,
      transition: "all .25s ease", minHeight: 280, display: "flex", flexDirection: "column", justifyContent: "space-between"
    }}>
      {/* Big quote mark */}
      <svg width="42" height="36" viewBox="0 0 42 36" fill="none" style={{ opacity: .25, marginBottom: 12 }}>
        <path d="M0 36V22c0-7.4 2-13.5 6-18.4C10 -1.3 14.7-1 19-1l1 5c-3.8.8-6.6 2.7-8.6 5.6-2 2.8-3 6.2-3 10.2H20v16H0Zm22 0V22c0-7.4 2-13.5 6-18.4C32-1.3 36.7-1 41-1l1 5c-3.8.8-6.6 2.7-8.6 5.6-2 2.8-3 6.2-3 10.2H42v16H22Z"
          fill="var(--blue-hi)" />
      </svg>

      <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--ink)", margin: 0, fontWeight: 400, letterSpacing: "-0.01em" }}>
        "{tt.quote}"
      </p>

      <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--line)", display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{
          width: 44, height: 44, borderRadius: "50%",
          background: "linear-gradient(135deg, var(--blue), var(--plum))",
          display: "grid", placeItems: "center", color: "#fff", fontWeight: 600, fontSize: 14, flexShrink: 0
        }}>{initials}</div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 500 }}>{tt.name}</div>
          <div style={{ fontSize: 13, color: "var(--ink-dim)" }}>{tt.role}</div>
        </div>
      </div>
    </div>
  );
}

// ─── Services (4 cards) ──────────────────────────────────────────────
function ServicesSection({ t }) {
  return (
    <section id="services" data-screen-label="Services">
      <div className="wrap">
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 60, marginBottom: 56, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 760 }}>
              <Eyebrow>{t.services.eyebrow}</Eyebrow>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "20px 0 0" }}>
                {t.services.title}
              </h2>
            </div>
            <p style={{ maxWidth: 380, color: "var(--ink-dim)", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
              {t.services.sub}
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {t.services.items.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <ServiceCard s={s} readmore={t.services.readmore} />
            </Reveal>
          ))}
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
        <div style={{
          width: 56, height: 56, borderRadius: 14,
          background: "rgba(46,107,255,.14)", color: "var(--blue-hi)",
          display: "grid", placeItems: "center"
        }}><Icon name={s.icon} size={26} /></div>
        <div className="step-num">{s.n}</div>
      </div>
      <h3 style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.025em", margin: "0 0 14px", lineHeight: 1.2 }}>{s.t}</h3>
      <p style={{ fontSize: 15, color: "var(--ink-dim)", lineHeight: 1.6, margin: "0 0 24px", flex: 1 }}>{s.d}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 22 }}>
        {s.tags.map((tag, i) => (
          <span key={i} style={{
            fontSize: 11, fontFamily: "JetBrains Mono, monospace",
            padding: "5px 10px", borderRadius: 999,
            border: "1px solid var(--line-strong)", color: "var(--ink-dim)"
          }}>{tag}</span>
        ))}
      </div>
      <a style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--blue-hi)", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>
        {readmore} <Arrow />
      </a>
    </div>
  );
}

// ─── Engagement Models (pricing-like) ────────────────────────────────
function EngagementSection({ t }) {
  return (
    <section id="engagements" data-screen-label="Engagements">
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow>{t.engagement.eyebrow}</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "20px 0 16px" }}>{t.engagement.title}</h2>
            <p style={{ color: "var(--ink-dim)", fontSize: 17, maxWidth: 640, margin: "0 auto", lineHeight: 1.5 }}>{t.engagement.sub}</p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {t.engagement.tiers.map((tier, i) => (
            <Reveal key={i} delay={i * 80}>
              <TierCard tier={tier} t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TierCard({ tier, t }) {
  const pop = tier.popular;
  return (
    <div style={{
      position: "relative",
      padding: 36, borderRadius: 22,
      border: pop ? "1px solid rgba(120,160,255,.4)" : "1px solid var(--line)",
      background: pop
        ? "linear-gradient(160deg, rgba(46,107,255,.18), rgba(124,91,255,.06))"
        : "rgba(255,255,255,.015)",
      transition: "all .25s ease",
      minHeight: 540,
      display: "flex", flexDirection: "column",
      boxShadow: pop ? "0 24px 60px -20px rgba(46,107,255,.4)" : "none",
      transform: pop ? "translateY(-8px)" : "none"
    }}>
      {pop && (
        <div style={{
          position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
          background: "var(--lime)", color: "#0a0e1a", fontSize: 11, fontWeight: 600,
          padding: "5px 12px", borderRadius: 999,
          fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em", textTransform: "uppercase"
        }}>{t.engagement.badge}</div>
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

      <a href="https://calendly.com/melkhouly/prospect" target="_blank" rel="noopener noreferrer" className={pop ? "btn btn-primary" : "btn btn-ghost"} style={{ justifyContent: "center", display: "inline-flex" }}>
        {t.engagement.btn} <Arrow />
      </a>
    </div>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────
function FAQSection({ t }) {
  return (
    <section id="faq" data-screen-label="FAQ">
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "0.6fr 1fr", gap: 80, alignItems: "start" }}>
        <Reveal>
          <Eyebrow>{t.faq.eyebrow}</Eyebrow>
          <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 54px)", margin: "20px 0 24px" }}>
            {t.faq.title}
          </h2>
          <p style={{ color: "var(--ink-dim)", fontSize: 16, lineHeight: 1.6, maxWidth: 320 }}>
            {t.faq.sub}
          </p>
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

// ─── CTA 2 (big closer banner) ───────────────────────────────────────
function CTABanner2({ t }) {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="wrap">
        <Reveal>
          <div style={{
            position: "relative", overflow: "hidden",
            borderRadius: 28,
            background: "linear-gradient(135deg, #050918 0%, #0a1432 30%, #1a3a8c 70%, #2E6BFF 100%)",
            padding: "96px 64px",
            border: "1px solid rgba(120,160,255,.25)",
            textAlign: "center"
          }}>
            <div style={{
              position: "absolute", right: -120, top: -120, width: 480, height: 480, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,61,127,.55), transparent 60%)", filter: "blur(70px)"
            }}></div>
            <div style={{
              position: "absolute", left: -100, bottom: -100, width: 380, height: 380, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(200,255,58,.3), transparent 60%)", filter: "blur(70px)"
            }}></div>

            <div style={{ position: "relative", maxWidth: 880, margin: "0 auto" }}>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5.6vw, 84px)", margin: "0 0 28px", color: "#fff" }}>
                {t.cta2.title}
              </h2>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,.82)", maxWidth: 720, lineHeight: 1.55, margin: "0 auto 40px" }}>
                {t.cta2.sub}
              </p>
              <a href="https://calendly.com/melkhouly/prospect" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: 15, padding: "16px 28px" }}>
                {t.cta2.btn} <Arrow />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Contact (info + form) ───────────────────────────────────────────
function ContactSection({ t }) {
  const [sent, setSent] = useStateB(false);
  const onSubmit = (e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); };
  return (
    <section id="contact" data-screen-label="Contact">
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Eyebrow>{t.contact.eyebrow}</Eyebrow>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: "20px 0 16px" }}>{t.contact.title}</h2>
            <p style={{ color: "var(--ink-dim)", fontSize: 17, maxWidth: 720, margin: "0 auto", lineHeight: 1.5 }}>{t.contact.sub}</p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 32, alignItems: "stretch" }}>
          {/* LEFT — Info */}
          <Reveal>
            <div style={{
              padding: 40, borderRadius: 22, height: "100%",
              border: "1px solid var(--line)",
              background: "linear-gradient(180deg, rgba(46,107,255,.06), rgba(124,91,255,.03))"
            }}>
              <h3 style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 12px" }}>{t.contact.infoTitle}</h3>
              <p style={{ color: "var(--ink-dim)", fontSize: 14, lineHeight: 1.6, margin: "0 0 36px" }}>{t.contact.infoSub}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {t.contact.blocks.map((b, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: "rgba(46,107,255,.14)", color: "var(--blue-hi)",
                      display: "grid", placeItems: "center", flexShrink: 0
                    }}><Icon name={["pin", "phone", "mail"][i]} size={20} /></div>
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

          {/* RIGHT — Form */}
          <Reveal delay={120}>
            <form onSubmit={onSubmit} style={{
              padding: 40, borderRadius: 22, height: "100%",
              border: "1px solid var(--line)",
              background: "rgba(255,255,255,.015)"
            }}>
              <h3 style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 12px" }}>{t.contact.formTitle}</h3>
              <p style={{ color: "var(--ink-dim)", fontSize: 14, lineHeight: 1.6, margin: "0 0 28px" }}>{t.contact.formSub}</p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                <Input placeholder={t.contact.ph.name} />
                <Input placeholder={t.contact.ph.email} type="email" />
              </div>
              <div style={{ marginBottom: 14 }}><Input placeholder={t.contact.ph.subject} /></div>
              <div style={{ marginBottom: 22 }}><Input placeholder={t.contact.ph.message} as="textarea" rows={6} /></div>

              <button type="submit" className="btn btn-blue" style={{ justifyContent: "center", width: "100%" }}>
                {sent ? "✓ Sent" : t.contact.btn} {sent ? null : <Arrow />}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Input({ as = "input", ...rest }) {
  const Tag = as;
  const style = {
    width: "100%", padding: "14px 16px",
    background: "rgba(255,255,255,.03)",
    border: "1px solid var(--line-strong)",
    borderRadius: 12, color: "var(--ink)", fontSize: 14,
    fontFamily: "inherit", outline: "none",
    transition: "all .2s ease", resize: as === "textarea" ? "vertical" : "none"
  };
  return <Tag {...rest} style={style}
    onFocus={(e) => { e.target.style.borderColor = "var(--blue-hi)"; e.target.style.background = "rgba(46,107,255,.05)"; }}
    onBlur={(e) => { e.target.style.borderColor = "var(--line-strong)"; e.target.style.background = "rgba(255,255,255,.03)"; }}
  />;
}

// ─── Footer ──────────────────────────────────────────────────────────
function Footer({ t }) {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "64px 0 32px" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr", gap: 40, marginBottom: 56 }}>
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
            {/* social */}
            <div style={{ marginTop: 22, display: "flex", gap: 10 }}>
              {["in", "X", "Li"].map((label, i) => (
                <a key={i} style={{
                  width: 36, height: 36, borderRadius: 10,
                  border: "1px solid var(--line-strong)",
                  display: "grid", placeItems: "center",
                  color: "var(--ink-dim)", fontSize: 12, fontWeight: 600, cursor: "pointer",
                  transition: "all .2s"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--blue)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--blue)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--ink-dim)"; e.currentTarget.style.borderColor = "var(--line-strong)"; }}
                >{label}</a>
              ))}
            </div>
          </div>
          {t.footer.cols.map((c, i) => (
            <div key={i}>
              <div className="step-num" style={{ marginBottom: 16 }}>{c.h.toUpperCase()}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {c.l.map((l, j) => (
                  <li key={j}><a style={{ color: "var(--ink-dim)", fontSize: 14, transition: "color .2s", cursor: "pointer" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--ink)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--ink-dim)"}
                  >{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 24, paddingTop: 24, borderTop: "1px solid var(--line)", fontSize: 13, color: "var(--ink-mute)", flexWrap: "wrap" }}>
          <div>© {new Date().getFullYear()} Uably. {t.footer.rights}.</div>
          <div style={{ fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.05em" }}>uably.com</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  CTABanner1, ClientsMarquee, TestimonialsSection, ServicesSection,
  EngagementSection, FAQSection, CTABanner2, ContactSection, Footer
});
