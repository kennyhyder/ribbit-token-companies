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
  Sun,
  FileText,
  Briefcase,
  Scale,
  Lightbulb,
  Globe,
  Award,
  PieChart,
  LineChart,
  Battery
} from 'lucide-react'

// Business Plan Data
const businessPlan = {
  companyName: "SolarScore",
  tagline: "The Network of Record for Solar & Storage",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Solar installer market is massively fragmented—top 3 installers hold only 21% share. Sunrun/Tesla use subcontractors with no quality visibility. Lenders funding $15B+ annually are flying blind on installer performance, leading to higher defaults and warranty claims.",
    solution: "SolarScore aggregates the fragmented installer network with quality scores, standardized quoting, and performance tracking—becoming the 'network of record' that lenders, utilities, and homeowners trust.",
    market: "$9.5B residential solar + storage market (2025). Growing 14%+ CAGR. Post-ITC expiration Dec 2025 creates flight to TPO models where installer quality matters even more.",
    ask: "$5M Seed Round to build installer network platform, establish lender partnerships, and capture first-mover advantage as the quality layer for distributed energy."
  },

  problem: {
    title: "The Solar Quality Crisis",
    points: [
      {
        title: "Massive Fragmentation",
        detail: "Top 3 installers (Sunrun 12.5%, Tesla 4.2%, Freedom Forever 4.0%) hold only 21% market share. Thousands of local installers with no standardized quality tracking.",
        stat: "21%",
        statLabel: "market share held by top 3 installers"
      },
      {
        title: "Subcontractor Chaos",
        detail: "Even major players like Tesla rely heavily on subcontractors. Sunrun partners with third-party installers. No visibility into actual installation quality or technician certification.",
        stat: "70%+",
        statLabel: "of installs done by subcontractors"
      },
      {
        title: "Lender Blindness",
        detail: "Solar lenders (Mosaic, Sunlight, GoodLeap) fund $15B+ annually with minimal installer vetting. Default rates correlate with installer quality but comprehensive data doesn't exist.",
        stat: "$15B+",
        statLabel: "annual solar lending with poor installer data"
      },
      {
        title: "ITC Cliff Creates Urgency",
        detail: "Residential 30% ITC expires Dec 31, 2025 for homeowners. TPO (lease/PPA) becomes only path to tax credits. Lenders need quality data more than ever to protect their assets.",
        stat: "Dec 2025",
        statLabel: "residential ITC expiration"
      }
    ]
  },

  solution: {
    title: "SolarScore: The Quality Layer for Distributed Energy",
    tagline: "Aggregate. Score. Standardize. Trust.",
    pillars: [
      {
        icon: "Sun",
        title: "Installer Network",
        description: "Aggregated network of vetted solar and storage installers with real-time capacity, coverage areas, and certification status.",
        features: ["5,000+ installer profiles", "Real-time availability", "Certification tracking", "Coverage mapping"]
      },
      {
        icon: "BarChart3",
        title: "Quality Scoring",
        description: "Data-driven installer scores based on installation quality, customer satisfaction, warranty claims, and system performance.",
        features: ["0-100 quality score", "Performance tracking", "Warranty analytics", "Customer reviews"]
      },
      {
        icon: "FileText",
        title: "Standardized Quoting",
        description: "Universal quote format that lenders, utilities, and homeowners can trust. Apples-to-apples comparison across installers.",
        features: ["Standard quote format", "Equipment verification", "Price benchmarking", "Scope validation"]
      },
      {
        icon: "Zap",
        title: "Performance Intelligence",
        description: "Post-installation monitoring data aggregated across the network. Predictive analytics for lenders and insurers.",
        features: ["Production monitoring", "Degradation tracking", "Failure prediction", "Fleet analytics"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "ITC Cliff Reshapes Market",
        detail: "Dec 2025 ITC expiration for homeowners pushes market to TPO models. Third-party owners (lenders, utilities) need installer quality data to protect their long-term assets.",
        icon: "Clock"
      },
      {
        title: "Storage Attachment Surging",
        detail: "Battery attachment rates hitting 30%+ in key markets (CA, TX, FL). Storage adds complexity—installers need certification, lenders need quality assurance for higher ticket installs.",
        icon: "Battery"
      },
      {
        title: "Lender Consolidation",
        detail: "Solar lending consolidating around Mosaic, Sunlight, GoodLeap. Fewer, larger players with budgets and willingness to pay for installer intelligence.",
        icon: "DollarSign"
      },
      {
        title: "Grid Reliability Focus",
        detail: "Utilities investing heavily in distributed energy as grid infrastructure. Need installer networks for low-income programs, virtual power plants, demand response.",
        icon: "Globe"
      },
      {
        title: "AI/Data Timing",
        detail: "Machine learning models can now predict installer quality from diverse data sources. First mover to aggregate data wins the network effect.",
        icon: "TrendingUp"
      }
    ]
  },

  marketSize: {
    title: "Market Opportunity",
    tam: {
      value: "$9.5B",
      label: "Total Addressable Market",
      description: "U.S. Residential Solar + Storage Installation Market (2025)",
      source: "SEIA, Grand View Research"
    },
    sam: {
      value: "$1.4B",
      label: "Serviceable Addressable Market",
      description: "Platform fees, lender subscriptions, data licensing, lead marketplace",
      source: "Industry analysis"
    },
    som: {
      value: "$78M",
      label: "Serviceable Obtainable Market",
      description: "Year 5 target: 2,500 installers, 8 lender partnerships, 50K installs",
      source: "Conservative capture estimate"
    },
    additionalMarkets: [
      { name: "Residential Solar Installation", value: "$7.45B", cagr: "14.4%" },
      { name: "Residential Battery Storage", value: "$2.0B", cagr: "14.4%" },
      { name: "Commercial Distributed Solar", value: "$4.2B", cagr: "8.5%" },
      { name: "Solar Lending Market", value: "$15B+ annually", cagr: "12%" }
    ],
    keyMetrics: [
      { label: "Avg residential install cost", value: "$25,000-$35,000" },
      { label: "Battery attachment rate", value: "30%+ in key markets" },
      { label: "Top 3 installer market share", value: "21%" },
      { label: "ITC expiration impact", value: "Dec 2025" }
    ]
  },

  competition: {
    title: "Competitive Landscape",
    players: [
      {
        name: "EnergySage",
        type: "Consumer Marketplace",
        marketShare: "~8% of leads",
        strengths: ["Strong consumer brand", "Large quote volume", "Established marketplace"],
        weaknesses: ["Lead-gen only model", "No quality scoring", "No lender relationships", "No post-install tracking"],
        threat: "Medium - different positioning"
      },
      {
        name: "Aurora Solar",
        type: "Installer Software",
        marketShare: "~40% of installer software",
        strengths: ["Industry-standard design tool", "Large installer base", "Strong product"],
        weaknesses: ["Software tool not network", "No quality data", "No lender integration", "Installer-focused only"],
        threat: "Low - potential partner"
      },
      {
        name: "Sunrun/Tesla",
        type: "Vertically Integrated",
        marketShare: "~17% combined",
        strengths: ["Brand recognition", "Financing integration", "National scale"],
        weaknesses: ["Compete with installers", "Limited choice", "High CAC", "Subcontractor quality issues"],
        threat: "Low - different model"
      },
      {
        name: "Solar Lenders",
        type: "Finance Companies",
        marketShare: "~65% of solar lending",
        strengths: ["Capital access", "Installer relationships", "Transaction volume"],
        weaknesses: ["Not core competency", "Fragmented data", "Regulatory limits"],
        threat: "Partners not competitors"
      }
    ],
    ourAdvantage: {
      title: "SolarScore's Unfair Advantages",
      points: [
        "Network effects: More installers = better data = more lender adoption = more installer demand",
        "First comprehensive quality layer for distributed solar becomes industry standard",
        "Data moat: Aggregated performance data across thousands of installers is defensible",
        "B2B positioning avoids EnergySage's B2C lead-gen competition",
        "Lender relationships create enterprise anchor revenue"
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
          "Installer profile platform (web + mobile)",
          "Quality scoring algorithm v1 (certification, reviews, claims data)",
          "Standardized quote format and comparison tools",
          "Lender API for installer quality lookup",
          "Homeowner matching interface"
        ],
        milestone: "500 installers onboarded, 2 lender pilots signed"
      },
      {
        phase: "Phase 2: Scale",
        timeline: "Months 7-12",
        deliverables: [
          "Performance monitoring integrations (Enphase, SolarEdge, Tesla)",
          "Advanced quality scoring with ML predictions",
          "Utility program management module",
          "Mobile app for installers (leads, jobs, scores)",
          "Lender risk analytics dashboard"
        ],
        milestone: "1,500 installers, 5 lender partnerships, $5M ARR"
      },
      {
        phase: "Phase 3: Dominate",
        timeline: "Year 2-3",
        deliverables: [
          "National coverage (5,000+ installers)",
          "Real-time quality monitoring and alerts",
          "Warranty prediction and pricing models",
          "Commercial solar expansion",
          "Insurance product integrations"
        ],
        milestone: "$25M+ ARR, market leader in installer intelligence"
      }
    ]
  },

  businessModel: {
    title: "Business Model",
    revenueStreams: [
      {
        name: "Installer SaaS",
        description: "Monthly subscription for installers to access network, receive qualified leads, and build quality scores",
        pricing: "$299-$1,499/month based on volume",
        margin: "80%+",
        year1Revenue: "$2.4M",
        year3Revenue: "$24M"
      },
      {
        name: "Lender Data Licensing",
        description: "API access to installer quality scores, performance data, and risk analytics for underwriting",
        pricing: "$150K-$500K annual contracts",
        margin: "90%+",
        year1Revenue: "$600K",
        year3Revenue: "$18M"
      },
      {
        name: "Transaction Fees",
        description: "Per-install fees for deals closed through platform matching and quality guarantee program",
        pricing: "$300-$800 per closed install",
        margin: "85%+",
        year1Revenue: "$400K",
        year3Revenue: "$12M"
      },
      {
        name: "Utility Program Management",
        description: "White-label installer networks for utility low-income solar, VPP, and grid services programs",
        pricing: "$50K-$200K per program + per-install fees",
        margin: "70%+",
        year1Revenue: "$200K",
        year3Revenue: "$8M"
      }
    ],
    unitEconomics: {
      title: "Unit Economics Per Installer",
      metrics: [
        { label: "Customer Acquisition Cost (CAC)", value: "$1,200", note: "Digital + sales + onboarding" },
        { label: "Average Revenue Per Installer (ARPI)", value: "$800/month", note: "Blended across tiers" },
        { label: "Gross Margin", value: "82%", note: "After platform costs" },
        { label: "Lifetime Value (LTV)", value: "$14,400", note: "Assuming 18-month retention" },
        { label: "LTV:CAC Ratio", value: "12:1", note: "Excellent unit economics" },
        { label: "Payback Period", value: "5 months", note: "Fast capital efficiency" }
      ]
    }
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withLenderPartnerships: {
        name: "With Lender Partnerships (Recommended)",
        description: "Deep lender integration creates data moat and enterprise anchor revenue",
        years: [
          { year: 1, revenue: "$3.6M", customers: "500 installers", arr: "$3.6M", burn: "$3.4M", runway: "18 months" },
          { year: 2, revenue: "$14M", customers: "1,500 installers", arr: "$14M", burn: "$1.5M", runway: "Profitable Q4" },
          { year: 3, revenue: "$42M", customers: "2,500 installers", arr: "$42M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$72M", customers: "3,500 installers", arr: "$72M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$98M", customers: "4,500 installers", arr: "$98M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$5M Seed",
        keyAssumptions: [
          "3 major lender partnerships signed by end of Year 2",
          "Data licensing drives 35% of revenue by Year 3",
          "Installer network reaches 25% of quality installers",
          "Utility programs add recurring base revenue",
          "Battery storage attachment accelerates ARPI growth"
        ]
      },
      withoutLenderPartnerships: {
        name: "Without Lender Partnerships (Conservative)",
        description: "Consumer marketplace focus with installer subscriptions and transaction fees",
        years: [
          { year: 1, revenue: "$1.8M", customers: "350 installers", arr: "$1.8M", burn: "$2.2M", runway: "27 months" },
          { year: 2, revenue: "$6.5M", customers: "900 installers", arr: "$6.5M", burn: "$1.2M", runway: "Profitable Q2 Y3" },
          { year: 3, revenue: "$18M", customers: "1,600 installers", arr: "$18M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$35M", customers: "2,200 installers", arr: "$35M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$58M", customers: "3,000 installers", arr: "$58M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$3.5M Seed",
        keyAssumptions: [
          "Consumer lead gen primary revenue driver",
          "Slower lender adoption without enterprise sales",
          "More capital-efficient growth path",
          "Competitive pressure from EnergySage",
          "Lower enterprise revenue but sustainable growth"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $5M Seed Funds",
      breakdown: [
        { category: "Engineering & Product", amount: "$2.0M", percentage: 40, detail: "Platform build, installer tools, monitoring integrations, ML scoring" },
        { category: "Sales & Partnerships", amount: "$1.5M", percentage: 30, detail: "Lender BD, utility partnerships, enterprise sales team" },
        { category: "Data & Analytics", amount: "$750K", percentage: 15, detail: "Quality scoring models, performance analytics, data infrastructure" },
        { category: "Marketing & Growth", amount: "$500K", percentage: 10, detail: "Installer acquisition, industry positioning, content" },
        { category: "G&A & Buffer", amount: "$250K", percentage: 5, detail: "Legal, compliance, office, contingency" }
      ]
    }
  },

  goToMarket: {
    title: "Go-to-Market Strategy",
    phases: [
      {
        phase: "Land",
        timeline: "Months 1-6",
        strategy: "Quality Installer Acquisition",
        tactics: [
          "Target top 500 installers in CA, TX, FL (highest volume markets)",
          "Lead with value: free quality profile, leads, quote tools",
          "Partner with distributors (CED Greentech, BayWa) for reach",
          "Quality-first messaging attracts best installers who want differentiation"
        ],
        metrics: ["500 installers onboarded", "85% activation rate", "NPS > 50"]
      },
      {
        phase: "Expand",
        timeline: "Months 7-12",
        strategy: "Lender Partnership",
        tactics: [
          "Approach Mosaic, GoodLeap, Sunlight with pilot proposals",
          "Demonstrate ROI: reduced defaults, faster underwriting",
          "Offer exclusive data access in exchange for installer referrals",
          "Build case studies showing quality score correlation to outcomes"
        ],
        metrics: ["5 lender partnerships", "100K installer lookups/month", "Measurable default reduction"]
      },
      {
        phase: "Dominate",
        timeline: "Year 2+",
        strategy: "Industry Standard",
        tactics: [
          "Leverage lender requirements to drive installer adoption",
          "Expand to utility programs and commercial solar",
          "Launch quality certification program (SolarScore Certified)",
          "Build insurance and warranty products on data"
        ],
        metrics: ["5,000+ installers", "8+ lender partnerships", "Industry standard positioning"]
      }
    ],
    channels: [
      { name: "Distributor Partnerships", description: "CED, BayWa, Soligent referrals to installers", cost: "Low", effectiveness: "High" },
      { name: "Lender Referrals", description: "Lenders require/recommend SolarScore to installers", cost: "Low", effectiveness: "Very High" },
      { name: "Direct Sales", description: "Field sales team targeting high-volume installers", cost: "High", effectiveness: "High" },
      { name: "Industry Events", description: "Intersolar, RE+, state solar conferences", cost: "Medium", effectiveness: "Medium" },
      { name: "Digital Marketing", description: "SEO, content, targeted ads to installer owners", cost: "Medium", effectiveness: "Medium" }
    ]
  },

  team: {
    title: "Team Requirements",
    currentNeeds: [
      {
        role: "CEO / Founder",
        skills: "Solar industry experience, fundraising, B2B sales leadership",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "CTO",
        skills: "Platform architecture, data systems, ML/AI, integrations",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Sales",
        skills: "Enterprise sales, lender/utility relationships, solar industry network",
        status: "Seeking",
        priority: "High"
      },
      {
        role: "Head of Data Science",
        skills: "ML models, quality scoring algorithms, performance analytics",
        status: "Seeking",
        priority: "High"
      }
    ],
    advisorNeeds: [
      "Former solar lender executive (Mosaic, GoodLeap, Sunlight)",
      "Solar industry veteran with installer network relationships",
      "Utility program manager with distributed energy experience",
      "Fintech/data marketplace expert"
    ],
    orgPlan: {
      year1: "15 FTEs: 6 engineering, 4 sales, 3 data/analytics, 2 G&A",
      year2: "35 FTEs: 12 engineering, 12 sales, 6 data, 5 G&A",
      year3: "75 FTEs: 20 engineering, 30 sales, 15 data/ops, 10 G&A"
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "Lender Adoption Speed",
        severity: "High",
        likelihood: "Medium",
        description: "Solar lenders slow to adopt new data sources due to regulatory concerns or internal inertia",
        mitigation: "Start with pilot programs before full contracts. Prove ROI on default reduction with data. Target CFO/CRO-level sponsors. Offer flexible integration (API or manual reports)."
      },
      {
        risk: "Installer Network Building",
        severity: "High",
        likelihood: "Medium",
        description: "Difficulty onboarding quality installers who may be skeptical of another platform or scoring system",
        mitigation: "Lead with value (leads, tools) before scoring. Partner with distributors for trusted introductions. Quality installers want differentiation from low-quality competitors."
      },
      {
        risk: "EnergySage Competition",
        severity: "Medium",
        likelihood: "Medium",
        description: "EnergySage expands into quality scoring and lender relationships, leveraging existing installer base",
        mitigation: "Different positioning: B2B quality layer vs B2C lead gen. Lender data not in EnergySage's DNA. Build relationships before they pivot. Potential acquirer."
      },
      {
        risk: "Data Quality/Accuracy",
        severity: "Medium",
        likelihood: "Low",
        description: "Quality scores inaccurate or challenged by installers, damaging credibility",
        mitigation: "Multiple data sources: installer-reported, monitoring APIs, lender outcomes, customer reviews. Statistical validation and appeal process."
      },
      {
        risk: "Market Cyclicality",
        severity: "Medium",
        likelihood: "Low",
        description: "Solar market slowdown due to interest rates, policy changes, or economic downturn",
        mitigation: "ITC expiration actually helps—TPO growth continues. Diversify across residential, commercial, utility. Quality layer more valuable in tight market."
      },
      {
        risk: "Policy/ITC Uncertainty",
        severity: "Low",
        likelihood: "Low",
        description: "Federal policy changes extend or modify ITC, changing market dynamics",
        mitigation: "Solar fundamentals strong regardless of ITC. Storage growth accelerating. Grid reliability driving utility investment. Quality layer valuable in any scenario."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Month 3", milestone: "Platform MVP live, first 100 installer profiles", status: "planned" },
      { timeline: "Month 6", milestone: "500 installers, quality scoring v1, 2 lender pilots", status: "planned" },
      { timeline: "Month 9", milestone: "First lender production contract signed, monitoring integrations live", status: "planned" },
      { timeline: "Month 12", milestone: "$3.6M ARR, 5 lender partnerships, Series A ready", status: "planned" },
      { timeline: "Month 18", milestone: "1,500 installers, first utility program, $8M ARR", status: "planned" },
      { timeline: "Month 24", milestone: "2,500 installers, industry standard positioning, profitable", status: "planned" },
      { timeline: "Year 3", milestone: "$42M ARR, market leader, insurance/warranty products", status: "planned" }
    ]
  },

  ask: {
    title: "The Ask",
    amount: "$5,000,000",
    round: "Seed Round",
    terms: "SAFE or Priced Round at $20M post-money valuation",
    useOfFunds: [
      "Build world-class engineering team and installer platform",
      "Establish lender partnerships with major solar financiers",
      "Aggregate first 500 quality installers in core markets",
      "Prove quality scoring ROI and path to Series A"
    ],
    timeline: "18-month runway to Series A milestones",
    seriesA: {
      timing: "Month 12-15",
      metrics: "$5-8M ARR, 1,500+ installers, 5+ lender partnerships",
      raise: "$15-25M at $75-100M valuation"
    }
  },

  sources: [
    { name: "SEIA Solar Market Insight Q4 2025", url: "https://seia.org/research-resources/solar-market-insight-report-q4-2025/", detail: "Residential solar market data, installer rankings" },
    { name: "Grand View Research - Residential Solar", url: "https://www.grandviewresearch.com/industry-analysis/us-residential-solar-pv-market-report", detail: "$7.45B market (2025), 14.4% CAGR" },
    { name: "Fortune Business Insights - Battery Storage", url: "https://www.fortunebusinessinsights.com/u-s-residential-lithium-ion-battery-energy-storage-system-market-107571", detail: "$2B storage market, attachment rates" },
    { name: "Wood Mackenzie - Installer Rankings", url: "https://www.woodmac.com/news/opinion/us-distributed-solar-leaderboard/", detail: "Sunrun 12.5%, Tesla 4.2%, market share data" },
    { name: "SEIA - Investment Tax Credit", url: "https://seia.org/solar-investment-tax-credit/", detail: "ITC expiration Dec 2025, TPO implications" },
    { name: "EnergySage - Federal Tax Credit", url: "https://www.energysage.com/solar/solar-tax-credit-explained/", detail: "Residential vs commercial ITC rules" },
    { name: "Solar Lending Market Analysis", url: "https://www.greentechmedia.com/articles/read/the-state-of-residential-solar-financing", detail: "$15B+ annual lending, major players" },
    { name: "Sequoia Pitch Deck Template", url: "https://sequoiacap.com/article/writing-a-business-plan/", detail: "Pitch deck framework and best practices" }
  ]
}

// Helper Components
function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-orange-600" />
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
      <div className="text-3xl font-bold text-orange-600">{value}</div>
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
      <header className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <a
            href="/tokens/#framework"
            className="inline-flex items-center gap-2 text-orange-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cap-Ex Opportunities
          </a>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{businessPlan.companyName}</h1>
                  <p className="text-orange-100">{businessPlan.tagline}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-orange-200">{businessPlan.version}</div>
              <div className="text-sm text-orange-200">{businessPlan.date}</div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.ask.amount}</div>
              <div className="text-sm text-orange-100">Seed Round</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.marketSize.tam.value}</div>
              <div className="text-sm text-orange-100">TAM (2025)</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">14.4%</div>
              <div className="text-sm text-orange-100">Market CAGR</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">12:1</div>
              <div className="text-sm text-orange-100">LTV:CAC</div>
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
                activeTab === 'overview' ? 'bg-orange-100 text-orange-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Executive Summary
            </button>
            <button
              onClick={() => setActiveTab('detailed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'detailed' ? 'bg-orange-100 text-orange-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Full Plan
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'financials' ? 'bg-orange-100 text-orange-700' : 'text-gray-600 hover:bg-gray-100'
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
                  <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                    <h4 className="font-semibold text-orange-800 mb-2">Market Opportunity</h4>
                    <p className="text-sm text-gray-700">{businessPlan.executiveSummary.market}</p>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-yellow-800 mb-2">The Ask</h4>
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
                {businessPlan.solution.pillars.map((pillar, i) => (
                  <div key={i} className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{pillar.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {pillar.features.map((feature, j) => (
                        <span key={j} className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Now */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Clock} title={businessPlan.whyNow.title} />

              <div className="grid md:grid-cols-3 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => (
                  <div key={i} className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                    <h4 className="font-semibold text-gray-900 mb-2">{factor.title}</h4>
                    <p className="text-sm text-gray-600">{factor.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Market Size */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={PieChart} title={businessPlan.marketSize.title} />

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.tam.label}</div>
                  <div className="text-sm text-orange-100 mt-1">{businessPlan.marketSize.tam.description}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.sam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.sam.label}</div>
                  <div className="text-sm text-yellow-100 mt-1">{businessPlan.marketSize.sam.description}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.som.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.som.label}</div>
                  <div className="text-sm text-amber-100 mt-1">{businessPlan.marketSize.som.description}</div>
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
            <section className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">{businessPlan.ask.title}</h2>
                <div className="text-5xl font-bold mb-2">{businessPlan.ask.amount}</div>
                <div className="text-xl text-orange-100">{businessPlan.ask.round}</div>
                <div className="text-orange-200 mt-2">{businessPlan.ask.terms}</div>
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
                    <p><span className="text-orange-200">Timing:</span> {businessPlan.ask.seriesA.timing}</p>
                    <p><span className="text-orange-200">Metrics:</span> {businessPlan.ask.seriesA.metrics}</p>
                    <p><span className="text-orange-200">Raise:</span> {businessPlan.ask.seriesA.raise}</p>
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
                            player.threat.includes('Medium') ? 'bg-yellow-100 text-yellow-700' :
                            player.threat.includes('Low') ? 'bg-green-100 text-green-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            {player.threat}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">{businessPlan.competition.ourAdvantage.title}</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {businessPlan.competition.ourAdvantage.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
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
                  <div key={i} className="border-l-4 border-orange-400 pl-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-xs font-medium">
                        {phase.timeline}
                      </span>
                      <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 mb-3">
                      {phase.deliverables.map((deliverable, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
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

              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{businessPlan.businessModel.unitEconomics.title}</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {businessPlan.businessModel.unitEconomics.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-orange-600">{metric.value}</div>
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
                      <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
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
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
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
                    <span className="inline-block mt-2 px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-xs">
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
                        <Award className="w-4 h-4 text-orange-500" />
                        {advisor}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">Organization Plan</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Year 1:</span> {businessPlan.team.orgPlan.year1}</p>
                    <p><span className="font-medium">Year 2:</span> {businessPlan.team.orgPlan.year2}</p>
                    <p><span className="font-medium">Year 3:</span> {businessPlan.team.orgPlan.year3}</p>
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
                        <span className="ml-2 text-sm text-gray-600">{risk.likelihood}</span>
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
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-200" />
                <div className="space-y-4">
                  {businessPlan.milestones.items.map((item, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-orange-500 border-2 border-white" />
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-orange-600">{item.timeline}</span>
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
                {/* Scenario 1: With Lender Partnerships */}
                <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-orange-600 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withLenderPartnerships.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withLenderPartnerships.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-orange-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Installers</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withLenderPartnerships.years.map((year, i) => (
                          <tr key={i} className="border-b border-orange-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.customers}</td>
                            <td className="py-2 px-3 text-right">{year.arr}</td>
                            <td className={`py-2 px-3 text-right ${year.burn === '$0' ? 'text-green-600' : 'text-red-600'}`}>
                              {year.burn}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-3 bg-white rounded">
                    <h5 className="text-sm font-medium text-gray-900 mb-2">Key Assumptions</h5>
                    <ul className="grid md:grid-cols-2 gap-1">
                      {businessPlan.financials.scenarios.withLenderPartnerships.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-orange-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-orange-600">
                      Funding Required: {businessPlan.financials.scenarios.withLenderPartnerships.fundingRequired}
                    </span>
                  </div>
                </div>

                {/* Scenario 2: Without Lender Partnerships */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{businessPlan.financials.scenarios.withoutLenderPartnerships.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withoutLenderPartnerships.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Installers</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutLenderPartnerships.years.map((year, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.customers}</td>
                            <td className="py-2 px-3 text-right">{year.arr}</td>
                            <td className={`py-2 px-3 text-right ${year.burn === '$0' ? 'text-green-600' : 'text-red-600'}`}>
                              {year.burn}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-3 bg-white rounded">
                    <h5 className="text-sm font-medium text-gray-900 mb-2">Key Assumptions</h5>
                    <ul className="grid md:grid-cols-2 gap-1">
                      {businessPlan.financials.scenarios.withoutLenderPartnerships.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-gray-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-gray-600">
                      Funding Required: {businessPlan.financials.scenarios.withoutLenderPartnerships.fundingRequired}
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
                        <span className="text-lg font-bold text-orange-600">{item.percentage}%</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-6 bg-gray-200 rounded overflow-hidden">
                          <div
                            className="h-full bg-orange-500 rounded"
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
                  <div key={i} className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-orange-600">{metric.value}</div>
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
                    <h4 className="font-medium text-gray-900 text-sm group-hover:text-orange-600 transition-colors">
                      {source.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{source.detail}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-colors flex-shrink-0" />
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
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
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
