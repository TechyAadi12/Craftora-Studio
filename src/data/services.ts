export interface ServiceProblemSolution {
  problem: string;
  solution: string;
}

export interface ServiceUseCase {
  title: string;
  description: string;
}

export interface ServiceDeliverable {
  title: string;
  items: string[];
}

export interface ServiceWorkflowStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  heroTagline: string;
  icon: string;
  accentColor: string;
  problemsSolved: ServiceProblemSolution[];
  benefits: string[];
  useCases: ServiceUseCase[];
  deliverables: ServiceDeliverable[];
  capabilities: string[];
  workflow: ServiceWorkflowStep[];
  faqs: ServiceFAQ[];
}

export const servicesData: ServiceItem[] = [
  {
    slug: "website-development",
    title: "Website Development",
    shortDescription: "Ultra-fast, responsive web experiences built with Next.js, TypeScript, and modern CSS architecture for maximum conversion.",
    heroTagline: "Performance-first web design & engineering that converts visitors into customers.",
    icon: "Globe",
    accentColor: "from-blue-500 to-cyan-400",
    problemsSolved: [
      {
        problem: "Slow page load speeds driving bounce rates up and negatively impacting search rankings.",
        solution: "Zero-bloat server-side rendering, optimized static asset distribution, and Next.js image pipelines ensuring sub-second LCP."
      },
      {
        problem: "Cluttered, non-responsive layouts failing to convert mobile users.",
        solution: "Pixel-perfect fluid layouts designed mobile-first with adaptive typography and frictionless touch interactions."
      },
      {
        problem: "Rigid legacy CMS platforms requiring developers for basic content updates.",
        solution: "Headless CMS integration (Sanity, Contentful, or Git-based MDX) giving your team direct editorial control."
      }
    ],
    benefits: [
      "Sub-second load times with 95+ Lighthouse performance scores",
      "Semantic HTML5 and automated Open Graph SEO architecture",
      "Tailored UI components matching your exact brand guidelines",
      "WCAG 2.1 AA accessibility compliance across all screens",
      "Cross-browser testing on Chromium, Safari, Firefox, and mobile engines"
    ],
    useCases: [
      {
        title: "B2B Technology & Consulting Showcases",
        description: "Elevate your enterprise presence with interactive case study galleries, service breakdowns, and high-converting lead funnels."
      },
      {
        title: "Product Launch & Marketing Sites",
        description: "Engage early adopters with interactive product tours, waitlist integrations, and rich interactive micro-animations."
      },
      {
        title: "Editorial & Content Hubs",
        description: "High-throughput publishing setups with markdown authoring, syntax-highlighted code snippets, and lightning-fast search."
      }
    ],
    deliverables: [
      {
        title: "Architecture & Design Assets",
        items: ["Design tokens and typography scales", "Responsive Figma / code prototypes", "Information architecture diagram"]
      },
      {
        title: "Production Codebase",
        items: ["Next.js App Router codebase in TypeScript", "Modular component library", "Lighthouse audit report and SEO schema"]
      },
      {
        title: "Deployment & Documentation",
        items: ["Vercel / AWS Amplify CI/CD configuration", "Editor documentation and style guide", "Production monitoring setup"]
      }
    ],
    capabilities: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Headless CMS Integration",
      "Core Web Vitals Optimization",
      "Accessible Semantic Markup"
    ],
    workflow: [
      {
        step: 1,
        title: "Discovery & Content Strategy",
        description: "Audit current web traffic, clarify conversion goals, and map sitemap architecture.",
        duration: "Week 1"
      },
      {
        step: 2,
        title: "Interactive Wireframing & Design",
        description: "Establish design tokens, layout hierarchy, and test responsive interaction patterns.",
        duration: "Week 2"
      },
      {
        step: 3,
        title: "Production Engineering",
        description: "Build semantic components, configure dynamic routing, and integrate CMS data layers.",
        duration: "Weeks 3-4"
      },
      {
        step: 4,
        title: "Performance QA & Launch",
        description: "Run Lighthouse audits, cross-device testing, analytics wiring, and production DNS switchover.",
        duration: "Week 5"
      }
    ],
    faqs: [
      {
        question: "How long does a typical custom website build take?",
        answer: "Most production websites range from 3 to 6 weeks depending on page count, custom motion design requirements, and CMS schema depth."
      },
      {
        question: "Will our marketing team be able to edit content without code changes?",
        answer: "Yes. We configure intuitive headless content management systems or structured markdown workflows so non-technical team members can publish updates freely."
      },
      {
        question: "How do you ensure strong Google Lighthouse scores?",
        answer: "We avoid bloated script bundles, leverage Next.js automated image optimization, inline critical CSS, and enforce strict performance budgets."
      }
    ]
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    shortDescription: "Tailored full-stack applications, internal operations tools, and specialized business logic engineered for resilience and scalability.",
    heroTagline: "Engineered specifically around your operational bottlenecks—not off-the-shelf compromises.",
    icon: "Cpu",
    accentColor: "from-indigo-500 to-purple-400",
    problemsSolved: [
      {
        problem: "Fragmented spreadsheets and manual copy-pasting causing expensive data entry errors.",
        solution: "Centralized internal portals with automated validation, role-based workflows, and audit logging."
      },
      {
        problem: "Off-the-shelf SaaS charging exorbitant per-seat licenses for features you never touch.",
        solution: "Purpose-built proprietary software that your organization owns outright, eliminating recurring license taxes."
      },
      {
        problem: "Legacy backend services unable to interface with modern cloud APIs.",
        solution: "Robust REST/GraphQL API wrappers and modernization adapters that unlock existing data stores."
      }
    ],
    benefits: [
      "100% intellectual property ownership with no vendor lock-in",
      "Type-safe architectures using TypeScript and scalable domain modeling",
      "Granular role-based permissions and encrypted data storage",
      "Comprehensive unit, integration, and end-to-end test coverage",
      "Modular micro-service or clean monolithic architectures"
    ],
    useCases: [
      {
        title: "Custom Inventory & Resource Scheduling",
        description: "Real-time tracking of assets, technician dispatches, and warehouse operations with custom validation rules."
      },
      {
        title: "Client & Vendor Portals",
        description: "Self-service onboarding, secure document sharing, order approvals, and transparent milestone tracking."
      },
      {
        title: "Proprietary Calculation & Estimation Engines",
        description: "Automate complex bidding formulas, multi-parameter pricing algorithms, and custom financial models."
      }
    ],
    deliverables: [
      {
        title: "System Architecture",
        items: ["Entity relationship diagrams", "API specification (OpenAPI)", "Threat modeling and data security plan"]
      },
      {
        title: "Application Core",
        items: ["TypeScript backend and client code", "Database migration scripts", "Comprehensive automated test suites"]
      },
      {
        title: "Ops & Infrastructure",
        items: ["Docker container configs", "Automated GitHub Actions CI/CD", "Runbook and operator guide"]
      }
    ],
    capabilities: [
      "Node.js / Next.js",
      "PostgreSQL / Prisma / SQLite",
      "REST & GraphQL APIs",
      "Docker Containerization",
      "Role-Based Access Control",
      "Automated Testing (Playwright/Jest)"
    ],
    workflow: [
      {
        step: 1,
        title: "Domain Analysis & Architecture",
        description: "Map existing business rules, data entities, user personas, and compliance requirements.",
        duration: "Weeks 1-2"
      },
      {
        step: 2,
        title: "Core Schema & API Prototyping",
        description: "Implement foundational database models, authentication boundaries, and API routes.",
        duration: "Weeks 3-4"
      },
      {
        step: 3,
        title: "UI Implementation & Integration",
        description: "Construct responsive management consoles, reactive data tables, and verification flows.",
        duration: "Weeks 5-7"
      },
      {
        step: 4,
        title: "Hardening, Security & Deployment",
        description: "Load testing, end-to-end user regression tests, and production server cutover.",
        duration: "Week 8"
      }
    ],
    faqs: [
      {
        question: "Do we own the source code upon completion?",
        answer: "Yes, 100%. All source code, design systems, and documentation are transferred to your repository upon final sign-off."
      },
      {
        question: "Can this integrate with our existing database or ERP?",
        answer: "Absolutely. We specialize in building clean integration layers on top of existing SQL databases, legacy ERPs, or third-party webhooks."
      },
      {
        question: "How do you handle future maintenance and support?",
        answer: "We provide comprehensive developer documentation, test suites, and optional ongoing maintenance agreements."
      }
    ]
  },
  {
    slug: "saas-dashboards",
    title: "SaaS & Dashboards",
    shortDescription: "High-density analytical dashboards, intuitive data visualizations, and multi-tenant SaaS frontend systems.",
    heroTagline: "Turn complex metrics into actionable clarity with fluid, high-density analytical dashboards.",
    icon: "LayoutDashboard",
    accentColor: "from-violet-500 to-fuchsia-400",
    problemsSolved: [
      {
        problem: "Users overwhelmed by clunky tables and impenetrable data dumps.",
        solution: "Carefully calibrated visual hierarchies, progressive disclosure, and interactive chart drill-downs."
      },
      {
        problem: "Dashboard latency making daily analytics queries feel sluggish.",
        solution: "Optimistic UI updates, smart client-side caching, and virtualized tables supporting 50,000+ rows smoothly."
      },
      {
        problem: "Inconsistent UI patterns eroding trust in SaaS products.",
        solution: "Unified design systems with standardized keyboard shortcuts, filters, and high-contrast color palettes."
      }
    ],
    benefits: [
      "Virtualized data tables capable of rendering thousands of records at 60fps",
      "Interactive SVG and Canvas chart components with tooltips and drill-downs",
      "Dark and light mode support with high contrast compliance",
      "CSV, JSON, and PDF reporting exports configured natively",
      "Responsive layout collapse for executive viewing on tablets and phones"
    ],
    useCases: [
      {
        title: "Financial & Revenue Intelligence",
        description: "Track MRR, churn cohorts, pipeline velocities, and regional revenue distributions in real time."
      },
      {
        title: "IoT & Telemetry Control Rooms",
        description: "Live sensor feeds, automated anomaly alerts, threshold monitoring, and historical playback."
      },
      {
        title: "User Activity & Product Analytics",
        description: "Funnel drop-off visualization, feature engagement heatmaps, and customer health scoring."
      }
    ],
    deliverables: [
      {
        title: "Design System Tokens",
        items: ["Color palette for metric statuses", "Data density toggle specifications", "Interactive Figma UI kit"]
      },
      {
        title: "Dashboard Component Library",
        items: ["Filter bar with preset date pickers", "KPI metric cards with delta indicators", "Virtualized table with column sorting"]
      },
      {
        title: "Integration & Analytics Code",
        items: ["Chart component suite", "Client-side state caching layer", "Mock data generator for local testing"]
      }
    ],
    capabilities: [
      "React & Next.js",
      "Chart.js / SVG Visualizations",
      "Virtualized Data Grids",
      "State Management & Local Cache",
      "Export Utilities (CSV/PDF)",
      "Real-time WebSocket / SSE Polling"
    ],
    workflow: [
      {
        step: 1,
        title: "Metric Inventory & UX Taxonomy",
        description: "Define primary KPIs, filter parameters, and frequency of updates required by decision makers.",
        duration: "Week 1"
      },
      {
        step: 2,
        title: "Visual Hierarchy & Data Mocking",
        description: "Build interactive prototypes using realistic synthetic datasets to calibrate visual density.",
        duration: "Week 2"
      },
      {
        step: 3,
        title: "Frontend Engineering & Filtering",
        description: "Implement fast filtering, chart interactions, sorting algorithms, and table pagination.",
        duration: "Weeks 3-4"
      },
      {
        step: 4,
        title: "Stress Testing & Responsive Polish",
        description: "Validate performance under large payload conditions and optimize mobile viewing.",
        duration: "Week 5"
      }
    ],
    faqs: [
      {
        question: "Can we plug in our existing REST or GraphQL APIs?",
        answer: "Yes. Our dashboard components are strictly decoupled from data fetchers, making integration with any JSON endpoint effortless."
      },
      {
        question: "How do you handle real-time data streaming?",
        answer: "We leverage lightweight Server-Sent Events (SSE) or WebSockets with throttling to keep metrics current without locking the main thread."
      },
      {
        question: "Can the dashboard be embedded inside an existing application?",
        answer: "Yes, we can package dashboards as stand-alone micro-frontends or embeddable iframe / web components."
      }
    ]
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    shortDescription: "Automated webhook pipelines, document processing, invoice sync, and programmatic workflows that eliminate manual drudgery.",
    heroTagline: "Connect your fragmented toolchain and eliminate hundreds of hours of repetitive manual tasks.",
    icon: "Zap",
    accentColor: "from-amber-500 to-emerald-400",
    problemsSolved: [
      {
        problem: "Sales, support, and billing teams wasting hours synchronizing data between disconnected tools.",
        solution: "Resilient bi-directional webhook pipelines ensuring instantaneous consistency across your CRM, email, and billing systems."
      },
      {
        problem: "Customer onboarding delays caused by manual review queues.",
        solution: "Automated document verification, invoice generation, and welcome sequence triggers."
      },
      {
        problem: "Fragile third-party automation tools breaking silently without retry mechanisms.",
        solution: "Idempotent, logged cloud functions with automatic exponential backoff retries and alert webhooks."
      }
    ],
    benefits: [
      "Eliminate up to 80% of repetitive data re-entry tasks",
      "Guaranteed idempotent execution preventing duplicate invoices or emails",
      "Full audit trail with historical execution logs and failure alerts",
      "Integrations with Stripe, HubSpot, Slack, Airtable, and custom endpoints",
      "Self-healing error handlers with automated fallback workflows"
    ],
    useCases: [
      {
        title: "End-to-End Invoice & Payment Reconciliation",
        description: "Trigger PDF invoices, sync QuickBooks/Xero ledger entries, and alert finance upon Stripe payment receipt."
      },
      {
        title: "Lead Qualification & Instant Routing",
        description: "Enrich inbound submissions, calculate lead scores, assign account executives, and post summaries to Slack."
      },
      {
        title: "Customer Support Escalation Workflows",
        description: "Monitor ticket urgency, auto-categorize inquiries, and ping on-call engineers for high-priority incidents."
      }
    ],
    deliverables: [
      {
        title: "Workflow Blueprints",
        items: ["Trigger-action sequence diagrams", "Data transformation mapping schemas", "Error tolerance & escalation matrix"]
      },
      {
        title: "Serverless Automation Handlers",
        items: ["TypeScript webhook handlers", "Security verification middleware", "Dead-letter queue recovery scripts"]
      },
      {
        title: "Monitoring Console",
        items: ["Status health-check endpoint", "Slack/Email incident alerts", "Maintenance runbook"]
      }
    ],
    capabilities: [
      "Serverless Functions & Webhooks",
      "Stripe / Payment API Integrations",
      "CRM & Email Toolchain Sync",
      "Automated PDF & Document Engines",
      "Idempotency & Retry Queues",
      "Slack / Discord Alert Automation"
    ],
    workflow: [
      {
        step: 1,
        title: "Process Audit & Pain Point Mapping",
        description: "Inspect manual handoffs, calculate time cost, and define high-leverage automation targets.",
        duration: "Week 1"
      },
      {
        step: 2,
        title: "Pipeline Architecture & Security",
        description: "Establish webhook signature verification, data sanitation, and token management.",
        duration: "Week 2"
      },
      {
        step: 3,
        title: "Scripting & Integration Testing",
        description: "Build robust cloud workers, write mock event fixtures, and test failure recovery modes.",
        duration: "Weeks 3-4"
      },
      {
        step: 4,
        title: "Staged Rollout & Monitoring",
        description: "Shadow live processes to verify output accuracy before switching to automated production mode.",
        duration: "Week 5"
      }
    ],
    faqs: [
      {
        question: "What happens if a third-party service goes down during an automation?",
        answer: "We engineer all workflows with durable queueing and exponential retries so events pause safely and resume as soon as the service recovers."
      },
      {
        question: "Can we modify automation rules later without rewriting code?",
        answer: "Yes, we isolate business rule variables into accessible environment variables or config tables so your team can tweak thresholds easily."
      },
      {
        question: "Is sensitive customer data protected during automation passes?",
        answer: "All payloads use encrypted transit (TLS 1.3), tokens are managed via secure secret vaults, and sensitive fields are scrubbed from logs."
      }
    ]
  }
];
