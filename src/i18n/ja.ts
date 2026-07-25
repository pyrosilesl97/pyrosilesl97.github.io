import type { Translation } from './types';

export const ja: Translation = {
  meta: {
    title: 'パブロ・ヤミルド・ロシレス・ロエサ — AIネイティブ・バイオインフォマティクス／フルスタック開発者',
    description:
      'AIネイティブなバイオインフォマティクス技術者兼フルスタック開発者。LLM を活用したプラットフォーム、クラウドネイティブなサービス、再現性の高い科学パイプラインを構築しています。',
  },
  nav: {
    about: 'プロフィール',
    skills: 'スキル',
    experience: '経歴',
    projects: '制作物',
    research: '研究',
    contact: 'お問い合わせ',
  },
  a11y: {
    skipToContent: '本文へスキップ',
    openMenu: 'メニューを開く',
    closeMenu: 'メニューを閉じる',
    changeLanguage: '言語を変更',
    toggleTheme: 'ライト／ダークテーマを切り替え',
    backToTop: 'ページ上部へ戻る',
    externalLink: '新しいタブで開きます',
  },
  hero: {
    greeting: 'はじめまして、',
    role: 'AIネイティブ・バイオインフォマティクス技術者／フルスタック開発者',
    tagline:
      '生物学とビジネスの課題を、本番環境で動くソフトウェアに変換します。LLM を活用したプラットフォーム、クラウドネイティブなサービス、再現性の高い科学パイプラインが専門です。',
    location: 'メキシコ・モレリア · フルリモート対応',
    ctaPrimary: 'お問い合わせ',
    ctaSecondary: '制作物を見る',
    updated: '2026年5月更新',
  },
  about: {
    title: '自己紹介',
    kicker: 'プロフィール',
    body: 'バイオテクノロジー、クラウドネイティブシステム、本番運用の AI ワークフローを横断する学際的なバックグラウンドを持つ、AIネイティブなバイオインフォマティクス技術者兼フルスタック開発者です。言語モデルを活用したアプリケーション、社内ダッシュボード、Blazor アプリ、TypeScript/React のフロントエンド、そして Docker・AWS・Supabase・Vercel・Fly.io・Clerk・Modal 上のクラウドサービスを構築・運用しています。バックエンドのパイプラインや AI 統合から、研究者向けフロントエンド、認証、デプロイ、クラウド基盤まで、変化の速い自律的な環境で、生物学とビジネスの課題を堅牢なデジタルツールへと落とし込みます。',
    stats: [
      { value: '8+', label: '科学ソフトウェア開発歴（年）' },
      { value: '6', label: '査読付き論文' },
      { value: '6', label: '本番稼働中の公開Webプラットフォーム' },
      { value: '5', label: '使用言語' },
    ],
  },
  skills: {
    title: '提供できること',
    kicker: '専門領域',
    groups: [
      {
        icon: '🤖',
        title: 'AIネイティブ開発',
        items: [
          'LLM（OpenAI、Gemini）の統合と構造化出力',
          'プロンプトエンジニアリング、バージョン管理、軽量な評価',
          '社内データに対する検索、ツール／関数呼び出し',
          'レイテンシとコストの最適化、モニタリング、ガードレール',
        ],
      },
      {
        icon: '🧑‍💻',
        title: 'フルスタック開発',
        items: [
          'Python（Flask、Django）および C#/.NET、Blazor',
          'TypeScript、React、Next.js によるフロントエンド',
          'REST API と社内の研究向けツール',
          '認証、ダッシュボード、管理画面',
        ],
      },
      {
        icon: '☁️',
        title: 'クラウド & DevOps',
        items: [
          'Docker、AWS、Vercel、Fly.io、Modal',
          'Supabase、PostgreSQL、Clerk による認証',
          'GitHub Actions と Git ベースのデプロイ',
          'オブザーバビリティ、キャッシュ、コスト管理',
        ],
      },
      {
        icon: '🧬',
        title: 'バイオインフォマティクス',
        items: [
          'ゲノミクス、トランスクリプトミクス、メタゲノミクス',
          'RNA/DNA 解析とゲノムマイニングのパイプライン',
          'Nextflow と Snakemake による再現可能なワークフロー',
          '比較ゲノミクスと規制対応レポート',
        ],
      },
      {
        icon: '📊',
        title: 'データ基盤',
        items: [
          'SQL と構造化された企業データ',
          '取り込み・変換・検証の各レイヤー',
          '多段階の処理パイプライン',
          '統計モデリングと可視化',
        ],
      },
      {
        icon: '🤝',
        title: '働き方',
        items: [
          '批判的思考とデータに基づく意思決定',
          '自律的な学習と高い裁量での遂行',
          '期待値の調整と対立の解消',
          '科学コミュニケーションと技術文書作成',
        ],
      },
    ],
  },
  experience: {
    title: '職務経歴',
    kicker: 'キャリア',
    present: '現在',
    yearsShort: '年',
    monthsShort: 'か月',
    roles: {
      alpharose: {
        role: 'フルスタック・バイオインフォマティクス／AI・ML 開発者 — 希少疾患治療デザインプラットフォーム',
        bullets: [
          'ASO・siRNA・SSO など最先端のオリゴヌクレオチド技術を用いた希少疾患治療の設計を支援する AI・機械学習プラットフォームの開発に貢献し、配列解析・候補スコアリング・科学的レビューの各ワークフローを連携。',
          'TypeScript、React/Next.js、Python サービス、Docker、Vercel、Fly.io、AWS、Supabase、Clerk、Modal を用いてクラウドネイティブなコンポーネントを構築。',
          '候補生成、特徴量計算、ランキング、成果物の取り扱い、設計結果に対する構造化された AI レビューのバックエンドパイプラインを担当。',
          'LLM/Gemini による解析ワークフローを、構造化出力・根拠に基づく要約・プロンプト制御・科学的解釈のためのセーフガードとともに統合。',
          '決定論的な結果マージ、成果物の検証、ロギング、フロントエンドのポーリング改善により再現性と信頼性を向上。',
          '研究者向けの UI を実装：プロジェクトダッシュボード、実行ステータス画面、分子構造ビューア、ダウンロード可能な出力。',
        ],
      },
      datacloud: {
        role: 'AI・データアナリティクス スペシャリスト',
        bullets: [
          'C#/.NET、JavaScript/TypeScript、HTML、CSS、SQL を用いて、バックエンドサービス、Blazor アプリ、社内ダッシュボードを構築。',
          '構造化出力と多段階バリデーションを備えた LLM モジュールを組み込み、AI 主導のバックエンドワークフローを設計・デプロイ。',
          'キャッシュ、オブザーバビリティ、コスト意識を備えたプロンプト駆動の処理パイプラインを本番品質で実装。',
          '構造化された企業データを扱い、AI 機能の信頼性とトレーサビリティを担保。',
        ],
      },
      endogenomiks: {
        role: 'バイオインフォマティクス研究者',
        bullets: [
          'Nextflow と Snakemake を用いた再現可能なゲノムマイニングおよび比較ゲノミクスのパイプラインを開発。',
          '研究開発および規制申請に向けて、ゲノム・トランスクリプトーム・メタゲノムのデータセットを処理・解析。',
          '菌株の特性評価、生合成遺伝子クラスター、分類学的検証といった研究ニーズを自動計算ワークフローに変換。',
          'バイオインフォマティクスのパイプラインをデータ基盤と統合し、スケーラブルな社内科学ツールを支援。',
        ],
      },
      freelance: {
        role: '創業者／開発者',
        bullets: [
          'Python、TypeScript、SQL、REST API を用い、受託Webプラットフォームや社内ツール向けのクラウドネイティブなバックエンドを設計・開発。',
          'クラウドサービス、マネージドデータベース、認証システム、自動化ワークフローを用いてアプリケーションを構築・デプロイ。',
          'Docker と GitHub ベースのワークフローでサービスをコンテナ化しデプロイ。',
          '信頼性と保守性を重視してサードパーティ API を統合。',
          '要件定義からデプロイ、改善まで、クライアントと直接やり取りしながら一貫して担当。',
        ],
      },
      biolaunch: {
        role: '主要コラボレーター',
        bullets: [],
      },
      cinvestav: {
        role: '学部インターン — 植物遺伝子形質転換ラボ',
        bullets: [],
      },
    },
  },
  projects: {
    title: '公開ウェブサイト',
    kicker: 'ポートフォリオ',
    descriptions: {
      bym: '法律事務所のランディングページと、債権回収管理・書類自動生成のための社内プラットフォーム。すべて AWS 上の Django で構築。',
      catnest:
        '自身のスタジオのサイト。受託Web開発、AI自動化、データサイエンスのサービス紹介・実績・問い合わせ窓口。',
      endogenomiks:
        'ゲノムデータ解析を手がけるスタートアップのサイト。HTML・CSS・JavaScript でゼロから構築した、軽量な情報サイト。',
      canteraludica:
        'モダンボードゲームの EC サイト。Shopify 上に構築し、在庫自動化と店舗運用のための独自スクリプトを実装。',
      felumo:
        'TypeScript・React・Vite で構築し Vercel にデプロイしたフェスティバル向けプラットフォーム。Mercado Pago 決済、チケット管理、イベント中のライブ演出機能を統合。',
      kabutomushi:
        '日本食レストランのサイト。Flask の管理画面から、オーナー自身がメニューを編集できる仕組みを実装。',
      plantsandpython:
        'ミシガン州立大学のオープンソース教材。植物生物学を学ぶ学生に Python を紹介するコース。',
    },
  },
  publications: {
    title: '学術論文',
    kicker: '研究',
    viewDoi: 'DOI を見る',
  },
  education: {
    title: '学歴',
    degrees: {
      msc: {
        degree: '植物バイオテクノロジー 修士',
        note: 'バイオインフォマティクス専攻',
      },
      bsc: { degree: 'バイオテクノロジー工学 学士' },
    },
  },
  languages: {
    title: '語学力',
    names: {
      spanish: 'スペイン語',
      english: '英語',
      german: 'ドイツ語',
      chinese: '中国語',
      japanese: '日本語',
    },
    levels: {
      spanish: '母語',
      english: 'C2',
      german: 'A2',
      chinese: 'A1',
      japanese: 'A1',
    },
  },
  highlights: {
    title: '受賞歴・実績',
    kicker: '評価',
    showMore: 'すべて表示',
    showLess: '表示を減らす',
    items: [
      '第15回 国際産業微生物学会議・代謝工学サミット 2024 — 上海交通大学',
      'ラテンアメリカ天然物ゲノムマイニング ワークショップ — CIMAT｜2022年7月・2024年8月',
      'バイオインフォマティクス・システム生物学会議 — オランダ｜2023年',
      '科学外交プログラム — The Bridge Biofoundry & Alliance for Science｜2021年9月',
      'R と Bioconductor による scRNA-seq 解析 — NNB-CCG & CDSB｜2021年8月',
      'Plants & Python への貢献 — ミシガン州立大学｜2021年',
      'バーチャル・メキシコ ディベート大会 — INE & メキシコディベート協会｜2020年',
      'バイオエコノミーに焦点を当てたバイオインフォマティクス入門 — ISCB Student Council｜2019年10月',
      'Shaping Horizons：サミットとアクションプログラム — ケンブリッジ大学｜2019年5月〜10月',
      'Talentum Universidad — CIDE｜2019年6月〜12月',
      '電気空気圧式バイオリアクターのポスター発表 — 第16回 女性科学者会議｜2019年5月',
      '講演：「なぜ女性科学者はいないのか？」— Allbiotech｜2019年2月',
      'バイオインフォマティクス サマースクール — UNAM フリキージャ｜2017年夏',
      'プロジェクト「Renou」— バイオビジネス起業家会議 AGROBIOTEG｜2017年6月',
      '科学研究の夏 — メキシコ科学アカデミー & UNAM｜2016年夏',
      '国際生物学オリンピック 参加 — デンマーク・オーフス｜2015年',
      '金メダル — 第24回 全国生物学オリンピック（メキシコ・モンテレイ）｜2015年',
      '金メダル — 第24回 ミチョアカン州生物学オリンピック｜2014年',
      '銀メダル — 第23回 ミチョアカン州生物学オリンピック｜2013年',
    ],
  },
  contact: {
    title: '一緒に作りましょう',
    kicker: 'お問い合わせ',
    body: 'フルスタック開発、AI エンジニアリング、バイオインフォマティクスの案件を、業務委託・正社員いずれの形でもお受けしています。メッセージを残していただければご返信します。',
    nameLabel: 'お名前',
    emailLabel: 'メールアドレス',
    messageLabel: 'メッセージ',
    namePlaceholder: 'お名前',
    emailPlaceholder: 'you@email.com',
    messagePlaceholder: 'ご用件をお書きください…',
    submit: '送信する',
    sending: '送信中…',
    success: '送信しました。折り返しご連絡します。',
    error: '送信に失敗しました。しばらくしてから再度お試しください。',
    turnstileError: '認証に失敗しました。ページを再読み込みして再度お試しください。',
    configError: 'お問い合わせフォームはまだ設定されていません。',
  },
  footer: {
    rights: 'All rights reserved.',
    builtWith: 'React・TypeScript・Vite で構築。',
  },
};
