'use client'

import { useState } from 'react'
import {
  ArrowLeft, Target, TrendingUp, DollarSign, Users, Shield, AlertTriangle,
  CheckCircle, ExternalLink, ChevronDown, ChevronUp, Building2, Zap, BarChart3,
  Clock, Wrench, FileText, Briefcase, Lightbulb, Globe, Award, PieChart, LineChart,
  Flame, Droplets, Building, ClipboardCheck
} from 'lucide-react'

const businessPlan = {
  companyName: "FireShield",
  tagline: "The Credentialed Registry for Fire Suppression Systems",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Fire sprinkler and suppression systems are required in most commercial buildings and inspected annually, yet there is zero data aggregation. Inspectors are fragmented local contractors with no standardized reporting. Building owners, insurers, and regulators have no visibility into system quality across portfolios.",
    solution: "FireShield aggregates inspection data, system specifications, and contractor performance into a unified registry. We create the 'building safety score' that insurers need for underwriting, property managers need for compliance, and contractors need for competitive differentiation.",
    market: "$20B fire protection equipment market with $4B+ in annual commercial fire insurance premiums. Property managers need compliance automation, insurers need risk data, and contractors need digital tools to compete.",
    ask: "$4M Seed Round to build the registry platform, onboard inspection contractors, and establish partnerships with commercial insurance carriers and property management software providers."
  },

  problem: {
    title: "The Fire Safety Data Blindspot",
    points: [
      {
        title: "Fragmented Inspection Industry",
        detail: "Thousands of local contractors perform annual inspections with paper forms or proprietary systems. No data sharing, no standardization, no way to compare contractor quality.",
        stat: "15K+",
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
        stat: "$4B+",
        statLabel: "annual commercial fire insurance premiums"
      },
      {
        title: "Upgrade Financing Gap",
        detail: "Building owners defer critical fire system upgrades due to capital constraints. No mechanism connects upgrade financing to insurance savings.",
        stat: "30%",
        statLabel: "of systems have deferred maintenance"
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
        detail: "Carriers investing heavily in data-driven underwriting. Fire risk is a major line item they cannot accurately assess today.",
        icon: "Shield"
      },
      {
        title: "Contractor Consolidation",
        detail: "Fire protection industry consolidating through PE rollups. Larger players need digital tools to manage multi-region operations.",
        icon: "Users"
      },
      {
        title: "Regulatory Pressure",
        detail: "Post-pandemic building safety regulations increasing. Jurisdictions requiring more detailed reporting and faster compliance verification.",
        icon: "Zap"
      }
    ]
  },

  marketSize: {
    tam: {
      value: "$20B",
      description: "Total addressable market: Fire protection equipment and services",
      breakdown: [
        { segment: "Fire Protection Equipment", value: "$12B", growth: "6.2% CAGR" },
        { segment: "Fire System Services", value: "$5B", growth: "Inspection, maintenance, monitoring" },
        { segment: "Commercial Fire Insurance", value: "$4B", growth: "Premium optimization opportunity" },
        { segment: "Fire System Financing", value: "$2B", growth: "Upgrade and replacement lending" }
      ]
    },
    sam: {
      value: "$2.4B",
      description: "Serviceable addressable market: Digital fire safety data and services",
      breakdown: [
        { segment: "Inspection Software", value: "$800M", growth: "Contractor SaaS opportunity" },
        { segment: "Insurance Data Services", value: "$600M", growth: "Carrier integration value" },
        { segment: "Property Mgmt Integration", value: "$500M", growth: "Compliance automation" },
        { segment: "Financing Facilitation", value: "$500M", growth: "Origination fees on upgrades" }
      ]
    },
    som: {
      value: "$45M",
      description: "Year 5 revenue target: 2,000 contractor partners, 50K buildings registered, 15 insurance integrations",
      breakdown: [
        { segment: "Contractor SaaS", value: "$18M", growth: "2,000 contractors @ $750/mo avg" },
        { segment: "Insurance Data Fees", value: "$12M", growth: "15 carriers @ $800K/yr avg" },
        { segment: "Property Manager Platform", value: "$9M", growth: "Enterprise compliance tools" },
        { segment: "Financing Facilitation", value: "$6M", growth: "1.5% origination on $400M volume" }
      ]
    }
  },

  competition: {
    overview: "Fire protection software is fragmented across inspection apps, compliance tools, and insurance platforms with no unified data layer.",
    competitors: [
      {
        name: "BuildingReports",
        description: "Inspection reporting platform for fire protection contractors. Strong in compliance documentation.",
        strengths: ["Established contractor base", "NFPA compliance", "Mobile inspection app"],
        weaknesses: ["No insurance integration", "No financing", "Single-building focus", "Limited analytics"],
        marketShare: "~15% of digital inspections"
      },
      {
        name: "Compliance Engine",
        description: "Property management compliance software. Tracks inspection schedules but not actual system data.",
        strengths: ["PM software integrations", "Multi-system tracking", "Enterprise focus"],
        weaknesses: ["Scheduling only", "No contractor tools", "No risk scoring", "No insurance value"],
        marketShare: "Enterprise PM segment"
      },
      {
        name: "Insurance Carrier In-House",
        description: "Some large carriers building internal fire risk databases from inspections they require.",
        strengths: ["Direct underwriting use", "Captive data source", "Existing relationships"],
        weaknesses: ["Siloed by carrier", "No contractor incentive", "Limited coverage", "Slow development"],
        marketShare: "Top 5 carriers only"
      },
      {
        name: "Paper/Excel Status Quo",
        description: "Majority of market still uses paper inspection forms, PDF reports, and manual spreadsheet tracking.",
        strengths: ["No change required", "Familiar to contractors", "Low direct cost"],
        weaknesses: ["No aggregation", "Compliance risk", "No analytics", "Time-consuming"],
        marketShare: "70%+ of market"
      }
    ],
    moat: "Network effects: More contractors = more buildings = more data = better scores = more insurance value = more contractor incentive. Registry becomes the authoritative source for fire system data that all parties rely on."
  },

  businessModel: {
    overview: "Four revenue streams: Contractor SaaS, insurance data services, property management platform, and upgrade financing facilitation.",
    revenueStreams: [
      {
        name: "Contractor SaaS",
        description: "Subscription platform for fire protection contractors to manage inspections, reporting, and client relationships",
        pricing: "$299-$1,499/month based on volume",
        margin: "85%",
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
      ltv: "$33,000",
      cac: "$3,000",
      ltvCacRatio: "11:1",
      paybackPeriod: "5 months",
      grossMargin: "78%",
      details: [
        "Blended across contractor and enterprise segments",
        "Contractor retention: 92% annual (sticky workflow tool)",
        "Enterprise contracts: 4+ year average lifetime",
        "CAC: Trade shows + inside sales + contractor referrals"
      ]
    }
  },

  financials: {
    scenarios: {
      withFinancing: {
        name: "With Insurance/Financing Cap-Ex Angle",
        description: "Leverage Cap-Ex positioning: Fire suppression upgrades as capital investments with insurance-linked financing",
        projections: [
          { year: "Y1", revenue: "$1.8M", customers: "300 contractors, 8K buildings", highlights: "Platform launch, first insurance pilots" },
          { year: "Y2", revenue: "$7M", customers: "700 contractors, 22K buildings", highlights: "Insurance integrations live, financing pilot" },
          { year: "Y3", revenue: "$18M", customers: "1,200 contractors, 38K buildings", highlights: "National contractor coverage, financing scale" },
          { year: "Y4", revenue: "$32M", customers: "1,700 contractors, 48K buildings", highlights: "Insurance standard, financing volume" },
          { year: "Y5", revenue: "$52M", customers: "2,200 contractors, 58K buildings", highlights: "Market leader, M&A interest" }
        ],
        keyAssumptions: [
          "Insurance carriers mandate FireShield data",
          "Financing facilitation scales with registry",
          "Premium reduction drives adoption",
          "Network effects accelerate Year 3+"
        ]
      },
      withoutFinancing: {
        name: "Without Cap-Ex Financing Angle",
        description: "Contractor SaaS and data services without insurance-linked upgrade financing",
        projections: [
          { year: "Y1", revenue: "$1.2M", customers: "200 contractors, 5K buildings", highlights: "Platform launch" },
          { year: "Y2", revenue: "$4M", customers: "450 contractors, 14K buildings", highlights: "Regional expansion" },
          { year: "Y3", revenue: "$10M", customers: "800 contractors, 26K buildings", highlights: "First insurance deals" },
          { year: "Y4", revenue: "$18M", customers: "1,200 contractors, 36K buildings", highlights: "National presence" },
          { year: "Y5", revenue: "$28M", customers: "1,600 contractors, 45K buildings", highlights: "Sustainable growth" }
        ],
        keyAssumptions: [
          "SaaS-only revenue model",
          "Slower insurance adoption",
          "No financing revenue stream",
          "Organic contractor growth"
        ]
      }
    },
    useOfFunds: [
      { category: "Engineering & Product", percentage: 40, amount: "$1.6M", details: "Platform development, mobile apps, insurance APIs" },
      { category: "Sales & Partnerships", percentage: 25, amount: "$1.0M", details: "Contractor acquisition, insurance BD, PM partnerships" },
      { category: "Contractor Success", percentage: 15, amount: "$600K", details: "Onboarding, training, support, community" },
      { category: "Data & Analytics", percentage: 12, amount: "$480K", details: "Scoring algorithms, risk models, benchmarking" },
      { category: "Operations", percentage: 8, amount: "$320K", details: "G&A, legal, compliance, office" }
    ]
  },

  risks: [
    {
      risk: "Contractor Adoption Resistance",
      severity: "High",
      mitigation: "Free tier for small contractors. Demonstrate time savings and client retention benefits. Partner with industry associations for credibility."
    },
    {
      risk: "Insurance Carrier Sales Cycle",
      severity: "High",
      mitigation: "Start with insurtech companies and MGAs with faster decision cycles. Pilot programs with measurable ROI before enterprise deals."
    },
    {
      risk: "Data Quality Variability",
      severity: "Medium",
      mitigation: "Standardized forms with validation. Photo requirements for key data points. Contractor scoring based on data quality."
    },
    {
      risk: "Regulatory Fragmentation",
      severity: "Medium",
      mitigation: "Start in states with standardized requirements. Build jurisdiction mapping into platform. Partner with NFPA for standards alignment."
    },
    {
      risk: "Competitor Response",
      severity: "Low",
      mitigation: "First-mover advantage in aggregated data. Network effects create barriers. Insurance relationships are sticky once established."
    },
    {
      risk: "Economic Downturn",
      severity: "Low",
      mitigation: "Fire inspections are legally required regardless of economy. Compliance spending is non-discretionary for building owners."
    }
  ],

  milestones: [
    { quarter: "Q1 2026", milestone: "Close seed round, hire core team", status: "target" },
    { quarter: "Q2 2026", milestone: "Launch contractor platform with 100 beta partners", status: "target" },
    { quarter: "Q3 2026", milestone: "5,000 buildings in registry, first PM integrations", status: "target" },
    { quarter: "Q4 2026", milestone: "First insurance carrier pilot, 300 contractors", status: "target" },
    { quarter: "Q1 2027", milestone: "Building Safety Score v1.0 launch", status: "target" },
    { quarter: "Q2 2027", milestone: "15,000 buildings, 500 contractors, financing pilot", status: "target" },
    { quarter: "Q3 2027", milestone: "Insurance carrier production integration", status: "target" },
    { quarter: "Q4 2027", milestone: "Series A at $50-70M valuation", status: "target" }
  ],

  team: {
    hiring: [
      { role: "CTO", priority: "Critical", timeline: "Immediate", description: "Platform architecture, mobile apps, insurance API integration" },
      { role: "VP Contractor Success", priority: "Critical", timeline: "Q1 2026", description: "Contractor onboarding, training, community building" },
      { role: "VP Sales", priority: "High", timeline: "Q2 2026", description: "Insurance BD, property management partnerships" },
      { role: "Head of Data Science", priority: "High", timeline: "Q2 2026", description: "Building Safety Score algorithm, risk modeling" }
    ]
  },

  ask: {
    amount: "$4M",
    round: "Seed",
    timeline: "Q1 2026",
    terms: "Priced round, standard seed terms",
    use: "Build registry platform, onboard contractor network, establish insurance carrier partnerships, launch financing pilot",
    targetInvestors: [
      "PropTech and construction tech investors",
      "Insurance/insurtech focused funds",
      "Commercial real estate VCs",
      "Strategic angels from fire protection industry"
    ]
  },

  sources: [
    { name: "NFPA Fire Protection Industry Statistics", url: "https://www.nfpa.org/News-and-Research/Data-research-and-tools/US-Fire-Problem" },
    { name: "IBISWorld Fire Protection Services", url: "https://www.ibisworld.com/united-states/market-research-reports/fire-protection-industry/" },
    { name: "Insurance Information Institute - Fire Losses", url: "https://www.iii.org/fact-statistic/facts-statistics-fire" },
    { name: "AFSA Fire Sprinkler Industry Data", url: "https://firesprinkler.org/advocacy/fire-sprinkler-statistics/" }
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
      <Icon className="w-6 h-6 text-orange-400 mx-auto mb-2" />
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
                <h1 className="text-2xl font-bold text-orange-400">{businessPlan.companyName}</h1>
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
                    ? 'text-orange-400 border-b-2 border-orange-400'
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
            <section className="bg-gradient-to-r from-orange-900/50 to-red-900/50 rounded-xl p-8 border border-orange-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="text-orange-400" />
                Executive Summary
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-orange-400 font-semibold mb-2">The Problem</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.problem}</p>
                </div>
                <div>
                  <h3 className="text-orange-400 font-semibold mb-2">Our Solution</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.solution}</p>
                </div>
                <div>
                  <h3 className="text-orange-400 font-semibold mb-2">Market Opportunity</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.market}</p>
                </div>
                <div>
                  <h3 className="text-orange-400 font-semibold mb-2">The Ask</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.ask}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard value="$20B" label="TAM" icon={Globe} />
                <StatCard value="15K+" label="US Fire Protection Contractors" icon={Users} />
                <StatCard value="11:1" label="LTV:CAC Ratio" icon={TrendingUp} />
                <StatCard value="$4M" label="Seed Ask" icon={DollarSign} />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <AlertTriangle className="text-orange-400" />
                {businessPlan.problem.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.problem.points.map((point, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-white">{point.title}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-400">{point.stat}</div>
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
                <Lightbulb className="text-orange-400" />
                {businessPlan.solution.title}
              </h2>
              <p className="text-gray-400 mb-6">{businessPlan.solution.tagline}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {businessPlan.solution.pillars.map((pillar, i) => {
                  const IconComponent = pillar.icon === 'ClipboardCheck' ? ClipboardCheck :
                    pillar.icon === 'Building' ? Building :
                    pillar.icon === 'Shield' ? Shield :
                    pillar.icon === 'DollarSign' ? DollarSign : Flame
                  return (
                    <div key={i} className="bg-gray-800 rounded-lg p-5">
                      <IconComponent className="w-8 h-8 text-orange-400 mb-3" />
                      <h3 className="font-semibold text-white mb-2">{pillar.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{pillar.description}</p>
                      <ul className="space-y-1">
                        {pillar.features.map((feature, j) => (
                          <li key={j} className="text-xs text-gray-500 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-orange-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </section>

            <section className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-xl p-8 border border-orange-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="text-orange-400" />
                The Ask
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400">{businessPlan.ask.amount}</div>
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

        {activeTab === 'detailed' && (
          <div className="space-y-4">
            <ExpandableSection title={<div className="flex items-center gap-2"><Clock className="text-orange-400" /> Why Now?</div>} defaultOpen={true}>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => {
                  const IconComponent = factor.icon === 'TrendingUp' ? TrendingUp : factor.icon === 'Zap' ? Zap : factor.icon === 'Users' ? Users : Shield
                  return (
                    <div key={i} className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5 text-orange-400" />
                        <h3 className="font-semibold text-white">{factor.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{factor.detail}</p>
                    </div>
                  )
                })}
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><PieChart className="text-orange-400" /> Market Size</div>}>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { key: 'tam', label: 'TAM', data: businessPlan.marketSize.tam },
                  { key: 'sam', label: 'SAM', data: businessPlan.marketSize.sam },
                  { key: 'som', label: 'SOM (Y5)', data: businessPlan.marketSize.som }
                ].map(({ key, label, data }) => (
                  <div key={key} className="bg-gray-800 rounded-lg p-5">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-orange-400">{data.value}</div>
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

            <ExpandableSection title={<div className="flex items-center gap-2"><Users className="text-orange-400" /> Competitive Landscape</div>}>
              <p className="text-gray-400 mb-4">{businessPlan.competition.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {businessPlan.competition.competitors.map((comp, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">{comp.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{comp.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="text-green-400 font-medium mb-1">Strengths</div>
                        <ul className="text-gray-400 space-y-1">{comp.strengths.map((s, j) => <li key={j}>+ {s}</li>)}</ul>
                      </div>
                      <div>
                        <div className="text-orange-400 font-medium mb-1">Weaknesses</div>
                        <ul className="text-gray-400 space-y-1">{comp.weaknesses.map((w, j) => <li key={j}>- {w}</li>)}</ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-orange-900/30 rounded-lg p-4 border border-orange-800">
                <h3 className="font-semibold text-orange-400 mb-2">Our Moat</h3>
                <p className="text-gray-300">{businessPlan.competition.moat}</p>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Briefcase className="text-orange-400" /> Business Model</div>}>
              <p className="text-gray-400 mb-4">{businessPlan.businessModel.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {businessPlan.businessModel.revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{stream.name}</h3>
                      <span className="text-orange-400 font-medium">{stream.pricing}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{stream.description}</p>
                    <div className="text-xs text-gray-500 mb-2">Gross Margin: {stream.margin}</div>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {stream.details.map((d, j) => (<li key={j} className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-orange-400" />{d}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-4">Unit Economics</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                  <div className="text-center"><div className="text-2xl font-bold text-orange-400">{businessPlan.businessModel.unitEconomics.ltv}</div><div className="text-xs text-gray-400">LTV</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-orange-400">{businessPlan.businessModel.unitEconomics.cac}</div><div className="text-xs text-gray-400">CAC</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-orange-400">{businessPlan.businessModel.unitEconomics.ltvCacRatio}</div><div className="text-xs text-gray-400">LTV:CAC</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-orange-400">{businessPlan.businessModel.unitEconomics.paybackPeriod}</div><div className="text-xs text-gray-400">Payback</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-orange-400">{businessPlan.businessModel.unitEconomics.grossMargin}</div><div className="text-xs text-gray-400">Gross Margin</div></div>
                </div>
                <ul className="text-sm text-gray-400 space-y-1">{businessPlan.businessModel.unitEconomics.details.map((d, i) => <li key={i}>• {d}</li>)}</ul>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Shield className="text-orange-400" /> Risks & Mitigations</div>}>
              <div className="space-y-3">
                {businessPlan.risks.map((risk, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{risk.risk}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${risk.severity === 'High' ? 'bg-red-900/50 text-red-400' : risk.severity === 'Medium' ? 'bg-yellow-900/50 text-yellow-400' : 'bg-green-900/50 text-green-400'}`}>{risk.severity}</span>
                    </div>
                    <p className="text-gray-400 text-sm"><strong className="text-gray-300">Mitigation:</strong> {risk.mitigation}</p>
                  </div>
                ))}
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Award className="text-orange-400" /> Milestones & Timeline</div>}>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />
                <div className="space-y-4">
                  {businessPlan.milestones.map((m, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-orange-400" />
                      <div className="bg-gray-800 rounded-lg p-4">
                        <span className="text-orange-400 font-medium">{m.quarter}</span>
                        <p className="text-gray-300">{m.milestone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Users className="text-orange-400" /> Team & Hiring</div>}>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.team.hiring.map((hire, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{hire.role}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${hire.priority === 'Critical' ? 'bg-orange-900/50 text-orange-400' : 'bg-yellow-900/50 text-yellow-400'}`}>{hire.priority}</span>
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
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><LineChart className="text-orange-400" />Financial Projections</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-xl p-6 border-2 border-orange-600">
                  <div className="flex items-center gap-2 mb-2"><Zap className="text-orange-400" /><h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withFinancing.name}</h3></div>
                  <p className="text-gray-400 text-sm mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>
                  <table className="w-full text-sm mb-4">
                    <thead><tr className="border-b border-gray-700"><th className="text-left py-2 text-gray-400">Year</th><th className="text-right py-2 text-gray-400">Revenue</th><th className="text-right py-2 text-gray-400">Network</th></tr></thead>
                    <tbody>{businessPlan.financials.scenarios.withFinancing.projections.map((proj, i) => (<tr key={i} className="border-b border-gray-700/50"><td className="py-2 text-white">{proj.year}</td><td className="py-2 text-right text-orange-400 font-medium">{proj.revenue}</td><td className="py-2 text-right text-gray-300">{proj.customers}</td></tr>))}</tbody>
                  </table>
                  <div className="text-xs text-gray-400"><div className="font-medium mb-1">Key Assumptions:</div><ul className="space-y-1">{businessPlan.financials.scenarios.withFinancing.keyAssumptions.map((a, i) => <li key={i}>• {a}</li>)}</ul></div>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2"><Building2 className="text-gray-400" /><h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withoutFinancing.name}</h3></div>
                  <p className="text-gray-400 text-sm mb-4">{businessPlan.financials.scenarios.withoutFinancing.description}</p>
                  <table className="w-full text-sm mb-4">
                    <thead><tr className="border-b border-gray-700"><th className="text-left py-2 text-gray-400">Year</th><th className="text-right py-2 text-gray-400">Revenue</th><th className="text-right py-2 text-gray-400">Network</th></tr></thead>
                    <tbody>{businessPlan.financials.scenarios.withoutFinancing.projections.map((proj, i) => (<tr key={i} className="border-b border-gray-700/50"><td className="py-2 text-white">{proj.year}</td><td className="py-2 text-right text-orange-400 font-medium">{proj.revenue}</td><td className="py-2 text-right text-gray-300">{proj.customers}</td></tr>))}</tbody>
                  </table>
                  <div className="text-xs text-gray-400"><div className="font-medium mb-1">Key Assumptions:</div><ul className="space-y-1">{businessPlan.financials.scenarios.withoutFinancing.keyAssumptions.map((a, i) => <li key={i}>• {a}</li>)}</ul></div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><PieChart className="text-orange-400" />Use of Funds</h2>
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (<div key={i} className="text-center"><div className="text-2xl font-bold text-orange-400">{fund.percentage}%</div><div className="text-sm font-medium text-white">{fund.category}</div><div className="text-xs text-gray-400">{fund.amount}</div></div>))}
                </div>
                <div className="space-y-3">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (<div key={i} className="flex items-center gap-4"><div className="w-32 text-sm text-gray-400">{fund.category}</div><div className="flex-1 bg-gray-700 rounded-full h-4"><div className="bg-orange-500 h-4 rounded-full" style={{ width: `${fund.percentage}%` }} /></div><div className="w-24 text-sm text-right text-white">{fund.amount}</div></div>))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><FileText className="text-orange-400" />Sources</h2>
              <div className="bg-gray-800 rounded-lg p-4">
                <ul className="space-y-2">{businessPlan.sources.map((source, i) => (<li key={i}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 flex items-center gap-2"><ExternalLink className="w-4 h-4" />{source.name}</a></li>))}</ul>
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          <p>{businessPlan.companyName} Business Plan • {businessPlan.version} • {businessPlan.date}</p>
          <p className="mt-2">Part of the <a href="/tokens/#framework" className="text-orange-400 hover:text-orange-300">Ribbit Token Cap-Ex Framework</a></p>
        </div>
      </footer>
    </div>
  )
}
