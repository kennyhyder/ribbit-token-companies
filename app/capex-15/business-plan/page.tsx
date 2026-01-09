'use client'

import { useState } from 'react'
import {
  ArrowLeft, Target, TrendingUp, DollarSign, Users, Shield, AlertTriangle,
  CheckCircle, ExternalLink, ChevronDown, ChevronUp, Building2, Zap, BarChart3,
  Clock, Wrench, FileText, Briefcase, Lightbulb, Globe, Award, PieChart, LineChart, Activity,
  Truck, Radio, Settings, Database
} from 'lucide-react'

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
      }
    ]
  },

  marketSize: {
    tam: {
      value: "$115B",
      description: "Total addressable market: Combined fleet telematics and commercial vehicle maintenance",
      breakdown: [
        { segment: "Fleet Telematics Market", value: "$35B", growth: "12.4% CAGR" },
        { segment: "Commercial Fleet Maintenance", value: "$80B", growth: "5.8% CAGR" },
        { segment: "Fleet Management Software", value: "$25B", growth: "15.2% CAGR" }
      ]
    },
    sam: {
      value: "$12B",
      description: "Serviceable addressable market: U.S. medium/heavy-duty fleet maintenance with telematics integration",
      breakdown: [
        { segment: "Class 6-8 Truck Maintenance", value: "$6.5B", growth: "~3.5M trucks in U.S." },
        { segment: "Medium-Duty Fleet Maintenance", value: "$3.5B", growth: "~4M Class 3-5 vehicles" },
        { segment: "Telematics Integration Services", value: "$1.2B", growth: "Data connection layer" },
        { segment: "Fleet Lifecycle Analytics", value: "$800M", growth: "TCO optimization" }
      ]
    },
    som: {
      value: "$85M",
      description: "Year 5 revenue target: 2,500 shops, 800 fleet partnerships, 45,000 vehicles under management",
      breakdown: [
        { segment: "Platform Transaction Fees", value: "$36M", growth: "2.5% of $1.4B service volume" },
        { segment: "Shop SaaS Subscriptions", value: "$22M", growth: "2,500 shops @ $730/mo avg" },
        { segment: "Fleet Data Licensing", value: "$18M", growth: "800 fleets @ $1,875/mo avg" },
        { segment: "Predictive Maintenance Products", value: "$9M", growth: "Premium analytics tier" }
      ]
    }
  },

  competition: {
    overview: "The market is split between telematics companies focused on vehicle tracking and disconnected maintenance providers. No platform has unified these ecosystems into an integrated fleet lifecycle view.",
    competitors: [
      {
        name: "Samsara",
        description: "Leading telematics platform with excellent vehicle tracking, driver safety, and compliance. No maintenance network or shop integration.",
        strengths: ["Strong telematics platform", "Video safety features", "Large customer base", "API ecosystem"],
        weaknesses: ["No maintenance ownership", "Shop relationships not core", "Data stays in platform", "Predictive maintenance basic"],
        marketShare: "~18% of fleet telematics"
      },
      {
        name: "Geotab",
        description: "Largest pure-play telematics provider. Open platform approach with extensive OEM integrations. Maintenance limited to alerts.",
        strengths: ["Massive data scale", "OEM partnerships", "Open API platform", "Global reach"],
        weaknesses: ["No shop network", "Maintenance not core focus", "Platform complexity", "Limited fleet finance ties"],
        marketShare: "~15% of fleet telematics"
      },
      {
        name: "Verizon Connect",
        description: "Enterprise fleet management with telecom backing. Strong in field service management but maintenance is tertiary.",
        strengths: ["Enterprise sales force", "Telecom infrastructure", "Field service tools", "Financial stability"],
        weaknesses: ["Maintenance afterthought", "Legacy technology", "Higher price point", "Innovation slower"],
        marketShare: "~12% of fleet telematics"
      },
      {
        name: "Independent Shops (Fragmented)",
        description: "150,000+ independent truck repair shops. Local expertise but no coordination, standardization, or fleet visibility.",
        strengths: ["Local relationships", "Specialized expertise", "Flexible service", "Lower overhead"],
        weaknesses: ["No quality standard", "Pricing opacity", "No telematics integration", "Limited technology"],
        marketShare: "~70% of fleet maintenance"
      }
    ],
    moat: "Network effects: More shops in network = better coverage + more maintenance data = better predictions = more fleet adoption = more shop demand. First to connect telematics to maintenance execution becomes the industry standard."
  },

  businessModel: {
    overview: "Four-sided platform connecting independent shops, fleet operators, telematics providers, and fleet finance companies around predictive maintenance and lifecycle optimization.",
    revenueStreams: [
      {
        name: "Platform Transaction Fees",
        description: "Percentage of maintenance spend for work facilitated through platform matching and scheduling",
        pricing: "2-3% of maintenance cost",
        margin: "92%",
        details: [
          "Automated shop matching",
          "Price transparency tools",
          "Quality assurance program",
          "Payment processing",
          "Warranty coordination"
        ]
      },
      {
        name: "Shop SaaS Subscriptions",
        description: "Monthly subscription for shops to access fleet network, receive work orders, and build quality scores",
        pricing: "$400-$1,500/month based on bay count",
        margin: "88%",
        details: [
          "Fleet work order flow",
          "Quality score building",
          "Telematics data access",
          "Inventory management",
          "Scheduling optimization"
        ]
      },
      {
        name: "Fleet Data Licensing",
        description: "API access to predictive maintenance intelligence, lifecycle analytics, and benchmarking for fleet operators",
        pricing: "$500-$5,000/month based on fleet size",
        margin: "90%",
        details: [
          "Predictive maintenance alerts",
          "Shop performance data",
          "Cost benchmarking",
          "Lifecycle optimization",
          "Finance integration"
        ]
      },
      {
        name: "Predictive Maintenance Products",
        description: "Premium analytics tier with ML-powered failure prediction, optimal maintenance scheduling, and TCO modeling",
        pricing: "$50K-$150K annual enterprise contracts",
        margin: "85%",
        details: [
          "Custom prediction models",
          "Fleet-specific training",
          "API integrations",
          "White-label options",
          "Strategic consulting"
        ]
      }
    ],
    unitEconomics: {
      ltv: "$198,000",
      cac: "$18,000",
      ltvCacRatio: "11:1",
      paybackPeriod: "8 months",
      grossMargin: "89%",
      details: [
        "Average shop subscription: 3.2 years ($730/mo avg) + transaction fees",
        "Fleet contracts average $22,500/year with 85% annual retention",
        "CAC: $10K digital + $8K sales/onboarding for shops",
        "High retention due to telematics integration depth and data lock-in"
      ]
    }
  },

  financials: {
    scenarios: {
      withFinancing: {
        name: "With Cap-Ex Financing Partnerships",
        description: "Deep fleet finance integration creates data moat and accelerates enterprise adoption",
        projections: [
          { year: "Y1", revenue: "$3.2M", customers: "400 shops", highlights: "Platform launch, 3 telematics integrations" },
          { year: "Y2", revenue: "$12M", customers: "900 shops", highlights: "Fleet finance pilots, predictive engine v1" },
          { year: "Y3", revenue: "$32M", customers: "1,500 shops", highlights: "Element/ARI partnerships, 25K vehicles" },
          { year: "Y4", revenue: "$58M", customers: "2,100 shops", highlights: "Lifecycle analytics GA, 35K vehicles" },
          { year: "Y5", revenue: "$95M", customers: "2,800 shops", highlights: "Market leader, strategic interest" }
        ],
        keyAssumptions: [
          "2 major fleet finance partnerships by Y2",
          "Telematics integrations drive 40% of shop acquisition",
          "Predictive maintenance reduces fleet downtime 30%",
          "Fleet finance data licensing drives 20% of revenue by Y4"
        ]
      },
      withoutFinancing: {
        name: "Without Cap-Ex Financing Angle",
        description: "Pure marketplace focus with shop network and fleet direct sales",
        projections: [
          { year: "Y1", revenue: "$1.8M", customers: "250 shops", highlights: "Marketplace launch, regional focus" },
          { year: "Y2", revenue: "$6M", customers: "550 shops", highlights: "Shop network scaling" },
          { year: "Y3", revenue: "$16M", customers: "900 shops", highlights: "Multi-region expansion" },
          { year: "Y4", revenue: "$32M", customers: "1,400 shops", highlights: "Telematics integrations" },
          { year: "Y5", revenue: "$55M", customers: "2,000 shops", highlights: "Sustainable growth" }
        ],
        keyAssumptions: [
          "Shop acquisition primary driver",
          "Slower enterprise fleet adoption",
          "More capital-efficient growth path",
          "Telematics companies may compete"
        ]
      }
    },
    useOfFunds: [
      { category: "Engineering & Product", percentage: 42, amount: "$1.9M", details: "Platform build, telematics integrations, ML engine" },
      { category: "Sales & Partnerships", percentage: 28, amount: "$1.26M", details: "Shop onboarding, fleet BD, telematics partnerships" },
      { category: "Data & Analytics", percentage: 12, amount: "$540K", details: "Predictive models, data infrastructure, benchmarking" },
      { category: "Marketing", percentage: 12, amount: "$540K", details: "Shop acquisition, fleet awareness, industry positioning" },
      { category: "Operations", percentage: 6, amount: "$270K", details: "Legal, insurance, G&A" }
    ]
  },

  risks: [
    {
      risk: "Telematics Platform Competition",
      severity: "High",
      mitigation: "Position as complement not competitor. Integrate with multiple platforms to become Switzerland of maintenance. Build shop relationships telematics can't replicate."
    },
    {
      risk: "Shop Quality Variability",
      severity: "High",
      mitigation: "Rigorous credentialing process. Quality guarantee program with financial backing. Start with top-tier shops and expand carefully. Telematics data validates work quality."
    },
    {
      risk: "Fleet Sales Cycle Length",
      severity: "Medium",
      mitigation: "Start with owner-operators and small fleets. Use shop network to reach fleets bottom-up. Partner with fleet finance for enterprise introduction."
    },
    {
      risk: "Data Integration Complexity",
      severity: "Medium",
      mitigation: "Start with 3 major telematics platforms (Samsara, Geotab, Verizon). Standard API approach. Hire telematics-experienced engineers."
    },
    {
      risk: "OEM Dealer Network Response",
      severity: "Medium",
      mitigation: "Focus on out-of-warranty vehicles initially. Independent shops have cost advantage. Build relationships with OEMs as data partners long-term."
    },
    {
      risk: "Telematics Company Acquisition",
      severity: "Low",
      mitigation: "Multi-platform strategy prevents lock-in. Shop network is defensible asset. Position for acquisition as potential exit."
    }
  ],

  milestones: [
    { quarter: "Q1 2026", milestone: "Close seed round, hire core team", status: "target" },
    { quarter: "Q2 2026", milestone: "Launch MVP with 400 shops in 10 states", status: "target" },
    { quarter: "Q3 2026", milestone: "Samsara and Geotab integrations live", status: "target" },
    { quarter: "Q4 2026", milestone: "1,000 shops, 100 fleet customers, $3M ARR", status: "target" },
    { quarter: "Q1 2027", milestone: "Predictive maintenance engine v1 launch", status: "target" },
    { quarter: "Q2 2027", milestone: "First fleet finance pilot (Element or ARI)", status: "target" },
    { quarter: "Q3 2027", milestone: "Lifecycle analytics product launch", status: "target" },
    { quarter: "Q4 2027", milestone: "Series A at $80-100M valuation", status: "target" }
  ],

  team: {
    hiring: [
      { role: "CTO", priority: "Critical", timeline: "Immediate", description: "Platform architecture, telematics integrations, ML infrastructure" },
      { role: "VP Fleet Operations", priority: "Critical", timeline: "Q1 2026", description: "Fleet customer success, industry relationships, domain expertise" },
      { role: "Head of Shop Network", priority: "Critical", timeline: "Q1 2026", description: "Shop onboarding, quality programs, network growth" },
      { role: "VP Sales", priority: "High", timeline: "Q2 2026", description: "Fleet enterprise sales, telematics partnerships" }
    ]
  },

  ask: {
    amount: "$4.5M",
    round: "Seed",
    timeline: "Q1 2026",
    terms: "Priced round, standard seed terms",
    use: "Build shop network platform, establish telematics integrations, develop predictive maintenance engine",
    targetInvestors: [
      "Transportation/logistics investors (Trucks VC, Dynamo)",
      "Fleet finance strategics (Element, ARI innovation funds)",
      "Telematics-adjacent investors",
      "Vertical SaaS specialists (Craft Ventures)"
    ]
  },

  sources: [
    { name: "Grand View Research - Fleet Management Market", url: "https://www.grandviewresearch.com/industry-analysis/fleet-management-market" },
    { name: "Fleet Owner - Maintenance Cost Analysis", url: "https://www.fleetowner.com/maintenance/maintenance-management" },
    { name: "ATRI - Trucking Operational Costs Study", url: "https://truckingresearch.org/operational-costs" },
    { name: "Samsara - Fleet Telematics Overview", url: "https://www.samsara.com/fleet" },
    { name: "Heavy Duty Trucking - Technician Shortage Report", url: "https://www.truckinginfo.com/technician-shortage" },
    { name: "Element Fleet - Fleet Finance Trends", url: "https://www.elementfleet.com/resources" }
  ]
}

function ExpandableSection({ title, children, defaultOpen = false }: {
  title: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-gray-800 flex items-center justify-between hover:bg-gray-750 transition-colors"
      >
        <div className="font-semibold text-lg text-white">{title}</div>
        {isOpen ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-900">
          {children}
        </div>
      )}
    </div>
  )
}

function StatCard({ value, label, icon: Icon }: { value: string; label: string; icon: any }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 text-center">
      <Icon className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}

export default function BusinessPlanPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'detailed' | 'financials'>('overview')

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4">
              <a href="/tokens/#framework" className="text-gray-400 hover:text-white transition-colors mt-1">
                <ArrowLeft className="w-5 h-5" />
              </a>
              <div>
                <h1 className="text-2xl font-bold text-indigo-400">{businessPlan.companyName}</h1>
                <p className="text-gray-400 text-sm">{businessPlan.tagline}</p>
              </div>
            </div>
            <div className="text-right text-sm text-gray-500">
              <div>{businessPlan.version}</div>
              <div>{businessPlan.date}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'detailed', label: 'Detailed Plan' },
              { id: 'financials', label: 'Financials' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-indigo-400 border-b-2 border-indigo-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Executive Summary */}
            <section className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-8 border border-indigo-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="text-indigo-400" />
                Executive Summary
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-indigo-400 font-semibold mb-2">The Problem</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.problem}</p>
                </div>
                <div>
                  <h3 className="text-indigo-400 font-semibold mb-2">Our Solution</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.solution}</p>
                </div>
                <div>
                  <h3 className="text-indigo-400 font-semibold mb-2">Market Opportunity</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.market}</p>
                </div>
                <div>
                  <h3 className="text-indigo-400 font-semibold mb-2">The Ask</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.ask}</p>
                </div>
              </div>
            </section>

            {/* Key Stats */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard value="$115B" label="TAM" icon={Globe} />
                <StatCard value="30%" label="Downtime Reduction" icon={TrendingUp} />
                <StatCard value="11:1" label="LTV:CAC Ratio" icon={BarChart3} />
                <StatCard value="$4.5M" label="Seed Ask" icon={DollarSign} />
              </div>
            </section>

            {/* Problem */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <AlertTriangle className="text-red-400" />
                {businessPlan.problem.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.problem.points.map((point, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-white">{point.title}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-400">{point.stat}</div>
                        <div className="text-xs text-gray-500">{point.statLabel}</div>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{point.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Lightbulb className="text-indigo-400" />
                {businessPlan.solution.title}
              </h2>
              <p className="text-gray-400 mb-6">{businessPlan.solution.tagline}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {businessPlan.solution.pillars.map((pillar, i) => {
                  const IconComponent = pillar.icon === 'Wrench' ? Wrench :
                    pillar.icon === 'Radio' ? Radio :
                    pillar.icon === 'Activity' ? Activity :
                    pillar.icon === 'Database' ? Database : Wrench
                  return (
                    <div key={i} className="bg-gray-800 rounded-lg p-5">
                      <IconComponent className="w-8 h-8 text-indigo-400 mb-3" />
                      <h3 className="font-semibold text-white mb-2">{pillar.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{pillar.description}</p>
                      <ul className="space-y-1">
                        {pillar.features.map((feature, j) => (
                          <li key={j} className="text-xs text-gray-500 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-indigo-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* The Ask */}
            <section className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-xl p-8 border border-indigo-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="text-indigo-400" />
                The Ask
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-400">{businessPlan.ask.amount}</div>
                  <div className="text-gray-400">{businessPlan.ask.round} Round</div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-300 mb-4">{businessPlan.ask.use}</p>
                  <div className="flex flex-wrap gap-2">
                    {businessPlan.ask.targetInvestors.map((investor, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                        {investor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Detailed Plan Tab */}
        {activeTab === 'detailed' && (
          <div className="space-y-4">
            {/* Why Now */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Clock className="text-indigo-400" /> Why Now?</div>}
              defaultOpen={true}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => {
                  const IconComponent = factor.icon === 'Radio' ? Radio :
                    factor.icon === 'DollarSign' ? DollarSign :
                    factor.icon === 'Users' ? Users :
                    factor.icon === 'Briefcase' ? Briefcase : Clock
                  return (
                    <div key={i} className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5 text-indigo-400" />
                        <h3 className="font-semibold text-white">{factor.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{factor.detail}</p>
                    </div>
                  )
                })}
              </div>
            </ExpandableSection>

            {/* Market Size */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><PieChart className="text-indigo-400" /> Market Size</div>}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { key: 'tam', label: 'TAM', data: businessPlan.marketSize.tam },
                  { key: 'sam', label: 'SAM', data: businessPlan.marketSize.sam },
                  { key: 'som', label: 'SOM (Y5)', data: businessPlan.marketSize.som }
                ].map(({ key, label, data }) => (
                  <div key={key} className="bg-gray-800 rounded-lg p-5">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-indigo-400">{data.value}</div>
                      <div className="text-sm text-gray-400">{label}</div>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{data.description}</p>
                    <div className="space-y-2">
                      {data.breakdown.map((item, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span className="text-gray-400">{item.segment}</span>
                          <span className="text-white font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ExpandableSection>

            {/* Competition */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Users className="text-indigo-400" /> Competitive Landscape</div>}
            >
              <p className="text-gray-400 mb-4">{businessPlan.competition.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {businessPlan.competition.competitors.map((comp, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">{comp.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{comp.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="text-green-400 font-medium mb-1">Strengths</div>
                        <ul className="text-gray-400 space-y-1">
                          {comp.strengths.map((s, j) => <li key={j}>+ {s}</li>)}
                        </ul>
                      </div>
                      <div>
                        <div className="text-red-400 font-medium mb-1">Weaknesses</div>
                        <ul className="text-gray-400 space-y-1">
                          {comp.weaknesses.map((w, j) => <li key={j}>- {w}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-800">
                <h3 className="font-semibold text-indigo-400 mb-2">Our Moat</h3>
                <p className="text-gray-300">{businessPlan.competition.moat}</p>
              </div>
            </ExpandableSection>

            {/* Business Model */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Briefcase className="text-indigo-400" /> Business Model</div>}
            >
              <p className="text-gray-400 mb-4">{businessPlan.businessModel.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {businessPlan.businessModel.revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{stream.name}</h3>
                      <span className="text-indigo-400 font-medium">{stream.pricing}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{stream.description}</p>
                    <div className="text-xs text-gray-500 mb-2">Gross Margin: {stream.margin}</div>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {stream.details.map((d, j) => (
                        <li key={j} className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-indigo-400" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Unit Economics */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-4">Unit Economics</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-400">{businessPlan.businessModel.unitEconomics.ltv}</div>
                    <div className="text-xs text-gray-400">LTV</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-400">{businessPlan.businessModel.unitEconomics.cac}</div>
                    <div className="text-xs text-gray-400">CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-400">{businessPlan.businessModel.unitEconomics.ltvCacRatio}</div>
                    <div className="text-xs text-gray-400">LTV:CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-400">{businessPlan.businessModel.unitEconomics.paybackPeriod}</div>
                    <div className="text-xs text-gray-400">Payback</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-400">{businessPlan.businessModel.unitEconomics.grossMargin}</div>
                    <div className="text-xs text-gray-400">Gross Margin</div>
                  </div>
                </div>
                <ul className="text-sm text-gray-400 space-y-1">
                  {businessPlan.businessModel.unitEconomics.details.map((d, i) => (
                    <li key={i}>* {d}</li>
                  ))}
                </ul>
              </div>
            </ExpandableSection>

            {/* Risks */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Shield className="text-indigo-400" /> Risks & Mitigations</div>}
            >
              <div className="space-y-3">
                {businessPlan.risks.map((risk, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{risk.risk}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        risk.severity === 'High' ? 'bg-red-900/50 text-red-400' :
                        risk.severity === 'Medium' ? 'bg-yellow-900/50 text-yellow-400' :
                        'bg-green-900/50 text-green-400'
                      }`}>
                        {risk.severity}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm"><strong className="text-gray-300">Mitigation:</strong> {risk.mitigation}</p>
                  </div>
                ))}
              </div>
            </ExpandableSection>

            {/* Milestones */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Award className="text-indigo-400" /> Milestones & Timeline</div>}
            >
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />
                <div className="space-y-4">
                  {businessPlan.milestones.map((m, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-indigo-400" />
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-indigo-400 font-medium">{m.quarter}</span>
                        </div>
                        <p className="text-gray-300">{m.milestone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ExpandableSection>

            {/* Team */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Users className="text-indigo-400" /> Team & Hiring</div>}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.team.hiring.map((hire, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{hire.role}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        hire.priority === 'Critical' ? 'bg-red-900/50 text-red-400' : 'bg-yellow-900/50 text-yellow-400'
                      }`}>
                        {hire.priority}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-1">{hire.description}</p>
                    <p className="text-xs text-gray-500">Timeline: {hire.timeline}</p>
                  </div>
                ))}
              </div>
            </ExpandableSection>
          </div>
        )}

        {/* Financials Tab */}
        {activeTab === 'financials' && (
          <div className="space-y-8">
            {/* Scenario Comparison */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <LineChart className="text-indigo-400" />
                Financial Projections
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* With Financing */}
                <div className="bg-gray-800 rounded-xl p-6 border-2 border-indigo-600">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="text-indigo-400" />
                    <h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withFinancing.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>

                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-2 text-gray-400">Year</th>
                          <th className="text-right py-2 text-gray-400">Revenue</th>
                          <th className="text-right py-2 text-gray-400">Shops</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withFinancing.projections.map((proj, i) => (
                          <tr key={i} className="border-b border-gray-700/50">
                            <td className="py-2 text-white">{proj.year}</td>
                            <td className="py-2 text-right text-indigo-400 font-medium">{proj.revenue}</td>
                            <td className="py-2 text-right text-gray-300">{proj.customers}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="text-xs text-gray-400">
                    <div className="font-medium mb-1">Key Assumptions:</div>
                    <ul className="space-y-1">
                      {businessPlan.financials.scenarios.withFinancing.keyAssumptions.map((a, i) => (
                        <li key={i}>* {a}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Without Financing */}
                <div className="bg-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="text-gray-400" />
                    <h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withoutFinancing.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{businessPlan.financials.scenarios.withoutFinancing.description}</p>

                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-2 text-gray-400">Year</th>
                          <th className="text-right py-2 text-gray-400">Revenue</th>
                          <th className="text-right py-2 text-gray-400">Shops</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutFinancing.projections.map((proj, i) => (
                          <tr key={i} className="border-b border-gray-700/50">
                            <td className="py-2 text-white">{proj.year}</td>
                            <td className="py-2 text-right text-indigo-400 font-medium">{proj.revenue}</td>
                            <td className="py-2 text-right text-gray-300">{proj.customers}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="text-xs text-gray-400">
                    <div className="font-medium mb-1">Key Assumptions:</div>
                    <ul className="space-y-1">
                      {businessPlan.financials.scenarios.withoutFinancing.keyAssumptions.map((a, i) => (
                        <li key={i}>* {a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Use of Funds */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <PieChart className="text-indigo-400" />
                Use of Funds
              </h2>
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-indigo-400">{fund.percentage}%</div>
                      <div className="text-sm font-medium text-white">{fund.category}</div>
                      <div className="text-xs text-gray-400">{fund.amount}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-32 text-sm text-gray-400">{fund.category}</div>
                      <div className="flex-1 bg-gray-700 rounded-full h-4">
                        <div
                          className="bg-indigo-500 h-4 rounded-full"
                          style={{ width: `${fund.percentage}%` }}
                        />
                      </div>
                      <div className="w-24 text-sm text-right text-white">{fund.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Sources */}
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText className="text-indigo-400" />
                Sources
              </h2>
              <div className="bg-gray-800 rounded-lg p-4">
                <ul className="space-y-2">
                  {businessPlan.sources.map((source, i) => (
                    <li key={i}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {source.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          <p>{businessPlan.companyName} Business Plan * {businessPlan.version} * {businessPlan.date}</p>
          <p className="mt-2">Part of the <a href="/tokens/#framework" className="text-indigo-400 hover:text-indigo-300">Ribbit Token Cap-Ex Framework</a></p>
        </div>
      </footer>
    </div>
  )
}
