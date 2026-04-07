const i18n = {
  current: 'en',

  t: {
    en: {
      /* ── NAV ── */
      'nav.home':         'Home',
      'nav.about':        'About',
      'nav.services':     'Services',
      'nav.approach':     'Approach',
      'nav.engagements':  'Engagements',
      'nav.faq':          'FAQ',
      'nav.contact':      'Contact',
      'nav.cta':          'Schedule a Consultation',

      /* ── HERO ── */
      'hero.badge':  '20+ Years of Enterprise IT Leadership',
      'hero.h1':     'Transform Your IT. <br> Strengthen Security. <br> <span class="accent-text">Scale With Confidence.</span>',
      'hero.p':      'Senior IT consulting for enterprises, financial institutions, and government organizations. From cloud transformation to ISO 27001 compliance — we deliver outcomes, not deliverables.',
      'hero.cta1':   'Schedule a Consultation',
      'hero.cta2':   'Explore Our Services',
      'hero.social': 'Trusted by enterprises, financial institutions &amp; government',

      'hero.stat1.h4': '20+ Years',
      'hero.stat1.p':  'Enterprise IT Experience',
      'hero.stat2.h4': '50+ Enterprises',
      'hero.stat2.p':  'Programs Delivered',
      'hero.stat3.h4': '$500M+',
      'hero.stat3.p':  'in Programs Led',
      'hero.stat4.h4': 'ISO 27001 &amp; SOC2',
      'hero.stat4.p':  'Certifications Delivered',

      /* ── ABOUT ── */
      'about.meta':        'WHAT SETS US APART',
      'about.h2':          'Big 4 Caliber. Zero Overhead.',
      'about.p':           'We bring enterprise-grade IT leadership to organizations that need real outcomes. Our principal consultant has led transformation programs at Microsoft, IBM, Air Canada, Accenture, and Kyndryl — delivering ISO 27001 certifications, multi-cloud migrations, and secure enterprise platforms that run at scale.',
      'about.f1':          'ISO 27001 &amp; SOC2 Delivery',
      'about.f2':          'Cloud &amp; Datacenter Transformation',
      'about.f3':          'DevSecOps &amp; Agile Enablement',
      'about.f4':          'Executive Advisory &amp; Governance',
      'about.f5':          'Enterprise Architecture &amp; ERP',
      'about.f6':          'NIST, SOX &amp; Regulatory Compliance',
      'about.profile.pos': 'Principal Consultant &amp; Founder',
      'about.cta.label':   'Book a discovery call',
      'about.badge.span':  'Years',
      'about.badge.p':     'Enterprise IT delivery at scale',

      /* ── EXPERTISE (Features) ── */
      'exp.title':    'Our Expertise',
      'exp.subtitle': 'Deep, proven capability across the domains that matter most to enterprise IT leaders',
      'exp.tab1':     'Cloud Transformation',
      'exp.tab2':     'Cybersecurity &amp; Compliance',
      'exp.tab3':     'DevSecOps &amp; Agile',

      'exp.t1.h3':  'Cloud &amp; Datacenter Transformation',
      'exp.t1.p':   'We design and execute cloud strategies that reduce infrastructure cost, eliminate complexity, and unlock the scalability your business demands — from AWS migrations to hybrid-cloud architecture.',
      'exp.t1.li1': 'AWS architecture design and migration execution, including lift-and-shift and cloud-native replatforming.',
      'exp.t1.li2': 'Hybrid cloud and datacenter consolidation — reducing operational overhead without disrupting services.',
      'exp.t1.li3': 'Cloud governance, cost optimization, and Well-Architected Framework reviews to protect your investment long-term.',

      'exp.t2.h3':  'Cybersecurity &amp; Compliance',
      'exp.t2.p':   'We guide organizations from security gap analysis through to full certification — implementing controls that satisfy regulators, protect operations, and build board-level confidence.',
      'exp.t2.li1': 'ISO 27001 and SOC2 certification delivery — from scoping and gap analysis to audit readiness.',
      'exp.t2.li2': 'NIST Cybersecurity Framework and SOX IT general controls implementation for regulated industries.',
      'exp.t2.li3': 'Security architecture reviews, risk assessments, and remediation roadmaps aligned to your business context.',
      'exp.t2.li4': 'Fractional CISO services for organizations that need senior security leadership without a full-time hire.',

      'exp.t3.h3':  'DevSecOps &amp; Agile Transformation',
      'exp.t3.li1': 'Secure CI/CD pipeline design — embedding security checks at every stage of the software delivery lifecycle.',
      'exp.t3.li2': 'Agile and DevOps coaching for engineering teams, including toolchain selection and process design.',
      'exp.t3.li3': 'Shift-left security practices that reduce vulnerabilities and accelerate release cycles without added risk.',
      'exp.t3.p':   'Organizations that embed security into development — rather than adding it after — ship faster, fail less, and satisfy auditors more easily. We make that transition practical and permanent.',

      /* ── WHY UABLY (Feature Cards) ── */
      'why.c1.h4': 'Proven at Enterprise Scale',
      'why.c1.p':  'Programs delivered at Microsoft, IBM, Air Canada, Accenture, and Kyndryl — at the scale that matters to you.',
      'why.c2.h4': 'Security Built In, Not Bolted On',
      'why.c2.p':  'Every engagement embeds compliance from day one — not as an afterthought, but as a foundation.',
      'why.c3.h4': 'Strategy Through Execution',
      'why.c3.p':  'We don\'t hand off slide decks. We stay through delivery and measure success by outcomes, not hours.',
      'why.c4.h4': 'Direct Principal Access',
      'why.c4.p':  'You work with the senior consultant — not a rotating junior team. No account managers between you and expertise.',

      /* ── DELIVERY MODEL (Features 2) ── */
      'del.l1.h3': 'Business-First Discovery',
      'del.l1.p':  'We start with your goals, constraints, and risk tolerance — not a standard methodology. Every engagement is scoped around your business context.',
      'del.l2.h3': 'Risk &amp; Compliance by Design',
      'del.l2.p':  'Regulatory requirements are embedded from architecture to deployment — not added at the end when they\'re expensive to fix.',
      'del.l3.h3': 'Executive Alignment',
      'del.l3.p':  'Regular C-suite briefings, steering committee support, and board-ready reporting — so leadership always knows where programs stand.',
      'del.r1.h3': 'Cloud Architecture &amp; Migration',
      'del.r1.p':  'AWS, hybrid cloud, and datacenter expertise delivered across financial services, aviation, and public sector organizations.',
      'del.r2.h3': 'Agile, Iterative Delivery',
      'del.r2.p':  'Transparent sprints, measurable milestones, and predictable releases — no surprises, no scope creep left unaddressed.',
      'del.r3.h3': 'Capability Transfer',
      'del.r3.p':  'We build your team\'s capacity and internal know-how — so when we leave, the capability stays. No dependency on us.',

      /* ── CTA 1 ── */
      'cta1.h2':  'Ready to Modernize Your IT Infrastructure?',
      'cta1.p':   'Let\'s discuss your challenges and define a path to secure, scalable, and compliant operations. No obligation — just a focused conversation with a senior consultant.',
      'cta1.btn': 'Book a Discovery Call',

      /* ── TESTIMONIALS ── */
      'test.title':    'What Clients Say',
      'test.subtitle': 'Outcomes that speak for themselves — from the leaders who experienced them',
      'test.1.role':   'CTO, Financial Services Enterprise',
      'test.1.quote':  'Uably brought the kind of structured, executive-level leadership that\'s hard to find outside the Big 4 — but without the overhead. They delivered our ISO 27001 certification on schedule and left our team significantly stronger.',
      'test.2.role':   'VP Information Technology, Crown Corporation',
      'test.2.quote':  'Our cloud migration was stalled for months before Uably stepped in. Within 90 days they had a clear architecture, a delivery plan, and the team aligned. The program closed on time and under budget.',
      'test.3.role':   'CISO, SaaS Scale-up',
      'test.3.quote':  'The fractional CISO engagement gave us exactly what we needed — senior security oversight, a credible compliance roadmap, and hands-on support for our SOC2 audit. Our investors and enterprise clients noticed immediately.',
      'test.4.role':   'Director of IT, Government Agency',
      'test.4.quote':  'What stood out was the direct access to a principal-level consultant on every call. No junior intermediaries, no slide decks without substance — just clear thinking and real delivery. Exactly what a complex government program requires.',

      /* ── STATS ── */
      'stats.1': 'Years of Enterprise IT Experience',
      'stats.2': 'Enterprise Engagements Delivered',
      'stats.3': 'Security Certifications Delivered',
      'stats.4': '$M+ in Programs Led',

      /* ── SERVICES ── */
      'svc.title':    'Services',
      'svc.subtitle': 'End-to-end consulting across the four domains where enterprise IT transformation succeeds or stalls',
      'svc.1.h3':     'Cloud &amp; Datacenter Transformation',
      'svc.1.p':      'AWS migrations, hybrid cloud strategy, and datacenter consolidation. We design and deliver cloud architectures that reduce cost, eliminate single points of failure, and scale with your business — without disrupting operations.',
      'svc.2.h3':     'Cybersecurity &amp; Compliance',
      'svc.2.p':      'ISO 27001, SOC2, NIST, and SOX implementation — from gap analysis to certification. We implement security controls that satisfy regulators, protect operations, and build board-level confidence in your risk posture.',
      'svc.3.h3':     'DevSecOps &amp; Agile Transformation',
      'svc.3.p':      'Secure CI/CD pipelines, SDLC modernization, and team enablement. We embed security into every sprint and help engineering organizations deliver faster, with fewer vulnerabilities and stronger audit trails.',
      'svc.4.h3':     'Enterprise Architecture &amp; Program Leadership',
      'svc.4.p':      'System integration, ERP governance, and large-scale program delivery. We provide the technical and organizational leadership to keep complex, multi-stakeholder IT programs on time, on scope, and aligned to business outcomes.',
      'svc.readmore': 'Discuss This Service',

      /* ── ENGAGEMENTS ── */
      'eng.title':     'Engagement Models',
      'eng.subtitle':  'Flexible structures built for the way enterprises actually need to work with senior consultants',
      'eng.included':  'What\'s Included:',
      'eng.badge':     'Most Engaged',
      'eng.1.h3':      'Advisory',
      'eng.1.price':   'Custom Pricing',
      'eng.1.desc':    'Strategic guidance for organizations that need senior IT leadership without full-time headcount. Ideal for boards, executives, and leadership teams navigating complex decisions.',
      'eng.1.li1':     'Fractional CTO / CISO services',
      'eng.1.li2':     'Architecture and strategy reviews',
      'eng.1.li3':     'Board-ready reporting and briefings',
      'eng.2.h3':      'Implementation',
      'eng.2.price':   'Custom Pricing',
      'eng.2.desc':    'End-to-end delivery of cloud, security, or transformation programs. We own the outcomes alongside your team — from design through go-live and post-launch stabilization.',
      'eng.2.li1':     'Cloud migration and architecture',
      'eng.2.li2':     'ISO 27001 / SOC2 certification delivery',
      'eng.2.li3':     'DevSecOps and Agile enablement',
      'eng.2.li4':     'Capability transfer to internal teams',
      'eng.3.h3':      'Retained Advisory',
      'eng.3.price':   'Custom Pricing',
      'eng.3.desc':    'Ongoing senior advisory on retainer. For organizations that need continuous oversight, governance support, or fractional CISO coverage without the cost of a full-time executive hire.',
      'eng.3.li1':     'Monthly governance and risk reviews',
      'eng.3.li2':     'Ongoing vCISO coverage',
      'eng.3.li3':     'Executive and board advisory',
      'eng.3.li4':     'Priority access for emerging issues',
      'eng.3.li5':     'Quarterly strategic roadmap updates',
      'eng.btn':       'Discuss This Model',

      /* ── FAQ ── */
      'faq.title': 'Common Questions from Enterprise Leaders',
      'faq.desc':  'Direct answers to the questions executives and IT leaders ask before engaging a senior consultant.',
      'faq.q1': 'What industries do you serve?',
      'faq.a1': 'We work primarily with enterprises, financial institutions, government agencies, and scaling SaaS companies. Our experience spans aviation (Air Canada), financial services, public sector, and large-scale technology organizations including Microsoft, IBM, Accenture, and Kyndryl.',
      'faq.q2': 'How do you structure engagements?',
      'faq.a2': 'We offer three primary models: fixed-scope Advisory (strategic guidance and fractional leadership), Implementation (end-to-end project delivery), and Retained Advisory (ongoing governance and vCISO coverage). Most engagements start with a no-obligation discovery call to define the right structure for your context.',
      'faq.q3': 'Do you work alongside internal IT teams or independently?',
      'faq.a3': 'Both. We frequently embed with existing IT and security teams to accelerate delivery and transfer knowledge. Where organizations lack internal capacity, we can lead the workstream directly. In all cases, a core objective is building internal capability — so the organization isn\'t dependent on us beyond the engagement.',
      'faq.q4': 'What certifications and frameworks do you support?',
      'faq.a4': 'We have direct delivery experience with ISO 27001, SOC2 Type I and II, NIST Cybersecurity Framework, SOX IT General Controls, and AWS Well-Architected Framework. We also have experience navigating sector-specific regulatory requirements in financial services and government.',
      'faq.q5': 'How quickly can you mobilize for a project?',
      'faq.a5': 'In most cases we can begin a discovery conversation within 48 hours and formally start an engagement within 5–10 business days. For urgent situations — such as a security incident response or a stalled compliance deadline — we prioritize rapid mobilization.',
      'faq.q6': 'What differentiates Uably from a Big 4 consulting firm?',
      'faq.a6': 'We deliver the same caliber of thinking and methodology — built from years at organizations like Accenture, IBM, and Microsoft — without the overhead, account management layers, or junior team staffing. You get direct access to a principal-level consultant on every engagement, faster decision cycles, and significantly better value for complex programs that need senior judgment, not headcount.',

      /* ── CTA 2 ── */
      'cta2.h3':  'Your IT Transformation Starts Here',
      'cta2.p':   'Join the enterprises, financial institutions, and government organizations that trust Uably to deliver secure, scalable, and compliant IT — on time and on scope. Let\'s start with a conversation.',
      'cta2.btn': 'Schedule Your Free Discovery Call',

      /* ── CONTACT ── */
      'contact.title':        'Let\'s Start a Conversation',
      'contact.subtitle':     'Whether you\'re planning a cloud migration, need compliance guidance, or want a trusted advisor for your leadership team — we\'re ready',
      'contact.box.h3':       'Get In Touch',
      'contact.box.p':        'Our engagements start with a no-obligation discovery call. Tell us where you are and where you need to go — we\'ll take it from there.',
      'contact.loc.h4':       'Location',
      'contact.loc.p1':       'Serving clients across North America',
      'contact.loc.p2':       'and internationally',
      'contact.phone.h4':     'Schedule a Call',
      'contact.phone.p1':     'Book a discovery call via email',
      'contact.phone.p2':     'Response within 24 hours',
      'contact.email.h4':     'Email Address',
      'contact.form.h3':      'Send Us a Message',
      'contact.form.p':       'Describe your challenge, the scope of what you\'re working on, and the best way to reach you. We\'ll respond within one business day.',
      'contact.form.name':    'Your Name',
      'contact.form.email':   'Your Email',
      'contact.form.subject': 'Subject',
      'contact.form.msg':     'Message',
      'contact.form.btn':     'Send Message',

      /* ── FOOTER ── */
      'footer.links':    'Quick Links',
      'footer.services': 'Our Services',
      'footer.exp':      'Expertise',
      'footer.ind':      'Industries',
      'footer.svc1':     'Cloud Transformation',
      'footer.svc2':     'Cybersecurity &amp; Compliance',
      'footer.svc3':     'DevSecOps',
      'footer.svc4':     'Enterprise Architecture',
      'footer.svc5':     'IT Program Leadership',
      'footer.exp1':     'AWS &amp; Hybrid Cloud',
      'footer.exp2':     'ISO 27001 &amp; SOC2',
      'footer.exp3':     'NIST &amp; SOX',
      'footer.exp4':     'Agile &amp; DevSecOps',
      'footer.exp5':     'Executive Advisory',
      'footer.ind1':     'Financial Services',
      'footer.ind2':     'Government',
      'footer.ind3':     'Enterprise IT',
      'footer.ind4':     'SaaS &amp; Technology',
      'footer.ind5':     'Aviation &amp; Transport',
      'footer.rights':   'All Rights Reserved',
    },

    /* ════════════════════════════════════════
       FRENCH
    ════════════════════════════════════════ */
    fr: {
      /* ── NAV ── */
      'nav.home':         'Accueil',
      'nav.about':        'À propos',
      'nav.services':     'Services',
      'nav.approach':     'Approche',
      'nav.engagements':  'Engagements',
      'nav.faq':          'FAQ',
      'nav.contact':      'Contact',
      'nav.cta':          'Planifier une consultation',

      /* ── HERO ── */
      'hero.badge':  '20+ ans de leadership en TI d\'entreprise',
      'hero.h1':     'Transformez vos TI. <br> Renforcez la sécurité. <br> <span class="accent-text">Évoluez en toute confiance.</span>',
      'hero.p':      'Conseil TI senior pour les entreprises, institutions financières et organismes gouvernementaux. De la transformation cloud à la conformité ISO 27001 — nous livrons des résultats, pas des livrables.',
      'hero.cta1':   'Planifier une consultation',
      'hero.cta2':   'Explorer nos services',
      'hero.social': 'Approuvé par les entreprises, institutions financières et gouvernements',

      'hero.stat1.h4': '20+ ans',
      'hero.stat1.p':  'Expérience TI d\'entreprise',
      'hero.stat2.h4': '50+ entreprises',
      'hero.stat2.p':  'Programmes livrés',
      'hero.stat3.h4': '500 M$+',
      'hero.stat3.p':  'en programmes dirigés',
      'hero.stat4.h4': 'ISO 27001 &amp; SOC2',
      'hero.stat4.p':  'Certifications livrées',

      /* ── ABOUT ── */
      'about.meta':        'CE QUI NOUS DISTINGUE',
      'about.h2':          'Calibre Big 4. Zéro surcoût.',
      'about.p':           'Nous apportons un leadership TI de niveau entreprise aux organisations qui ont besoin de résultats concrets. Notre consultant principal a dirigé des programmes de transformation chez Microsoft, IBM, Air Canada, Accenture et Kyndryl — livrant des certifications ISO 27001, des migrations multi-cloud et des plateformes d\'entreprise sécurisées à grande échelle.',
      'about.f1':          'Livraison ISO 27001 &amp; SOC2',
      'about.f2':          'Transformation Cloud &amp; Datacenter',
      'about.f3':          'Activation DevSecOps &amp; Agile',
      'about.f4':          'Conseil exécutif &amp; Gouvernance',
      'about.f5':          'Architecture d\'entreprise &amp; ERP',
      'about.f6':          'Conformité NIST, SOX &amp; Réglementaire',
      'about.profile.pos': 'Consultant principal &amp; Fondateur',
      'about.cta.label':   'Réserver un appel découverte',
      'about.badge.span':  'ans',
      'about.badge.p':     'Livraison TI d\'entreprise à grande échelle',

      /* ── EXPERTISE ── */
      'exp.title':    'Notre expertise',
      'exp.subtitle': 'Des capacités éprouvées dans les domaines les plus importants pour les leaders TI d\'entreprise',
      'exp.tab1':     'Transformation Cloud',
      'exp.tab2':     'Cybersécurité &amp; Conformité',
      'exp.tab3':     'DevSecOps &amp; Agile',

      'exp.t1.h3':  'Transformation Cloud &amp; Datacenter',
      'exp.t1.p':   'Nous concevons et exécutons des stratégies cloud qui réduisent les coûts d\'infrastructure, éliminent la complexité et libèrent l\'évolutivité qu\'exige votre entreprise — des migrations AWS à l\'architecture cloud hybride.',
      'exp.t1.li1': 'Conception d\'architecture AWS et exécution de migration, y compris lift-and-shift et replatforming natif cloud.',
      'exp.t1.li2': 'Consolidation cloud hybride et datacenter — réduction des surcoûts opérationnels sans interruption de service.',
      'exp.t1.li3': 'Gouvernance cloud, optimisation des coûts et révisions Well-Architected Framework pour protéger votre investissement à long terme.',

      'exp.t2.h3':  'Cybersécurité &amp; Conformité',
      'exp.t2.p':   'Nous guidons les organisations de l\'analyse des lacunes de sécurité jusqu\'à la certification complète — en mettant en œuvre des contrôles qui satisfont les régulateurs, protègent les opérations et renforcent la confiance au niveau du conseil d\'administration.',
      'exp.t2.li1': 'Livraison des certifications ISO 27001 et SOC2 — de la définition du périmètre à la préparation à l\'audit.',
      'exp.t2.li2': 'Mise en œuvre du cadre de cybersécurité NIST et des contrôles généraux TI SOX pour les secteurs réglementés.',
      'exp.t2.li3': 'Révisions d\'architecture de sécurité, évaluations des risques et feuilles de route de remédiation alignées sur votre contexte d\'affaires.',
      'exp.t2.li4': 'Services RSSI fractionné pour les organisations qui ont besoin d\'un leadership sécurité senior sans embauche à temps plein.',

      'exp.t3.h3':  'Transformation DevSecOps &amp; Agile',
      'exp.t3.li1': 'Conception de pipelines CI/CD sécurisés — intégrant des contrôles de sécurité à chaque étape du cycle de livraison logicielle.',
      'exp.t3.li2': 'Coaching Agile et DevOps pour les équipes d\'ingénierie, incluant la sélection de la chaîne d\'outils et la conception des processus.',
      'exp.t3.li3': 'Pratiques de sécurité shift-left qui réduisent les vulnérabilités et accélèrent les cycles de livraison sans risque supplémentaire.',
      'exp.t3.p':   'Les organisations qui intègrent la sécurité dans le développement — plutôt que de l\'ajouter après — livrent plus vite, échouent moins et satisfont plus facilement les auditeurs. Nous rendons cette transition pratique et permanente.',

      /* ── WHY UABLY ── */
      'why.c1.h4': 'Prouvé à l\'échelle de l\'entreprise',
      'why.c1.p':  'Programmes livrés chez Microsoft, IBM, Air Canada, Accenture et Kyndryl — à l\'échelle qui compte pour vous.',
      'why.c2.h4': 'Sécurité intégrée, pas ajoutée',
      'why.c2.p':  'Chaque engagement intègre la conformité dès le premier jour — pas comme une réflexion après coup, mais comme une fondation.',
      'why.c3.h4': 'De la stratégie à l\'exécution',
      'why.c3.p':  'Nous ne remettons pas des présentations. Nous restons jusqu\'à la livraison et mesurons le succès par les résultats, pas les heures.',
      'why.c4.h4': 'Accès direct au consultant principal',
      'why.c4.p':  'Vous travaillez avec le consultant senior — pas une équipe juniors tournante. Aucun gestionnaire de compte entre vous et l\'expertise.',

      /* ── DELIVERY MODEL ── */
      'del.l1.h3': 'Découverte axée sur l\'entreprise',
      'del.l1.p':  'Nous commençons par vos objectifs, contraintes et tolérance au risque — pas une méthodologie standard. Chaque engagement est défini autour de votre contexte d\'affaires.',
      'del.l2.h3': 'Risque &amp; Conformité par conception',
      'del.l2.p':  'Les exigences réglementaires sont intégrées de l\'architecture au déploiement — pas ajoutées à la fin quand elles coûtent cher à corriger.',
      'del.l3.h3': 'Alignement exécutif',
      'del.l3.p':  'Briefings réguliers du comité de direction, soutien au comité directeur et rapports prêts pour le conseil d\'administration — afin que les dirigeants sachent toujours où en sont les programmes.',
      'del.r1.h3': 'Architecture Cloud &amp; Migration',
      'del.r1.p':  'Expertise AWS, cloud hybride et datacenter livrée dans les services financiers, l\'aviation et les organismes du secteur public.',
      'del.r2.h3': 'Livraison Agile et itérative',
      'del.r2.p':  'Sprints transparents, jalons mesurables et livraisons prévisibles — aucune surprise, aucune dérive de périmètre laissée sans réponse.',
      'del.r3.h3': 'Transfert de compétences',
      'del.r3.p':  'Nous développons la capacité et le savoir-faire interne de votre équipe — afin que lorsque nous partons, les compétences restent. Aucune dépendance envers nous.',

      /* ── CTA 1 ── */
      'cta1.h2':  'Prêt à moderniser votre infrastructure TI\u00A0?',
      'cta1.p':   'Discutons de vos défis et définissons un chemin vers des opérations sécurisées, évolutives et conformes. Sans obligation — juste une conversation ciblée avec un consultant senior.',
      'cta1.btn': 'Réserver un appel découverte',

      /* ── TESTIMONIALS ── */
      'test.title':    'Ce que disent nos clients',
      'test.subtitle': 'Des résultats qui parlent d\'eux-mêmes — de la part des leaders qui les ont vécus',
      'test.1.role':   'DT, Entreprise de services financiers',
      'test.1.quote':  'Uably a apporté le type de leadership structuré et de niveau exécutif difficile à trouver en dehors du Big 4 — mais sans le surcoût. Ils ont livré notre certification ISO 27001 dans les délais et ont considérablement renforcé notre équipe.',
      'test.2.role':   'VP Technologies de l\'information, Société de la Couronne',
      'test.2.quote':  'Notre migration cloud était bloquée depuis des mois avant qu\'Uably intervienne. En 90 jours, ils avaient une architecture claire, un plan de livraison et l\'équipe alignée. Le programme s\'est conclu dans les délais et sous le budget.',
      'test.3.role':   'RSSI, SaaS en croissance',
      'test.3.quote':  'L\'engagement RSSI fractionné nous a donné exactement ce dont nous avions besoin — supervision sécurité senior, une feuille de route de conformité crédible et un soutien concret pour notre audit SOC2. Nos investisseurs et clients entreprise l\'ont immédiatement remarqué.',
      'test.4.role':   'Directrice TI, Organisme gouvernemental',
      'test.4.quote':  'Ce qui nous a marqués, c\'est l\'accès direct à un consultant de niveau principal à chaque appel. Aucun intermédiaire junior, aucune présentation sans substance — juste une pensée claire et une livraison réelle. Exactement ce qu\'exige un programme gouvernemental complexe.',

      /* ── STATS ── */
      'stats.1': 'Ans d\'expérience TI d\'entreprise',
      'stats.2': 'Engagements d\'entreprise livrés',
      'stats.3': 'Certifications sécurité livrées',
      'stats.4': 'M$+ en programmes gérés',

      /* ── SERVICES ── */
      'svc.title':    'Services',
      'svc.subtitle': 'Conseil de bout en bout dans les quatre domaines où la transformation TI d\'entreprise réussit ou échoue',
      'svc.1.h3':     'Transformation Cloud &amp; Datacenter',
      'svc.1.p':      'Migrations AWS, stratégie cloud hybride et consolidation de datacenter. Nous concevons et livrons des architectures cloud qui réduisent les coûts, éliminent les points de défaillance uniques et évoluent avec votre entreprise — sans interrompre les opérations.',
      'svc.2.h3':     'Cybersécurité &amp; Conformité',
      'svc.2.p':      'Mise en œuvre ISO 27001, SOC2, NIST et SOX — de l\'analyse des lacunes à la certification. Nous mettons en place des contrôles de sécurité qui satisfont les régulateurs, protègent les opérations et renforcent la confiance du conseil d\'administration dans votre posture de risque.',
      'svc.3.h3':     'Transformation DevSecOps &amp; Agile',
      'svc.3.p':      'Pipelines CI/CD sécurisés, modernisation du SDLC et activation des équipes. Nous intégrons la sécurité dans chaque sprint et aidons les organisations d\'ingénierie à livrer plus vite, avec moins de vulnérabilités et des pistes d\'audit plus solides.',
      'svc.4.h3':     'Architecture d\'entreprise &amp; Leadership de programme',
      'svc.4.p':      'Intégration des systèmes, gouvernance ERP et livraison de programmes à grande échelle. Nous fournissons le leadership technique et organisationnel pour maintenir les programmes TI complexes dans les délais, le périmètre et alignés sur les résultats d\'affaires.',
      'svc.readmore': 'Discuter de ce service',

      /* ── ENGAGEMENTS ── */
      'eng.title':     'Modèles d\'engagement',
      'eng.subtitle':  'Des structures flexibles conçues pour la façon dont les entreprises ont réellement besoin de travailler avec des consultants senior',
      'eng.included':  'Ce qui est inclus\u00A0:',
      'eng.badge':     'Le plus populaire',
      'eng.1.h3':      'Conseil',
      'eng.1.price':   'Tarification personnalisée',
      'eng.1.desc':    'Orientation stratégique pour les organisations qui ont besoin d\'un leadership TI senior sans effectif à temps plein. Idéal pour les conseils d\'administration, dirigeants et équipes de direction naviguant des décisions complexes.',
      'eng.1.li1':     'Services CTO / RSSI fractionné',
      'eng.1.li2':     'Révisions d\'architecture et de stratégie',
      'eng.1.li3':     'Rapports et briefings prêts pour le conseil d\'administration',
      'eng.2.h3':      'Mise en œuvre',
      'eng.2.price':   'Tarification personnalisée',
      'eng.2.desc':    'Livraison de bout en bout de programmes cloud, sécurité ou transformation. Nous assumons les résultats aux côtés de votre équipe — de la conception à la mise en service et la stabilisation post-lancement.',
      'eng.2.li1':     'Migration cloud et architecture',
      'eng.2.li2':     'Livraison des certifications ISO 27001 / SOC2',
      'eng.2.li3':     'Activation DevSecOps et Agile',
      'eng.2.li4':     'Transfert de compétences aux équipes internes',
      'eng.3.h3':      'Conseil en rétention',
      'eng.3.price':   'Tarification personnalisée',
      'eng.3.desc':    'Conseil senior continu en rétention. Pour les organisations qui ont besoin d\'une supervision continue, d\'un soutien à la gouvernance ou d\'une couverture RSSI fractionné sans le coût d\'une embauche d\'exécutif à temps plein.',
      'eng.3.li1':     'Révisions mensuelles de gouvernance et de risques',
      'eng.3.li2':     'Couverture vRSSI continue',
      'eng.3.li3':     'Conseil exécutif et au conseil d\'administration',
      'eng.3.li4':     'Accès prioritaire pour les problèmes émergents',
      'eng.3.li5':     'Mises à jour trimestrielles de la feuille de route stratégique',
      'eng.btn':       'Discuter de ce modèle',

      /* ── FAQ ── */
      'faq.title': 'Questions fréquentes des leaders d\'entreprise',
      'faq.desc':  'Réponses directes aux questions que posent les dirigeants et leaders TI avant d\'engager un consultant senior.',
      'faq.q1': 'Quels secteurs servez-vous\u00A0?',
      'faq.a1': 'Nous travaillons principalement avec des entreprises, institutions financières, agences gouvernementales et entreprises SaaS en croissance. Notre expérience couvre l\'aviation (Air Canada), les services financiers, le secteur public et les grandes organisations technologiques dont Microsoft, IBM, Accenture et Kyndryl.',
      'faq.q2': 'Comment structurez-vous les engagements\u00A0?',
      'faq.a2': 'Nous proposons trois modèles principaux : Conseil à périmètre fixe (orientation stratégique et leadership fractionné), Mise en œuvre (livraison de projet de bout en bout) et Conseil en rétention (gouvernance continue et couverture vRSSI). La plupart des engagements débutent par un appel découverte sans obligation pour définir la structure adaptée à votre contexte.',
      'faq.q3': 'Travaillez-vous avec les équipes TI internes ou de façon indépendante\u00A0?',
      'faq.a3': 'Les deux. Nous nous intégrons fréquemment aux équipes TI et sécurité existantes pour accélérer la livraison et transférer les connaissances. Lorsque les organisations manquent de capacité interne, nous pouvons diriger le flux de travail directement. Dans tous les cas, un objectif central est de développer la capacité interne — afin que l\'organisation ne dépende pas de nous au-delà de l\'engagement.',
      'faq.q4': 'Quelles certifications et cadres soutenez-vous\u00A0?',
      'faq.a4': 'Nous avons une expérience directe de livraison avec ISO 27001, SOC2 Type I et II, le cadre de cybersécurité NIST, les contrôles généraux TI SOX et le AWS Well-Architected Framework. Nous avons également l\'expérience des exigences réglementaires sectorielles dans les services financiers et le gouvernement.',
      'faq.q5': 'À quelle vitesse pouvez-vous vous mobiliser pour un projet\u00A0?',
      'faq.a5': 'Dans la plupart des cas, nous pouvons commencer une conversation de découverte en 48 heures et démarrer formellement un engagement en 5 à 10 jours ouvrables. Pour les situations urgentes — comme une réponse à un incident de sécurité ou une échéance de conformité bloquée — nous priorisons la mobilisation rapide.',
      'faq.q6': 'Qu\'est-ce qui distingue Uably d\'un cabinet Big 4\u00A0?',
      'faq.a6': 'Nous livrons le même calibre de réflexion et de méthodologie — construit à partir d\'années chez des organisations comme Accenture, IBM et Microsoft — sans le surcoût, les couches de gestion de compte ou la dotation en équipes juniors. Vous bénéficiez d\'un accès direct à un consultant de niveau principal à chaque engagement, de cycles de décision plus rapides et d\'une valeur nettement meilleure pour les programmes complexes qui nécessitent un jugement senior, pas de la main-d\'œuvre.',

      /* ── CTA 2 ── */
      'cta2.h3':  'Votre transformation TI commence ici',
      'cta2.p':   'Rejoignez les entreprises, institutions financières et organismes gouvernementaux qui font confiance à Uably pour livrer des TI sécurisées, évolutives et conformes — dans les délais et dans le périmètre. Commençons par une conversation.',
      'cta2.btn': 'Planifier votre appel découverte gratuit',

      /* ── CONTACT ── */
      'contact.title':        'Commençons une conversation',
      'contact.subtitle':     'Que vous planifiiez une migration cloud, ayez besoin d\'orientations en conformité ou souhaitiez un conseiller de confiance pour votre équipe de direction — nous sommes prêts',
      'contact.box.h3':       'Contactez-nous',
      'contact.box.p':        'Nos engagements commencent par un appel découverte sans obligation. Dites-nous où vous en êtes et où vous devez aller — nous prendrons la relève.',
      'contact.loc.h4':       'Emplacement',
      'contact.loc.p1':       'Au service des clients à travers l\'Amérique du Nord',
      'contact.loc.p2':       'et à l\'international',
      'contact.phone.h4':     'Planifier un appel',
      'contact.phone.p1':     'Réserver un appel découverte par courriel',
      'contact.phone.p2':     'Réponse dans les 24 heures',
      'contact.email.h4':     'Adresse courriel',
      'contact.form.h3':      'Envoyez-nous un message',
      'contact.form.p':       'Décrivez votre défi, la portée de votre projet et la meilleure façon de vous joindre. Nous répondrons dans un jour ouvrable.',
      'contact.form.name':    'Votre nom',
      'contact.form.email':   'Votre courriel',
      'contact.form.subject': 'Sujet',
      'contact.form.msg':     'Message',
      'contact.form.btn':     'Envoyer le message',

      /* ── FOOTER ── */
      'footer.links':    'Liens rapides',
      'footer.services': 'Nos services',
      'footer.exp':      'Expertise',
      'footer.ind':      'Secteurs',
      'footer.svc1':     'Transformation Cloud',
      'footer.svc2':     'Cybersécurité &amp; Conformité',
      'footer.svc3':     'DevSecOps',
      'footer.svc4':     'Architecture d\'entreprise',
      'footer.svc5':     'Leadership de programme TI',
      'footer.exp1':     'AWS &amp; Cloud hybride',
      'footer.exp2':     'ISO 27001 &amp; SOC2',
      'footer.exp3':     'NIST &amp; SOX',
      'footer.exp4':     'Agile &amp; DevSecOps',
      'footer.exp5':     'Conseil exécutif',
      'footer.ind1':     'Services financiers',
      'footer.ind2':     'Gouvernement',
      'footer.ind3':     'TI d\'entreprise',
      'footer.ind4':     'SaaS &amp; Technologie',
      'footer.ind5':     'Aviation &amp; Transport',
      'footer.rights':   'Tous droits réservés',
    }
  },

  set(lang) {
    this.current = lang;
    localStorage.setItem('uably-lang', lang);

    /* textContent elements */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = this.t[lang][el.dataset.i18n];
      if (val !== undefined) el.textContent = val;
    });

    /* innerHTML elements (contain tags) */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const val = this.t[lang][el.dataset.i18nHtml];
      if (val !== undefined) el.innerHTML = val;
    });

    /* placeholder attributes */
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const val = this.t[lang][el.dataset.i18nPh];
      if (val !== undefined) el.placeholder = val;
    });

    /* update switcher buttons */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    /* update html lang attribute */
    document.documentElement.lang = lang;
  },

  init() {
    const saved = localStorage.getItem('uably-lang') || 'en';
    this.set(saved);
  }
};

document.addEventListener('DOMContentLoaded', () => i18n.init());
