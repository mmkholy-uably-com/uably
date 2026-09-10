import Link from "next/link";
import { Logo } from "@/components/site";
import { CONTACT_EMAIL } from "@/lib/seo";

const PRIVACY_EMAIL = "privacy@uably.com";

/* ─────────────────────────────────────────────────────────────────────
   Quebec Law 25 (An Act to modernize legislative provisions as regards
   the protection of personal information) compliant privacy policy.
   Content is provided in EN and FR. Replace the bracketed placeholders
   with your confirmed legal details before publishing.
   ───────────────────────────────────────────────────────────────────── */
export const PRIVACY = {
  en: {
    backHref: "/",
    altHref: "/fr/confidentialite/",
    altLabel: "FR",
    title: "Privacy Policy",
    updated: "Last updated: September 9, 2026",
    intro:
      "Uably (\u201cUably\u201d, \u201cwe\u201d, \u201cus\u201d or \u201cour\u201d) respects your privacy and is committed to protecting the personal information you entrust to us. This Privacy Policy explains what personal information we collect, why we collect it, how we use and protect it, and the rights you have under Quebec\u2019s Act respecting the protection of personal information in the private sector, as modernized by Law 25 (An Act to modernize legislative provisions as regards the protection of personal information), and other applicable Canadian privacy laws.",
    sections: [
      {
        h: "1. Person responsible for the protection of personal information",
        blocks: [
          "In accordance with Law 25, Uably has designated a person responsible for the protection of personal information (our Privacy Officer). This person oversees our compliance with applicable privacy laws and handles requests and complaints regarding your personal information.",
          { list: [
            `Title: Privacy Officer, Uably`,
            `Email: ${PRIVACY_EMAIL}`,
            `Mailing address: 9900 Boulevard Cavendish, Suite 200, Montreal, Quebec, Canada`,
          ] },
          "You may contact our Privacy Officer at any time to exercise your rights, ask a question, or file a complaint about how we handle your personal information.",
        ],
      },
      {
        h: "2. Personal information we collect",
        blocks: [
          "We only collect the personal information necessary for the purposes described in this policy. Depending on how you interact with us, this may include:",
          { list: [
            "Information you provide directly \u2014 when you complete our contact form or email us: your name, email address, the subject of your message, and any details you choose to include about your organization, project, timeline or compliance needs.",
            "Booking information \u2014 if you schedule a discovery call, the scheduling details you provide through our booking tool.",
            "Technical and usage information \u2014 collected automatically when you visit our website, such as your IP address, approximate location, browser and device type, pages viewed, referring pages, and interactions with the site.",
          ] },
          "We do not knowingly collect sensitive personal information (such as health, financial account or biometric data) through this website, and we ask that you not send such information through the contact form.",
        ],
      },
      {
        h: "3. Why we collect and use your personal information (purposes)",
        blocks: [
          "We use your personal information for the following purposes:",
          { list: [
            "To respond to your inquiries and communicate with you about our services;",
            "To schedule and conduct discovery calls and consultations you request;",
            "To provide, operate, maintain and secure our website;",
            "To understand how our website is used and to improve its content and performance;",
            "To comply with our legal and regulatory obligations.",
          ] },
          "We will not use your personal information for a new purpose that is incompatible with those above without first obtaining your consent, unless permitted or required by law.",
        ],
      },
      {
        h: "4. Consent",
        blocks: [
          "By voluntarily providing your personal information through our contact form, email or booking tool, you consent to our collection and use of that information for the purposes described in this policy. Providing your personal information is optional, but some information is necessary for us to respond to you.",
          "For non-essential technologies such as analytics cookies, we rely on your consent where required. You can withdraw your consent at any time (see \u201cCookies and tracking technologies\u201d and \u201cYour rights\u201d below). Withdrawing consent does not affect processing carried out before the withdrawal.",
        ],
      },
      {
        h: "5. Cookies and tracking technologies",
        blocks: [
          "Our website may use cookies and similar technologies. Strictly necessary cookies are required for the site to function. With your consent, we also use analytics technologies to measure and improve site performance.",
          { list: [
            "Analytics \u2014 we may use Google Analytics 4 to understand aggregate, de-identified usage patterns (pages visited, general location, device type). Google acts as our service provider for this purpose.",
            "Content delivery and security \u2014 our hosting and content-delivery providers may set technical cookies to deliver the site securely and reliably.",
          ] },
          "You can control or disable cookies through your browser settings, and you can opt out of Google Analytics using the Google Analytics opt-out browser add-on. Disabling cookies may affect some site features.",
        ],
      },
      {
        h: "6. Service providers and disclosure to third parties",
        blocks: [
          "We do not sell your personal information. We may share it with trusted third-party service providers who process it on our behalf and only in accordance with our instructions, such as:",
          { list: [
            "Website hosting and content-delivery / security providers;",
            "Web analytics providers (e.g., Google Analytics);",
            "Scheduling / booking tools used to arrange calls;",
            "Email and communication providers.",
          ] },
          "These providers are bound to protect your personal information and to use it only to provide services to us. We may also disclose personal information where required by law, to protect our rights, or in connection with a business transaction, in each case subject to applicable law.",
        ],
      },
      {
        h: "7. Transfers of personal information outside Quebec",
        blocks: [
          "Some of our service providers (for example, analytics, hosting and scheduling tools) may store or process personal information outside Quebec, including in the United States. Before entrusting personal information to a provider outside Quebec, we conduct a privacy assessment as required by Law 25 to ensure the information receives adequate protection, and we put appropriate contractual safeguards in place.",
        ],
      },
      {
        h: "8. Retention of personal information",
        blocks: [
          "We keep your personal information only for as long as necessary to fulfill the purposes for which it was collected, to maintain our business relationship with you, and to meet our legal obligations. When personal information is no longer needed, we securely destroy, delete or anonymize it in accordance with our retention practices.",
        ],
      },
      {
        h: "9. How we protect your personal information",
        blocks: [
          "We implement reasonable technical, administrative and physical security measures appropriate to the sensitivity of the information to protect it against loss, theft, and unauthorized access, disclosure, copying, use or modification. These measures include access controls, encryption in transit, and limiting access to personnel who need it. No method of transmission or storage is completely secure, but we work to protect your information and to respond appropriately to any confidentiality incident.",
        ],
      },
      {
        h: "10. Your rights under Law 25",
        blocks: [
          "Subject to the conditions and exceptions provided by law, you have the right to:",
          { list: [
            "Access the personal information we hold about you;",
            "Request the correction (rectification) of inaccurate, incomplete or ambiguous personal information;",
            "Withdraw your consent to our use of your personal information;",
            "Request that we cease disseminating your personal information or that a hyperlink be de-indexed where the law allows (right to de-indexation);",
            "Obtain, in a structured, commonly used technological format, the computerized personal information you provided to us (right to portability), where applicable;",
            "Be informed if a decision about you is based exclusively on automated processing of your personal information.",
          ] },
          "To exercise any of these rights, contact our Privacy Officer at " + PRIVACY_EMAIL + ". We will respond within the timeframe required by law (generally 30 days). We may need to verify your identity before acting on your request.",
        ],
      },
      {
        h: "11. Automated decision-making",
        blocks: [
          "Uably does not use your personal information to make decisions about you based exclusively on automated processing. If this changes, we will inform you and provide the information required by Law 25, including the right to submit observations to a member of our personnel.",
        ],
      },
      {
        h: "12. Confidentiality incidents",
        blocks: [
          "If a confidentiality incident involving your personal information occurs and presents a risk of serious injury, we will notify the Commission d\u2019acc\u00e8s \u00e0 l\u2019information du Qu\u00e9bec and affected individuals as required by law, and take reasonable measures to reduce the risk of harm and prevent recurrence.",
        ],
      },
      {
        h: "13. Filing a complaint",
        blocks: [
          "If you have a concern about how we handle your personal information, please contact our Privacy Officer first so we can address it. You also have the right to file a complaint with Quebec\u2019s privacy regulator, the Commission d\u2019acc\u00e8s \u00e0 l\u2019information du Qu\u00e9bec (CAI), at www.cai.gouv.qc.ca.",
        ],
      },
      {
        h: "14. Changes to this policy",
        blocks: [
          "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The \u201cLast updated\u201d date at the top indicates when it was last revised. We encourage you to review this page periodically.",
        ],
      },
      {
        h: "15. Contact us",
        blocks: [
          "For any question about this Privacy Policy or your personal information:",
          { list: [
            `Privacy Officer \u2014 ${PRIVACY_EMAIL}`,
            `General inquiries \u2014 ${CONTACT_EMAIL}`,
            "Uably, 9900 Boulevard Cavendish, Suite 200, Montreal, Quebec, Canada",
          ] },
        ],
      },
    ],
  },

  fr: {
    backHref: "/fr/",
    altHref: "/privacy/",
    altLabel: "EN",
    title: "Politique de confidentialit\u00e9",
    updated: "Derni\u00e8re mise \u00e0 jour : 9 septembre 2026",
    intro:
      "Uably (\u00ab Uably \u00bb, \u00ab nous \u00bb ou \u00ab notre \u00bb) respecte votre vie priv\u00e9e et s\u2019engage \u00e0 prot\u00e9ger les renseignements personnels que vous nous confiez. La pr\u00e9sente politique de confidentialit\u00e9 explique quels renseignements personnels nous recueillons, pourquoi nous les recueillons, comment nous les utilisons et les prot\u00e9geons, ainsi que les droits dont vous disposez en vertu de la Loi sur la protection des renseignements personnels dans le secteur priv\u00e9 du Qu\u00e9bec, telle que modernis\u00e9e par la Loi 25 (Loi modernisant des dispositions l\u00e9gislatives en mati\u00e8re de protection des renseignements personnels), et des autres lois canadiennes applicables en mati\u00e8re de protection de la vie priv\u00e9e.",
    sections: [
      {
        h: "1. Personne responsable de la protection des renseignements personnels",
        blocks: [
          "Conform\u00e9ment \u00e0 la Loi 25, Uably a d\u00e9sign\u00e9 une personne responsable de la protection des renseignements personnels (notre responsable de la protection des renseignements). Cette personne veille au respect des lois applicables et traite les demandes et plaintes concernant vos renseignements personnels.",
          { list: [
            "Titre : Responsable de la protection des renseignements personnels, Uably",
            `Courriel : ${PRIVACY_EMAIL}`,
            "Adresse postale : 9900, boulevard Cavendish, bureau 200, Montr\u00e9al (Qu\u00e9bec), Canada",
          ] },
          "Vous pouvez communiquer avec notre responsable en tout temps pour exercer vos droits, poser une question ou d\u00e9poser une plainte concernant le traitement de vos renseignements personnels.",
        ],
      },
      {
        h: "2. Renseignements personnels que nous recueillons",
        blocks: [
          "Nous ne recueillons que les renseignements personnels n\u00e9cessaires aux fins d\u00e9crites dans la pr\u00e9sente politique. Selon la fa\u00e7on dont vous interagissez avec nous, cela peut comprendre :",
          { list: [
            "Renseignements que vous fournissez directement \u2014 lorsque vous remplissez notre formulaire de contact ou nous \u00e9crivez : votre nom, votre adresse courriel, le sujet de votre message et tout d\u00e9tail que vous choisissez d\u2019inclure sur votre organisation, votre projet, votre \u00e9ch\u00e9ancier ou vos besoins de conformit\u00e9.",
            "Renseignements de rendez-vous \u2014 si vous planifiez un appel d\u00e9couverte, les d\u00e9tails que vous fournissez au moyen de notre outil de prise de rendez-vous.",
            "Renseignements techniques et d\u2019utilisation \u2014 recueillis automatiquement lors de votre visite : adresse IP, localisation approximative, type de navigateur et d\u2019appareil, pages consult\u00e9es, pages r\u00e9f\u00e9rentes et interactions avec le site.",
          ] },
          "Nous ne recueillons pas sciemment de renseignements personnels sensibles (donn\u00e9es de sant\u00e9, de compte financier ou biom\u00e9triques) au moyen de ce site, et nous vous demandons de ne pas transmettre de tels renseignements par le formulaire de contact.",
        ],
      },
      {
        h: "3. Pourquoi nous recueillons et utilisons vos renseignements (finalit\u00e9s)",
        blocks: [
          "Nous utilisons vos renseignements personnels aux fins suivantes :",
          { list: [
            "R\u00e9pondre \u00e0 vos demandes et communiquer avec vous au sujet de nos services;",
            "Planifier et tenir les appels d\u00e9couverte et consultations que vous demandez;",
            "Fournir, exploiter, maintenir et s\u00e9curiser notre site Web;",
            "Comprendre l\u2019utilisation du site et en am\u00e9liorer le contenu et la performance;",
            "Respecter nos obligations l\u00e9gales et r\u00e9glementaires.",
          ] },
          "Nous n\u2019utiliserons pas vos renseignements \u00e0 une nouvelle fin incompatible avec celles ci-dessus sans obtenir votre consentement, sauf si la loi le permet ou l\u2019exige.",
        ],
      },
      {
        h: "4. Consentement",
        blocks: [
          "En fournissant volontairement vos renseignements personnels au moyen de notre formulaire, par courriel ou par notre outil de rendez-vous, vous consentez \u00e0 leur collecte et \u00e0 leur utilisation aux fins d\u00e9crites dans la pr\u00e9sente politique. La communication de vos renseignements est facultative, mais certains renseignements sont n\u00e9cessaires pour que nous puissions vous r\u00e9pondre.",
          "Pour les technologies non essentielles comme les t\u00e9moins d\u2019analyse, nous nous fondons sur votre consentement lorsque requis. Vous pouvez retirer votre consentement en tout temps (voir \u00ab T\u00e9moins et technologies de suivi \u00bb et \u00ab Vos droits \u00bb). Le retrait n\u2019a pas d\u2019effet sur les traitements effectu\u00e9s avant celui-ci.",
        ],
      },
      {
        h: "5. T\u00e9moins (cookies) et technologies de suivi",
        blocks: [
          "Notre site peut utiliser des t\u00e9moins et des technologies similaires. Les t\u00e9moins strictement n\u00e9cessaires sont requis au fonctionnement du site. Avec votre consentement, nous utilisons \u00e9galement des technologies d\u2019analyse pour mesurer et am\u00e9liorer la performance du site.",
          { list: [
            "Analyse \u2014 nous pouvons utiliser Google Analytics 4 pour comprendre, de fa\u00e7on agr\u00e9g\u00e9e et d\u00e9personnalis\u00e9e, l\u2019utilisation du site (pages consult\u00e9es, localisation g\u00e9n\u00e9rale, type d\u2019appareil). Google agit comme fournisseur de services \u00e0 cette fin.",
            "Diffusion de contenu et s\u00e9curit\u00e9 \u2014 nos fournisseurs d\u2019h\u00e9bergement et de diffusion peuvent d\u00e9poser des t\u00e9moins techniques pour livrer le site de fa\u00e7on s\u00e9curis\u00e9e et fiable.",
          ] },
          "Vous pouvez contr\u00f4ler ou d\u00e9sactiver les t\u00e9moins dans les param\u00e8tres de votre navigateur, et vous pouvez vous d\u00e9sinscrire de Google Analytics au moyen du module compl\u00e9mentaire de d\u00e9sactivation. La d\u00e9sactivation des t\u00e9moins peut affecter certaines fonctionnalit\u00e9s.",
        ],
      },
      {
        h: "6. Fournisseurs de services et communication \u00e0 des tiers",
        blocks: [
          "Nous ne vendons pas vos renseignements personnels. Nous pouvons les communiquer \u00e0 des fournisseurs de services de confiance qui les traitent en notre nom et uniquement selon nos instructions, notamment :",
          { list: [
            "Fournisseurs d\u2019h\u00e9bergement et de diffusion / s\u00e9curit\u00e9 du site;",
            "Fournisseurs d\u2019analyse Web (p. ex. Google Analytics);",
            "Outils de prise de rendez-vous;",
            "Fournisseurs de courriel et de communication.",
          ] },
          "Ces fournisseurs sont tenus de prot\u00e9ger vos renseignements et de les utiliser uniquement pour nous fournir des services. Nous pouvons aussi communiquer des renseignements lorsque la loi l\u2019exige, pour prot\u00e9ger nos droits ou dans le cadre d\u2019une transaction commerciale, sous r\u00e9serve des lois applicables.",
        ],
      },
      {
        h: "7. Communication de renseignements \u00e0 l\u2019ext\u00e9rieur du Qu\u00e9bec",
        blocks: [
          "Certains de nos fournisseurs (par exemple pour l\u2019analyse, l\u2019h\u00e9bergement et la prise de rendez-vous) peuvent stocker ou traiter des renseignements personnels \u00e0 l\u2019ext\u00e9rieur du Qu\u00e9bec, notamment aux \u00c9tats-Unis. Avant de confier des renseignements \u00e0 un fournisseur situ\u00e9 hors Qu\u00e9bec, nous r\u00e9alisons une \u00e9valuation des facteurs relatifs \u00e0 la vie priv\u00e9e, comme l\u2019exige la Loi 25, afin de nous assurer que les renseignements b\u00e9n\u00e9ficient d\u2019une protection ad\u00e9quate, et nous mettons en place des garanties contractuelles appropri\u00e9es.",
        ],
      },
      {
        h: "8. Conservation des renseignements personnels",
        blocks: [
          "Nous conservons vos renseignements personnels seulement le temps n\u00e9cessaire pour atteindre les fins pour lesquelles ils ont \u00e9t\u00e9 recueillis, maintenir notre relation d\u2019affaires et respecter nos obligations l\u00e9gales. Lorsqu\u2019ils ne sont plus n\u00e9cessaires, nous les d\u00e9truisons, supprimons ou anonymisons de fa\u00e7on s\u00e9curitaire.",
        ],
      },
      {
        h: "9. Comment nous prot\u00e9geons vos renseignements",
        blocks: [
          "Nous mettons en \u0153uvre des mesures de s\u00e9curit\u00e9 techniques, administratives et physiques raisonnables, adapt\u00e9es \u00e0 la sensibilit\u00e9 des renseignements, pour les prot\u00e9ger contre la perte, le vol et l\u2019acc\u00e8s, la communication, la copie, l\u2019utilisation ou la modification non autoris\u00e9s. Ces mesures comprennent le contr\u00f4le des acc\u00e8s, le chiffrement en transit et la limitation de l\u2019acc\u00e8s au personnel qui en a besoin. Aucune m\u00e9thode de transmission ou de stockage n\u2019est totalement s\u00fbre, mais nous nous effor\u00e7ons de prot\u00e9ger vos renseignements et de r\u00e9agir ad\u00e9quatement \u00e0 tout incident de confidentialit\u00e9.",
        ],
      },
      {
        h: "10. Vos droits en vertu de la Loi 25",
        blocks: [
          "Sous r\u00e9serve des conditions et exceptions pr\u00e9vues par la loi, vous avez le droit de :",
          { list: [
            "Acc\u00e9der aux renseignements personnels que nous d\u00e9tenons \u00e0 votre sujet;",
            "Demander la rectification de renseignements inexacts, incomplets ou \u00e9quivoques;",
            "Retirer votre consentement \u00e0 l\u2019utilisation de vos renseignements;",
            "Demander que nous cessions la diffusion de vos renseignements ou la d\u00e9sindexation d\u2019un hyperlien lorsque la loi le permet (droit \u00e0 la d\u00e9sindexation);",
            "Obtenir, dans un format technologique structur\u00e9 et couramment utilis\u00e9, les renseignements informatis\u00e9s que vous nous avez fournis (droit \u00e0 la portabilit\u00e9), le cas \u00e9ch\u00e9ant;",
            "\u00catre inform\u00e9 si une d\u00e9cision vous concernant est fond\u00e9e exclusivement sur un traitement automatis\u00e9 de vos renseignements.",
          ] },
          "Pour exercer ces droits, communiquez avec notre responsable \u00e0 " + PRIVACY_EMAIL + ". Nous r\u00e9pondrons dans le d\u00e9lai prescrit par la loi (g\u00e9n\u00e9ralement 30 jours). Nous pourrions devoir v\u00e9rifier votre identit\u00e9 avant de donner suite \u00e0 votre demande.",
        ],
      },
      {
        h: "11. D\u00e9cision automatis\u00e9e",
        blocks: [
          "Uably n\u2019utilise pas vos renseignements personnels pour rendre \u00e0 votre sujet une d\u00e9cision fond\u00e9e exclusivement sur un traitement automatis\u00e9. Si cela devait changer, nous vous en informerions et vous fournirions les renseignements exig\u00e9s par la Loi 25, y compris le droit de pr\u00e9senter vos observations \u00e0 un membre de notre personnel.",
        ],
      },
      {
        h: "12. Incidents de confidentialit\u00e9",
        blocks: [
          "En cas d\u2019incident de confidentialit\u00e9 touchant vos renseignements personnels et pr\u00e9sentant un risque de pr\u00e9judice s\u00e9rieux, nous aviserons la Commission d\u2019acc\u00e8s \u00e0 l\u2019information du Qu\u00e9bec et les personnes concern\u00e9es comme l\u2019exige la loi, et prendrons des mesures raisonnables pour r\u00e9duire le risque de pr\u00e9judice et \u00e9viter la r\u00e9currence.",
        ],
      },
      {
        h: "13. D\u00e9p\u00f4t d\u2019une plainte",
        blocks: [
          "Si vous avez une pr\u00e9occupation quant au traitement de vos renseignements personnels, veuillez d\u2019abord communiquer avec notre responsable afin que nous puissions y r\u00e9pondre. Vous avez \u00e9galement le droit de porter plainte aupr\u00e8s de l\u2019autorit\u00e9 qu\u00e9b\u00e9coise, la Commission d\u2019acc\u00e8s \u00e0 l\u2019information du Qu\u00e9bec (CAI), \u00e0 www.cai.gouv.qc.ca.",
        ],
      },
      {
        h: "14. Modifications de la pr\u00e9sente politique",
        blocks: [
          "Nous pouvons mettre \u00e0 jour la pr\u00e9sente politique de temps \u00e0 autre pour refl\u00e9ter des changements dans nos pratiques ou nos obligations l\u00e9gales. La date de \u00ab Derni\u00e8re mise \u00e0 jour \u00bb en haut indique la derni\u00e8re r\u00e9vision. Nous vous invitons \u00e0 consulter cette page p\u00e9riodiquement.",
        ],
      },
      {
        h: "15. Nous joindre",
        blocks: [
          "Pour toute question concernant la pr\u00e9sente politique ou vos renseignements personnels :",
          { list: [
            `Responsable de la protection des renseignements \u2014 ${PRIVACY_EMAIL}`,
            `Demandes g\u00e9n\u00e9rales \u2014 ${CONTACT_EMAIL}`,
            "Uably, 9900, boulevard Cavendish, bureau 200, Montr\u00e9al (Qu\u00e9bec), Canada",
          ] },
        ],
      },
    ],
  },
};

function Block({ block }) {
  if (typeof block === "string") {
    return <p style={{ color: "var(--ink-dim)", fontSize: 16, lineHeight: 1.7, margin: "0 0 16px" }}>{block}</p>;
  }
  return (
    <ul style={{ margin: "0 0 16px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
      {block.list.map((item, i) => (
        <li key={i} style={{ display: "flex", gap: 12, color: "var(--ink-dim)", fontSize: 16, lineHeight: 1.65 }}>
          <span style={{ flexShrink: 0, marginTop: 9, width: 6, height: 6, borderRadius: "50%", background: "var(--blue)" }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LegalPage({ lang }) {
  const t = PRIVACY[lang];
  return (
    <>
      <header style={{ position: "sticky", top: 0, zIndex: 50, padding: "16px 0", background: "rgba(7,10,20,.82)", backdropFilter: "blur(18px) saturate(160%)", WebkitBackdropFilter: "blur(18px) saturate(160%)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <Link href={t.backHref} aria-label="Uably home"><Logo size={30} /></Link>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link href={t.altHref} hrefLang={t.altLabel.toLowerCase()} style={{ fontSize: 12, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.06em", padding: "6px 12px", borderRadius: 999, border: "1px solid var(--line-strong)", color: "var(--ink-dim)" }}>{t.altLabel}</Link>
            <Link href={t.backHref} className="btn btn-ghost" style={{ padding: "9px 16px", fontSize: 13 }}>{lang === "fr" ? "Retour au site" : "Back to site"}</Link>
          </div>
        </div>
      </header>

      <main>
        <section style={{ padding: "72px 0 96px" }}>
          <div className="wrap" style={{ maxWidth: 860 }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>{lang === "fr" ? "Juridique" : "Legal"}</p>
            <h1 className="display" style={{ fontSize: "clamp(36px, 5vw, 60px)", margin: "0 0 14px", letterSpacing: "-0.03em" }}>{t.title}</h1>
            <p style={{ color: "var(--ink-mute)", fontSize: 14, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.05em", margin: "0 0 32px" }}>{t.updated}</p>
            <p style={{ color: "var(--ink)", fontSize: 17, lineHeight: 1.7, margin: "0 0 48px" }}>{t.intro}</p>

            {t.sections.map((s, i) => (
              <div key={i} style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 16px", color: "var(--ink)" }}>{s.h}</h2>
                {s.blocks.map((b, j) => <Block key={j} block={b} />)}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid var(--line)", padding: "40px 0" }}>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", fontSize: 13, color: "var(--ink-mute)" }}>
          <div>\u00a9 {new Date().getFullYear()} Uably. {lang === "fr" ? "Tous droits r\u00e9serv\u00e9s." : "All rights reserved."}</div>
          <Link href={t.backHref} style={{ color: "var(--blue-hi)" }}>{lang === "fr" ? "uably.com" : "uably.com"}</Link>
        </div>
      </footer>
    </>
  );
}
