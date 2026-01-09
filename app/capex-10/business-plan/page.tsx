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
  Flame,
  Droplets,
  Building,
  ClipboardCheck
} from 'lucide-react'

// Business Plan Data
const businessPlan = {
  companyName: "FireShield",
  tagline: "The Credentialed Registry for Fire Suppression Systems",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Fire sprinkler and suppression systems are required in most commercial buildings and inspected annually, yet there is zero data aggregation. 19,800+ contractors perform inspections with paper forms or proprietary systems. Building owners, insurers, and regulators have no visibility into system quality across portfolios.",
    solution: "FireShield aggregates inspection data, system specifications, and contractor performance into a unified registry. We create the 'building safety score' that insurers need for underwriting, property managers need for compliance, and contractors need for competitive differentiation.",
    market: "$26B U.S. fire protection system market growing at 3.6% CAGR. $27.6B in annual fire insurance premiums. Property managers need compliance automation, insurers need risk data, and contractors need digital tools to compete.",
    ask: "$4M Seed Round to build the registry platform, onboard inspection contractors, and establish partnerships with commercial insurance carriers and property management software providers."
  },

  problem: {
    title: "The Fire Safety Data Blindspot",
    points: [
      {
        title: "Fragmented Inspection Industry",
        detail: "Nearly 20,000 contractors perform annual inspections with paper forms or proprietary systems. No data sharing, no standardization, no way to compare contractor quality.",
        stat: "19.8K",
        statLabel: "fire protection contractors in US"
      },
      {
        title: "Zero Portfolio Visibility",
        detail: "Property managers with hundreds of buildings have no unified view of fire system status. Each building is a separate paper trail. Compliance is manual and error-prone.",
        stat: "0",
        statLabel: "aggregated fire system databases"
      },
      {
        title: "Insurance Underwriting Blindspot",
        detail: "Commercial insurers set premiums with minimal insight into actual fire suppression system quality. Better data could reduce claims and reward safe buildings.",
        stat: "$27.6B",
        statLabel: "annual US fire insurance premiums"
      },
      {
        title: "Maintenance Gaps Cause Failures",
        detail: "NFPA data shows 14% of sprinkler failures are due to lack of maintenance. Building owners defer critical upgrades due to capital constraints and lack of financing options.",
        stat: "14%",
        statLabel: "of failures due to lack of maintenance"
      }
    ]
  },

  solution: {
    title: "FireShield: Intelligence for Building Fire Safety",
    tagline: "Aggregate. Score. Finance. Protect.",
    pillars: [
      {
        icon: "ClipboardCheck",
        title: "Inspection Registry",
        description: "Unified database of fire system inspections with standardized data capture. Every inspection, every building, every contractor in one platform.",
        features: ["Digital inspection forms", "Photo documentation", "Deficiency tracking", "Compliance automation"]
      },
      {
        icon: "Building",
        title: "Building Safety Score",
        description: "Proprietary scoring algorithm rates fire system quality based on equipment age, maintenance history, contractor quality, and deficiency patterns.",
        features: ["Real-time scoring", "Benchmark comparisons", "Risk predictions", "Portfolio dashboards"]
      },
      {
        icon: "Shield",
        title: "Insurance Integration",
        description: "Direct data feeds to insurance carriers enable risk-based underwriting. Better scores mean lower premiums, creating incentives for maintenance.",
        features: ["Carrier API integration", "Premium optimization", "Claims correlation", "Underwriting automation"]
      },
      {
        icon: "DollarSign",
        title: "Upgrade Financing",
        description: "Connect building owners to financing for fire system upgrades. Insurance premium savings can offset financing costs.",
        features: ["Lender marketplace", "ROI calculators", "Premium reduction modeling", "Project management"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm for Fire Safety Data",
    factors: [
      {
        title: "Commercial Real Estate Digitization",
        detail: "PropTech wave finally reaching compliance and safety. Property managers demanding unified platforms for all building systems.",
        icon: "TrendingUp"
      },
      {
        title: "Insurance Industry Data Hunger",
        detail: "Carriers investing heavily in data-driven underwriting. Fire risk is a major line item they cannot accurately assess today. Fire insurance premiums growing at 10.8% CAGR.",
        icon: "Shield"
      },
      {
        title: "Contractor Consolidation",
        detail: "Fire protection industry consolidating through PE rollups. Larger players need digital tools to manage multi-region operations and standardize quality.",
        icon: "Users"
      },
      {
        title: "Regulatory Pressure",
        detail: "Post-pandemic building safety regulations increasing. Jurisdictions requiring more detailed reporting and faster compliance verification under NFPA 25.",
        icon: "Zap"
      },
      {
        title: "Software Market Growth",
        detail: "Fire sprinkler inspection software market growing at 13.9% CAGR, expected to reach $969M by 2033. Clear demand for digital solutions.",
        icon: "BarChart3"
      }
    ]
  },

  marketSize: {
    title: "Market Opportunity",
    tam: {
      value: "$26B",
      label: "Total Addressable Market",
      description: "U.S. Fire Protection System Market (2024)",
      source: "Grand View Research"
    },
    sam: {
      value: "$2.8B",
      label: "Serviceable Addressable Market",
      description: "Digital fire safety data and services opportunity",
      source: "Industry analysis"
    },
    som: {
      value: "$52M",
      label: "Serviceable Obtainable Market",
      description: "Year 5 revenue target: 2,200 contractor partners, 58K buildings",
      source: "Conservative capture estimate"
    },
    additionalMarkets: [
      { name: "Fire Protection Installation Services", value: "$22.1B (2025)", cagr: "3.2%" },
      { name: "Fire Insurance Premiums (US)", value: "$27.6B (2024)", cagr: "10.8%" },
      { name: "Fire Inspection Software (Global)", value: "$321M (2024)", cagr: "13.9%" },
      { name: "Commercial Property Insurance", value: "$89B (2024)", cagr: "6.5%" }
    ],
    keyMetrics: [
      { label: "Fire protection contractors in US", value: "19,845" },
      { label: "Average commercial inspection cost", value: "$300-$800" },
      { label: "Sprinkler effectiveness rate", value: "91%" },
      { label: "Death rate reduction with sprinklers", value: "90%" }
    ]
  },

  competition: {
    title: "Competitive Landscape",
    overview: "Fire protection software is fragmented across inspection apps, compliance tools, and insurance platforms with no unified data layer.",
    players: [
      {
        name: "BuildingReports",
        type: "Inspection Platform",
        marketShare: "~15% of digital inspections",
        strengths: ["Established contractor base", "NFPA compliance", "Mobile inspection app"],
        weaknesses: ["No insurance integration", "No financing", "Single-building focus", "Limited analytics"],
        threat: "Low"
      },
      {
        name: "Compliance Engine",
        type: "PM Software",
        marketShare: "Enterprise PM segment",
        strengths: ["PM software integrations", "Multi-system tracking", "Enterprise focus"],
        weaknesses: ["Scheduling only", "No contractor tools", "No risk scoring", "No insurance value"],
        threat: "Low"
      },
      {
        name: "Insurance Carrier In-House",
        type: "Internal Solutions",
        marketShare: "Top 5 carriers only",
        strengths: ["Direct underwriting use", "Captive data source", "Existing relationships"],
        weaknesses: ["Siloed by carrier", "No contractor incentive", "Limited coverage", "Slow development"],
        threat: "Partner not competitor"
      },
      {
        name: "Paper/Excel Status Quo",
        type: "Manual Process",
        marketShare: "70%+ of market",
        strengths: ["No change required", "Familiar to contractors", "Low direct cost"],
        weaknesses: ["No aggregation", "Compliance risk", "No analytics", "Time-consuming"],
        threat: "Primary competitor"
      }
    ],
    ourAdvantage: {
      title: "FireShield's Unfair Advantages",
      points: [
        "Network effect: More contractors = more buildings = more data = better scores = more insurance value",
        "Data moat: Only aggregated view of fire system quality across the U.S.",
        "Insurance alignment: Direct value prop to carriers who desperately need risk data",
        "Cap-Ex positioning: Fire suppression upgrades as capital investments with insurance-linked financing",
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
          "Contractor onboarding platform (web + mobile)",
          "Digital inspection forms with NFPA 25 compliance",
          "Building registry with GPS tagging",
          "Photo documentation and deficiency tracking",
          "Basic reporting and compliance automation"
        ],
        milestone: "300 contractors onboarded, 8,000 buildings registered"
      },
      {
        phase: "Phase 2: Intelligence",
        timeline: "Months 7-12",
        deliverables: [
          "Building Safety Score algorithm v1.0",
          "Insurance carrier data portal and API",
          "Property management integrations (Yardi, MRI, RealPage)",
          "Contractor performance dashboards",
          "Portfolio analytics for enterprise clients"
        ],
        milestone: "700 contractors, first insurance carrier pilot, $7M ARR"
      },
      {
        phase: "Phase 3: Scale",
        timeline: "Year 2-3",
        deliverables: [
          "National contractor coverage (2,200+ contractors)",
          "Real-time risk scoring API for insurance underwriting",
          "Upgrade financing marketplace integration",
          "Predictive maintenance recommendations",
          "Expansion to adjacent systems (fire alarms, suppression)"
        ],
        milestone: "$52M ARR, 15+ insurance partnerships, market leader"
      }
    ]
  },

  businessModel: {
    title: "Business Model",
    overview: "Four revenue streams: Contractor SaaS, insurance data services, property management platform, and upgrade financing facilitation.",
    revenueStreams: [
      {
        name: "Contractor SaaS",
        description: "Monthly subscription for fire protection contractors to manage inspections, reporting, and client relationships",
        pricing: "$299-$1,499/month based on volume",
        margin: "85%",
        year1Revenue: "$1.1M",
        year3Revenue: "$8M",
        details: [
          "Digital inspection forms",
          "Photo and deficiency tracking",
          "Client portal access",
          "Automated report generation",
          "Scheduling and dispatch"
        ]
      },
      {
        name: "Insurance Data Services",
        description: "Aggregated fire system data and building safety scores for commercial insurance underwriting",
        pricing: "$500K-$2M/year per carrier",
        margin: "75%",
        year1Revenue: "$400K",
        year3Revenue: "$6M",
        details: [
          "Building safety score API",
          "Portfolio risk analysis",
          "Claims correlation data",
          "Underwriting automation",
          "Loss prevention insights"
        ]
      },
      {
        name: "Property Manager Platform",
        description: "Enterprise compliance and portfolio management tools for commercial property owners and managers",
        pricing: "$0.50-$2.00/building/month",
        margin: "80%",
        year1Revenue: "$200K",
        year3Revenue: "$2.5M",
        details: [
          "Portfolio dashboard",
          "Compliance tracking",
          "Contractor management",
          "Budget forecasting",
          "Insurance optimization"
        ]
      },
      {
        name: "Financing Facilitation",
        description: "Marketplace connecting building owners to lenders for fire system upgrades with insurance savings integration",
        pricing: "1-2% origination fee",
        margin: "70%",
        year1Revenue: "$100K",
        year3Revenue: "$1.5M",
        details: [
          "Lender matching",
          "ROI calculation",
          "Insurance premium modeling",
          "Project verification",
          "Disbursement management"
        ]
      }
    ],
    unitEconomics: {
      title: "Unit Economics Per Contractor",
      metrics: [
        { label: "Customer Acquisition Cost (CAC)", value: "$3,000", note: "Trade shows + inside sales + referrals" },
        { label: "Average Revenue Per Contractor", value: "$750/month", note: "Blended across revenue streams" },
        { label: "Gross Margin", value: "78%", note: "After support and data costs" },
        { label: "Lifetime Value (LTV)", value: "$33,000", note: "92% annual retention, 4+ year lifetime" },
        { label: "LTV:CAC Ratio", value: "11:1", note: "Strong unit economics" },
        { label: "Payback Period", value: "5 months", note: "Fast capital efficiency" }
      ]
    }
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withInsurance: {
        name: "With Insurance/Financing Cap-Ex Angle",
        description: "Full model with contractor network, insurance data, and upgrade financing facilitation",
        years: [
          { year: 1, revenue: "$1.8M", contractors: 300, buildings: "8K", arr: "$1.8M", burn: "$2.2M", runway: "18 months" },
          { year: 2, revenue: "$7M", contractors: 700, buildings: "22K", arr: "$7M", burn: "$1M", runway: "24+ months" },
          { year: 3, revenue: "$18M", contractors: 1200, buildings: "38K", arr: "$18M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$32M", contractors: 1700, buildings: "48K", arr: "$32M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$52M", contractors: 2200, buildings: "58K", arr: "$52M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$4M Seed",
        keyAssumptions: [
          "Insurance carriers mandate FireShield data for underwriting",
          "Financing facilitation scales with registry coverage",
          "Premium reduction drives contractor and building owner adoption",
          "Network effects accelerate growth in Year 3+"
        ]
      },
      withoutInsurance: {
        name: "Without Cap-Ex Financing Angle",
        description: "Contractor SaaS and property management tools without insurance-linked upgrade financing",
        years: [
          { year: 1, revenue: "$1.2M", contractors: 200, buildings: "5K", arr: "$1.2M", burn: "$1.8M", runway: "24 months" },
          { year: 2, revenue: "$4M", contractors: 450, buildings: "14K", arr: "$4M", burn: "$800K", runway: "24 months" },
          { year: 3, revenue: "$10M", contractors: 800, buildings: "26K", arr: "$10M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$18M", contractors: 1200, buildings: "36K", arr: "$18M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$28M", contractors: 1600, buildings: "45K", arr: "$28M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$2.5M Seed",
        keyAssumptions: [
          "SaaS-only revenue model with slower insurance adoption",
          "Higher churn without insurance premium incentives (35% vs 25%)",
          "No financing facilitation revenue stream",
          "Organic contractor growth without carrier partnerships"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $4M Seed Funds",
      breakdown: [
        { category: "Engineering & Product", amount: "$1.6M", percentage: 40, detail: "Platform development, mobile apps, insurance APIs, scoring algorithms" },
        { category: "Sales & Partnerships", amount: "$1.0M", percentage: 25, detail: "Contractor acquisition, insurance BD, PM partnerships" },
        { category: "Contractor Success", amount: "$600K", percentage: 15, detail: "Onboarding, training, support, community building" },
        { category: "Data & Analytics", amount: "$480K", percentage: 12, detail: "Scoring algorithms, risk models, benchmarking tools" },
        { category: "Operations", amount: "$320K", percentage: 8, detail: "G&A, legal, compliance, office" }
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
          "Start in 5 metros with high commercial density (Houston, Dallas, Atlanta, Phoenix, Chicago)",
          "Partner with regional fire protection associations (AFSA, NFSA chapters)",
          "Offer free trial with immediate compliance automation value",
          "Target contractors frustrated with paper processes and BuildingReports limitations"
        ],
        metrics: ["300 contractors onboarded", "85% activation rate", "NPS > 50"]
      },
      {
        phase: "Expand",
        timeline: "Months 7-12",
        strategy: "Insurance Partnership Launch",
        tactics: [
          "Approach insurtech companies and MGAs with faster decision cycles",
          "Target progressive carriers with data-driven underwriting initiatives",
          "Offer free pilot data access in exchange for case study rights",
          "Build relationships with commercial property insurance underwriters"
        ],
        metrics: ["2 insurance carrier pilots", "22,000 buildings in registry", "95% data accuracy"]
      },
      {
        phase: "Dominate",
        timeline: "Year 2+",
        strategy: "National Rollout",
        tactics: [
          "Leverage insurance partnerships for credibility and co-marketing",
          "Expand to adjacent markets: fire alarm contractors, suppression specialists",
          "Launch upgrade financing marketplace with insurance savings integration",
          "Build API ecosystem for third-party PropTech integrations"
        ],
        metrics: ["2,200+ contractors", "15+ insurance partnerships", "National coverage"]
      }
    ],
    channels: [
      { name: "Direct Sales", description: "Inside sales team targeting high-volume contractors", cost: "Medium", effectiveness: "High" },
      { name: "Industry Associations", description: "AFSA, NFSA, regional fire protection associations", cost: "Low", effectiveness: "Very High" },
      { name: "Insurance Referrals", description: "Carriers recommend FireShield for premium optimization", cost: "Low", effectiveness: "Very High" },
      { name: "Trade Shows", description: "AFSA Convention, NFPA Conference, regional events", cost: "High", effectiveness: "High" },
      { name: "Digital Marketing", description: "SEO, content marketing, targeted ads to contractor businesses", cost: "Medium", effectiveness: "Medium" }
    ]
  },

  team: {
    title: "Team Requirements",
    currentNeeds: [
      {
        role: "CEO / Founder",
        skills: "Fire protection or insurance industry experience, fundraising, network building",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "CTO",
        skills: "Platform architecture, mobile apps, insurance API integration, data infrastructure",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Contractor Success",
        skills: "Contractor onboarding, training, community building, support operations",
        status: "Seeking",
        priority: "High"
      },
      {
        role: "VP Sales",
        skills: "Insurance BD, property management partnerships, enterprise sales",
        status: "Seeking",
        priority: "High"
      }
    ],
    advisorNeeds: [
      "Former fire protection contractor executive or AFSA/NFSA leader",
      "Insurance industry executive (commercial property underwriting)",
      "PropTech founder with PM software experience",
      "Building code or NFPA standards expert"
    ],
    orgPlan: {
      year1: "15 FTEs: 5 engineering, 4 sales, 3 contractor success, 3 G&A",
      year2: "35 FTEs: 12 engineering, 10 sales, 8 contractor success, 5 G&A",
      year3: "80 FTEs: 25 engineering, 25 sales, 18 contractor success, 12 G&A"
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "Contractor Adoption Resistance",
        severity: "High",
        likelihood: "Medium",
        description: "Fire protection contractors are traditionally slow to adopt new technology. Many are small family businesses resistant to changing established paper workflows.",
        mitigation: "Free tier for small contractors. Demonstrate immediate time savings (2+ hours per inspection). Partner with industry associations for credibility. Contractor referral incentives."
      },
      {
        risk: "Insurance Carrier Sales Cycle",
        severity: "High",
        likelihood: "High",
        description: "Insurance carriers have notoriously long procurement cycles (12-24 months). Could delay data revenue and insurance-linked incentives significantly.",
        mitigation: "Start with insurtech companies and MGAs with faster decision cycles. Pilot programs with measurable ROI before enterprise deals. Build recurring SaaS revenue while carrier deals develop."
      },
      {
        risk: "Data Quality Variability",
        severity: "Medium",
        likelihood: "Medium",
        description: "Contractors may enter inaccurate data or skip data entry entirely, degrading the value of building safety scores and insurance products.",
        mitigation: "Build data entry into workflow (required for report generation). Photo requirements for key data points. Contractor scoring based on data quality affects lead priority."
      },
      {
        risk: "Regulatory Fragmentation",
        severity: "Medium",
        likelihood: "Medium",
        description: "Fire safety regulations vary by state and jurisdiction. NFPA 25 adoption not universal. Compliance requirements differ significantly.",
        mitigation: "Start in states with standardized NFPA 25 requirements. Build jurisdiction mapping into platform. Partner with NFPA for standards alignment and credibility."
      },
      {
        risk: "BuildingReports Competitive Response",
        severity: "Medium",
        likelihood: "Low",
        description: "BuildingReports could add insurance integration and building scoring to their existing platform, leveraging their installed contractor base.",
        mitigation: "First-mover advantage in aggregated data and insurance partnerships. Network effects create barriers. Focus on data moat and insurance relationships they've avoided building."
      },
      {
        risk: "Economic Downturn",
        severity: "Low",
        likelihood: "Medium",
        description: "Recession could slow commercial building construction and reduce contractor volumes.",
        mitigation: "Fire inspections are legally required regardless of economy. Compliance spending is non-discretionary for building owners. Insurance data value increases during hard markets."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Month 3", milestone: "Platform MVP live, first 50 contractors onboarded", status: "planned" },
      { timeline: "Month 6", milestone: "300 contractors, 8,000 buildings in registry, compliance automation live", status: "planned" },
      { timeline: "Month 9", milestone: "Building Safety Score v1.0 launch, first insurance carrier pilot", status: "planned" },
      { timeline: "Month 12", milestone: "$1.8M ARR, 700 contractors, 2 insurance partnerships signed", status: "planned" },
      { timeline: "Month 15", milestone: "Series A fundraise initiated, $3M ARR run rate", status: "planned" },
      { timeline: "Month 18", milestone: "1,000 contractors, $5M ARR, Series A closed", status: "planned" },
      { timeline: "Month 24", milestone: "$7M ARR, national coverage, upgrade financing pilot live", status: "planned" }
    ]
  },

  ask: {
    title: "The Ask",
    amount: "$4,000,000",
    round: "Seed Round",
    terms: "SAFE or Priced Round at $16M post-money valuation",
    useOfFunds: [
      "Build registry platform and mobile apps for contractor network",
      "Acquire and onboard first 300 fire protection contractors",
      "Launch insurance carrier partnership pilots in 2+ markets",
      "Develop Building Safety Score algorithm and insurance data products"
    ],
    timeline: "18-month runway to Series A milestones",
    seriesA: {
      timing: "Month 15-18",
      metrics: "$3-5M ARR, 700+ contractors, 2+ insurance partnerships",
      raise: "$15-20M at $70-90M valuation"
    }
  },

  sources: [
    { name: "Grand View Research - U.S. Fire Protection System Market", url: "https://www.grandviewresearch.com/industry-analysis/us-fire-protection-system-market-report", detail: "$25.94B in 2024, 3.6% CAGR to 2030" },
    { name: "IBISWorld - Fire Protection Contractors", url: "https://www.ibisworld.com/united-states/industry/fire-protection-and-security-system-installation-contractors/6486/", detail: "19,845 businesses, $22.1B market in 2025" },
    { name: "Precedence Research - Fire Insurance Market", url: "https://www.precedenceresearch.com/fire-insurance-market", detail: "$27.6B US market in 2024, 10.8% CAGR" },
    { name: "Dataintelo - Fire Sprinkler Inspection Software", url: "https://dataintelo.com/report/fire-sprinkler-inspection-software-market/amp", detail: "$321M in 2024, 13.9% CAGR to 2033" },
    { name: "NFPA - U.S. Experience with Sprinklers", url: "https://www.nfpa.org/education-and-research/research/nfpa-research/fire-statistical-reports/us-experience-with-sprinklers", detail: "91% effectiveness rate, 90% death reduction" },
    { name: "NFSA - NFPA 25 Deficiencies", url: "https://nfsa.org/2025/05/27/nfpa-25-sprinkler-deficiencies/", detail: "14% of failures due to lack of maintenance" },
    { name: "Fortune Business Insights - Fire Protection System Market", url: "https://www.fortunebusinessinsights.com/fire-protection-system-market-104820", detail: "Global market $68.9B in 2024" },
    { name: "American Fire Sprinkler Association", url: "https://firesprinkler.org/facts-figures/", detail: "Industry statistics and fire sprinkler effectiveness data" }
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
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
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
                  <Flame className="w-6 h-6" />
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
              <div className="text-sm text-orange-100">U.S. Market (2024)</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">19.8K</div>
              <div className="text-sm text-orange-100">US Fire Contractors</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">11:1</div>
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
                <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.tam.label}</div>
                  <div className="text-sm text-orange-100 mt-1">{businessPlan.marketSize.tam.description}</div>
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
            <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl shadow-sm p-6">
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
                            player.threat === 'Primary competitor' ? 'bg-red-100 text-red-700' :
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
                {/* Scenario 1: With Insurance */}
                <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-orange-600 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withInsurance.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withInsurance.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-orange-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Contractors</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Buildings</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withInsurance.years.map((year, i) => (
                          <tr key={i} className="border-b border-orange-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.contractors.toLocaleString()}</td>
                            <td className="py-2 px-3 text-right">{year.buildings}</td>
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
                      {businessPlan.financials.scenarios.withInsurance.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-orange-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-orange-600">
                      Funding Required: {businessPlan.financials.scenarios.withInsurance.fundingRequired}
                    </span>
                  </div>
                </div>

                {/* Scenario 2: Without Insurance */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{businessPlan.financials.scenarios.withoutInsurance.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withoutInsurance.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Contractors</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Buildings</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutInsurance.years.map((year, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.contractors.toLocaleString()}</td>
                            <td className="py-2 px-3 text-right">{year.buildings}</td>
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
                      {businessPlan.financials.scenarios.withoutInsurance.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-gray-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-gray-600">
                      Funding Required: {businessPlan.financials.scenarios.withoutInsurance.fundingRequired}
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
                  <div key={i} className="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg text-center">
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
