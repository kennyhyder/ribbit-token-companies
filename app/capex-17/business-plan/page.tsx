'use client'

import { useState } from 'react'
import {
  ArrowLeft,
  Target,
  TrendingUp,
  DollarSign,
  Users,
  Shield,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Building2,
  Zap,
  BarChart3,
  Clock,
  Wrench,
  FileText,
  Briefcase,
  Lightbulb,
  Globe,
  Award,
  PieChart,
  LineChart,
  Server,
  Database,
  Cloud,
  Monitor,
  Cpu,
  ThermometerSun,
  Activity
} from 'lucide-react'

// Business Plan Data
const businessPlan = {
  companyName: "DataPulse",
  tagline: "Unified Visibility for Distributed Data Center Infrastructure",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Hyperscalers build internal tools while colocation providers have fragmented monitoring. Edge data centers are exploding with zero standardization. No unified visibility exists across distributed infrastructure.",
    solution: "DataPulse aggregates edge and colocation facility data (power, cooling, connectivity), creates reliability scoring, and enables a capacity marketplace. We are PowerOutage.us for data centers.",
    market: "$200B data center infrastructure market with $4.5B+ in DCIM software growing at 22.7% CAGR. Edge facilities ($1-10M each) being deployed by thousands of companies. Reliability data directly affects financing terms.",
    ask: "$5M Seed Round to build the infrastructure monitoring platform, establish REIT and developer partnerships, and create the reliability scoring system that transforms data center financing."
  },

  problem: {
    title: "The Data Center Visibility Crisis",
    points: [
      {
        title: "Hyperscaler Walled Gardens",
        detail: "AWS, Google, Microsoft build proprietary internal monitoring tools. No visibility into actual infrastructure performance for customers or the broader market.",
        stat: "70%+",
        statLabel: "of cloud infrastructure invisible to market"
      },
      {
        title: "Fragmented Colo Monitoring",
        detail: "Colocation providers use 50+ different DCIM solutions with incompatible data formats. Enterprises managing multi-colo deployments have zero unified visibility.",
        stat: "50+",
        statLabel: "different DCIM systems in market"
      },
      {
        title: "Edge Explosion Without Standards",
        detail: "Thousands of edge data centers ($1-10M each) being deployed by enterprises, telcos, and CDNs. No standardized monitoring, reliability metrics, or benchmarking.",
        stat: "$18B+",
        statLabel: "edge DC market growing 23% annually"
      },
      {
        title: "Financing Blind Spots",
        detail: "Data center lenders and REITs lack real-time infrastructure data. Reliability directly affects financing terms but no independent scoring exists.",
        stat: "$50B+",
        statLabel: "annual DC infrastructure lending"
      }
    ]
  },

  solution: {
    title: "DataPulse: The Infrastructure Intelligence Platform",
    tagline: "Monitor. Score. Trade. Finance.",
    pillars: [
      {
        icon: "Server",
        title: "Universal Monitoring",
        description: "Hardware-agnostic monitoring layer that works across all data center types: hyperscale, colo, enterprise, and edge. Single pane of glass for distributed infrastructure.",
        features: ["Multi-vendor integration", "Real-time telemetry", "Power & cooling metrics", "Connectivity monitoring"]
      },
      {
        icon: "BarChart3",
        title: "Reliability Scoring",
        description: "Standardized reliability scores based on actual performance data. Independent benchmarking that creates transparency for the entire ecosystem.",
        features: ["Uptime verification", "PUE benchmarking", "Incident tracking", "Predictive analytics"]
      },
      {
        icon: "Cloud",
        title: "Capacity Marketplace",
        description: "Real-time visibility into available capacity across facilities. Enable dynamic capacity allocation and spot market for data center resources.",
        features: ["Live inventory", "Capacity forecasting", "Price discovery", "Instant procurement"]
      },
      {
        icon: "DollarSign",
        title: "Finance Integration",
        description: "API feeds to lenders and REITs with verified infrastructure performance data. Reliability scores directly inform financing terms and valuations.",
        features: ["Lender dashboards", "REIT integrations", "Risk scoring", "Due diligence automation"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "Edge Infrastructure Explosion",
        detail: "5G, AI inference, and low-latency computing driving massive edge data center deployment. Edge market growing at 23.6% CAGR to $52B by 2030.",
        icon: "TrendingUp"
      },
      {
        title: "Data Center Capital Boom",
        detail: "$50B+ annually flowing into data center infrastructure. Lenders and investors need better visibility into asset performance.",
        icon: "Building2"
      },
      {
        title: "Sustainability Mandates",
        detail: "ESG requirements forcing transparency on power usage and efficiency. PUE reporting becoming mandatory for enterprise customers.",
        icon: "ThermometerSun"
      },
      {
        title: "Multi-Cloud Reality",
        detail: "Enterprises using 3-5 cloud providers plus colo. Need unified visibility across fragmented infrastructure footprint.",
        icon: "Cloud"
      },
      {
        title: "AI Workload Surge",
        detail: "DCIM becoming critical for managing AI workload growth. Digital twins and predictive operations now essential for operators.",
        icon: "Cpu"
      }
    ]
  },

  marketSize: {
    title: "Market Opportunity",
    tam: {
      value: "$200B",
      label: "Total Addressable Market",
      description: "Global data center infrastructure including construction, equipment, and operations",
      source: "Synergy Research",
      breakdown: [
        { segment: "Data Center Construction", value: "$75B", growth: "14.2% CAGR" },
        { segment: "Cooling & Power Equipment", value: "$65B", growth: "11.8% CAGR" },
        { segment: "DCIM & Monitoring Software", value: "$4.5B", growth: "22.7% CAGR" },
        { segment: "Edge Infrastructure", value: "$55B", growth: "23.6% CAGR" }
      ]
    },
    sam: {
      value: "$8.5B",
      label: "Serviceable Addressable Market",
      description: "Data center monitoring and infrastructure intelligence in North America and Europe",
      source: "MarketsandMarkets",
      breakdown: [
        { segment: "Enterprise DCIM", value: "$2.8B", growth: "Fortune 1000 facilities" },
        { segment: "Colocation Monitoring", value: "$2.2B", growth: "Multi-tenant facilities" },
        { segment: "Edge Monitoring", value: "$1.8B", growth: "Distributed infrastructure" },
        { segment: "Infrastructure Finance Data", value: "$1.7B", growth: "Lender/REIT analytics" }
      ]
    },
    som: {
      value: "$120M",
      label: "Serviceable Obtainable Market",
      description: "Year 5 revenue target: 500 facilities monitored, 50 enterprise customers, 10 REIT/lender partnerships",
      source: "Bottom-up model",
      breakdown: [
        { segment: "Platform Subscriptions", value: "$58M", growth: "500 facilities @ $9,700/mo avg" },
        { segment: "Reliability Data Licensing", value: "$32M", growth: "50 enterprises @ $640K/yr" },
        { segment: "Finance API Revenue", value: "$22M", growth: "10 REITs/lenders @ $2.2M/yr" },
        { segment: "Marketplace Transaction Fees", value: "$8M", growth: "2% of $400M capacity trades" }
      ]
    },
    additionalMarkets: [
      { name: "Edge Data Center Market", value: "$18.3B (2025)", cagr: "23.6%" },
      { name: "DCIM Software Segment", value: "$4.5B (2025)", cagr: "22.7%" },
      { name: "Edge Computing Market", value: "$168B (2025)", cagr: "13.2%" },
      { name: "Data Center REIT Market", value: "$120B+ market cap", cagr: "15%+" }
    ],
    keyMetrics: [
      { label: "Average colo facility", value: "$50-200M valuation" },
      { label: "Edge facility cost", value: "$1-10M each" },
      { label: "DCIM penetration rate", value: "<35% of facilities" },
      { label: "Reliability score value", value: "50-100 bps financing spread" }
    ]
  },

  competition: {
    title: "Competitive Landscape",
    overview: "The market is dominated by incumbent DCIM vendors who focus on single-facility management. Hyperscalers have internal tools but don't productize them. No platform provides cross-facility visibility with reliability scoring and finance integration.",
    players: [
      {
        name: "Schneider Electric (EcoStruxure)",
        type: "Legacy DCIM Leader",
        marketShare: "~25% of DCIM market",
        strengths: ["Hardware integration", "Enterprise relationships", "Brand recognition", "Global support"],
        weaknesses: ["Single-facility focus", "No cross-provider visibility", "Expensive implementation", "Slow innovation"],
        threat: "Low"
      },
      {
        name: "Vertiv (Liebert)",
        type: "Equipment Manufacturer",
        marketShare: "~18% of DCIM market",
        strengths: ["Equipment bundling", "Thermal expertise", "Colo relationships", "Service network"],
        weaknesses: ["Hardware-centric model", "Limited edge capability", "No reliability scoring", "Fragmented products"],
        threat: "Low"
      },
      {
        name: "Hyperscaler Internal Tools",
        type: "Walled Gardens",
        marketShare: "Internal use only",
        strengths: ["Massive scale experience", "AI/ML capabilities", "Integration depth", "Operational excellence"],
        weaknesses: ["Walled gardens", "No external access", "Not productized", "Competitive conflict"],
        threat: "Partner not competitor"
      },
      {
        name: "Nlyte / Sunbird / Device42",
        type: "Pure-Play DCIM",
        marketShare: "~15% combined",
        strengths: ["Modern software", "API-first", "Lower cost", "Faster deployment"],
        weaknesses: ["Limited scale", "No finance integration", "Single-facility focus", "No reliability scoring"],
        threat: "Medium"
      }
    ],
    ourAdvantage: {
      title: "DataPulse's Unfair Advantages",
      points: [
        "Network effects: More facilities monitored = better reliability benchmarks = more enterprise adoption = more facilities",
        "Data moat: Only aggregated view of distributed infrastructure performance across providers",
        "Finance integration: First platform connecting reliability data to lending/valuation decisions",
        "Cap-Ex alignment: REITs and lenders will pay for risk visibility that affects billions in financing",
        "Edge-first design: Built for distributed infrastructure, not retrofitted from enterprise DCIM"
      ]
    }
  },

  product: {
    title: "Product Roadmap",
    phases: [
      {
        phase: "Phase 1: Foundation",
        timeline: "Months 1-6",
        deliverables: [
          "Universal monitoring agents for major DCIM integrations",
          "Core platform with real-time telemetry dashboard",
          "Power, cooling, and connectivity metrics collection",
          "Basic reliability scoring algorithm",
          "Operator onboarding and self-service tools"
        ],
        milestone: "40 facilities onboarded, MVP live with 5 colo operators"
      },
      {
        phase: "Phase 2: Intelligence",
        timeline: "Months 7-12",
        deliverables: [
          "Advanced reliability scoring with predictive analytics",
          "PUE and sustainability benchmarking",
          "REIT/lender data portal beta",
          "Capacity inventory and forecasting module",
          "Enterprise multi-facility dashboard"
        ],
        milestone: "100 facilities, 3 REIT pilots, reliability scoring beta"
      },
      {
        phase: "Phase 3: Marketplace",
        timeline: "Year 2-3",
        deliverables: [
          "Capacity marketplace with price discovery",
          "Real-time finance API for lenders",
          "Due diligence automation for acquisitions",
          "Predictive maintenance and failure alerts",
          "Edge-specific monitoring optimizations"
        ],
        milestone: "500+ facilities, 10 REIT/lender partnerships, $120M ARR"
      }
    ]
  },

  businessModel: {
    title: "Business Model",
    overview: "Four-sided platform connecting data center operators, enterprises, capacity buyers, and infrastructure lenders around visibility, reliability, and financing efficiency.",
    revenueStreams: [
      {
        name: "Platform Subscriptions",
        description: "Monthly subscription for facility monitoring, analytics, and benchmarking",
        pricing: "$5,000-$25,000/month per facility based on size",
        margin: "88%",
        year1Revenue: "$2.4M",
        year3Revenue: "$28M",
        details: [
          "Universal monitoring agents",
          "Real-time dashboards",
          "Alerting and automation",
          "Benchmark reports",
          "API access"
        ]
      },
      {
        name: "Reliability Data Licensing",
        description: "Enterprise access to cross-facility reliability data, benchmarks, and vendor comparisons",
        pricing: "$400K-$1.2M annual contracts",
        margin: "92%",
        year1Revenue: "$800K",
        year3Revenue: "$12M",
        details: [
          "Facility reliability scores",
          "Vendor benchmarking",
          "Risk assessment data",
          "Procurement intelligence",
          "SLA verification"
        ]
      },
      {
        name: "Finance API Revenue",
        description: "Real-time infrastructure data feeds for REITs, lenders, and investors",
        pricing: "$1.5M-$5M annual contracts",
        margin: "94%",
        year1Revenue: "$600K",
        year3Revenue: "$8M",
        details: [
          "Asset performance data",
          "Due diligence automation",
          "Portfolio monitoring",
          "Risk scoring models",
          "Valuation inputs"
        ]
      },
      {
        name: "Marketplace Transaction Fees",
        description: "Percentage of capacity transactions facilitated through platform",
        pricing: "1.5-3% of transaction value",
        margin: "85%",
        year1Revenue: "$0",
        year3Revenue: "$4M",
        details: [
          "Capacity discovery",
          "Price transparency",
          "Contract facilitation",
          "Settlement processing",
          "Dispute resolution"
        ]
      }
    ],
    unitEconomics: {
      title: "Unit Economics Per Facility",
      metrics: [
        { label: "Customer Acquisition Cost (CAC)", value: "$24,000", note: "Sales + implementation cost" },
        { label: "Average Revenue Per Facility", value: "$9,700/month", note: "Blended across tiers" },
        { label: "Gross Margin", value: "85%", note: "After infrastructure costs" },
        { label: "Lifetime Value (LTV)", value: "$288,000", note: "5-year average retention" },
        { label: "LTV:CAC Ratio", value: "12:1", note: "Exceptional unit economics" },
        { label: "Payback Period", value: "8 months", note: "Fast capital efficiency" }
      ]
    }
  },

  goToMarket: {
    title: "Go-to-Market Strategy",
    phases: [
      {
        phase: "Land",
        timeline: "Months 1-6",
        strategy: "Colo Operator Focus",
        tactics: [
          "Target mid-tier colocation providers (Tier 2/3) underserved by Schneider/Vertiv",
          "Partner with data center construction firms for greenfield installs",
          "Offer free pilot with 3 facilities, convert to paid after 90 days",
          "Focus on operators frustrated with fragmented DCIM landscape"
        ],
        metrics: ["40 facilities onboarded", "75% pilot conversion", "NPS > 50"]
      },
      {
        phase: "Expand",
        timeline: "Months 7-12",
        strategy: "REIT & Finance Launch",
        tactics: [
          "Approach data center REITs with reliability data pilot proposals",
          "Target lenders active in data center financing (>$1B annually)",
          "Build case studies with progressive operators for enterprise sales",
          "Launch reliability scoring beta for industry visibility"
        ],
        metrics: ["5 REIT pilots", "100 facilities tracked", "95% uptime data accuracy"]
      },
      {
        phase: "Dominate",
        timeline: "Year 2+",
        strategy: "Platform Network Effects",
        tactics: [
          "Launch capacity marketplace for real-time trading",
          "Expand to edge data center operators and CDNs",
          "Build insurance and risk data products",
          "International expansion to Europe and Asia"
        ],
        metrics: ["500+ facilities", "10+ REIT/lender partnerships", "Category leader"]
      }
    ],
    channels: [
      { name: "Direct Enterprise Sales", description: "Dedicated sales team targeting colo operators and enterprises", cost: "High", effectiveness: "Very High" },
      { name: "REIT Partnerships", description: "Data center REITs refer portfolio companies for monitoring", cost: "Low", effectiveness: "Very High" },
      { name: "Industry Events", description: "Data Center World, DCD conferences, AFCOM", cost: "Medium", effectiveness: "High" },
      { name: "Equipment Partnerships", description: "OEM relationships with power/cooling vendors", cost: "Low", effectiveness: "Medium" },
      { name: "Content & Thought Leadership", description: "Reliability reports, benchmarking studies, industry research", cost: "Medium", effectiveness: "Medium" }
    ]
  },

  team: {
    title: "Team Requirements",
    currentNeeds: [
      {
        role: "CEO / Founder",
        skills: "Data center industry experience, enterprise sales, fundraising, vision",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "CTO",
        skills: "Distributed systems, monitoring infrastructure, data center operations",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Engineering",
        skills: "Platform development, monitoring agents, real-time systems",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Sales",
        skills: "Enterprise sales, REIT relationships, data center industry network",
        status: "Seeking",
        priority: "High"
      },
      {
        role: "Head of Data Science",
        skills: "Reliability algorithms, predictive analytics, benchmarking models",
        status: "Seeking",
        priority: "High"
      }
    ],
    advisorNeeds: [
      "Former data center REIT executive (Equinix, Digital Realty, CyrusOne alumni)",
      "Hyperscaler infrastructure leader (AWS, Google, Microsoft background)",
      "Data center lender or infrastructure investor",
      "Enterprise SaaS founder with B2B platform experience"
    ],
    orgPlan: {
      year1: "15 FTEs: 6 engineering, 4 sales, 3 ops, 2 G&A",
      year2: "40 FTEs: 15 engineering, 14 sales, 7 ops, 4 G&A",
      year3: "90 FTEs: 30 engineering, 35 sales, 15 ops, 10 G&A"
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "Hyperscaler Competition",
        severity: "High",
        likelihood: "Low",
        description: "AWS, Google, or Microsoft could productize their internal monitoring tools and offer cross-cloud visibility.",
        mitigation: "Focus on cross-cloud visibility they can't provide due to competitive conflict. Build relationships with colo operators and edge providers who want neutral third party. Position as Switzerland for infrastructure data."
      },
      {
        risk: "Data Center Operator Resistance",
        severity: "High",
        likelihood: "Medium",
        description: "Operators may resist sharing performance data, fearing competitive exposure or tenant transparency.",
        mitigation: "Lead with benchmarking value, not transparency. Show how reliability scores attract tenants and improve financing terms. Partner with progressive operators first to build case studies."
      },
      {
        risk: "Integration Complexity",
        severity: "Medium",
        likelihood: "High",
        description: "50+ different DCIM systems and equipment vendors create fragmented integration landscape.",
        mitigation: "Build universal agent that works with major equipment vendors. Start with software-only monitoring before hardware integration. Prioritize top 10 DCIM platforms for 80% coverage."
      },
      {
        risk: "Enterprise Sales Cycles",
        severity: "Medium",
        likelihood: "High",
        description: "Data center operators have 6-12 month procurement cycles. REITs even longer.",
        mitigation: "Offer self-serve for single facilities. Build case studies with early adopters. Partner with colo providers for distribution. Free pilots reduce friction."
      },
      {
        risk: "Data Security Concerns",
        severity: "Medium",
        likelihood: "Medium",
        description: "Infrastructure data is highly sensitive. Security concerns could slow adoption.",
        mitigation: "SOC 2 Type II certification from day one. Edge processing for sensitive data. Clear data ownership policies. Optional on-premise deployment for largest customers."
      },
      {
        risk: "Market Timing on Finance Integration",
        severity: "Low",
        likelihood: "Medium",
        description: "REITs and lenders may be slow to adopt reliability scoring into underwriting.",
        mitigation: "Build core monitoring revenue first. Finance integration is upside, not dependency. Partner with progressive lenders to create industry proof points."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Q1 2026", milestone: "Close $5M seed round, hire core engineering team", status: "target" },
      { timeline: "Q2 2026", milestone: "Launch monitoring platform MVP with 40 facilities", status: "target" },
      { timeline: "Q3 2026", milestone: "First data center REIT partnership signed", status: "target" },
      { timeline: "Q4 2026", milestone: "100 facilities monitored, reliability scoring beta", status: "target" },
      { timeline: "Q1 2027", milestone: "Finance API pilot with 3 lenders, $5M ARR", status: "target" },
      { timeline: "Q2 2027", milestone: "10 enterprise customers, edge expansion begins", status: "target" },
      { timeline: "Q3 2027", milestone: "Capacity marketplace beta launch", status: "target" },
      { timeline: "Q4 2027", milestone: "Series A at $120-150M valuation, $12M ARR", status: "target" }
    ]
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withFinancing: {
        name: "With REIT/Lender Partnerships (Recommended)",
        description: "Deep integration with data center REITs and lenders creates data moat and premium revenue",
        years: [
          { year: 1, revenue: "$3.8M", facilities: "75", arr: "$3.8M", burn: "$3.5M", runway: "17 months" },
          { year: 2, revenue: "$18M", facilities: "180", arr: "$18M", burn: "$1.5M", runway: "Profitable Y3" },
          { year: 3, revenue: "$52M", facilities: "320", arr: "$52M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$95M", facilities: "420", arr: "$95M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$135M", facilities: "550", arr: "$135M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$5M Seed",
        keyAssumptions: [
          "3 major data center REITs sign in Year 1",
          "Finance API drives 25% of revenue by Y3",
          "Reliability scoring becomes industry standard",
          "Capacity marketplace achieves $400M GMV by Y5"
        ]
      },
      withoutFinancing: {
        name: "Without Finance Integration (Conservative)",
        description: "Pure DCIM focus with facility subscriptions and enterprise data licensing only",
        years: [
          { year: 1, revenue: "$2.2M", facilities: "50", arr: "$2.2M", burn: "$2.5M", runway: "24 months" },
          { year: 2, revenue: "$9M", facilities: "120", arr: "$9M", burn: "$1M", runway: "24 months" },
          { year: 3, revenue: "$28M", facilities: "200", arr: "$28M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$52M", facilities: "300", arr: "$52M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$82M", facilities: "400", arr: "$82M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$3.5M Seed",
        keyAssumptions: [
          "Facility acquisition primary driver",
          "Slower enterprise adoption without finance data",
          "More capital-efficient growth path",
          "Incumbent competitive response expected"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $5M Seed Funds",
      breakdown: [
        { category: "Engineering & Product", amount: "$2.1M", percentage: 42, detail: "Platform build, monitoring agents, reliability algorithms, infrastructure" },
        { category: "Sales & Partnerships", amount: "$1.3M", percentage: 26, detail: "REIT partnerships, enterprise sales, operator onboarding" },
        { category: "Operations & Infrastructure", amount: "$750K", percentage: 15, detail: "Monitoring infrastructure, data processing, security, SOC 2" },
        { category: "Marketing", amount: "$600K", percentage: 12, detail: "Brand building, industry positioning, events, content" },
        { category: "G&A & Buffer", amount: "$250K", percentage: 5, detail: "Legal, compliance, administration, contingency" }
      ]
    }
  },

  ask: {
    title: "The Ask",
    amount: "$5,000,000",
    round: "Seed Round",
    terms: "Priced round at $20M post-money valuation",
    useOfFunds: [
      "Build universal infrastructure monitoring platform",
      "Establish partnerships with 3+ data center REITs",
      "Develop reliability scoring algorithms and benchmarks",
      "Onboard first 75 facilities and 5 enterprise customers"
    ],
    timeline: "18-month runway to Series A milestones",
    seriesA: {
      timing: "Q4 2027",
      metrics: "$12M ARR, 180+ facilities, 5+ REIT partnerships",
      raise: "$25-35M at $120-150M valuation"
    },
    targetInvestors: [
      "Infrastructure technology investors (Andreessen, Founders Fund)",
      "Data center-focused VCs (Digital Bridge, DigitalOcean Ventures)",
      "Real estate tech investors",
      "Strategic: Colo operators, equipment manufacturers"
    ]
  },

  sources: [
    { name: "Grand View Research - DCIM Market Report 2030", url: "https://www.grandviewresearch.com/industry-analysis/data-center-infrastructure-management", detail: "$4.5B market in 2025, growing at 22.7% CAGR to $33.6B by 2034" },
    { name: "MarketsandMarkets - DCIM Market Size", url: "https://www.marketsandmarkets.com/Market-Reports/data-center-infrastructure-management-market-576.html", detail: "DCIM market $3.02B in 2024, projected $5.01B by 2029 at 10.6% CAGR" },
    { name: "MarketsandMarkets - Edge Data Center Market", url: "https://www.marketsandmarkets.com/Market-Reports/edge-data-center-market-142018469.html", detail: "Edge DC market $50.86B in 2025, growing to $109.2B by 2030 at 16.5% CAGR" },
    { name: "Mordor Intelligence - Edge Data Center Market", url: "https://www.mordorintelligence.com/industry-reports/edge-data-center-market", detail: "Edge DC $18.08B in 2025, $52.11B by 2030 at 23.58% CAGR" },
    { name: "GM Insights - DCIM Market Analysis", url: "https://www.gminsights.com/industry-analysis/data-center-infrastructure-management-market", detail: "DCIM market projected $33.6B by 2034, North America 40% share" },
    { name: "JLL - Data Center Investment Outlook", url: "https://www.us.jll.com/en/trends-and-insights/research/data-center-outlook", detail: "Data center REIT and investment market trends" },
    { name: "Uptime Institute - Data Center Industry Survey", url: "https://uptimeinstitute.com/resources/research-and-reports", detail: "Industry reliability metrics and operational benchmarks" },
    { name: "Precedence Research - Edge Data Center Market", url: "https://www.precedenceresearch.com/edge-data-center-market", detail: "Edge DC $18.32B in 2025 to $84.41B by 2034 at 18.5% CAGR" }
  ]
}

// Helper Components
function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-cyan-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {subtitle && <p className="text-gray-600 ml-13">{subtitle}</p>}
    </div>
  )
}

function StatCard({ value, label, sublabel }: { value: string; label: string; sublabel?: string }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
      <div className="text-3xl font-bold text-cyan-600">{value}</div>
      <div className="text-sm font-medium text-gray-900 mt-1">{label}</div>
      {sublabel && <div className="text-xs text-gray-500 mt-1">{sublabel}</div>}
    </div>
  )
}

function ExpandableSection({ title, children, defaultOpen = false }: { title: React.ReactNode; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="font-medium text-gray-900">{title}</div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {isOpen && <div className="p-4 border-t border-gray-200">{children}</div>}
    </div>
  )
}

export default function BusinessPlanPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'detailed' | 'financials'>('overview')

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <a
            href="/tokens/#framework"
            className="inline-flex items-center gap-2 text-cyan-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cap-Ex Opportunities
          </a>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{businessPlan.companyName}</h1>
                  <p className="text-cyan-100">{businessPlan.tagline}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-cyan-200">{businessPlan.version}</div>
              <div className="text-sm text-cyan-200">{businessPlan.date}</div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.ask.amount}</div>
              <div className="text-sm text-cyan-100">Seed Round</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">$4.5B</div>
              <div className="text-sm text-cyan-100">DCIM Market (2025)</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">22.7%</div>
              <div className="text-sm text-cyan-100">Market CAGR</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">12:1</div>
              <div className="text-sm text-cyan-100">LTV:CAC</div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 py-3">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'overview' ? 'bg-cyan-100 text-cyan-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Executive Summary
            </button>
            <button
              onClick={() => setActiveTab('detailed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'detailed' ? 'bg-cyan-100 text-cyan-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Full Plan
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'financials' ? 'bg-cyan-100 text-cyan-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <LineChart className="w-4 h-4 inline mr-2" />
              Financials
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Executive Summary */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={FileText} title="Executive Summary" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 mb-2">The Problem</h4>
                    <p className="text-sm text-gray-700">{businessPlan.executiveSummary.problem}</p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-800 mb-2">Our Solution</h4>
                    <p className="text-sm text-gray-700">{businessPlan.executiveSummary.solution}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-800 mb-2">Market Opportunity</h4>
                    <p className="text-sm text-gray-700">{businessPlan.executiveSummary.market}</p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-800 mb-2">The Ask</h4>
                    <p className="text-sm text-gray-700">{businessPlan.executiveSummary.ask}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Problem */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={AlertTriangle} title={businessPlan.problem.title} />

              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.problem.points.map((point, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">{point.stat}</div>
                        <div className="text-xs text-gray-500">{point.statLabel}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{point.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{point.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Solution */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Lightbulb} title={businessPlan.solution.title} subtitle={businessPlan.solution.tagline} />

              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.solution.pillars.map((pillar, i) => {
                  const IconComponent = pillar.icon === 'Server' ? Server :
                    pillar.icon === 'BarChart3' ? BarChart3 :
                    pillar.icon === 'Cloud' ? Cloud :
                    pillar.icon === 'DollarSign' ? DollarSign : Server
                  return (
                    <div key={i} className="p-4 bg-cyan-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5 text-cyan-600" />
                        <h4 className="font-semibold text-gray-900">{pillar.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {pillar.features.map((feature, j) => (
                          <span key={j} className="px-2 py-0.5 bg-cyan-100 text-cyan-700 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Why Now */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Clock} title={businessPlan.whyNow.title} />

              <div className="grid md:grid-cols-3 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => {
                  const IconComponent = factor.icon === 'TrendingUp' ? TrendingUp :
                    factor.icon === 'Building2' ? Building2 :
                    factor.icon === 'ThermometerSun' ? ThermometerSun :
                    factor.icon === 'Cloud' ? Cloud :
                    factor.icon === 'Cpu' ? Cpu : Clock
                  return (
                    <div key={i} className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-4 h-4 text-blue-600" />
                        <h4 className="font-semibold text-gray-900">{factor.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{factor.detail}</p>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Market Size */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={PieChart} title={businessPlan.marketSize.title} />

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.tam.label}</div>
                  <div className="text-sm text-cyan-100 mt-1">{businessPlan.marketSize.tam.description}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.sam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.sam.label}</div>
                  <div className="text-sm text-green-100 mt-1">{businessPlan.marketSize.sam.description}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.som.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.som.label}</div>
                  <div className="text-sm text-purple-100 mt-1">{businessPlan.marketSize.som.description}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Adjacent Markets</h4>
                  <div className="space-y-2">
                    {businessPlan.marketSize.additionalMarkets.map((market, i) => (
                      <div key={i} className="flex justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm text-gray-700">{market.name}</span>
                        <span className="text-sm font-medium text-gray-900">{market.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Key Metrics</h4>
                  <div className="space-y-2">
                    {businessPlan.marketSize.keyMetrics.map((metric, i) => (
                      <div key={i} className="flex justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm text-gray-700">{metric.label}</span>
                        <span className="text-sm font-medium text-gray-900">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* The Ask */}
            <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">{businessPlan.ask.title}</h2>
                <div className="text-5xl font-bold mb-2">{businessPlan.ask.amount}</div>
                <div className="text-xl text-cyan-100">{businessPlan.ask.round}</div>
                <div className="text-cyan-200 mt-2">{businessPlan.ask.terms}</div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Use of Funds</h4>
                  <ul className="space-y-2">
                    {businessPlan.ask.useOfFunds.map((use, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Series A Target</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-cyan-200">Timing:</span> {businessPlan.ask.seriesA.timing}</p>
                    <p><span className="text-cyan-200">Metrics:</span> {businessPlan.ask.seriesA.metrics}</p>
                    <p><span className="text-cyan-200">Raise:</span> {businessPlan.ask.seriesA.raise}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'detailed' && (
          <div className="space-y-8">
            {/* Competition */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Users} title={businessPlan.competition.title} />

              <p className="text-gray-600 mb-4">{businessPlan.competition.overview}</p>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-medium text-gray-900">Competitor</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-900">Market Share</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-900">Strengths</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-900">Weaknesses</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-900">Threat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {businessPlan.competition.players.map((player, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-3 px-2">
                          <div className="font-medium text-gray-900">{player.name}</div>
                          <div className="text-xs text-gray-500">{player.type}</div>
                        </td>
                        <td className="py-3 px-2 text-sm">{player.marketShare}</td>
                        <td className="py-3 px-2">
                          <ul className="text-xs text-gray-600 space-y-1">
                            {player.strengths.slice(0, 2).map((s, j) => (
                              <li key={j}>+ {s}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="py-3 px-2">
                          <ul className="text-xs text-gray-600 space-y-1">
                            {player.weaknesses.slice(0, 2).map((w, j) => (
                              <li key={j}>- {w}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="py-3 px-2">
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                            player.threat === 'Partner not competitor' ? 'bg-blue-100 text-blue-700' :
                            player.threat === 'Low' ? 'bg-green-100 text-green-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {player.threat}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-cyan-50 rounded-lg">
                <h4 className="font-semibold text-cyan-800 mb-2">{businessPlan.competition.ourAdvantage.title}</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {businessPlan.competition.ourAdvantage.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Product Roadmap */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Wrench} title={businessPlan.product.title} />

              <div className="space-y-6">
                {businessPlan.product.phases.map((phase, i) => (
                  <div key={i} className="border-l-4 border-cyan-400 pl-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-cyan-100 text-cyan-700 rounded text-xs font-medium">
                        {phase.timeline}
                      </span>
                      <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 mb-3">
                      {phase.deliverables.map((deliverable, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                    <div className="p-2 bg-green-50 rounded text-sm">
                      <span className="font-medium text-green-800">Milestone:</span>{' '}
                      <span className="text-gray-700">{phase.milestone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Business Model */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={DollarSign} title={businessPlan.businessModel.title} />

              <p className="text-gray-600 mb-4">{businessPlan.businessModel.overview}</p>

              <div className="grid gap-4 mb-6">
                {businessPlan.businessModel.revenueStreams.map((stream, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">{stream.name}</h4>
                        <p className="text-sm text-gray-600">{stream.description}</p>
                      </div>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">
                        {stream.margin} margin
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-3 text-sm">
                      <div>
                        <span className="text-gray-500">Pricing:</span>
                        <span className="ml-2 font-medium">{stream.pricing}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Year 1:</span>
                        <span className="ml-2 font-medium">{stream.year1Revenue}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Year 3:</span>
                        <span className="ml-2 font-medium">{stream.year3Revenue}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-cyan-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{businessPlan.businessModel.unitEconomics.title}</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {businessPlan.businessModel.unitEconomics.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-cyan-600">{metric.value}</div>
                      <div className="text-sm font-medium text-gray-900">{metric.label}</div>
                      <div className="text-xs text-gray-500">{metric.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Go-to-Market */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Target} title={businessPlan.goToMarket.title} />

              <div className="space-y-6">
                {businessPlan.goToMarket.phases.map((phase, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{phase.phase}: {phase.strategy}</h4>
                        <span className="text-sm text-gray-500">{phase.timeline}</span>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-2">Tactics</h5>
                        <ul className="space-y-1">
                          {phase.tactics.map((tactic, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                              {tactic}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-2">Success Metrics</h5>
                        <div className="flex flex-wrap gap-2">
                          {phase.metrics.map((metric, j) => (
                            <span key={j} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-gray-900 mb-3">Distribution Channels</h4>
                <div className="grid md:grid-cols-3 gap-3">
                  {businessPlan.goToMarket.channels.map((channel, i) => (
                    <div key={i} className="p-3 border border-gray-200 rounded-lg">
                      <h5 className="font-medium text-gray-900 text-sm">{channel.name}</h5>
                      <p className="text-xs text-gray-600 mt-1">{channel.description}</p>
                      <div className="flex gap-2 mt-2">
                        <span className={`px-1.5 py-0.5 rounded text-xs ${
                          channel.cost === 'Low' ? 'bg-green-100 text-green-700' :
                          channel.cost === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {channel.cost} cost
                        </span>
                        <span className={`px-1.5 py-0.5 rounded text-xs ${
                          channel.effectiveness.includes('High') ? 'bg-green-100 text-green-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {channel.effectiveness}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Team */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Users} title={businessPlan.team.title} />

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {businessPlan.team.currentNeeds.map((need, i) => (
                  <div key={i} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{need.role}</h4>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        need.priority === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {need.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{need.skills}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 bg-cyan-100 text-cyan-700 rounded text-xs">
                      {need.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">Advisory Board Needs</h4>
                  <ul className="space-y-2">
                    {businessPlan.team.advisorNeeds.map((advisor, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <Award className="w-4 h-4 text-cyan-500" />
                        {advisor}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">Organization Plan</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium text-gray-700">Year 1:</span> <span className="text-gray-600">{businessPlan.team.orgPlan.year1}</span></p>
                    <p><span className="font-medium text-gray-700">Year 2:</span> <span className="text-gray-600">{businessPlan.team.orgPlan.year2}</span></p>
                    <p><span className="font-medium text-gray-700">Year 3:</span> <span className="text-gray-600">{businessPlan.team.orgPlan.year3}</span></p>
                  </div>
                </div>
              </div>
            </section>

            {/* Risks */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Shield} title={businessPlan.risks.title} />

              <div className="space-y-4">
                {businessPlan.risks.risks.map((risk, i) => (
                  <ExpandableSection key={i} title={
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        risk.severity === 'High' ? 'bg-red-100 text-red-700' :
                        risk.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {risk.severity}
                      </span>
                      <span>{risk.risk}</span>
                    </div>
                  }>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Likelihood:</span>
                        <span className={`ml-2 px-2 py-0.5 rounded text-xs font-medium ${
                          risk.likelihood === 'High' ? 'bg-red-100 text-red-700' :
                          risk.likelihood === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>{risk.likelihood}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-700">Description:</span>
                        <p className="text-sm text-gray-600 mt-1">{risk.description}</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded">
                        <span className="text-sm font-medium text-green-800">Mitigation:</span>
                        <p className="text-sm text-gray-700 mt-1">{risk.mitigation}</p>
                      </div>
                    </div>
                  </ExpandableSection>
                ))}
              </div>
            </section>

            {/* Milestones */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Target} title={businessPlan.milestones.title} />

              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-cyan-200" />
                <div className="space-y-4">
                  {businessPlan.milestones.items.map((item, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-cyan-500 border-2 border-white" />
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-cyan-600">{item.timeline}</span>
                        <p className="text-gray-700 mt-1">{item.milestone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'financials' && (
          <div className="space-y-8">
            {/* Financial Projections */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={LineChart} title="Financial Projections" />

              <div className="space-y-8">
                {/* Scenario 1: With REIT/Lender Partnerships */}
                <div className="p-4 bg-cyan-50 rounded-lg border-2 border-cyan-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-cyan-600 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withFinancing.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-cyan-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Facilities</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withFinancing.years.map((year, i) => (
                          <tr key={i} className="border-b border-cyan-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.facilities}</td>
                            <td className="py-2 px-3 text-right">{year.arr}</td>
                            <td className={`py-2 px-3 text-right ${year.burn === '$0' ? 'text-green-600' : 'text-red-600'}`}>
                              {year.burn}
                            </td>
                            <td className={`py-2 px-3 text-right ${year.runway === 'Profitable' ? 'text-green-600' : 'text-gray-600'}`}>
                              {year.runway}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-3 bg-white rounded">
                    <h5 className="text-sm font-medium text-gray-900 mb-2">Key Assumptions</h5>
                    <ul className="grid md:grid-cols-2 gap-1">
                      {businessPlan.financials.scenarios.withFinancing.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-cyan-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-cyan-600">
                      Funding Required: {businessPlan.financials.scenarios.withFinancing.fundingRequired}
                    </span>
                  </div>
                </div>

                {/* Scenario 2: Without Finance Integration */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{businessPlan.financials.scenarios.withoutFinancing.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withoutFinancing.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Facilities</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutFinancing.years.map((year, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.facilities}</td>
                            <td className="py-2 px-3 text-right">{year.arr}</td>
                            <td className={`py-2 px-3 text-right ${year.burn === '$0' ? 'text-green-600' : 'text-red-600'}`}>
                              {year.burn}
                            </td>
                            <td className={`py-2 px-3 text-right ${year.runway === 'Profitable' ? 'text-green-600' : 'text-gray-600'}`}>
                              {year.runway}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-3 bg-white rounded">
                    <h5 className="text-sm font-medium text-gray-900 mb-2">Key Assumptions</h5>
                    <ul className="grid md:grid-cols-2 gap-1">
                      {businessPlan.financials.scenarios.withoutFinancing.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-gray-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-gray-600">
                      Funding Required: {businessPlan.financials.scenarios.withoutFinancing.fundingRequired}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Use of Funds */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={DollarSign} title={businessPlan.financials.useOfFunds.title} />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {businessPlan.financials.useOfFunds.breakdown.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-16 text-right">
                        <span className="text-lg font-bold text-cyan-600">{item.percentage}%</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-6 bg-gray-200 rounded overflow-hidden">
                          <div
                            className="h-full bg-cyan-500 rounded"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                      <div className="w-32">
                        <div className="font-medium text-gray-900">{item.amount}</div>
                        <div className="text-xs text-gray-500">{item.category}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {businessPlan.financials.useOfFunds.breakdown.map((item, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded">
                      <h4 className="font-medium text-gray-900 text-sm">{item.category}</h4>
                      <p className="text-xs text-gray-600 mt-1">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Unit Economics Detail */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={BarChart3} title="Unit Economics" />

              <div className="grid md:grid-cols-3 gap-4">
                {businessPlan.businessModel.unitEconomics.metrics.map((metric, i) => (
                  <div key={i} className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-cyan-600">{metric.value}</div>
                    <div className="text-sm font-medium text-gray-900 mt-1">{metric.label}</div>
                    <div className="text-xs text-gray-500 mt-1">{metric.note}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Sources */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-8">
          <SectionHeader icon={ExternalLink} title="Sources & References" />

          <div className="grid md:grid-cols-2 gap-3">
            {businessPlan.sources.map((source, i) => (
              <a
                key={i}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm group-hover:text-cyan-600 transition-colors">
                      {source.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{source.detail}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 transition-colors flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">{businessPlan.companyName}</h3>
          <p className="text-gray-400">{businessPlan.tagline}</p>
          <p className="text-gray-500 text-sm mt-4">
            {businessPlan.version} | {businessPlan.date}
          </p>
          <div className="mt-6">
            <a
              href="https://hyder.me/#contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors"
            >
              <Briefcase className="w-5 h-5" />
              Contact for Investment Inquiries
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
