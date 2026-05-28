// Real Uably content — EN + FR
const COPY = {
  en: {
    nav: ["Home", "About", "Services", "Approach", "Engagements", "FAQ", "Contact"],
    cta: "Schedule a Consultation",

    hero: {
      eyebrow: "20+ Years of Enterprise IT Leadership",
      title: [
        { t: "Transform your IT.", c: "ink" },
        { t: "Strengthen security.", c: "ink" },
        { t: "Scale with confidence.", c: "blue" }
      ],
      sub: "Senior IT consulting for enterprises, financial institutions, and government organizations. From cloud transformation to ISO 27001 compliance — we deliver outcomes, not deliverables.",
      primary: "Schedule a consultation",
      secondary: "Explore our services",
      socialProof: "Trusted by enterprises, financial institutions & government",
      photoLabel: "Drop hero photo (boardroom, leadership, etc.)"
    },

    stats: [
      { k: "20+", l: "Enterprise IT Experience", sub: "Years" },
      { k: "50+", l: "Programs Delivered", sub: "Enterprises" },
      { k: "$50M+", l: "in Programs Led" },
      { k: "ISO 27001 & SOC2", l: "Certifications Delivered" }
    ],

    about: {
      eyebrow: "What sets us apart",
      title: "Big 4 caliber. Zero overhead.",
      body: "We bring enterprise-grade IT leadership to organizations that need real outcomes. Our principal consultant has led transformation programs at Microsoft, IBM, Air Canada, Accenture, and Kyndryl — delivering ISO 27001 certifications, multi-cloud migrations, and secure enterprise platforms that run at scale.",
      bullets: [
        "ISO 27001 & SOC2 delivery",
        "Cloud & datacenter transformation",
        "DevSecOps & agile enablement",
        "Executive advisory & governance",
        "Enterprise architecture & ERP",
        "NIST, SOX & regulatory compliance"
      ],
      profileName: "Uably Consulting",
      profileRole: "Principal Consultant & Founder",
      contactLabel: "Book a discovery call",
      contactEmail: "contact@uably.com",
      badgeNum: "20+",
      badgeWord: "Years",
      badgeSub: "Enterprise IT delivery at scale"
    },

    expertise: {
      eyebrow: "Our expertise",
      title: "Three disciplines. Decades of depth.",
      sub: "Deep, proven capability across the domains that matter most to enterprise IT leaders.",
      tabs: [
        {
          name: "Cloud Transformation",
          h: "Cloud & datacenter transformation",
          p: "We design and execute cloud strategies that reduce infrastructure cost, eliminate complexity, and unlock the scalability your business demands — from AWS migrations to hybrid-cloud architecture.",
          li: [
            "AWS architecture design and migration execution, including lift-and-shift and cloud-native replatforming.",
            "Hybrid cloud and datacenter consolidation — reducing operational overhead without disrupting services.",
            "Cloud governance, cost optimization, and Well-Architected Framework reviews to protect your investment long-term."
          ],
          imgLabel: "Cloud / infra photo"
        },
        {
          name: "Cybersecurity & Compliance",
          h: "Cybersecurity & compliance",
          p: "We guide organizations from security gap analysis through to full certification — implementing controls that satisfy regulators, protect operations, and build board-level confidence.",
          li: [
            "ISO 27001 and SOC2 certification delivery — from scoping and gap analysis to audit readiness.",
            "NIST Cybersecurity Framework and SOX IT general controls implementation for regulated industries.",
            "Security architecture reviews, risk assessments, and remediation roadmaps aligned to your business context.",
            "Fractional CISO services for organizations that need senior security leadership without a full-time hire."
          ],
          imgLabel: "Security / SOC photo"
        },
        {
          name: "DevSecOps & Agile",
          h: "DevSecOps & agile transformation",
          p: "Organizations that embed security into development — rather than adding it after — ship faster, fail less, and satisfy auditors more easily. We make that transition practical and permanent.",
          li: [
            "Secure CI/CD pipeline design — embedding security checks at every stage of the software delivery lifecycle.",
            "Agile and DevOps coaching for engineering teams, including toolchain selection and process design.",
            "Shift-left security practices that reduce vulnerabilities and accelerate release cycles without added risk."
          ],
          imgLabel: "Engineering team photo"
        }
      ]
    },

    why: {
      eyebrow: "Why Uably",
      title: "Four reasons enterprise leaders engage us.",
      cards: [
        { i: "scale", h: "Proven at enterprise scale", p: "Programs delivered at Microsoft, IBM, Air Canada, Accenture, and Kyndryl — at the scale that matters to you." },
        { i: "shield", h: "Security built in, not bolted on", p: "Every engagement embeds compliance from day one — not as an afterthought, but as a foundation." },
        { i: "loop", h: "Strategy through execution", p: "We don't hand off slide decks. We stay through delivery and measure success by outcomes, not hours." },
        { i: "person", h: "Direct principal access", p: "You work with the senior consultant — not a rotating junior team. No account managers between you and expertise." }
      ]
    },

    delivery: {
      eyebrow: "How we deliver",
      title: "Six disciplines that keep programs on the rails.",
      sub: "An operating model built from twenty years inside the world's most demanding IT organizations.",
      left: [
        { h: "Business-first discovery", p: "We start with your goals, constraints, and risk tolerance — not a standard methodology. Every engagement is scoped around your business context." },
        { h: "Risk & compliance by design", p: "Regulatory requirements are embedded from architecture to deployment — not added at the end when they're expensive to fix." },
        { h: "Executive alignment", p: "Regular C-suite briefings, steering committee support, and board-ready reporting — so leadership always knows where programs stand." }
      ],
      right: [
        { h: "Cloud architecture & migration", p: "AWS, hybrid cloud, and datacenter expertise delivered across financial services, aviation, and public sector organizations." },
        { h: "Agile, iterative delivery", p: "Transparent sprints, measurable milestones, and predictable releases — no surprises, no scope creep left unaddressed." },
        { h: "Capability transfer", p: "We build your team's capacity and internal know-how — so when we leave, the capability stays. No dependency on us." }
      ],
      centerLabel: "Dashboard / delivery photo"
    },

    cta1: {
      eyebrow: "Let's start",
      title: "Ready to modernize your IT infrastructure?",
      sub: "Let's discuss your challenges and define a path to secure, scalable, and compliant operations. No obligation — just a focused conversation with a senior consultant.",
      btn: "Book a discovery call"
    },

    clients: {
      eyebrow: "Trusted by senior leadership at",
      items: ["Microsoft", "WSP", "McKesson", "Accenture", "Slalom", "Air Canada", "IBM", "Berger-Levrault", "Banque Nationale", "Desjardins", "Kyndryl"]
    },

    testimonials: {
      eyebrow: "What clients say",
      title: "Outcomes that speak for themselves.",
      sub: "From the leaders who experienced them.",
      items: [
        { name: "David Chen", role: "CTO, Financial Services Enterprise", quote: "Uably brought the kind of structured, executive-level leadership that's hard to find outside the Big 4 — but without the overhead. They delivered our ISO 27001 certification on schedule and left our team significantly stronger." },
        { name: "Marie Tremblay", role: "VP Information Technology, Crown Corporation", quote: "Our cloud migration was stalled for months before Uably stepped in. Within 90 days they had a clear architecture, a delivery plan, and the team aligned. The program closed on time and under budget." },
        { name: "James Okafor", role: "CISO, SaaS Scale-up", quote: "The fractional CISO engagement gave us exactly what we needed — senior security oversight, a credible compliance roadmap, and hands-on support for our SOC2 audit. Our investors and enterprise clients noticed immediately." },
        { name: "Rachel Nguyen", role: "Director of IT, Government Agency", quote: "What stood out was the direct access to a principal-level consultant on every call. No junior intermediaries, no slide decks without substance — just clear thinking and real delivery. Exactly what a complex government program requires." }
      ]
    },

    services: {
      eyebrow: "Services",
      title: "End-to-end consulting where transformation succeeds or stalls.",
      sub: "Four domains. One accountable principal on every engagement.",
      items: [
        { n: "01", icon: "cloud", t: "Cloud & datacenter transformation", d: "AWS migrations, hybrid cloud strategy, and datacenter consolidation. We design and deliver cloud architectures that reduce cost, eliminate single points of failure, and scale with your business — without disrupting operations.", tags: ["AWS", "Hybrid", "Migration"] },
        { n: "02", icon: "shield", t: "Cybersecurity & compliance", d: "ISO 27001, SOC2, NIST, and SOX implementation — from gap analysis to certification. We implement security controls that satisfy regulators, protect operations, and build board-level confidence in your risk posture.", tags: ["ISO 27001", "SOC2", "NIST", "SOX"] },
        { n: "03", icon: "code", t: "DevSecOps & agile transformation", d: "Secure CI/CD pipelines, SDLC modernization, and team enablement. We embed security into every sprint and help engineering organizations deliver faster, with fewer vulnerabilities and stronger audit trails.", tags: ["CI/CD", "SDLC", "Agile"] },
        { n: "04", icon: "diagram", t: "Enterprise architecture & program leadership", d: "System integration, ERP governance, and large-scale program delivery. We provide the technical and organizational leadership to keep complex, multi-stakeholder IT programs on time, on scope, and aligned to business outcomes.", tags: ["EA", "ERP", "Programs"] }
      ],
      readmore: "Discuss this service"
    },

    engagement: {
      eyebrow: "Engagement models",
      title: "Three ways to work with us.",
      sub: "Flexible structures built for the way enterprises actually need to work with senior consultants.",
      included: "What's included:",
      btn: "Discuss this model",
      badge: "Most engaged",
      tiers: [
        {
          name: "Advisory",
          price: "Custom",
          desc: "Strategic guidance for organizations that need senior IT leadership without full-time headcount. Ideal for boards, executives, and leadership teams navigating complex decisions.",
          li: ["Fractional CTO / CISO services", "Architecture and strategy reviews", "Board-ready reporting and briefings"]
        },
        {
          name: "Implementation",
          price: "Custom",
          popular: true,
          desc: "End-to-end delivery of cloud, security, or transformation programs. We own the outcomes alongside your team — from design through go-live and post-launch stabilization.",
          li: ["Cloud migration and architecture", "ISO 27001 / SOC2 certification delivery", "DevSecOps and agile enablement", "Capability transfer to internal teams"]
        },
        {
          name: "Retained Advisory",
          price: "Custom",
          desc: "Ongoing senior advisory on retainer. For organizations that need continuous oversight, governance support, or fractional CISO coverage without the cost of a full-time executive hire.",
          li: ["Monthly governance and risk reviews", "Ongoing vCISO coverage", "Executive and board advisory", "Priority access for emerging issues", "Quarterly strategic roadmap updates"]
        }
      ]
    },

    faq: {
      eyebrow: "FAQ",
      title: "Common questions from enterprise leaders.",
      sub: "Direct answers to the questions executives and IT leaders ask before engaging a senior consultant.",
      items: [
        { q: "What industries do you serve?", a: "We work primarily with enterprises, financial institutions, government agencies, and scaling SaaS companies. Our experience spans aviation (Air Canada), financial services, public sector, and large-scale technology organizations including Microsoft, IBM, Accenture, and Kyndryl." },
        { q: "How do you structure engagements?", a: "We offer three primary models: fixed-scope Advisory (strategic guidance and fractional leadership), Implementation (end-to-end project delivery), and Retained Advisory (ongoing governance and vCISO coverage). Most engagements start with a no-obligation discovery call to define the right structure for your context." },
        { q: "Do you work alongside internal IT teams or independently?", a: "Both. We frequently embed with existing IT and security teams to accelerate delivery and transfer knowledge. Where organizations lack internal capacity, we can lead the workstream directly. In all cases, a core objective is building internal capability — so the organization isn't dependent on us beyond the engagement." },
        { q: "What certifications and frameworks do you support?", a: "We have direct delivery experience with ISO 27001, SOC2 Type I and II, NIST Cybersecurity Framework, SOX IT General Controls, and AWS Well-Architected Framework. We also have experience navigating sector-specific regulatory requirements in financial services and government." },
        { q: "How quickly can you mobilize for a project?", a: "In most cases we can begin a discovery conversation within 48 hours and formally start an engagement within 5–10 business days. For urgent situations — such as a security incident response or a stalled compliance deadline — we prioritize rapid mobilization." },
        { q: "What differentiates Uably from a Big 4 consulting firm?", a: "We deliver the same caliber of thinking and methodology — built from years at organizations like Accenture, IBM, and Microsoft — without the overhead, account management layers, or junior team staffing. You get direct access to a principal-level consultant on every engagement, faster decision cycles, and significantly better value for complex programs that need senior judgment, not headcount." }
      ]
    },

    cta2: {
      title: "Your IT transformation starts here.",
      sub: "Join the enterprises, financial institutions, and government organizations that trust Uably to deliver secure, scalable, and compliant IT — on time and on scope. Let's start with a conversation.",
      btn: "Schedule your free discovery call"
    },

    contact: {
      eyebrow: "Let's talk",
      title: "Let's start a conversation.",
      sub: "Whether you're planning a cloud migration, need compliance guidance, or want a trusted advisor for your leadership team — we're ready.",
      infoTitle: "Get in touch",
      infoSub: "Our engagements start with a no-obligation discovery call. Tell us where you are and where you need to go — we'll take it from there.",
      blocks: [
        { h: "Location", p1: "9900 Boul. Cavendish suite #200", p2: "and remotely" },
        { h: "Schedule a call", p1: "Book a discovery call via email", p2: "Response within 24 hours" },
        { h: "Email address", p1: "contact@uably.com", p2: "For urgent inquiries: info@uably.com" }
      ],
      formTitle: "Send us a message",
      formSub: "Describe your challenge, the scope of what you're working on, and the best way to reach you. We'll respond within one business day.",
      ph: { name: "Your name", email: "Your email", subject: "Subject", message: "Tell us about your program, timeline, and any compliance regime in play…" },
      btn: "Send message"
    },

    footer: {
      addr: ["9900 Boul. Cavendish suite #200", "and internationally"],
      serving: "North America & International",
      email: "contact@uably.com",
      cols: [
        { h: "Quick Links", l: ["Home", "About", "Services", "Engagements", "Contact"] },
        { h: "Our Services", l: ["Cloud Transformation", "Cybersecurity & Compliance", "DevSecOps", "Enterprise Architecture", "IT Program Leadership"] },
        { h: "Expertise", l: ["AWS & Hybrid Cloud", "ISO 27001 & SOC2", "NIST & SOX", "Agile & DevSecOps", "Executive Advisory"] },
        { h: "Industries", l: ["Financial Services", "Government", "Enterprise IT", "SaaS & Technology", "Aviation & Transport"] }
      ],
      rights: "All rights reserved"
    }
  },

  fr: {
    nav: ["Accueil", "À propos", "Services", "Approche", "Mandats", "FAQ", "Contact"],
    cta: "Planifier une consultation",

    hero: {
      eyebrow: "20+ ans de leadership TI d'entreprise",
      title: [
        { t: "Transformez vos TI.", c: "ink" },
        { t: "Renforcez la sécurité.", c: "ink" },
        { t: "Évoluez en toute confiance.", c: "blue" }
      ],
      sub: "Conseil TI senior pour grandes entreprises, institutions financières et organismes gouvernementaux. De la transformation cloud à la conformité ISO 27001 — nous livrons des résultats, pas des livrables.",
      primary: "Planifier une consultation",
      secondary: "Découvrir nos services",
      socialProof: "Approuvé par les entreprises, institutions financières et gouvernement",
      photoLabel: "Déposer une photo (salle de conseil, équipe)"
    },

    stats: [
      { k: "20+", l: "Expérience TI d'entreprise", sub: "Années" },
      { k: "50+", l: "Programmes livrés", sub: "Entreprises" },
      { k: "50 M$+", l: "en programmes dirigés" },
      { k: "ISO 27001 & SOC2", l: "Certifications livrées" }
    ],

    about: {
      eyebrow: "Ce qui nous distingue",
      title: "Calibre Big 4. Zéro structure.",
      body: "Nous apportons un leadership TI de grande entreprise aux organisations qui ont besoin de résultats concrets. Notre consultant principal a dirigé des programmes de transformation chez Microsoft, IBM, Air Canada, Accenture et Kyndryl — livrant des certifications ISO 27001, des migrations multi-cloud et des plateformes d'entreprise sécurisées qui tiennent à l'échelle.",
      bullets: [
        "Livraison ISO 27001 et SOC2",
        "Transformation cloud et centres de données",
        "DevSecOps et activation agile",
        "Conseil exécutif et gouvernance",
        "Architecture d'entreprise et ERP",
        "Conformité NIST, SOX et réglementaire"
      ],
      profileName: "Uably Consulting",
      profileRole: "Consultant principal et fondateur",
      contactLabel: "Réserver un appel exploratoire",
      contactEmail: "contact@uably.com",
      badgeNum: "20+",
      badgeWord: "Ans",
      badgeSub: "Livraison TI d'entreprise à l'échelle"
    },

    expertise: {
      eyebrow: "Notre expertise",
      title: "Trois disciplines. Des décennies de profondeur.",
      sub: "Une capacité approfondie et éprouvée dans les domaines qui comptent le plus pour les dirigeants TI.",
      tabs: [
        {
          name: "Transformation cloud",
          h: "Transformation cloud et centres de données",
          p: "Nous concevons et exécutons des stratégies cloud qui réduisent les coûts d'infrastructure, éliminent la complexité et libèrent l'évolutivité dont votre entreprise a besoin — des migrations AWS à l'architecture hybride.",
          li: [
            "Conception et exécution de migrations AWS, lift-and-shift et replatforming cloud-native.",
            "Consolidation cloud hybride et centres de données — réduction des coûts opérationnels sans perturbation de service.",
            "Gouvernance cloud, optimisation des coûts et revues Well-Architected pour protéger votre investissement."
          ],
          imgLabel: "Photo cloud / infra"
        },
        {
          name: "Cybersécurité et conformité",
          h: "Cybersécurité et conformité",
          p: "Nous accompagnons les organisations de l'analyse des écarts jusqu'à la certification complète — en mettant en œuvre des contrôles qui satisfont les régulateurs et donnent confiance au conseil.",
          li: [
            "Livraison de certifications ISO 27001 et SOC2 — du cadrage à la préparation de l'audit.",
            "Mise en œuvre du cadre NIST et des contrôles SOX pour les industries réglementées.",
            "Revues d'architecture sécurité, évaluations de risques et feuilles de route de remédiation.",
            "Services CISO fractionnés pour les organisations qui ont besoin d'un leadership sécurité senior sans embauche à temps plein."
          ],
          imgLabel: "Photo sécurité / SOC"
        },
        {
          name: "DevSecOps et agile",
          h: "Transformation DevSecOps et agile",
          p: "Les organisations qui intègrent la sécurité au développement livrent plus vite, échouent moins et satisfont plus facilement les auditeurs. Nous rendons cette transition pratique et permanente.",
          li: [
            "Conception de pipelines CI/CD sécurisés — contrôles de sécurité à chaque étape.",
            "Coaching agile et DevOps pour les équipes d'ingénierie, sélection d'outils et conception de processus.",
            "Pratiques shift-left qui réduisent les vulnérabilités et accélèrent les cycles de release."
          ],
          imgLabel: "Photo équipe ingénierie"
        }
      ]
    },

    why: {
      eyebrow: "Pourquoi Uably",
      title: "Quatre raisons pour lesquelles les dirigeants nous engagent.",
      cards: [
        { i: "scale", h: "Éprouvé à l'échelle de l'entreprise", p: "Programmes livrés chez Microsoft, IBM, Air Canada, Accenture et Kyndryl — à l'échelle qui compte pour vous." },
        { i: "shield", h: "Sécurité intégrée, pas ajoutée", p: "Chaque mandat intègre la conformité dès le premier jour — pas en après-coup, mais comme fondation." },
        { i: "loop", h: "De la stratégie à l'exécution", p: "Nous ne déposons pas des présentations. Nous restons jusqu'à la livraison et mesurons par résultats, pas par heures." },
        { i: "person", h: "Accès direct au principal", p: "Vous travaillez avec le consultant principal — pas une équipe junior tournante. Aucun gestionnaire entre vous et l'expertise." }
      ]
    },

    delivery: {
      eyebrow: "Comment nous livrons",
      title: "Six disciplines qui maintiennent les programmes sur les rails.",
      sub: "Un modèle opérationnel construit en vingt ans dans les organisations TI les plus exigeantes au monde.",
      left: [
        { h: "Découverte axée affaires", p: "Nous commençons par vos objectifs, contraintes et tolérance au risque — pas une méthodologie standard. Chaque mandat est cadré autour de votre contexte." },
        { h: "Risque et conformité par conception", p: "Les exigences réglementaires sont intégrées de l'architecture au déploiement — pas ajoutées à la fin quand c'est cher à corriger." },
        { h: "Alignement exécutif", p: "Briefings C-suite réguliers, comités de pilotage et rapports prêts pour le conseil — pour que la direction sache toujours où en sont les programmes." }
      ],
      right: [
        { h: "Architecture et migration cloud", p: "AWS, cloud hybride et expertise centres de données livrés dans les services financiers, l'aviation et le secteur public." },
        { h: "Livraison agile et itérative", p: "Sprints transparents, jalons mesurables et releases prévisibles — pas de surprises, pas de scope creep non adressé." },
        { h: "Transfert de capacité", p: "Nous bâtissons la capacité de votre équipe — pour qu'à notre départ, la capacité reste. Aucune dépendance envers nous." }
      ],
      centerLabel: "Photo tableau de bord / livraison"
    },

    cta1: {
      eyebrow: "Commençons",
      title: "Prêt à moderniser votre infrastructure TI?",
      sub: "Discutons de vos défis et définissons un chemin vers des opérations sécurisées, évolutives et conformes. Sans engagement — juste une conversation ciblée avec un consultant senior.",
      btn: "Réserver un appel exploratoire"
    },

    clients: {
      eyebrow: "Approuvé par la direction chez",
      items: ["Microsoft", "WSP", "McKesson", "Accenture", "Slalom", "Air Canada", "IBM", "Berger-Levrault", "Banque Nationale", "Desjardins", "Kyndryl"]
    },

    testimonials: {
      eyebrow: "Ce que disent les clients",
      title: "Des résultats qui parlent d'eux-mêmes.",
      sub: "Par les dirigeants qui les ont vécus.",
      items: [
        { name: "David Chen", role: "CTO, entreprise de services financiers", quote: "Uably a apporté le type de leadership structuré et exécutif difficile à trouver hors des Big 4 — sans la lourdeur. Ils ont livré notre certification ISO 27001 dans les délais et ont laissé notre équipe nettement plus forte." },
        { name: "Marie Tremblay", role: "VP Technologies de l'information, société d'État", quote: "Notre migration cloud était bloquée depuis des mois avant l'intervention d'Uably. En 90 jours, ils avaient une architecture claire, un plan de livraison et l'équipe alignée. Le programme s'est clos dans les délais et sous budget." },
        { name: "James Okafor", role: "CISO, scale-up SaaS", quote: "Le mandat CISO fractionné nous a donné exactement ce qu'il fallait — supervision sécurité senior, feuille de route de conformité crédible et soutien pratique pour notre audit SOC2. Nos investisseurs et clients d'entreprise l'ont remarqué immédiatement." },
        { name: "Rachel Nguyen", role: "Directrice TI, agence gouvernementale", quote: "Ce qui s'est démarqué, c'est l'accès direct à un consultant principal à chaque appel. Pas d'intermédiaires juniors, pas de présentations sans substance — juste une pensée claire et une vraie livraison. Exactement ce qu'un programme gouvernemental complexe exige." }
      ]
    },

    services: {
      eyebrow: "Services",
      title: "Conseil de bout en bout là où la transformation réussit ou échoue.",
      sub: "Quatre domaines. Un principal responsable sur chaque mandat.",
      items: [
        { n: "01", icon: "cloud", t: "Transformation cloud et centres de données", d: "Migrations AWS, stratégie cloud hybride et consolidation de centres de données. Nous concevons et livrons des architectures cloud qui réduisent les coûts, éliminent les points de défaillance uniques et évoluent avec votre entreprise — sans perturber les opérations.", tags: ["AWS", "Hybride", "Migration"] },
        { n: "02", icon: "shield", t: "Cybersécurité et conformité", d: "Mise en œuvre ISO 27001, SOC2, NIST et SOX — de l'analyse des écarts à la certification. Nous mettons en place des contrôles qui satisfont les régulateurs, protègent les opérations et donnent confiance au conseil sur votre posture de risque.", tags: ["ISO 27001", "SOC2", "NIST", "SOX"] },
        { n: "03", icon: "code", t: "DevSecOps et transformation agile", d: "Pipelines CI/CD sécurisés, modernisation du SDLC et activation des équipes. Nous intégrons la sécurité dans chaque sprint et aidons les organisations d'ingénierie à livrer plus vite, avec moins de vulnérabilités et de meilleures pistes d'audit.", tags: ["CI/CD", "SDLC", "Agile"] },
        { n: "04", icon: "diagram", t: "Architecture d'entreprise et direction de programme", d: "Intégration de systèmes, gouvernance ERP et livraison de programmes à grande échelle. Nous fournissons le leadership technique et organisationnel pour garder les programmes TI complexes dans les délais, le scope et alignés aux résultats d'affaires.", tags: ["AE", "ERP", "Programmes"] }
      ],
      readmore: "Discuter ce service"
    },

    engagement: {
      eyebrow: "Modèles de mandat",
      title: "Trois façons de travailler avec nous.",
      sub: "Des structures flexibles construites pour la façon dont les entreprises ont réellement besoin de travailler avec des consultants seniors.",
      included: "Ce qui est inclus :",
      btn: "Discuter ce modèle",
      badge: "Le plus engagé",
      tiers: [
        { name: "Conseil", price: "Sur mesure", desc: "Orientation stratégique pour les organisations qui ont besoin d'un leadership TI senior sans embauche à temps plein. Idéal pour les conseils, dirigeants et équipes de direction.", li: ["Services CTO / CISO fractionnés", "Revues d'architecture et de stratégie", "Rapports et briefings prêts pour le conseil"] },
        { name: "Mise en œuvre", price: "Sur mesure", popular: true, desc: "Livraison de bout en bout de programmes cloud, sécurité ou transformation. Nous portons les résultats aux côtés de votre équipe — de la conception au démarrage en passant par la stabilisation.", li: ["Migration et architecture cloud", "Livraison de certifications ISO 27001 / SOC2", "Activation DevSecOps et agile", "Transfert de capacité aux équipes internes"] },
        { name: "Conseil sous mandat", price: "Sur mesure", desc: "Conseil senior continu en mandat. Pour les organisations qui ont besoin d'une supervision continue, d'un soutien à la gouvernance ou d'une couverture CISO fractionnée.", li: ["Revues de gouvernance et risque mensuelles", "Couverture vCISO continue", "Conseil exécutif et au conseil", "Accès prioritaire pour les enjeux émergents", "Mises à jour stratégiques trimestrielles"] }
      ]
    },

    faq: {
      eyebrow: "FAQ",
      title: "Questions fréquentes des dirigeants.",
      sub: "Réponses directes aux questions que posent dirigeants et leaders TI avant d'engager un consultant senior.",
      items: [
        { q: "Quelles industries servez-vous?", a: "Nous travaillons principalement avec les grandes entreprises, institutions financières, agences gouvernementales et SaaS en croissance. Notre expérience couvre l'aviation (Air Canada), les services financiers, le secteur public et les grandes organisations technologiques dont Microsoft, IBM, Accenture et Kyndryl." },
        { q: "Comment structurez-vous les mandats?", a: "Nous offrons trois modèles principaux : Conseil à portée fixe (orientation stratégique et leadership fractionné), Mise en œuvre (livraison de projet de bout en bout), et Conseil sous mandat (gouvernance continue et couverture vCISO). La plupart des mandats commencent par un appel exploratoire sans engagement." },
        { q: "Travaillez-vous avec les équipes TI internes ou indépendamment?", a: "Les deux. Nous nous intégrons fréquemment aux équipes TI et sécurité existantes pour accélérer la livraison et transférer les connaissances. Là où les organisations manquent de capacité interne, nous pouvons diriger le flux de travail directement. Dans tous les cas, un objectif central est de bâtir la capacité interne." },
        { q: "Quelles certifications et cadres supportez-vous?", a: "Nous avons une expérience de livraison directe avec ISO 27001, SOC2 Type I et II, NIST Cybersecurity Framework, contrôles SOX et AWS Well-Architected. Nous avons aussi de l'expérience avec les exigences sectorielles en services financiers et gouvernement." },
        { q: "À quelle vitesse pouvez-vous mobiliser?", a: "Dans la plupart des cas, nous pouvons commencer une conversation exploratoire dans les 48 heures et démarrer formellement un mandat dans les 5–10 jours ouvrables. Pour les situations urgentes, nous priorisons une mobilisation rapide." },
        { q: "Qu'est-ce qui distingue Uably d'une firme Big 4?", a: "Nous livrons le même calibre de réflexion et de méthodologie — construit par des années chez Accenture, IBM et Microsoft — sans la lourdeur, les couches de gestion de compte ou les équipes juniors. Vous obtenez un accès direct à un consultant principal sur chaque mandat, des cycles de décision plus rapides et une bien meilleure valeur." }
      ]
    },

    cta2: {
      title: "Votre transformation TI commence ici.",
      sub: "Rejoignez les entreprises, institutions financières et organismes gouvernementaux qui font confiance à Uably pour livrer des TI sécurisées, évolutives et conformes — dans les délais et le scope. Commençons par une conversation.",
      btn: "Planifier votre appel exploratoire gratuit"
    },

    contact: {
      eyebrow: "Parlons-en",
      title: "Commençons une conversation.",
      sub: "Que vous planifiez une migration cloud, ayez besoin d'orientation en conformité ou cherchiez un conseiller pour votre direction — nous sommes prêts.",
      infoTitle: "Nous joindre",
      infoSub: "Nos mandats commencent par un appel exploratoire sans engagement. Dites-nous où vous êtes et où vous voulez aller — nous prendrons le relais.",
      blocks: [
        { h: "Emplacement", p1: "9900 Boul. Cavendish suite #200", p2: "et à distance" },
        { h: "Planifier un appel", p1: "Réservez un appel exploratoire par courriel", p2: "Réponse sous 24 heures" },
        { h: "Adresse courriel", p1: "contact@uably.com", p2: "Pour urgences : info@uably.com" }
      ],
      formTitle: "Envoyez-nous un message",
      formSub: "Décrivez votre défi, la portée de ce sur quoi vous travaillez et la meilleure façon de vous joindre. Nous répondrons sous un jour ouvrable.",
      ph: { name: "Votre nom", email: "Votre courriel", subject: "Sujet", message: "Parlez-nous de votre programme, échéancier et régime de conformité…" },
      btn: "Envoyer le message"
    },

    footer: {
      addr: ["9900 Boul. Cavendish suite #200", "et internationalement"],
      serving: "Amérique du Nord & international",
      email: "contact@uably.com",
      cols: [
        { h: "Liens rapides", l: ["Accueil", "À propos", "Services", "Mandats", "Contact"] },
        { h: "Nos services", l: ["Transformation cloud", "Cybersécurité et conformité", "DevSecOps", "Architecture d'entreprise", "Direction de programmes TI"] },
        { h: "Expertise", l: ["AWS et cloud hybride", "ISO 27001 et SOC2", "NIST et SOX", "Agile et DevSecOps", "Conseil exécutif"] },
        { h: "Industries", l: ["Services financiers", "Gouvernement", "TI d'entreprise", "SaaS et technologie", "Aviation et transport"] }
      ],
      rights: "Tous droits réservés"
    }
  }
};

window.COPY = COPY;
