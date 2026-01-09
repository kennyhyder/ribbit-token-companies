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
  ArrowUpDown,
  Settings,
  Lock,
  Gauge
} from 'lucide-react'

// Business Plan Data
const businessPlan = {
  companyName: "LiftLogic",
  tagline: "The Network of Record for Elevator & Vertical Transport Maintenance",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Four major OEMs (Otis, Schindler, KONE, ThyssenKrupp) control over 55% of the U.S. elevator maintenance market with opaque pricing and lock-in tactics. Independent maintainers exist but are fragmented. Building owners have zero visibility into fair pricing or performance benchmarks.",
    solution: "LiftLogic aggregates independent elevator technicians into a credentialed network, standardizes service contracts, and tracks uptime/performance metrics. We create price transparency that breaks OEM lock-in and gives building owners control over their vertical transport assets.",
    market: "$33.5B global elevator maintenance market growing at 8% CAGR. The U.S. market alone represents $8-10B in annual service spend. Building owners and property managers desperately need alternatives to OEM pricing monopolies. Modernization projects ($100K-500K per unit) represent massive Cap-Ex decisions made blind.",
    ask: "$5M Seed Round to build technician network, deploy performance tracking platform, and partner with major commercial real estate owners to prove the model."
  },

  problem: {
    title: "The Elevator Maintenance Monopoly",
    points: [
      {
        title: "OEM Lock-In Dominance",
        detail: "Otis, Schindler, KONE, and ThyssenKrupp control over 55% of U.S. maintenance contracts. Proprietary parts, diagnostic tools, and training create artificial barriers to competition.",
        stat: "55%+",
        statLabel: "market controlled by 4 OEMs"
      },
      {
        title: "Zero Price Transparency",
        detail: "Building owners have no idea if they're paying fair rates. Same building class, same elevator type, wildly different maintenance costs. No benchmarking data exists.",
        stat: "$0",
        statLabel: "public pricing benchmarks"
      },
      {
        title: "Fragmented Independents",
        detail: "Thousands of qualified independent elevator techs exist but can't compete. No unified network, no standardized contracts, no way to demonstrate quality to large property owners.",
        stat: "15K+",
        statLabel: "independent elevator techs in US"
      },
      {
        title: "Blind Capital Decisions",
        detail: "Elevator modernization projects cost $100K-500K per unit. Building owners make these Cap-Ex decisions with zero performance data or competitive bidding infrastructure.",
        stat: "$200K",
        statLabel: "average modernization cost"
      }
    ]
  },

  solution: {
    title: "LiftLogic: Intelligence for Vertical Transport",
    tagline: "Aggregate. Standardize. Track. Liberate.",
    pillars: [
      {
        icon: "ArrowUpDown",
        title: "Technician Network",
        description: "Credentialed network of vetted independent elevator technicians with verified certifications, insurance, and quality standards.",
        features: ["Credential verification", "Insurance validation", "Quality scoring", "Geographic coverage"]
      },
      {
        icon: "Settings",
        title: "Standardized Contracts",
        description: "Template service agreements that protect building owners with clear SLAs, pricing transparency, and performance guarantees.",
        features: ["SLA frameworks", "Price benchmarking", "Performance clauses", "Exit provisions"]
      },
      {
        icon: "Gauge",
        title: "Performance Tracking",
        description: "Real-time monitoring of elevator uptime, response times, and maintenance quality. Data-driven decisions for the first time.",
        features: ["Uptime monitoring", "Response time tracking", "Maintenance analytics", "Predictive alerts"]
      },
      {
        icon: "Lock",
        title: "OEM Independence",
        description: "Break the lock-in cycle with parts sourcing, diagnostic tool access, and training programs that level the playing field.",
        features: ["Parts marketplace", "Diagnostic access", "Training programs", "Code compliance"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "Aging Elevator Fleet",
        detail: "Average US elevator is 20+ years old. Massive modernization wave coming as buildings face capital decisions on vertical transport. The market is growing at 5-8% CAGR through 2033.",
        icon: "TrendingUp"
      },
      {
        title: "IoT Monitoring Explosion",
        detail: "The IoT in elevators market is projected to grow from $32B in 2024 to $78B by 2032. Predictive maintenance alone represents $8.3B opportunity. Remote monitoring now economically viable.",
        icon: "Zap"
      },
      {
        title: "Right-to-Repair Movement",
        detail: "Regulatory and legislative pressure growing for equipment repair rights. OEM proprietary lock-in facing increasing scrutiny. FTC pushing for repair access.",
        icon: "Shield"
      },
      {
        title: "CRE Tech Adoption",
        detail: "Commercial real estate embracing PropTech. Building owners now expect SaaS platforms for asset management decisions. Smart building market growing 15%+ annually.",
        icon: "Users"
      }
    ]
  },

  marketSize: {
    title: "Market Opportunity",
    tam: {
      value: "$134B",
      label: "Total Addressable Market",
      description: "Global Elevators & Escalators Market by 2032",
      source: "Industry Research 2024"
    },
    sam: {
      value: "$33.5B",
      label: "Serviceable Addressable Market",
      description: "Global Elevator Maintenance Market 2024",
      source: "Fortune Business Insights"
    },
    som: {
      value: "$58M",
      label: "Serviceable Obtainable Market",
      description: "Year 5 target: 1,200 buildings, 500 techs",
      source: "Conservative capture estimate"
    },
    additionalMarkets: [
      { name: "IoT in Elevators Market", value: "$32.1B (2025)", cagr: "16.6%" },
      { name: "Predictive Maintenance Segment", value: "$8.3B (2032)", cagr: "19.2%" },
      { name: "Asia-Pacific Maintenance", value: "$14.7B (2024)", cagr: "8.5%" },
      { name: "U.S. Elevator Services", value: "$8-10B (2024)", cagr: "5.2%" }
    ],
    keyMetrics: [
      { label: "Global elevators installed", value: "20M+ units" },
      { label: "U.S. elevator units", value: "900K+" },
      { label: "Average maintenance contract", value: "$3K-$8K/year" },
      { label: "Modernization project cost", value: "$100K-$500K" }
    ]
  },

  competition: {
    title: "Competitive Landscape",
    players: [
      {
        name: "Otis Elevator Company",
        type: "OEM Leader",
        marketShare: "~22-25%",
        strengths: ["#1 Global brand", "Largest installed base", "Full-service capability", "Strong financing"],
        weaknesses: ["Premium pricing", "Proprietary lock-in", "Slow innovation", "Poor transparency"],
        threat: "Incumbent to disrupt"
      },
      {
        name: "Schindler",
        type: "OEM Premium",
        marketShare: "~18-20%",
        strengths: ["Quality reputation", "Global footprint", "Modernization expertise", "Strong in Europe"],
        weaknesses: ["Expensive contracts", "Proprietary parts", "Limited flexibility", "Opaque pricing"],
        threat: "Incumbent to disrupt"
      },
      {
        name: "KONE Corporation",
        type: "OEM Tech Leader",
        marketShare: "~15-18%",
        strengths: ["IoT leadership", "Energy efficiency", "Modern fleet", "24/7 Connected Services"],
        weaknesses: ["Smaller US presence", "Premium pricing", "Still proprietary", "OEM mindset"],
        threat: "Most tech-forward competitor"
      },
      {
        name: "ThyssenKrupp Elevator (TK Elevator)",
        type: "OEM Challenger",
        marketShare: "~12-15%",
        strengths: ["Strong in modernization", "MAX IoT platform", "Growing presence", "Private equity backing"],
        weaknesses: ["Ownership transition", "Market position", "Proprietary systems", "Integration issues"],
        threat: "Potential partner or competitor"
      },
      {
        name: "Independent Maintainers",
        type: "Fragmented",
        marketShare: "~20-25%",
        strengths: ["Lower pricing", "Flexible terms", "Local relationships", "OEM-agnostic"],
        weaknesses: ["No network", "No benchmarks", "Credibility gap", "Limited coverage"],
        threat: "Partners not competitors"
      }
    ],
    ourAdvantage: {
      title: "LiftLogic's Unfair Advantages",
      points: [
        "Network effects: More technicians = better coverage = more building owners = more performance data = better benchmarks",
        "Data moat: Only aggregated view of independent elevator maintenance quality and pricing in the U.S.",
        "Manufacturer-agnostic: We work with all elevator brands, not locked to one OEM",
        "Cap-Ex alignment: Building owners can fund as infrastructure investment, not operating expense",
        "No channel conflict: We help independents succeed and give owners choice, not compete with them"
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
          "Technician onboarding platform (web + mobile)",
          "Credential verification and insurance tracking",
          "Standardized contract templates and SLA frameworks",
          "Building owner portal with vendor management",
          "Basic performance dashboards and reporting"
        ],
        milestone: "50 buildings, 30 technicians in network"
      },
      {
        phase: "Phase 2: Intelligence",
        timeline: "Months 7-12",
        deliverables: [
          "IoT sensor integration for real-time monitoring",
          "Uptime tracking and performance benchmarking",
          "Price transparency and comparison tools",
          "Predictive maintenance alerts and scheduling",
          "CRE partnership portal with portfolio analytics"
        ],
        milestone: "150 buildings, 70 technicians, first CRE partnership"
      },
      {
        phase: "Phase 3: Scale",
        timeline: "Year 2-3",
        deliverables: [
          "National technician network (500+ techs)",
          "Parts marketplace and procurement platform",
          "Cap-Ex advisory and modernization planning tools",
          "Data licensing to investors and insurers",
          "API for PropTech integrations"
        ],
        milestone: "1,200 buildings, 500 technicians, $58M ARR"
      }
    ]
  },

  businessModel: {
    title: "Business Model",
    revenueStreams: [
      {
        name: "Building Owner Platform",
        description: "SaaS subscription for elevator portfolio management, performance monitoring, and vendor management",
        pricing: "$500-$3,000/building/month based on elevator count",
        margin: "85%",
        year1Revenue: "$800K",
        year3Revenue: "$22M"
      },
      {
        name: "Service Transaction Fees",
        description: "Transaction fees on maintenance and modernization work booked through platform",
        pricing: "10-15% of service invoice",
        margin: "90%",
        year1Revenue: "$600K",
        year3Revenue: "$18M"
      },
      {
        name: "Technician Network",
        description: "SaaS subscription + job fees for credentialed independent elevator technicians",
        pricing: "$299-$599/month + 8% job fees",
        margin: "80%",
        year1Revenue: "$400K",
        year3Revenue: "$10M"
      },
      {
        name: "Data & Advisory",
        description: "Benchmarking data, Cap-Ex consulting, and modernization advisory for building owners and investors",
        pricing: "$25K-$150K per engagement",
        margin: "70%",
        year1Revenue: "$600K",
        year3Revenue: "$8M"
      }
    ],
    unitEconomics: {
      title: "Unit Economics Per Building Owner",
      metrics: [
        { label: "Customer Acquisition Cost (CAC)", value: "$3,000", note: "Digital + enterprise sales" },
        { label: "Average Revenue Per Account (ARPA)", value: "$1,500/month", note: "Blended across revenue streams" },
        { label: "Gross Margin", value: "82%", note: "After platform and support costs" },
        { label: "Lifetime Value (LTV)", value: "$42,000", note: "4+ year average retention" },
        { label: "LTV:CAC Ratio", value: "14:1", note: "Exceptional unit economics" },
        { label: "Payback Period", value: "5 months", note: "Fast capital efficiency" }
      ]
    }
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withCapExAngle: {
        name: "With Cap-Ex Financing Angle (Recommended)",
        description: "Partner with CRE lenders and property investors who capitalize elevator maintenance and modernization as infrastructure",
        years: [
          { year: 1, revenue: "$2.4M", shops: "180 buildings, 80 techs", arr: "$2.4M", burn: "$2.6M", runway: "20 months" },
          { year: 2, revenue: "$9.5M", shops: "450 buildings, 200 techs", arr: "$9.5M", burn: "$0", runway: "Profitable" },
          { year: 3, revenue: "$24M", shops: "750 buildings, 350 techs", arr: "$24M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$42M", shops: "1,000 buildings, 420 techs", arr: "$42M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$68M", shops: "1,400 buildings, 550 techs", arr: "$68M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$5M Seed",
        keyAssumptions: [
          "CRE investors capitalize maintenance as infrastructure",
          "Modernization advisory drives high-value engagements",
          "Data licensing to investors and lenders by Year 2",
          "Network effects accelerate growth Year 3+",
          "75% gross margin at scale"
        ]
      },
      withoutCapExAngle: {
        name: "Without Cap-Ex Financing Angle (Conservative)",
        description: "Direct sales to building owners without leveraging capital expenditure positioning",
        years: [
          { year: 1, revenue: "$1.6M", shops: "120 buildings, 60 techs", arr: "$1.6M", burn: "$2M", runway: "30 months" },
          { year: 2, revenue: "$5.5M", shops: "280 buildings, 140 techs", arr: "$5.5M", burn: "$0.5M", runway: "24 months" },
          { year: 3, revenue: "$14M", shops: "520 buildings, 250 techs", arr: "$14M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$28M", shops: "780 buildings, 350 techs", arr: "$28M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$45M", shops: "1,100 buildings, 450 techs", arr: "$45M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$4M Seed",
        keyAssumptions: [
          "Direct building owner sales only",
          "Slower enterprise deal cycles",
          "Advisory services develop organically",
          "Transaction fees primary growth driver",
          "Higher churn without CRE partnerships (35% vs 20%)"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $5M Seed Funds",
      breakdown: [
        { category: "Engineering & Product", amount: "$2.0M", percentage: 40, detail: "Platform development, IoT integration, mobile apps, data infrastructure" },
        { category: "Sales & Success", amount: "$1.4M", percentage: 28, detail: "CRE sales team, building owner onboarding, customer success" },
        { category: "Technician Network", amount: "$900K", percentage: 18, detail: "Tech recruitment, credentialing, training programs, quality assurance" },
        { category: "Marketing", amount: "$450K", percentage: 9, detail: "Industry events, content marketing, CRE partnerships, brand" },
        { category: "Operations", amount: "$250K", percentage: 5, detail: "Legal, compliance, insurance, G&A" }
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
          "Start in 3-5 metros with high commercial density (NYC, Chicago, LA, Houston, Miami)",
          "Partner with independent elevator techs frustrated by OEM competition",
          "Target property management companies managing 10+ buildings",
          "Offer free platform access for first 3 months with immediate performance tracking"
        ],
        metrics: ["50 buildings onboarded", "30 technicians in network", "NPS > 50"]
      },
      {
        phase: "Expand",
        timeline: "Months 7-12",
        strategy: "CRE Partnership Launch",
        tactics: [
          "Approach major CRE owners with portfolio-level analytics proposals",
          "Target REITs and property managers with modernization budgets",
          "Offer benchmarking data in exchange for platform adoption",
          "Build relationships with PropTech platforms for integration"
        ],
        metrics: ["First major CRE partnership (500+ building portfolio)", "150 buildings", "70 technicians"]
      },
      {
        phase: "Dominate",
        timeline: "Year 2+",
        strategy: "National Rollout",
        tactics: [
          "Leverage CRE partnerships for credibility and referrals",
          "Expand technician network to all major metros",
          "Launch Cap-Ex advisory and modernization consulting",
          "Build data licensing partnerships with investors and insurers"
        ],
        metrics: ["1,200+ buildings", "500+ technicians", "National coverage", "$58M ARR"]
      }
    ],
    channels: [
      { name: "Direct Enterprise Sales", description: "Field sales team targeting CRE owners and property managers", cost: "High", effectiveness: "Very High" },
      { name: "PropTech Partnerships", description: "Integration with building management and asset platforms", cost: "Medium", effectiveness: "High" },
      { name: "Technician Referrals", description: "Network techs refer building owners for better contracts", cost: "Low", effectiveness: "High" },
      { name: "Trade Associations", description: "BOMA, IREM, elevator industry groups", cost: "Medium", effectiveness: "Medium" },
      { name: "Digital Marketing", description: "SEO, content, targeted ads to building owners and managers", cost: "Medium", effectiveness: "Medium" }
    ]
  },

  team: {
    title: "Team Requirements",
    currentNeeds: [
      {
        role: "CEO / Founder",
        skills: "PropTech or CRE tech experience, fundraising, vision, network building",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "CTO",
        skills: "Platform architecture, IoT integration, data systems, mobile development",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Sales",
        skills: "CRE relationships, enterprise B2B sales, property management industry",
        status: "Seeking",
        priority: "High"
      },
      {
        role: "Head of Technician Network",
        skills: "Elevator industry experience, tech recruitment, quality assurance",
        status: "Seeking",
        priority: "High"
      }
    ],
    advisorNeeds: [
      "Former elevator OEM executive (Otis, Schindler, KONE, or TK)",
      "Major CRE owner or property management executive",
      "PropTech founder (Building Engines, VTS, or similar alumni)",
      "IoT/predictive maintenance technology expert"
    ],
    orgPlan: {
      year1: "15 FTEs: 5 engineering, 5 sales/success, 3 network ops, 2 G&A",
      year2: "35 FTEs: 12 engineering, 14 sales/success, 6 network ops, 3 G&A",
      year3: "80 FTEs: 25 engineering, 35 sales/success, 12 network ops, 8 G&A"
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "OEM Competitive Response",
        severity: "High",
        likelihood: "Medium",
        description: "Otis, Schindler, KONE, or TK could launch competing platforms or acquire independents to shut out competition.",
        mitigation: "Move fast to build network before OEMs react. OEMs have avoided managing independents due to channel conflict. Their response validates the market. Build switching costs through data and relationships."
      },
      {
        risk: "Technician Quality Control",
        severity: "High",
        likelihood: "Medium",
        description: "Elevator safety is critical. Poor quality techs in network could cause safety incidents and destroy reputation.",
        mitigation: "Rigorous credentialing with state license verification. Ongoing performance monitoring and customer feedback. Start with experienced techs with proven track records. Insurance requirements."
      },
      {
        risk: "Proprietary Parts Access",
        severity: "Medium",
        likelihood: "High",
        description: "OEMs restrict access to proprietary parts, diagnostic tools, and technical documentation, limiting independent maintenance capability.",
        mitigation: "Build parts sourcing network with aftermarket suppliers. Partner with third-party diagnostic tool providers. Support right-to-repair legislation. Many parts available through authorized channels."
      },
      {
        risk: "Building Owner Sales Cycles",
        severity: "Medium",
        likelihood: "High",
        description: "Enterprise CRE sales cycles are 6-12 months. Capital expenditure decisions require multiple stakeholders and budget cycles.",
        mitigation: "Start with property management companies who manage multiple buildings. Prove ROI at portfolio level first. Partner with PropTech platforms for distribution."
      },
      {
        risk: "Regulatory Complexity",
        severity: "Medium",
        likelihood: "Medium",
        description: "Elevator codes and licensing requirements vary by jurisdiction. Compliance is complex and violations are serious.",
        mitigation: "Build compliance database by state/city. Partner with inspection authorities. Credential requirements ensure tech competence. Legal review of all contract templates."
      },
      {
        risk: "Safety Liability",
        severity: "High",
        likelihood: "Low",
        description: "Elevator incidents could create liability exposure for platform even though we don't perform maintenance directly.",
        mitigation: "Clear platform terms limiting liability. Comprehensive insurance requirements for all network techs. Strict credentialing. Safety record tracking and removal of underperformers."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Q1 2026", milestone: "Close $5M seed round, hire core team (CEO, CTO, VP Sales)", status: "target" },
      { timeline: "Q2 2026", milestone: "Launch platform with 50 buildings and 30 technicians in NYC/Chicago", status: "target" },
      { timeline: "Q3 2026", milestone: "First major CRE partnership (500+ building portfolio signed)", status: "target" },
      { timeline: "Q4 2026", milestone: "150 buildings, 70 technicians, IoT monitoring integration live", status: "target" },
      { timeline: "Q1 2027", milestone: "Launch Cap-Ex advisory services, first modernization consulting engagements", status: "target" },
      { timeline: "Q2 2027", milestone: "350 buildings, 150 technicians, expand to 5+ metros", status: "target" },
      { timeline: "Q3 2027", milestone: "Data licensing pilot with CRE investors, $5M ARR milestone", status: "target" },
      { timeline: "Q4 2027", milestone: "Series A raise at $80-100M valuation, 500 buildings, 250 techs", status: "target" }
    ]
  },

  ask: {
    title: "The Ask",
    amount: "$5,000,000",
    round: "Seed Round",
    terms: "Priced round at $20M post-money valuation",
    useOfFunds: [
      "Build technician credentialing and network platform",
      "Deploy IoT-integrated performance monitoring system",
      "Establish first CRE partnerships in 5+ major metros",
      "Prove price transparency model with benchmarking data"
    ],
    timeline: "20-month runway to Series A milestones",
    seriesA: {
      timing: "Q4 2027",
      metrics: "$5-8M ARR, 500+ buildings, 250+ technicians, 2+ CRE partnerships",
      raise: "$15-25M at $80-100M valuation"
    }
  },

  sources: [
    { name: "Fortune Business Insights - Elevator Maintenance Market", url: "https://www.fortunebusinessinsights.com/elevator-maintenance-market-113488", detail: "$33.45B in 2024, 8.0% CAGR to 2032" },
    { name: "Global Elevators & Escalators Market Report", url: "https://www.imarcgroup.com/elevator-escalator-market", detail: "$83.95B in 2023, growing to $134.71B by 2032" },
    { name: "IoT in Elevators Market - Fortune BI", url: "https://www.fortunebusinessinsights.com/industry-reports/iot-in-elevator-market-100306", detail: "$32.1B in 2025, 16.6% CAGR" },
    { name: "Business Wire - Elevator Market Analysis 2024-2032", url: "https://www.businesswire.com/news/home/20241127512733/en/", detail: "Otis, Schindler, ThyssenKrupp, KONE competitive analysis" },
    { name: "Statista - Elevator Companies by Revenue", url: "https://www.statista.com/statistics/281179/leading-companies-in-the-area-of-elevators-and-escalators-by-revenue/", detail: "Market share and revenue data for major OEMs" },
    { name: "IBISWorld Elevator Manufacturing", url: "https://www.ibisworld.com/united-states/market-research-reports/elevator-escalator-manufacturing-industry/", detail: "U.S. elevator industry analysis" },
    { name: "NAESA International", url: "https://www.naesai.org/", detail: "Elevator safety and technician certification standards" },
    { name: "BOMA International", url: "https://www.boma.org/", detail: "Building owners and managers association data" }
  ]
}

// Helper Components
function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-slate-600" />
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
      <div className="text-3xl font-bold text-slate-600">{value}</div>
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
      <header className="bg-gradient-to-r from-slate-700 to-slate-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <a
            href="/tokens/#framework"
            className="inline-flex items-center gap-2 text-slate-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cap-Ex Opportunities
          </a>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <ArrowUpDown className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{businessPlan.companyName}</h1>
                  <p className="text-slate-200">{businessPlan.tagline}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-300">{businessPlan.version}</div>
              <div className="text-sm text-slate-300">{businessPlan.date}</div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.ask.amount}</div>
              <div className="text-sm text-slate-200">Seed Round</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.marketSize.sam.value}</div>
              <div className="text-sm text-slate-200">Global Maintenance Market</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">8.0%</div>
              <div className="text-sm text-slate-200">Market CAGR</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">14:1</div>
              <div className="text-sm text-slate-200">LTV:CAC</div>
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
                activeTab === 'overview' ? 'bg-slate-100 text-slate-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Executive Summary
            </button>
            <button
              onClick={() => setActiveTab('detailed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'detailed' ? 'bg-slate-100 text-slate-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Full Plan
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'financials' ? 'bg-slate-100 text-slate-700' : 'text-gray-600 hover:bg-gray-100'
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
                  <div key={i} className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{pillar.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {pillar.features.map((feature, j) => (
                        <span key={j} className="px-2 py-0.5 bg-slate-200 text-slate-700 rounded text-xs">
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

              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-400">
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
                <div className="p-4 bg-gradient-to-br from-slate-600 to-slate-700 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.tam.label}</div>
                  <div className="text-sm text-slate-200 mt-1">{businessPlan.marketSize.tam.description}</div>
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
            <section className="bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">{businessPlan.ask.title}</h2>
                <div className="text-5xl font-bold mb-2">{businessPlan.ask.amount}</div>
                <div className="text-xl text-slate-200">{businessPlan.ask.round}</div>
                <div className="text-slate-300 mt-2">{businessPlan.ask.terms}</div>
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
                    <p><span className="text-slate-300">Timing:</span> {businessPlan.ask.seriesA.timing}</p>
                    <p><span className="text-slate-300">Metrics:</span> {businessPlan.ask.seriesA.metrics}</p>
                    <p><span className="text-slate-300">Raise:</span> {businessPlan.ask.seriesA.raise}</p>
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
                            player.threat === 'Partners not competitors' ? 'bg-blue-100 text-blue-700' :
                            player.threat === 'Incumbent to disrupt' ? 'bg-yellow-100 text-yellow-700' :
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

              <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">{businessPlan.competition.ourAdvantage.title}</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {businessPlan.competition.ourAdvantage.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-slate-600 mt-0.5 flex-shrink-0" />
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
                  <div key={i} className="border-l-4 border-slate-400 pl-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                        {phase.timeline}
                      </span>
                      <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 mb-3">
                      {phase.deliverables.map((deliverable, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
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

              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{businessPlan.businessModel.unitEconomics.title}</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {businessPlan.businessModel.unitEconomics.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-slate-600">{metric.value}</div>
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
                      <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
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
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
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
                    <span className="inline-block mt-2 px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs">
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
                        <Award className="w-4 h-4 text-slate-500" />
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
                        <span className={`ml-2 text-sm px-2 py-0.5 rounded ${
                          risk.likelihood === 'High' ? 'bg-red-50 text-red-700' :
                          risk.likelihood === 'Medium' ? 'bg-yellow-50 text-yellow-700' :
                          'bg-green-50 text-green-700'
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
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" />
                <div className="space-y-4">
                  {businessPlan.milestones.items.map((item, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-slate-500 border-2 border-white" />
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-slate-600">{item.timeline}</span>
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
                {/* Scenario 1: With Cap-Ex Angle */}
                <div className="p-4 bg-slate-50 rounded-lg border-2 border-slate-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-slate-600 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withCapExAngle.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withCapExAngle.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Network</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withCapExAngle.years.map((year, i) => (
                          <tr key={i} className="border-b border-slate-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.shops}</td>
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
                      {businessPlan.financials.scenarios.withCapExAngle.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-slate-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-slate-600">
                      Funding Required: {businessPlan.financials.scenarios.withCapExAngle.fundingRequired}
                    </span>
                  </div>
                </div>

                {/* Scenario 2: Without Cap-Ex Angle */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{businessPlan.financials.scenarios.withoutCapExAngle.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withoutCapExAngle.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Network</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutCapExAngle.years.map((year, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.shops}</td>
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
                      {businessPlan.financials.scenarios.withoutCapExAngle.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-gray-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-gray-600">
                      Funding Required: {businessPlan.financials.scenarios.withoutCapExAngle.fundingRequired}
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
                        <span className="text-lg font-bold text-slate-600">{item.percentage}%</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-6 bg-gray-200 rounded overflow-hidden">
                          <div
                            className="h-full bg-slate-500 rounded"
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
                  <div key={i} className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg text-center">
                    <div className="text-3xl font-bold text-slate-600">{metric.value}</div>
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
                    <h4 className="font-medium text-gray-900 text-sm group-hover:text-slate-600 transition-colors">
                      {source.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{source.detail}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-slate-600 transition-colors flex-shrink-0" />
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
              className="inline-flex items-center gap-2 bg-slate-600 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
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
