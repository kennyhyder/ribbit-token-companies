'use client'

import { useState } from 'react'
import {
  ArrowLeft, Target, TrendingUp, DollarSign, Users, Shield, AlertTriangle,
  CheckCircle, ExternalLink, ChevronDown, ChevronUp, Building2, Zap, BarChart3,
  Clock, Wrench, FileText, Briefcase, Lightbulb, Globe, Award, PieChart, LineChart, Droplets
} from 'lucide-react'

const businessPlan = {
  companyName: "WellCheck",
  tagline: "The Carfax for Private Water Systems",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "43M Americans rely on private wells, 25% of homes have septic systems—yet zero centralized data exists. Buyers, lenders, and insurers fly blind on properties with private utilities.",
    solution: "WellCheck creates the first national registry for private wells and septic systems with testing history, maintenance records, and condition scores that travel with the property.",
    market: "$4.3B water testing market + $1.06B U.S. septic market. 60%+ of septic systems are 30+ years old needing inspection. Real estate transactions create forced testing events.",
    ask: "$3.5M Seed Round to build registry platform, establish lab partnerships, and capture first-mover advantage as the source of truth for off-grid utilities."
  },

  problem: {
    title: "The Private Utility Data Black Hole",
    points: [
      {
        title: "Zero Centralized Records",
        detail: "Private wells and septic systems have no Carfax equivalent. Testing history, maintenance records, and system age are often unknown or lost.",
        stat: "0",
        statLabel: "centralized databases for 43M private wells"
      },
      {
        title: "Hidden Health Risks",
        detail: "EPA estimates 23M Americans drink from wells with unsafe contaminant levels. Without testing history, problems go undetected for years.",
        stat: "23M",
        statLabel: "Americans drinking unsafe well water"
      },
      {
        title: "Real Estate Nightmare",
        detail: "20% of homes have private utilities yet buyers get one-time inspections with no history. Lenders require testing but data doesn't persist.",
        stat: "20%",
        statLabel: "of US homes have private wells or septic"
      },
      {
        title: "Aging Infrastructure Crisis",
        detail: "Over 60% of septic systems are 30+ years old. Average lifespan is 25-30 years. Massive wave of failures coming with no tracking.",
        stat: "60%+",
        statLabel: "of septic systems over 30 years old"
      }
    ]
  },

  solution: {
    title: "WellCheck: Trust for Private Utilities",
    tagline: "Test. Record. Verify. Trust.",
    pillars: [
      {
        icon: "Droplets",
        title: "Universal Registry",
        description: "First national database linking property addresses to private well and septic system records with complete testing and maintenance history.",
        features: ["Address-linked records", "System specs & age", "Testing history", "Maintenance logs"]
      },
      {
        icon: "Shield",
        title: "WellCheck Score",
        description: "Comprehensive condition scoring based on test results, system age, maintenance history, and local environmental factors.",
        features: ["0-100 condition score", "Contamination alerts", "Maintenance grade", "Risk assessment"]
      },
      {
        icon: "FileText",
        title: "Certified Reports",
        description: "Standardized property reports for real estate transactions, insurance underwriting, and lending compliance.",
        features: ["Transaction reports", "Insurance summaries", "Lender compliance", "API access"]
      },
      {
        icon: "Globe",
        title: "Lab Network",
        description: "Integrated network of certified testing labs with direct result upload. Schedule tests, receive results, all in one platform.",
        features: ["500+ certified labs", "Direct data upload", "Mobile scheduling", "Rush processing"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "Real Estate Technology Boom",
        detail: "Zillow, Redfin, and PropTech companies aggregating property data—but private utilities remain a gap. Integration opportunities abound.",
        icon: "TrendingUp"
      },
      {
        title: "Regulatory Pressure Growing",
        detail: "EPA pushing for better well water monitoring. Many states now require septic inspections at sale. Compliance creating mandatory testing events.",
        icon: "FileText"
      },
      {
        title: "Infrastructure Investment",
        detail: "$50B+ in Bipartisan Infrastructure Law for water systems. Rural utilities and municipalities can fund testing programs as infrastructure.",
        icon: "DollarSign"
      },
      {
        title: "Insurance Scrutiny",
        detail: "Homeowners insurers want data on septic failure risk. Flood insurance programs need groundwater contamination data. Willing to pay for insights.",
        icon: "Shield"
      }
    ]
  },

  marketSize: {
    tam: {
      value: "$5.4B",
      description: "Total addressable market: Water testing ($4.3B) + U.S. septic systems ($1.06B) annual spend",
      breakdown: [
        { segment: "Water Testing Services", value: "$4.3B", growth: "5.6% CAGR" },
        { segment: "U.S. Septic Systems", value: "$1.06B", growth: "3.5% CAGR" },
        { segment: "Real Estate Due Diligence", value: "$420M", growth: "4.2% CAGR" }
      ]
    },
    sam: {
      value: "$890M",
      description: "Serviceable addressable market: Testing + reports for homes sold + annual monitoring subscriptions",
      breakdown: [
        { segment: "Transaction Testing (6M homes/yr)", value: "$480M", growth: "Est. $80/test avg" },
        { segment: "Annual Monitoring Subscriptions", value: "$260M", growth: "~5M homes @ $52/yr" },
        { segment: "B2B Data Licensing", value: "$150M", growth: "Insurers, lenders, PropTech" }
      ]
    },
    som: {
      value: "$67M",
      description: "Year 5 revenue target: 150K monitoring subs + 200K transaction reports + B2B licensing",
      breakdown: [
        { segment: "Consumer Subscriptions", value: "$31M", growth: "150K homes @ $17/mo" },
        { segment: "Transaction Reports", value: "$24M", growth: "200K reports @ $120 avg" },
        { segment: "B2B Data Licensing", value: "$12M", growth: "Insurance, lending, PropTech" }
      ]
    }
  },

  competition: {
    overview: "No direct competitor has built a national private utility registry. Market is fragmented across local health departments, testing labs, and real estate inspectors.",
    competitors: [
      {
        name: "Local Health Departments",
        description: "County-by-county records, no national database. Paper-based, no digital access, no property linking.",
        strengths: ["Official records", "Regulatory authority", "Permit history"],
        weaknesses: ["Fragmented by county", "Paper-based", "No digital API", "No testing history"],
        marketShare: "100% of permits"
      },
      {
        name: "Testing Labs",
        description: "Perform tests but don't aggregate or share data. Results stay with property owner.",
        strengths: ["Certified testing", "Established relationships", "Technical expertise"],
        weaknesses: ["No data retention", "No property linking", "No historical records", "Siloed systems"],
        marketShare: "Fragmented"
      },
      {
        name: "Home Inspectors",
        description: "One-time inspection at transaction. No longitudinal data or ongoing monitoring.",
        strengths: ["Transaction workflow", "Real estate relationships", "Comprehensive reports"],
        weaknesses: ["Point-in-time only", "No ongoing relationship", "No data aggregation", "Variable quality"],
        marketShare: "~80% of transactions"
      },
      {
        name: "PropTech Platforms",
        description: "Zillow, Redfin have property data but no private utility information beyond basic yes/no.",
        strengths: ["Massive reach", "Consumer trust", "Real estate integration"],
        weaknesses: ["No utility data depth", "No testing integration", "Not core focus", "Would likely partner"],
        marketShare: "N/A"
      }
    ],
    moat: "Network effects: More properties in registry = more valuable for all participants. First comprehensive national database becomes the standard."
  },

  businessModel: {
    overview: "Three-sided marketplace connecting property owners, testing labs, and data consumers (insurers, lenders, PropTech).",
    revenueStreams: [
      {
        name: "Consumer Subscriptions",
        description: "Annual monitoring subscription includes annual water test, septic check, and continuous monitoring alerts",
        pricing: "$17/month or $149/year",
        margin: "70%",
        details: [
          "Annual comprehensive water test included",
          "Septic system monitoring checklist",
          "Contamination alerts from nearby sources",
          "Maintenance reminders and scheduling",
          "Transferable property report"
        ]
      },
      {
        name: "Transaction Reports",
        description: "One-time comprehensive property reports for real estate transactions",
        pricing: "$89-$199 per report",
        margin: "85%",
        details: [
          "Complete testing history",
          "WellCheck Score with explanation",
          "System age and specifications",
          "Comparable property analysis",
          "Lender/insurer compliance ready"
        ]
      },
      {
        name: "B2B Data Licensing",
        description: "API access and bulk data for insurers, lenders, and PropTech platforms",
        pricing: "$25K-$500K annual contracts",
        margin: "90%",
        details: [
          "Real-time API integration",
          "Risk scoring for underwriting",
          "Portfolio analysis tools",
          "Custom data feeds",
          "White-label reports"
        ]
      },
      {
        name: "Lab Network Fees",
        description: "Transaction fees from certified testing lab network",
        pricing: "15% of test fees",
        margin: "95%",
        details: [
          "Certified lab marketplace",
          "Integrated scheduling",
          "Direct result upload",
          "Quality assurance program",
          "Volume-based tiers"
        ]
      }
    ],
    unitEconomics: {
      ltv: "$612",
      cac: "$45",
      ltvCacRatio: "13.6:1",
      paybackPeriod: "4 months",
      grossMargin: "78%",
      details: [
        "Average subscription length: 4.1 years (moves/refinances drive churn)",
        "Annual value: $149 subscription + ~$40 in lab network fees",
        "CAC breakdown: $25 digital, $20 real estate partnerships",
        "Expansion revenue from transaction reports and referrals"
      ]
    }
  },

  financials: {
    scenarios: {
      withFinancing: {
        name: "With Infrastructure Financing Angle",
        description: "Partner with municipalities and rural utilities for grant-funded testing programs",
        projections: [
          { year: "Y1", revenue: "$1.2M", customers: "8K", highlights: "Platform launch, 3 state pilots" },
          { year: "Y2", revenue: "$6.8M", customers: "38K", highlights: "10 state expansion, 5 municipal contracts" },
          { year: "Y3", revenue: "$24M", customers: "95K", highlights: "National coverage, PropTech integrations" },
          { year: "Y4", revenue: "$52M", customers: "180K", highlights: "Insurance partnerships, lending integrations" },
          { year: "Y5", revenue: "$89M", customers: "310K", highlights: "Market leader, acquisition interest" }
        ],
        keyAssumptions: [
          "50%+ growth from municipal/utility partnerships",
          "Infrastructure grants fund bulk testing programs",
          "B2B revenue accelerates with portfolio coverage",
          "Lower CAC through institutional relationships"
        ]
      },
      withoutFinancing: {
        name: "Without Infrastructure Financing Angle",
        description: "Direct-to-consumer growth through real estate channel partnerships",
        projections: [
          { year: "Y1", revenue: "$680K", customers: "4.5K", highlights: "Platform launch, SEO/content focus" },
          { year: "Y2", revenue: "$3.2M", customers: "21K", highlights: "Real estate partnerships, 5 states" },
          { year: "Y3", revenue: "$11M", customers: "58K", highlights: "15 state coverage, first B2B deals" },
          { year: "Y4", revenue: "$28M", customers: "115K", highlights: "PropTech integrations, data licensing" },
          { year: "Y5", revenue: "$67M", customers: "220K", highlights: "Sustainable growth, profitable" }
        ],
        keyAssumptions: [
          "Organic growth through real estate transactions",
          "Content marketing and SEO drive awareness",
          "Slower but more capital-efficient path",
          "Higher margins from direct consumer relationships"
        ]
      }
    },
    useOfFunds: [
      { category: "Engineering & Product", percentage: 45, amount: "$1.575M", details: "Registry platform, lab integrations, mobile apps" },
      { category: "Sales & Partnerships", percentage: 25, amount: "$875K", details: "Real estate, municipal, and insurance BD" },
      { category: "Lab Network Development", percentage: 15, amount: "$525K", details: "Lab certifications, API integrations, quality program" },
      { category: "Marketing & Content", percentage: 10, amount: "$350K", details: "SEO, content, homeowner education" },
      { category: "Operations & Legal", percentage: 5, amount: "$175K", details: "Data privacy compliance, state registrations" }
    ]
  },

  risks: [
    {
      risk: "Data Privacy Concerns",
      severity: "High",
      mitigation: "Property-level data only (no PII), strict data governance, compliance with state privacy laws, opt-in model"
    },
    {
      risk: "Lab Network Adoption",
      severity: "Medium",
      mitigation: "Start with 3 large national chains, offer free integration, volume incentives, build demand first"
    },
    {
      risk: "Regulatory Fragmentation",
      severity: "Medium",
      mitigation: "State-by-state compliance roadmap, partner with health departments, support standardization efforts"
    },
    {
      risk: "PropTech Competition",
      severity: "Medium",
      mitigation: "Move fast on data aggregation, establish as neutral platform, position for partnership/acquisition"
    },
    {
      risk: "Consumer Awareness",
      severity: "Medium",
      mitigation: "Real estate transaction workflow captures demand, content marketing on water safety, insurance incentives"
    },
    {
      risk: "Market Education",
      severity: "Low",
      mitigation: "Partner with EPA, state agencies for educational campaigns, leverage infrastructure funding awareness"
    }
  ],

  milestones: [
    { quarter: "Q1 2026", milestone: "Close seed round, hire core engineering team", status: "target" },
    { quarter: "Q2 2026", milestone: "Launch MVP registry in 3 pilot states", status: "target" },
    { quarter: "Q3 2026", milestone: "Integrate first 50 testing labs", status: "target" },
    { quarter: "Q4 2026", milestone: "5,000 properties registered, first real estate partnerships", status: "target" },
    { quarter: "Q1 2027", milestone: "First municipal pilot program launched", status: "target" },
    { quarter: "Q2 2027", milestone: "25,000 properties, 10-state coverage", status: "target" },
    { quarter: "Q3 2027", milestone: "First B2B data licensing contracts signed", status: "target" },
    { quarter: "Q4 2027", milestone: "Series A at $12-15M valuation", status: "target" }
  ],

  team: {
    hiring: [
      { role: "CTO", priority: "Critical", timeline: "Immediate", description: "Platform architecture, data systems, lab integrations" },
      { role: "VP Partnerships", priority: "Critical", timeline: "Q2 2026", description: "Real estate, municipal, insurance relationships" },
      { role: "Head of Lab Network", priority: "High", timeline: "Q2 2026", description: "Lab certifications, quality assurance, integrations" },
      { role: "VP Engineering", priority: "High", timeline: "Q3 2026", description: "Scale engineering team, mobile development" }
    ]
  },

  ask: {
    amount: "$3.5M",
    round: "Seed",
    timeline: "Q1 2026",
    terms: "Priced round, standard seed terms",
    use: "Build registry platform, establish lab network, capture first-mover advantage in private utility data",
    targetInvestors: [
      "PropTech-focused VCs (Fifth Wall, MetaProp)",
      "Water/environmental tech investors",
      "Real estate data infrastructure investors",
      "Strategic angels from insurance/lending"
    ]
  },

  sources: [
    { name: "EPA Private Wells", url: "https://www.epa.gov/privatewells" },
    { name: "Fortune Business Insights - Septic Tanks", url: "https://www.fortunebusinessinsights.com/u-s-septic-tanks-market-109720" },
    { name: "Market.us Water Testing", url: "https://market.us/report/water-testing-market/" },
    { name: "NAHB Eye on Housing", url: "https://eyeonhousing.org/2025/07/use-of-private-water-and-sewer-systems-in-new-single-family-homes/" },
    { name: "Infrastructure Law - Water", url: "https://www.whitehouse.gov/briefing-room/statements-releases/2021/11/06/fact-sheet-the-bipartisan-infrastructure-deal/" }
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
      <Icon className="w-6 h-6 text-teal-400 mx-auto mb-2" />
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
            <div className="flex items-center gap-4">
              <a href="/tokens/#framework" className="text-gray-400 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </a>
              <div>
                <h1 className="text-2xl font-bold text-teal-400">{businessPlan.companyName}</h1>
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
                    ? 'text-teal-400 border-b-2 border-teal-400'
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
            <section className="bg-gradient-to-r from-teal-900/50 to-cyan-900/50 rounded-xl p-8 border border-teal-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="text-teal-400" />
                Executive Summary
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-teal-400 font-semibold mb-2">The Problem</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.problem}</p>
                </div>
                <div>
                  <h3 className="text-teal-400 font-semibold mb-2">Our Solution</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.solution}</p>
                </div>
                <div>
                  <h3 className="text-teal-400 font-semibold mb-2">Market Opportunity</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.market}</p>
                </div>
                <div>
                  <h3 className="text-teal-400 font-semibold mb-2">The Ask</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.ask}</p>
                </div>
              </div>
            </section>

            {/* Key Stats */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard value="$5.4B" label="TAM" icon={Globe} />
                <StatCard value="43M" label="Americans on Private Wells" icon={Users} />
                <StatCard value="13.6:1" label="LTV:CAC Ratio" icon={TrendingUp} />
                <StatCard value="$3.5M" label="Seed Ask" icon={DollarSign} />
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
                <Lightbulb className="text-teal-400" />
                {businessPlan.solution.title}
              </h2>
              <p className="text-gray-400 mb-6">{businessPlan.solution.tagline}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {businessPlan.solution.pillars.map((pillar, i) => {
                  const IconComponent = pillar.icon === 'Droplets' ? Droplets :
                    pillar.icon === 'Shield' ? Shield :
                    pillar.icon === 'FileText' ? FileText :
                    pillar.icon === 'Globe' ? Globe : Globe
                  return (
                    <div key={i} className="bg-gray-800 rounded-lg p-5">
                      <IconComponent className="w-8 h-8 text-teal-400 mb-3" />
                      <h3 className="font-semibold text-white mb-2">{pillar.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{pillar.description}</p>
                      <ul className="space-y-1">
                        {pillar.features.map((feature, j) => (
                          <li key={j} className="text-xs text-gray-500 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-teal-400" />
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
            <section className="bg-gradient-to-r from-teal-900/30 to-cyan-900/30 rounded-xl p-8 border border-teal-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="text-teal-400" />
                The Ask
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-400">{businessPlan.ask.amount}</div>
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
              title={<div className="flex items-center gap-2"><Clock className="text-teal-400" /> Why Now?</div>}
              defaultOpen={true}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => {
                  const IconComponent = factor.icon === 'TrendingUp' ? TrendingUp :
                    factor.icon === 'FileText' ? FileText :
                    factor.icon === 'DollarSign' ? DollarSign :
                    factor.icon === 'Shield' ? Shield : TrendingUp
                  return (
                    <div key={i} className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5 text-teal-400" />
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
              title={<div className="flex items-center gap-2"><PieChart className="text-teal-400" /> Market Size</div>}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { key: 'tam', label: 'TAM', data: businessPlan.marketSize.tam },
                  { key: 'sam', label: 'SAM', data: businessPlan.marketSize.sam },
                  { key: 'som', label: 'SOM (Y5)', data: businessPlan.marketSize.som }
                ].map(({ key, label, data }) => (
                  <div key={key} className="bg-gray-800 rounded-lg p-5">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-teal-400">{data.value}</div>
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
              title={<div className="flex items-center gap-2"><Users className="text-teal-400" /> Competitive Landscape</div>}
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
              <div className="bg-teal-900/30 rounded-lg p-4 border border-teal-800">
                <h3 className="font-semibold text-teal-400 mb-2">Our Moat</h3>
                <p className="text-gray-300">{businessPlan.competition.moat}</p>
              </div>
            </ExpandableSection>

            {/* Business Model */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Briefcase className="text-teal-400" /> Business Model</div>}
            >
              <p className="text-gray-400 mb-4">{businessPlan.businessModel.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {businessPlan.businessModel.revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{stream.name}</h3>
                      <span className="text-teal-400 font-medium">{stream.pricing}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{stream.description}</p>
                    <div className="text-xs text-gray-500 mb-2">Gross Margin: {stream.margin}</div>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {stream.details.map((d, j) => (
                        <li key={j} className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-teal-400" />
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
                    <div className="text-2xl font-bold text-teal-400">{businessPlan.businessModel.unitEconomics.ltv}</div>
                    <div className="text-xs text-gray-400">LTV</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">{businessPlan.businessModel.unitEconomics.cac}</div>
                    <div className="text-xs text-gray-400">CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">{businessPlan.businessModel.unitEconomics.ltvCacRatio}</div>
                    <div className="text-xs text-gray-400">LTV:CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">{businessPlan.businessModel.unitEconomics.paybackPeriod}</div>
                    <div className="text-xs text-gray-400">Payback</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">{businessPlan.businessModel.unitEconomics.grossMargin}</div>
                    <div className="text-xs text-gray-400">Gross Margin</div>
                  </div>
                </div>
                <ul className="text-sm text-gray-400 space-y-1">
                  {businessPlan.businessModel.unitEconomics.details.map((d, i) => (
                    <li key={i}>• {d}</li>
                  ))}
                </ul>
              </div>
            </ExpandableSection>

            {/* Risks */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Shield className="text-teal-400" /> Risks & Mitigations</div>}
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
              title={<div className="flex items-center gap-2"><Award className="text-teal-400" /> Milestones & Timeline</div>}
            >
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />
                <div className="space-y-4">
                  {businessPlan.milestones.map((m, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-teal-400" />
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-teal-400 font-medium">{m.quarter}</span>
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
              title={<div className="flex items-center gap-2"><Users className="text-teal-400" /> Team & Hiring</div>}
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
                <LineChart className="text-teal-400" />
                Financial Projections
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* With Financing */}
                <div className="bg-gray-800 rounded-xl p-6 border-2 border-teal-600">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="text-teal-400" />
                    <h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withFinancing.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>

                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-2 text-gray-400">Year</th>
                          <th className="text-right py-2 text-gray-400">Revenue</th>
                          <th className="text-right py-2 text-gray-400">Customers</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withFinancing.projections.map((proj, i) => (
                          <tr key={i} className="border-b border-gray-700/50">
                            <td className="py-2 text-white">{proj.year}</td>
                            <td className="py-2 text-right text-teal-400 font-medium">{proj.revenue}</td>
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
                        <li key={i}>• {a}</li>
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
                          <th className="text-right py-2 text-gray-400">Customers</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutFinancing.projections.map((proj, i) => (
                          <tr key={i} className="border-b border-gray-700/50">
                            <td className="py-2 text-white">{proj.year}</td>
                            <td className="py-2 text-right text-teal-400 font-medium">{proj.revenue}</td>
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
                        <li key={i}>• {a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Use of Funds */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <PieChart className="text-teal-400" />
                Use of Funds
              </h2>
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-teal-400">{fund.percentage}%</div>
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
                          className="bg-teal-500 h-4 rounded-full"
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
                <FileText className="text-teal-400" />
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
                        className="text-teal-400 hover:text-teal-300 flex items-center gap-2"
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
          <p>{businessPlan.companyName} Business Plan • {businessPlan.version} • {businessPlan.date}</p>
          <p className="mt-2">Part of the <a href="/tokens/#framework" className="text-teal-400 hover:text-teal-300">Ribbit Token Cap-Ex Framework</a></p>
        </div>
      </footer>
    </div>
  )
}
