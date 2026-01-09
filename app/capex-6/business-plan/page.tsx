'use client'

import { useState } from 'react'
import {
  ArrowLeft, Target, TrendingUp, DollarSign, Users, Shield, AlertTriangle,
  CheckCircle, ExternalLink, ChevronDown, ChevronUp, Building2, Zap, BarChart3,
  Clock, Wrench, FileText, Briefcase, Lightbulb, Globe, Award, PieChart, LineChart, UtensilsCrossed
} from 'lucide-react'

const businessPlan = {
  companyName: "KitchenPulse",
  tagline: "The Network of Record for Restaurant Equipment",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Walk-in coolers, fryers, hoods—all critical restaurant equipment serviced by fragmented local techs. Equipment failure = restaurant closure. Zero standardized maintenance tracking across 1M+ restaurants.",
    solution: "KitchenPulse aggregates service providers, tracks equipment lifecycles, and enables predictive maintenance with IoT sensors on critical equipment—becoming the equipment intelligence layer for restaurants and their financiers.",
    market: "$45B restaurant equipment market with $8B annual service spend. Equipment finance companies need maintenance data. Chains and franchises desperately need visibility.",
    ask: "$4M Seed Round to build equipment registry, onboard service network, and pilot with major restaurant chains."
  },

  problem: {
    title: "The Restaurant Equipment Crisis",
    points: [
      {
        title: "Fragmented Service Network",
        detail: "Thousands of local HVAC/refrigeration techs service restaurants. No standardization, no quality tracking, inconsistent pricing.",
        stat: "10K+",
        statLabel: "independent service providers"
      },
      {
        title: "Equipment Failure = Lost Revenue",
        detail: "A failed walk-in cooler means spoiled inventory ($5K-20K) plus closure. Average restaurant operates on 3-5% margins—can't absorb surprises.",
        stat: "$15K",
        statLabel: "average cost of major equipment failure"
      },
      {
        title: "No Lifecycle Visibility",
        detail: "Restaurants don't know equipment age, maintenance history, or replacement timelines. Equipment finance companies underwriting blind.",
        stat: "0",
        statLabel: "centralized equipment databases"
      },
      {
        title: "Health Department Risk",
        detail: "Equipment failures create food safety violations. One health department closure can destroy a restaurant. No proactive monitoring.",
        stat: "60K",
        statLabel: "restaurants closed annually for violations"
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
        detail: "Toast, Square, and restaurant tech platforms have normalized SaaS in restaurants. Equipment is the next frontier.",
        icon: "TrendingUp"
      },
      {
        title: "IoT Costs Plummeting",
        detail: "Temperature sensors under $20. Cellular connectivity under $5/mo. Makes equipment monitoring economically viable.",
        icon: "Zap"
      },
      {
        title: "Labor Shortage",
        detail: "Restaurant equipment techs aging out. Younger techs want platform work. Service network model increasingly attractive.",
        icon: "Users"
      },
      {
        title: "Supply Chain Awareness",
        detail: "COVID showed restaurants the cost of equipment failure. Owners now understand value of redundancy and monitoring.",
        icon: "Shield"
      }
    ]
  },

  marketSize: {
    tam: {
      value: "$53B",
      description: "Total addressable market: Restaurant equipment + annual service",
      breakdown: [
        { segment: "Restaurant Equipment Sales", value: "$45B", growth: "4.2% CAGR" },
        { segment: "Equipment Service & Maintenance", value: "$8B", growth: "5.5% CAGR" },
        { segment: "IoT/Monitoring Solutions", value: "$850M", growth: "18% CAGR" }
      ]
    },
    sam: {
      value: "$2.8B",
      description: "Serviceable addressable market: Chain/franchise restaurants and equipment financiers",
      breakdown: [
        { segment: "Chain Restaurant Maintenance", value: "$1.6B", growth: "200K+ chain locations" },
        { segment: "Equipment Finance Data", value: "$400M", growth: "Residual value modeling" },
        { segment: "IoT Monitoring Services", value: "$800M", growth: "Critical equipment monitoring" }
      ]
    },
    som: {
      value: "$42M",
      description: "Year 5 revenue target: 8,000 locations, 400 service providers, 25K IoT sensors",
      breakdown: [
        { segment: "Restaurant SaaS", value: "$19M", growth: "8K locations @ $200/mo avg" },
        { segment: "Service Network Fees", value: "$12M", growth: "10% of service transactions" },
        { segment: "IoT Monitoring", value: "$8M", growth: "25K sensors @ $25/mo" },
        { segment: "Data Licensing", value: "$3M", growth: "Equipment finance, insurers" }
      ]
    }
  },

  competition: {
    overview: "No comprehensive platform exists for restaurant equipment lifecycle management. Point solutions exist for specific equipment types or functions.",
    competitors: [
      {
        name: "86 Repairs",
        description: "Facilities management platform for restaurants. Service dispatch focus, limited equipment intelligence.",
        strengths: ["Restaurant focus", "Service network", "Good UX"],
        weaknesses: ["No IoT/sensors", "Limited equipment data", "Dispatch-only model", "No financing integration"],
        marketShare: "~2% of chains"
      },
      {
        name: "ServiceChannel",
        description: "Enterprise facilities management. Too heavy/expensive for most restaurants.",
        strengths: ["Enterprise scale", "Established brand", "Broad capabilities"],
        weaknesses: ["Not restaurant-specific", "Expensive", "Complex implementation", "No equipment intelligence"],
        marketShare: "Large enterprise only"
      },
      {
        name: "Equipment OEMs",
        description: "Hobart, True, etc. sell equipment but minimal lifecycle services.",
        strengths: ["Equipment expertise", "Existing relationships", "Parts supply"],
        weaknesses: ["Sell and forget model", "No service network", "No cross-brand view", "Limited tech investment"],
        marketShare: "Own service on new equipment"
      },
      {
        name: "POS Platforms (Toast, Square)",
        description: "Could expand into equipment but not core focus. Potential partners or acquirers.",
        strengths: ["Restaurant relationships", "Distribution", "Capital"],
        weaknesses: ["Not core competency", "No equipment expertise", "Would likely partner/buy", "Focused on payments"],
        marketShare: "N/A - potential partners"
      }
    ],
    moat: "Network effects: More restaurants = better service provider matching = better equipment data = more financing/insurance interest = more restaurants."
  },

  businessModel: {
    overview: "Three revenue streams: Restaurant SaaS, service transaction fees, and data licensing to financiers/insurers.",
    revenueStreams: [
      {
        name: "Restaurant SaaS",
        description: "Monthly subscription for equipment registry, maintenance scheduling, and compliance tracking",
        pricing: "$99-$499/location/month based on size",
        margin: "85%",
        details: [
          "Equipment inventory & tracking",
          "Maintenance scheduling",
          "Service provider access",
          "Compliance dashboard",
          "Multi-location management"
        ]
      },
      {
        name: "Service Network Fees",
        description: "Transaction fees on service calls booked through platform",
        pricing: "8-12% of service invoice",
        margin: "90%",
        details: [
          "Vetted provider matching",
          "Price transparency",
          "Quality guarantees",
          "Payment processing",
          "Dispute resolution"
        ]
      },
      {
        name: "IoT Monitoring",
        description: "Hardware + monitoring subscription for critical equipment",
        pricing: "$15-$50/sensor/month",
        margin: "65%",
        details: [
          "Temperature monitoring",
          "Compressor analytics",
          "Alert notifications",
          "Predictive maintenance",
          "API integration"
        ]
      },
      {
        name: "Data Licensing",
        description: "Equipment lifecycle data for financiers, insurers, and manufacturers",
        pricing: "$50K-$250K annual contracts",
        margin: "95%",
        details: [
          "Residual value models",
          "Failure rate analytics",
          "Maintenance benchmarks",
          "Risk scoring",
          "Market intelligence"
        ]
      }
    ],
    unitEconomics: {
      ltv: "$8,400",
      cac: "$700",
      ltvCacRatio: "12:1",
      paybackPeriod: "4 months",
      grossMargin: "78%",
      details: [
        "Average location lifetime: 3.5 years",
        "Monthly ARPU grows with IoT attachment",
        "CAC: $400 digital + $300 sales",
        "Service fees provide expansion revenue"
      ]
    }
  },

  financials: {
    scenarios: {
      withFinancing: {
        name: "With Equipment Financing Angle",
        description: "Partner with equipment finance companies for distribution and data licensing",
        projections: [
          { year: "Y1", revenue: "$1.8M", customers: "600 locations", highlights: "Platform launch, 2 chain pilots" },
          { year: "Y2", revenue: "$7.5M", customers: "2,200 locations", highlights: "Finance partnerships, IoT launch" },
          { year: "Y3", revenue: "$18M", customers: "4,500 locations", highlights: "National service network" },
          { year: "Y4", revenue: "$32M", customers: "6,800 locations", highlights: "Data licensing growth" },
          { year: "Y5", revenue: "$52M", customers: "9,500 locations", highlights: "Market leader, M&A interest" }
        ],
        keyAssumptions: [
          "Equipment financiers drive 30% of leads",
          "Data licensing accelerates Year 3+",
          "IoT attachment reaches 40%",
          "Chain/franchise focus enables efficient expansion"
        ]
      },
      withoutFinancing: {
        name: "Without Equipment Financing Angle",
        description: "Direct restaurant sales with service network focus",
        projections: [
          { year: "Y1", revenue: "$1.2M", customers: "400 locations", highlights: "Platform launch, local markets" },
          { year: "Y2", revenue: "$4.2M", customers: "1,400 locations", highlights: "Regional expansion" },
          { year: "Y3", revenue: "$11M", customers: "3,200 locations", highlights: "Service network scaling" },
          { year: "Y4", revenue: "$22M", customers: "5,200 locations", highlights: "IoT traction" },
          { year: "Y5", revenue: "$38M", customers: "7,500 locations", highlights: "Sustainable growth" }
        ],
        keyAssumptions: [
          "Direct sales to chains and franchises",
          "Slower but higher-quality growth",
          "Service network is primary value prop",
          "Data licensing develops organically"
        ]
      }
    },
    useOfFunds: [
      { category: "Engineering & Product", percentage: 40, amount: "$1.6M", details: "Platform, IoT integration, mobile apps" },
      { category: "Sales & Success", percentage: 30, amount: "$1.2M", details: "Chain sales, onboarding, support" },
      { category: "Service Network", percentage: 15, amount: "$600K", details: "Provider recruitment, quality programs" },
      { category: "Marketing", percentage: 10, amount: "$400K", details: "Industry events, content, partnerships" },
      { category: "Operations", percentage: 5, amount: "$200K", details: "Legal, compliance, G&A" }
    ]
  },

  risks: [
    {
      risk: "Restaurant Tech Fatigue",
      severity: "High",
      mitigation: "Integrate with existing POS/ops systems. Prove ROI in first 90 days. Start with chains who have IT resources."
    },
    {
      risk: "Service Provider Quality",
      severity: "High",
      mitigation: "Rigorous vetting, ongoing quality scoring, customer feedback loops. Build quality reputation before scale."
    },
    {
      risk: "IoT Hardware Complexity",
      severity: "Medium",
      mitigation: "Start with software-only value prop. IoT is upsell, not requirement. Partner with existing sensor manufacturers."
    },
    {
      risk: "Chain Sales Cycles",
      severity: "Medium",
      mitigation: "Start with franchisees who can decide faster. Prove ROI at location level before corporate deals."
    },
    {
      risk: "Competition from POS Platforms",
      severity: "Medium",
      mitigation: "Build equipment expertise moat they can't replicate quickly. Position as partner not competitor."
    },
    {
      risk: "Economic Sensitivity",
      severity: "Low",
      mitigation: "Equipment maintenance is non-discretionary. Actually saves money vs emergency repairs. Recession-resistant positioning."
    }
  ],

  milestones: [
    { quarter: "Q1 2026", milestone: "Close seed round, hire core team", status: "target" },
    { quarter: "Q2 2026", milestone: "Launch platform with 200 locations, 50 service providers", status: "target" },
    { quarter: "Q3 2026", milestone: "First chain pilot (500+ locations)", status: "target" },
    { quarter: "Q4 2026", milestone: "IoT sensor pilot, 800 locations", status: "target" },
    { quarter: "Q1 2027", milestone: "Equipment financier partnership", status: "target" },
    { quarter: "Q2 2027", milestone: "2,000 locations, 150 service providers", status: "target" },
    { quarter: "Q3 2027", milestone: "Data licensing first contracts", status: "target" },
    { quarter: "Q4 2027", milestone: "Series A at $50-70M valuation", status: "target" }
  ],

  team: {
    hiring: [
      { role: "CTO", priority: "Critical", timeline: "Immediate", description: "Platform architecture, IoT systems, integrations" },
      { role: "VP Sales", priority: "Critical", timeline: "Q2 2026", description: "Chain/franchise sales, enterprise relationships" },
      { role: "Head of Service Network", priority: "High", timeline: "Q2 2026", description: "Provider recruitment, quality assurance" },
      { role: "VP Product", priority: "High", timeline: "Q3 2026", description: "Product strategy, IoT roadmap" }
    ]
  },

  ask: {
    amount: "$4M",
    round: "Seed",
    timeline: "Q1 2026",
    terms: "Priced round, standard seed terms",
    use: "Build platform, onboard service network, pilot with major chains, prove equipment intelligence value",
    targetInvestors: [
      "Restaurant tech investors",
      "Vertical SaaS specialists",
      "IoT/industrial tech funds",
      "Strategic angels from restaurant/equipment industry"
    ]
  },

  sources: [
    { name: "IBISWorld Restaurant Equipment", url: "https://www.ibisworld.com/united-states/market-research-reports/commercial-food-service-equipment-industry/" },
    { name: "Restaurant Business Online", url: "https://www.restaurantbusinessonline.com" },
    { name: "National Restaurant Association", url: "https://restaurant.org/research-and-media/research/industry-statistics/" },
    { name: "86 Repairs", url: "https://www.86repairs.com" }
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
      <Icon className="w-6 h-6 text-red-400 mx-auto mb-2" />
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
                <h1 className="text-2xl font-bold text-red-400">{businessPlan.companyName}</h1>
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
                    ? 'text-red-400 border-b-2 border-red-400'
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
            <section className="bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-xl p-8 border border-red-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="text-red-400" />
                Executive Summary
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-red-400 font-semibold mb-2">The Problem</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.problem}</p>
                </div>
                <div>
                  <h3 className="text-red-400 font-semibold mb-2">Our Solution</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.solution}</p>
                </div>
                <div>
                  <h3 className="text-red-400 font-semibold mb-2">Market Opportunity</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.market}</p>
                </div>
                <div>
                  <h3 className="text-red-400 font-semibold mb-2">The Ask</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.ask}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard value="$53B" label="TAM" icon={Globe} />
                <StatCard value="1M+" label="US Restaurants" icon={Users} />
                <StatCard value="12:1" label="LTV:CAC Ratio" icon={TrendingUp} />
                <StatCard value="$4M" label="Seed Ask" icon={DollarSign} />
              </div>
            </section>

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

            <section>
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Lightbulb className="text-red-400" />
                {businessPlan.solution.title}
              </h2>
              <p className="text-gray-400 mb-6">{businessPlan.solution.tagline}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {businessPlan.solution.pillars.map((pillar, i) => {
                  const IconComponent = pillar.icon === 'UtensilsCrossed' ? UtensilsCrossed :
                    pillar.icon === 'Wrench' ? Wrench :
                    pillar.icon === 'BarChart3' ? BarChart3 :
                    pillar.icon === 'Shield' ? Shield : UtensilsCrossed
                  return (
                    <div key={i} className="bg-gray-800 rounded-lg p-5">
                      <IconComponent className="w-8 h-8 text-red-400 mb-3" />
                      <h3 className="font-semibold text-white mb-2">{pillar.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{pillar.description}</p>
                      <ul className="space-y-1">
                        {pillar.features.map((feature, j) => (
                          <li key={j} className="text-xs text-gray-500 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-red-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </section>

            <section className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-xl p-8 border border-red-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="text-red-400" />
                The Ask
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400">{businessPlan.ask.amount}</div>
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
            <ExpandableSection title={<div className="flex items-center gap-2"><Clock className="text-red-400" /> Why Now?</div>} defaultOpen={true}>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => {
                  const IconComponent = factor.icon === 'TrendingUp' ? TrendingUp : factor.icon === 'Zap' ? Zap : factor.icon === 'Users' ? Users : Shield
                  return (
                    <div key={i} className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5 text-red-400" />
                        <h3 className="font-semibold text-white">{factor.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{factor.detail}</p>
                    </div>
                  )
                })}
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><PieChart className="text-red-400" /> Market Size</div>}>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { key: 'tam', label: 'TAM', data: businessPlan.marketSize.tam },
                  { key: 'sam', label: 'SAM', data: businessPlan.marketSize.sam },
                  { key: 'som', label: 'SOM (Y5)', data: businessPlan.marketSize.som }
                ].map(({ key, label, data }) => (
                  <div key={key} className="bg-gray-800 rounded-lg p-5">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-red-400">{data.value}</div>
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

            <ExpandableSection title={<div className="flex items-center gap-2"><Users className="text-red-400" /> Competitive Landscape</div>}>
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
                        <div className="text-red-400 font-medium mb-1">Weaknesses</div>
                        <ul className="text-gray-400 space-y-1">{comp.weaknesses.map((w, j) => <li key={j}>- {w}</li>)}</ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-red-900/30 rounded-lg p-4 border border-red-800">
                <h3 className="font-semibold text-red-400 mb-2">Our Moat</h3>
                <p className="text-gray-300">{businessPlan.competition.moat}</p>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Briefcase className="text-red-400" /> Business Model</div>}>
              <p className="text-gray-400 mb-4">{businessPlan.businessModel.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {businessPlan.businessModel.revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{stream.name}</h3>
                      <span className="text-red-400 font-medium">{stream.pricing}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{stream.description}</p>
                    <div className="text-xs text-gray-500 mb-2">Gross Margin: {stream.margin}</div>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {stream.details.map((d, j) => (<li key={j} className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-red-400" />{d}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-4">Unit Economics</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                  <div className="text-center"><div className="text-2xl font-bold text-red-400">{businessPlan.businessModel.unitEconomics.ltv}</div><div className="text-xs text-gray-400">LTV</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-red-400">{businessPlan.businessModel.unitEconomics.cac}</div><div className="text-xs text-gray-400">CAC</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-red-400">{businessPlan.businessModel.unitEconomics.ltvCacRatio}</div><div className="text-xs text-gray-400">LTV:CAC</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-red-400">{businessPlan.businessModel.unitEconomics.paybackPeriod}</div><div className="text-xs text-gray-400">Payback</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-red-400">{businessPlan.businessModel.unitEconomics.grossMargin}</div><div className="text-xs text-gray-400">Gross Margin</div></div>
                </div>
                <ul className="text-sm text-gray-400 space-y-1">{businessPlan.businessModel.unitEconomics.details.map((d, i) => <li key={i}>• {d}</li>)}</ul>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Shield className="text-red-400" /> Risks & Mitigations</div>}>
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

            <ExpandableSection title={<div className="flex items-center gap-2"><Award className="text-red-400" /> Milestones & Timeline</div>}>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />
                <div className="space-y-4">
                  {businessPlan.milestones.map((m, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-red-400" />
                      <div className="bg-gray-800 rounded-lg p-4">
                        <span className="text-red-400 font-medium">{m.quarter}</span>
                        <p className="text-gray-300">{m.milestone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Users className="text-red-400" /> Team & Hiring</div>}>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.team.hiring.map((hire, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
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
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><LineChart className="text-red-400" />Financial Projections</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-xl p-6 border-2 border-red-600">
                  <div className="flex items-center gap-2 mb-2"><Zap className="text-red-400" /><h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withFinancing.name}</h3></div>
                  <p className="text-gray-400 text-sm mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>
                  <table className="w-full text-sm mb-4">
                    <thead><tr className="border-b border-gray-700"><th className="text-left py-2 text-gray-400">Year</th><th className="text-right py-2 text-gray-400">Revenue</th><th className="text-right py-2 text-gray-400">Locations</th></tr></thead>
                    <tbody>{businessPlan.financials.scenarios.withFinancing.projections.map((proj, i) => (<tr key={i} className="border-b border-gray-700/50"><td className="py-2 text-white">{proj.year}</td><td className="py-2 text-right text-red-400 font-medium">{proj.revenue}</td><td className="py-2 text-right text-gray-300">{proj.customers}</td></tr>))}</tbody>
                  </table>
                  <div className="text-xs text-gray-400"><div className="font-medium mb-1">Key Assumptions:</div><ul className="space-y-1">{businessPlan.financials.scenarios.withFinancing.keyAssumptions.map((a, i) => <li key={i}>• {a}</li>)}</ul></div>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2"><Building2 className="text-gray-400" /><h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withoutFinancing.name}</h3></div>
                  <p className="text-gray-400 text-sm mb-4">{businessPlan.financials.scenarios.withoutFinancing.description}</p>
                  <table className="w-full text-sm mb-4">
                    <thead><tr className="border-b border-gray-700"><th className="text-left py-2 text-gray-400">Year</th><th className="text-right py-2 text-gray-400">Revenue</th><th className="text-right py-2 text-gray-400">Locations</th></tr></thead>
                    <tbody>{businessPlan.financials.scenarios.withoutFinancing.projections.map((proj, i) => (<tr key={i} className="border-b border-gray-700/50"><td className="py-2 text-white">{proj.year}</td><td className="py-2 text-right text-red-400 font-medium">{proj.revenue}</td><td className="py-2 text-right text-gray-300">{proj.customers}</td></tr>))}</tbody>
                  </table>
                  <div className="text-xs text-gray-400"><div className="font-medium mb-1">Key Assumptions:</div><ul className="space-y-1">{businessPlan.financials.scenarios.withoutFinancing.keyAssumptions.map((a, i) => <li key={i}>• {a}</li>)}</ul></div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><PieChart className="text-red-400" />Use of Funds</h2>
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (<div key={i} className="text-center"><div className="text-2xl font-bold text-red-400">{fund.percentage}%</div><div className="text-sm font-medium text-white">{fund.category}</div><div className="text-xs text-gray-400">{fund.amount}</div></div>))}
                </div>
                <div className="space-y-3">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (<div key={i} className="flex items-center gap-4"><div className="w-32 text-sm text-gray-400">{fund.category}</div><div className="flex-1 bg-gray-700 rounded-full h-4"><div className="bg-red-500 h-4 rounded-full" style={{ width: `${fund.percentage}%` }} /></div><div className="w-24 text-sm text-right text-white">{fund.amount}</div></div>))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><FileText className="text-red-400" />Sources</h2>
              <div className="bg-gray-800 rounded-lg p-4">
                <ul className="space-y-2">{businessPlan.sources.map((source, i) => (<li key={i}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 flex items-center gap-2"><ExternalLink className="w-4 h-4" />{source.name}</a></li>))}</ul>
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          <p>{businessPlan.companyName} Business Plan • {businessPlan.version} • {businessPlan.date}</p>
          <p className="mt-2">Part of the <a href="/tokens/#framework" className="text-red-400 hover:text-red-300">Ribbit Token Cap-Ex Framework</a></p>
        </div>
      </footer>
    </div>
  )
}
