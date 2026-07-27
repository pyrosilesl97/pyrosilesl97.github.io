import type { Translation } from './types';

export const en: Translation = {
  meta: {
    title: 'Pablo Yamild Rosiles Loeza — AI-Native Bioinformatics & Full-Stack Engineer',
    description:
      'AI-native bioinformatics engineer and full-stack developer building LLM-powered platforms, cloud-native services and reproducible scientific pipelines.',
  },
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    research: 'Research',
    contact: 'Contact',
  },
  a11y: {
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    changeLanguage: 'Change language',
    toggleTheme: 'Toggle light / dark theme',
    backToTop: 'Back to top',
    externalLink: 'opens in a new tab',
  },
  hero: {
    greeting: 'Hi, I am',
    role: 'AI-Native Bioinformatics Engineer & Full-Stack Developer',
    tagline:
      'I turn biological and business problems into production software — LLM-powered platforms, cloud-native services and reproducible scientific pipelines.',
    location: 'Morelia, México · Remote worldwide',
    ctaPrimary: 'Get in touch',
    ctaSecondary: 'See my work',
    updated: 'Updated July 2026',
  },
  about: {
    title: 'About me',
    kicker: 'Profile',
    body: 'AI-native bioinformatics engineer and full-stack developer with a multidisciplinary background in biotechnology, cloud-native systems and production AI workflows. I build and deploy language-model-powered applications, internal dashboards, Blazor apps, TypeScript/React frontends and cloud services on Docker, AWS, Supabase, Vercel, Fly.io, Clerk and Modal. I translate biological and business problems into robust digital tools — from backend pipelines and AI integration to research frontends, authentication, deployment and cloud infrastructure in fast-paced, high-autonomy environments.',
    stats: [
      { value: '8+', label: 'Years building scientific software' },
      { value: '6', label: 'Peer-reviewed publications' },
      { value: '6', label: 'Public web platforms in production' },
      { value: '5', label: 'Languages spoken' },
    ],
  },
  skills: {
    title: 'What I do',
    kicker: 'Capabilities',
    groups: [
      {
        icon: '🤖',
        title: 'AI-Native Development',
        items: [
          'LLM integration (OpenAI, Gemini) and structured outputs',
          'Prompt engineering, versioning and lightweight evaluations',
          'Retrieval over internal data, tool & function calling',
          'Latency / cost tradeoffs, monitoring and guardrails',
        ],
      },
      {
        icon: '🧑‍💻',
        title: 'Full-Stack Engineering',
        items: [
          'Python (Flask, Django) and C#/.NET, Blazor',
          'TypeScript, React and Next.js frontends',
          'REST APIs and internal research tools',
          'Authentication, dashboards and admin panels',
        ],
      },
      {
        icon: '☁️',
        title: 'Cloud & DevOps',
        items: [
          'Docker, AWS, Vercel, Fly.io and Modal',
          'Supabase, PostgreSQL and Clerk authentication',
          'GitHub Actions and Git-based deployment workflows',
          'Observability, caching and cost awareness',
        ],
      },
      {
        icon: '🧬',
        title: 'Bioinformatics Engineering',
        items: [
          'Genomics, transcriptomics and metagenomics',
          'RNA/DNA analysis and genome mining pipelines',
          'Nextflow and Snakemake reproducible workflows',
          'Comparative genomics and regulatory reporting',
        ],
      },
      {
        icon: '📊',
        title: 'Data Systems',
        items: [
          'SQL and structured enterprise data',
          'Ingestion, transformation and validation layers',
          'Multi-stage processing pipelines',
          'Statistical modelling and visualisation',
        ],
      },
      {
        icon: '🤝',
        title: 'Ways of Working',
        items: [
          'Critical thinking and data-driven decisions',
          'Independent learning and high autonomy',
          'Expectation management and conflict resolution',
          'Scientific communication and technical writing',
        ],
      },
    ],
  },
  experience: {
    title: 'Experience',
    kicker: 'Career',
    present: 'Present',
    yearsShort: 'yr',
    monthsShort: 'mo',
    roles: {
      alpharose: {
        role: 'Full-Stack Bioinformatics and AI/ML Developer — Rare Disease Therapeutic Design Platform',
        bullets: [
          'Contributed to an AI- and ML-assisted platform for designing rare disease therapeutics with state-of-the-art modalities — ASOs, siRNA, SSOs and other oligonucleotide approaches — connecting sequence analysis, candidate scoring and scientific review workflows.',
          'Built cloud-native application components with TypeScript, React/Next.js, Python services, Docker, Vercel, Fly.io, AWS, Supabase, Clerk and Modal.',
          'Worked on backend pipelines for candidate generation, feature calculation, ranking, artifact handling and structured AI review of design results.',
          'Integrated LLM/Gemini analysis workflows with structured outputs, evidence-based summaries, prompt controls and safeguards for scientific interpretation.',
          'Improved reproducibility by refining deterministic result merging, artifact validation, logging and frontend polling behaviour.',
          'Implemented user-facing research interfaces: project dashboards, run status views, molecular structure viewers and downloadable outputs.',
        ],
      },
      datacloud: {
        role: 'AI & Data Analytics Specialist',
        bullets: [
          'Built backend services, Blazor apps and internal dashboards using C#/.NET, JavaScript/TypeScript, HTML, CSS and SQL.',
          'Designed and deployed AI-powered backend workflows integrating LLM modules with structured outputs and multi-stage validation.',
          'Implemented prompt-driven processing pipelines with caching, observability and cost-awareness for production readiness.',
          'Worked with structured enterprise datasets, ensuring reliability and traceability of AI features.',
        ],
      },
      endogenomiks: {
        role: 'Researcher Bioinformatician',
        bullets: [
          'Developed reproducible genome mining and comparative genomics pipelines with Nextflow and Snakemake.',
          'Processed and analysed genomics, transcriptomics and metagenomics datasets for R&D and regulatory submissions.',
          'Translated research needs — strain characterisation, biosynthetic gene clusters, taxonomic validation — into automated computational workflows.',
          'Integrated bioinformatics pipelines with data systems to support scalable internal scientific tools.',
        ],
      },
      freelance: {
        role: 'Founder & Developer',
        bullets: [
          'Designed and developed cloud-native backends for custom web platforms and internal tools using Python, TypeScript, SQL and REST APIs.',
          'Built and deployed applications with cloud services, managed databases, authentication systems and automated workflows.',
          'Containerised and deployed services with Docker and GitHub-based workflows.',
          'Integrated third-party APIs with a focus on reliability and maintainability.',
          'Led end-to-end delivery from requirements gathering to deployment and iteration, working directly with clients.',
        ],
      },
      biolaunch: {
        role: 'Principal Collaborator',
        bullets: [],
      },
      cinvestav: {
        role: 'Undergraduate Intern — Plant Genetic Transformation Lab',
        bullets: [],
      },
    },
  },
  projects: {
    title: 'Public websites',
    kicker: 'Portfolio',
    descriptions: {
      bym: 'Landing page for a law firm plus an internal platform for debt collection management and document automation. Django on AWS, end to end.',
      catnest:
        'My own studio site. Services, portfolio and contact for custom web development, AI automation and data science work.',
      endogenomiks:
        'Site for a startup dedicated to genomic data analysis. Lightweight and informative, built from scratch with HTML, CSS and JavaScript.',
      canteraludica:
        'Ecommerce for modern board games on Shopify, with custom scripts for inventory automation and store workflows.',
      felumo:
        'Festival platform built with TypeScript, React and Vite, deployed on Vercel. It integrates Mercado Pago payments, ticket management and live interactive dynamics during the event.',
      kabutomushi:
        'Site for a Japanese restaurant, with a Flask admin interface that lets the owners edit the menu themselves.',
      plantsandpython:
        'Open-source teaching materials for Michigan State University introducing plant biology students to Python.',
    },
  },
  publications: {
    title: 'Publications',
    kicker: 'Research',
    viewDoi: 'View DOI',
  },
  education: {
    title: 'Education',
    degrees: {
      msc: {
        degree: 'MSc in Plant Biotechnology',
        note: 'Specialised in bioinformatics',
      },
      bsc: { degree: 'BSc in Biotechnological Engineering' },
    },
  },
  languages: {
    title: 'Languages',
    names: {
      spanish: 'Spanish',
      english: 'English',
      german: 'German',
      chinese: 'Chinese',
      japanese: 'Japanese',
    },
    levels: {
      spanish: 'Native',
      english: 'C2',
      german: 'A2',
      chinese: 'A1',
      japanese: 'A1',
    },
  },
  highlights: {
    title: 'Highlights & distinctions',
    kicker: 'Recognition',
    showMore: 'Show all',
    showLess: 'Show less',
    items: [
      '15th Global Industrial Microbiology Congress & Metabolic Engineering Summit 2024 — Shanghai Jiao Tong University',
      'Latin American Natural Product Genome Mining Workshop — CIMAT | July 2022 & August 2024',
      'Bioinformatics & Systems Biology Conference — Netherlands | 2023',
      'Science Diplomacy Program — The Bridge Biofoundry & Alliance for Science | September 2021',
      'Analysis of scRNA-seq with R and Bioconductor — NNB-CCG & CDSB | August 2021',
      'Contributor to Plants & Python — Michigan State University | 2021',
      'Virtual Mexico Debate Tournament — INE & Mexican Debate Association | 2020',
      'Intro to Bioinformatics with focus on Bioeconomics — ISCB Student Council | October 2019',
      'Shaping Horizons: Summit & Action Programme — University of Cambridge | May–October 2019',
      'Talentum University — CIDE | June–December 2019',
      'Poster on electro-pneumatic bioreactor — XVI Women in Science Meeting | May 2019',
      'Talk: “Why are there no women scientists?” — Allbiotech | February 2019',
      'Summer School in Bioinformatics — UNAM Juriquilla | Summer 2017',
      'Project “Renou” — Entrepreneurs in Biobusiness, AGROBIOTEG | June 2017',
      'Summer of Scientific Research — Mexican Academy of Sciences & UNAM | Summer 2016',
      'Participant — International Biology Olympiad, Aarhus, Denmark | 2015',
      'Gold Medal — XXIV National Biology Olympiad, Monterrey, Mexico | 2015',
      'Gold Medal — XXIV Michoacán Biology Olympiad | 2014',
      'Silver Medal — XXIII Michoacán Biology Olympiad | 2013',
    ],
  },
  contact: {
    title: 'Let’s build something',
    kicker: 'Contact',
    body: 'Open to full-stack, AI engineering and bioinformatics work — freelance or full-time. Leave a message and I will get back to you.',
    nameLabel: 'Name',
    emailLabel: 'Your email',
    messageLabel: 'Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@email.com',
    messagePlaceholder: 'Tell me how I can help…',
    submit: 'Send message',
    sending: 'Sending…',
    success: 'Message sent. I will reply soon.',
    error: 'Could not send. Please try again in a moment.',
    turnstileError: 'Could not verify you are human. Reload and try again.',
    configError: 'The contact form is not configured yet.',
  },
  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with React, TypeScript and Vite.',
  },
};
