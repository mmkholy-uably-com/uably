// Nav + Hero + App shell

const { useEffect: useEffectApp, useRef: useRefApp, useState: useStateApp } = React;

function Nav({ lang, setLang, t, onTweaksOpen }) {
  const [scrolled, setScrolled] = useStateApp(false);
  const [active, setActive] = useStateApp("home");

  useEffectApp(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ids = ["home", "about", "services", "approach", "engagements", "faq", "contact"];
  useEffectApp(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a onClick={() => scrollTo("home")} style={{ cursor: "pointer" }}><Logo size={32} /></a>

        <div style={{ display: "flex", gap: 28, marginLeft: 28 }}>
          {t.nav.map((label, i) => (
            <a key={i} className={`nav-link ${active === ids[i] ? "active" : ""}`}
              onClick={() => scrollTo(ids[i])}>{label}</a>
          ))}
        </div>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 16 }}>
          {/* Language toggle */}
          <div style={{
            display: "flex", padding: 3, borderRadius: 999,
            border: "1px solid var(--line-strong)", background: "rgba(255,255,255,.02)"
          }}>
            {["en", "fr"].map((l) => (
              <button key={l} onClick={() => setLang(l)} style={{
                padding: "5px 12px", borderRadius: 999, border: 0, cursor: "pointer",
                fontSize: 12, fontWeight: 500, letterSpacing: "0.05em",
                fontFamily: "JetBrains Mono, monospace",
                background: lang === l ? "var(--ink)" : "transparent",
                color: lang === l ? "#0a0e1a" : "var(--ink-dim)",
                transition: "all .2s"
              }}>{l.toUpperCase()}</button>
            ))}
          </div>
          <button className="btn btn-blue" style={{ padding: "10px 18px", fontSize: 13 }} onClick={() => scrollTo("contact")}>
            {t.cta} <Arrow />
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero({ t }) {
  return (
    <section id="home" data-screen-label="Home — Hero" style={{
      paddingTop: 160, paddingBottom: 80, position: "relative", overflow: "hidden", minHeight: "92vh"
    }}>
      {/* Aurora background */}
      <div className="aurora-a" style={{ top: -100, right: -60 }}></div>
      <div className="aurora-b" style={{ bottom: -120, left: -40 }}></div>

      {/* Diagonal subtle stripe */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none",
        background: "linear-gradient(110deg, transparent 38%, rgba(46,107,255,.04) 38%, rgba(46,107,255,.04) 42%, transparent 42%)"
      }}></div>

      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center", position: "relative" }}>
        {/* LEFT */}
        <div>
          <Reveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10,
              padding: "6px 14px", borderRadius: 999,
              border: "1px solid var(--line-strong)", background: "rgba(46,107,255,.08)",
              color: "var(--blue-hi)", fontSize: 12, fontFamily: "JetBrains Mono, monospace",
              letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 28
            }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z"
                  fill="var(--blue-hi)" stroke="var(--blue-hi)" strokeWidth="0.8" strokeLinejoin="round" />
              </svg>
              {t.hero.eyebrow}
            </div>
          </Reveal>

          <h1 className="display reveal" style={{
            fontSize: "clamp(56px, 7.2vw, 112px)",
            margin: "0 0 36px",
            letterSpacing: "-0.045em"
          }} ref={useEntryReveal()}>
            {t.hero.title.map((p, i) => (
              <span key={i} style={{
                display: "block",
                color: p.c === "blue"
                  ? "transparent"
                  : "var(--ink)",
                ...(p.c === "blue"
                  ? {
                      backgroundImage: "linear-gradient(110deg, #5C8CFF, #2E6BFF 40%, #7C5BFF)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text"
                    }
                  : {})
              }}>{p.t}</span>
            ))}
          </h1>

          <Reveal delay={300}>
            <p style={{
              fontSize: 19, color: "var(--ink-dim)", lineHeight: 1.55,
              maxWidth: 580, margin: "0 0 40px"
            }}>{t.hero.sub}</p>
          </Reveal>

          <Reveal delay={400}>
            <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <button className="btn btn-blue">{t.hero.primary} <Arrow /></button>
              <button className="btn btn-ghost">{t.hero.secondary} <Arrow /></button>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — visual */}
        <Reveal delay={200}>
          <HeroVisual t={t} />
        </Reveal>
      </div>
    </section>
  );
}

// helper for the H1 reveal (since className needs to start with 'reveal')
function useEntryReveal() {
  const ref = useRefApp(null);
  useEffectApp(() => {
    if (!ref.current) return;
    const id = setTimeout(() => ref.current && ref.current.classList.add("in"), 80);
    return () => clearTimeout(id);
  }, []);
  return ref;
}

function HeroVisual({ t }) {
  return (
    <div style={{ position: "relative", aspectRatio: "5/6", maxHeight: 640 }}>
      {/* Main hero photo */}
      <div style={{ position: "absolute", inset: 0, borderRadius: 22, overflow: "hidden",
        border: "1px solid var(--line-strong)",
        boxShadow: "0 40px 80px -30px rgba(0,0,0,.5)"
      }}>
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80"
          alt="Enterprise workspace" loading="eager"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block",
            filter: "brightness(.9) contrast(1.05)" }} />
        {/* dark tint for legibility of floating cards */}
        <div style={{ position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(7,10,20,.05), rgba(7,10,20,.35))"
        }}></div>
      </div>

      {/* Floating metric card — bottom left */}
      <div style={{
        position: "absolute", left: -28, bottom: 64,
        background: "rgba(13, 18, 36, 0.86)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        border: "1px solid var(--line-strong)",
        borderRadius: 18, padding: "20px 22px",
        boxShadow: "0 20px 60px -20px rgba(0,0,0,.6)",
        minWidth: 240
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 0 4px rgba(34,197,94,.18)" }}></span>
          <span style={{ fontSize: 11, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-dim)" }}>Live · ISO 27001</span>
        </div>
        <div style={{ fontSize: 30, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1 }}>Certified</div>
        <div style={{ fontSize: 13, color: "var(--ink-dim)", marginTop: 6 }}>Programs delivered audit-clean</div>
      </div>

      {/* Floating top right — clients */}
      <div style={{
        position: "absolute", right: -16, top: 40,
        background: "rgba(13, 18, 36, 0.86)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        border: "1px solid var(--line-strong)",
        borderRadius: 16, padding: "14px 18px",
        boxShadow: "0 20px 60px -20px rgba(0,0,0,.6)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex" }}>
            {["#2E6BFF","#7C5BFF","#FF3D7F","#C8FF3A"].map((c, i) => (
              <div key={i} style={{
                width: 30, height: 30, borderRadius: "50%",
                background: `linear-gradient(135deg, ${c}, ${c}aa)`,
                border: "2px solid #0d1224", marginLeft: i ? -10 : 0
              }}></div>
            ))}
            <div style={{
              width: 30, height: 30, borderRadius: "50%",
              background: "var(--ink)", color: "#0a0e1a",
              fontSize: 11, fontWeight: 600, display: "grid", placeItems: "center",
              border: "2px solid #0d1224", marginLeft: -10
            }}>12+</div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: "var(--ink-dim)" }}>{t.hero.socialProof}</div>
          </div>
        </div>
      </div>

      {/* Floating bottom right — small badge */}
      <div style={{
        position: "absolute", right: -8, bottom: -16,
        background: "var(--blue)", color: "#fff",
        borderRadius: 16, padding: "16px 20px",
        boxShadow: "0 20px 60px -20px rgba(46,107,255,.6)"
      }}>
        <div style={{ fontSize: 11, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.12em", textTransform: "uppercase", opacity: .85 }}>Principal-led</div>
        <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.03em", marginTop: 4 }}>Every engagement</div>
      </div>
    </div>
  );
}

window.Nav = Nav;
window.Hero = Hero;
