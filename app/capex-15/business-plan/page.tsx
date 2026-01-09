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
  Truck,
  Radio,
  Settings,
  Database,
  Activity
} from 'lucide-react'

// Business Plan Data
const businessPlan = {
  companyName: "FleetPulse",
  tagline: "The Intelligence Layer for Commercial Fleet Lifecycle Management",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Samsara, Geotab, and Verizon Connect provide telematics but don't own maintenance. Fleet maintenance is fragmented across 150,000+ independent shops with no quality standardization. Fleet operators lack an integrated view of vehicle lifecycle, leading to reactive maintenance, unexpected downtime, and inflated total cost of ownership.",
    solution: "FleetPulse aggregates independent truck and fleet maintenance shops into a credentialed network, integrates with telematics data streams, and enables predictive maintenance. We're building the 'TrueValue for commercial fleets' - a trusted network that fleet operators rely on for transparent, data-driven maintenance decisions.",
    market: "$115B combined fleet telematics and maintenance market. Commercial vehicles are Cap-Ex assets depreciated over 5-7 years. Fleet operators spend $15K-25K per truck annually on maintenance with little visibility into optimal timing or fair pricing.",
    ask: "$4.5M Seed Round to build shop network platform, establish telematics integrations, and create the predictive maintenance engine that transforms fleet lifecycle management."
  },

  problem: {
    title: "The Fleet Maintenance Visibility Crisis",
    points: [
      {
        title: "Telematics-Maintenance Disconnect",
        detail: "Telematics companies track location, fuel, and driver behavior but don't own the maintenance relationship. Vehicle health data exists but isn't connected to service execution.",
        stat: "0%",
        statLabel: "telematics platforms with integrated maintenance"
      },
      {
        title: "Shop Fragmentation",
        detail: "150,000+ independent truck repair shops across the U.S. with no quality standards, inconsistent pricing, and limited visibility for fleet managers making service decisions.",
        stat: "150K+",
        statLabel: "independent shops with no standardization"
      },
      {
        title: "Reactive Maintenance Culture",
        detail: "Most fleets operate reactively - fixing breakdowns rather than preventing them. Average unplanned downtime costs $760/day per truck in lost revenue.",
        stat: "$760/day",
        statLabel: "average cost of unplanned downtime"
      },
      {
        title: "Opaque Total Cost of Ownership",
        detail: "Fleet operators can't accurately model vehicle lifecycle costs. Finance teams lack data for optimal replacement timing, leading to premature purchases or expensive end-of-life repairs.",
        stat: "35%",
        statLabel: "of fleet costs are maintenance-related"
      }
    ]
  },

  solution: {
    title: "FleetPulse: Predictive Maintenance Network for Commercial Fleets",
    tagline: "Connect. Predict. Optimize. Scale.",
    pillars: [
      {
        icon: "Wrench",
        title: "Shop Network",
        description: "Aggregated network of credentialed independent maintenance shops with verified capabilities, transparent pricing, and real-time availability.",
        features: ["2,500+ shop profiles", "Capability verification", "Price transparency", "Real-time scheduling"]
      },
      {
        icon: "Radio",
        title: "Telematics Integration",
        description: "Unified data layer connecting Samsara, Geotab, Verizon Connect, and other telematics platforms to maintenance workflows.",
        features: ["Multi-platform support", "Fault code interpretation", "Mileage tracking", "Usage pattern analysis"]
      },
      {
        icon: "Activity",
        title: "Predictive Engine",
        description: "Machine learning models that predict maintenance needs based on telematics data, service history, and fleet-wide patterns.",
        features: ["Failure prediction", "Optimal timing", "Cost forecasting", "Risk scoring"]
      },
      {
        icon: "Database",
        title: "Lifecycle Intelligence",
        description: "Complete vehicle lifecycle view from acquisition to disposition. Total cost of ownership modeling for capital planning decisions.",
        features: ["TCO analytics", "Replacement timing", "Residual value tracking", "Depreciation optimization"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Convergence",
    factors: [
      {
        title: "Telematics Ubiquity",
        detail: "ELD mandate drove telematics adoption to 90%+ of commercial fleets. Data is now available - it just needs to be connected to maintenance.",
        icon: "Radio"
      },
      {
        title: "Fleet Cost Pressure",
        detail: "New truck prices up 40% since 2020. Fleets extending vehicle lifecycles, making maintenance optimization critical to profitability.",
        icon: "DollarSign"
      },
      {
        title: "Labor Shortage",
        detail: "Diesel technician shortage forcing shops to adopt digital tools. Independent shops need platforms that bring them customers and streamline operations.",
        icon: "Users"
      },
      {
        title: "Fleet Finance Evolution",
        detail: "Fleet finance companies (Element, ARI, Wheels) need maintenance cost data for accurate residual value predictions and lease pricing.",
        icon: "Briefcase"
      },
      {
        title: "Parts Cost Inflation",
        detail: "Parts costs increased 15-25% since 2022, labor rates up 8-15% annually. Fleets desperately need tools to optimize maintenance spend.",
        icon: "TrendingUp"
      }
    ]
  },

  marketSize: {
    title: "Market Opportunity",
    tam: {
      value: "$115B",
      label: "Total Addressable Market",
      description: "Combined fleet telematics and commercial vehicle maintenance",
      source: "Grand View Research, ATRI"
    },
    sam: {
      value: "$27B",
      label: "Serviceable Addressable Market",
      description: "U.S. commercial vehicle telematics + connected maintenance",
      source: "Mordor Intelligence"
    },
    som: {
      value: "$85M",
      label: "Serviceable Obtainable Market",
      description: "Year 5 revenue: 2,500 shops, 800 fleets, 45K vehicles",
      source: "Conservative capture estimate"
    },
    additionalMarkets: [
      { name: "Commercial Vehicle Telematics", value: "$27.5B (2025)", cagr: "14.7%" },
      { name: "Fleet Management Software", value: "$32.3B (2025)", cagr: "15.3%" },
      { name: "Connected Fleet Services", value: "$23.4B (2024)", cagr: "16.0%" }
    ],
    keyMetrics: [
      { label: "Average maintenance per truck/year", value: "$15K-$25K" },
      { label: "Cost per mile (maintenance)", value: "$0.15-$0.23" },
      { label: "Unplanned downtime cost/day", value: "$760" },
      { label: "Telematics penetration (Class 8)", value: "90%+" }
    ]
  },

  competition: {
    title: "Competitive Landscape",
    players: [
      {
        name: "Samsara",
        type: "Telematics Leader",
        marketShare: "~18%",
        strengths: ["Strong telematics platform", "Video safety features", "Large customer base", "API ecosystem"],
        weaknesses: ["No maintenance ownership", "Shop relationships not core", "Data stays in platform", "Predictive maintenance basic"],
        threat: "Partner not competitor"
      },
      {
        name: "Geotab",
        type: "Data Platform",
        marketShare: "~15%",
        strengths: ["Massive data scale", "OEM partnerships", "Open API platform", "Global reach"],
        weaknesses: ["No shop network", "Maintenance not core focus", "Platform complexity", "Limited fleet finance ties"],
        threat: "Partner not competitor"
      },
      {
        name: "Verizon Connect",
        type: "Enterprise Fleet",
        marketShare: "~12%",
        strengths: ["Enterprise sales force", "Telecom infrastructure", "Field service tools", "Financial stability"],
        weaknesses: ["Maintenance afterthought", "Legacy technology", "Higher price point", "Innovation slower"],
        threat: "Low"
      },
      {
        name: "Independent Shops",
        type: "Fragmented",
        marketShare: "~70% of maintenance",
        strengths: ["Local relationships", "Specialized expertise", "Flexible service", "Lower overhead"],
        weaknesses: ["No quality standard", "Pricing opacity", "No telematics integration", "Limited technology"],
        threat: "Partners not competitors"
      }
    ],
    ourAdvantage: {
      title: "FleetPulse's Unfair Advantages",
      points: [
        "Network effect: More shops = better coverage + more data = better predictions = more fleet adoption",
        "Data moat: Only platform connecting telematics to maintenance execution at scale",
        "Switzerland position: Integrate with all telematics providers, compete with none",
        "Cap-Ex alignment: Fleet finance companies need our data for residual value modeling",
        "No channel conflict: We help shops succeed, not compete with them"
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
          "Shop network platform with credentialing system",
          "Samsara and Geotab API integrations",
          "Fleet dashboard with shop matching",
          "Quality scoring and verification framework",
          "Mobile app for shop technicians"
        ],
        milestone: "400 shops onboarded, 3 telematics integrations live"
      },
      {
        phase: "Phase 2: Intelligence",
        timeline: "Months 7-12",
        deliverables: [
          "Predictive maintenance engine v1",
          "Fault code interpretation layer",
          "Shop performance analytics",
          "Fleet lifecycle cost modeling",
          "Verizon Connect integration"
        ],
        milestone: "1,000 shops, 100 fleet customers, $3M ARR"
      },
      {
        phase: "Phase 3: Scale",
        timeline: "Year 2-3",
        deliverables: [
          "Fleet finance data partnerships (Element, ARI)",
          "Advanced ML failure prediction",
          "Lifecycle analytics for capital planning",
          "White-label API for telematics partners",
          "National shop coverage (2,500+ shops)"
        ],
        milestone: "$32M ARR, market leader position, Series A"
      }
    ]
  },

  businessModel: {
    title: "Business Model",
    revenueStreams: [
      {
        name: "Platform Transaction Fees",
        description: "Percentage of maintenance spend for work facilitated through platform matching and scheduling",
        pricing: "2-3% of maintenance cost",
        margin: "92%",
        year1Revenue: "$1.2M",
        year3Revenue: "$12M"
      },
      {
        name: "Shop SaaS Subscriptions",
        description: "Monthly subscription for shops to access fleet network, receive work orders, and build quality scores",
        pricing: "$400-$1,500/month based on bay count",
        margin: "88%",
        year1Revenue: "$800K",
        year3Revenue: "$8M"
      },
      {
        name: "Fleet Data Licensing",
        description: "API access to predictive maintenance intelligence, lifecycle analytics, and benchmarking for fleet operators",
        pricing: "$500-$5,000/month based on fleet size",
        margin: "90%",
        year1Revenue: "$600K",
        year3Revenue: "$7M"
      },
      {
        name: "Predictive Maintenance Products",
        description: "Premium analytics tier with ML-powered failure prediction, optimal maintenance scheduling, and TCO modeling",
        pricing: "$50K-$150K annual enterprise contracts",
        margin: "85%",
        year1Revenue: "$600K",
        year3Revenue: "$5M"
      }
    ],
    unitEconomics: {
      title: "Unit Economics",
      metrics: [
        { label: "Customer Acquisition Cost (CAC)", value: "$18,000", note: "$10K digital + $8K sales/onboarding" },
        { label: "Lifetime Value (LTV)", value: "$198,000", note: "3.2 year avg lifetime @ blended revenue" },
        { label: "LTV:CAC Ratio", value: "11:1", note: "Exceptional due to data lock-in" },
        { label: "Gross Margin", value: "89%", note: "Blended across all revenue streams" },
        { label: "Payback Period", value: "8 months", note: "Very fast capital efficiency" },
        { label: "Net Revenue Retention", value: "125%", note: "Expansion from fleet growth + new modules" }
      ]
    }
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withFinancing: {
        name: "With Fleet Finance Partnerships (Recommended)",
        description: "Deep fleet finance integration creates data moat and accelerates enterprise adoption",
        years: [
          { year: 1, revenue: "$3.2M", shops: 400, arr: "$3.2M", burn: "$3.5M", runway: "15 months" },
          { year: 2, revenue: "$12M", shops: 900, arr: "$12M", burn: "$2M", runway: "18 months" },
          { year: 3, revenue: "$32M", shops: 1500, arr: "$32M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$58M", shops: 2100, arr: "$58M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$95M", shops: 2800, arr: "$95M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$4.5M Seed",
        keyAssumptions: [
          "2 major fleet finance partnerships by Y2",
          "Telematics integrations drive 40% of shop acquisition",
          "Predictive maintenance reduces fleet downtime 30%",
          "Fleet finance data licensing drives 20% of revenue by Y4"
        ]
      },
      withoutFinancing: {
        name: "Without Fleet Finance Angle (Conservative)",
        description: "Pure marketplace focus with shop network and fleet direct sales",
        years: [
          { year: 1, revenue: "$1.8M", shops: 250, arr: "$1.8M", burn: "$2.5M", runway: "22 months" },
          { year: 2, revenue: "$6M", shops: 550, arr: "$6M", burn: "$1.5M", runway: "24 months" },
          { year: 3, revenue: "$16M", shops: 900, arr: "$16M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$32M", shops: 1400, arr: "$32M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$55M", shops: 2000, arr: "$55M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$3M Seed",
        keyAssumptions: [
          "Shop acquisition is primary growth driver",
          "Slower enterprise fleet adoption",
          "More capital-efficient growth path",
          "Telematics companies may compete eventually"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $4.5M Seed Funds",
      breakdown: [
        { category: "Engineering & Product", amount: "$1.9M", percentage: 42, detail: "Platform build, telematics integrations, ML engine" },
        { category: "Sales & Partnerships", amount: "$1.26M", percentage: 28, detail: "Shop onboarding, fleet BD, telematics partnerships" },
        { category: "Data & Analytics", amount: "$540K", percentage: 12, detail: "Predictive models, data infrastructure, benchmarking" },
        { category: "Marketing", amount: "$540K", percentage: 12, detail: "Shop acquisition, fleet awareness, industry positioning" },
        { category: "Operations", amount: "$270K", percentage: 6, detail: "Legal, insurance, G&A" }
      ]
    }
  },

  goToMarket: {
    title: "Go-to-Market Strategy",
    phases: [
      {
        phase: "Land",
        timeline: "Months 1-6",
        strategy: "Telematics-Led Shop Acquisition",
        tactics: [
          "Partner with Samsara and Geotab for shop introductions via their fleet customers",
          "Target top-rated shops in 10 high-freight states (TX, CA, FL, IL, OH, GA, PA, NC, TN, AZ)",
          "Offer 3-month free trial with guaranteed lead flow from platform",
          "Focus on shops frustrated with low-quality leads from Thumbtack/HomeAdvisor"
        ],
        metrics: ["400 shops onboarded", "85% activation rate", "NPS > 55"]
      },
      {
        phase: "Expand",
        timeline: "Months 7-12",
        strategy: "Fleet-First Growth",
        tactics: [
          "Direct sales to mid-market fleets (50-500 vehicles)",
          "Partner with fleet finance companies for warm introductions",
          "Offer predictive maintenance pilots to demonstrate ROI",
          "Build case studies around downtime reduction and cost savings"
        ],
        metrics: ["100 fleet customers", "45,000 vehicles under management", "30% downtime reduction"]
      },
      {
        phase: "Dominate",
        timeline: "Year 2+",
        strategy: "Platform Ecosystem",
        tactics: [
          "White-label predictive maintenance for telematics providers",
          "Fleet finance data licensing (Element, ARI, Wheels)",
          "Expand to adjacent services: tires, fuel, parts procurement",
          "Build API marketplace for third-party integrations"
        ],
        metrics: ["2,500+ shops", "National coverage", "Market leader position"]
      }
    ],
    channels: [
      { name: "Telematics Partnerships", description: "Warm introductions from Samsara, Geotab fleet customers", cost: "Low", effectiveness: "Very High" },
      { name: "Direct Fleet Sales", description: "Outbound to mid-market and enterprise fleets", cost: "High", effectiveness: "High" },
      { name: "Fleet Finance Referrals", description: "Element, ARI refer fleets seeking maintenance optimization", cost: "Low", effectiveness: "Very High" },
      { name: "Industry Events", description: "TMC, MATS, technology conferences", cost: "Medium", effectiveness: "Medium" },
      { name: "Digital Marketing", description: "SEO, content, targeted ads to fleet managers", cost: "Medium", effectiveness: "Medium" }
    ]
  },

  team: {
    title: "Team Requirements",
    currentNeeds: [
      {
        role: "CEO / Founder",
        skills: "Fleet/logistics experience, B2B marketplace building, fundraising",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "CTO",
        skills: "Platform architecture, telematics integrations, ML infrastructure",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Fleet Operations",
        skills: "Fleet customer success, industry relationships, domain expertise",
        status: "Seeking",
        priority: "High"
      },
      {
        role: "Head of Shop Network",
        skills: "Shop onboarding, quality programs, network operations",
        status: "Seeking",
        priority: "High"
      }
    ],
    advisorNeeds: [
      "Former Samsara, Geotab, or Verizon Connect executive",
      "Fleet finance industry leader (Element, ARI, Wheels)",
      "Diesel technician shortage / vocational training expert",
      "B2B marketplace founder (ServiceTitan, Housecall Pro alumni)"
    ],
    orgPlan: {
      year1: "15 FTEs: 5 engineering, 5 sales/BD, 3 ops, 2 G&A",
      year2: "40 FTEs: 12 engineering, 15 sales/BD, 8 ops, 5 G&A",
      year3: "90 FTEs: 25 engineering, 35 sales/BD, 20 ops, 10 G&A"
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "Telematics Platform Competition",
        severity: "High",
        likelihood: "Medium",
        description: "Samsara or Geotab could build their own maintenance network, leveraging their existing fleet relationships and data.",
        mitigation: "Position as complement not competitor. Integrate with multiple platforms to become Switzerland of maintenance. Build shop relationships telematics can't replicate. Move fast to establish network effects."
      },
      {
        risk: "Shop Quality Variability",
        severity: "High",
        likelihood: "Medium",
        description: "Quality varies wildly across independent shops. Bad experiences could damage FleetPulse brand and fleet trust.",
        mitigation: "Rigorous credentialing process with on-site verification. Quality guarantee program with financial backing. Start with top-tier shops and expand carefully. Telematics data validates work quality."
      },
      {
        risk: "Fleet Sales Cycle Length",
        severity: "Medium",
        likelihood: "High",
        description: "Enterprise fleet procurement cycles can be 6-12+ months, delaying revenue recognition.",
        mitigation: "Start with owner-operators and small fleets (faster decisions). Use shop network to reach fleets bottom-up. Partner with fleet finance for enterprise introductions."
      },
      {
        risk: "Data Integration Complexity",
        severity: "Medium",
        likelihood: "Medium",
        description: "Each telematics platform has different APIs, data formats, and update frequencies. Integration is harder than expected.",
        mitigation: "Start with 3 major platforms (Samsara, Geotab, Verizon). Build standardized data layer. Hire telematics-experienced engineers. Use established middleware where available."
      },
      {
        risk: "OEM Dealer Network Response",
        severity: "Medium",
        likelihood: "Low",
        description: "Freightliner, Peterbilt, Kenworth dealers could view FleetPulse as competitive threat.",
        mitigation: "Focus on out-of-warranty vehicles initially. Independent shops have 20-30% cost advantage. Build relationships with OEMs as data partners long-term."
      },
      {
        risk: "Technician Shortage Impact",
        severity: "Medium",
        likelihood: "High",
        description: "Diesel technician shortage limits shop capacity, could constrain network growth.",
        mitigation: "Position FleetPulse as solution - better scheduling, reduced waste, higher shop utilization. Partner with vocational schools for talent pipeline."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Q1 2026", milestone: "Close seed round, hire core team (CEO, CTO, VP Ops)", status: "planned" },
      { timeline: "Q2 2026", milestone: "Launch MVP with 400 shops in 10 high-freight states", status: "planned" },
      { timeline: "Q3 2026", milestone: "Samsara and Geotab integrations live, 100 fleet pilots", status: "planned" },
      { timeline: "Q4 2026", milestone: "1,000 shops, 100 fleet customers, $3M ARR milestone", status: "planned" },
      { timeline: "Q1 2027", milestone: "Predictive maintenance engine v1 launch", status: "planned" },
      { timeline: "Q2 2027", milestone: "First fleet finance pilot (Element or ARI)", status: "planned" },
      { timeline: "Q3 2027", milestone: "Lifecycle analytics product launch, Verizon integration", status: "planned" },
      { timeline: "Q4 2027", milestone: "Series A raise at $80-100M valuation, $12M ARR", status: "planned" }
    ]
  },

  ask: {
    title: "The Ask",
    amount: "$4,500,000",
    round: "Seed Round",
    terms: "Priced round, standard seed terms",
    useOfFunds: [
      "Build shop network platform with credentialing system",
      "Establish Samsara, Geotab, Verizon telematics integrations",
      "Develop predictive maintenance engine v1",
      "Onboard 400 shops and 100 fleet customers"
    ],
    timeline: "18-month runway to Series A milestones",
    seriesA: {
      timing: "Q4 2027",
      metrics: "$12M ARR, 1,500 shops, fleet finance partnerships",
      raise: "$15-25M at $80-100M valuation"
    }
  },

  sources: [
    { name: "Mordor Intelligence - Commercial Vehicle Telematics", url: "https://www.mordorintelligence.com/industry-reports/commercial-vehicle-telematics-market", detail: "$27.5B in 2025, 14.7% CAGR to 2030" },
    { name: "GMInsights - Fleet Management Market", url: "https://www.gminsights.com/industry-analysis/fleet-management-market", detail: "$23.4B in 2024, 16% CAGR to 2034" },
    { name: "ATRI - Trucking Operational Costs", url: "https://truckingresearch.org/operational-costs", detail: "$16,192 annual maintenance per truck, $0.15-0.23/mile" },
    { name: "Fortune Business Insights - Fleet Management Software", url: "https://www.fortunebusinessinsights.com/industry-reports/fleet-management-software-market-100893", detail: "$32.3B in 2025, 19.8% CAGR" },
    { name: "Technavio - Fleet Telematics Systems", url: "https://www.technavio.com/report/fleet-telematics-systems-market-industry-analysis", detail: "$349B growth 2025-2029, 31.9% CAGR" },
    { name: "Fleet Maintenance Magazine - ATRI Costs", url: "https://www.fleetmaintenance.com/equipment/article/55091624/atri-releases-2024-operational-costs-survey-report", detail: "Parts costs up 15-25% since 2022" },
    { name: "Automotive Fleet - Maintenance Trends", url: "https://www.automotive-fleet.com/10221324/maintenance-trends-cost-outlook-for-2024", detail: "Labor rates up 8-15% annually" },
    { name: "Grand View Research - Fleet Management", url: "https://www.grandviewresearch.com/industry-analysis/fleet-management-market", detail: "Comprehensive market analysis" }
  ]
}

// Helper Components
function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-indigo-600" />
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
      <div className="text-3xl font-bold text-indigo-600">{value}</div>
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
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <a
            href="/tokens/#framework"
            className="inline-flex items-center gap-2 text-indigo-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cap-Ex Opportunities
          </a>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{businessPlan.companyName}</h1>
                  <p className="text-indigo-100">{businessPlan.tagline}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-indigo-200">{businessPlan.version}</div>
              <div className="text-sm text-indigo-200">{businessPlan.date}</div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.ask.amount}</div>
              <div className="text-sm text-indigo-100">Seed Round</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.marketSize.tam.value}</div>
              <div className="text-sm text-indigo-100">TAM</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">14.7%</div>
              <div className="text-sm text-indigo-100">Telematics CAGR</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">11:1</div>
              <div className="text-sm text-indigo-100">LTV:CAC</div>
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
                activeTab === 'overview' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Executive Summary
            </button>
            <button
              onClick={() => setActiveTab('detailed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'detailed' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Full Plan
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'financials' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'
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
                  const IconComponent = pillar.icon === 'Wrench' ? Wrench :
                    pillar.icon === 'Radio' ? Radio :
                    pillar.icon === 'Activity' ? Activity :
                    pillar.icon === 'Database' ? Database : Wrench
                  return (
                    <div key={i} className="p-4 bg-indigo-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5 text-indigo-600" />
                        <h4 className="font-semibold text-gray-900">{pillar.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {pillar.features.map((feature, j) => (
                          <span key={j} className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded text-xs">
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
                  const IconComponent = factor.icon === 'Radio' ? Radio :
                    factor.icon === 'DollarSign' ? DollarSign :
                    factor.icon === 'Users' ? Users :
                    factor.icon === 'Briefcase' ? Briefcase :
                    factor.icon === 'TrendingUp' ? TrendingUp : Clock
                  return (
                    <div key={i} className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-4 h-4 text-purple-600" />
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
                <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.tam.label}</div>
                  <div className="text-sm text-indigo-100 mt-1">{businessPlan.marketSize.tam.description}</div>
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
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">{businessPlan.ask.title}</h2>
                <div className="text-5xl font-bold mb-2">{businessPlan.ask.amount}</div>
                <div className="text-xl text-indigo-100">{businessPlan.ask.round}</div>
                <div className="text-indigo-200 mt-2">{businessPlan.ask.terms}</div>
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
                    <p><span className="text-indigo-200">Timing:</span> {businessPlan.ask.seriesA.timing}</p>
                    <p><span className="text-indigo-200">Metrics:</span> {businessPlan.ask.seriesA.metrics}</p>
                    <p><span className="text-indigo-200">Raise:</span> {businessPlan.ask.seriesA.raise}</p>
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
                            player.threat.includes('Partner') ? 'bg-blue-100 text-blue-700' :
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

              <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">{businessPlan.competition.ourAdvantage.title}</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {businessPlan.competition.ourAdvantage.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
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
                  <div key={i} className="border-l-4 border-indigo-400 pl-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded text-xs font-medium">
                        {phase.timeline}
                      </span>
                      <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 mb-3">
                      {phase.deliverables.map((deliverable, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
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

              <div className="p-4 bg-indigo-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{businessPlan.businessModel.unitEconomics.title}</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {businessPlan.businessModel.unitEconomics.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">{metric.value}</div>
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
                      <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
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
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
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
                    <span className="inline-block mt-2 px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded text-xs">
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
                        <Award className="w-4 h-4 text-indigo-500" />
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
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-200" />
                <div className="space-y-4">
                  {businessPlan.milestones.items.map((item, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-indigo-500 border-2 border-white" />
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-indigo-600">{item.timeline}</span>
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
                {/* Scenario 1: With Fleet Finance */}
                <div className="p-4 bg-indigo-50 rounded-lg border-2 border-indigo-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-indigo-600 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withFinancing.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-indigo-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Shops</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withFinancing.years.map((year, i) => (
                          <tr key={i} className="border-b border-indigo-100">
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
                          <span className="text-indigo-500">*</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-indigo-600">
                      Funding Required: {businessPlan.financials.scenarios.withFinancing.fundingRequired}
                    </span>
                  </div>
                </div>

                {/* Scenario 2: Without Fleet Finance */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{businessPlan.financials.scenarios.withoutFinancing.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withoutFinancing.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Shops</th>
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
                          <span className="text-gray-500">*</span>
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
                        <span className="text-lg font-bold text-indigo-600">{item.percentage}%</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-6 bg-gray-200 rounded overflow-hidden">
                          <div
                            className="h-full bg-indigo-500 rounded"
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
                  <div key={i} className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-indigo-600">{metric.value}</div>
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
                    <h4 className="font-medium text-gray-900 text-sm group-hover:text-indigo-600 transition-colors">
                      {source.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{source.detail}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors flex-shrink-0" />
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
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
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
