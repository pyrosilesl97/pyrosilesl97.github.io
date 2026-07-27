import type { Translation } from './types';

export const es: Translation = {
  meta: {
    title: 'Pablo Yamild Rosiles Loeza — Ingeniero bioinformático AI-native y desarrollador full-stack',
    description:
      'Ingeniero bioinformático y desarrollador full-stack AI-native. Construyo plataformas con LLMs, servicios cloud-native y pipelines científicos reproducibles.',
  },
  nav: {
    about: 'Perfil',
    skills: 'Habilidades',
    experience: 'Experiencia',
    projects: 'Proyectos',
    research: 'Investigación',
    contact: 'Contacto',
  },
  a11y: {
    skipToContent: 'Ir al contenido',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    changeLanguage: 'Cambiar idioma',
    toggleTheme: 'Cambiar tema claro / oscuro',
    backToTop: 'Volver arriba',
    externalLink: 'se abre en una pestaña nueva',
  },
  hero: {
    greeting: 'Hola, soy',
    role: 'Ingeniero bioinformático AI-native y desarrollador full-stack',
    tagline:
      'Convierto problemas biológicos y de negocio en software de producción: plataformas con LLMs, servicios cloud-native y pipelines científicos reproducibles.',
    location: 'Morelia, México · Remoto a nivel mundial',
    ctaPrimary: 'Contáctame',
    ctaSecondary: 'Ver mi trabajo',
    updated: 'Actualizado en julio 2026',
  },
  about: {
    title: 'Sobre mí',
    kicker: 'Perfil',
    body: 'Ingeniero bioinformático y desarrollador full-stack con enfoque AI-native, formación en biotecnología y experiencia en sistemas cloud, aplicaciones web y flujos productivos con modelos de lenguaje. Construyo y despliego aplicaciones impulsadas por LLMs, dashboards internos, apps en Blazor, frontends en TypeScript/React y servicios cloud usando Docker, AWS, Supabase, Vercel, Fly.io, Clerk y Modal. Traduzco necesidades biológicas y de negocio en herramientas digitales robustas: desde pipelines backend e integración de IA hasta frontend, autenticación, despliegue e infraestructura cloud en entornos ágiles y de alta autonomía.',
    stats: [
      { value: '8+', label: 'Años construyendo software científico' },
      { value: '6', label: 'Publicaciones revisadas por pares' },
      { value: '6', label: 'Plataformas web públicas en producción' },
      { value: '5', label: 'Idiomas' },
    ],
  },
  skills: {
    title: 'Lo que hago',
    kicker: 'Capacidades',
    groups: [
      {
        icon: '🤖',
        title: 'Desarrollo AI-Native',
        items: [
          'Integración de LLMs (OpenAI, Gemini) y structured outputs',
          'Prompt engineering, versionado y evaluaciones ligeras',
          'Retrieval sobre datos internos, tool y function calling',
          'Optimización de latencia y costos, monitoreo y salvaguardas',
        ],
      },
      {
        icon: '🧑‍💻',
        title: 'Ingeniería Full-Stack',
        items: [
          'Python (Flask, Django) y C#/.NET, Blazor',
          'Frontends en TypeScript, React y Next.js',
          'APIs REST y herramientas internas de investigación',
          'Autenticación, dashboards y paneles de administración',
        ],
      },
      {
        icon: '☁️',
        title: 'Cloud y DevOps',
        items: [
          'Docker, AWS, Vercel, Fly.io y Modal',
          'Supabase, PostgreSQL y autenticación con Clerk',
          'GitHub Actions y flujos de despliegue basados en Git',
          'Observabilidad, caché y control de costos',
        ],
      },
      {
        icon: '🧬',
        title: 'Ingeniería Bioinformática',
        items: [
          'Genómica, transcriptómica y metagenómica',
          'Análisis de RNA/DNA y minería genómica',
          'Workflows reproducibles con Nextflow y Snakemake',
          'Genómica comparativa y reportes regulatorios',
        ],
      },
      {
        icon: '📊',
        title: 'Sistemas de Datos',
        items: [
          'SQL y datos estructurados empresariales',
          'Capas de ingestión, transformación y validación',
          'Pipelines de procesamiento multietapa',
          'Modelado estadístico y visualización',
        ],
      },
      {
        icon: '🤝',
        title: 'Forma de trabajar',
        items: [
          'Pensamiento crítico y decisiones basadas en datos',
          'Aprendizaje autónomo y alta autonomía',
          'Gestión de expectativas y resolución de conflictos',
          'Comunicación científica y escritura técnica',
        ],
      },
    ],
  },
  experience: {
    title: 'Experiencia',
    kicker: 'Trayectoria',
    present: 'Actualidad',
    yearsShort: 'a',
    monthsShort: 'm',
    roles: {
      alpharose: {
        role: 'Desarrollador Full-Stack de Bioinformática e IA/ML — Plataforma de diseño de tratamientos para enfermedades raras',
        bullets: [
          'Contribuí al desarrollo de una plataforma asistida por IA y machine learning para el diseño de terapias contra enfermedades raras con tecnologías de última generación —ASOs, siRNA, SSOs y otras modalidades oligonucleotídicas—, integrando análisis de secuencias, scoring de candidatos y revisión científica.',
          'Construí componentes cloud-native con TypeScript, React/Next.js, servicios en Python, Docker, Vercel, Fly.io, AWS, Supabase, Clerk y Modal.',
          'Trabajé en pipelines backend para generación de candidatos, cálculo de features, ranking, manejo de artefactos y revisión estructurada con IA.',
          'Integré flujos de análisis con LLMs/Gemini usando structured outputs, resúmenes basados en evidencia, control de prompts y salvaguardas para interpretación científica.',
          'Mejoré la reproducibilidad mediante merges determinísticos, validación de artefactos, logging y ajustes al polling del frontend.',
          'Implementé interfaces científicas de usuario: dashboards de proyectos, vistas de estado de corridas, visualizadores moleculares y salidas descargables.',
        ],
      },
      datacloud: {
        role: 'Especialista en IA y Análisis de Datos',
        bullets: [
          'Construí servicios backend, apps en Blazor y dashboards internos con C#/.NET, JavaScript/TypeScript, HTML, CSS y SQL.',
          'Diseñé y desplegué flujos backend impulsados por LLMs con structured outputs y validación multietapa.',
          'Implementé pipelines basados en prompts con caché, observabilidad y optimización de costos para producción.',
          'Trabajé con datos estructurados empresariales garantizando confiabilidad y trazabilidad de las funciones de IA.',
        ],
      },
      endogenomiks: {
        role: 'Investigador Bioinformático',
        bullets: [
          'Desarrollé pipelines reproducibles de minería genómica y genómica comparativa con Nextflow y Snakemake.',
          'Procesé y analicé datasets de genómica, transcriptómica y metagenómica para I+D y reportes regulatorios.',
          'Traduje necesidades biológicas —caracterización de cepas, BGCs, validación taxonómica— en flujos computacionales automatizados.',
          'Integré pipelines bioinformáticos con sistemas de datos para herramientas científicas internas escalables.',
        ],
      },
      freelance: {
        role: 'Fundador y Desarrollador',
        bullets: [
          'Diseñé y desarrollé backends cloud-native para plataformas web personalizadas y herramientas internas con Python, TypeScript, SQL y APIs REST.',
          'Creé y desplegué aplicaciones usando servicios cloud, bases de datos gestionadas, autenticación y flujos automatizados.',
          'Contenericé y desplegué servicios con Docker y flujos basados en GitHub.',
          'Integré APIs de terceros con enfoque en confiabilidad y mantenibilidad.',
          'Dirigí el desarrollo integral, desde la toma de requisitos hasta el despliegue e iteración, trabajando directamente con clientes.',
        ],
      },
      biolaunch: {
        role: 'Colaborador Principal',
        bullets: [],
      },
      cinvestav: {
        role: 'Practicante de Licenciatura — Laboratorio de Transformación Genética de Plantas',
        bullets: [],
      },
    },
  },
  projects: {
    title: 'Sitios web públicos',
    kicker: 'Portafolio',
    descriptions: {
      bym: 'Landing para un despacho de abogados más una plataforma interna de gestión de cobranza y automatización de documentos. Todo en Django sobre AWS.',
      catnest:
        'El sitio de mi propio estudio. Servicios, portafolio y contacto para desarrollo web a medida, automatización con IA y ciencia de datos.',
      endogenomiks:
        'Sitio de una startup dedicada al análisis de datos genómicos. Informativo y ligero, construido desde cero con HTML, CSS y JavaScript.',
      canteraludica:
        'Ecommerce de juegos de mesa modernos sobre Shopify, con scripts propios para automatización de inventario y flujos de tienda.',
      felumo:
        'Plataforma del festival hecha con TypeScript, React y Vite, desplegada en Vercel. Integra pasarela de pagos de Mercado Pago, gestión de entradas y dinámicas en vivo durante el evento.',
      kabutomushi:
        'Sitio para un restaurante japonés, con interfaz de administración en Flask que permite a los dueños editar el menú por su cuenta.',
      plantsandpython:
        'Material educativo de código abierto de Michigan State University que introduce Python a estudiantes de biología vegetal.',
    },
  },
  publications: {
    title: 'Publicaciones',
    kicker: 'Investigación',
    viewDoi: 'Ver DOI',
  },
  education: {
    title: 'Educación',
    degrees: {
      msc: {
        degree: 'Maestría en Biotecnología de Plantas',
        note: 'Especialidad en bioinformática',
      },
      bsc: { degree: 'Ingeniería en Biotecnología' },
    },
  },
  languages: {
    title: 'Idiomas',
    names: {
      spanish: 'Español',
      english: 'Inglés',
      german: 'Alemán',
      chinese: 'Chino',
      japanese: 'Japonés',
    },
    levels: {
      spanish: 'Nativo',
      english: 'C2',
      german: 'A2',
      chinese: 'A1',
      japanese: 'A1',
    },
  },
  highlights: {
    title: 'Distinciones y logros',
    kicker: 'Reconocimientos',
    showMore: 'Ver todo',
    showLess: 'Ver menos',
    items: [
      '15º Congreso Global de Microbiología Industrial y Cumbre de Ingeniería Metabólica 2024 — Universidad Jiao Tong de Shanghái',
      'Taller Latinoamericano de Minería Genómica de Productos Naturales — CIMAT | Julio 2022 y agosto 2024',
      'Conferencia de Bioinformática y Biología de Sistemas — Países Bajos | 2023',
      'Programa de Diplomacia Científica — The Bridge Biofoundry & Alliance for Science | Septiembre 2021',
      'Análisis de scRNA-seq con R y Bioconductor — NNB-CCG & CDSB | Agosto 2021',
      'Colaborador en Plants & Python — Michigan State University | 2021',
      'Torneo Virtual de Debate México — INE y Asociación Mexicana de Debate | 2020',
      'Introducción a la Bioinformática con enfoque en Bioeconomía — ISCB Student Council | Octubre 2019',
      'Shaping Horizons: Cumbre y Programa de Acción — Universidad de Cambridge | Mayo–octubre 2019',
      'Talentum Universidad — CIDE | Junio–diciembre 2019',
      'Póster sobre biorreactor electroneumático — XVI Encuentro de Mujeres en la Ciencia | Mayo 2019',
      'Charla: “¿Por qué no hay mujeres científicas?” — Allbiotech | Febrero 2019',
      'Escuela de Verano en Bioinformática — UNAM Juriquilla | Verano 2017',
      'Proyecto “Renou” — Emprendedores en Bionegocios, AGROBIOTEG | Junio 2017',
      'Verano de la Investigación Científica — Academia Mexicana de Ciencias y UNAM | Verano 2016',
      'Participante — Olimpiada Internacional de Biología, Aarhus, Dinamarca | 2015',
      'Medalla de Oro — XXIV Olimpiada Nacional de Biología, Monterrey, México | 2015',
      'Medalla de Oro — XXIV Olimpiada Michoacana de Biología | 2014',
      'Medalla de Plata — XXIII Olimpiada Michoacana de Biología | 2013',
    ],
  },
  contact: {
    title: 'Construyamos algo',
    kicker: 'Contacto',
    body: 'Contáctame para revisión de proyectos full-stack, ingeniería de IA y bioinformática. Déjame un mensaje y te respondo.',
    nameLabel: 'Nombre',
    emailLabel: 'Tu correo',
    messageLabel: 'Mensaje',
    namePlaceholder: 'Tu nombre',
    emailPlaceholder: 'tu@correo.com',
    messagePlaceholder: 'Cuéntame en qué puedo ayudarte…',
    submit: 'Enviar mensaje',
    sending: 'Enviando…',
    success: 'Mensaje enviado. Te respondo pronto.',
    error: 'No se pudo enviar. Inténtalo de nuevo en un momento.',
    turnstileError: 'No se pudo verificar que no eres un bot. Recarga e inténtalo otra vez.',
    configError: 'El formulario de contacto aún no está configurado.',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
};
