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
  Car,
  FileText,
  Briefcase,
  Scale,
  Lightbulb,
  Globe,
  Award,
  PieChart,
  LineChart
} from 'lucide-react'

// Business Plan Data
const businessPlan = {
  companyName: "CalibrateNet",
  tagline: "The Operating System for Auto Glass & ADAS Calibration",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "70% of collision shops lack ADAS calibration capability. Safelite controls 33%+ of auto glass but can't scale calibration fast enough. Insurance companies struggle with fragmented independents and inconsistent quality.",
    solution: "CalibrateNet aggregates independent auto glass shops into a unified network with standardized ADAS calibration capabilities, equipment financing, and direct insurance carrier integration.",
    market: "$4.8B ADAS calibration market (2025) growing at 13.4% CAGR to $11.6B by 2032. $20B+ auto glass aftermarket.",
    ask: "$5M Seed Round to build platform, onboard first 500 shops, and secure 2 insurance carrier partnerships."
  },

  problem: {
    title: "The ADAS Calibration Crisis",
    points: [
      {
        title: "Equipment Gap",
        detail: "ADAS calibration equipment costs $15K-$50K per unit. Most independent shops can't afford it.",
        stat: "70%",
        statLabel: "of collision shops lack in-house calibration"
      },
      {
        title: "Fragmentation",
        detail: "Thousands of independent auto glass shops with no standardization, inconsistent quality, and no unified network.",
        stat: "2,500+",
        statLabel: "Safelite competitors, mostly fragmented"
      },
      {
        title: "Insurance Friction",
        detail: "Insurance companies pay 70%+ of auto glass claims but struggle to manage fragmented independents. TPAs like Safelite Solutions control routing.",
        stat: "18+",
        statLabel: "of top 25 insurers use Safelite's TPA"
      },
      {
        title: "Safety Liability",
        detail: "Improper ADAS calibration creates safety risks. 75% of vehicles will have ADAS by 2030. Calibration isn't optional—it's mandatory.",
        stat: "75%",
        statLabel: "of cars will have ADAS by 2030"
      }
    ]
  },

  solution: {
    title: "CalibrateNet: The Network of Record",
    tagline: "Aggregate. Standardize. Finance. Distribute.",
    pillars: [
      {
        icon: "Globe",
        title: "Network Aggregation",
        description: "Unified platform connecting independent auto glass shops with standardized quoting, scheduling, and quality tracking.",
        features: ["Real-time shop availability", "Standardized pricing", "Quality scoring", "Customer reviews"]
      },
      {
        icon: "Wrench",
        title: "Equipment Financing",
        description: "Bundled ADAS calibration equipment financing/leasing with network membership. Shops get equipment, we get lock-in.",
        features: ["$0 down equipment programs", "Monthly lease bundled with membership", "Maintenance included", "Upgrade path to latest tech"]
      },
      {
        icon: "Shield",
        title: "Insurance Integration",
        description: "Direct TPA relationships with insurance carriers. Become the preferred network for ADAS-compliant claims.",
        features: ["Direct carrier integration", "Automated claims processing", "Compliance certification", "Liability reduction"]
      },
      {
        icon: "BarChart3",
        title: "Data Intelligence",
        description: "Calibration quality data, shop performance metrics, and ADAS coverage intelligence valuable to OEMs and insurers.",
        features: ["Calibration success rates", "Equipment utilization", "Geographic coverage gaps", "OEM-specific insights"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "ADAS Explosion",
        detail: "Vehicles with ADAS features grew from 11% (2020) to 50% (2025) to projected 75% by 2030. Every windshield replacement now requires calibration.",
        icon: "Car"
      },
      {
        title: "Safelite's Weakness",
        detail: "Safelite owns 33%+ of auto glass but is vertically integrated—they can't scale calibration fast enough and won't partner with independents.",
        icon: "Building2"
      },
      {
        title: "Insurance Pressure",
        detail: "Insurers face liability for improper calibration. They NEED a compliant network but can't manage 2,500+ fragmented independents.",
        icon: "Shield"
      },
      {
        title: "Equipment Costs Dropping",
        detail: "Autel and other manufacturers are commoditizing calibration equipment. Systems that cost $50K+ now start at $22K.",
        icon: "TrendingUp"
      },
      {
        title: "SEO Distribution Window",
        detail: "As AI disrupts search, traditional SEO-based distribution is dying. Capture relationships NOW before the window closes.",
        icon: "Clock"
      }
    ]
  },

  marketSize: {
    title: "Market Opportunity",
    tam: {
      value: "$11.6B",
      label: "Total Addressable Market",
      description: "ADAS Calibration Services Market by 2032",
      source: "Coherent Market Insights"
    },
    sam: {
      value: "$3.0B",
      label: "Serviceable Addressable Market",
      description: "US ADAS Calibration Market by 2030",
      source: "Industry estimates"
    },
    som: {
      value: "$300M",
      label: "Serviceable Obtainable Market",
      description: "10% market share in 5 years",
      source: "Conservative capture estimate"
    },
    additionalMarkets: [
      { name: "Auto Glass Aftermarket", value: "$28.5B by 2030", cagr: "7.15%" },
      { name: "North America Auto Glass", value: "$6.26B (2025)", cagr: "5.6%" },
      { name: "Collision Repair Market", value: "$40B+ annually", cagr: "3-4%" }
    ],
    keyMetrics: [
      { label: "Average calibration fee", value: "$300-600" },
      { label: "Calibrations per shop/month", value: "20-50" },
      { label: "Insurance-paid claims", value: "70%+" },
      { label: "North America market share", value: "49%" }
    ]
  },

  competition: {
    title: "Competitive Landscape",
    players: [
      {
        name: "Safelite",
        type: "Market Leader",
        marketShare: "33%+",
        strengths: ["Vertically integrated", "Brand recognition", "Insurance relationships", "Owns Safelite Solutions TPA"],
        weaknesses: ["Can't scale calibration fast enough", "Won't work with independents", "Expensive for insurers", "Conflicts of interest as TPA"],
        threat: "High but distracted"
      },
      {
        name: "Gerber/Boyd Group",
        type: "Major Player",
        marketShare: "~10%",
        strengths: ["National footprint", "Collision repair focus", "Some calibration capability"],
        weaknesses: ["Collision-first, glass-second", "Limited ADAS investment", "Not aggregating independents"],
        threat: "Medium"
      },
      {
        name: "Glass America",
        type: "Regional Player",
        marketShare: "~5%",
        strengths: ["Strong regional presence", "Growing through acquisition"],
        weaknesses: ["Regional not national", "Limited tech investment", "No network model"],
        threat: "Low"
      },
      {
        name: "Independent Shops",
        type: "Fragmented",
        marketShare: "~50%",
        strengths: ["Local relationships", "Lower prices", "Flexibility"],
        weaknesses: ["No ADAS capability", "No insurance relationships", "No technology", "Can't afford equipment"],
        threat: "Partners not competitors"
      }
    ],
    ourAdvantage: {
      title: "CalibrateNet's Unfair Advantages",
      points: [
        "Network model—we empower independents instead of competing with them",
        "Equipment financing creates switching costs and recurring revenue",
        "Data network effects—more shops = better coverage = more insurer interest",
        "No Safelite conflicts of interest—we're not competing for their claims",
        "Cap-Ex arbitrage—equipment as infrastructure investment for insurers"
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
          "Shop onboarding platform (web + mobile)",
          "Equipment leasing program with 3 manufacturer partners",
          "Standardized quoting and scheduling system",
          "Quality tracking and shop scoring",
          "Basic insurance claims integration"
        ],
        milestone: "500 shops onboarded, 2 equipment partners"
      },
      {
        phase: "Phase 2: Scale",
        timeline: "Months 7-12",
        deliverables: [
          "Direct insurance carrier integrations (2-3 carriers)",
          "Real-time calibration tracking and verification",
          "Mobile technician app with AR calibration guidance",
          "Predictive demand modeling",
          "Shop performance analytics dashboard"
        ],
        milestone: "2,000 shops, 2 carrier partnerships, $1M ARR"
      },
      {
        phase: "Phase 3: Dominate",
        timeline: "Year 2-3",
        deliverables: [
          "National coverage (10,000+ shops)",
          "OEM data partnerships (calibration quality data)",
          "Insurance risk reduction products",
          "Expansion to fleet management",
          "International expansion (Canada, Mexico)"
        ],
        milestone: "$10M ARR, 5 carrier partnerships, market leader"
      }
    ]
  },

  businessModel: {
    title: "Business Model",
    revenueStreams: [
      {
        name: "Platform SaaS",
        description: "Monthly subscription for shop access to network, quoting, and scheduling tools",
        pricing: "$199-499/month per shop",
        margin: "80%+",
        year1Revenue: "$600K",
        year3Revenue: "$6M"
      },
      {
        name: "Equipment Financing",
        description: "Equipment leasing bundled with network membership. We earn spread on financing.",
        pricing: "$500-1,000/month lease (on $25K equipment)",
        margin: "15-20% spread",
        year1Revenue: "$400K",
        year3Revenue: "$4M"
      },
      {
        name: "Insurance Network Fees",
        description: "Per-claim fee from insurance carriers for routing claims to certified network",
        pricing: "$15-25 per claim",
        margin: "90%+",
        year1Revenue: "$200K",
        year3Revenue: "$8M"
      },
      {
        name: "Data & Intelligence",
        description: "Anonymized calibration data sold to OEMs, insurers, and autonomous vehicle developers",
        pricing: "Annual contracts $50K-500K",
        margin: "95%+",
        year1Revenue: "$0",
        year3Revenue: "$2M"
      }
    ],
    unitEconomics: {
      title: "Unit Economics Per Shop",
      metrics: [
        { label: "Customer Acquisition Cost (CAC)", value: "$1,500", note: "Includes equipment setup" },
        { label: "Average Revenue Per Shop (ARPS)", value: "$600/month", note: "Blended across revenue streams" },
        { label: "Gross Margin", value: "65%", note: "After equipment/financing costs" },
        { label: "Lifetime Value (LTV)", value: "$18,000", note: "Assuming 30-month retention" },
        { label: "LTV:CAC Ratio", value: "12:1", note: "Excellent unit economics" },
        { label: "Payback Period", value: "3 months", note: "Fast capital efficiency" }
      ]
    }
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withEquipmentFinancing: {
        name: "With Equipment Financing (Recommended)",
        description: "Full model with equipment leasing creating lock-in and recurring revenue",
        years: [
          { year: 1, revenue: "$1.2M", shops: 500, arr: "$1.2M", burn: "$3.8M", runway: "16 months" },
          { year: 2, revenue: "$6M", shops: 2000, arr: "$6M", burn: "$2M", runway: "Profitable" },
          { year: 3, revenue: "$20M", shops: 5000, arr: "$20M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$45M", shops: 8000, arr: "$45M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$80M", shops: 12000, arr: "$80M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$5M Seed",
        keyAssumptions: [
          "500 shops Year 1, growing to 12,000 by Year 5",
          "40% of shops take equipment financing",
          "2 insurance carrier partnerships by end of Year 1",
          "$600 blended ARPS across all revenue streams",
          "75% gross margin at scale"
        ]
      },
      withoutEquipmentFinancing: {
        name: "Without Equipment Financing (Conservative)",
        description: "Pure SaaS model without equipment financing component",
        years: [
          { year: 1, revenue: "$600K", shops: 300, arr: "$600K", burn: "$2.4M", runway: "25 months" },
          { year: 2, revenue: "$2.4M", shops: 1000, arr: "$2.4M", burn: "$1.5M", runway: "18 months" },
          { year: 3, revenue: "$8M", shops: 3000, arr: "$8M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$18M", shops: 5000, arr: "$18M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$35M", shops: 8000, arr: "$35M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$3M Seed",
        keyAssumptions: [
          "Slower shop acquisition without equipment incentive",
          "Higher churn without equipment lock-in (35% vs 20%)",
          "Pure SaaS margins (85%) but lower revenue per shop",
          "Longer path to insurance partnerships",
          "Less differentiation vs potential competitors"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $5M Seed Funds",
      breakdown: [
        { category: "Engineering & Product", amount: "$2.0M", percentage: 40, detail: "Platform development, mobile apps, integrations" },
        { category: "Equipment Inventory", amount: "$1.0M", percentage: 20, detail: "Initial equipment purchases for lease program" },
        { category: "Sales & Business Development", amount: "$1.0M", percentage: 20, detail: "Shop acquisition, carrier partnerships" },
        { category: "Operations & Support", amount: "$500K", percentage: 10, detail: "Shop onboarding, training, support" },
        { category: "G&A & Buffer", amount: "$500K", percentage: 10, detail: "Legal, accounting, office, contingency" }
      ]
    }
  },

  goToMarket: {
    title: "Go-to-Market Strategy",
    phases: [
      {
        phase: "Land",
        timeline: "Months 1-6",
        strategy: "Geographic Concentration",
        tactics: [
          "Start in 3-5 metro areas with high ADAS penetration (Phoenix, Dallas, Atlanta)",
          "Partner with equipment manufacturers (Autel, Hunter) for referrals",
          "Offer $0-down equipment with 2-year network commitment",
          "Target shops already doing windshield work but lacking calibration"
        ],
        metrics: ["500 shops onboarded", "85% activation rate", "NPS > 50"]
      },
      {
        phase: "Expand",
        timeline: "Months 7-12",
        strategy: "Insurance Partnership",
        tactics: [
          "Approach regional/mid-size insurers frustrated with Safelite pricing",
          "Offer 15-20% cost savings vs Safelite network",
          "Provide compliance certification and liability protection",
          "Pilot with 2-3 carriers in initial metro areas"
        ],
        metrics: ["2 carrier partnerships", "50,000 claims processed", "95% quality score"]
      },
      {
        phase: "Dominate",
        timeline: "Year 2+",
        strategy: "National Rollout",
        tactics: [
          "Leverage carrier partnerships for national distribution",
          "Franchise-like expansion model in new markets",
          "OEM partnerships for calibration data",
          "Fleet management channel"
        ],
        metrics: ["10,000+ shops", "5+ carrier partnerships", "National coverage"]
      }
    ],
    channels: [
      { name: "Direct Sales", description: "Field sales team targeting high-volume shops", cost: "High", effectiveness: "High" },
      { name: "Equipment Partners", description: "Autel, Hunter referrals bundled with equipment", cost: "Low", effectiveness: "High" },
      { name: "Insurance Referrals", description: "Carriers refer uncovered shops to join network", cost: "Low", effectiveness: "Very High" },
      { name: "Trade Associations", description: "Auto glass trade groups, collision repair associations", cost: "Medium", effectiveness: "Medium" },
      { name: "Digital Marketing", description: "SEO, content, targeted ads to shop owners", cost: "Medium", effectiveness: "Medium" }
    ]
  },

  team: {
    title: "Team Requirements",
    currentNeeds: [
      {
        role: "CEO / Founder",
        skills: "Industry experience, fundraising, vision",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "CTO",
        skills: "Platform development, mobile, integrations",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Sales",
        skills: "Auto glass/collision industry experience, B2B sales",
        status: "Seeking",
        priority: "High"
      },
      {
        role: "VP Partnerships",
        skills: "Insurance industry relationships, BD experience",
        status: "Seeking",
        priority: "High"
      }
    ],
    advisorNeeds: [
      "Former auto glass industry executive",
      "Insurance carrier claims executive",
      "Equipment manufacturing executive (Autel, Hunter)",
      "Fintech/equipment financing expert"
    ],
    orgPlan: {
      year1: "15 FTEs: 5 engineering, 4 sales, 3 ops, 3 G&A",
      year2: "40 FTEs: 12 engineering, 15 sales, 8 ops, 5 G&A",
      year3: "100 FTEs: 25 engineering, 40 sales, 25 ops, 10 G&A"
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "Safelite Response",
        severity: "High",
        likelihood: "Medium",
        description: "Safelite could launch competing independent network or undercut pricing",
        mitigation: "Move fast, lock in shops with equipment financing, build carrier relationships before Safelite responds. Their vertical integration actually limits flexibility."
      },
      {
        risk: "Equipment Financing Risk",
        severity: "Medium",
        likelihood: "Low",
        description: "Shops default on equipment leases, creating bad debt",
        mitigation: "Equipment can be repossessed and redeployed. Require insurance on equipment. Monitor utilization for early warning. Partner with established equipment finance company."
      },
      {
        risk: "Insurance Carrier Adoption",
        severity: "High",
        likelihood: "Medium",
        description: "Carriers slow to adopt new network, prefer status quo with Safelite",
        mitigation: "Start with regional/mid-size carriers frustrated with Safelite. Offer compelling cost savings (15-20%). Emphasize compliance/liability protection."
      },
      {
        risk: "Shop Quality Issues",
        severity: "Medium",
        likelihood: "Medium",
        description: "Network shops deliver poor calibration quality, damaging reputation",
        mitigation: "Rigorous certification requirements. Continuous quality monitoring. Remove underperforming shops. Equipment includes diagnostic verification."
      },
      {
        risk: "Technology Execution",
        severity: "Medium",
        likelihood: "Low",
        description: "Platform development delays or integration challenges",
        mitigation: "Hire experienced CTO. Start with MVP and iterate. Use existing integrations where possible. Partner with equipment manufacturers on API."
      },
      {
        risk: "Market Timing",
        severity: "Low",
        likelihood: "Low",
        description: "ADAS adoption slower than projected",
        mitigation: "ADAS is mandated in new vehicles. Trend is clear and accelerating. Even at 50% penetration (current), market is massive."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Month 3", milestone: "Platform MVP live, first 50 shops onboarded", status: "planned" },
      { timeline: "Month 6", milestone: "500 shops, 2 equipment manufacturer partnerships", status: "planned" },
      { timeline: "Month 9", milestone: "First insurance carrier pilot launched", status: "planned" },
      { timeline: "Month 12", milestone: "$1M ARR, 2 carrier partnerships, Series A ready", status: "planned" },
      { timeline: "Month 18", milestone: "2,500 shops, national coverage in 25 states", status: "planned" },
      { timeline: "Month 24", milestone: "$6M ARR, 5 carrier partnerships, profitable", status: "planned" },
      { timeline: "Year 3", milestone: "$20M ARR, market leader, international expansion", status: "planned" }
    ]
  },

  ask: {
    title: "The Ask",
    amount: "$5,000,000",
    round: "Seed Round",
    terms: "SAFE or Priced Round at $20M post-money valuation",
    useOfFunds: [
      "Build world-class engineering team and platform",
      "Launch equipment financing program with $1M inventory",
      "Acquire first 500 shops and 2 carrier partnerships",
      "Prove unit economics and path to Series A"
    ],
    timeline: "18-month runway to Series A milestones",
    seriesA: {
      timing: "Month 12-15",
      metrics: "$1-2M ARR, 2,000 shops, 2+ carrier partnerships",
      raise: "$15-25M at $75-100M valuation"
    }
  },

  sources: [
    { name: "ADAS Calibration Service Market", url: "https://www.coherentmarketinsights.com/industry-reports/adas-calibration-service-market", detail: "$4.8B (2025) → $11.6B (2032), 13.4% CAGR" },
    { name: "Auto Glass Industry Statistics 2025", url: "https://verysmoothautoglass.com/auto-glass-industry-statistics-2025/", detail: "Market size, ADAS penetration data" },
    { name: "Automotive Aftermarket Glass Market", url: "https://www.mordorintelligence.com/industry-reports/automotive-aftermarket-glass-market", detail: "$20.21B (2025) → $28.54B (2030), 7.15% CAGR" },
    { name: "Safelite Market Analysis", url: "https://tracxn.com/d/companies/safelite/", detail: "33%+ market share, 2,572 competitors" },
    { name: "ADAS Calibration Equipment Pricing", url: "https://www.revvhq.com/blog/best-adas-calibration-equipment-2025", detail: "Autel, Hunter equipment costs $15K-$50K" },
    { name: "Insurance TPA Structure", url: "https://www.deltakits.com/insurance-billing-startup-information/third-party-administrators-billing-services/", detail: "TPA market structure, Safelite Solutions dominance" },
    { name: "Sequoia Pitch Deck Template", url: "https://sequoiacap.com/article/writing-a-business-plan/", detail: "Pitch deck framework and best practices" },
    { name: "Y Combinator Pitch Deck Guide", url: "https://www.ycombinator.com/library/2u-how-to-build-your-seed-round-pitch-deck", detail: "Seed round pitch deck structure" }
  ]
}

// Helper Components
function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-blue-600" />
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
      <div className="text-3xl font-bold text-blue-600">{value}</div>
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
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <a
            href="/tokens/#framework"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cap-Ex Opportunities
          </a>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{businessPlan.companyName}</h1>
                  <p className="text-blue-100">{businessPlan.tagline}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-blue-200">{businessPlan.version}</div>
              <div className="text-sm text-blue-200">{businessPlan.date}</div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.ask.amount}</div>
              <div className="text-sm text-blue-100">Seed Round</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.marketSize.tam.value}</div>
              <div className="text-sm text-blue-100">TAM (2032)</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">13.4%</div>
              <div className="text-sm text-blue-100">Market CAGR</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">12:1</div>
              <div className="text-sm text-blue-100">LTV:CAC</div>
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
                activeTab === 'overview' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Executive Summary
            </button>
            <button
              onClick={() => setActiveTab('detailed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'detailed' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Full Plan
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'financials' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
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
                  <div key={i} className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{pillar.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {pillar.features.map((feature, j) => (
                        <span key={j} className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
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
                <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.tam.label}</div>
                  <div className="text-sm text-blue-100 mt-1">{businessPlan.marketSize.tam.description}</div>
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
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">{businessPlan.ask.title}</h2>
                <div className="text-5xl font-bold mb-2">{businessPlan.ask.amount}</div>
                <div className="text-xl text-blue-100">{businessPlan.ask.round}</div>
                <div className="text-blue-200 mt-2">{businessPlan.ask.terms}</div>
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
                    <p><span className="text-blue-200">Timing:</span> {businessPlan.ask.seriesA.timing}</p>
                    <p><span className="text-blue-200">Metrics:</span> {businessPlan.ask.seriesA.metrics}</p>
                    <p><span className="text-blue-200">Raise:</span> {businessPlan.ask.seriesA.raise}</p>
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
                            player.threat === 'High but distracted' ? 'bg-yellow-100 text-yellow-700' :
                            player.threat === 'Medium' ? 'bg-orange-100 text-orange-700' :
                            player.threat === 'Low' ? 'bg-green-100 text-green-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {player.threat}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">{businessPlan.competition.ourAdvantage.title}</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {businessPlan.competition.ourAdvantage.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
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
                  <div key={i} className="border-l-4 border-blue-400 pl-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                        {phase.timeline}
                      </span>
                      <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 mb-3">
                      {phase.deliverables.map((deliverable, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
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

              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{businessPlan.businessModel.unitEconomics.title}</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {businessPlan.businessModel.unitEconomics.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
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
                      <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
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
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
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
                    <span className="inline-block mt-2 px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
                      {need.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Advisory Board Needs</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {businessPlan.team.advisorNeeds.map((advisor, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <Award className="w-4 h-4 text-blue-500" />
                      {advisor}
                    </li>
                  ))}
                </ul>
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
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200" />
                <div className="space-y-4">
                  {businessPlan.milestones.items.map((item, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white" />
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-blue-600">{item.timeline}</span>
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
            {/* Financial Projections - With Equipment Financing */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={LineChart} title="Financial Projections" />

              <div className="space-y-8">
                {/* Scenario 1: With Equipment Financing */}
                <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-600 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withEquipmentFinancing.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withEquipmentFinancing.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-blue-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Shops</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withEquipmentFinancing.years.map((year, i) => (
                          <tr key={i} className="border-b border-blue-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.shops.toLocaleString()}</td>
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
                      {businessPlan.financials.scenarios.withEquipmentFinancing.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-blue-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-blue-600">
                      Funding Required: {businessPlan.financials.scenarios.withEquipmentFinancing.fundingRequired}
                    </span>
                  </div>
                </div>

                {/* Scenario 2: Without Equipment Financing */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{businessPlan.financials.scenarios.withoutEquipmentFinancing.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withoutEquipmentFinancing.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Shops</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutEquipmentFinancing.years.map((year, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.shops.toLocaleString()}</td>
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
                      {businessPlan.financials.scenarios.withoutEquipmentFinancing.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-gray-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-gray-600">
                      Funding Required: {businessPlan.financials.scenarios.withoutEquipmentFinancing.fundingRequired}
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
                        <span className="text-lg font-bold text-blue-600">{item.percentage}%</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-6 bg-gray-200 rounded overflow-hidden">
                          <div
                            className="h-full bg-blue-500 rounded"
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
                  <div key={i} className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600">{metric.value}</div>
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
                    <h4 className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                      {source.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{source.detail}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
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
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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
