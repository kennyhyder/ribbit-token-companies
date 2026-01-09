'use client'

import { useState } from 'react'
import {
  ArrowLeft, Target, TrendingUp, DollarSign, Users, Shield, AlertTriangle,
  CheckCircle, ExternalLink, ChevronDown, ChevronUp, Building2, Zap, BarChart3,
  Clock, Wrench, FileText, Briefcase, Lightbulb, Globe, Award, PieChart, LineChart, Car
} from 'lucide-react'

const businessPlan = {
  companyName: "ParkStructure",
  tagline: "The Network of Record for Parking Structure Maintenance",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Parking structures require specialized maintenance—concrete repair, waterproofing, lighting, gate systems. Fragmented contractor landscape, zero condition tracking, and deferred maintenance plagues 100,000+ US structures worth $500B+ in replacement value.",
    solution: "ParkStructure aggregates specialized parking contractors, creates digital condition records, and enables capital planning—becoming the inspection and maintenance system of record for parking assets.",
    market: "$30B parking industry with $5B annual maintenance spend. REITs, municipalities, and operators desperately need visibility into asset condition and contractor quality.",
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
      }
    ]
  },

  marketSize: {
    tam: {
      value: "$35B",
      description: "Total addressable market: Parking industry + maintenance",
      breakdown: [
        { segment: "US Parking Industry Revenue", value: "$30B", growth: "3.8% CAGR" },
        { segment: "Structure Maintenance Spend", value: "$5B", growth: "5.2% CAGR" },
        { segment: "Condition Assessment Services", value: "$400M", growth: "8% CAGR" }
      ]
    },
    sam: {
      value: "$1.8B",
      description: "Serviceable addressable market: Managed structures and institutional owners",
      breakdown: [
        { segment: "Operator-Managed Structures", value: "$800M", growth: "LAZ, SP+, ABM portfolios" },
        { segment: "REIT Parking Assets", value: "$500M", growth: "Office, retail, healthcare REITs" },
        { segment: "Municipal Structures", value: "$500M", growth: "City/county-owned facilities" }
      ]
    },
    som: {
      value: "$28M",
      description: "Year 5 revenue target: 4,000 structures, 300 contractors, institutional data licensing",
      breakdown: [
        { segment: "Owner SaaS", value: "$14M", growth: "4K structures @ $300/mo avg" },
        { segment: "Contractor Network Fees", value: "$8M", growth: "8% of service transactions" },
        { segment: "Data Licensing", value: "$4M", growth: "REITs, insurers, lenders" },
        { segment: "Inspection Services", value: "$2M", growth: "Condition assessments" }
      ]
    }
  },

  competition: {
    overview: "No comprehensive platform exists for parking structure lifecycle management. Point solutions exist for specific functions, but no integrated system connects contractors, conditions, and capital planning.",
    competitors: [
      {
        name: "Parking Operators (LAZ, SP+)",
        description: "Major operators manage maintenance internally. Could be partners or competitors.",
        strengths: ["Large portfolios", "Industry relationships", "Operational expertise"],
        weaknesses: ["Not technology companies", "Internal focus only", "No contractor marketplace", "Limited capital planning tools"],
        marketShare: "~40% of managed structures"
      },
      {
        name: "Specialized Contractors",
        description: "Walker Consultants, WGI, etc. do inspections and project management but aren't platforms.",
        strengths: ["Engineering expertise", "Inspection capabilities", "Established reputation"],
        weaknesses: ["Service companies not SaaS", "No marketplace", "Limited tech investment", "Project-based model"],
        marketShare: "Fragmented"
      },
      {
        name: "Facilities Management Platforms",
        description: "ServiceChannel, Corrigo, etc. Generic FM platforms not specialized for parking.",
        strengths: ["Enterprise scale", "Established brands", "Multi-industry"],
        weaknesses: ["Not parking-specific", "No structural expertise", "Miss specialized needs", "Generic condition tracking"],
        marketShare: "Used by some REITs"
      },
      {
        name: "Reserve Study Software",
        description: "Reserve Advisors, AssociationReserves, etc. Focus on HOAs, limited commercial capabilities.",
        strengths: ["Capital planning tools", "Reserve modeling", "Established in HOA market"],
        weaknesses: ["HOA focus", "No contractor network", "No condition monitoring", "Limited parking expertise"],
        marketShare: "N/A - adjacent market"
      }
    ],
    moat: "Network effects: More structures = better contractor matching = better condition data = more financing/insurance interest = more structures. First-mover in parking-specific vertical."
  },

  businessModel: {
    overview: "Three revenue streams: Owner SaaS for structure management, contractor transaction fees, and data licensing to institutional players.",
    revenueStreams: [
      {
        name: "Owner SaaS",
        description: "Monthly subscription for structure registry, condition tracking, and capital planning",
        pricing: "$199-$599/structure/month based on size",
        margin: "85%",
        details: [
          "Structure inventory & profiling",
          "Condition assessment tracking",
          "Contractor access & matching",
          "Capital planning tools",
          "Multi-portfolio management"
        ]
      },
      {
        name: "Contractor Network Fees",
        description: "Transaction fees on maintenance work booked through platform",
        pricing: "6-10% of project value",
        margin: "90%",
        details: [
          "Qualified contractor matching",
          "Price benchmarking",
          "Quality verification",
          "Payment processing",
          "Warranty management"
        ]
      },
      {
        name: "Data Licensing",
        description: "Structure condition data for REITs, insurers, and lenders",
        pricing: "$25K-$150K annual contracts",
        margin: "95%",
        details: [
          "Portfolio condition scores",
          "Maintenance benchmarks",
          "Capital requirement forecasts",
          "Risk assessment data",
          "Market intelligence"
        ]
      },
      {
        name: "Inspection Services",
        description: "Standardized condition assessments using platform methodology",
        pricing: "$2,500-$15,000 per structure",
        margin: "45%",
        details: [
          "Certified inspector network",
          "Standardized methodology",
          "Digital documentation",
          "Condition scoring",
          "Capital recommendations"
        ]
      }
    ],
    unitEconomics: {
      ltv: "$10,800",
      cac: "$1,200",
      ltvCacRatio: "9:1",
      paybackPeriod: "5 months",
      grossMargin: "75%",
      details: [
        "Average structure lifetime: 4 years on platform",
        "Monthly ARPU grows with capital planning attachment",
        "CAC: $700 digital + $500 sales",
        "Contractor fees provide expansion revenue"
      ]
    }
  },

  financials: {
    scenarios: {
      withFinancing: {
        name: "With REIT/Institutional Partnerships",
        description: "Partner with REITs and institutional owners for portfolio-wide deployments",
        projections: [
          { year: "Y1", revenue: "$1.2M", customers: "400 structures", highlights: "Platform launch, 2 operator pilots" },
          { year: "Y2", revenue: "$4.8M", customers: "1,400 structures", highlights: "REIT partnerships, contractor network" },
          { year: "Y3", revenue: "$12M", customers: "2,800 structures", highlights: "Data licensing launch" },
          { year: "Y4", revenue: "$21M", customers: "4,200 structures", highlights: "Municipal expansion" },
          { year: "Y5", revenue: "$35M", customers: "6,000 structures", highlights: "Market leader, M&A interest" }
        ],
        keyAssumptions: [
          "REIT partnerships drive 40% of growth",
          "Data licensing accelerates Year 3+",
          "Municipal sector opens Year 4",
          "Contractor network reaches critical mass Year 2"
        ]
      },
      withoutFinancing: {
        name: "Without Institutional Partnerships",
        description: "Direct sales to individual structure owners and smaller portfolios",
        projections: [
          { year: "Y1", revenue: "$800K", customers: "250 structures", highlights: "Platform launch, local markets" },
          { year: "Y2", revenue: "$2.8M", customers: "900 structures", highlights: "Regional expansion" },
          { year: "Y3", revenue: "$7M", customers: "1,800 structures", highlights: "Contractor network scaling" },
          { year: "Y4", revenue: "$14M", customers: "3,000 structures", highlights: "Organic growth" },
          { year: "Y5", revenue: "$24M", customers: "4,500 structures", highlights: "Sustainable profitability" }
        ],
        keyAssumptions: [
          "Direct sales to property managers",
          "Slower but capital-efficient growth",
          "Contractor network is primary value prop",
          "Data licensing develops organically"
        ]
      }
    },
    useOfFunds: [
      { category: "Engineering & Product", percentage: 40, amount: "$1.2M", details: "Platform, mobile apps, integrations" },
      { category: "Sales & Success", percentage: 30, amount: "$900K", details: "Enterprise sales, onboarding, support" },
      { category: "Contractor Network", percentage: 15, amount: "$450K", details: "Contractor recruitment, vetting programs" },
      { category: "Marketing", percentage: 10, amount: "$300K", details: "Industry events, content, partnerships" },
      { category: "Operations", percentage: 5, amount: "$150K", details: "Legal, compliance, G&A" }
    ]
  },

  risks: [
    {
      risk: "Long Sales Cycles",
      severity: "Medium",
      mitigation: "Start with parking operators who manage thousands of structures. One deal = hundreds of assets. Target decision-makers at asset management level."
    },
    {
      risk: "Contractor Quality Control",
      severity: "High",
      mitigation: "Rigorous vetting with license verification, insurance validation, and reference checks. Build quality reputation before scale."
    },
    {
      risk: "Data Liability Concerns",
      severity: "Medium",
      mitigation: "Clear disclaimers that platform facilitates not guarantees. Insurance coverage for inspection services. Legal review of all data licensing."
    },
    {
      risk: "Municipal Procurement",
      severity: "Medium",
      mitigation: "Start with private sector. Build reference base before tackling municipal RFP processes. Partner with existing municipal vendors."
    },
    {
      risk: "Competition from Operators",
      severity: "Low",
      mitigation: "Operators want to operate, not build software. Position as partner enabling their efficiency. White-label opportunities."
    },
    {
      risk: "Economic Sensitivity",
      severity: "Low",
      mitigation: "Maintenance is non-discretionary—deferred maintenance just gets more expensive. Actually saves money vs emergency repairs. Counter-cyclical in downturn."
    }
  ],

  milestones: [
    { quarter: "Q1 2026", milestone: "Close seed round, hire core team", status: "target" },
    { quarter: "Q2 2026", milestone: "Launch platform with 150 structures, 30 contractors", status: "target" },
    { quarter: "Q3 2026", milestone: "First operator pilot (LAZ or SP+ portfolio)", status: "target" },
    { quarter: "Q4 2026", milestone: "500 structures, condition assessment methodology", status: "target" },
    { quarter: "Q1 2027", milestone: "First REIT partnership", status: "target" },
    { quarter: "Q2 2027", milestone: "1,500 structures, 100 contractors", status: "target" },
    { quarter: "Q3 2027", milestone: "Data licensing first contracts", status: "target" },
    { quarter: "Q4 2027", milestone: "Series A at $40-60M valuation", status: "target" }
  ],

  team: {
    hiring: [
      { role: "CTO", priority: "Critical", timeline: "Immediate", description: "Platform architecture, mobile apps, integrations" },
      { role: "VP Sales", priority: "Critical", timeline: "Q2 2026", description: "Enterprise sales, operator relationships" },
      { role: "Head of Contractor Network", priority: "High", timeline: "Q2 2026", description: "Contractor recruitment, quality assurance" },
      { role: "Technical Advisor", priority: "High", timeline: "Q1 2026", description: "Parking/structural engineering expertise" }
    ]
  },

  ask: {
    amount: "$3M",
    round: "Seed",
    timeline: "Q1 2026",
    terms: "Priced round, standard seed terms",
    use: "Build platform, onboard contractor network, pilot with major operators, prove structure intelligence value",
    targetInvestors: [
      "PropTech investors",
      "Vertical SaaS specialists",
      "Infrastructure-focused funds",
      "Strategic angels from parking/real estate industry"
    ]
  },

  sources: [
    { name: "IBISWorld Parking Industry", url: "https://www.ibisworld.com/united-states/market-research-reports/parking-lots-garages-industry/" },
    { name: "National Parking Association", url: "https://weareparking.org" },
    { name: "Walker Consultants (Industry Data)", url: "https://www.walkerconsultants.com" },
    { name: "International Parking & Mobility Institute", url: "https://parking-mobility.org" }
  ]
}

function ExpandableSection({ title, children, defaultOpen = false }: {
  title: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-gray-600 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-gray-700 flex items-center justify-between hover:bg-gray-650 transition-colors"
      >
        <div className="font-semibold text-lg text-white">{title}</div>
        {isOpen ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-800">
          {children}
        </div>
      )}
    </div>
  )
}

function StatCard({ value, label, icon: Icon }: { value: string; label: string; icon: any }) {
  return (
    <div className="bg-gray-700 rounded-lg p-4 text-center">
      <Icon className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}

export default function BusinessPlanPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'detailed' | 'financials'>('overview')

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4">
              <a href="/tokens/#framework" className="text-gray-400 hover:text-white transition-colors mt-1">
                <ArrowLeft className="w-5 h-5" />
              </a>
              <div>
                <h1 className="text-2xl font-bold text-yellow-400">{businessPlan.companyName}</h1>
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
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-10">
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
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
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
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <section className="bg-gradient-to-r from-gray-700/50 to-yellow-900/30 rounded-xl p-8 border border-yellow-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="text-yellow-400" />
                Executive Summary
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-yellow-400 font-semibold mb-2">The Problem</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.problem}</p>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-semibold mb-2">Our Solution</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.solution}</p>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-semibold mb-2">Market Opportunity</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.market}</p>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-semibold mb-2">The Ask</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.ask}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard value="$35B" label="TAM" icon={Globe} />
                <StatCard value="100K+" label="US Parking Structures" icon={Building2} />
                <StatCard value="9:1" label="LTV:CAC Ratio" icon={TrendingUp} />
                <StatCard value="$3M" label="Seed Ask" icon={DollarSign} />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <AlertTriangle className="text-yellow-400" />
                {businessPlan.problem.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.problem.points.map((point, i) => (
                  <div key={i} className="bg-gray-700 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-white">{point.title}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-yellow-400">{point.stat}</div>
                        <div className="text-xs text-gray-500">{point.statLabel}</div>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{point.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Lightbulb className="text-yellow-400" />
                {businessPlan.solution.title}
              </h2>
              <p className="text-gray-400 mb-6">{businessPlan.solution.tagline}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {businessPlan.solution.pillars.map((pillar, i) => {
                  const IconComponent = pillar.icon === 'Car' ? Car :
                    pillar.icon === 'Wrench' ? Wrench :
                    pillar.icon === 'BarChart3' ? BarChart3 :
                    pillar.icon === 'Shield' ? Shield : Car
                  return (
                    <div key={i} className="bg-gray-700 rounded-lg p-5">
                      <IconComponent className="w-8 h-8 text-yellow-400 mb-3" />
                      <h3 className="font-semibold text-white mb-2">{pillar.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{pillar.description}</p>
                      <ul className="space-y-1">
                        {pillar.features.map((feature, j) => (
                          <li key={j} className="text-xs text-gray-500 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-yellow-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </section>

            <section className="bg-gradient-to-r from-gray-700/30 to-yellow-900/20 rounded-xl p-8 border border-yellow-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="text-yellow-400" />
                The Ask
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400">{businessPlan.ask.amount}</div>
                  <div className="text-gray-400">{businessPlan.ask.round} Round</div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-300 mb-4">{businessPlan.ask.use}</p>
                  <div className="flex flex-wrap gap-2">
                    {businessPlan.ask.targetInvestors.map((investor, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                        {investor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'detailed' && (
          <div className="space-y-4">
            <ExpandableSection title={<div className="flex items-center gap-2"><Clock className="text-yellow-400" /> Why Now?</div>} defaultOpen={true}>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => {
                  const IconComponent = factor.icon === 'TrendingUp' ? TrendingUp : factor.icon === 'Zap' ? Zap : factor.icon === 'Users' ? Users : Shield
                  return (
                    <div key={i} className="bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5 text-yellow-400" />
                        <h3 className="font-semibold text-white">{factor.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{factor.detail}</p>
                    </div>
                  )
                })}
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><PieChart className="text-yellow-400" /> Market Size</div>}>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { key: 'tam', label: 'TAM', data: businessPlan.marketSize.tam },
                  { key: 'sam', label: 'SAM', data: businessPlan.marketSize.sam },
                  { key: 'som', label: 'SOM (Y5)', data: businessPlan.marketSize.som }
                ].map(({ key, label, data }) => (
                  <div key={key} className="bg-gray-700 rounded-lg p-5">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-yellow-400">{data.value}</div>
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

            <ExpandableSection title={<div className="flex items-center gap-2"><Users className="text-yellow-400" /> Competitive Landscape</div>}>
              <p className="text-gray-400 mb-4">{businessPlan.competition.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {businessPlan.competition.competitors.map((comp, i) => (
                  <div key={i} className="bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">{comp.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{comp.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="text-green-400 font-medium mb-1">Strengths</div>
                        <ul className="text-gray-400 space-y-1">{comp.strengths.map((s, j) => <li key={j}>+ {s}</li>)}</ul>
                      </div>
                      <div>
                        <div className="text-yellow-400 font-medium mb-1">Weaknesses</div>
                        <ul className="text-gray-400 space-y-1">{comp.weaknesses.map((w, j) => <li key={j}>- {w}</li>)}</ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-yellow-900/30 rounded-lg p-4 border border-yellow-700">
                <h3 className="font-semibold text-yellow-400 mb-2">Our Moat</h3>
                <p className="text-gray-300">{businessPlan.competition.moat}</p>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Briefcase className="text-yellow-400" /> Business Model</div>}>
              <p className="text-gray-400 mb-4">{businessPlan.businessModel.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {businessPlan.businessModel.revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{stream.name}</h3>
                      <span className="text-yellow-400 font-medium">{stream.pricing}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{stream.description}</p>
                    <div className="text-xs text-gray-500 mb-2">Gross Margin: {stream.margin}</div>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {stream.details.map((d, j) => (<li key={j} className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-yellow-400" />{d}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-4">Unit Economics</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                  <div className="text-center"><div className="text-2xl font-bold text-yellow-400">{businessPlan.businessModel.unitEconomics.ltv}</div><div className="text-xs text-gray-400">LTV</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-yellow-400">{businessPlan.businessModel.unitEconomics.cac}</div><div className="text-xs text-gray-400">CAC</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-yellow-400">{businessPlan.businessModel.unitEconomics.ltvCacRatio}</div><div className="text-xs text-gray-400">LTV:CAC</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-yellow-400">{businessPlan.businessModel.unitEconomics.paybackPeriod}</div><div className="text-xs text-gray-400">Payback</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-yellow-400">{businessPlan.businessModel.unitEconomics.grossMargin}</div><div className="text-xs text-gray-400">Gross Margin</div></div>
                </div>
                <ul className="text-sm text-gray-400 space-y-1">{businessPlan.businessModel.unitEconomics.details.map((d, i) => <li key={i}>• {d}</li>)}</ul>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Shield className="text-yellow-400" /> Risks & Mitigations</div>}>
              <div className="space-y-3">
                {businessPlan.risks.map((risk, i) => (
                  <div key={i} className="bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{risk.risk}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${risk.severity === 'High' ? 'bg-red-900/50 text-red-400' : risk.severity === 'Medium' ? 'bg-yellow-900/50 text-yellow-400' : 'bg-green-900/50 text-green-400'}`}>{risk.severity}</span>
                    </div>
                    <p className="text-gray-400 text-sm"><strong className="text-gray-300">Mitigation:</strong> {risk.mitigation}</p>
                  </div>
                ))}
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Award className="text-yellow-400" /> Milestones & Timeline</div>}>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-600" />
                <div className="space-y-4">
                  {businessPlan.milestones.map((m, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-yellow-400" />
                      <div className="bg-gray-700 rounded-lg p-4">
                        <span className="text-yellow-400 font-medium">{m.quarter}</span>
                        <p className="text-gray-300">{m.milestone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Users className="text-yellow-400" /> Team & Hiring</div>}>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.team.hiring.map((hire, i) => (
                  <div key={i} className="bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{hire.role}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${hire.priority === 'Critical' ? 'bg-red-900/50 text-red-400' : 'bg-yellow-900/50 text-yellow-400'}`}>{hire.priority}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-1">{hire.description}</p>
                    <p className="text-xs text-gray-500">Timeline: {hire.timeline}</p>
                  </div>
                ))}
              </div>
            </ExpandableSection>
          </div>
        )}

        {activeTab === 'financials' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><LineChart className="text-yellow-400" />Financial Projections</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-700 rounded-xl p-6 border-2 border-yellow-600">
                  <div className="flex items-center gap-2 mb-2"><Zap className="text-yellow-400" /><h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withFinancing.name}</h3></div>
                  <p className="text-gray-400 text-sm mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>
                  <table className="w-full text-sm mb-4">
                    <thead><tr className="border-b border-gray-600"><th className="text-left py-2 text-gray-400">Year</th><th className="text-right py-2 text-gray-400">Revenue</th><th className="text-right py-2 text-gray-400">Structures</th></tr></thead>
                    <tbody>{businessPlan.financials.scenarios.withFinancing.projections.map((proj, i) => (<tr key={i} className="border-b border-gray-600/50"><td className="py-2 text-white">{proj.year}</td><td className="py-2 text-right text-yellow-400 font-medium">{proj.revenue}</td><td className="py-2 text-right text-gray-300">{proj.customers}</td></tr>))}</tbody>
                  </table>
                  <div className="text-xs text-gray-400"><div className="font-medium mb-1">Key Assumptions:</div><ul className="space-y-1">{businessPlan.financials.scenarios.withFinancing.keyAssumptions.map((a, i) => <li key={i}>• {a}</li>)}</ul></div>
                </div>
                <div className="bg-gray-700 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2"><Building2 className="text-gray-400" /><h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withoutFinancing.name}</h3></div>
                  <p className="text-gray-400 text-sm mb-4">{businessPlan.financials.scenarios.withoutFinancing.description}</p>
                  <table className="w-full text-sm mb-4">
                    <thead><tr className="border-b border-gray-600"><th className="text-left py-2 text-gray-400">Year</th><th className="text-right py-2 text-gray-400">Revenue</th><th className="text-right py-2 text-gray-400">Structures</th></tr></thead>
                    <tbody>{businessPlan.financials.scenarios.withoutFinancing.projections.map((proj, i) => (<tr key={i} className="border-b border-gray-600/50"><td className="py-2 text-white">{proj.year}</td><td className="py-2 text-right text-yellow-400 font-medium">{proj.revenue}</td><td className="py-2 text-right text-gray-300">{proj.customers}</td></tr>))}</tbody>
                  </table>
                  <div className="text-xs text-gray-400"><div className="font-medium mb-1">Key Assumptions:</div><ul className="space-y-1">{businessPlan.financials.scenarios.withoutFinancing.keyAssumptions.map((a, i) => <li key={i}>• {a}</li>)}</ul></div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><PieChart className="text-yellow-400" />Use of Funds</h2>
              <div className="bg-gray-700 rounded-xl p-6">
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (<div key={i} className="text-center"><div className="text-2xl font-bold text-yellow-400">{fund.percentage}%</div><div className="text-sm font-medium text-white">{fund.category}</div><div className="text-xs text-gray-400">{fund.amount}</div></div>))}
                </div>
                <div className="space-y-3">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (<div key={i} className="flex items-center gap-4"><div className="w-32 text-sm text-gray-400">{fund.category}</div><div className="flex-1 bg-gray-600 rounded-full h-4"><div className="bg-yellow-500 h-4 rounded-full" style={{ width: `${fund.percentage}%` }} /></div><div className="w-24 text-sm text-right text-white">{fund.amount}</div></div>))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><FileText className="text-yellow-400" />Sources</h2>
              <div className="bg-gray-700 rounded-lg p-4">
                <ul className="space-y-2">{businessPlan.sources.map((source, i) => (<li key={i}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2"><ExternalLink className="w-4 h-4" />{source.name}</a></li>))}</ul>
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 border-t border-gray-700 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          <p>{businessPlan.companyName} Business Plan • {businessPlan.version} • {businessPlan.date}</p>
          <p className="mt-2">Part of the <a href="/tokens/#framework" className="text-yellow-400 hover:text-yellow-300">Ribbit Token Cap-Ex Framework</a></p>
        </div>
      </footer>
    </div>
  )
}
