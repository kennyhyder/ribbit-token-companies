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
  Gauge,
  FileText,
  Briefcase,
  Lightbulb,
  Globe,
  Award,
  PieChart,
  LineChart,
  Droplets
} from 'lucide-react'

// Business Plan Data
const businessPlan = {
  companyName: "WellCheck",
  tagline: "The Network of Record for Oil & Gas Well Integrity",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Over 900,000 active oil & gas wells in the U.S. with fragmented monitoring data. Operators struggle with compliance, leak detection, and integrity management across aging infrastructure. Orphan wells number in the hundreds of thousands with no tracking.",
    solution: "WellCheck creates the definitive registry for oil & gas well integrity—aggregating monitoring data, compliance records, and real-time sensor feeds into a single platform that serves operators, regulators, and environmental stakeholders.",
    market: "$4.2B well integrity management market (2025) growing at 6.4% CAGR. $19.6B broader oil & gas integrity market. Federal infrastructure funds targeting orphan well remediation create massive opportunity.",
    ask: "$4.5M Seed Round to build the registry platform, integrate sensor networks, and establish regulatory partnerships in key oil-producing states."
  },

  problem: {
    title: "The Well Integrity Data Crisis",
    points: [
      {
        title: "Fragmented Monitoring",
        detail: "Well monitoring data scattered across operators, service companies, and regulators. No unified view of well integrity across a field, basin, or nationwide.",
        stat: "900K+",
        statLabel: "active wells with fragmented data"
      },
      {
        title: "Aging Infrastructure",
        detail: "Average U.S. well age continues to increase. 78% of wells produce less than 15 BOE/day, many approaching end-of-life with inadequate monitoring.",
        stat: "78%",
        statLabel: "of wells are low-producing stripper wells"
      },
      {
        title: "Orphan Well Crisis",
        detail: "Hundreds of thousands of abandoned wells leaking methane and contaminating groundwater. $4.7B in federal funds allocated but no centralized tracking exists.",
        stat: "$4.7B",
        statLabel: "federal funds for orphan well remediation"
      },
      {
        title: "Regulatory Burden",
        detail: "Operators spend excessive time on compliance reporting across multiple state agencies. No standardized integrity reporting format exists.",
        stat: "50+",
        statLabel: "different state regulatory frameworks"
      }
    ]
  },

  solution: {
    title: "WellCheck: Well Integrity Intelligence",
    tagline: "Monitor. Report. Predict. Remediate.",
    pillars: [
      {
        icon: "Gauge",
        title: "Universal Registry",
        description: "Comprehensive database of every oil & gas well with operator history, production data, and integrity status linked to geospatial coordinates.",
        features: ["GPS-tagged well records", "Operator/ownership tracking", "Production history", "Permit documentation"]
      },
      {
        icon: "BarChart3",
        title: "Integrity Monitoring",
        description: "Aggregated sensor data from SCADA systems, pressure monitors, and leak detection systems into unified integrity scores.",
        features: ["Real-time pressure monitoring", "Methane leak detection", "Casing integrity scores", "Corrosion tracking"]
      },
      {
        icon: "Shield",
        title: "Compliance Hub",
        description: "Automated regulatory reporting across multiple state agencies. Pre-built templates for EPA, state oil commissions, and environmental agencies.",
        features: ["Multi-state compliance", "Automated reporting", "Audit trail", "Deadline tracking"]
      },
      {
        icon: "Lightbulb",
        title: "Predictive Analytics",
        description: "AI-powered failure prediction using historical data, geological conditions, and real-time sensor feeds to identify wells at risk.",
        features: ["Failure prediction models", "Maintenance scheduling", "Risk prioritization", "ROI optimization"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "Federal Infrastructure Funding",
        detail: "$4.7B allocated for orphan well plugging under the Infrastructure Investment and Jobs Act. States need systems to track, prioritize, and verify remediation work.",
        icon: "DollarSign"
      },
      {
        title: "Methane Reduction Mandates",
        detail: "EPA methane rules tightening. IRA includes methane fee starting at $900/ton in 2024, rising to $1,500/ton by 2026. Operators need monitoring to avoid penalties.",
        icon: "AlertTriangle"
      },
      {
        title: "ESG Pressure on Operators",
        detail: "Investors and banks demanding better environmental data from oil & gas companies. Verified integrity data becomes competitive advantage for financing.",
        icon: "TrendingUp"
      },
      {
        title: "Digital Oilfield Acceleration",
        detail: "IoT sensor costs down 70% in 5 years. SCADA systems becoming standard even on marginal wells. Data exists but no aggregation layer.",
        icon: "Zap"
      },
      {
        title: "Stripper Well Economics",
        detail: "78% of U.S. wells produce <15 BOE/day. These marginal operators can't afford enterprise integrity solutions but face same regulatory burden.",
        icon: "Target"
      }
    ]
  },

  marketSize: {
    title: "Market Opportunity",
    tam: {
      value: "$19.6B",
      label: "Total Addressable Market",
      description: "Oil & Gas Integrity Market (2024)",
      source: "Strategic Revenue Insights"
    },
    sam: {
      value: "$4.2B",
      label: "Serviceable Addressable Market",
      description: "Well Integrity Management (2025)",
      source: "Worldwide Market Reports"
    },
    som: {
      value: "$180M",
      label: "Serviceable Obtainable Market",
      description: "4% market share in 5 years",
      source: "Conservative capture estimate"
    },
    additionalMarkets: [
      { name: "Oilfield Integrity Management", value: "$26.6B (2032)", cagr: "7.3%" },
      { name: "Pipeline Integrity Management", value: "$10.2B (2024)", cagr: "5.6%" },
      { name: "Oil & Gas Sensors", value: "$9.5B (2023)", cagr: "5.8%" },
      { name: "Smart Well Systems", value: "$3.5B (2024)", cagr: "9.2%" }
    ],
    keyMetrics: [
      { label: "Active U.S. oil & gas wells", value: "918,000+" },
      { label: "New wells drilled annually", value: "~15,000" },
      { label: "Orphan wells requiring remediation", value: "100,000+" },
      { label: "Average well monitoring cost", value: "$2,000-$10,000/year" }
    ]
  },

  competition: {
    title: "Competitive Landscape",
    players: [
      {
        name: "Baker Hughes",
        type: "Enterprise Solutions",
        marketShare: "~20%",
        strengths: ["Deep industry expertise", "Full-stack solutions", "Global presence", "R&D investment"],
        weaknesses: ["Enterprise pricing", "Complex implementation", "Not focused on small operators", "Siloed data"],
        threat: "Serve different segment"
      },
      {
        name: "Halliburton",
        type: "Service Giant",
        marketShare: "~18%",
        strengths: ["Comprehensive services", "Strong relationships", "Technical expertise", "Capital resources"],
        weaknesses: ["Hardware-centric model", "No data aggregation play", "Not SaaS-focused", "Enterprise only"],
        threat: "Potential partner"
      },
      {
        name: "Schlumberger (SLB)",
        type: "Digital Leader",
        marketShare: "~22%",
        strengths: ["DELFI platform", "AI capabilities", "Global scale", "Innovation focus"],
        weaknesses: ["High cost", "Complex integration", "Major operator focus", "No regulatory hub"],
        threat: "Partnership opportunity"
      },
      {
        name: "State Regulators",
        type: "Fragmented",
        marketShare: "100% of compliance",
        strengths: ["Regulatory authority", "Mandatory reporting", "Local knowledge"],
        weaknesses: ["No data sharing", "Outdated systems", "Understaffed", "No analytics"],
        threat: "Partners not competitors"
      }
    ],
    ourAdvantage: {
      title: "WellCheck's Unfair Advantages",
      points: [
        "Registry model: Aggregated data across operators creates network effects—more data = better predictions",
        "Small operator focus: Underserved market of 80%+ of wells ignored by enterprise solutions",
        "Regulatory hub: Only platform designed for multi-state compliance automation",
        "Infrastructure funding angle: Positioned to capture orphan well tracking contracts",
        "Sensor-agnostic: Integrate any SCADA/IoT system rather than requiring hardware lock-in"
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
          "Well registry platform with operator onboarding",
          "Integration with major SCADA systems (Emerson, Honeywell, ABB)",
          "Basic compliance reporting for Texas, Oklahoma, New Mexico",
          "Mobile field inspection app with GPS tagging",
          "Dashboard for well portfolio management"
        ],
        milestone: "500 wells registered, 3 state integrations, pilot with mid-size operator"
      },
      {
        phase: "Phase 2: Intelligence",
        timeline: "Months 7-12",
        deliverables: [
          "AI-powered integrity scoring and failure prediction",
          "Automated regulatory report generation",
          "Methane emission tracking and EPA reporting",
          "Real-time alerting for anomalies and compliance deadlines",
          "API for third-party integrations"
        ],
        milestone: "5,000 wells, 2 state regulatory partnerships, $1.2M ARR"
      },
      {
        phase: "Phase 3: Scale",
        timeline: "Year 2-3",
        deliverables: [
          "National coverage across all oil-producing states",
          "Orphan well tracking module for state agencies",
          "ESG reporting suite for operators and investors",
          "Predictive maintenance marketplace",
          "Insurance and financing data products"
        ],
        milestone: "$15M ARR, 50,000+ wells, 10 state partnerships, market leader"
      }
    ]
  },

  businessModel: {
    title: "Business Model",
    revenueStreams: [
      {
        name: "Operator SaaS",
        description: "Monthly subscription for operators to monitor wells, manage compliance, and access integrity analytics",
        pricing: "$50-$200/well/month (volume discounts)",
        margin: "80%+",
        year1Revenue: "$600K",
        year3Revenue: "$6M"
      },
      {
        name: "Regulatory Platform",
        description: "State agency subscriptions for orphan well tracking, compliance monitoring, and remediation verification",
        pricing: "$100K-$500K annual contracts",
        margin: "85%",
        year1Revenue: "$300K",
        year3Revenue: "$4M"
      },
      {
        name: "Data & Analytics",
        description: "Anonymized, aggregated well integrity data for insurers, investors, and ESG analytics firms",
        pricing: "$25K-$250K annual contracts",
        margin: "90%+",
        year1Revenue: "$200K",
        year3Revenue: "$3M"
      },
      {
        name: "Service Marketplace",
        description: "Referral fees from well service companies, inspection firms, and remediation contractors",
        pricing: "5-10% of service value",
        margin: "100%",
        year1Revenue: "$100K",
        year3Revenue: "$2M"
      }
    ],
    unitEconomics: {
      title: "Unit Economics Per Operator",
      metrics: [
        { label: "Customer Acquisition Cost (CAC)", value: "$3,500", note: "Field sales + onboarding" },
        { label: "Average Contract Value (ACV)", value: "$24,000/year", note: "~200 wells at $120/well avg" },
        { label: "Gross Margin", value: "78%", note: "After data/support costs" },
        { label: "Lifetime Value (LTV)", value: "$84,000", note: "Assuming 4-year retention" },
        { label: "LTV:CAC Ratio", value: "24:1", note: "Exceptional economics" },
        { label: "Payback Period", value: "2 months", note: "Very fast capital efficiency" }
      ],
      notes: [
        "Operators with 50+ wells show lowest churn (industry-specific workflows)",
        "Regulatory partnerships drive operator adoption (compliance requirement)",
        "Service marketplace creates additional touchpoints and switching costs",
        "Data network effects increase value as more operators join"
      ]
    }
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withRegulatoryPartnerships: {
        name: "With Regulatory Partnerships (Recommended)",
        description: "Full model with operator SaaS, state agency contracts, and data monetization",
        years: [
          { year: 1, revenue: "$1.2M", wells: 5000, arr: "$1.2M", burn: "$3.3M", runway: "16 months" },
          { year: 2, revenue: "$5.5M", wells: 18000, arr: "$5.5M", burn: "$1.5M", runway: "Profitable Q4" },
          { year: 3, revenue: "$15M", wells: 50000, arr: "$15M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$32M", wells: 100000, arr: "$32M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$58M", wells: 180000, arr: "$58M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$4.5M Seed",
        keyAssumptions: [
          "5,000 wells Year 1 growing to 180,000 by Year 5 (~20% of U.S. active wells)",
          "3 state regulatory partnerships by end of Year 1, 10 by Year 3",
          "Blended revenue of $100/well/month across operator tiers",
          "Regulatory contracts average $200K annually",
          "75%+ gross margin at scale"
        ]
      },
      withoutRegulatoryPartnerships: {
        name: "Without Regulatory Partnerships (Conservative)",
        description: "Pure operator SaaS model without government contracts",
        years: [
          { year: 1, revenue: "$600K", wells: 3000, arr: "$600K", burn: "$2.5M", runway: "22 months" },
          { year: 2, revenue: "$2.5M", wells: 10000, arr: "$2.5M", burn: "$1M", runway: "30 months" },
          { year: 3, revenue: "$7M", wells: 28000, arr: "$7M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$15M", wells: 55000, arr: "$15M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$28M", wells: 100000, arr: "$28M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$3M Seed",
        keyAssumptions: [
          "Slower growth without regulatory push for adoption",
          "Higher CAC without government credibility ($5,000 vs $3,500)",
          "Pure SaaS margins but lower contract values",
          "No data monetization until Year 3",
          "Longer path to profitability"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $4.5M Seed Funds",
      breakdown: [
        { category: "Engineering & Product", amount: "$1.8M", percentage: 40, detail: "Platform development, SCADA integrations, mobile apps, AI/ML models" },
        { category: "Sales & Partnerships", amount: "$1.125M", percentage: 25, detail: "Operator acquisition, state agency BD, industry partnerships" },
        { category: "Operations & Support", amount: "$675K", percentage: 15, detail: "Customer success, field support, data operations" },
        { category: "Marketing", amount: "$450K", percentage: 10, detail: "Industry events, content, digital marketing, case studies" },
        { category: "G&A & Buffer", amount: "$450K", percentage: 10, detail: "Legal, compliance, accounting, contingency" }
      ]
    }
  },

  goToMarket: {
    title: "Go-to-Market Strategy",
    phases: [
      {
        phase: "Land",
        timeline: "Months 1-6",
        strategy: "Permian Basin Beachhead",
        tactics: [
          "Focus on Permian Basin—highest well density, most active operators",
          "Target mid-size operators (100-1,000 wells) underserved by enterprise solutions",
          "Partner with Texas Railroad Commission for pilot compliance integration",
          "Offer 90-day pilot with guaranteed ROI on compliance time savings"
        ],
        metrics: ["50 operators onboarded", "5,000 wells registered", "NPS > 50"]
      },
      {
        phase: "Expand",
        timeline: "Months 7-12",
        strategy: "Multi-Basin + Regulatory",
        tactics: [
          "Expand to Oklahoma, New Mexico, and North Dakota (Bakken)",
          "Launch orphan well tracking module for state agencies",
          "Integrate with EPA methane monitoring requirements",
          "Build case studies demonstrating compliance cost reduction"
        ],
        metrics: ["3 state agency contracts", "18,000 wells", "95% renewal rate"]
      },
      {
        phase: "Dominate",
        timeline: "Year 2+",
        strategy: "National Registry",
        tactics: [
          "Expand to all major oil-producing states",
          "Launch ESG data products for investors and banks",
          "Build API ecosystem for service company integrations",
          "Position for federal orphan well program integration"
        ],
        metrics: ["50,000+ wells", "10 state partnerships", "Market leader status"]
      }
    ],
    channels: [
      { name: "Direct Sales", description: "Field sales team targeting mid-size operators in major basins", cost: "High", effectiveness: "Very High" },
      { name: "State Regulatory Partnerships", description: "State agencies mandate or recommend WellCheck for compliance", cost: "Low", effectiveness: "Very High" },
      { name: "Industry Associations", description: "IPAA, state petroleum associations, and well servicing associations", cost: "Medium", effectiveness: "High" },
      { name: "OFS Company Partnerships", description: "Service companies bundle WellCheck with their offerings", cost: "Low", effectiveness: "High" },
      { name: "Digital + Content", description: "SEO, industry publications, webinars on compliance and integrity", cost: "Medium", effectiveness: "Medium" }
    ]
  },

  team: {
    title: "Team Requirements",
    currentNeeds: [
      {
        role: "CEO / Founder",
        skills: "Oil & gas industry experience, enterprise sales, regulatory relationships",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "CTO",
        skills: "SCADA/IoT integration, data platform architecture, AI/ML experience",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Sales",
        skills: "Oil & gas operator relationships, enterprise SaaS sales experience",
        status: "Seeking",
        priority: "High"
      },
      {
        role: "VP Regulatory Affairs",
        skills: "State oil commission relationships, environmental compliance expertise",
        status: "Seeking",
        priority: "High"
      }
    ],
    advisorNeeds: [
      "Former state oil & gas regulator (Texas RRC, Oklahoma CC)",
      "Oil & gas operator executive (VP Operations or similar)",
      "Enterprise SaaS founder (Oilfield services or industrial IoT)",
      "Environmental/ESG expert with investor relationships"
    ],
    orgPlan: {
      year1: "15 FTEs: 5 engineering, 5 sales/BD, 3 ops/support, 2 G&A",
      year2: "35 FTEs: 12 engineering, 12 sales/BD, 7 ops/support, 4 G&A",
      year3: "80 FTEs: 25 engineering, 30 sales/BD, 15 ops/support, 10 G&A"
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "Oil Price Volatility",
        severity: "High",
        likelihood: "Medium",
        description: "Low oil prices could reduce operator spending on monitoring and integrity solutions, slowing adoption and increasing churn.",
        mitigation: "Compliance requirements are non-discretionary regardless of commodity prices. Position as cost reduction (fewer fines, less manual reporting) not optional spend. Regulatory contracts provide revenue stability."
      },
      {
        risk: "Enterprise Incumbents Enter SMB Market",
        severity: "High",
        likelihood: "Low",
        description: "Baker Hughes, SLB, or Halliburton could launch simplified offerings targeting smaller operators we focus on.",
        mitigation: "Enterprise players have avoided SMB market for 20+ years due to economics and support requirements. Our regulatory hub creates differentiation they won't replicate. Move fast to build network effects and switching costs."
      },
      {
        risk: "State Agency Sales Cycles",
        severity: "Medium",
        likelihood: "High",
        description: "Government procurement can be slow (12-24 months) and politically complex, potentially delaying regulatory revenue.",
        mitigation: "Start with pilot programs requiring minimal procurement. Focus on states with urgent orphan well mandates. Build operator SaaS revenue while government deals develop."
      },
      {
        risk: "Data Security & Privacy",
        severity: "Medium",
        likelihood: "Medium",
        description: "Operators may be reluctant to share well data due to competitive concerns or security risks.",
        mitigation: "Enterprise-grade security (SOC 2, encryption). Anonymization for data products. Clear data ownership terms. Operators control sharing permissions. Reference major operators who've adopted similar platforms."
      },
      {
        risk: "Integration Complexity",
        severity: "Medium",
        likelihood: "Medium",
        description: "Diverse SCADA systems and legacy infrastructure could slow integrations and increase onboarding costs.",
        mitigation: "Pre-built connectors for top 10 SCADA platforms covering 80% of market. Manual data import option for smaller operators. Partner with SCADA vendors for deep integration."
      },
      {
        risk: "Regulatory Environment Changes",
        severity: "Low",
        likelihood: "Low",
        description: "Administration changes could reduce environmental enforcement or methane regulations.",
        mitigation: "Operator value proposition (efficiency, cost reduction) is administration-agnostic. ESG pressure from investors continues regardless of federal policy. State regulations more stable than federal."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Month 3", milestone: "Platform MVP live, first 10 operators onboarded in Permian Basin", status: "planned" },
      { timeline: "Month 6", milestone: "500 wells registered, Texas RRC pilot integration launched", status: "planned" },
      { timeline: "Month 9", milestone: "5,000 wells, first state agency contract signed, AI integrity scoring live", status: "planned" },
      { timeline: "Month 12", milestone: "$1.2M ARR, 50 operators, 3 state partnerships initiated", status: "planned" },
      { timeline: "Month 15", milestone: "Series A fundraise initiated, $2.5M ARR run rate", status: "planned" },
      { timeline: "Month 18", milestone: "18,000 wells, $5M ARR, Series A closed ($15-20M)", status: "planned" },
      { timeline: "Month 24", milestone: "50,000 wells, $15M ARR, national coverage, cash flow positive", status: "planned" }
    ]
  },

  ask: {
    title: "The Ask",
    amount: "$4,500,000",
    round: "Seed Round",
    terms: "SAFE or Priced Round at $18M post-money valuation",
    useOfFunds: [
      "Build well registry platform with SCADA integrations",
      "Acquire and onboard first 50 operators (5,000+ wells)",
      "Launch regulatory partnerships in Texas, Oklahoma, New Mexico",
      "Develop AI-powered integrity scoring and prediction models"
    ],
    timeline: "18-month runway to Series A milestones",
    seriesA: {
      timing: "Month 15-18",
      metrics: "$2-3M ARR, 15,000+ wells, 3 state agency partnerships",
      raise: "$15-25M at $75-100M valuation"
    }
  },

  sources: [
    { name: "Well Integrity Management Market", url: "https://www.openpr.com/news/4186769/well-integrity-management-market-size-to-worth-usd-6-5-billion", detail: "$4.2B in 2025, 6.4% CAGR to $6.5B by 2032" },
    { name: "Oil & Gas Integrity Market", url: "https://www.strategicrevenueinsights.com/industry/oil-gas-integrity-market", detail: "$19.6B in 2024, growing to $35.2B by 2033" },
    { name: "EIA Oil & Gas Wells Data", url: "https://www.eia.gov/petroleum/wells/", detail: "918,000+ active U.S. wells, 78% produce <15 BOE/day" },
    { name: "EIA Drilling Productivity Report", url: "https://www.eia.gov/petroleum/drilling/", detail: "15,000+ new wells annually, declining rig counts" },
    { name: "Oilfield Integrity Management Market", url: "https://www.polarismarketresearch.com/press-releases/oilfield-integrity-management-market", detail: "$26.6B by 2032, 7.3% CAGR" },
    { name: "Pipeline Integrity Management Market", url: "https://www.fortunebusinessinsights.com/industry-reports/pipeline-integrity-management-market-100961", detail: "$10.2B in 2024, 5.6% CAGR" },
    { name: "Smart Well Systems Market", url: "https://www.futuremarketreport.com/industry-report/smart-well-systems-market", detail: "$3.5B in 2024, 9.2% CAGR to $7.2B by 2032" },
    { name: "Infrastructure Investment and Jobs Act", url: "https://www.doi.gov/pressreleases/interior-department-releases-implementation-guidance-states-plug-orphan-wells", detail: "$4.7B for orphan well plugging program" }
  ]
}

// Helper Components
function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-emerald-600" />
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
      <div className="text-3xl font-bold text-emerald-600">{value}</div>
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
      <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <a
            href="/tokens/#framework"
            className="inline-flex items-center gap-2 text-emerald-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cap-Ex Opportunities
          </a>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Gauge className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{businessPlan.companyName}</h1>
                  <p className="text-emerald-100">{businessPlan.tagline}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-emerald-200">{businessPlan.version}</div>
              <div className="text-sm text-emerald-200">{businessPlan.date}</div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.ask.amount}</div>
              <div className="text-sm text-emerald-100">Seed Round</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.marketSize.sam.value}</div>
              <div className="text-sm text-emerald-100">Well Integrity Market</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">6.4%</div>
              <div className="text-sm text-emerald-100">Market CAGR</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">24:1</div>
              <div className="text-sm text-emerald-100">LTV:CAC</div>
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
                activeTab === 'overview' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Executive Summary
            </button>
            <button
              onClick={() => setActiveTab('detailed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'detailed' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Full Plan
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'financials' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600 hover:bg-gray-100'
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
                  <div key={i} className="p-4 bg-emerald-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{pillar.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {pillar.features.map((feature, j) => (
                        <span key={j} className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded text-xs">
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
                  <div key={i} className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-400">
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
                <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.tam.label}</div>
                  <div className="text-sm text-emerald-100 mt-1">{businessPlan.marketSize.tam.description}</div>
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
            <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">{businessPlan.ask.title}</h2>
                <div className="text-5xl font-bold mb-2">{businessPlan.ask.amount}</div>
                <div className="text-xl text-emerald-100">{businessPlan.ask.round}</div>
                <div className="text-emerald-200 mt-2">{businessPlan.ask.terms}</div>
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
                    <p><span className="text-emerald-200">Timing:</span> {businessPlan.ask.seriesA.timing}</p>
                    <p><span className="text-emerald-200">Metrics:</span> {businessPlan.ask.seriesA.metrics}</p>
                    <p><span className="text-emerald-200">Raise:</span> {businessPlan.ask.seriesA.raise}</p>
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
                            player.threat.includes('partner') || player.threat.includes('Partner') ? 'bg-blue-100 text-blue-700' :
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

              <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                <h4 className="font-semibold text-emerald-800 mb-2">{businessPlan.competition.ourAdvantage.title}</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {businessPlan.competition.ourAdvantage.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
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
                  <div key={i} className="border-l-4 border-emerald-400 pl-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">
                        {phase.timeline}
                      </span>
                      <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 mb-3">
                      {phase.deliverables.map((deliverable, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
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

              <div className="p-4 bg-emerald-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{businessPlan.businessModel.unitEconomics.title}</h4>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  {businessPlan.businessModel.unitEconomics.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">{metric.value}</div>
                      <div className="text-sm font-medium text-gray-900">{metric.label}</div>
                      <div className="text-xs text-gray-500">{metric.note}</div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-emerald-200 pt-3 mt-3">
                  <h5 className="text-sm font-medium text-gray-900 mb-2">Key Notes</h5>
                  <ul className="grid md:grid-cols-2 gap-1">
                    {businessPlan.businessModel.unitEconomics.notes.map((note, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                        <span className="text-emerald-500">*</span>
                        {note}
                      </li>
                    ))}
                  </ul>
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
                      <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
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
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
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
                    <span className="inline-block mt-2 px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded text-xs">
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
                        <Award className="w-4 h-4 text-emerald-500" />
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
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-emerald-200" />
                <div className="space-y-4">
                  {businessPlan.milestones.items.map((item, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-emerald-600">{item.timeline}</span>
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
                {/* Scenario 1: With Regulatory Partnerships */}
                <div className="p-4 bg-emerald-50 rounded-lg border-2 border-emerald-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-emerald-600 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withRegulatoryPartnerships.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withRegulatoryPartnerships.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-emerald-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Wells</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withRegulatoryPartnerships.years.map((year, i) => (
                          <tr key={i} className="border-b border-emerald-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.wells.toLocaleString()}</td>
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
                      {businessPlan.financials.scenarios.withRegulatoryPartnerships.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-emerald-500">*</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-emerald-600">
                      Funding Required: {businessPlan.financials.scenarios.withRegulatoryPartnerships.fundingRequired}
                    </span>
                  </div>
                </div>

                {/* Scenario 2: Without Regulatory Partnerships */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{businessPlan.financials.scenarios.withoutRegulatoryPartnerships.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withoutRegulatoryPartnerships.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Wells</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutRegulatoryPartnerships.years.map((year, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.wells.toLocaleString()}</td>
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
                      {businessPlan.financials.scenarios.withoutRegulatoryPartnerships.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-gray-500">*</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-gray-600">
                      Funding Required: {businessPlan.financials.scenarios.withoutRegulatoryPartnerships.fundingRequired}
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
                        <span className="text-lg font-bold text-emerald-600">{item.percentage}%</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-6 bg-gray-200 rounded overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded"
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
                  <div key={i} className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-emerald-600">{metric.value}</div>
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
                    <h4 className="font-medium text-gray-900 text-sm group-hover:text-emerald-600 transition-colors">
                      {source.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{source.detail}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors flex-shrink-0" />
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
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
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
