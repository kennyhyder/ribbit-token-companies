'use client'

import { useState } from 'react'
import {
  ArrowLeft, Target, TrendingUp, DollarSign, Users, Shield, AlertTriangle,
  CheckCircle, ExternalLink, ChevronDown, ChevronUp, Building2, Zap, BarChart3,
  Clock, Wrench, FileText, Briefcase, Lightbulb, Globe, Award, PieChart, LineChart, Activity,
  Droplets, Gauge, Search, Database
} from 'lucide-react'

const businessPlan = {
  companyName: "AquaTrack",
  tagline: "The PowerOutage.us for Water Infrastructure",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "3,000+ water utilities in the US operate aging infrastructure with no aggregated data. Leak detection is fragmented, pipe condition assessments are siloed, and lead pipe replacement mandates lack tracking mechanisms. Utilities can't benchmark or optimize their capital spending.",
    solution: "AquaTrack aggregates leak detection, pipe condition assessments, and replacement tracking into a unified platform. We create the 'PowerOutage.us' equivalent for water infrastructure, giving utilities, regulators, and contractors a single source of truth.",
    market: "$150B water infrastructure market with $25B in water technology. The $625B Infrastructure Bill includes significant water funding. Lead pipe replacement alone represents $2-10K per service line in capital investment.",
    ask: "$4.5M Seed Round to build the data aggregation platform, establish utility partnerships, and create the infrastructure intelligence layer that becomes essential to the water sector."
  },

  problem: {
    title: "The Water Infrastructure Data Crisis",
    points: [
      {
        title: "Aging Infrastructure Invisibility",
        detail: "US water infrastructure averages 45+ years old. Many pipes are 80-100 years old. Utilities don't know conditions until failures occur. No aggregated visibility across systems.",
        stat: "3,000+",
        statLabel: "fragmented water utilities"
      },
      {
        title: "Fragmented Leak Detection",
        detail: "Water loss averages 16% nationally, costing $7B+ annually. Leak detection is reactive and uncoordinated. No standardized data format or sharing between utilities.",
        stat: "16%",
        statLabel: "average water loss rate"
      },
      {
        title: "Lead Pipe Mandate Without Tracking",
        detail: "EPA mandates lead service line replacement. Utilities must inventory and replace lines within 10 years. No centralized tracking system exists. Compliance verification fragmented.",
        stat: "9.2M",
        statLabel: "lead service lines to replace"
      },
      {
        title: "Capital Blind Spots",
        detail: "Utilities spend $125B+ annually on infrastructure but lack benchmarking data. No visibility into peer performance. Procurement fragmented across thousands of systems.",
        stat: "$125B+",
        statLabel: "annual water infrastructure spend"
      }
    ]
  },

  solution: {
    title: "AquaTrack: Water Infrastructure Intelligence Platform",
    tagline: "Aggregate. Monitor. Predict. Comply.",
    pillars: [
      {
        icon: "Database",
        title: "Data Aggregation",
        description: "Unified data layer aggregating leak detection, pipe conditions, and asset status from multiple utilities and sensor networks into standardized formats.",
        features: ["Multi-utility data ingestion", "Standardized pipe schema", "Real-time status feeds", "Historical trending"]
      },
      {
        icon: "Search",
        title: "Leak Intelligence",
        description: "Aggregated leak detection data with pattern analysis. Identify systemic issues, predict failure zones, and optimize repair prioritization.",
        features: ["Leak pattern analysis", "Failure prediction", "Repair prioritization", "Loss quantification"]
      },
      {
        icon: "Gauge",
        title: "Condition Assessment",
        description: "Centralized pipe condition scoring with benchmarking across utilities. Enable data-driven capital planning and replacement scheduling.",
        features: ["Condition scoring", "Peer benchmarking", "Replacement prioritization", "Capital planning"]
      },
      {
        icon: "Droplets",
        title: "Compliance Tracking",
        description: "Lead service line inventory and replacement tracking for EPA mandate compliance. Real-time progress dashboards for utilities and regulators.",
        features: ["Lead pipe inventory", "Replacement tracking", "Regulatory reporting", "Compliance dashboards"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "$625B Infrastructure Bill",
        detail: "Bipartisan Infrastructure Law includes $55B for water infrastructure. Utilities flush with capital need data to prioritize spending effectively.",
        icon: "DollarSign"
      },
      {
        title: "EPA Lead Pipe Mandate",
        detail: "New EPA rule requires utilities to inventory and replace lead service lines within 10 years. Creates urgent need for tracking and compliance systems.",
        icon: "AlertTriangle"
      },
      {
        title: "Smart Meter & Sensor Proliferation",
        detail: "AMI smart meters and leak sensors generating data that utilities can't analyze. Need aggregation and intelligence layer.",
        icon: "Activity"
      },
      {
        title: "Climate Change Stress",
        detail: "Extreme weather stressing aging infrastructure. Utilities need predictive capabilities to prevent catastrophic failures.",
        icon: "TrendingUp"
      }
    ]
  },

  marketSize: {
    tam: {
      value: "$150B",
      description: "Total addressable market: US water infrastructure including capital projects, operations, and technology",
      breakdown: [
        { segment: "Water Infrastructure Capital", value: "$80B", growth: "6.2% CAGR" },
        { segment: "Water Utility Operations", value: "$45B", growth: "4.1% CAGR" },
        { segment: "Water Technology", value: "$25B", growth: "8.5% CAGR" }
      ]
    },
    sam: {
      value: "$4.2B",
      description: "Serviceable addressable market: Water infrastructure data and analytics across US utilities",
      breakdown: [
        { segment: "Utility Data Platforms", value: "$1.5B", growth: "~3,000 utilities" },
        { segment: "Leak Detection Analytics", value: "$1.2B", growth: "Loss prevention" },
        { segment: "Asset Management Software", value: "$900M", growth: "Capital planning" },
        { segment: "Compliance & Reporting", value: "$600M", growth: "Regulatory mandates" }
      ]
    },
    som: {
      value: "$85M",
      description: "Year 5 revenue target: 400 utility partnerships, regulatory integrations, contractor network",
      breakdown: [
        { segment: "Utility SaaS Subscriptions", value: "$42M", growth: "400 utilities @ $105K/yr avg" },
        { segment: "Regulatory Data Licensing", value: "$18M", growth: "EPA + 50 state agencies" },
        { segment: "Contractor Data Access", value: "$15M", growth: "2,000 contractors @ $7.5K/yr" },
        { segment: "Infrastructure Fund Analytics", value: "$10M", growth: "Private capital seeking deployment" }
      ]
    }
  },

  competition: {
    overview: "The market is served by equipment manufacturers with proprietary data silos and legacy utility software lacking modern analytics. No platform aggregates cross-utility infrastructure data to create industry-wide intelligence.",
    competitors: [
      {
        name: "Xylem (Sensus)",
        description: "Global water technology leader. Smart meters and analytics for individual utilities. Strong installed base but siloed data per customer.",
        strengths: ["Massive installed base", "Hardware + software integration", "Brand recognition", "Global presence"],
        weaknesses: ["Data siloed per customer", "Legacy technology debt", "No cross-utility analytics", "Slow innovation"],
        marketShare: "~25% of smart water tech"
      },
      {
        name: "Veolia",
        description: "World's largest water utility operator. Deep operational expertise but focused on operations, not infrastructure intelligence.",
        strengths: ["Operational expertise", "Global scale", "Utility relationships", "Full-service model"],
        weaknesses: ["Operator not technology company", "No data aggregation play", "Conflict of interest", "Limited SaaS"],
        marketShare: "~15% of private water operations"
      },
      {
        name: "Mueller Water Products",
        description: "Leading pipe and valve manufacturer. Infrastructure products with some smart technology but no platform play.",
        strengths: ["Infrastructure product leadership", "Utility relationships", "Distribution network", "Quality reputation"],
        weaknesses: ["Hardware-focused mindset", "No data strategy", "Limited software capability", "No analytics"],
        marketShare: "~20% of water infrastructure products"
      },
      {
        name: "Esri (ArcGIS Utility Network)",
        description: "GIS platform widely used by utilities. Strong mapping but not purpose-built for water infrastructure analytics.",
        strengths: ["GIS market leader", "Utility penetration", "Visualization tools", "Integration ecosystem"],
        weaknesses: ["Generic platform not water-specific", "No cross-utility data", "High implementation costs", "Limited analytics"],
        marketShare: "~60% of utility GIS"
      }
    ],
    moat: "Network effects: More utilities contributing data = better benchmarking + more accurate predictions = more utility adoption = more valuable platform. First mover in aggregated water infrastructure intelligence becomes the industry standard."
  },

  businessModel: {
    overview: "Multi-sided platform connecting water utilities, regulators, contractors, and infrastructure investors around data transparency, compliance, and capital efficiency.",
    revenueStreams: [
      {
        name: "Utility SaaS Subscriptions",
        description: "Annual subscription for utilities to access platform, contribute data, and receive benchmarking analytics",
        pricing: "$50K-$300K/year based on population served",
        margin: "85%",
        details: [
          "Data ingestion and standardization",
          "Leak detection analytics",
          "Condition assessment tools",
          "Peer benchmarking reports",
          "Capital planning support"
        ]
      },
      {
        name: "Regulatory Data Licensing",
        description: "API access to aggregated compliance data for EPA, state agencies, and municipal oversight bodies",
        pricing: "$200K-$1M annual contracts",
        margin: "92%",
        details: [
          "Lead pipe inventory aggregation",
          "Replacement progress tracking",
          "Compliance verification tools",
          "Reporting automation",
          "Audit trail documentation"
        ]
      },
      {
        name: "Contractor Data Access",
        description: "Subscription for pipe replacement contractors to access project opportunities and compliance requirements",
        pricing: "$5K-$15K/year per contractor",
        margin: "88%",
        details: [
          "Project opportunity alerts",
          "Bid preparation data",
          "Compliance requirement access",
          "Utility contact database",
          "Progress tracking integration"
        ]
      },
      {
        name: "Infrastructure Fund Analytics",
        description: "Premium analytics for private equity, infrastructure funds, and municipal bond analysts evaluating water investments",
        pricing: "$100K-$500K annual subscriptions",
        margin: "90%",
        details: [
          "Asset condition scoring",
          "Capital needs forecasting",
          "Risk assessment data",
          "Utility benchmarking",
          "Investment due diligence"
        ]
      }
    ],
    unitEconomics: {
      ltv: "$420,000",
      cac: "$42,000",
      ltvCacRatio: "10:1",
      paybackPeriod: "11 months",
      grossMargin: "87%",
      details: [
        "Average utility contract: 5 years @ $84K/year",
        "Expansion revenue from additional modules and data products",
        "CAC: $28K sales + $14K implementation/onboarding",
        "High retention due to data integration and switching costs"
      ]
    }
  },

  financials: {
    scenarios: {
      withFinancing: {
        name: "With Cap-Ex Financing Partnerships",
        description: "Deep integration with infrastructure funds and equipment finance creates capital deployment intelligence layer",
        projections: [
          { year: "Y1", revenue: "$2.8M", customers: "45 utilities", highlights: "Platform launch, EPA pilot partnership" },
          { year: "Y2", revenue: "$12M", customers: "120 utilities", highlights: "5 state agency partnerships, contractor network" },
          { year: "Y3", revenue: "$32M", customers: "220 utilities", highlights: "Infrastructure fund clients, national coverage" },
          { year: "Y4", revenue: "$58M", customers: "320 utilities", highlights: "Predictive analytics launch, M&A interest" },
          { year: "Y5", revenue: "$95M", customers: "450 utilities", highlights: "Market leadership, international expansion" }
        ],
        keyAssumptions: [
          "EPA partnership drives initial regulatory adoption",
          "Infrastructure funds account for 15% of revenue by Y3",
          "Utility network reaches 15% of US utilities by Y5",
          "Data network effects accelerate growth in Y3+"
        ]
      },
      withoutFinancing: {
        name: "Without Cap-Ex Financing Angle",
        description: "Pure utility SaaS focus with organic regulatory adoption",
        projections: [
          { year: "Y1", revenue: "$1.8M", customers: "30 utilities", highlights: "Platform MVP, regional focus" },
          { year: "Y2", revenue: "$6.5M", customers: "75 utilities", highlights: "Compliance module, multi-state" },
          { year: "Y3", revenue: "$18M", customers: "140 utilities", highlights: "Benchmarking network" },
          { year: "Y4", revenue: "$35M", customers: "220 utilities", highlights: "Regulatory traction" },
          { year: "Y5", revenue: "$58M", customers: "300 utilities", highlights: "Sustainable growth, profitable" }
        ],
        keyAssumptions: [
          "Utility sales cycles drive growth rate",
          "Slower regulatory adoption without capital partner credibility",
          "More capital-efficient growth path",
          "Limited contractor and investor product investment"
        ]
      }
    },
    useOfFunds: [
      { category: "Engineering & Product", percentage: 42, amount: "$1.89M", details: "Data platform build, analytics engine, integrations" },
      { category: "Sales & Partnerships", percentage: 28, amount: "$1.26M", details: "Utility sales, regulatory BD, contractor partnerships" },
      { category: "Data Operations", percentage: 15, amount: "$675K", details: "Data ingestion, standardization, quality assurance" },
      { category: "Marketing", percentage: 10, amount: "$450K", details: "Industry positioning, conferences, content marketing" },
      { category: "G&A", percentage: 5, amount: "$225K", details: "Legal, compliance, administration" }
    ]
  },

  risks: [
    {
      risk: "Utility Data Sharing Reluctance",
      severity: "High",
      mitigation: "Start with non-sensitive aggregated data. Offer clear value exchange (benchmarking) for data contribution. Build trust through regulatory partnerships."
    },
    {
      risk: "Long Utility Sales Cycles",
      severity: "High",
      mitigation: "Partner with industry associations for credibility. Target progressive utilities as early adopters. Offer free tier for data contribution to build network."
    },
    {
      risk: "Regulatory Dependency",
      severity: "Medium",
      mitigation: "Diversify revenue across utilities, contractors, and investors. Build utility value independent of compliance mandates. Multiple regulatory relationships."
    },
    {
      risk: "Data Quality & Standardization",
      severity: "Medium",
      mitigation: "Invest heavily in data ingestion and normalization. Build flexible schema for varied data formats. Quality scoring and validation systems."
    },
    {
      risk: "Incumbent Competition",
      severity: "Medium",
      mitigation: "Move fast to establish network effects. Focus on aggregation layer vs. point solutions. Partner with (not compete against) sensor/meter vendors."
    },
    {
      risk: "Cybersecurity & Critical Infrastructure",
      severity: "High",
      mitigation: "SOC 2 Type II from day one. No operational control access, data-only platform. Partner with DHS/CISA for security validation."
    }
  ],

  milestones: [
    { quarter: "Q1 2026", milestone: "Close seed round, hire core engineering team", status: "target" },
    { quarter: "Q2 2026", milestone: "Launch MVP with 15 pilot utilities across 3 states", status: "target" },
    { quarter: "Q3 2026", milestone: "EPA data sharing pilot agreement", status: "target" },
    { quarter: "Q4 2026", milestone: "50 utilities, lead pipe tracking module, $3M ARR", status: "target" },
    { quarter: "Q1 2027", milestone: "First state agency regulatory partnership", status: "target" },
    { quarter: "Q2 2027", milestone: "Contractor network launch, 100 utilities", status: "target" },
    { quarter: "Q3 2027", milestone: "Infrastructure fund analytics product", status: "target" },
    { quarter: "Q4 2027", milestone: "Series A at $80-100M valuation", status: "target" }
  ],

  team: {
    hiring: [
      { role: "CTO", priority: "Critical", timeline: "Immediate", description: "Data platform architecture, utility integrations, analytics systems" },
      { role: "VP Sales", priority: "Critical", timeline: "Q1 2026", description: "Utility sales, regulatory relationships, enterprise deals" },
      { role: "Head of Data", priority: "Critical", timeline: "Q2 2026", description: "Data standardization, quality systems, analytics development" },
      { role: "VP Partnerships", priority: "High", timeline: "Q2 2026", description: "Regulatory BD, contractor network, industry associations" }
    ]
  },

  ask: {
    amount: "$4.5M",
    round: "Seed",
    timeline: "Q1 2026",
    terms: "Priced round, standard seed terms",
    use: "Build data aggregation platform, establish utility partnerships, develop regulatory relationships, create infrastructure intelligence layer",
    targetInvestors: [
      "Climate tech and water-focused investors",
      "Infrastructure and govtech VCs",
      "Strategic water technology companies",
      "Impact investors focused on critical infrastructure"
    ]
  },

  sources: [
    { name: "EPA - Drinking Water Infrastructure Needs Survey", url: "https://www.epa.gov/ground-water-and-drinking-water/drinking-water-infrastructure-needs-survey" },
    { name: "American Water Works Association - State of the Water Industry", url: "https://www.awwa.org/resources-tools/water-knowledge/state-of-the-water-industry" },
    { name: "American Society of Civil Engineers - Infrastructure Report Card", url: "https://infrastructurereportcard.org/cat-item/drinking-water-infrastructure/" },
    { name: "Bluefield Research - US Water Market Outlook", url: "https://www.bluefieldresearch.com/research/us-water-market-outlook" },
    { name: "White House - Bipartisan Infrastructure Law Water Investments", url: "https://www.whitehouse.gov/briefing-room/statements-releases/2022/02/water/" },
    { name: "EPA - Lead and Copper Rule Revisions", url: "https://www.epa.gov/ground-water-and-drinking-water/lead-and-copper-rule" }
  ]
}

function ExpandableSection({ title, children, defaultOpen = false }: {
  title: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-zinc-600 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-zinc-800 flex items-center justify-between hover:bg-zinc-750 transition-colors"
      >
        <div className="font-semibold text-lg text-white">{title}</div>
        {isOpen ? <ChevronUp className="text-zinc-400" /> : <ChevronDown className="text-zinc-400" />}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-zinc-900">
          {children}
        </div>
      )}
    </div>
  )
}

function StatCard({ value, label, icon: Icon }: { value: string; label: string; icon: any }) {
  return (
    <div className="bg-zinc-800 rounded-lg p-4 text-center">
      <Icon className="w-6 h-6 text-sky-400 mx-auto mb-2" />
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-zinc-400">{label}</div>
    </div>
  )
}

export default function BusinessPlanPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'detailed' | 'financials'>('overview')

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="bg-zinc-900 border-b border-zinc-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4">
              <a href="/tokens/#framework" className="text-zinc-400 hover:text-white transition-colors mt-1">
                <ArrowLeft className="w-5 h-5" />
              </a>
              <div>
                <h1 className="text-2xl font-bold text-sky-300">{businessPlan.companyName}</h1>
                <p className="text-zinc-400 text-sm">{businessPlan.tagline}</p>
              </div>
            </div>
            <div className="text-right text-sm text-zinc-500">
              <div>{businessPlan.version}</div>
              <div>{businessPlan.date}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="bg-zinc-900 border-b border-zinc-700 sticky top-0 z-10">
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
                    ? 'text-sky-300 border-b-2 border-sky-400'
                    : 'text-zinc-400 hover:text-white'
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
            <section className="bg-gradient-to-r from-zinc-800/50 to-sky-900/30 rounded-xl p-8 border border-zinc-600">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="text-sky-400" />
                Executive Summary
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sky-300 font-semibold mb-2">The Problem</h3>
                  <p className="text-zinc-300">{businessPlan.executiveSummary.problem}</p>
                </div>
                <div>
                  <h3 className="text-sky-300 font-semibold mb-2">Our Solution</h3>
                  <p className="text-zinc-300">{businessPlan.executiveSummary.solution}</p>
                </div>
                <div>
                  <h3 className="text-sky-300 font-semibold mb-2">Market Opportunity</h3>
                  <p className="text-zinc-300">{businessPlan.executiveSummary.market}</p>
                </div>
                <div>
                  <h3 className="text-sky-300 font-semibold mb-2">The Ask</h3>
                  <p className="text-zinc-300">{businessPlan.executiveSummary.ask}</p>
                </div>
              </div>
            </section>

            {/* Key Stats */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard value="$150B" label="TAM" icon={Globe} />
                <StatCard value="9.2M" label="Lead Pipes to Replace" icon={Wrench} />
                <StatCard value="10:1" label="LTV:CAC Ratio" icon={BarChart3} />
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
                  <div key={i} className="bg-zinc-800 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-white">{point.title}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-400">{point.stat}</div>
                        <div className="text-xs text-zinc-500">{point.statLabel}</div>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm">{point.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Lightbulb className="text-sky-400" />
                {businessPlan.solution.title}
              </h2>
              <p className="text-zinc-400 mb-6">{businessPlan.solution.tagline}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {businessPlan.solution.pillars.map((pillar, i) => {
                  const IconComponent = pillar.icon === 'Database' ? Database :
                    pillar.icon === 'Search' ? Search :
                    pillar.icon === 'Gauge' ? Gauge :
                    pillar.icon === 'Droplets' ? Droplets : Database
                  return (
                    <div key={i} className="bg-zinc-800 rounded-lg p-5">
                      <IconComponent className="w-8 h-8 text-sky-400 mb-3" />
                      <h3 className="font-semibold text-white mb-2">{pillar.title}</h3>
                      <p className="text-zinc-400 text-sm mb-3">{pillar.description}</p>
                      <ul className="space-y-1">
                        {pillar.features.map((feature, j) => (
                          <li key={j} className="text-xs text-zinc-500 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-sky-400" />
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
            <section className="bg-gradient-to-r from-zinc-800/30 to-sky-900/20 rounded-xl p-8 border border-zinc-600">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="text-sky-400" />
                The Ask
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-sky-300">{businessPlan.ask.amount}</div>
                  <div className="text-zinc-400">{businessPlan.ask.round} Round</div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-zinc-300 mb-4">{businessPlan.ask.use}</p>
                  <div className="flex flex-wrap gap-2">
                    {businessPlan.ask.targetInvestors.map((investor, i) => (
                      <span key={i} className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300">
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
              title={<div className="flex items-center gap-2"><Clock className="text-sky-400" /> Why Now?</div>}
              defaultOpen={true}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => {
                  const IconComponent = factor.icon === 'DollarSign' ? DollarSign :
                    factor.icon === 'AlertTriangle' ? AlertTriangle :
                    factor.icon === 'Activity' ? Activity :
                    factor.icon === 'TrendingUp' ? TrendingUp : Clock
                  return (
                    <div key={i} className="bg-zinc-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5 text-sky-400" />
                        <h3 className="font-semibold text-white">{factor.title}</h3>
                      </div>
                      <p className="text-zinc-400 text-sm">{factor.detail}</p>
                    </div>
                  )
                })}
              </div>
            </ExpandableSection>

            {/* Market Size */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><PieChart className="text-sky-400" /> Market Size</div>}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { key: 'tam', label: 'TAM', data: businessPlan.marketSize.tam },
                  { key: 'sam', label: 'SAM', data: businessPlan.marketSize.sam },
                  { key: 'som', label: 'SOM (Y5)', data: businessPlan.marketSize.som }
                ].map(({ key, label, data }) => (
                  <div key={key} className="bg-zinc-800 rounded-lg p-5">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-sky-300">{data.value}</div>
                      <div className="text-sm text-zinc-400">{label}</div>
                    </div>
                    <p className="text-sm text-zinc-400 mb-3">{data.description}</p>
                    <div className="space-y-2">
                      {data.breakdown.map((item, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span className="text-zinc-400">{item.segment}</span>
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
              title={<div className="flex items-center gap-2"><Users className="text-sky-400" /> Competitive Landscape</div>}
            >
              <p className="text-zinc-400 mb-4">{businessPlan.competition.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {businessPlan.competition.competitors.map((comp, i) => (
                  <div key={i} className="bg-zinc-800 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">{comp.name}</h3>
                    <p className="text-zinc-400 text-sm mb-3">{comp.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="text-green-400 font-medium mb-1">Strengths</div>
                        <ul className="text-zinc-400 space-y-1">
                          {comp.strengths.map((s, j) => <li key={j}>+ {s}</li>)}
                        </ul>
                      </div>
                      <div>
                        <div className="text-red-400 font-medium mb-1">Weaknesses</div>
                        <ul className="text-zinc-400 space-y-1">
                          {comp.weaknesses.map((w, j) => <li key={j}>- {w}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-sky-900/30 rounded-lg p-4 border border-sky-700">
                <h3 className="font-semibold text-sky-300 mb-2">Our Moat</h3>
                <p className="text-zinc-300">{businessPlan.competition.moat}</p>
              </div>
            </ExpandableSection>

            {/* Business Model */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Briefcase className="text-sky-400" /> Business Model</div>}
            >
              <p className="text-zinc-400 mb-4">{businessPlan.businessModel.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {businessPlan.businessModel.revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-zinc-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{stream.name}</h3>
                      <span className="text-sky-300 font-medium">{stream.pricing}</span>
                    </div>
                    <p className="text-zinc-400 text-sm mb-3">{stream.description}</p>
                    <div className="text-xs text-zinc-500 mb-2">Gross Margin: {stream.margin}</div>
                    <ul className="text-xs text-zinc-400 space-y-1">
                      {stream.details.map((d, j) => (
                        <li key={j} className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-sky-400" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Unit Economics */}
              <div className="bg-zinc-800 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-4">Unit Economics</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sky-300">{businessPlan.businessModel.unitEconomics.ltv}</div>
                    <div className="text-xs text-zinc-400">LTV</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sky-300">{businessPlan.businessModel.unitEconomics.cac}</div>
                    <div className="text-xs text-zinc-400">CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sky-300">{businessPlan.businessModel.unitEconomics.ltvCacRatio}</div>
                    <div className="text-xs text-zinc-400">LTV:CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sky-300">{businessPlan.businessModel.unitEconomics.paybackPeriod}</div>
                    <div className="text-xs text-zinc-400">Payback</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sky-300">{businessPlan.businessModel.unitEconomics.grossMargin}</div>
                    <div className="text-xs text-zinc-400">Gross Margin</div>
                  </div>
                </div>
                <ul className="text-sm text-zinc-400 space-y-1">
                  {businessPlan.businessModel.unitEconomics.details.map((d, i) => (
                    <li key={i}>* {d}</li>
                  ))}
                </ul>
              </div>
            </ExpandableSection>

            {/* Risks */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Shield className="text-sky-400" /> Risks & Mitigations</div>}
            >
              <div className="space-y-3">
                {businessPlan.risks.map((risk, i) => (
                  <div key={i} className="bg-zinc-800 rounded-lg p-4">
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
                    <p className="text-zinc-400 text-sm"><strong className="text-zinc-300">Mitigation:</strong> {risk.mitigation}</p>
                  </div>
                ))}
              </div>
            </ExpandableSection>

            {/* Milestones */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Award className="text-sky-400" /> Milestones & Timeline</div>}
            >
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-700" />
                <div className="space-y-4">
                  {businessPlan.milestones.map((m, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-sky-400" />
                      <div className="bg-zinc-800 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sky-300 font-medium">{m.quarter}</span>
                        </div>
                        <p className="text-zinc-300">{m.milestone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ExpandableSection>

            {/* Team */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Users className="text-sky-400" /> Team & Hiring</div>}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.team.hiring.map((hire, i) => (
                  <div key={i} className="bg-zinc-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{hire.role}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        hire.priority === 'Critical' ? 'bg-red-900/50 text-red-400' : 'bg-yellow-900/50 text-yellow-400'
                      }`}>
                        {hire.priority}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm mb-1">{hire.description}</p>
                    <p className="text-xs text-zinc-500">Timeline: {hire.timeline}</p>
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
                <LineChart className="text-sky-400" />
                Financial Projections
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* With Financing */}
                <div className="bg-zinc-800 rounded-xl p-6 border-2 border-sky-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="text-sky-300" />
                    <h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withFinancing.name}</h3>
                  </div>
                  <p className="text-zinc-400 text-sm mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>

                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-zinc-700">
                          <th className="text-left py-2 text-zinc-400">Year</th>
                          <th className="text-right py-2 text-zinc-400">Revenue</th>
                          <th className="text-right py-2 text-zinc-400">Utilities</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withFinancing.projections.map((proj, i) => (
                          <tr key={i} className="border-b border-zinc-700/50">
                            <td className="py-2 text-white">{proj.year}</td>
                            <td className="py-2 text-right text-sky-300 font-medium">{proj.revenue}</td>
                            <td className="py-2 text-right text-zinc-300">{proj.customers}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="text-xs text-zinc-400">
                    <div className="font-medium mb-1">Key Assumptions:</div>
                    <ul className="space-y-1">
                      {businessPlan.financials.scenarios.withFinancing.keyAssumptions.map((a, i) => (
                        <li key={i}>* {a}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Without Financing */}
                <div className="bg-zinc-800 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="text-zinc-400" />
                    <h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withoutFinancing.name}</h3>
                  </div>
                  <p className="text-zinc-400 text-sm mb-4">{businessPlan.financials.scenarios.withoutFinancing.description}</p>

                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-zinc-700">
                          <th className="text-left py-2 text-zinc-400">Year</th>
                          <th className="text-right py-2 text-zinc-400">Revenue</th>
                          <th className="text-right py-2 text-zinc-400">Utilities</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutFinancing.projections.map((proj, i) => (
                          <tr key={i} className="border-b border-zinc-700/50">
                            <td className="py-2 text-white">{proj.year}</td>
                            <td className="py-2 text-right text-sky-300 font-medium">{proj.revenue}</td>
                            <td className="py-2 text-right text-zinc-300">{proj.customers}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="text-xs text-zinc-400">
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
                <PieChart className="text-sky-400" />
                Use of Funds
              </h2>
              <div className="bg-zinc-800 rounded-xl p-6">
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-sky-300">{fund.percentage}%</div>
                      <div className="text-sm font-medium text-white">{fund.category}</div>
                      <div className="text-xs text-zinc-400">{fund.amount}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-32 text-sm text-zinc-400">{fund.category}</div>
                      <div className="flex-1 bg-zinc-700 rounded-full h-4">
                        <div
                          className="bg-sky-500 h-4 rounded-full"
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
                <FileText className="text-sky-400" />
                Sources
              </h2>
              <div className="bg-zinc-800 rounded-lg p-4">
                <ul className="space-y-2">
                  {businessPlan.sources.map((source, i) => (
                    <li key={i}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 hover:text-sky-300 flex items-center gap-2"
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
      <footer className="bg-zinc-900 border-t border-zinc-700 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-zinc-500 text-sm">
          <p>{businessPlan.companyName} Business Plan * {businessPlan.version} * {businessPlan.date}</p>
          <p className="mt-2">Part of the <a href="/tokens/#framework" className="text-sky-400 hover:text-sky-300">Ribbit Token Cap-Ex Framework</a></p>
        </div>
      </footer>
    </div>
  )
}
