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
  Car
} from 'lucide-react'

// Business Plan Data
const businessPlan = {
  companyName: "ParkStructure",
  tagline: "The Network of Record for Parking Structure Maintenance",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Parking structures require specialized maintenance—concrete repair, waterproofing, lighting, gate systems. Fragmented contractor landscape, zero condition tracking, and deferred maintenance plagues 100,000+ US structures worth $500B+ in replacement value.",
    solution: "ParkStructure aggregates specialized parking contractors, creates digital condition records, and enables capital planning—becoming the inspection and maintenance system of record for parking assets.",
    market: "$102B parking industry with $16B annual maintenance spend in North America. REITs, municipalities, and operators desperately need visibility into asset condition and contractor quality.",
    ask: "$3M Seed Round to build structure registry, onboard contractor network, and pilot with major parking operators and municipal portfolios."
  },

  problem: {
    title: "The Parking Structure Maintenance Crisis",
    points: [
      {
        title: "Fragmented Specialized Contractors",
        detail: "Concrete restoration, waterproofing, electrical, gate systems—all require different specialists. No aggregation, no quality tracking, inconsistent pricing.",
        stat: "5K+",
        statLabel: "specialized contractors nationwide"
      },
      {
        title: "Deferred Maintenance Epidemic",
        detail: "Municipalities alone have billions in deferred parking maintenance. Water infiltration causes rebar corrosion, leading to structural failures. One collapse = catastrophic liability.",
        stat: "$8B+",
        statLabel: "estimated deferred maintenance"
      },
      {
        title: "Zero Condition Data",
        detail: "No standardized way to track structure condition across portfolios. Owners making capital decisions blind. Inspections done on paper, lost in filing cabinets.",
        stat: "0",
        statLabel: "centralized condition databases"
      },
      {
        title: "Capital Planning Nightmare",
        detail: "Parking structures are 40-50 year assets requiring major rehabs at 15-20 year intervals. $1-5M capital projects planned without condition data or contractor benchmarks.",
        stat: "$2.5M",
        statLabel: "average major structural repair"
      }
    ]
  },

  solution: {
    title: "ParkStructure: Intelligence for Parking Assets",
    tagline: "Inspect. Maintain. Plan. Protect.",
    pillars: [
      {
        icon: "Car",
        title: "Structure Registry",
        description: "Complete inventory of parking structures with construction details, condition history, and maintenance records linked to each asset.",
        features: ["Asset profiling & tagging", "Condition assessment database", "Photo documentation", "Multi-portfolio dashboards"]
      },
      {
        icon: "Wrench",
        title: "Contractor Network",
        description: "Vetted network of specialized parking contractors with quality scores, pricing transparency, and work history.",
        features: ["Specialized trade matching", "Price benchmarking", "Quality scoring", "Warranty tracking"]
      },
      {
        icon: "BarChart3",
        title: "Capital Planning",
        description: "Condition-based capital planning with reserve modeling, project prioritization, and lifecycle cost forecasting.",
        features: ["Reserve study integration", "Project prioritization", "Budget forecasting", "Deterioration modeling"]
      },
      {
        icon: "Shield",
        title: "Compliance & Safety",
        description: "Track inspection requirements, structural certifications, and safety compliance across all jurisdictions.",
        features: ["Inspection scheduling", "Certification tracking", "ADA compliance", "Safety alerts"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "Aging Infrastructure",
        detail: "1960s-1980s parking boom structures hitting 40-50 year mark. Massive wave of major repairs coming. Deferred maintenance can't be deferred forever.",
        icon: "TrendingUp"
      },
      {
        title: "Collapse Liability Concerns",
        detail: "Champlain Towers and parking structure collapses have owners and insurers demanding better condition monitoring. Liability risk driving investment.",
        icon: "Shield"
      },
      {
        title: "REIT Transparency Requirements",
        detail: "Public REITs need documented asset conditions. ESG reporting requires infrastructure data. Institutional capital demands visibility.",
        icon: "Zap"
      },
      {
        title: "Municipal Infrastructure Bills",
        detail: "Federal infrastructure funding flowing to municipalities. They need systems to assess, prioritize, and track parking structure investments.",
        icon: "Users"
      },
      {
        title: "Smart Parking Convergence",
        detail: "Smart parking market growing 19.3% CAGR to $48B by 2033. Digital infrastructure creates opportunity for maintenance integration.",
        icon: "Globe"
      }
    ]
  },

  marketSize: {
    title: "Market Opportunity",
    tam: {
      value: "$102B",
      label: "Total Addressable Market",
      description: "Global Parking Lots & Garages Market (2024)",
      source: "Business Research Company"
    },
    sam: {
      value: "$16B",
      label: "Serviceable Addressable Market",
      description: "North America Commercial Parking Maintenance",
      source: "Grand View Research"
    },
    som: {
      value: "$28M",
      label: "Serviceable Obtainable Market",
      description: "Year 5 revenue target: 4,000 structures",
      source: "Conservative capture estimate"
    },
    additionalMarkets: [
      { name: "Smart Parking Systems", value: "$9.15B (2024)", cagr: "21.6%" },
      { name: "Parking Management Software", value: "$3.8B (2024)", cagr: "11.7%" },
      { name: "Automated Parking Systems", value: "$2.8B (2024)", cagr: "22.5%" }
    ],
    keyMetrics: [
      { label: "US Parking Structures", value: "100,000+" },
      { label: "Average Structure Value", value: "$5-15M" },
      { label: "Annual Maintenance/Structure", value: "$50K-$200K" },
      { label: "Major Rehab Cost", value: "$1-5M" }
    ]
  },

  competition: {
    title: "Competitive Landscape",
    players: [
      {
        name: "Parking Operators (LAZ, SP+, ABM)",
        type: "Industry Leaders",
        marketShare: "~40% managed",
        strengths: ["Large portfolios", "Industry relationships", "Operational expertise"],
        weaknesses: ["Not technology companies", "Internal focus only", "No contractor marketplace", "Limited capital planning tools"],
        threat: "Partner opportunity"
      },
      {
        name: "Walker Consultants",
        type: "Engineering Firm",
        marketShare: "Leading inspector",
        strengths: ["Engineering expertise", "Inspection capabilities", "Established reputation"],
        weaknesses: ["Service company not SaaS", "No marketplace", "Limited tech investment", "Project-based model"],
        threat: "Low"
      },
      {
        name: "ServiceChannel / Corrigo",
        type: "Facilities Management",
        marketShare: "Enterprise FM",
        strengths: ["Enterprise scale", "Established brands", "Multi-industry"],
        weaknesses: ["Not parking-specific", "No structural expertise", "Miss specialized needs", "Generic condition tracking"],
        threat: "Medium"
      },
      {
        name: "Reserve Study Software",
        type: "Capital Planning",
        marketShare: "HOA focused",
        strengths: ["Capital planning tools", "Reserve modeling", "Established in HOA market"],
        weaknesses: ["HOA focus", "No contractor network", "No condition monitoring", "Limited parking expertise"],
        threat: "Low"
      }
    ],
    ourAdvantage: {
      title: "ParkStructure's Unfair Advantages",
      points: [
        "Network effects: More structures = better contractor matching = better condition data = more interest = more structures",
        "Data moat: Only aggregated view of parking structure conditions in the U.S.",
        "Vertical specialization: Purpose-built for parking structures, not generic facilities",
        "Cap-Ex alignment: REITs and municipalities can fund as infrastructure investment",
        "No channel conflict: We help contractors succeed, not compete with them"
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
          "Structure registry with asset profiling and tagging",
          "Contractor onboarding and vetting platform",
          "Condition assessment methodology and scoring",
          "Basic capital planning and reserve tracking",
          "Mobile inspection app for field documentation"
        ],
        milestone: "150 structures registered, 30 contractors onboarded"
      },
      {
        phase: "Phase 2: Intelligence",
        timeline: "Months 7-12",
        deliverables: [
          "Portfolio dashboards and analytics",
          "Contractor marketplace with matching algorithm",
          "Price benchmarking and cost databases",
          "Integration with accounting/ERP systems",
          "Deterioration modeling and predictions"
        ],
        milestone: "500 structures, first operator pilot (LAZ or SP+)"
      },
      {
        phase: "Phase 3: Scale",
        timeline: "Year 2-3",
        deliverables: [
          "Data licensing portal for REITs and insurers",
          "Municipal portfolio management tools",
          "Advanced analytics and AI-powered recommendations",
          "Contractor financing and payments platform",
          "Integration with smart parking systems"
        ],
        milestone: "4,000 structures, 300 contractors, $28M ARR"
      }
    ]
  },

  businessModel: {
    title: "Business Model",
    revenueStreams: [
      {
        name: "Owner SaaS",
        description: "Monthly subscription for structure registry, condition tracking, and capital planning",
        pricing: "$199-$599/structure/month based on size",
        margin: "85%",
        year1Revenue: "$600K",
        year3Revenue: "$4.2M"
      },
      {
        name: "Contractor Network Fees",
        description: "Transaction fees on maintenance work booked through platform",
        pricing: "6-10% of project value",
        margin: "90%",
        year1Revenue: "$300K",
        year3Revenue: "$3.5M"
      },
      {
        name: "Data Licensing",
        description: "Structure condition data for REITs, insurers, and lenders",
        pricing: "$25K-$150K annual contracts",
        margin: "95%",
        year1Revenue: "$200K",
        year3Revenue: "$3M"
      },
      {
        name: "Inspection Services",
        description: "Standardized condition assessments using platform methodology",
        pricing: "$2,500-$15,000 per structure",
        margin: "45%",
        year1Revenue: "$100K",
        year3Revenue: "$1.3M"
      }
    ],
    unitEconomics: {
      title: "Unit Economics Per Structure",
      metrics: [
        { label: "Customer Acquisition Cost (CAC)", value: "$1,200", note: "Digital + sales mix" },
        { label: "Average Revenue Per Structure (ARPS)", value: "$350/month", note: "Blended across revenue streams" },
        { label: "Gross Margin", value: "75%", note: "After support and infrastructure" },
        { label: "Lifetime Value (LTV)", value: "$10,800", note: "Assuming 36-month retention" },
        { label: "LTV:CAC Ratio", value: "9:1", note: "Strong unit economics" },
        { label: "Payback Period", value: "5 months", note: "Fast capital efficiency" }
      ]
    }
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withREITPartnerships: {
        name: "With REIT/Institutional Partnerships (Recommended)",
        description: "Partner with REITs and institutional owners for portfolio-wide deployments",
        years: [
          { year: 1, revenue: "$1.2M", structures: 400, arr: "$1.2M", burn: "$2.5M", runway: "14 months" },
          { year: 2, revenue: "$4.8M", structures: 1400, arr: "$4.8M", burn: "$1.5M", runway: "Profitable" },
          { year: 3, revenue: "$12M", structures: 2800, arr: "$12M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$21M", structures: 4200, arr: "$21M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$35M", structures: 6000, arr: "$35M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$3M Seed",
        keyAssumptions: [
          "REIT partnerships drive 40% of growth",
          "Data licensing accelerates Year 3+",
          "Municipal sector opens Year 4",
          "Contractor network reaches critical mass Year 2"
        ]
      },
      withoutREITPartnerships: {
        name: "Without Institutional Partnerships (Conservative)",
        description: "Direct sales to individual structure owners and smaller portfolios",
        years: [
          { year: 1, revenue: "$800K", structures: 250, arr: "$800K", burn: "$2M", runway: "18 months" },
          { year: 2, revenue: "$2.8M", structures: 900, arr: "$2.8M", burn: "$1M", runway: "24 months" },
          { year: 3, revenue: "$7M", structures: 1800, arr: "$7M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$14M", structures: 3000, arr: "$14M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$24M", structures: 4500, arr: "$24M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$2.5M Seed",
        keyAssumptions: [
          "Direct sales to property managers",
          "Slower but capital-efficient growth",
          "Contractor network is primary value prop",
          "Data licensing develops organically"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $3M Seed Funds",
      breakdown: [
        { category: "Engineering & Product", amount: "$1.2M", percentage: 40, detail: "Platform development, mobile apps, data infrastructure" },
        { category: "Sales & Success", amount: "$900K", percentage: 30, detail: "Enterprise sales, onboarding, customer support" },
        { category: "Contractor Network", amount: "$450K", percentage: 15, detail: "Contractor recruitment, vetting programs, marketplace" },
        { category: "Marketing", amount: "$300K", percentage: 10, detail: "Industry events, content, partnerships" },
        { category: "Operations", amount: "$150K", percentage: 5, detail: "Legal, compliance, G&A" }
      ]
    }
  },

  goToMarket: {
    title: "Go-to-Market Strategy",
    phases: [
      {
        phase: "Land",
        timeline: "Months 1-6",
        strategy: "Operator Partnership Focus",
        tactics: [
          "Target top 10 parking operators managing thousands of structures",
          "Offer pilot programs with free condition assessments",
          "Partner with Walker Consultants for inspection methodology",
          "Focus on markets with recent structure incidents (NY, FL, CA)"
        ],
        metrics: ["2 operator pilots", "150 structures", "80% pilot-to-paid conversion"]
      },
      {
        phase: "Expand",
        timeline: "Months 7-12",
        strategy: "REIT & Municipal Launch",
        tactics: [
          "Approach REITs with portfolio condition scoring",
          "Target progressive municipalities with infrastructure grants",
          "Launch contractor marketplace in pilot markets",
          "Build case studies from operator successes"
        ],
        metrics: ["500 structures", "1 REIT partnership", "50 contractors"]
      },
      {
        phase: "Dominate",
        timeline: "Year 2+",
        strategy: "National Scale & Data Monetization",
        tactics: [
          "Launch data licensing products for insurers",
          "Expand to adjacent asset types (surface lots, mixed-use)",
          "Build API for third-party integrations",
          "Geographic expansion with regional sales teams"
        ],
        metrics: ["4,000+ structures", "300 contractors", "5+ enterprise data contracts"]
      }
    ],
    channels: [
      { name: "Direct Enterprise Sales", description: "Targeting operators, REITs, and municipalities", cost: "High", effectiveness: "Very High" },
      { name: "Contractor Referrals", description: "Contractors recommend platform to property owners", cost: "Low", effectiveness: "High" },
      { name: "Industry Associations", description: "NPA, BOMA, IREM partnerships and events", cost: "Medium", effectiveness: "High" },
      { name: "Walker/Engineering Partnerships", description: "Integration with inspection providers", cost: "Low", effectiveness: "Very High" },
      { name: "Digital Marketing", description: "Content, SEO, targeted LinkedIn campaigns", cost: "Medium", effectiveness: "Medium" }
    ]
  },

  team: {
    title: "Team Requirements",
    currentNeeds: [
      {
        role: "CEO / Founder",
        skills: "PropTech/real estate experience, fundraising, B2B SaaS leadership",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "CTO",
        skills: "Platform architecture, mobile apps, data infrastructure, mapping",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Sales",
        skills: "Enterprise real estate sales, REIT relationships, parking industry",
        status: "Seeking",
        priority: "High"
      },
      {
        role: "Head of Contractor Network",
        skills: "Marketplace operations, contractor relationships, quality programs",
        status: "Seeking",
        priority: "High"
      }
    ],
    advisorNeeds: [
      "Former LAZ, SP+, or ABM executive",
      "REIT asset management leader",
      "Walker Consultants or structural engineering veteran",
      "PropTech founder (Building Engines, VTS alumni)"
    ],
    orgPlan: {
      year1: "10 FTEs: 4 engineering, 3 sales, 2 ops, 1 G&A",
      year2: "25 FTEs: 8 engineering, 10 sales, 5 ops, 2 G&A",
      year3: "60 FTEs: 18 engineering, 25 sales, 12 ops, 5 G&A"
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "Long Enterprise Sales Cycles",
        severity: "Medium",
        likelihood: "High",
        description: "REITs and municipalities have notoriously long procurement cycles (6-18 months). Could delay revenue significantly.",
        mitigation: "Start with parking operators who manage thousands of structures. One deal = hundreds of assets. Target decision-makers at asset management level. Offer free pilots to accelerate evaluation."
      },
      {
        risk: "Contractor Quality Control",
        severity: "High",
        likelihood: "Medium",
        description: "Installers may perform substandard work or skip proper procedures, degrading platform reputation and creating liability.",
        mitigation: "Rigorous vetting with license verification, insurance validation, and reference checks. Quality scoring affects lead priority. Build quality reputation before scale."
      },
      {
        risk: "Data Liability Concerns",
        severity: "Medium",
        likelihood: "Medium",
        description: "Owners may be concerned about liability from documented condition issues. Could slow adoption.",
        mitigation: "Clear disclaimers that platform facilitates not guarantees. Insurance coverage for inspection services. Legal review of all data licensing. Position as risk mitigation tool."
      },
      {
        risk: "Competition from Operators",
        severity: "Low",
        likelihood: "Low",
        description: "Major operators like LAZ or SP+ could build internal systems or acquire competing solutions.",
        mitigation: "Operators want to operate, not build software. Position as partner enabling their efficiency. White-label opportunities. Move fast to build network effects."
      },
      {
        risk: "Municipal Procurement",
        severity: "Medium",
        likelihood: "Medium",
        description: "Municipal RFP processes are complex, slow, and politically driven. Could limit government revenue.",
        mitigation: "Start with private sector. Build reference base before tackling municipal RFP processes. Partner with existing municipal vendors. Target infrastructure grant programs."
      },
      {
        risk: "Economic Sensitivity",
        severity: "Low",
        likelihood: "Medium",
        description: "Recession could slow discretionary maintenance and capital investment.",
        mitigation: "Maintenance is non-discretionary—deferred maintenance just gets more expensive. Actually saves money vs emergency repairs. Counter-cyclical in downturn."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Q1 2026", milestone: "Close seed round, hire core team (CEO, CTO, VP Sales)", status: "target" },
      { timeline: "Q2 2026", milestone: "Launch platform with 150 structures, 30 contractors", status: "target" },
      { timeline: "Q3 2026", milestone: "First operator pilot (LAZ or SP+ portfolio)", status: "target" },
      { timeline: "Q4 2026", milestone: "500 structures, condition assessment methodology validated", status: "target" },
      { timeline: "Q1 2027", milestone: "First REIT partnership signed", status: "target" },
      { timeline: "Q2 2027", milestone: "1,500 structures, 100 contractors, $3M ARR", status: "target" },
      { timeline: "Q3 2027", milestone: "Data licensing first contracts (insurers)", status: "target" },
      { timeline: "Q4 2027", milestone: "Series A at $40-60M valuation", status: "target" }
    ]
  },

  ask: {
    title: "The Ask",
    amount: "$3,000,000",
    round: "Seed Round",
    terms: "Priced round, standard seed terms",
    useOfFunds: [
      "Build platform and mobile apps for structure management",
      "Onboard contractor network in 5 target markets",
      "Pilot with major parking operators",
      "Launch condition assessment methodology and registry"
    ],
    timeline: "18-month runway to Series A milestones",
    seriesA: {
      timing: "Q4 2027",
      metrics: "1,500+ structures, 100+ contractors, $3M+ ARR, 1+ REIT partnership",
      raise: "$10-15M at $40-60M valuation"
    }
  },

  sources: [
    { name: "Grand View Research - Parking Lot Maintenance", url: "https://www.grandviewresearch.com/industry-analysis/north-america-commercial-facility-parking-lot-maintenance-market-report", detail: "$16.08B North America maintenance market (2023), 3.4% CAGR" },
    { name: "Business Research Company - Parking Market", url: "https://www.globenewswire.com/news-release/2024/11/21/2985464/28124/en/Parking-Lots-and-Garages-Market-Report-2024-with-Global-Long-term-Forecasts-to-2028-and-2033.html", detail: "$102.35B global market (2024), 4.0% CAGR" },
    { name: "Allied Market Research - Smart Parking", url: "https://www.globenewswire.com/news-release/2025/02/05/3021267/0/en/Smart-Parking-Market-to-Reach-48-3-Billion-Globally-by-2033-at-19-3-CAGR-Allied-Market-Research.html", detail: "$8.5B (2023) to $48.3B (2033), 19.3% CAGR" },
    { name: "Precedence Research - Smart Parking Systems", url: "https://www.precedenceresearch.com/smart-parking-systems-market", detail: "$9.15B (2024), 21.57% CAGR to $33.82B by 2033" },
    { name: "AInvest - Parking Management Software", url: "https://www.ainvest.com/news/parking-management-software-market-2025-2034-disruptive-innovation-saas-scalability-drive-growth-2510/", detail: "$3.8B (2024) to $11.3B (2034), 11.7% CAGR" },
    { name: "Straits Research - Parking Management", url: "https://straitsresearch.com/report/parking-management-market", detail: "$5.60B (2024), $14.09B by 2033" },
    { name: "National Parking Association", url: "https://weareparking.org", detail: "Industry association and benchmarks" },
    { name: "International Parking & Mobility Institute", url: "https://parking-mobility.org", detail: "Parking industry standards and data" }
  ]
}

// Helper Components
function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-amber-600" />
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
      <div className="text-3xl font-bold text-amber-600">{value}</div>
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
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <a
            href="/tokens/#framework"
            className="inline-flex items-center gap-2 text-amber-100 hover:text-white transition-colors mb-6"
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
                  <p className="text-amber-100">{businessPlan.tagline}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-amber-200">{businessPlan.version}</div>
              <div className="text-sm text-amber-200">{businessPlan.date}</div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.ask.amount}</div>
              <div className="text-sm text-amber-100">Seed Round</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.marketSize.sam.value}</div>
              <div className="text-sm text-amber-100">Maintenance Market</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">100K+</div>
              <div className="text-sm text-amber-100">US Structures</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">9:1</div>
              <div className="text-sm text-amber-100">LTV:CAC</div>
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
                activeTab === 'overview' ? 'bg-amber-100 text-amber-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Executive Summary
            </button>
            <button
              onClick={() => setActiveTab('detailed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'detailed' ? 'bg-amber-100 text-amber-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Full Plan
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'financials' ? 'bg-amber-100 text-amber-700' : 'text-gray-600 hover:bg-gray-100'
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
                  <div key={i} className="p-4 bg-amber-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{pillar.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {pillar.features.map((feature, j) => (
                        <span key={j} className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs">
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
                  <div key={i} className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
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
                <div className="p-4 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.tam.label}</div>
                  <div className="text-sm text-amber-100 mt-1">{businessPlan.marketSize.tam.description}</div>
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
            <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">{businessPlan.ask.title}</h2>
                <div className="text-5xl font-bold mb-2">{businessPlan.ask.amount}</div>
                <div className="text-xl text-amber-100">{businessPlan.ask.round}</div>
                <div className="text-amber-200 mt-2">{businessPlan.ask.terms}</div>
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
                    <p><span className="text-amber-200">Timing:</span> {businessPlan.ask.seriesA.timing}</p>
                    <p><span className="text-amber-200">Metrics:</span> {businessPlan.ask.seriesA.metrics}</p>
                    <p><span className="text-amber-200">Raise:</span> {businessPlan.ask.seriesA.raise}</p>
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
                            player.threat === 'Partner opportunity' ? 'bg-blue-100 text-blue-700' :
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

              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">{businessPlan.competition.ourAdvantage.title}</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {businessPlan.competition.ourAdvantage.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
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
                  <div key={i} className="border-l-4 border-amber-400 pl-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs font-medium">
                        {phase.timeline}
                      </span>
                      <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 mb-3">
                      {phase.deliverables.map((deliverable, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
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

              <div className="p-4 bg-amber-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{businessPlan.businessModel.unitEconomics.title}</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {businessPlan.businessModel.unitEconomics.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-amber-600">{metric.value}</div>
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
                      <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
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
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
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
                    <span className="inline-block mt-2 px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs">
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
                        <Award className="w-4 h-4 text-amber-500" />
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
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-amber-200" />
                <div className="space-y-4">
                  {businessPlan.milestones.items.map((item, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-amber-500 border-2 border-white" />
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-amber-600">{item.timeline}</span>
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
                {/* Scenario 1: With REIT Partnerships */}
                <div className="p-4 bg-amber-50 rounded-lg border-2 border-amber-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-600 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withREITPartnerships.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withREITPartnerships.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-amber-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Structures</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withREITPartnerships.years.map((year, i) => (
                          <tr key={i} className="border-b border-amber-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.structures.toLocaleString()}</td>
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
                      {businessPlan.financials.scenarios.withREITPartnerships.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-amber-500">-</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-amber-600">
                      Funding Required: {businessPlan.financials.scenarios.withREITPartnerships.fundingRequired}
                    </span>
                  </div>
                </div>

                {/* Scenario 2: Without REIT Partnerships */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{businessPlan.financials.scenarios.withoutREITPartnerships.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withoutREITPartnerships.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Structures</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutREITPartnerships.years.map((year, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.structures.toLocaleString()}</td>
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
                      {businessPlan.financials.scenarios.withoutREITPartnerships.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-gray-500">-</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-gray-600">
                      Funding Required: {businessPlan.financials.scenarios.withoutREITPartnerships.fundingRequired}
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
                        <span className="text-lg font-bold text-amber-600">{item.percentage}%</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-6 bg-gray-200 rounded overflow-hidden">
                          <div
                            className="h-full bg-amber-500 rounded"
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
                  <div key={i} className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-amber-600">{metric.value}</div>
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
                    <h4 className="font-medium text-gray-900 text-sm group-hover:text-amber-600 transition-colors">
                      {source.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{source.detail}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-amber-600 transition-colors flex-shrink-0" />
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
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
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
