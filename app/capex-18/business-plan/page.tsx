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
  Droplets,
  Gauge,
  Search,
  Database
} from 'lucide-react'

// Business Plan Data
const businessPlan = {
  companyName: "AquaTrack",
  tagline: "The PowerOutage.us for Water Infrastructure",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "3,000+ water utilities in the US operate aging infrastructure with no aggregated data. Leak detection is fragmented, pipe condition assessments are siloed, and lead pipe replacement mandates lack tracking mechanisms. Utilities can't benchmark or optimize their capital spending.",
    solution: "AquaTrack aggregates leak detection, pipe condition assessments, and replacement tracking into a unified platform. We create the 'PowerOutage.us' equivalent for water infrastructure, giving utilities, regulators, and contractors a single source of truth.",
    market: "$120B water infrastructure market with $18B in smart water management technology. The Bipartisan Infrastructure Law includes $55B for water. Lead pipe replacement alone represents $45-90B in capital investment for 9M+ service lines.",
    ask: "$4.5M Seed Round to build the data aggregation platform, establish utility partnerships, and create the infrastructure intelligence layer that becomes essential to the water sector."
  },

  problem: {
    title: "The Water Infrastructure Data Crisis",
    points: [
      {
        title: "Aging Infrastructure Invisibility",
        detail: "US water infrastructure averages 45+ years old. Many pipes are 80-100 years old. Utilities don't know conditions until failures occur. No aggregated visibility across systems.",
        stat: "3,000+",
        statLabel: "fragmented water utilities"
      },
      {
        title: "Fragmented Leak Detection",
        detail: "Water loss averages 19.5% nationally, costing $6.4B+ annually. Leak detection is reactive and uncoordinated. No standardized data format or sharing between utilities.",
        stat: "19.5%",
        statLabel: "average water loss rate"
      },
      {
        title: "Lead Pipe Mandate Without Tracking",
        detail: "EPA mandates lead service line replacement within 10 years. Utilities must inventory and replace 9M+ lines. No centralized tracking system exists. Compliance verification fragmented.",
        stat: "9M+",
        statLabel: "lead service lines to replace"
      },
      {
        title: "Capital Blind Spots",
        detail: "Utilities spend $120B+ annually on infrastructure but lack benchmarking data. No visibility into peer performance. Procurement fragmented across thousands of systems.",
        stat: "$120B+",
        statLabel: "annual water infrastructure spend"
      }
    ]
  },

  solution: {
    title: "AquaTrack: Water Infrastructure Intelligence Platform",
    tagline: "Aggregate. Monitor. Predict. Comply.",
    pillars: [
      {
        icon: "Database",
        title: "Data Aggregation",
        description: "Unified data layer aggregating leak detection, pipe conditions, and asset status from multiple utilities and sensor networks into standardized formats.",
        features: ["Multi-utility data ingestion", "Standardized pipe schema", "Real-time status feeds", "Historical trending"]
      },
      {
        icon: "Search",
        title: "Leak Intelligence",
        description: "Aggregated leak detection data with pattern analysis. Identify systemic issues, predict failure zones, and optimize repair prioritization.",
        features: ["Leak pattern analysis", "Failure prediction", "Repair prioritization", "Loss quantification"]
      },
      {
        icon: "Gauge",
        title: "Condition Assessment",
        description: "Centralized pipe condition scoring with benchmarking across utilities. Enable data-driven capital planning and replacement scheduling.",
        features: ["Condition scoring", "Peer benchmarking", "Replacement prioritization", "Capital planning"]
      },
      {
        icon: "Droplets",
        title: "Compliance Tracking",
        description: "Lead service line inventory and replacement tracking for EPA mandate compliance. Real-time progress dashboards for utilities and regulators.",
        features: ["Lead pipe inventory", "Replacement tracking", "Regulatory reporting", "Compliance dashboards"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "$55B Infrastructure Bill",
        detail: "Bipartisan Infrastructure Law includes $55B for water infrastructure, with $15B specifically for lead service line replacement. Utilities flush with capital need data to prioritize spending effectively.",
        icon: "DollarSign"
      },
      {
        title: "EPA Lead Pipe Mandate",
        detail: "October 2024 EPA rule requires utilities to inventory and replace all lead service lines within 10 years. Creates urgent need for tracking and compliance systems across 9M+ service lines.",
        icon: "AlertTriangle"
      },
      {
        title: "Smart Meter & Sensor Proliferation",
        detail: "AMI smart meters and acoustic leak sensors generating data that utilities can't analyze. Acoustic sensors now account for 25%+ of deployments, with hybrid systems at 35%.",
        icon: "Activity"
      },
      {
        title: "Climate Change Stress",
        detail: "Extreme weather stressing aging infrastructure. Water main breaks occur every 2 minutes nationally. Utilities need predictive capabilities to prevent catastrophic failures.",
        icon: "TrendingUp"
      },
      {
        title: "Non-Revenue Water Crisis",
        detail: "US utilities lose 2.7 trillion gallons annually—19.5% of treated water never reaches customers. This costs $6.4B in uncaptured revenue, driving urgent demand for leak detection analytics.",
        icon: "Droplets"
      }
    ]
  },

  marketSize: {
    title: "Market Opportunity",
    tam: {
      value: "$120B",
      label: "Total Addressable Market",
      description: "US Water Infrastructure & Management Market 2024",
      source: "PS Market Research"
    },
    sam: {
      value: "$18.3B",
      label: "Serviceable Addressable Market",
      description: "Smart Water Management Technology (2024)",
      source: "Grand View Research"
    },
    som: {
      value: "$95M",
      label: "Serviceable Obtainable Market",
      description: "Year 5 revenue target with 450 utility partnerships",
      source: "Conservative capture estimate"
    },
    additionalMarkets: [
      { name: "Smart Water Management (Global)", value: "$18.3B (2024)", cagr: "12.7%" },
      { name: "Water Leak Detection Systems", value: "$2.4B (2024)", cagr: "7.3%" },
      { name: "Digital Water Solutions", value: "$53B (2024)", cagr: "30.8%" },
      { name: "US Water Infrastructure", value: "$120B (2024)", cagr: "5.3%" }
    ],
    keyMetrics: [
      { label: "Lead pipe replacement cost", value: "$2K-$10K per line" },
      { label: "Non-revenue water loss nationally", value: "19.5%" },
      { label: "Annual water loss cost to utilities", value: "$6.4B" },
      { label: "Federal infrastructure funding", value: "$55B over 5 years" }
    ]
  },

  competition: {
    title: "Competitive Landscape",
    players: [
      {
        name: "Xylem (Sensus)",
        type: "Hardware Leader",
        marketShare: "~25% smart water tech",
        strengths: ["Massive installed base", "Hardware + software integration", "Brand recognition", "Global presence"],
        weaknesses: ["Data siloed per customer", "Legacy technology debt", "No cross-utility analytics", "Slow innovation"],
        threat: "Partner not competitor"
      },
      {
        name: "Veolia",
        type: "Utility Operator",
        marketShare: "~15% private water ops",
        strengths: ["Operational expertise", "Global scale", "Utility relationships", "Full-service model"],
        weaknesses: ["Operator not technology company", "No data aggregation play", "Conflict of interest", "Limited SaaS"],
        threat: "Low"
      },
      {
        name: "Mueller Water Products",
        type: "Infrastructure Products",
        marketShare: "~20% water products",
        strengths: ["Infrastructure product leadership", "Utility relationships", "Distribution network", "Quality reputation"],
        weaknesses: ["Hardware-focused mindset", "No data strategy", "Limited software capability", "No analytics"],
        threat: "Low"
      },
      {
        name: "Esri (ArcGIS)",
        type: "GIS Platform",
        marketShare: "~60% utility GIS",
        strengths: ["GIS market leader", "Utility penetration", "Visualization tools", "Integration ecosystem"],
        weaknesses: ["Generic platform not water-specific", "No cross-utility data", "High implementation costs", "Limited analytics"],
        threat: "Partner not competitor"
      }
    ],
    ourAdvantage: {
      title: "AquaTrack's Unfair Advantages",
      points: [
        "Network effect: More utilities contributing data = better benchmarking = more accurate predictions = more utility adoption",
        "Data moat: Only aggregated view of water infrastructure intelligence across US utilities",
        "Regulatory timing: EPA lead pipe mandate creates urgent 10-year compliance window starting 2024",
        "Cap-Ex alignment: Infrastructure funds and municipal bonds can finance as infrastructure investment",
        "No channel conflict: We help utilities and contractors succeed, not compete with equipment vendors"
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
          "Multi-utility data ingestion platform",
          "Standardized pipe condition schema",
          "Lead service line inventory tracking",
          "Basic leak analytics dashboard",
          "Utility onboarding and integration tools"
        ],
        milestone: "15 pilot utilities, 50,000 assets tracked, $800K ARR"
      },
      {
        phase: "Phase 2: Intelligence",
        timeline: "Months 7-12",
        deliverables: [
          "Peer benchmarking analytics",
          "Leak pattern recognition and prediction",
          "EPA compliance reporting module",
          "Regulatory data portal for state agencies",
          "Contractor bid management integration"
        ],
        milestone: "50 utilities, EPA pilot partnership, $3M ARR"
      },
      {
        phase: "Phase 3: Scale",
        timeline: "Year 2-3",
        deliverables: [
          "National utility coverage (400+ utilities)",
          "Real-time infrastructure health API",
          "Infrastructure fund analytics products",
          "Predictive maintenance platform",
          "International market expansion"
        ],
        milestone: "$32M ARR, 5+ state agency partnerships, market leader"
      }
    ]
  },

  businessModel: {
    title: "Business Model",
    revenueStreams: [
      {
        name: "Utility SaaS Subscriptions",
        description: "Annual subscription for utilities to access platform, contribute data, and receive benchmarking analytics",
        pricing: "$50K-$300K/year based on population served",
        margin: "85%",
        year1Revenue: "$1.8M",
        year3Revenue: "$20M"
      },
      {
        name: "Regulatory Data Licensing",
        description: "API access to aggregated compliance data for EPA, state agencies, and municipal oversight bodies",
        pricing: "$200K-$1M annual contracts",
        margin: "92%",
        year1Revenue: "$400K",
        year3Revenue: "$6M"
      },
      {
        name: "Contractor Data Access",
        description: "Subscription for pipe replacement contractors to access project opportunities and compliance requirements",
        pricing: "$5K-$15K/year per contractor",
        margin: "88%",
        year1Revenue: "$300K",
        year3Revenue: "$3M"
      },
      {
        name: "Infrastructure Fund Analytics",
        description: "Premium analytics for private equity, infrastructure funds, and municipal bond analysts evaluating water investments",
        pricing: "$100K-$500K annual subscriptions",
        margin: "90%",
        year1Revenue: "$300K",
        year3Revenue: "$3M"
      }
    ],
    unitEconomics: {
      title: "Unit Economics Per Utility",
      metrics: [
        { label: "Customer Acquisition Cost (CAC)", value: "$42,000", note: "Sales + implementation/onboarding" },
        { label: "Average Contract Value (ACV)", value: "$105,000/yr", note: "Blended across utility sizes" },
        { label: "Gross Margin", value: "87%", note: "After data ops and support" },
        { label: "Lifetime Value (LTV)", value: "$420,000", note: "Assuming 5-year retention" },
        { label: "LTV:CAC Ratio", value: "10:1", note: "Strong unit economics" },
        { label: "Payback Period", value: "11 months", note: "Fast capital efficiency" }
      ]
    }
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withCapEx: {
        name: "With Cap-Ex Financing Partnerships",
        description: "Deep integration with infrastructure funds and equipment finance creates capital deployment intelligence layer",
        years: [
          { year: 1, revenue: "$2.8M", utilities: 45, arr: "$2.8M", burn: "$1.7M", runway: "18 months" },
          { year: 2, revenue: "$12M", utilities: 120, arr: "$12M", burn: "$0", runway: "Profitable" },
          { year: 3, revenue: "$32M", utilities: 220, arr: "$32M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$58M", utilities: 320, arr: "$58M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$95M", utilities: 450, arr: "$95M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$4.5M Seed",
        keyAssumptions: [
          "EPA partnership drives initial regulatory adoption",
          "Infrastructure funds account for 15% of revenue by Y3",
          "Utility network reaches 15% of US utilities by Y5",
          "Data network effects accelerate growth in Y3+"
        ]
      },
      withoutCapEx: {
        name: "Without Cap-Ex Financing Angle",
        description: "Pure utility SaaS focus with organic regulatory adoption",
        years: [
          { year: 1, revenue: "$1.8M", utilities: 30, arr: "$1.8M", burn: "$2.2M", runway: "24 months" },
          { year: 2, revenue: "$6.5M", utilities: 75, arr: "$6.5M", burn: "$500K", runway: "18 months" },
          { year: 3, revenue: "$18M", utilities: 140, arr: "$18M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$35M", utilities: 220, arr: "$35M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$58M", utilities: 300, arr: "$58M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$3.5M Seed",
        keyAssumptions: [
          "Utility sales cycles drive growth rate",
          "Slower regulatory adoption without capital partner credibility",
          "More capital-efficient growth path",
          "Limited contractor and investor product investment"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $4.5M Seed Funds",
      breakdown: [
        { category: "Engineering & Product", amount: "$1.89M", percentage: 42, detail: "Data platform build, analytics engine, utility integrations" },
        { category: "Sales & Partnerships", amount: "$1.26M", percentage: 28, detail: "Utility sales, regulatory BD, contractor partnerships" },
        { category: "Data Operations", amount: "$675K", percentage: 15, detail: "Data ingestion, standardization, quality assurance" },
        { category: "Marketing", amount: "$450K", percentage: 10, detail: "Industry positioning, conferences, content marketing" },
        { category: "G&A & Buffer", amount: "$225K", percentage: 5, detail: "Legal, compliance, administration" }
      ]
    }
  },

  goToMarket: {
    title: "Go-to-Market Strategy",
    phases: [
      {
        phase: "Land",
        timeline: "Months 1-6",
        strategy: "Regulatory-Driven Entry",
        tactics: [
          "Target utilities with urgent lead pipe compliance needs (older Northeast & Midwest systems)",
          "Partner with EPA Office of Water for pilot data sharing agreement",
          "Offer free lead inventory tracking to build initial utility network",
          "Focus on progressive utilities with smart meter deployments"
        ],
        metrics: ["15 pilot utilities", "EPA data partnership", "50K assets tracked"]
      },
      {
        phase: "Expand",
        timeline: "Months 7-12",
        strategy: "State Agency Partnerships",
        tactics: [
          "Approach state drinking water agencies with compliance oversight tools",
          "Build contractor network for lead pipe replacement ecosystem",
          "Launch peer benchmarking to drive utility FOMO",
          "Integrate with major smart meter platforms (Sensus, Itron, Badger)"
        ],
        metrics: ["50 utilities", "3 state agency pilots", "95% data accuracy"]
      },
      {
        phase: "Dominate",
        timeline: "Year 2+",
        strategy: "Network Effect Acceleration",
        tactics: [
          "Leverage utility network for infrastructure fund analytics",
          "Expand to leak detection and condition assessment modules",
          "Launch API for third-party integrations",
          "Build national coverage map as marketing asset"
        ],
        metrics: ["400+ utilities", "National coverage", "API ecosystem"]
      }
    ],
    channels: [
      { name: "Regulatory Partnerships", description: "EPA and state agency co-marketing for compliance tools", cost: "Low", effectiveness: "Very High" },
      { name: "Direct Sales", description: "Field sales team targeting large and medium utilities", cost: "High", effectiveness: "High" },
      { name: "Industry Associations", description: "AWWA, AMWA conferences and thought leadership", cost: "Medium", effectiveness: "High" },
      { name: "Equipment Vendor Referrals", description: "Partnerships with Xylem, Itron, Mueller for lead routing", cost: "Low", effectiveness: "Medium" },
      { name: "Content Marketing", description: "Compliance guides, benchmarking reports, webinars", cost: "Medium", effectiveness: "Medium" }
    ]
  },

  team: {
    title: "Team Requirements",
    currentNeeds: [
      {
        role: "CEO / Founder",
        skills: "Water industry experience, fundraising, regulatory relationships, platform vision",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "CTO",
        skills: "Data platform architecture, utility integrations, analytics systems, mapping",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Sales",
        skills: "Utility industry experience, B2B enterprise sales, regulatory BD",
        status: "Seeking",
        priority: "High"
      },
      {
        role: "Head of Data",
        skills: "Data standardization, quality systems, analytics development, ML/AI",
        status: "Seeking",
        priority: "High"
      }
    ],
    advisorNeeds: [
      "Former EPA Office of Water executive",
      "Large municipal water utility director",
      "Water infrastructure fund partner",
      "Utility SaaS founder (ServiceTitan, Urbint alumni)"
    ],
    orgPlan: {
      year1: "15 FTEs: 6 engineering, 4 sales, 3 data ops, 2 G&A",
      year2: "35 FTEs: 12 engineering, 12 sales, 6 data ops, 5 G&A",
      year3: "80 FTEs: 25 engineering, 30 sales, 15 data ops, 10 G&A"
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "Utility Data Sharing Reluctance",
        severity: "High",
        likelihood: "Medium",
        description: "Water utilities may resist sharing infrastructure data due to security concerns, competitive worries, or bureaucratic inertia. Public utilities face unique political pressures.",
        mitigation: "Start with non-sensitive aggregated data. Offer clear value exchange (benchmarking) for data contribution. Build trust through EPA partnership validation. Anonymize data for peer comparisons."
      },
      {
        risk: "Long Utility Sales Cycles",
        severity: "High",
        likelihood: "High",
        description: "Municipal procurement can take 12-24 months. Budget cycles, board approvals, and RFP processes create significant delays. Risk of running out of runway before revenue.",
        mitigation: "EPA compliance urgency shortens cycles. Offer free tier for data contribution to build network. Target progressive utilities first. Build recurring SaaS while larger deals develop."
      },
      {
        risk: "Regulatory Priority Shift",
        severity: "Medium",
        likelihood: "Low",
        description: "EPA lead pipe mandate could be delayed, modified, or defunded by future administrations. Reduces urgency for compliance tools.",
        mitigation: "Diversify revenue across utilities, contractors, and investors. Build utility value independent of compliance mandates. Lead pipe inventory is one module, not entire platform."
      },
      {
        risk: "Data Quality & Standardization",
        severity: "Medium",
        likelihood: "Medium",
        description: "Utility data formats vary wildly. GIS systems, asset management tools, and reporting standards differ across 3,000+ utilities. Data cleaning may be resource-intensive.",
        mitigation: "Invest heavily in data ingestion and normalization. Build flexible schema for varied data formats. Quality scoring and validation systems. Automate data transformation where possible."
      },
      {
        risk: "Incumbent Competition",
        severity: "Medium",
        likelihood: "Medium",
        description: "Xylem, Veolia, or Esri could build competing aggregation platform. Incumbents have existing utility relationships and resources.",
        mitigation: "Move fast to establish network effects. Focus on aggregation layer vs. point solutions. Partner with (not compete against) equipment vendors. Data moat grows with each utility."
      },
      {
        risk: "Cybersecurity & Critical Infrastructure",
        severity: "High",
        likelihood: "Low",
        description: "Water infrastructure is critical national infrastructure. Security incidents could cause regulatory scrutiny, customer churn, or worse.",
        mitigation: "SOC 2 Type II from day one. No operational control access—data-only platform. Partner with DHS/CISA for security validation. Cyber insurance and incident response planning."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Q1 2026", milestone: "Close seed round, hire core engineering and sales team", status: "planned" },
      { timeline: "Q2 2026", milestone: "Launch MVP with 15 pilot utilities across 3 states", status: "planned" },
      { timeline: "Q3 2026", milestone: "EPA data sharing pilot agreement, compliance module live", status: "planned" },
      { timeline: "Q4 2026", milestone: "50 utilities, lead pipe tracking GA, $3M ARR", status: "planned" },
      { timeline: "Q1 2027", milestone: "First state agency regulatory partnership", status: "planned" },
      { timeline: "Q2 2027", milestone: "Contractor network launch, 100 utilities, peer benchmarking", status: "planned" },
      { timeline: "Q3 2027", milestone: "Infrastructure fund analytics product, $8M ARR", status: "planned" },
      { timeline: "Q4 2027", milestone: "Series A at $80-100M valuation, 150+ utilities", status: "planned" }
    ]
  },

  ask: {
    title: "The Ask",
    amount: "$4,500,000",
    round: "Seed Round",
    terms: "Priced round, standard seed terms at $18M post-money valuation",
    useOfFunds: [
      "Build data aggregation platform and analytics engine",
      "Establish 50+ utility partnerships across multiple states",
      "Develop EPA regulatory relationship and compliance tools",
      "Create infrastructure intelligence layer for capital deployment"
    ],
    timeline: "18-month runway to Series A milestones",
    seriesA: {
      timing: "Q4 2027",
      metrics: "$8-12M ARR, 150+ utilities, 3+ state agency partnerships",
      raise: "$15-25M at $80-100M valuation"
    }
  },

  sources: [
    { name: "Grand View Research - Smart Water Management Market", url: "https://www.grandviewresearch.com/industry-analysis/smart-water-management-swm-market", detail: "$18.3B in 2024, 12.7% CAGR to 2033" },
    { name: "PS Market Research - US Water Infrastructure", url: "https://www.psmarketresearch.com/market-analysis/us-water-infrastructure-management-market", detail: "$120.2B in 2024, 5.3% CAGR to 2032" },
    { name: "EPA - Lead and Copper Rule Improvements", url: "https://www.epa.gov/newsreleases/biden-harris-administration-issues-final-rule-requiring-replacement-lead-pipes-within", detail: "October 2024 mandate for 10-year replacement" },
    { name: "Bluefield Research - Non-Revenue Water", url: "https://www.bluefieldresearch.com/ns/water-losses-cost-u-s-utilities-us6-4-billion-annually/", detail: "19.5% loss rate, $6.4B annual cost" },
    { name: "Research and Markets - Water Leak Detection", url: "https://www.researchandmarkets.com/reports/6110435/water-leak-detection-systems-global-strategic", detail: "$2.4B in 2024, 7.3% CAGR to 2030" },
    { name: "BCC Research - Smart Water Management", url: "https://www.bccresearch.com/pressroom/mst/global-smart-water-management-market-projected-to-reach-$437-billion", detail: "$43.7B projected by 2030, 13% CAGR" },
    { name: "ASCE Infrastructure Report Card - Drinking Water", url: "https://infrastructurereportcard.org/cat-item/drinking-water-infrastructure/", detail: "Infrastructure grade and investment needs" },
    { name: "White House - Bipartisan Infrastructure Law", url: "https://www.whitehouse.gov/briefing-room/statements-releases/2022/02/water/", detail: "$55B for water infrastructure over 5 years" }
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
                  <Droplets className="w-6 h-6" />
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
              <div className="text-2xl font-bold">{businessPlan.marketSize.sam.value}</div>
              <div className="text-sm text-cyan-100">Smart Water Market (2024)</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">12.7%</div>
              <div className="text-sm text-cyan-100">Market CAGR</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">10:1</div>
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
                {businessPlan.solution.pillars.map((pillar, i) => (
                  <div key={i} className="p-4 bg-cyan-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{pillar.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {pillar.features.map((feature, j) => (
                        <span key={j} className="px-2 py-0.5 bg-cyan-100 text-cyan-700 rounded text-xs">
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
                  <div key={i} className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
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

              <div className="grid gap-4 mb-6">
                {businessPlan.businessModel.revenueStreams.map((stream, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">{stream.name}</h4>
                        <p className="text-sm text-gray-600">{stream.description}</p>
                      </div>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">
                        {stream.margin}% margin
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
                {/* Scenario 1: With Cap-Ex */}
                <div className="p-4 bg-cyan-50 rounded-lg border-2 border-cyan-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-cyan-600 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withCapEx.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withCapEx.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-cyan-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Utilities</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withCapEx.years.map((year, i) => (
                          <tr key={i} className="border-b border-cyan-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.utilities}</td>
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
                      {businessPlan.financials.scenarios.withCapEx.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-cyan-500">*</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-cyan-600">
                      Funding Required: {businessPlan.financials.scenarios.withCapEx.fundingRequired}
                    </span>
                  </div>
                </div>

                {/* Scenario 2: Without Cap-Ex */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{businessPlan.financials.scenarios.withoutCapEx.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withoutCapEx.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Utilities</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutCapEx.years.map((year, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.utilities}</td>
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
                      {businessPlan.financials.scenarios.withoutCapEx.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-gray-500">*</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-gray-600">
                      Funding Required: {businessPlan.financials.scenarios.withoutCapEx.fundingRequired}
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
