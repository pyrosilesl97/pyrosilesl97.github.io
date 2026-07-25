/**
 * Language-independent facts. Anything that reads the same in every locale
 * (URLs, DOIs, proper nouns, numbers, ISO dates) lives here exactly once so the
 * five translations can never drift apart on the details that matter.
 */

export const SOCIAL = {
  linkedin: 'https://linkedin.com/in/pyrosilesl97/',
  github: 'https://github.com/pyrosilesl97',
  linktree: 'https://linktr.ee/pablorosiles',
  orcid: 'https://orcid.org/0000-0002-4569-9076',
} as const;

export const ORCID_ID = '0000-0002-4569-9076';

/** ISO `YYYY-MM`; `to: null` means the role is ongoing. */
export interface ExperienceMeta {
  id: string;
  company: string;
  companyUrl?: string;
  from: string;
  to: string | null;
}

export const EXPERIENCE: ExperienceMeta[] = [
  { id: 'alpharose', company: 'AlphaRose', from: '2026-03', to: null },
  {
    id: 'datacloud',
    company: 'DataCloud Technologies and Consulting',
    from: '2025-03',
    to: null,
  },
  {
    id: 'endogenomiks',
    company: 'Endogenomiks',
    companyUrl: 'https://endogenomiks.com',
    from: '2022-09',
    to: null,
  },
  { id: 'freelance', company: 'Catnest-Tech', companyUrl: 'https://catnest-tech.com', from: '2023-01', to: null },
  { id: 'biolaunch', company: 'Biolaunch', from: '2020-01', to: '2021-07' },
  { id: 'cinvestav', company: 'CINVESTAV', from: '2017-06', to: '2019-06' },
];

/** Tech chips rendered under each role, in the order they should appear. */
export const EXPERIENCE_STACK: Record<string, string[]> = {
  alpharose: ['TypeScript', 'React / Next.js', 'Python', 'Docker', 'Vercel', 'Fly.io', 'AWS', 'Supabase', 'Clerk', 'Modal'],
  datacloud: ['C# / .NET', 'Blazor', 'TypeScript', 'SQL', 'LLM APIs'],
  endogenomiks: ['Nextflow', 'Snakemake', 'Python', 'R', 'Bash'],
  freelance: ['Python', 'Django', 'Flask', 'TypeScript', 'React', 'Docker', 'SQL', 'AWS'],
  biolaunch: [],
  cinvestav: [],
};

export interface EducationMeta {
  id: string;
  school: string;
  from: string;
  to: string;
}

export const EDUCATION: EducationMeta[] = [
  { id: 'msc', school: 'CINVESTAV Irapuato', from: '2020', to: '2022' },
  { id: 'bsc', school: 'IPN — UPIIG, Guanajuato', from: '2015', to: '2019' },
];

export interface Publication {
  journal: string;
  year: number;
  doi: string;
}

export const PUBLICATIONS: Publication[] = [
  { journal: 'Methods in Enzymology', year: 2026, doi: '10.1016/bs.mie.2026.03.001' },
  { journal: 'Discover Conservation', year: 2026, doi: '10.1007/s44353-026-00089-9' },
  { journal: 'Nucleic Acids Research', year: 2025, doi: '10.1093/nar/gkae1115' },
  { journal: 'The Plant Cell', year: 2022, doi: '10.1093/plcell/koac187' },
  { journal: 'eLife', year: 2021, doi: '10.7554/eLife.74336' },
  { journal: 'Plants', year: 2021, doi: '10.3390/plants10050876' },
];

export interface ProjectMeta {
  id: string;
  name: string;
  url: string;
  stack: string[];
  /** Path under public/logos, served from the site root. */
  logo: string;
}

export const PROJECTS: ProjectMeta[] = [
  {
    id: 'catnest',
    name: 'Catnest-Tech',
    url: 'https://catnest-tech.com',
    stack: ['HTML', 'CSS', 'JavaScript'],
    logo: 'logos/catnest.png',
  },
  {
    id: 'bym',
    name: 'B&M Abogados',
    url: 'https://bym-abogados.com/',
    stack: ['Django', 'Python', 'AWS', 'PostgreSQL'],
    logo: 'logos/bym.png',
  },
  {
    id: 'endogenomiks',
    name: 'Endogenomiks',
    url: 'https://endogenomiks.com',
    stack: ['HTML', 'CSS', 'JavaScript'],
    logo: 'logos/endogenomiks.png',
  },
  {
    id: 'canteraludica',
    name: 'Cantera Lúdica',
    url: 'https://canteraludica.com',
    stack: ['Shopify', 'Liquid', 'JavaScript', 'SQL'],
    logo: 'logos/canteraludica.png',
  },
  {
    id: 'felumo',
    name: 'Felumo',
    url: 'https://felumo.com',
    stack: ['TypeScript', 'React', 'Vite', 'Vercel', 'Mercado Pago'],
    logo: 'logos/felumo.png',
  },
  {
    id: 'kabutomushi',
    name: 'Kabuto Mushi Ramen Ya',
    url: 'https://kabutomushi.mx/',
    stack: ['Flask', 'Python', 'SQLite'],
    logo: 'logos/kabutomushi.png',
  },
  {
    id: 'plantsandpython',
    name: 'Plants & Python',
    url: 'https://plantsandpython.github.io/PlantsAndPython/00_Opening_page.html',
    stack: ['Python', 'Jupyter', 'Open Source'],
    logo: 'logos/plantsandpython.png',
  },
];

export interface LanguageSkillMeta {
  id: string;
  value: number;
  note?: string;
}

export const LANGUAGE_SKILLS: LanguageSkillMeta[] = [
  { id: 'spanish', value: 100 },
  { id: 'english', value: 95, note: 'TOEFL iBT 107/120' },
  { id: 'german', value: 35 },
  { id: 'chinese', value: 15 },
  { id: 'japanese', value: 15 },
];

/** Tech chips for the skills marquee under the hero. */
export const TECH_MARQUEE = [
  'Python',
  'TypeScript',
  'React',
  'Next.js',
  'C# / .NET',
  'Blazor',
  'Node.js',
  'Flask',
  'Django',
  'Docker',
  'AWS',
  'Vercel',
  'Fly.io',
  'Supabase',
  'Modal',
  'Clerk',
  'PostgreSQL',
  'Nextflow',
  'Snakemake',
  'Bioconductor',
  'R',
  'Git',
];
