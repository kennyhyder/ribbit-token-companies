'use client'

import { useState } from 'react'
import {
  ArrowLeft, Target, TrendingUp, DollarSign, Users, Shield, AlertTriangle,
  CheckCircle, ExternalLink, ChevronDown, ChevronUp, Building2, Zap, BarChart3,
  Clock, Wrench, FileText, Briefcase, Lightbulb, Globe, Award, PieChart, LineChart, Activity,
  Thermometer, Server, Network, Database
} from 'lucide-react'

const businessPlan = {
  companyName: "BuildingIQ",
  tagline: "The Intelligence Layer Breaking OEM Lock-in for Building Controls",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Johnson Controls, Trane, and Carrier dominate commercial HVAC but installers and servicers are fragmented. Building Automation Systems (BAS) are proprietary nightmares with zero interoperability. Building owners are locked into single vendors, paying 3-5x premium for simple integrations and losing $billions in energy optimization opportunities.",
    solution: "BuildingIQ aggregates HVAC contractors into a credentialed network, standardizes BAS data extraction across proprietary systems, and creates building energy intelligence. We enable third-party optimization without OEM lock-in, becoming the interoperability layer building owners trust.",
    market: "$45B combined commercial HVAC ($30B) and BAS ($15B) market. Building owners waste 20-30% on energy costs due to siloed systems. Energy efficiency upgrades qualify for utility incentives and cap-ex treatment. ESG mandates driving demand.",
    ask: "$5M Seed Round to build contractor network platform, develop BAS data extraction protocols, and establish utility partnerships that break OEM lock-in."
  },

  problem: {
    title: "The Building Controls Lock-in Crisis",
    points: [
      {
        title: "OEM Proprietary Lock-in",
        detail: "Johnson Controls, Trane, and Carrier use proprietary protocols. Want to connect your Trane rooftop unit to Johnson Controls BAS? That'll be $50K and 6 months. Building owners are trapped.",
        stat: "Zero",
        statLabel: "interoperability between major OEMs"
      },
      {
        title: "Contractor Fragmentation",
        detail: "~15,000 commercial HVAC contractors exist but lack standardization, quality metrics, and BAS expertise. Building owners can't assess contractor capabilities or pricing fairness.",
        stat: "15,000+",
        statLabel: "fragmented contractors with no quality standard"
      },
      {
        title: "Energy Waste at Scale",
        detail: "Buildings consume 40% of U.S. energy. Without unified data, optimization is impossible. Buildings waste 20-30% of HVAC energy due to siloed controls and poor commissioning.",
        stat: "20-30%",
        statLabel: "energy wasted due to siloed systems"
      },
      {
        title: "ESG Compliance Gap",
        detail: "New building performance standards (NYC LL97, CA Title 24) require energy reporting. Building owners can't extract data from proprietary BAS systems to prove compliance.",
        stat: "40+ Cities",
        statLabel: "with building performance mandates"
      }
    ]
  },

  solution: {
    title: "BuildingIQ: Unified Intelligence for Building Controls",
    tagline: "Aggregate. Extract. Optimize. Liberate.",
    pillars: [
      {
        icon: "Network",
        title: "Contractor Network",
        description: "Aggregated network of credentialed HVAC contractors with verified BAS capabilities, coverage areas, and equipment certifications.",
        features: ["500+ contractor profiles", "BAS capability verification", "Coverage mapping", "Real-time availability"]
      },
      {
        icon: "Database",
        title: "BAS Data Extraction",
        description: "Universal data extraction from proprietary BAS systems (JCI, Trane, Carrier, Siemens). One API for all building controls data.",
        features: ["20+ BAS protocol support", "Real-time data streaming", "Historical data migration", "Vendor-agnostic platform"]
      },
      {
        icon: "BarChart3",
        title: "Energy Intelligence",
        description: "Building energy analytics powered by cross-system data. Identify optimization opportunities and benchmark against similar buildings.",
        features: ["Energy benchmarking", "Fault detection", "Optimization recommendations", "ROI modeling"]
      },
      {
        icon: "Zap",
        title: "Third-Party Optimization",
        description: "Enable any optimization vendor to connect to any building. Break the OEM stranglehold on energy management.",
        features: ["Open API platform", "Third-party app marketplace", "Utility program integration", "Performance verification"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "Building Performance Standards",
        detail: "NYC Local Law 97, CA Title 24, and 40+ cities mandating building energy reporting. Owners need unified data to comply. Fines starting 2024.",
        icon: "FileText"
      },
      {
        title: "ESG Investment Mandates",
        detail: "Real estate investors requiring ESG metrics. Can't get building performance data without unified platform. $30T+ in ESG-focused capital.",
        icon: "TrendingUp"
      },
      {
        title: "Utility Decarbonization",
        detail: "Utilities offering $100M+ C&I efficiency incentives. Need standardized M&V data to verify savings. BuildingIQ becomes the verification layer.",
        icon: "DollarSign"
      },
      {
        title: "OEM Antitrust Pressure",
        detail: "Right-to-repair momentum and interoperability requirements in government contracts. OEMs losing ability to maintain closed ecosystems.",
        icon: "Globe"
      }
    ]
  },

  marketSize: {
    tam: {
      value: "$45B",
      description: "Total addressable market: Global commercial HVAC and building automation systems",
      breakdown: [
        { segment: "Commercial HVAC Equipment & Service", value: "$30B", growth: "5.2% CAGR" },
        { segment: "Building Automation Systems", value: "$15B", growth: "8.6% CAGR" },
        { segment: "Energy Management Software", value: "$5B", growth: "12.4% CAGR" }
      ]
    },
    sam: {
      value: "$8.5B",
      description: "Serviceable addressable market: U.S. commercial BAS modernization and HVAC service opportunity",
      breakdown: [
        { segment: "BAS Retrofit/Integration", value: "$3.2B", growth: "~500K buildings need modernization" },
        { segment: "Commercial HVAC Service", value: "$3.5B", growth: "~2M commercial rooftop units" },
        { segment: "Energy Optimization Services", value: "$1.2B", growth: "Utility-funded efficiency programs" },
        { segment: "ESG Compliance Services", value: "$600M", growth: "New mandates driving demand" }
      ]
    },
    som: {
      value: "$85M",
      description: "Year 5 revenue target: 400 active contractors, 200 building owner partnerships, 5,000 buildings under management",
      breakdown: [
        { segment: "Platform Transaction Fees", value: "$32M", growth: "2.5% of $1.3B service volume" },
        { segment: "Contractor SaaS Subscriptions", value: "$22M", growth: "400 contractors @ $4,500/mo avg" },
        { segment: "Building Owner Data Licensing", value: "$18M", growth: "200 owners @ $90K/yr" },
        { segment: "Utility Program Partnerships", value: "$13M", growth: "Performance verification fees" }
      ]
    }
  },

  competition: {
    overview: "The market is dominated by vertically integrated OEMs who control both equipment and building automation. They have no incentive for interoperability. No platform has unified the fragmented contractor ecosystem or created open BAS data standards.",
    competitors: [
      {
        name: "Johnson Controls",
        description: "Largest BAS provider globally. Metasys platform dominates commercial buildings. Aggressive about maintaining proprietary ecosystem.",
        strengths: ["Market leader (25% share)", "Integrated hardware/software", "Enterprise relationships", "Global service network"],
        weaknesses: ["Proprietary lock-in backlash", "Premium pricing (3-5x)", "Slow innovation", "Antitrust risk"],
        marketShare: "~25% of BAS market"
      },
      {
        name: "Trane Technologies",
        description: "Strong in HVAC equipment with Tracer BAS platform. Pushing connected building services but maintaining closed ecosystem.",
        strengths: ["HVAC equipment dominance", "Energy efficiency expertise", "Service network", "Brand trust"],
        weaknesses: ["Limited BAS interoperability", "Equipment-centric (not software)", "Slow to cloud", "Contractor conflicts"],
        marketShare: "~18% of commercial HVAC"
      },
      {
        name: "Carrier Global",
        description: "Third major HVAC OEM. i-Vu BAS platform for smaller buildings. Trying to move upmarket.",
        strengths: ["Strong in light commercial", "Distribution network", "Residential crossover", "UTC heritage"],
        weaknesses: ["Weaker enterprise presence", "BAS less sophisticated", "Integration limitations", "Fragmented products"],
        marketShare: "~15% of commercial HVAC"
      },
      {
        name: "Independent Contractors (Fragmented)",
        description: "~15,000 commercial HVAC contractors. Local expertise but limited BAS capabilities and no coordination.",
        strengths: ["Local relationships", "Lower pricing", "Flexible service", "Faster response"],
        weaknesses: ["No BAS expertise", "Limited scale", "Quality variability", "No data platform"],
        marketShare: "~40% of HVAC service"
      }
    ],
    moat: "Network effects: More contractors in network = better coverage + more building data = more owner adoption = more contractor demand. First standardized BAS extraction layer becomes the industry utility."
  },

  businessModel: {
    overview: "Four-sided platform connecting HVAC contractors, building owners, utilities, and third-party optimization vendors around data interoperability and energy intelligence.",
    revenueStreams: [
      {
        name: "Platform Transaction Fees",
        description: "Percentage of service contract value for HVAC jobs facilitated through platform matching",
        pricing: "2-4% of contract value",
        margin: "92%",
        details: [
          "Automated contractor matching",
          "Bid management system",
          "Quality guarantee program",
          "Payment processing",
          "Dispute resolution"
        ]
      },
      {
        name: "Contractor SaaS Subscriptions",
        description: "Monthly subscription for contractors to access network, build quality scores, and receive service opportunities",
        pricing: "$1,500-$8,000/month based on capabilities",
        margin: "88%",
        details: [
          "Quality score profile",
          "BAS training & certification",
          "Lead generation",
          "Job management tools",
          "Equipment documentation"
        ]
      },
      {
        name: "Building Owner Data Licensing",
        description: "API access to unified building data, energy benchmarking, and optimization recommendations",
        pricing: "$50K-$200K annual contracts",
        margin: "90%",
        details: [
          "Cross-BAS data unification",
          "Energy benchmarking",
          "ESG reporting automation",
          "Optimization recommendations",
          "Contractor performance tracking"
        ]
      },
      {
        name: "Utility Program Partnerships",
        description: "Performance verification and M&V services for utility efficiency programs",
        pricing: "$200-500 per building per year + savings share",
        margin: "75%",
        details: [
          "Automated M&V protocols",
          "Savings verification",
          "Program enrollment automation",
          "Rebate processing",
          "Portfolio reporting"
        ]
      }
    ],
    unitEconomics: {
      ltv: "$195,000",
      cac: "$15,000",
      ltvCacRatio: "13:1",
      paybackPeriod: "8 months",
      grossMargin: "84%",
      details: [
        "Average contractor subscription: 3.5 years ($4,500/mo avg) + transaction fees",
        "Building owner contracts: 4+ years at $90K/yr avg with expansion",
        "CAC: $10K digital + $5K sales/onboarding",
        "High retention due to data network effects and switching costs"
      ]
    }
  },

  financials: {
    scenarios: {
      withFinancing: {
        name: "With Cap-Ex Financing Partnerships",
        description: "Deep utility and equipment finance integration creates data moat and recurring revenue",
        projections: [
          { year: "Y1", revenue: "$3.8M", customers: "80 contractors", highlights: "Platform launch, 5 building owner pilots" },
          { year: "Y2", revenue: "$14M", customers: "175 contractors", highlights: "20 building owner partnerships, utility pilots" },
          { year: "Y3", revenue: "$38M", customers: "280 contractors", highlights: "Market leader in BAS data extraction" },
          { year: "Y4", revenue: "$65M", customers: "350 contractors", highlights: "Utility program integration, ESG compliance" },
          { year: "Y5", revenue: "$105M", customers: "450 contractors", highlights: "Category dominance, strategic acquisition interest" }
        ],
        keyAssumptions: [
          "5 major building owners sign in Year 1",
          "Utility program partnerships drive 20% of revenue by Y3",
          "Contractor network reaches 3% of quality contractors",
          "ESG mandates accelerate building owner adoption"
        ]
      },
      withoutFinancing: {
        name: "Without Cap-Ex Financing Angle",
        description: "Pure marketplace focus with contractor subscriptions and transaction fees",
        projections: [
          { year: "Y1", revenue: "$2.2M", customers: "55 contractors", highlights: "Marketplace launch, SEO focus" },
          { year: "Y2", revenue: "$7M", customers: "110 contractors", highlights: "Contractor network scaling" },
          { year: "Y3", revenue: "$18M", customers: "180 contractors", highlights: "Regional expansion" },
          { year: "Y4", revenue: "$36M", customers: "260 contractors", highlights: "First building owner partnerships" },
          { year: "Y5", revenue: "$62M", customers: "340 contractors", highlights: "Sustainable growth, profitable" }
        ],
        keyAssumptions: [
          "Contractor acquisition primary driver",
          "Slower building owner adoption without utility partnerships",
          "More capital-efficient growth path",
          "OEM competitive response possible"
        ]
      }
    },
    useOfFunds: [
      { category: "Engineering & Product", percentage: 42, amount: "$2.1M", details: "BAS integration protocols, platform build, data infrastructure" },
      { category: "Sales & Partnerships", percentage: 28, amount: "$1.4M", details: "Building owner BD, contractor onboarding, utility partnerships" },
      { category: "Protocol Development", percentage: 15, amount: "$750K", details: "BAS reverse engineering, interoperability standards, certifications" },
      { category: "Marketing", percentage: 10, amount: "$500K", details: "Contractor acquisition, industry positioning, thought leadership" },
      { category: "Operations", percentage: 5, amount: "$250K", details: "Legal, insurance, G&A" }
    ]
  },

  risks: [
    {
      risk: "OEM Retaliation",
      severity: "High",
      mitigation: "Focus on buildings with multi-vendor equipment. Document anticompetitive behavior. Build relationships with building owner CFOs frustrated by lock-in. Leverage right-to-repair momentum."
    },
    {
      risk: "BAS Protocol Complexity",
      severity: "High",
      mitigation: "Start with most common protocols (BACnet, Modbus). Hire OEM-experienced engineers. Build protocol library incrementally. Partner with BAS integration specialists."
    },
    {
      risk: "Contractor Quality Variability",
      severity: "High",
      mitigation: "Rigorous credentialing process. BAS certification requirements. Quality guarantee program with financial backing. Start with top-tier contractors and expand carefully."
    },
    {
      risk: "Building Owner Sales Cycles",
      severity: "Medium",
      mitigation: "Start with pilot programs. Target CFOs and sustainability officers with clear ROI. Partner with utilities for faster procurement via efficiency programs."
    },
    {
      risk: "Utility Program Dependency",
      severity: "Medium",
      mitigation: "Diversify across multiple utilities and geographies. Build direct building owner relationships. ESG compliance services not utility-dependent."
    },
    {
      risk: "OEM Acquisition of Contractors",
      severity: "Low",
      mitigation: "Build network loyalty through platform value. Offer contractors equity participation. Make network stickier than individual OEM relationships."
    }
  ],

  milestones: [
    { quarter: "Q1 2026", milestone: "Close seed round, hire core team", status: "target" },
    { quarter: "Q2 2026", milestone: "Launch MVP with 50 contractors in 3 markets", status: "target" },
    { quarter: "Q3 2026", milestone: "First building owner pilots (5 portfolios, 50+ buildings)", status: "target" },
    { quarter: "Q4 2026", milestone: "100 contractors, BAS extraction for top 5 platforms, $3.5M ARR", status: "target" },
    { quarter: "Q1 2027", milestone: "First utility program partnership (CA or NY)", status: "target" },
    { quarter: "Q2 2027", milestone: "10 building owner partnerships, ESG compliance product launch", status: "target" },
    { quarter: "Q3 2027", milestone: "Third-party optimization marketplace launch", status: "target" },
    { quarter: "Q4 2027", milestone: "Series A at $100-130M valuation", status: "target" }
  ],

  team: {
    hiring: [
      { role: "CTO", priority: "Critical", timeline: "Immediate", description: "BAS protocols, platform architecture, data systems" },
      { role: "VP Building Science", priority: "Critical", timeline: "Q1 2026", description: "HVAC engineering, energy optimization, contractor credentialing" },
      { role: "VP Sales", priority: "Critical", timeline: "Q2 2026", description: "Building owner partnerships, enterprise sales" },
      { role: "Head of Contractor Success", priority: "High", timeline: "Q2 2026", description: "Contractor onboarding, network growth, quality programs" }
    ]
  },

  ask: {
    amount: "$5M",
    round: "Seed",
    timeline: "Q1 2026",
    terms: "Priced round, standard seed terms",
    use: "Build contractor network platform, develop BAS data extraction protocols, establish utility partnerships",
    targetInvestors: [
      "Climate tech investors (Congruent, DCVC, Energy Impact Partners)",
      "Real estate tech funds (Fifth Wall, MetaProp)",
      "Utility strategic ventures",
      "Building automation strategics seeking interoperability"
    ]
  },

  sources: [
    { name: "Grand View Research - Commercial HVAC Market", url: "https://www.grandviewresearch.com/industry-analysis/commercial-hvac-market" },
    { name: "MarketsandMarkets - Building Automation Systems", url: "https://www.marketsandmarkets.com/Market-Reports/building-automation-system-market-408.html" },
    { name: "ASHRAE - BACnet Protocol Standards", url: "https://www.ashrae.org/technical-resources/bacnet" },
    { name: "NYC Local Law 97 - Building Performance Standards", url: "https://www.nyc.gov/site/buildings/codes/ll97.page" },
    { name: "DOE - Commercial Building Energy Consumption", url: "https://www.eia.gov/consumption/commercial/" },
    { name: "IMT - Building Performance Standards Map", url: "https://www.imt.org/resources/map-building-performance-standards/" }
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
      <Icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
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
                <h1 className="text-2xl font-bold text-cyan-400">{businessPlan.companyName}</h1>
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
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
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
            <section className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-xl p-8 border border-cyan-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="text-cyan-400" />
                Executive Summary
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-2">The Problem</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.problem}</p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-2">Our Solution</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.solution}</p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-2">Market Opportunity</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.market}</p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-2">The Ask</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.ask}</p>
                </div>
              </div>
            </section>

            {/* Key Stats */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard value="$45B" label="TAM" icon={Globe} />
                <StatCard value="20-30%" label="Energy Savings Potential" icon={TrendingUp} />
                <StatCard value="13:1" label="LTV:CAC Ratio" icon={BarChart3} />
                <StatCard value="$5M" label="Seed Ask" icon={DollarSign} />
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
                <Lightbulb className="text-cyan-400" />
                {businessPlan.solution.title}
              </h2>
              <p className="text-gray-400 mb-6">{businessPlan.solution.tagline}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {businessPlan.solution.pillars.map((pillar, i) => {
                  const IconComponent = pillar.icon === 'Network' ? Network :
                    pillar.icon === 'Database' ? Database :
                    pillar.icon === 'BarChart3' ? BarChart3 :
                    pillar.icon === 'Zap' ? Zap : Network
                  return (
                    <div key={i} className="bg-gray-800 rounded-lg p-5">
                      <IconComponent className="w-8 h-8 text-cyan-400 mb-3" />
                      <h3 className="font-semibold text-white mb-2">{pillar.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{pillar.description}</p>
                      <ul className="space-y-1">
                        {pillar.features.map((feature, j) => (
                          <li key={j} className="text-xs text-gray-500 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-cyan-400" />
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
            <section className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl p-8 border border-cyan-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="text-cyan-400" />
                The Ask
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">{businessPlan.ask.amount}</div>
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
              title={<div className="flex items-center gap-2"><Clock className="text-cyan-400" /> Why Now?</div>}
              defaultOpen={true}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => {
                  const IconComponent = factor.icon === 'Clock' ? Clock :
                    factor.icon === 'FileText' ? FileText :
                    factor.icon === 'DollarSign' ? DollarSign :
                    factor.icon === 'TrendingUp' ? TrendingUp :
                    factor.icon === 'Globe' ? Globe : Clock
                  return (
                    <div key={i} className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5 text-cyan-400" />
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
              title={<div className="flex items-center gap-2"><PieChart className="text-cyan-400" /> Market Size</div>}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { key: 'tam', label: 'TAM', data: businessPlan.marketSize.tam },
                  { key: 'sam', label: 'SAM', data: businessPlan.marketSize.sam },
                  { key: 'som', label: 'SOM (Y5)', data: businessPlan.marketSize.som }
                ].map(({ key, label, data }) => (
                  <div key={key} className="bg-gray-800 rounded-lg p-5">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-cyan-400">{data.value}</div>
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
              title={<div className="flex items-center gap-2"><Users className="text-cyan-400" /> Competitive Landscape</div>}
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
              <div className="bg-cyan-900/30 rounded-lg p-4 border border-cyan-800">
                <h3 className="font-semibold text-cyan-400 mb-2">Our Moat</h3>
                <p className="text-gray-300">{businessPlan.competition.moat}</p>
              </div>
            </ExpandableSection>

            {/* Business Model */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Briefcase className="text-cyan-400" /> Business Model</div>}
            >
              <p className="text-gray-400 mb-4">{businessPlan.businessModel.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {businessPlan.businessModel.revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{stream.name}</h3>
                      <span className="text-cyan-400 font-medium">{stream.pricing}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{stream.description}</p>
                    <div className="text-xs text-gray-500 mb-2">Gross Margin: {stream.margin}</div>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {stream.details.map((d, j) => (
                        <li key={j} className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-cyan-400" />
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
                    <div className="text-2xl font-bold text-cyan-400">{businessPlan.businessModel.unitEconomics.ltv}</div>
                    <div className="text-xs text-gray-400">LTV</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{businessPlan.businessModel.unitEconomics.cac}</div>
                    <div className="text-xs text-gray-400">CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{businessPlan.businessModel.unitEconomics.ltvCacRatio}</div>
                    <div className="text-xs text-gray-400">LTV:CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{businessPlan.businessModel.unitEconomics.paybackPeriod}</div>
                    <div className="text-xs text-gray-400">Payback</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{businessPlan.businessModel.unitEconomics.grossMargin}</div>
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
              title={<div className="flex items-center gap-2"><Shield className="text-cyan-400" /> Risks & Mitigations</div>}
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
              title={<div className="flex items-center gap-2"><Award className="text-cyan-400" /> Milestones & Timeline</div>}
            >
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />
                <div className="space-y-4">
                  {businessPlan.milestones.map((m, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-cyan-400" />
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-cyan-400 font-medium">{m.quarter}</span>
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
              title={<div className="flex items-center gap-2"><Users className="text-cyan-400" /> Team & Hiring</div>}
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
                <LineChart className="text-cyan-400" />
                Financial Projections
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* With Financing */}
                <div className="bg-gray-800 rounded-xl p-6 border-2 border-cyan-600">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withFinancing.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>

                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-2 text-gray-400">Year</th>
                          <th className="text-right py-2 text-gray-400">Revenue</th>
                          <th className="text-right py-2 text-gray-400">Contractors</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withFinancing.projections.map((proj, i) => (
                          <tr key={i} className="border-b border-gray-700/50">
                            <td className="py-2 text-white">{proj.year}</td>
                            <td className="py-2 text-right text-cyan-400 font-medium">{proj.revenue}</td>
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
                          <th className="text-right py-2 text-gray-400">Contractors</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutFinancing.projections.map((proj, i) => (
                          <tr key={i} className="border-b border-gray-700/50">
                            <td className="py-2 text-white">{proj.year}</td>
                            <td className="py-2 text-right text-cyan-400 font-medium">{proj.revenue}</td>
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
                <PieChart className="text-cyan-400" />
                Use of Funds
              </h2>
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{fund.percentage}%</div>
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
                          className="bg-cyan-500 h-4 rounded-full"
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
                <FileText className="text-cyan-400" />
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
                        className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
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
          <p className="mt-2">Part of the <a href="/tokens/#framework" className="text-cyan-400 hover:text-cyan-300">Ribbit Token Cap-Ex Framework</a></p>
        </div>
      </footer>
    </div>
  )
}
