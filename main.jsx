// Bootstrap

const { useEffect: useEffectMain } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "bgStyle": "gradient",
  "lang": "en"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffectMain(() => {
    document.body.setAttribute("data-bg", t.bgStyle);
  }, [t.bgStyle]);

  const setLang = (l) => setTweak("lang", l);
  const lang = t.lang || "en";
  const copy = window.COPY[lang];

  return (
    <React.Fragment>
      <Nav lang={lang} setLang={setLang} t={copy} />
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
      <Footer t={copy} />

      <TweaksPanel>
        <TweakSection label="Background" />
        <TweakRadio
          label="Style"
          value={t.bgStyle}
          options={["solid", "gradient", "grid", "noise"]}
          onChange={(v) => setTweak("bgStyle", v)}
        />
        <TweakSection label="Language" />
        <TweakRadio
          label="Locale"
          value={lang}
          options={["en", "fr"]}
          onChange={(v) => setTweak("lang", v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
