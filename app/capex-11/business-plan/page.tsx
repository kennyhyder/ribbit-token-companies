'use client'

import { useState } from 'react'
import {
  ArrowLeft, Target, TrendingUp, DollarSign, Users, Shield, AlertTriangle,
  CheckCircle, ExternalLink, ChevronDown, ChevronUp, Building2, Zap, BarChart3,
  Clock, Wrench, FileText, Briefcase, Lightbulb, Globe, Award, PieChart, LineChart,
  ArrowUpDown, Settings, Lock, Gauge
} from 'lucide-react'

const businessPlan = {
  companyName: "LiftLogic",
  tagline: "The Network of Record for Elevator & Vertical Transport Maintenance",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Four major OEMs (Otis, Schindler, KONE, ThyssenKrupp) control 80% of elevator maintenance contracts with opaque pricing and lock-in tactics. Independent maintainers exist but are fragmented. Building owners have zero visibility into fair pricing or performance benchmarks.",
    solution: "LiftLogic aggregates independent elevator technicians into a credentialed network, standardizes service contracts, and tracks uptime/performance metrics. We create price transparency that breaks OEM lock-in and gives building owners control over their vertical transport assets.",
    market: "$50B global elevator market with $10B US annual service spend. Building owners and property managers desperately need alternatives to OEM pricing monopolies. Modernization projects ($100K-500K per unit) represent massive Cap-Ex decisions made blind.",
    ask: "$5M Seed Round to build technician network, deploy performance tracking platform, and partner with major commercial real estate owners to prove the model."
  },

  problem: {
    title: "The Elevator Maintenance Monopoly",
    points: [
      {
        title: "OEM Lock-In Dominance",
        detail: "Otis, Schindler, KONE, and ThyssenKrupp control 80% of maintenance contracts. Proprietary parts, diagnostic tools, and training create artificial barriers to competition.",
        stat: "80%",
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
        detail: "Average US elevator is 20+ years old. Massive modernization wave coming as buildings face capital decisions on vertical transport.",
        icon: "TrendingUp"
      },
      {
        title: "IoT Monitoring Costs Dropping",
        detail: "Remote monitoring sensors under $100. Cellular connectivity cheap. Real-time performance tracking now economically viable.",
        icon: "Zap"
      },
      {
        title: "Right-to-Repair Movement",
        detail: "Regulatory and legislative pressure growing for equipment repair rights. OEM proprietary lock-in facing increasing scrutiny.",
        icon: "Shield"
      },
      {
        title: "CRE Tech Adoption",
        detail: "Commercial real estate embracing PropTech. Building owners now expect SaaS platforms for asset management decisions.",
        icon: "Users"
      }
    ]
  },

  marketSize: {
    tam: {
      value: "$60B",
      description: "Total addressable market: Global elevator equipment + service",
      breakdown: [
        { segment: "Global Elevator Equipment", value: "$50B", growth: "4.5% CAGR" },
        { segment: "US Elevator Service Market", value: "$10B", growth: "5.2% CAGR" },
        { segment: "Modernization Projects", value: "$8B", growth: "6.8% CAGR" },
        { segment: "IoT/Monitoring Solutions", value: "$1.2B", growth: "15% CAGR" }
      ]
    },
    sam: {
      value: "$4.2B",
      description: "Serviceable addressable market: US commercial elevator maintenance and modernization",
      breakdown: [
        { segment: "Commercial Building Maintenance", value: "$2.8B", growth: "Office, retail, hospitality" },
        { segment: "Modernization Consulting", value: "$800M", growth: "Cap-Ex advisory services" },
        { segment: "Performance Monitoring SaaS", value: "$400M", growth: "Building owner subscriptions" },
        { segment: "Parts & Training", value: "$200M", growth: "Independent tech enablement" }
      ]
    },
    som: {
      value: "$58M",
      description: "Year 5 revenue target: 1,200 buildings, 500 technicians, 8,000 monitored elevators",
      breakdown: [
        { segment: "Building Owner SaaS", value: "$22M", growth: "1,200 buildings @ $1,500/mo avg" },
        { segment: "Service Transaction Fees", value: "$18M", growth: "12% of maintenance spend" },
        { segment: "Technician Network Fees", value: "$10M", growth: "500 techs @ $400/mo + job fees" },
        { segment: "Data & Advisory", value: "$8M", growth: "Benchmarking, Cap-Ex consulting" }
      ]
    }
  },

  competition: {
    overview: "No comprehensive platform exists to break the OEM maintenance monopoly. Current landscape is dominated by OEMs with fragmented independent competition.",
    competitors: [
      {
        name: "Otis (United Technologies)",
        description: "Largest elevator OEM globally. Dominant maintenance contracts, proprietary systems, premium pricing.",
        strengths: ["Brand recognition", "Installed base", "Proprietary tech", "National coverage"],
        weaknesses: ["Premium pricing", "Lock-in tactics", "Slow innovation", "Poor transparency"],
        marketShare: "~25% US maintenance"
      },
      {
        name: "Schindler",
        description: "Swiss OEM with strong commercial presence. Similar lock-in model to Otis.",
        strengths: ["Quality reputation", "Global footprint", "Modernization expertise"],
        weaknesses: ["Expensive", "Proprietary parts", "Limited flexibility", "Opaque pricing"],
        marketShare: "~20% US maintenance"
      },
      {
        name: "KONE",
        description: "Finnish OEM known for escalators. Growing elevator presence with tech-forward positioning.",
        strengths: ["IoT leadership", "Energy efficiency", "Modern fleet"],
        weaknesses: ["Smaller US presence", "Premium pricing", "Still proprietary", "OEM mindset"],
        marketShare: "~15% US maintenance"
      },
      {
        name: "Independent Maintainers",
        description: "Fragmented network of local elevator service companies. Quality varies, no coordination.",
        strengths: ["Lower pricing", "Flexible terms", "Local relationships"],
        weaknesses: ["No network", "No benchmarks", "Credibility gap", "Limited coverage"],
        marketShare: "~20% of market"
      }
    ],
    moat: "Network effects: More technicians = better coverage = more building owners = more performance data = better benchmarks = more building owners. First platform to aggregate independents with quality standards wins."
  },

  businessModel: {
    overview: "Four revenue streams: Building owner SaaS, service transaction fees, technician network subscriptions, and data/advisory services.",
    revenueStreams: [
      {
        name: "Building Owner Platform",
        description: "SaaS subscription for elevator portfolio management, performance monitoring, and vendor management",
        pricing: "$500-$3,000/building/month based on elevator count",
        margin: "85%",
        details: [
          "Elevator inventory management",
          "Performance dashboards",
          "Vendor comparison tools",
          "Maintenance scheduling",
          "Compliance tracking"
        ]
      },
      {
        name: "Service Transaction Fees",
        description: "Transaction fees on maintenance and modernization work booked through platform",
        pricing: "10-15% of service invoice",
        margin: "90%",
        details: [
          "Competitive bidding facilitation",
          "Payment processing",
          "Quality guarantees",
          "Dispute resolution",
          "Contract management"
        ]
      },
      {
        name: "Technician Network",
        description: "SaaS subscription + job fees for credentialed independent elevator technicians",
        pricing: "$299-$599/month + 8% job fees",
        margin: "80%",
        details: [
          "Lead generation",
          "Credential management",
          "Training access",
          "Parts marketplace",
          "Insurance programs"
        ]
      },
      {
        name: "Data & Advisory",
        description: "Benchmarking data, Cap-Ex consulting, and modernization advisory for building owners and investors",
        pricing: "$25K-$150K per engagement",
        margin: "70%",
        details: [
          "Pricing benchmarks",
          "Performance analytics",
          "Modernization planning",
          "Vendor selection",
          "Due diligence support"
        ]
      }
    ],
    unitEconomics: {
      ltv: "$42,000",
      cac: "$3,000",
      ltvCacRatio: "14:1",
      paybackPeriod: "5 months",
      grossMargin: "82%",
      details: [
        "Building owner lifetime: 4+ years average",
        "High switching costs once integrated",
        "CAC: $1,500 digital + $1,500 sales",
        "Transaction fees provide expansion revenue"
      ]
    }
  },

  financials: {
    scenarios: {
      withFinancing: {
        name: "With Cap-Ex Financing Angle",
        description: "Partner with CRE lenders and property investors who capitalize elevator maintenance and modernization",
        projections: [
          { year: "Y1", revenue: "$2.4M", customers: "180 buildings, 80 techs", highlights: "Platform launch, first CRE partnerships" },
          { year: "Y2", revenue: "$9.5M", customers: "450 buildings, 200 techs", highlights: "Financing partner integration" },
          { year: "Y3", revenue: "$24M", customers: "750 buildings, 350 techs", highlights: "National expansion, modernization advisory" },
          { year: "Y4", revenue: "$42M", customers: "1,000 buildings, 420 techs", highlights: "Data licensing, OEM disruption" },
          { year: "Y5", revenue: "$68M", customers: "1,400 buildings, 550 techs", highlights: "Market leader, strategic interest" }
        ],
        keyAssumptions: [
          "CRE investors capitalize maintenance as infrastructure",
          "Modernization advisory drives high-value engagements",
          "Data licensing to investors and lenders",
          "Network effects accelerate Year 3+"
        ]
      },
      withoutFinancing: {
        name: "Without Cap-Ex Financing Angle",
        description: "Direct sales to building owners without leveraging capital expenditure positioning",
        projections: [
          { year: "Y1", revenue: "$1.6M", customers: "120 buildings, 60 techs", highlights: "Platform launch" },
          { year: "Y2", revenue: "$5.5M", customers: "280 buildings, 140 techs", highlights: "Regional expansion" },
          { year: "Y3", revenue: "$14M", customers: "520 buildings, 250 techs", highlights: "National footprint" },
          { year: "Y4", revenue: "$28M", customers: "780 buildings, 350 techs", highlights: "Advisory traction" },
          { year: "Y5", revenue: "$45M", customers: "1,100 buildings, 450 techs", highlights: "Sustainable growth" }
        ],
        keyAssumptions: [
          "Direct building owner sales only",
          "Slower enterprise deal cycles",
          "Advisory services develop organically",
          "Transaction fees primary growth driver"
        ]
      }
    },
    useOfFunds: [
      { category: "Engineering & Product", percentage: 40, amount: "$2.0M", details: "Platform, monitoring integration, mobile apps" },
      { category: "Sales & Success", percentage: 28, amount: "$1.4M", details: "CRE sales, building owner onboarding, support" },
      { category: "Technician Network", percentage: 18, amount: "$900K", details: "Tech recruitment, credentialing, training programs" },
      { category: "Marketing", percentage: 9, amount: "$450K", details: "Industry events, content, CRE partnerships" },
      { category: "Operations", percentage: 5, amount: "$250K", details: "Legal, compliance, G&A" }
    ]
  },

  risks: [
    {
      risk: "OEM Competitive Response",
      severity: "High",
      mitigation: "Move fast to build network before OEMs react. OEMs are slow-moving; by the time they respond, network effects protect us. Their response validates the market."
    },
    {
      risk: "Technician Quality Control",
      severity: "High",
      mitigation: "Rigorous credentialing, ongoing performance monitoring, customer feedback loops. Start with experienced techs with proven track records."
    },
    {
      risk: "Proprietary Parts Access",
      severity: "Medium",
      mitigation: "Build parts sourcing network. Partner with third-party parts manufacturers. Support right-to-repair legislation. Many parts available through gray market."
    },
    {
      risk: "Building Owner Sales Cycles",
      severity: "Medium",
      mitigation: "Start with property management companies who manage multiple buildings. Prove ROI at portfolio level. Partner with PropTech platforms for distribution."
    },
    {
      risk: "Regulatory Complexity",
      severity: "Medium",
      mitigation: "Elevator codes vary by jurisdiction. Build compliance database. Partner with inspection authorities. Credential requirements ensure tech competence."
    },
    {
      risk: "Safety Liability",
      severity: "Low",
      mitigation: "Comprehensive insurance requirements for all network techs. Strict credentialing. Clear liability frameworks in contracts. Safety record tracking."
    }
  ],

  milestones: [
    { quarter: "Q1 2026", milestone: "Close seed round, hire core team", status: "target" },
    { quarter: "Q2 2026", milestone: "Launch platform with 50 buildings, 30 technicians", status: "target" },
    { quarter: "Q3 2026", milestone: "First major CRE partnership (500+ buildings portfolio)", status: "target" },
    { quarter: "Q4 2026", milestone: "150 buildings, 70 technicians, monitoring integration", status: "target" },
    { quarter: "Q1 2027", milestone: "First Cap-Ex advisory engagements", status: "target" },
    { quarter: "Q2 2027", milestone: "350 buildings, 150 technicians, national expansion", status: "target" },
    { quarter: "Q3 2027", milestone: "Data licensing pilot with CRE investors", status: "target" },
    { quarter: "Q4 2027", milestone: "Series A at $80-100M valuation", status: "target" }
  ],

  team: {
    hiring: [
      { role: "CTO", priority: "Critical", timeline: "Immediate", description: "Platform architecture, IoT integration, data systems" },
      { role: "VP Sales", priority: "Critical", timeline: "Q1 2026", description: "CRE relationships, building owner sales, enterprise deals" },
      { role: "Head of Technician Network", priority: "High", timeline: "Q2 2026", description: "Tech recruitment, credentialing, quality assurance" },
      { role: "VP Product", priority: "High", timeline: "Q2 2026", description: "Product strategy, monitoring features, UX" }
    ]
  },

  ask: {
    amount: "$5M",
    round: "Seed",
    timeline: "Q1 2026",
    terms: "Priced round, standard seed terms",
    use: "Build technician network, deploy monitoring platform, establish CRE partnerships, prove price transparency model",
    targetInvestors: [
      "PropTech / CRE tech investors",
      "Industrial/infrastructure focused funds",
      "Vertical SaaS specialists",
      "Strategic angels from real estate/facilities management"
    ]
  },

  sources: [
    { name: "IBISWorld Elevator Manufacturing", url: "https://www.ibisworld.com/united-states/market-research-reports/elevator-escalator-manufacturing-industry/" },
    { name: "NAESA International (Elevator Safety)", url: "https://www.naesai.org/" },
    { name: "Elevator World Magazine", url: "https://elevatorworld.com/" },
    { name: "BOMA International (Building Owners)", url: "https://www.boma.org/" }
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
      <Icon className="w-6 h-6 text-slate-400 mx-auto mb-2" />
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
                <h1 className="text-2xl font-bold text-slate-400">{businessPlan.companyName}</h1>
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
                    ? 'text-slate-400 border-b-2 border-slate-400'
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
            <section className="bg-gradient-to-r from-slate-800/50 to-blue-900/50 rounded-xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="text-slate-400" />
                Executive Summary
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-slate-400 font-semibold mb-2">The Problem</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.problem}</p>
                </div>
                <div>
                  <h3 className="text-slate-400 font-semibold mb-2">Our Solution</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.solution}</p>
                </div>
                <div>
                  <h3 className="text-slate-400 font-semibold mb-2">Market Opportunity</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.market}</p>
                </div>
                <div>
                  <h3 className="text-slate-400 font-semibold mb-2">The Ask</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.ask}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard value="$60B" label="TAM" icon={Globe} />
                <StatCard value="900K+" label="US Elevators" icon={ArrowUpDown} />
                <StatCard value="14:1" label="LTV:CAC Ratio" icon={TrendingUp} />
                <StatCard value="$5M" label="Seed Ask" icon={DollarSign} />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <AlertTriangle className="text-slate-400" />
                {businessPlan.problem.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.problem.points.map((point, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-white">{point.title}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-slate-400">{point.stat}</div>
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
                <Lightbulb className="text-slate-400" />
                {businessPlan.solution.title}
              </h2>
              <p className="text-gray-400 mb-6">{businessPlan.solution.tagline}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {businessPlan.solution.pillars.map((pillar, i) => {
                  const IconComponent = pillar.icon === 'ArrowUpDown' ? ArrowUpDown :
                    pillar.icon === 'Settings' ? Settings :
                    pillar.icon === 'Gauge' ? Gauge :
                    pillar.icon === 'Lock' ? Lock : ArrowUpDown
                  return (
                    <div key={i} className="bg-gray-800 rounded-lg p-5">
                      <IconComponent className="w-8 h-8 text-slate-400 mb-3" />
                      <h3 className="font-semibold text-white mb-2">{pillar.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{pillar.description}</p>
                      <ul className="space-y-1">
                        {pillar.features.map((feature, j) => (
                          <li key={j} className="text-xs text-gray-500 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-slate-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </section>

            <section className="bg-gradient-to-r from-slate-800/30 to-blue-900/30 rounded-xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="text-slate-400" />
                The Ask
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-400">{businessPlan.ask.amount}</div>
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
            <ExpandableSection title={<div className="flex items-center gap-2"><Clock className="text-slate-400" /> Why Now?</div>} defaultOpen={true}>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => {
                  const IconComponent = factor.icon === 'TrendingUp' ? TrendingUp : factor.icon === 'Zap' ? Zap : factor.icon === 'Users' ? Users : Shield
                  return (
                    <div key={i} className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5 text-slate-400" />
                        <h3 className="font-semibold text-white">{factor.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{factor.detail}</p>
                    </div>
                  )
                })}
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><PieChart className="text-slate-400" /> Market Size</div>}>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { key: 'tam', label: 'TAM', data: businessPlan.marketSize.tam },
                  { key: 'sam', label: 'SAM', data: businessPlan.marketSize.sam },
                  { key: 'som', label: 'SOM (Y5)', data: businessPlan.marketSize.som }
                ].map(({ key, label, data }) => (
                  <div key={key} className="bg-gray-800 rounded-lg p-5">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-slate-400">{data.value}</div>
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

            <ExpandableSection title={<div className="flex items-center gap-2"><Users className="text-slate-400" /> Competitive Landscape</div>}>
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
                        <div className="text-slate-400 font-medium mb-1">Weaknesses</div>
                        <ul className="text-gray-400 space-y-1">{comp.weaknesses.map((w, j) => <li key={j}>- {w}</li>)}</ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-slate-400 mb-2">Our Moat</h3>
                <p className="text-gray-300">{businessPlan.competition.moat}</p>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Briefcase className="text-slate-400" /> Business Model</div>}>
              <p className="text-gray-400 mb-4">{businessPlan.businessModel.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {businessPlan.businessModel.revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{stream.name}</h3>
                      <span className="text-slate-400 font-medium">{stream.pricing}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{stream.description}</p>
                    <div className="text-xs text-gray-500 mb-2">Gross Margin: {stream.margin}</div>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {stream.details.map((d, j) => (<li key={j} className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-slate-400" />{d}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-4">Unit Economics</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                  <div className="text-center"><div className="text-2xl font-bold text-slate-400">{businessPlan.businessModel.unitEconomics.ltv}</div><div className="text-xs text-gray-400">LTV</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-slate-400">{businessPlan.businessModel.unitEconomics.cac}</div><div className="text-xs text-gray-400">CAC</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-slate-400">{businessPlan.businessModel.unitEconomics.ltvCacRatio}</div><div className="text-xs text-gray-400">LTV:CAC</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-slate-400">{businessPlan.businessModel.unitEconomics.paybackPeriod}</div><div className="text-xs text-gray-400">Payback</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-slate-400">{businessPlan.businessModel.unitEconomics.grossMargin}</div><div className="text-xs text-gray-400">Gross Margin</div></div>
                </div>
                <ul className="text-sm text-gray-400 space-y-1">{businessPlan.businessModel.unitEconomics.details.map((d, i) => <li key={i}>• {d}</li>)}</ul>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Shield className="text-slate-400" /> Risks & Mitigations</div>}>
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

            <ExpandableSection title={<div className="flex items-center gap-2"><Award className="text-slate-400" /> Milestones & Timeline</div>}>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />
                <div className="space-y-4">
                  {businessPlan.milestones.map((m, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-slate-400" />
                      <div className="bg-gray-800 rounded-lg p-4">
                        <span className="text-slate-400 font-medium">{m.quarter}</span>
                        <p className="text-gray-300">{m.milestone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Users className="text-slate-400" /> Team & Hiring</div>}>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.team.hiring.map((hire, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{hire.role}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${hire.priority === 'Critical' ? 'bg-slate-700/50 text-slate-400' : 'bg-yellow-900/50 text-yellow-400'}`}>{hire.priority}</span>
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
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><LineChart className="text-slate-400" />Financial Projections</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-xl p-6 border-2 border-slate-600">
                  <div className="flex items-center gap-2 mb-2"><Zap className="text-slate-400" /><h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withFinancing.name}</h3></div>
                  <p className="text-gray-400 text-sm mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>
                  <table className="w-full text-sm mb-4">
                    <thead><tr className="border-b border-gray-700"><th className="text-left py-2 text-gray-400">Year</th><th className="text-right py-2 text-gray-400">Revenue</th><th className="text-right py-2 text-gray-400">Network</th></tr></thead>
                    <tbody>{businessPlan.financials.scenarios.withFinancing.projections.map((proj, i) => (<tr key={i} className="border-b border-gray-700/50"><td className="py-2 text-white">{proj.year}</td><td className="py-2 text-right text-slate-400 font-medium">{proj.revenue}</td><td className="py-2 text-right text-gray-300">{proj.customers}</td></tr>))}</tbody>
                  </table>
                  <div className="text-xs text-gray-400"><div className="font-medium mb-1">Key Assumptions:</div><ul className="space-y-1">{businessPlan.financials.scenarios.withFinancing.keyAssumptions.map((a, i) => <li key={i}>• {a}</li>)}</ul></div>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2"><Building2 className="text-gray-400" /><h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withoutFinancing.name}</h3></div>
                  <p className="text-gray-400 text-sm mb-4">{businessPlan.financials.scenarios.withoutFinancing.description}</p>
                  <table className="w-full text-sm mb-4">
                    <thead><tr className="border-b border-gray-700"><th className="text-left py-2 text-gray-400">Year</th><th className="text-right py-2 text-gray-400">Revenue</th><th className="text-right py-2 text-gray-400">Network</th></tr></thead>
                    <tbody>{businessPlan.financials.scenarios.withoutFinancing.projections.map((proj, i) => (<tr key={i} className="border-b border-gray-700/50"><td className="py-2 text-white">{proj.year}</td><td className="py-2 text-right text-slate-400 font-medium">{proj.revenue}</td><td className="py-2 text-right text-gray-300">{proj.customers}</td></tr>))}</tbody>
                  </table>
                  <div className="text-xs text-gray-400"><div className="font-medium mb-1">Key Assumptions:</div><ul className="space-y-1">{businessPlan.financials.scenarios.withoutFinancing.keyAssumptions.map((a, i) => <li key={i}>• {a}</li>)}</ul></div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><PieChart className="text-slate-400" />Use of Funds</h2>
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (<div key={i} className="text-center"><div className="text-2xl font-bold text-slate-400">{fund.percentage}%</div><div className="text-sm font-medium text-white">{fund.category}</div><div className="text-xs text-gray-400">{fund.amount}</div></div>))}
                </div>
                <div className="space-y-3">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (<div key={i} className="flex items-center gap-4"><div className="w-32 text-sm text-gray-400">{fund.category}</div><div className="flex-1 bg-gray-700 rounded-full h-4"><div className="bg-slate-500 h-4 rounded-full" style={{ width: `${fund.percentage}%` }} /></div><div className="w-24 text-sm text-right text-white">{fund.amount}</div></div>))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><FileText className="text-slate-400" />Sources</h2>
              <div className="bg-gray-800 rounded-lg p-4">
                <ul className="space-y-2">{businessPlan.sources.map((source, i) => (<li key={i}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-300 flex items-center gap-2"><ExternalLink className="w-4 h-4" />{source.name}</a></li>))}</ul>
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          <p>{businessPlan.companyName} Business Plan • {businessPlan.version} • {businessPlan.date}</p>
          <p className="mt-2">Part of the <a href="/tokens/#framework" className="text-slate-400 hover:text-slate-300">Ribbit Token Cap-Ex Framework</a></p>
        </div>
      </footer>
    </div>
  )
}
