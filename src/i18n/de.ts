import type { Translation } from './types';

export const de: Translation = {
  meta: {
    title: 'Pablo Yamild Rosiles Loeza — AI-Native Bioinformatik- & Full-Stack-Entwickler',
    description:
      'AI-nativer Bioinformatik-Ingenieur und Full-Stack-Entwickler. Ich baue LLM-gestützte Plattformen, cloud-native Services und reproduzierbare wissenschaftliche Pipelines.',
  },
  nav: {
    about: 'Profil',
    skills: 'Kompetenzen',
    experience: 'Erfahrung',
    projects: 'Projekte',
    research: 'Forschung',
    contact: 'Kontakt',
  },
  a11y: {
    skipToContent: 'Zum Inhalt springen',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    changeLanguage: 'Sprache ändern',
    toggleTheme: 'Helles / dunkles Design umschalten',
    backToTop: 'Nach oben',
    externalLink: 'öffnet in einem neuen Tab',
  },
  hero: {
    greeting: 'Hallo, ich bin',
    role: 'AI-Native Bioinformatik-Ingenieur & Full-Stack-Entwickler',
    tagline:
      'Ich übersetze biologische und geschäftliche Fragestellungen in produktionsreife Software — LLM-gestützte Plattformen, cloud-native Services und reproduzierbare wissenschaftliche Pipelines.',
    location: 'Morelia, Mexiko · Weltweit remote',
    ctaPrimary: 'Kontakt aufnehmen',
    ctaSecondary: 'Arbeiten ansehen',
    updated: 'Aktualisiert im Juli 2026',
  },
  about: {
    title: 'Über mich',
    kicker: 'Profil',
    body: 'AI-nativer Bioinformatik-Ingenieur und Full-Stack-Entwickler mit multidisziplinärem Hintergrund in Biotechnologie, cloud-nativen Systemen und produktiven KI-Workflows. Ich entwickle und deploye Anwendungen mit Sprachmodellen, interne Dashboards, Blazor-Apps, TypeScript/React-Frontends und Cloud-Services auf Docker, AWS, Supabase, Vercel, Fly.io, Clerk und Modal. Ich übersetze biologische und geschäftliche Anforderungen in robuste digitale Werkzeuge — von Backend-Pipelines und KI-Integration bis zu Forschungs-Frontends, Authentifizierung, Deployment und Cloud-Infrastruktur in schnelllebigen, eigenverantwortlichen Umgebungen.',
    stats: [
      { value: '8+', label: 'Jahre wissenschaftliche Software' },
      { value: '6', label: 'Peer-Review-Publikationen' },
      { value: '7', label: 'Öffentliche Web-Plattformen in Produktion' },
      { value: '5', label: 'Sprachen' },
    ],
  },
  skills: {
    title: 'Was ich mache',
    kicker: 'Fähigkeiten',
    groups: [
      {
        icon: '🤖',
        title: 'AI-Native Entwicklung',
        items: [
          'LLM-Integration (OpenAI, Gemini) und strukturierte Ausgaben',
          'Prompt Engineering, Versionierung und leichtgewichtige Evaluationen',
          'Retrieval über interne Daten, Tool- und Function-Calling',
          'Latenz- und Kostenabwägungen, Monitoring und Guardrails',
        ],
      },
      {
        icon: '🧑‍💻',
        title: 'Full-Stack-Engineering',
        items: [
          'Python (Flask, Django) sowie C#/.NET und Blazor',
          'Frontends mit TypeScript, React und Next.js',
          'REST-APIs und interne Forschungswerkzeuge',
          'Authentifizierung, Dashboards und Admin-Oberflächen',
        ],
      },
      {
        icon: '☁️',
        title: 'Cloud & DevOps',
        items: [
          'Docker, AWS, Vercel, Fly.io und Modal',
          'Supabase, PostgreSQL und Clerk-Authentifizierung',
          'GitHub Actions und Git-basierte Deployment-Workflows',
          'Observability, Caching und Kostenbewusstsein',
        ],
      },
      {
        icon: '🧬',
        title: 'Bioinformatik-Engineering',
        items: [
          'Genomik, Transkriptomik und Metagenomik',
          'RNA-/DNA-Analyse und Genome-Mining-Pipelines',
          'Reproduzierbare Workflows mit Nextflow und Snakemake',
          'Vergleichende Genomik und regulatorische Berichte',
        ],
      },
      {
        icon: '📊',
        title: 'Datensysteme',
        items: [
          'SQL und strukturierte Unternehmensdaten',
          'Ingestion-, Transformations- und Validierungsschichten',
          'Mehrstufige Verarbeitungspipelines',
          'Statistische Modellierung und Visualisierung',
        ],
      },
      {
        icon: '🤝',
        title: 'Arbeitsweise',
        items: [
          'Kritisches Denken und datenbasierte Entscheidungen',
          'Eigenständiges Lernen und hohe Autonomie',
          'Erwartungsmanagement und Konfliktlösung',
          'Wissenschaftskommunikation und technisches Schreiben',
        ],
      },
    ],
  },
  experience: {
    title: 'Berufserfahrung',
    kicker: 'Werdegang',
    present: 'Heute',
    yearsShort: 'J.',
    monthsShort: 'Mon.',
    roles: {
      alpharose: {
        role: 'Full-Stack Bioinformatik- und KI/ML-Entwickler — Plattform für Therapiedesign bei seltenen Erkrankungen',
        bullets: [
          'Mitarbeit an einer KI- und ML-gestützten Plattform für das Design von Therapien gegen seltene Erkrankungen mit modernsten Modalitäten — ASOs, siRNA, SSOs und weitere Oligonukleotid-Ansätze —, die Sequenzanalyse, Kandidatenbewertung und wissenschaftliche Review-Workflows verbindet.',
          'Entwicklung cloud-nativer Komponenten mit TypeScript, React/Next.js, Python-Services, Docker, Vercel, Fly.io, AWS, Supabase, Clerk und Modal.',
          'Arbeit an Backend-Pipelines für Kandidatengenerierung, Feature-Berechnung, Ranking, Artefakt-Handling und strukturierte KI-Reviews der Designergebnisse.',
          'Integration von LLM-/Gemini-Analyse-Workflows mit strukturierten Ausgaben, evidenzbasierten Zusammenfassungen, Prompt-Kontrollen und Schutzmechanismen für die wissenschaftliche Interpretation.',
          'Verbesserung der Reproduzierbarkeit durch deterministisches Zusammenführen von Ergebnissen, Artefakt-Validierung, Logging und optimiertes Frontend-Polling.',
          'Umsetzung wissenschaftlicher Benutzeroberflächen: Projekt-Dashboards, Statusansichten, Molekülstruktur-Viewer und herunterladbare Ergebnisse.',
        ],
      },
      datacloud: {
        role: 'KI- & Datenanalyse-Spezialist',
        bullets: [
          'Entwicklung von Backend-Services, Blazor-Apps und internen Dashboards mit C#/.NET, JavaScript/TypeScript, HTML, CSS und SQL.',
          'Design und Deployment KI-gestützter Backend-Workflows mit LLM-Modulen, strukturierten Ausgaben und mehrstufiger Validierung.',
          'Implementierung prompt-getriebener Verarbeitungspipelines mit Caching, Observability und Kostenbewusstsein für den Produktionsbetrieb.',
          'Arbeit mit strukturierten Unternehmensdaten unter Sicherstellung von Zuverlässigkeit und Nachvollziehbarkeit der KI-Funktionen.',
        ],
      },
      endogenomiks: {
        role: 'Forschungs-Bioinformatiker',
        bullets: [
          'Entwicklung reproduzierbarer Pipelines für Genome Mining und vergleichende Genomik mit Nextflow und Snakemake.',
          'Verarbeitung und Analyse von Genomik-, Transkriptomik- und Metagenomik-Datensätzen für F&E und regulatorische Einreichungen.',
          'Übersetzung von Forschungsbedarfen — Stammcharakterisierung, biosynthetische Gencluster, taxonomische Validierung — in automatisierte Workflows.',
          'Integration bioinformatischer Pipelines in Datensysteme für skalierbare interne Forschungswerkzeuge.',
        ],
      },
      freelance: {
        role: 'Gründer & Entwickler',
        bullets: [
          'Design und Entwicklung cloud-nativer Backends für individuelle Webplattformen und interne Tools mit Python, TypeScript, SQL und REST-APIs.',
          'Aufbau und Deployment von Anwendungen mit Cloud-Services, verwalteten Datenbanken, Authentifizierung und automatisierten Workflows.',
          'Containerisierung und Deployment von Services mit Docker und GitHub-basierten Workflows.',
          'Integration von Drittanbieter-APIs mit Fokus auf Zuverlässigkeit und Wartbarkeit.',
          'Verantwortung für die gesamte Umsetzung — von der Anforderungsaufnahme bis zu Deployment und Iteration, in direkter Zusammenarbeit mit Kunden.',
        ],
      },
      biolaunch: {
        role: 'Hauptmitarbeiter',
        bullets: [],
      },
      cinvestav: {
        role: 'Praktikant (Bachelor) — Labor für pflanzengenetische Transformation',
        bullets: [],
      },
    },
  },
  projects: {
    title: 'Öffentliche Websites',
    kicker: 'Portfolio',
    descriptions: {
      bym: 'Landingpage für eine Anwaltskanzlei sowie eine interne Plattform für Forderungsmanagement und Dokumentenautomatisierung. Durchgängig Django auf AWS.',
      catnest:
        'Die Website meines eigenen Studios. Leistungen, Portfolio und Kontakt für individuelle Webentwicklung, KI-Automatisierung und Data Science.',
      endogenomiks:
        'Website eines Startups für genomische Datenanalyse. Informativ und leichtgewichtig, von Grund auf mit HTML, CSS und JavaScript gebaut.',
      canteraludica:
        'Ecommerce für moderne Brettspiele auf Shopify, mit eigenen Skripten für Bestandsautomatisierung und Shop-Workflows.',
      felumo:
        'Festival-Plattform mit TypeScript, React und Vite, bereitgestellt auf Vercel. Integriert Mercado-Pago-Zahlungen, Ticketverwaltung und Live-Interaktionen während der Veranstaltung.',
      estudiojade:
        'Website eines Studios für visuelle Identität und Grafikdesign. Portfolio, Leistungen und Kontakt — gebaut mit Next.js und deployed auf Vercel.',
      kabutomushi:
        'Website für ein japanisches Restaurant mit Flask-Adminoberfläche, über die die Inhaber ihre Speisekarte selbst pflegen.',
      plantsandpython:
        'Open-Source-Lehrmaterial der Michigan State University, das Studierende der Pflanzenbiologie an Python heranführt.',
    },
  },
  publications: {
    title: 'Veröffentlichungen',
    kicker: 'Forschung',
    viewDoi: 'DOI ansehen',
  },
  education: {
    title: 'Bildung',
    degrees: {
      msc: {
        degree: 'M.Sc. Pflanzenbiotechnologie',
        note: 'Schwerpunkt Bioinformatik',
      },
      bsc: { degree: 'B.Sc. Biotechnologie-Ingenieurwesen' },
    },
  },
  languages: {
    title: 'Sprachkenntnisse',
    names: {
      spanish: 'Spanisch',
      english: 'Englisch',
      german: 'Deutsch',
      chinese: 'Chinesisch',
      japanese: 'Japanisch',
    },
    levels: {
      spanish: 'Muttersprache',
      english: 'C2',
      german: 'A2',
      chinese: 'A1',
      japanese: 'A1',
    },
  },
  highlights: {
    title: 'Auszeichnungen & Erfolge',
    kicker: 'Anerkennung',
    showMore: 'Alle anzeigen',
    showLess: 'Weniger anzeigen',
    items: [
      '15. Globaler Kongress für Industrielle Mikrobiologie & Metabolic Engineering Summit 2024 — Shanghai Jiao Tong Universität',
      'Lateinamerikanischer Workshop zum Genome Mining von Naturstoffen — CIMAT | Juli 2022 & August 2024',
      'Konferenz für Bioinformatik & Systembiologie — Niederlande | 2023',
      'Programm für Wissenschaftsdiplomatie — The Bridge Biofoundry & Alliance for Science | September 2021',
      'Analyse von scRNA-seq mit R und Bioconductor — NNB-CCG & CDSB | August 2021',
      'Mitwirkender bei Plants & Python — Michigan State University | 2021',
      'Virtuelles Debattenturnier Mexiko — INE & Mexikanische Debattiergesellschaft | 2020',
      'Einführung in die Bioinformatik mit Schwerpunkt Bioökonomie — ISCB Student Council | Oktober 2019',
      'Shaping Horizons: Gipfel & Aktionsprogramm — Universität Cambridge | Mai–Oktober 2019',
      'Talentum Universität — CIDE | Juni–Dezember 2019',
      'Poster zum elektro-pneumatischen Bioreaktor — XVI Konferenz „Frauen in der Wissenschaft“ | Mai 2019',
      'Vortrag: „Warum gibt es keine Wissenschaftlerinnen?“ — Allbiotech | Februar 2019',
      'Summer School in Bioinformatics — UNAM Juriquilla | Sommer 2017',
      'Projekt „Renou“ — Entrepreneurs in Biobusiness, AGROBIOTEG | Juni 2017',
      'Sommer der wissenschaftlichen Forschung — Mexikanische Akademie der Wissenschaften & UNAM | Sommer 2016',
      'Teilnehmer — Internationale Biologie-Olympiade, Aarhus, Dänemark | 2015',
      'Goldmedaille — XXIV Nationale Biologie-Olympiade, Monterrey, Mexiko | 2015',
      'Goldmedaille — XXIV Michoacán Biologie-Olympiade | 2014',
      'Silbermedaille — XXIII Michoacán Biologie-Olympiade | 2013',
    ],
  },
  contact: {
    title: 'Lassen Sie uns etwas bauen',
    kicker: 'Kontakt',
    body: 'Offen für Full-Stack-, KI-Engineering- und Bioinformatik-Projekte, freiberuflich oder in Festanstellung. Hinterlassen Sie eine Nachricht — ich melde mich zurück.',
    nameLabel: 'Name',
    emailLabel: 'Ihre E-Mail',
    messageLabel: 'Nachricht',
    namePlaceholder: 'Ihr Name',
    emailPlaceholder: 'sie@email.com',
    messagePlaceholder: 'Wobei kann ich helfen…',
    submit: 'Nachricht senden',
    sending: 'Wird gesendet…',
    success: 'Nachricht gesendet. Ich melde mich bald.',
    error: 'Senden fehlgeschlagen. Bitte versuchen Sie es gleich noch einmal.',
    turnstileError: 'Menschliche Prüfung fehlgeschlagen. Seite neu laden und erneut versuchen.',
    configError: 'Das Kontaktformular ist noch nicht konfiguriert.',
  },
  footer: {
    rights: 'Alle Rechte vorbehalten.',
  },
};
