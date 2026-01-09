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
  Thermometer,
  FileText,
  Briefcase,
  Lightbulb,
  Globe,
  Award,
  PieChart,
  LineChart,
  UtensilsCrossed
} from 'lucide-react'

// Business Plan Data
const businessPlan = {
  companyName: "KitchenPulse",
  tagline: "The Network of Record for Restaurant Equipment",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Walk-in coolers, fryers, hoods—all critical restaurant equipment serviced by fragmented local techs. Equipment failure = restaurant closure. Zero standardized maintenance tracking across 1M+ restaurants.",
    solution: "KitchenPulse aggregates service providers, tracks equipment lifecycles, and enables predictive maintenance with IoT sensors on critical equipment—becoming the equipment intelligence layer for restaurants and their financiers.",
    market: "$98B commercial kitchen equipment market with $28B annual service spend. Equipment finance companies need maintenance data. Chains and franchises desperately need visibility.",
    ask: "$4M Seed Round to build equipment registry, onboard service network, and pilot with major restaurant chains."
  },

  problem: {
    title: "The Restaurant Equipment Crisis",
    points: [
      {
        title: "Fragmented Service Network",
        detail: "Thousands of local HVAC/refrigeration techs service restaurants. No coordination, no standardization, no quality tracking. Every installer is an island.",
        stat: "10K+",
        statLabel: "independent service providers"
      },
      {
        title: "Equipment Failure = Lost Revenue",
        detail: "A failed walk-in cooler means spoiled inventory ($20K-40K) plus closure. Average restaurant operates on 3-5% margins—can't absorb surprises.",
        stat: "$28B",
        statLabel: "annual repair spend"
      },
      {
        title: "No Lifecycle Visibility",
        detail: "Restaurants don't know equipment age, maintenance history, or replacement timelines. Equipment finance companies underwriting blind.",
        stat: "0%",
        statLabel: "centralized equipment databases"
      },
      {
        title: "Health Department Risk",
        detail: "Equipment failures create food safety violations. 85% of food spoilage is due to temperature issues in walk-ins. One health department closure can destroy a restaurant.",
        stat: "85%",
        statLabel: "of spoilage from temp issues"
      }
    ]
  },

  solution: {
    title: "KitchenPulse: Intelligence for Restaurant Equipment",
    tagline: "Track. Maintain. Predict. Protect.",
    pillars: [
      {
        icon: "UtensilsCrossed",
        title: "Equipment Registry",
        description: "Complete inventory of restaurant equipment with make, model, age, and service history linked to each location.",
        features: ["Asset tagging & tracking", "Service history database", "Warranty management", "Multi-location dashboards"]
      },
      {
        icon: "Wrench",
        title: "Service Network",
        description: "Vetted network of equipment service providers with quality scores, response times, and pricing transparency.",
        features: ["Qualified technicians", "Price benchmarking", "Quality scoring", "Emergency dispatch"]
      },
      {
        icon: "BarChart3",
        title: "Predictive Maintenance",
        description: "IoT sensors on critical equipment predict failures before they happen. Turn emergency calls into scheduled maintenance.",
        features: ["Temperature monitoring", "Compressor analytics", "Filter alerts", "Failure prediction"]
      },
      {
        icon: "Shield",
        title: "Compliance Dashboard",
        description: "Track health department requirements, equipment certifications, and maintenance schedules to stay compliant.",
        features: ["Inspection readiness", "Certification tracking", "Audit trails", "Compliance alerts"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "Restaurant Tech Adoption",
        detail: "Toast, Square, and restaurant tech platforms have normalized SaaS in restaurants. 45% of commercial kitchens expected to implement smart tech by 2025.",
        icon: "TrendingUp"
      },
      {
        title: "IoT Costs Plummeting",
        detail: "Temperature sensors under $20. Cellular connectivity under $5/mo. 9.3M+ connected kitchen devices installed globally in 2024.",
        icon: "Zap"
      },
      {
        title: "Labor Shortage",
        detail: "Restaurant equipment techs aging out. Younger techs want platform work. Service network model increasingly attractive.",
        icon: "Users"
      },
      {
        title: "Smart Kitchen Surge",
        detail: "74% of operators prioritize equipment with embedded IoT diagnostics. Smart kitchen appliances growing 25% annually.",
        icon: "Thermometer"
      },
      {
        title: "Proven ROI",
        detail: "IoT monitoring trims maintenance costs by 30% and cuts breakdowns by 70%. Smart temp monitoring reduced food waste 17%.",
        icon: "Target"
      }
    ]
  },

  marketSize: {
    title: "Market Opportunity",
    tam: {
      value: "$126B",
      label: "Total Addressable Market",
      description: "Global Commercial Kitchen Equipment 2026",
      source: "Grand View Research"
    },
    sam: {
      value: "$28B",
      label: "Serviceable Addressable Market",
      description: "U.S. Equipment Service & Repair Market",
      source: "HVAC Services Market Report"
    },
    som: {
      value: "$180M",
      label: "Serviceable Obtainable Market",
      description: "3% capture in 5 years",
      source: "Conservative estimate"
    },
    additionalMarkets: [
      { name: "U.S. Commercial Kitchen Equipment", value: "$98.6B (2025)", cagr: "6.2%" },
      { name: "HVAC Maintenance Services (U.S.)", value: "$28.2B (2025)", cagr: "6.6%" },
      { name: "Food Service Equipment Global", value: "$84.9B (2035)", cagr: "5.8%" },
      { name: "Smart Kitchen Appliances", value: "$15B+ (2030)", cagr: "25%" }
    ],
    keyMetrics: [
      { label: "Average walk-in cooler failure cost", value: "$20K-$40K" },
      { label: "Annual restaurant repair spend", value: "$28B" },
      { label: "Revenue lost to equipment downtime", value: "$46B/year" },
      { label: "Energy used by restaurant refrigeration", value: "15-45%" }
    ]
  },

  competition: {
    title: "Competitive Landscape",
    players: [
      {
        name: "86 Repairs",
        type: "Facilities Platform",
        marketShare: "2,000+ restaurants",
        strengths: ["Restaurant focus", "Service network", "Good UX", "$24M+ raised"],
        weaknesses: ["No IoT/sensors", "Limited equipment data", "Dispatch-only model", "No financing integration"],
        threat: "Direct competitor"
      },
      {
        name: "ResQ",
        type: "Repair Platform",
        marketShare: "Toronto-based",
        strengths: ["Asset lifecycle management", "Restaurant specialization", "Canada footprint"],
        weaknesses: ["Limited U.S. presence", "No predictive maintenance", "No equipment intelligence"],
        threat: "Indirect competitor"
      },
      {
        name: "ServiceChannel",
        type: "Enterprise FM",
        marketShare: "Large enterprise only",
        strengths: ["Enterprise scale", "Established brand", "Broad capabilities"],
        weaknesses: ["Not restaurant-specific", "Expensive", "Complex implementation", "No equipment intelligence"],
        threat: "Low"
      },
      {
        name: "Equipment OEMs",
        type: "Hardware Makers",
        marketShare: "Own service on new equipment",
        strengths: ["Equipment expertise", "Existing relationships", "Parts supply"],
        weaknesses: ["Sell and forget model", "No service network", "No cross-brand view", "Limited tech investment"],
        threat: "Partners not competitors"
      }
    ],
    ourAdvantage: {
      title: "KitchenPulse's Unfair Advantages",
      points: [
        "Network effect: More restaurants = better service provider matching = better equipment data = more financing/insurance interest = more restaurants",
        "Data moat: Only aggregated view of restaurant equipment health and service history",
        "IoT-first: Predictive maintenance that competitors lack—30% cost reduction, 70% fewer breakdowns",
        "Financing angle: Equipment financiers will pay for maintenance data to protect collateral",
        "Insurance partnerships: Insurers offer discounts for monitored restaurants, driving adoption"
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
          "Restaurant equipment registry platform (web + mobile)",
          "Service provider onboarding and quality tracking",
          "Maintenance scheduling and work order system",
          "Basic reporting and compliance dashboards",
          "Integration with top POS platforms (Toast, Square)"
        ],
        milestone: "200 locations, 50 service providers, MVP live"
      },
      {
        phase: "Phase 2: Intelligence",
        timeline: "Months 7-12",
        deliverables: [
          "IoT sensor integration for walk-in coolers/freezers",
          "Temperature monitoring and alerting system",
          "Predictive maintenance algorithms",
          "Equipment lifecycle analytics",
          "Chain/franchise multi-location dashboards"
        ],
        milestone: "800 locations, first chain pilot, $1M ARR"
      },
      {
        phase: "Phase 3: Scale",
        timeline: "Year 2-3",
        deliverables: [
          "National service provider coverage (500+ providers)",
          "Equipment financing data products",
          "Insurance risk scoring API",
          "Advanced predictive maintenance ML models",
          "Expansion to adjacent verticals (hotels, hospitals)"
        ],
        milestone: "8,000 locations, $15M ARR, market leader"
      }
    ]
  },

  businessModel: {
    title: "Business Model",
    revenueStreams: [
      {
        name: "Restaurant SaaS",
        description: "Monthly subscription for equipment registry, maintenance scheduling, and compliance tracking",
        pricing: "$99-$499/location/month based on size",
        margin: "85%",
        year1Revenue: "$500K",
        year3Revenue: "$4.5M"
      },
      {
        name: "Service Network Fees",
        description: "Transaction fees on service calls booked through platform",
        pricing: "8-12% of service invoice",
        margin: "90%",
        year1Revenue: "$350K",
        year3Revenue: "$4M"
      },
      {
        name: "IoT Monitoring",
        description: "Hardware + monitoring subscription for critical equipment",
        pricing: "$15-$50/sensor/month",
        margin: "65%",
        year1Revenue: "$150K",
        year3Revenue: "$3M"
      },
      {
        name: "Data Licensing",
        description: "Equipment lifecycle data for financiers, insurers, and manufacturers",
        pricing: "$50K-$250K annual contracts",
        margin: "95%",
        year1Revenue: "$200K",
        year3Revenue: "$3.5M"
      }
    ],
    unitEconomics: {
      title: "Unit Economics Per Location",
      metrics: [
        { label: "Customer Acquisition Cost (CAC)", value: "$700", note: "Digital + sales + onboarding" },
        { label: "Average Revenue Per Location (ARPL)", value: "$200/month", note: "Blended across revenue streams" },
        { label: "Gross Margin", value: "78%", note: "After hardware and support costs" },
        { label: "Lifetime Value (LTV)", value: "$8,400", note: "Assuming 3.5-year retention" },
        { label: "LTV:CAC Ratio", value: "12:1", note: "Excellent unit economics" },
        { label: "Payback Period", value: "4 months", note: "Very fast capital efficiency" }
      ]
    }
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withFinancing: {
        name: "With Equipment Financing Angle (Recommended)",
        description: "Partner with equipment finance companies for distribution and data licensing revenue",
        years: [
          { year: 1, revenue: "$1.2M", shops: 600, arr: "$1.2M", burn: "$2.8M", runway: "17 months" },
          { year: 2, revenue: "$5.5M", shops: 2200, arr: "$5.5M", burn: "$1.5M", runway: "Profitable" },
          { year: 3, revenue: "$15M", shops: 4500, arr: "$15M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$28M", shops: 6800, arr: "$28M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$48M", shops: 9500, arr: "$48M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$4M Seed",
        keyAssumptions: [
          "Equipment financiers drive 30% of leads",
          "Data licensing accelerates Year 3+",
          "IoT attachment reaches 40% of locations",
          "Chain/franchise focus enables efficient expansion"
        ]
      },
      withoutFinancing: {
        name: "Without Equipment Financing (Conservative)",
        description: "Direct restaurant sales with service network focus only",
        years: [
          { year: 1, revenue: "$800K", shops: 400, arr: "$800K", burn: "$2M", runway: "24 months" },
          { year: 2, revenue: "$3.2M", shops: 1400, arr: "$3.2M", burn: "$1M", runway: "18 months" },
          { year: 3, revenue: "$9M", shops: 3200, arr: "$9M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$18M", shops: 5200, arr: "$18M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$32M", shops: 7500, arr: "$32M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$2.5M Seed",
        keyAssumptions: [
          "Direct sales to chains and franchises only",
          "Slower but higher-quality growth",
          "Service network is primary value prop",
          "Data licensing develops organically Year 4+"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $4M Seed Funds",
      breakdown: [
        { category: "Engineering & Product", amount: "$1.6M", percentage: 40, detail: "Platform, mobile apps, IoT integration, ML models" },
        { category: "Sales & Success", amount: "$1.2M", percentage: 30, detail: "Chain sales, onboarding team, customer success" },
        { category: "Service Network", amount: "$600K", percentage: 15, detail: "Provider recruitment, quality programs, support" },
        { category: "Marketing", amount: "$400K", percentage: 10, detail: "Industry events, content, partnership marketing" },
        { category: "G&A & Buffer", amount: "$200K", percentage: 5, detail: "Legal, compliance, office, contingency" }
      ]
    }
  },

  goToMarket: {
    title: "Go-to-Market Strategy",
    phases: [
      {
        phase: "Land",
        timeline: "Months 1-6",
        strategy: "Chain & Franchise Focus",
        tactics: [
          "Target QSR chains with 50-500 locations (decision makers, not individual owners)",
          "Partner with major equipment distributors for referrals",
          "Offer free pilot with immediate ROI tracking for first 3 chains",
          "Focus on high-failure equipment categories (refrigeration, HVAC)"
        ],
        metrics: ["200 locations onboarded", "3 chain pilots", "NPS > 50"]
      },
      {
        phase: "Expand",
        timeline: "Months 7-12",
        strategy: "IoT Upsell & Data Launch",
        tactics: [
          "Deploy IoT sensors to proven customers first",
          "Launch equipment financier partnerships (2-3 partners)",
          "Approach insurers with risk reduction data from IoT pilots",
          "Expand service provider network to 150+ vetted techs"
        ],
        metrics: ["800 locations", "40% IoT attachment", "2 data partnerships"]
      },
      {
        phase: "Dominate",
        timeline: "Year 2+",
        strategy: "National Scale & Data Moat",
        tactics: [
          "National service provider coverage across top 50 metros",
          "Launch insurance discount program driving customer acquisition",
          "Expand to adjacent verticals (hotels, hospitals, schools)",
          "Build API for third-party integrations (POS, accounting)"
        ],
        metrics: ["8,000+ locations", "5+ data partnerships", "Adjacent vertical pilot"]
      }
    ],
    channels: [
      { name: "Direct Sales", description: "Enterprise sales team targeting chain/franchise decision makers", cost: "High", effectiveness: "Very High" },
      { name: "Equipment Distributors", description: "Referrals bundled with new equipment sales", cost: "Low", effectiveness: "High" },
      { name: "Equipment Financiers", description: "Financiers require KitchenPulse for maintenance tracking", cost: "Low", effectiveness: "Very High" },
      { name: "Insurance Partners", description: "Insurers offer premium discounts for monitored restaurants", cost: "Low", effectiveness: "High" },
      { name: "Trade Shows", description: "NRA Show, NAFEM, regional restaurant expos", cost: "Medium", effectiveness: "Medium" }
    ]
  },

  team: {
    title: "Team Requirements",
    currentNeeds: [
      {
        role: "CEO / Founder",
        skills: "Restaurant industry experience, fundraising, vision, network building",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "CTO",
        skills: "Platform architecture, IoT systems, mobile apps, integrations",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Sales",
        skills: "Enterprise restaurant sales, chain/franchise relationships",
        status: "Seeking",
        priority: "High"
      },
      {
        role: "Head of Service Network",
        skills: "Service provider recruitment, quality assurance, operations",
        status: "Seeking",
        priority: "High"
      }
    ],
    advisorNeeds: [
      "Former executive from 86 Repairs, ServiceTitan, or similar platform",
      "Restaurant chain operations leader (VP Ops from major QSR)",
      "Equipment finance industry veteran",
      "Commercial refrigeration/HVAC expert"
    ],
    orgPlan: {
      year1: "15 FTEs: 5 engineering, 5 sales, 3 ops, 2 G&A",
      year2: "35 FTEs: 12 engineering, 14 sales, 6 ops, 3 G&A",
      year3: "80 FTEs: 25 engineering, 35 sales, 12 ops, 8 G&A"
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "Restaurant Tech Fatigue",
        severity: "High",
        likelihood: "Medium",
        description: "Restaurants are overwhelmed with tech vendors. Adding another platform faces resistance from operators with limited time and tech resources.",
        mitigation: "Integrate with existing POS/ops systems (Toast, Square). Prove ROI in first 90 days. Start with chains who have IT resources. Free pilot removes risk."
      },
      {
        risk: "86 Repairs Competition",
        severity: "High",
        likelihood: "Medium",
        description: "86 Repairs has $24M+ in funding and 2,000+ restaurant customers. They could add IoT and equipment intelligence features.",
        mitigation: "Move fast on IoT differentiation—our predictive maintenance moat. Focus on data licensing revenue they haven't pursued. Build equipment financier relationships first."
      },
      {
        risk: "Service Provider Quality",
        severity: "High",
        likelihood: "Medium",
        description: "Poor service quality from network providers damages brand and causes customer churn.",
        mitigation: "Rigorous vetting, ongoing quality scoring, customer feedback loops. Build quality reputation before scale. Money-back guarantee on service quality."
      },
      {
        risk: "IoT Hardware Complexity",
        severity: "Medium",
        likelihood: "Medium",
        description: "Hardware deployment is harder than software. Installation, connectivity, and maintenance of sensors adds complexity.",
        mitigation: "Start with software-only value prop. IoT is upsell, not requirement. Partner with existing sensor manufacturers (Emerson, Carrier) vs build own."
      },
      {
        risk: "Chain Sales Cycles",
        severity: "Medium",
        likelihood: "High",
        description: "Enterprise restaurant chains have 6-12 month sales cycles with multiple stakeholders and pilots.",
        mitigation: "Start with franchisees who can decide faster. Prove ROI at location level before corporate deals. Build case studies rapidly."
      },
      {
        risk: "Economic Sensitivity",
        severity: "Low",
        likelihood: "Medium",
        description: "Restaurant industry is cyclical. Economic downturn could slow new restaurant tech purchases.",
        mitigation: "Equipment maintenance is non-discretionary—actually saves money vs emergency repairs. Recession-resistant positioning as cost reduction tool."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Month 3", milestone: "Platform MVP live, first 50 locations onboarded", status: "planned" },
      { timeline: "Month 6", milestone: "200 locations, 50 service providers, 3 chain pilots active", status: "planned" },
      { timeline: "Month 9", milestone: "IoT sensor pilot launched, 500 locations on platform", status: "planned" },
      { timeline: "Month 12", milestone: "$1.2M ARR, 800 locations, first equipment financier partnership", status: "planned" },
      { timeline: "Month 15", milestone: "2,000 locations, $2.5M ARR run rate, Series A initiated", status: "planned" },
      { timeline: "Month 18", milestone: "Series A closed ($12-15M at $50-70M valuation)", status: "planned" },
      { timeline: "Month 24", milestone: "$5.5M ARR, 4,000 locations, cash flow positive", status: "planned" }
    ]
  },

  ask: {
    title: "The Ask",
    amount: "$4,000,000",
    round: "Seed Round",
    terms: "SAFE or Priced Round at $16M post-money valuation",
    useOfFunds: [
      "Build platform and mobile apps for restaurant equipment tracking",
      "Onboard first 200 locations and 50 service providers",
      "Launch IoT sensor pilot for walk-in cooler monitoring",
      "Secure 2+ equipment financier data partnerships"
    ],
    timeline: "18-month runway to Series A milestones",
    seriesA: {
      timing: "Month 15-18",
      metrics: "$2-3M ARR, 2,000+ locations, 2+ data partnerships",
      raise: "$12-18M at $50-80M valuation"
    }
  },

  sources: [
    { name: "Grand View Research - Commercial Kitchen Equipment", url: "https://www.grandviewresearch.com/industry-analysis/commercial-kitchen-equipment-appliances-market", detail: "$98.3B in 2024, 7.3% CAGR to 2030" },
    { name: "Mordor Intelligence - Commercial Kitchen Market", url: "https://www.mordorintelligence.com/industry-reports/commercial-kitchen-appliances-market", detail: "$133B forecast by 2030, 6.18% CAGR" },
    { name: "HVAC Maintenance Services Market Report", url: "https://www.grandviewresearch.com/industry-analysis/hvac-maintenance-services-market-report", detail: "$78.5B global, 5.8% CAGR" },
    { name: "86 Repairs - PitchBook Profile", url: "https://pitchbook.com/profiles/company/266584-96", detail: "$24M+ raised, 2,000+ restaurants" },
    { name: "Restaurant Business Online - 86 Repairs Funding", url: "https://www.restaurantbusinessonline.com/technology/86-repairs-raises-152m-equipment-management-service", detail: "$28B annual repair spend, $46B revenue lost" },
    { name: "Envigilance - Restaurant Equipment Monitoring", url: "https://envigilance.com/commercial-restaurant-monitoring/", detail: "Walk-in failures cost $20K-$40K" },
    { name: "xtraCHEF - Equipment Failure Costs", url: "https://xtrachef.com/resources/calculating-the-cost-of-restaurant-equipment-failures/", detail: "Equipment downtime cost analysis" },
    { name: "Future Market Insights - Food Service Equipment", url: "https://www.futuremarketinsights.com/reports/foodservice-equipment-market", detail: "$84.96B by 2035 global market" }
  ]
}

// Helper Components
function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-red-600" />
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
      <div className="text-3xl font-bold text-red-600">{value}</div>
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
      <header className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <a
            href="/tokens/#framework"
            className="inline-flex items-center gap-2 text-red-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cap-Ex Opportunities
          </a>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{businessPlan.companyName}</h1>
                  <p className="text-red-100">{businessPlan.tagline}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-red-200">{businessPlan.version}</div>
              <div className="text-sm text-red-200">{businessPlan.date}</div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.ask.amount}</div>
              <div className="text-sm text-red-100">Seed Round</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.marketSize.sam.value}</div>
              <div className="text-sm text-red-100">U.S. Service Market</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">6.6%</div>
              <div className="text-sm text-red-100">Market CAGR</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">12:1</div>
              <div className="text-sm text-red-100">LTV:CAC</div>
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
                activeTab === 'overview' ? 'bg-red-100 text-red-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Executive Summary
            </button>
            <button
              onClick={() => setActiveTab('detailed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'detailed' ? 'bg-red-100 text-red-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Full Plan
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'financials' ? 'bg-red-100 text-red-700' : 'text-gray-600 hover:bg-gray-100'
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
                  <div key={i} className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{pillar.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {pillar.features.map((feature, j) => (
                        <span key={j} className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs">
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
                <div className="p-4 bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.tam.label}</div>
                  <div className="text-sm text-red-100 mt-1">{businessPlan.marketSize.tam.description}</div>
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
            <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">{businessPlan.ask.title}</h2>
                <div className="text-5xl font-bold mb-2">{businessPlan.ask.amount}</div>
                <div className="text-xl text-red-100">{businessPlan.ask.round}</div>
                <div className="text-red-200 mt-2">{businessPlan.ask.terms}</div>
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
                    <p><span className="text-red-200">Timing:</span> {businessPlan.ask.seriesA.timing}</p>
                    <p><span className="text-red-200">Metrics:</span> {businessPlan.ask.seriesA.metrics}</p>
                    <p><span className="text-red-200">Raise:</span> {businessPlan.ask.seriesA.raise}</p>
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
                      <th className="text-left py-3 px-2 font-medium text-gray-900">Market Position</th>
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
                            player.threat === 'Low' ? 'bg-green-100 text-green-700' :
                            player.threat === 'Indirect competitor' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {player.threat}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">{businessPlan.competition.ourAdvantage.title}</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {businessPlan.competition.ourAdvantage.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
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
                  <div key={i} className="border-l-4 border-red-400 pl-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-medium">
                        {phase.timeline}
                      </span>
                      <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 mb-3">
                      {phase.deliverables.map((deliverable, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
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

              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{businessPlan.businessModel.unitEconomics.title}</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {businessPlan.businessModel.unitEconomics.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-red-600">{metric.value}</div>
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
                      <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold">
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
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
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
                    <span className="inline-block mt-2 px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs">
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
                        <Award className="w-4 h-4 text-red-500" />
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
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-red-200" />
                <div className="space-y-4">
                  {businessPlan.milestones.items.map((item, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-red-500 border-2 border-white" />
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-red-600">{item.timeline}</span>
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
                {/* Scenario 1: With Financing */}
                <div className="p-4 bg-red-50 rounded-lg border-2 border-red-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-red-600 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withFinancing.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-red-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Locations</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withFinancing.years.map((year, i) => (
                          <tr key={i} className="border-b border-red-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.shops.toLocaleString()}</td>
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
                          <span className="text-red-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-red-600">
                      Funding Required: {businessPlan.financials.scenarios.withFinancing.fundingRequired}
                    </span>
                  </div>
                </div>

                {/* Scenario 2: Without Financing */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{businessPlan.financials.scenarios.withoutFinancing.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withoutFinancing.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Locations</th>
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
                            <td className="py-2 px-3 text-right">{year.shops.toLocaleString()}</td>
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
                        <span className="text-lg font-bold text-red-600">{item.percentage}%</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-6 bg-gray-200 rounded overflow-hidden">
                          <div
                            className="h-full bg-red-500 rounded"
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
                  <div key={i} className="p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-red-600">{metric.value}</div>
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
                    <h4 className="font-medium text-gray-900 text-sm group-hover:text-red-600 transition-colors">
                      {source.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{source.detail}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors flex-shrink-0" />
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
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
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
