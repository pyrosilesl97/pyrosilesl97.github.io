import type { Translation } from './types';

export const zh: Translation = {
  meta: {
    title: '帕布罗·亚米尔德·罗西莱斯·洛埃萨 — AI 原生生物信息工程师与全栈开发者',
    description:
      'AI 原生的生物信息工程师与全栈开发者，构建基于大语言模型的平台、云原生服务以及可复现的科研流程。',
  },
  nav: {
    about: '简介',
    skills: '技能',
    experience: '经历',
    projects: '作品',
    research: '研究',
    contact: '联系',
  },
  a11y: {
    skipToContent: '跳转到正文',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    changeLanguage: '切换语言',
    toggleTheme: '切换浅色／深色主题',
    backToTop: '返回顶部',
    externalLink: '在新标签页中打开',
  },
  hero: {
    greeting: '你好，我是',
    role: 'AI 原生生物信息工程师与全栈开发者',
    tagline:
      '我把生物学与业务问题转化为可上线的软件——基于大语言模型的平台、云原生服务，以及可复现的科研流程。',
    location: '墨西哥 莫雷利亚 · 面向全球远程',
    ctaPrimary: '联系我',
    ctaSecondary: '查看作品',
    updated: '更新于 2026 年 7 月',
  },
  about: {
    title: '关于我',
    kicker: '简介',
    body: '我是一名 AI 原生的生物信息工程师与全栈开发者，拥有生物技术、云原生系统与生产级 AI 工作流的跨学科背景。我构建并部署由大语言模型驱动的应用、内部仪表板、Blazor 应用、TypeScript/React 前端，以及运行在 Docker、AWS、Supabase、Vercel、Fly.io、Clerk 和 Modal 上的云服务。从后端流程与 AI 集成，到科研前端、身份认证、部署与云基础设施，我擅长在节奏快、自主性高的环境中，把生物学与业务需求转化为稳健的数字化工具。',
    stats: [
      { value: '8+', label: '年科研软件开发经验' },
      { value: '6', label: '同行评审论文' },
      { value: '6', label: '已上线的公开 Web 平台' },
      { value: '5', label: '掌握的语言' },
    ],
  },
  skills: {
    title: '我能做什么',
    kicker: '能力',
    groups: [
      {
        icon: '🤖',
        title: 'AI 原生开发',
        items: [
          '大语言模型（OpenAI、Gemini）集成与结构化输出',
          '提示工程、版本管理与轻量化评测',
          '面向内部数据的检索、工具与函数调用',
          '延迟与成本权衡、监控与安全护栏',
        ],
      },
      {
        icon: '🧑‍💻',
        title: '全栈工程',
        items: [
          'Python（Flask、Django）以及 C#/.NET、Blazor',
          '基于 TypeScript、React 与 Next.js 的前端',
          'REST API 与内部科研工具',
          '身份认证、仪表板与后台管理界面',
        ],
      },
      {
        icon: '☁️',
        title: '云与 DevOps',
        items: [
          'Docker、AWS、Vercel、Fly.io 与 Modal',
          'Supabase、PostgreSQL 与 Clerk 身份认证',
          'GitHub Actions 与基于 Git 的部署流程',
          '可观测性、缓存与成本控制',
        ],
      },
      {
        icon: '🧬',
        title: '生物信息工程',
        items: [
          '基因组学、转录组学与宏基因组学',
          'RNA/DNA 分析与基因组挖掘流程',
          '基于 Nextflow 与 Snakemake 的可复现工作流',
          '比较基因组学与法规申报材料',
        ],
      },
      {
        icon: '📊',
        title: '数据系统',
        items: [
          'SQL 与结构化企业数据',
          '数据接入、转换与校验层',
          '多阶段处理流程',
          '统计建模与可视化',
        ],
      },
      {
        icon: '🤝',
        title: '工作方式',
        items: [
          '批判性思维与数据驱动的决策',
          '自主学习与高度自驱',
          '预期管理与冲突解决',
          '科学传播与技术写作',
        ],
      },
    ],
  },
  experience: {
    title: '工作经历',
    kicker: '职业发展',
    present: '至今',
    yearsShort: '年',
    monthsShort: '个月',
    roles: {
      alpharose: {
        role: '全栈生物信息与 AI/ML 开发者 — 罕见病疗法设计平台',
        bullets: [
          '参与开发面向罕见病疗法设计的 AI/ML 平台，覆盖 ASO、siRNA、SSO 等前沿寡核苷酸技术，打通序列分析、候选评分与科学审查流程。',
          '使用 TypeScript、React/Next.js、Python 服务、Docker、Vercel、Fly.io、AWS、Supabase、Clerk 与 Modal 构建云原生组件。',
          '负责候选生成、特征计算、排序、产物管理，以及对设计结果进行结构化 AI 审查的后端流程。',
          '集成基于 LLM/Gemini 的分析流程，配合结构化输出、基于证据的摘要、提示词管控与科学解读的安全约束。',
          '通过确定性结果合并、产物校验、日志记录与前端轮询优化，提升可复现性与可靠性。',
          '实现面向科研用户的界面：项目仪表板、运行状态视图、分子结构查看器与可下载结果。',
        ],
      },
      datacloud: {
        role: '人工智能与数据分析专家',
        bullets: [
          '使用 C#/.NET、JavaScript/TypeScript、HTML、CSS 与 SQL 构建后端服务、Blazor 应用与内部仪表板。',
          '设计并部署由 AI 驱动的后端流程，集成大语言模型模块、结构化输出与多阶段校验。',
          '实现提示词驱动的处理流程，具备缓存、可观测性与成本意识，满足生产环境要求。',
          '处理结构化企业数据，确保 AI 功能的可靠性与可追溯性。',
        ],
      },
      endogenomiks: {
        role: '生物信息学研究员',
        bullets: [
          '使用 Nextflow 与 Snakemake 开发可复现的基因组挖掘与比较基因组学流程。',
          '为研发与法规申报处理并分析基因组、转录组与宏基因组数据集。',
          '将菌株表征、生物合成基因簇、分类学验证等科研需求转化为自动化计算流程。',
          '将生物信息流程与数据系统集成，支撑可扩展的内部科研工具。',
        ],
      },
      freelance: {
        role: '创始人与开发者',
        bullets: [
          '使用 Python、TypeScript、SQL 与 REST API，为定制 Web 平台和内部工具设计并开发云原生后端。',
          '基于云服务、托管数据库、身份认证系统与自动化流程构建并部署应用。',
          '使用 Docker 与基于 GitHub 的流程完成服务容器化与部署。',
          '集成第三方 API，重点关注可靠性与可维护性。',
          '主导从需求梳理到部署与迭代的全流程交付，并直接与客户协作。',
        ],
      },
      biolaunch: {
        role: '主要合作者',
        bullets: [],
      },
      cinvestav: {
        role: '本科实习生 — 植物基因转化实验室',
        bullets: [],
      },
    },
  },
  projects: {
    title: '公开网站',
    kicker: '作品集',
    descriptions: {
      bym: '律师事务所的落地页，以及用于催收管理与文档自动化的内部平台。全部基于 AWS 上的 Django 构建。',
      catnest:
        '我自己工作室的网站，展示定制网站开发、AI 自动化与数据科学的服务、案例与联系方式。',
      endogenomiks:
        '一家基因组数据分析初创公司的网站。轻量的信息型站点，使用 HTML、CSS 与 JavaScript 从零构建。',
      canteraludica:
        '现代桌游电商网站，搭建于 Shopify，并编写脚本实现库存自动化与店铺运营流程。',
      felumo:
        '为音乐节打造的平台，使用 TypeScript、React 和 Vite 构建并部署在 Vercel 上，集成 Mercado Pago 支付、票务管理以及活动现场的实时互动功能。',
      kabutomushi:
        '日式餐厅网站，配有 Flask 管理后台，店主可自行编辑菜单。',
      plantsandpython:
        '密歇根州立大学的开源教学材料，向植物生物学专业的学生介绍 Python。',
    },
  },
  publications: {
    title: '学术论文',
    kicker: '研究',
    viewDoi: '查看 DOI',
  },
  education: {
    title: '教育背景',
    degrees: {
      msc: {
        degree: '植物生物技术 硕士',
        note: '生物信息学方向',
      },
      bsc: { degree: '生物技术工程 学士' },
    },
  },
  languages: {
    title: '语言能力',
    names: {
      spanish: '西班牙语',
      english: '英语',
      german: '德语',
      chinese: '中文',
      japanese: '日语',
    },
    levels: {
      spanish: '母语',
      english: 'C2',
      german: 'A2',
      chinese: 'A1',
      japanese: 'A1',
    },
  },
  highlights: {
    title: '荣誉与成就',
    kicker: '获奖记录',
    showMore: '查看全部',
    showLess: '收起',
    items: [
      '第 15 届全球工业微生物学大会暨代谢工程峰会 2024 — 上海交通大学',
      '拉美天然产物基因组挖掘研讨会 — CIMAT｜2022 年 7 月与 2024 年 8 月',
      '生物信息学与系统生物学大会 — 荷兰｜2023 年',
      '科学外交项目 — The Bridge Biofoundry 与 Alliance for Science｜2021 年 9 月',
      '使用 R 与 Bioconductor 进行 scRNA-seq 分析 — NNB-CCG & CDSB｜2021 年 8 月',
      '《Plants & Python》课程贡献者 — 密歇根州立大学｜2021 年',
      '虚拟墨西哥辩论赛 — INE 与墨西哥辩论协会｜2020 年',
      '以生物经济为重点的生物信息学入门 — ISCB 学生委员会｜2019 年 10 月',
      'Shaping Horizons：峰会与行动计划 — 剑桥大学｜2019 年 5 月–10 月',
      'Talentum University — CIDE｜2019 年 6 月–12 月',
      '电气气动生物反应器海报 — 第 16 届女性与科学会议｜2019 年 5 月',
      '讲座：“为什么没有女科学家？” — Allbiotech｜2019 年 2 月',
      '生物信息学暑期学校 — UNAM Juriquilla｜2017 年夏',
      '项目“Renou” — 生物商业创业者大会 AGROBIOTEG｜2017 年 6 月',
      '科学研究暑期项目 — 墨西哥科学院与 UNAM｜2016 年夏',
      '国际生物奥林匹克参赛者 — 丹麦奥胡斯｜2015 年',
      '金奖 — 第 24 届全国生物奥林匹克（墨西哥蒙特雷）｜2015 年',
      '金奖 — 第 24 届米却肯州生物奥林匹克｜2014 年',
      '银奖 — 第 23 届米却肯州生物奥林匹克｜2013 年',
    ],
  },
  contact: {
    title: '一起做点东西吧',
    kicker: '联系',
    body: '欢迎洽谈全栈开发、AI 工程与生物信息学方向的合作，接受外包或全职机会。留下消息，我会尽快回复。',
    nameLabel: '姓名',
    emailLabel: '你的邮箱',
    messageLabel: '留言',
    namePlaceholder: '你的名字',
    emailPlaceholder: 'you@email.com',
    messagePlaceholder: '请告诉我可以如何帮忙…',
    submit: '发送消息',
    sending: '发送中…',
    success: '消息已发送，我会尽快回复。',
    error: '发送失败，请稍后再试。',
    turnstileError: '人机验证失败，请刷新页面后重试。',
    configError: '联系表单尚未配置。',
  },
  footer: {
    rights: '保留所有权利。',
    builtWith: '使用 React、TypeScript 与 Vite 构建。',
  },
};
