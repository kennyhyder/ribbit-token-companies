'use client'

import { useState } from 'react'
import {
  ArrowLeft, Target, TrendingUp, DollarSign, Users, Shield, AlertTriangle,
  CheckCircle, ExternalLink, ChevronDown, ChevronUp, Building2, Zap, BarChart3,
  Clock, Wrench, FileText, Briefcase, Lightbulb, Globe, Award, PieChart, LineChart, Activity,
  Server, Database, Wifi, Cloud, Monitor, Cpu, ThermometerSun, Power
} from 'lucide-react'

const businessPlan = {
  companyName: "DataPulse",
  tagline: "Unified Visibility for Distributed Data Center Infrastructure",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Hyperscalers build internal tools while colocation providers have fragmented monitoring. Edge data centers are exploding with zero standardization. No unified visibility exists across distributed infrastructure.",
    solution: "DataPulse aggregates edge and colocation facility data (power, cooling, connectivity), creates reliability scoring, and enables a capacity marketplace. We are PowerOutage.us for data centers.",
    market: "$200B data center infrastructure market with $5B+ in DCIM software. Edge facilities ($1-10M each) being deployed by thousands of companies. Reliability data directly affects financing terms.",
    ask: "$5M Seed Round to build the infrastructure monitoring platform, establish REIT and developer partnerships, and create the reliability scoring system that transforms data center financing."
  },

  problem: {
    title: "The Data Center Visibility Crisis",
    points: [
      {
        title: "Hyperscaler Walled Gardens",
        detail: "AWS, Google, Microsoft build proprietary internal monitoring tools. No visibility into actual infrastructure performance for customers or the broader market.",
        stat: "70%+",
        statLabel: "of cloud infrastructure invisible to market"
      },
      {
        title: "Fragmented Colo Monitoring",
        detail: "Colocation providers use 50+ different DCIM solutions with incompatible data formats. Enterprises managing multi-colo deployments have zero unified visibility.",
        stat: "50+",
        statLabel: "different DCIM systems in market"
      },
      {
        title: "Edge Explosion Without Standards",
        detail: "Thousands of edge data centers ($1-10M each) being deployed by enterprises, telcos, and CDNs. No standardized monitoring, reliability metrics, or benchmarking.",
        stat: "$1-10M",
        statLabel: "per edge facility, zero standardization"
      },
      {
        title: "Financing Blind Spots",
        detail: "Data center lenders and REITs lack real-time infrastructure data. Reliability directly affects financing terms but no independent scoring exists.",
        stat: "$50B+",
        statLabel: "annual DC infrastructure lending"
      }
    ]
  },

  solution: {
    title: "DataPulse: The Infrastructure Intelligence Platform",
    tagline: "Monitor. Score. Trade. Finance.",
    pillars: [
      {
        icon: "Server",
        title: "Universal Monitoring",
        description: "Hardware-agnostic monitoring layer that works across all data center types: hyperscale, colo, enterprise, and edge. Single pane of glass for distributed infrastructure.",
        features: ["Multi-vendor integration", "Real-time telemetry", "Power & cooling metrics", "Connectivity monitoring"]
      },
      {
        icon: "BarChart3",
        title: "Reliability Scoring",
        description: "Standardized reliability scores based on actual performance data. Independent benchmarking that creates transparency for the entire ecosystem.",
        features: ["Uptime verification", "PUE benchmarking", "Incident tracking", "Predictive analytics"]
      },
      {
        icon: "Cloud",
        title: "Capacity Marketplace",
        description: "Real-time visibility into available capacity across facilities. Enable dynamic capacity allocation and spot market for data center resources.",
        features: ["Live inventory", "Capacity forecasting", "Price discovery", "Instant procurement"]
      },
      {
        icon: "DollarSign",
        title: "Finance Integration",
        description: "API feeds to lenders and REITs with verified infrastructure performance data. Reliability scores directly inform financing terms and valuations.",
        features: ["Lender dashboards", "REIT integrations", "Risk scoring", "Due diligence automation"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "Edge Infrastructure Explosion",
        detail: "5G, AI inference, and low-latency computing driving massive edge data center deployment. Thousands of new facilities with no monitoring standards.",
        icon: "TrendingUp"
      },
      {
        title: "Data Center Capital Boom",
        detail: "$50B+ annually flowing into data center infrastructure. Lenders and investors need better visibility into asset performance.",
        icon: "Building2"
      },
      {
        title: "Sustainability Mandates",
        detail: "ESG requirements forcing transparency on power usage and efficiency. PUE reporting becoming mandatory for enterprise customers.",
        icon: "ThermometerSun"
      },
      {
        title: "Multi-Cloud Reality",
        detail: "Enterprises using 3-5 cloud providers plus colo. Need unified visibility across fragmented infrastructure footprint.",
        icon: "Cloud"
      }
    ]
  },

  marketSize: {
    tam: {
      value: "$200B",
      description: "Total addressable market: Global data center infrastructure including construction, equipment, and operations",
      breakdown: [
        { segment: "Data Center Construction", value: "$75B", growth: "14.2% CAGR" },
        { segment: "Cooling & Power Equipment", value: "$65B", growth: "11.8% CAGR" },
        { segment: "DCIM & Monitoring Software", value: "$5B", growth: "18.5% CAGR" },
        { segment: "Edge Infrastructure", value: "$55B", growth: "22.4% CAGR" }
      ]
    },
    sam: {
      value: "$8.5B",
      description: "Serviceable addressable market: Data center monitoring and infrastructure intelligence in North America and Europe",
      breakdown: [
        { segment: "Enterprise DCIM", value: "$2.8B", growth: "Fortune 1000 facilities" },
        { segment: "Colocation Monitoring", value: "$2.2B", growth: "Multi-tenant facilities" },
        { segment: "Edge Monitoring", value: "$1.8B", growth: "Distributed infrastructure" },
        { segment: "Infrastructure Finance Data", value: "$1.7B", growth: "Lender/REIT analytics" }
      ]
    },
    som: {
      value: "$120M",
      description: "Year 5 revenue target: 500 facilities monitored, 50 enterprise customers, 10 REIT/lender partnerships",
      breakdown: [
        { segment: "Platform Subscriptions", value: "$58M", growth: "500 facilities @ $9,700/mo avg" },
        { segment: "Reliability Data Licensing", value: "$32M", growth: "50 enterprises @ $640K/yr" },
        { segment: "Finance API Revenue", value: "$22M", growth: "10 REITs/lenders @ $2.2M/yr" },
        { segment: "Marketplace Transaction Fees", value: "$8M", growth: "2% of $400M capacity trades" }
      ]
    }
  },

  competition: {
    overview: "The market is dominated by incumbent DCIM vendors who focus on single-facility management. Hyperscalers have internal tools but don't productize them. No platform provides cross-facility visibility with reliability scoring and finance integration.",
    competitors: [
      {
        name: "Schneider Electric (EcoStruxure)",
        description: "Legacy DCIM leader with strong hardware integration. Focused on single-facility management with enterprise sales model.",
        strengths: ["Hardware integration", "Enterprise relationships", "Brand recognition", "Global support"],
        weaknesses: ["Single-facility focus", "No cross-provider visibility", "Expensive implementation", "Slow innovation"],
        marketShare: "~25% of DCIM market"
      },
      {
        name: "Vertiv (Liebert)",
        description: "Power and cooling equipment manufacturer with monitoring software. Strong in colo and enterprise data centers.",
        strengths: ["Equipment bundling", "Thermal expertise", "Colo relationships", "Service network"],
        weaknesses: ["Hardware-centric model", "Limited edge capability", "No reliability scoring", "Fragmented products"],
        marketShare: "~18% of DCIM market"
      },
      {
        name: "Hyperscaler Internal Tools",
        description: "AWS, Google, Microsoft have sophisticated internal monitoring but don't expose data or productize for external use.",
        strengths: ["Massive scale experience", "AI/ML capabilities", "Integration depth", "Operational excellence"],
        weaknesses: ["Walled gardens", "No external access", "Not productized", "Competitive conflict"],
        marketShare: "Internal use only"
      },
      {
        name: "Nlyte / Sunbird / Device42",
        description: "Pure-play DCIM software vendors. Modern interfaces but still facility-centric without cross-platform vision.",
        strengths: ["Modern software", "API-first", "Lower cost", "Faster deployment"],
        weaknesses: ["Limited scale", "No finance integration", "Single-facility focus", "No reliability scoring"],
        marketShare: "~15% combined"
      }
    ],
    moat: "Network effects: More facilities monitored = better reliability benchmarks = more enterprise adoption = more facilities. First platform with cross-facility visibility and finance integration becomes the industry standard."
  },

  businessModel: {
    overview: "Four-sided platform connecting data center operators, enterprises, capacity buyers, and infrastructure lenders around visibility, reliability, and financing efficiency.",
    revenueStreams: [
      {
        name: "Platform Subscriptions",
        description: "Monthly subscription for facility monitoring, analytics, and benchmarking",
        pricing: "$5,000-$25,000/month per facility based on size",
        margin: "88%",
        details: [
          "Universal monitoring agents",
          "Real-time dashboards",
          "Alerting and automation",
          "Benchmark reports",
          "API access"
        ]
      },
      {
        name: "Reliability Data Licensing",
        description: "Enterprise access to cross-facility reliability data, benchmarks, and vendor comparisons",
        pricing: "$400K-$1.2M annual contracts",
        margin: "92%",
        details: [
          "Facility reliability scores",
          "Vendor benchmarking",
          "Risk assessment data",
          "Procurement intelligence",
          "SLA verification"
        ]
      },
      {
        name: "Finance API Revenue",
        description: "Real-time infrastructure data feeds for REITs, lenders, and investors",
        pricing: "$1.5M-$5M annual contracts",
        margin: "94%",
        details: [
          "Asset performance data",
          "Due diligence automation",
          "Portfolio monitoring",
          "Risk scoring models",
          "Valuation inputs"
        ]
      },
      {
        name: "Marketplace Transaction Fees",
        description: "Percentage of capacity transactions facilitated through platform",
        pricing: "1.5-3% of transaction value",
        margin: "85%",
        details: [
          "Capacity discovery",
          "Price transparency",
          "Contract facilitation",
          "Settlement processing",
          "Dispute resolution"
        ]
      }
    ],
    unitEconomics: {
      ltv: "$288,000",
      cac: "$24,000",
      ltvCacRatio: "12:1",
      paybackPeriod: "8 months",
      grossMargin: "85%",
      details: [
        "Average facility subscription: 5 years ($9,700/mo avg) + data licensing upsell",
        "Enterprise expansion from single facility to portfolio monitoring",
        "CAC: $16K digital + $8K sales/implementation for facilities",
        "High retention due to operational integration and benchmark value"
      ]
    }
  },

  financials: {
    scenarios: {
      withFinancing: {
        name: "With Cap-Ex Financing Partnerships",
        description: "Deep integration with data center REITs and lenders creates data moat and premium revenue",
        projections: [
          { year: "Y1", revenue: "$3.8M", customers: "75 facilities", highlights: "Platform launch, 5 REIT pilots" },
          { year: "Y2", revenue: "$18M", customers: "180 facilities", highlights: "10 enterprise customers, finance API live" },
          { year: "Y3", revenue: "$48M", customers: "320 facilities", highlights: "Reliability scoring standard adoption" },
          { year: "Y4", revenue: "$85M", customers: "420 facilities", highlights: "Capacity marketplace launch" },
          { year: "Y5", revenue: "$135M", customers: "550 facilities", highlights: "Category leader, acquisition interest" }
        ],
        keyAssumptions: [
          "3 major data center REITs sign in Year 1",
          "Finance API drives 25% of revenue by Y3",
          "Reliability scoring becomes industry standard",
          "Capacity marketplace achieves $400M GMV by Y5"
        ]
      },
      withoutFinancing: {
        name: "Without Cap-Ex Financing Angle",
        description: "Pure DCIM focus with facility subscriptions and enterprise data licensing",
        projections: [
          { year: "Y1", revenue: "$2.2M", customers: "50 facilities", highlights: "Monitoring platform launch" },
          { year: "Y2", revenue: "$9M", customers: "120 facilities", highlights: "Enterprise adoption growing" },
          { year: "Y3", revenue: "$26M", customers: "200 facilities", highlights: "Reliability scoring product" },
          { year: "Y4", revenue: "$48M", customers: "300 facilities", highlights: "Market share growing" },
          { year: "Y5", revenue: "$78M", customers: "400 facilities", highlights: "Profitable, sustainable growth" }
        ],
        keyAssumptions: [
          "Facility acquisition primary driver",
          "Slower enterprise adoption without finance data",
          "More capital-efficient growth path",
          "Incumbent competitive response expected"
        ]
      }
    },
    useOfFunds: [
      { category: "Engineering & Product", percentage: 42, amount: "$2.1M", details: "Platform build, monitoring agents, reliability algorithms" },
      { category: "Sales & Partnerships", percentage: 26, amount: "$1.3M", details: "REIT partnerships, enterprise sales, operator onboarding" },
      { category: "Operations & Infrastructure", percentage: 15, amount: "$750K", details: "Monitoring infrastructure, data processing, security" },
      { category: "Marketing", percentage: 12, amount: "$600K", details: "Brand building, industry positioning, events" },
      { category: "G&A", percentage: 5, amount: "$250K", details: "Legal, compliance, administration" }
    ]
  },

  risks: [
    {
      risk: "Hyperscaler Competition",
      severity: "High",
      mitigation: "Focus on cross-cloud visibility they can't provide. Build relationships with colo operators and edge providers. Position as neutral third party."
    },
    {
      risk: "Data Center Operator Resistance",
      severity: "High",
      mitigation: "Lead with benchmarking value, not transparency. Show how reliability scores attract tenants. Partner with progressive operators first."
    },
    {
      risk: "Integration Complexity",
      severity: "Medium",
      mitigation: "Build universal agent that works with major equipment vendors. Start with software-only monitoring before hardware integration."
    },
    {
      risk: "Enterprise Sales Cycles",
      severity: "Medium",
      mitigation: "Offer self-serve for single facilities. Build case studies with early adopters. Partner with colo providers for distribution."
    },
    {
      risk: "Data Security Concerns",
      severity: "Medium",
      mitigation: "SOC 2 Type II certification from day one. Edge processing for sensitive data. Clear data ownership policies."
    },
    {
      risk: "Market Timing on Edge",
      severity: "Low",
      mitigation: "Edge growth projections well-documented. Start with colo and enterprise, expand to edge as market develops."
    }
  ],

  milestones: [
    { quarter: "Q1 2026", milestone: "Close seed round, hire core engineering team", status: "target" },
    { quarter: "Q2 2026", milestone: "Launch monitoring platform MVP with 40 facilities", status: "target" },
    { quarter: "Q3 2026", milestone: "First data center REIT partnership signed", status: "target" },
    { quarter: "Q4 2026", milestone: "100 facilities monitored, reliability scoring beta", status: "target" },
    { quarter: "Q1 2027", milestone: "Finance API pilot with 3 lenders", status: "target" },
    { quarter: "Q2 2027", milestone: "5 enterprise customers, $8M ARR", status: "target" },
    { quarter: "Q3 2027", milestone: "Capacity marketplace beta launch", status: "target" },
    { quarter: "Q4 2027", milestone: "Series A at $120-150M valuation", status: "target" }
  ],

  team: {
    hiring: [
      { role: "CTO", priority: "Critical", timeline: "Immediate", description: "Distributed systems, data center operations experience" },
      { role: "VP Engineering", priority: "Critical", timeline: "Q1 2026", description: "Platform build, monitoring agent development" },
      { role: "VP Sales", priority: "Critical", timeline: "Q2 2026", description: "Enterprise sales, REIT relationships" },
      { role: "Head of Data Science", priority: "High", timeline: "Q2 2026", description: "Reliability scoring, predictive analytics" }
    ]
  },

  ask: {
    amount: "$5M",
    round: "Seed",
    timeline: "Q1 2026",
    terms: "Priced round, standard seed terms",
    use: "Build infrastructure monitoring platform, establish REIT partnerships, develop reliability scoring algorithms",
    targetInvestors: [
      "Infrastructure technology investors (Andreessen, Founders Fund)",
      "Data center-focused VCs (Digital Bridge, DigitalOcean Ventures)",
      "Real estate tech investors",
      "Strategic: Colo operators, equipment manufacturers"
    ]
  },

  sources: [
    { name: "Synergy Research - Data Center Market Sizing", url: "https://www.srgresearch.com/datacenter" },
    { name: "Gartner - DCIM Market Guide", url: "https://www.gartner.com/en/documents/dcim-market-guide" },
    { name: "McKinsey - Data Center Infrastructure Trends", url: "https://www.mckinsey.com/industries/technology/our-insights/data-centers" },
    { name: "JLL - Data Center Investment Outlook", url: "https://www.us.jll.com/en/trends-and-insights/research/data-center-outlook" },
    { name: "Uptime Institute - Data Center Industry Survey", url: "https://uptimeinstitute.com/resources/research-and-reports" },
    { name: "451 Research - Edge Infrastructure Market", url: "https://451research.com/edge-computing" }
  ]
}

function ExpandableSection({ title, children, defaultOpen = false }: {
  title: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-blue-800/50 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-blue-950/50 flex items-center justify-between hover:bg-blue-900/30 transition-colors"
      >
        <div className="font-semibold text-lg text-white">{title}</div>
        {isOpen ? <ChevronUp className="text-blue-400" /> : <ChevronDown className="text-blue-400" />}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-slate-950">
          {children}
        </div>
      )}
    </div>
  )
}

function StatCard({ value, label, icon: Icon }: { value: string; label: string; icon: any }) {
  return (
    <div className="bg-blue-950/40 border border-blue-800/30 rounded-lg p-4 text-center">
      <Icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-blue-300/70">{label}</div>
    </div>
  )
}

export default function BusinessPlanPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'detailed' | 'financials'>('overview')

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="bg-blue-950/50 border-b border-blue-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4">
              <a href="/tokens/#framework" className="text-blue-400 hover:text-blue-300 transition-colors mt-1">
                <ArrowLeft className="w-5 h-5" />
              </a>
              <div>
                <h1 className="text-2xl font-bold text-blue-300">{businessPlan.companyName}</h1>
                <p className="text-blue-400/70 text-sm">{businessPlan.tagline}</p>
              </div>
            </div>
            <div className="text-right text-sm text-blue-400/50">
              <div>{businessPlan.version}</div>
              <div>{businessPlan.date}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="bg-blue-950/30 border-b border-blue-800/50 sticky top-0 z-10">
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
                    ? 'text-blue-300 border-b-2 border-blue-400'
                    : 'text-blue-400/60 hover:text-blue-300'
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
            <section className="bg-gradient-to-r from-blue-950/50 to-cyan-950/30 rounded-xl p-8 border border-blue-800/40">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="text-blue-400" />
                Executive Summary
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-blue-300 font-semibold mb-2">The Problem</h3>
                  <p className="text-blue-100/80">{businessPlan.executiveSummary.problem}</p>
                </div>
                <div>
                  <h3 className="text-blue-300 font-semibold mb-2">Our Solution</h3>
                  <p className="text-blue-100/80">{businessPlan.executiveSummary.solution}</p>
                </div>
                <div>
                  <h3 className="text-blue-300 font-semibold mb-2">Market Opportunity</h3>
                  <p className="text-blue-100/80">{businessPlan.executiveSummary.market}</p>
                </div>
                <div>
                  <h3 className="text-blue-300 font-semibold mb-2">The Ask</h3>
                  <p className="text-blue-100/80">{businessPlan.executiveSummary.ask}</p>
                </div>
              </div>
            </section>

            {/* Key Stats */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard value="$200B" label="TAM" icon={Globe} />
                <StatCard value="$5B" label="DCIM Market" icon={Server} />
                <StatCard value="12:1" label="LTV:CAC Ratio" icon={BarChart3} />
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
                  <div key={i} className="bg-blue-950/30 border border-blue-800/30 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-white">{point.title}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-400">{point.stat}</div>
                        <div className="text-xs text-blue-400/60">{point.statLabel}</div>
                      </div>
                    </div>
                    <p className="text-blue-200/70 text-sm">{point.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Lightbulb className="text-blue-400" />
                {businessPlan.solution.title}
              </h2>
              <p className="text-blue-400/70 mb-6">{businessPlan.solution.tagline}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {businessPlan.solution.pillars.map((pillar, i) => {
                  const IconComponent = pillar.icon === 'Server' ? Server :
                    pillar.icon === 'BarChart3' ? BarChart3 :
                    pillar.icon === 'Cloud' ? Cloud :
                    pillar.icon === 'DollarSign' ? DollarSign : Server
                  return (
                    <div key={i} className="bg-blue-950/40 border border-blue-800/30 rounded-lg p-5">
                      <IconComponent className="w-8 h-8 text-blue-400 mb-3" />
                      <h3 className="font-semibold text-white mb-2">{pillar.title}</h3>
                      <p className="text-blue-200/70 text-sm mb-3">{pillar.description}</p>
                      <ul className="space-y-1">
                        {pillar.features.map((feature, j) => (
                          <li key={j} className="text-xs text-blue-400/60 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-blue-400" />
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
            <section className="bg-gradient-to-r from-blue-950/30 to-cyan-950/20 rounded-xl p-8 border border-blue-800/40">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="text-blue-400" />
                The Ask
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-300">{businessPlan.ask.amount}</div>
                  <div className="text-blue-400/70">{businessPlan.ask.round} Round</div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-blue-100/80 mb-4">{businessPlan.ask.use}</p>
                  <div className="flex flex-wrap gap-2">
                    {businessPlan.ask.targetInvestors.map((investor, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-900/40 border border-blue-700/30 rounded-full text-sm text-blue-200">
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
              title={<div className="flex items-center gap-2"><Clock className="text-blue-400" /> Why Now?</div>}
              defaultOpen={true}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => {
                  const IconComponent = factor.icon === 'TrendingUp' ? TrendingUp :
                    factor.icon === 'Building2' ? Building2 :
                    factor.icon === 'ThermometerSun' ? ThermometerSun :
                    factor.icon === 'Cloud' ? Cloud : Clock
                  return (
                    <div key={i} className="bg-blue-950/40 border border-blue-800/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5 text-blue-400" />
                        <h3 className="font-semibold text-white">{factor.title}</h3>
                      </div>
                      <p className="text-blue-200/70 text-sm">{factor.detail}</p>
                    </div>
                  )
                })}
              </div>
            </ExpandableSection>

            {/* Market Size */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><PieChart className="text-blue-400" /> Market Size</div>}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { key: 'tam', label: 'TAM', data: businessPlan.marketSize.tam },
                  { key: 'sam', label: 'SAM', data: businessPlan.marketSize.sam },
                  { key: 'som', label: 'SOM (Y5)', data: businessPlan.marketSize.som }
                ].map(({ key, label, data }) => (
                  <div key={key} className="bg-blue-950/40 border border-blue-800/30 rounded-lg p-5">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-blue-300">{data.value}</div>
                      <div className="text-sm text-blue-400/70">{label}</div>
                    </div>
                    <p className="text-sm text-blue-200/60 mb-3">{data.description}</p>
                    <div className="space-y-2">
                      {data.breakdown.map((item, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span className="text-blue-300/70">{item.segment}</span>
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
              title={<div className="flex items-center gap-2"><Users className="text-blue-400" /> Competitive Landscape</div>}
            >
              <p className="text-blue-200/70 mb-4">{businessPlan.competition.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {businessPlan.competition.competitors.map((comp, i) => (
                  <div key={i} className="bg-blue-950/40 border border-blue-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">{comp.name}</h3>
                    <p className="text-blue-200/60 text-sm mb-3">{comp.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="text-green-400 font-medium mb-1">Strengths</div>
                        <ul className="text-blue-300/70 space-y-1">
                          {comp.strengths.map((s, j) => <li key={j}>+ {s}</li>)}
                        </ul>
                      </div>
                      <div>
                        <div className="text-red-400 font-medium mb-1">Weaknesses</div>
                        <ul className="text-blue-300/70 space-y-1">
                          {comp.weaknesses.map((w, j) => <li key={j}>- {w}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-cyan-950/30 rounded-lg p-4 border border-cyan-700/30">
                <h3 className="font-semibold text-cyan-300 mb-2">Our Moat</h3>
                <p className="text-blue-100/80">{businessPlan.competition.moat}</p>
              </div>
            </ExpandableSection>

            {/* Business Model */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Briefcase className="text-blue-400" /> Business Model</div>}
            >
              <p className="text-blue-200/70 mb-4">{businessPlan.businessModel.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {businessPlan.businessModel.revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-blue-950/40 border border-blue-800/30 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{stream.name}</h3>
                      <span className="text-blue-300 font-medium">{stream.pricing}</span>
                    </div>
                    <p className="text-blue-200/60 text-sm mb-3">{stream.description}</p>
                    <div className="text-xs text-blue-400/60 mb-2">Gross Margin: {stream.margin}</div>
                    <ul className="text-xs text-blue-300/70 space-y-1">
                      {stream.details.map((d, j) => (
                        <li key={j} className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-blue-400" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Unit Economics */}
              <div className="bg-blue-950/40 border border-blue-800/30 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-4">Unit Economics</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-300">{businessPlan.businessModel.unitEconomics.ltv}</div>
                    <div className="text-xs text-blue-400/60">LTV</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-300">{businessPlan.businessModel.unitEconomics.cac}</div>
                    <div className="text-xs text-blue-400/60">CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-300">{businessPlan.businessModel.unitEconomics.ltvCacRatio}</div>
                    <div className="text-xs text-blue-400/60">LTV:CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-300">{businessPlan.businessModel.unitEconomics.paybackPeriod}</div>
                    <div className="text-xs text-blue-400/60">Payback</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-300">{businessPlan.businessModel.unitEconomics.grossMargin}</div>
                    <div className="text-xs text-blue-400/60">Gross Margin</div>
                  </div>
                </div>
                <ul className="text-sm text-blue-200/70 space-y-1">
                  {businessPlan.businessModel.unitEconomics.details.map((d, i) => (
                    <li key={i}>* {d}</li>
                  ))}
                </ul>
              </div>
            </ExpandableSection>

            {/* Risks */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Shield className="text-blue-400" /> Risks & Mitigations</div>}
            >
              <div className="space-y-3">
                {businessPlan.risks.map((risk, i) => (
                  <div key={i} className="bg-blue-950/40 border border-blue-800/30 rounded-lg p-4">
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
                    <p className="text-blue-200/70 text-sm"><strong className="text-blue-300">Mitigation:</strong> {risk.mitigation}</p>
                  </div>
                ))}
              </div>
            </ExpandableSection>

            {/* Milestones */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Award className="text-blue-400" /> Milestones & Timeline</div>}
            >
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-800/50" />
                <div className="space-y-4">
                  {businessPlan.milestones.map((m, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-blue-400" />
                      <div className="bg-blue-950/40 border border-blue-800/30 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-blue-300 font-medium">{m.quarter}</span>
                        </div>
                        <p className="text-blue-100/80">{m.milestone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ExpandableSection>

            {/* Team */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Users className="text-blue-400" /> Team & Hiring</div>}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.team.hiring.map((hire, i) => (
                  <div key={i} className="bg-blue-950/40 border border-blue-800/30 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{hire.role}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        hire.priority === 'Critical' ? 'bg-red-900/50 text-red-400' : 'bg-yellow-900/50 text-yellow-400'
                      }`}>
                        {hire.priority}
                      </span>
                    </div>
                    <p className="text-blue-200/60 text-sm mb-1">{hire.description}</p>
                    <p className="text-xs text-blue-400/50">Timeline: {hire.timeline}</p>
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
                <LineChart className="text-blue-400" />
                Financial Projections
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* With Financing */}
                <div className="bg-blue-950/40 rounded-xl p-6 border-2 border-blue-500/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="text-blue-300" />
                    <h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withFinancing.name}</h3>
                  </div>
                  <p className="text-blue-200/60 text-sm mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>

                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-blue-800/50">
                          <th className="text-left py-2 text-blue-400/70">Year</th>
                          <th className="text-right py-2 text-blue-400/70">Revenue</th>
                          <th className="text-right py-2 text-blue-400/70">Facilities</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withFinancing.projections.map((proj, i) => (
                          <tr key={i} className="border-b border-blue-800/30">
                            <td className="py-2 text-white">{proj.year}</td>
                            <td className="py-2 text-right text-blue-300 font-medium">{proj.revenue}</td>
                            <td className="py-2 text-right text-blue-200/70">{proj.customers}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="text-xs text-blue-200/60">
                    <div className="font-medium mb-1">Key Assumptions:</div>
                    <ul className="space-y-1">
                      {businessPlan.financials.scenarios.withFinancing.keyAssumptions.map((a, i) => (
                        <li key={i}>* {a}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Without Financing */}
                <div className="bg-blue-950/30 rounded-xl p-6 border border-blue-800/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="text-blue-400/70" />
                    <h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withoutFinancing.name}</h3>
                  </div>
                  <p className="text-blue-200/50 text-sm mb-4">{businessPlan.financials.scenarios.withoutFinancing.description}</p>

                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-blue-800/50">
                          <th className="text-left py-2 text-blue-400/60">Year</th>
                          <th className="text-right py-2 text-blue-400/60">Revenue</th>
                          <th className="text-right py-2 text-blue-400/60">Facilities</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutFinancing.projections.map((proj, i) => (
                          <tr key={i} className="border-b border-blue-800/20">
                            <td className="py-2 text-white">{proj.year}</td>
                            <td className="py-2 text-right text-blue-300/80 font-medium">{proj.revenue}</td>
                            <td className="py-2 text-right text-blue-200/60">{proj.customers}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="text-xs text-blue-200/50">
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
                <PieChart className="text-blue-400" />
                Use of Funds
              </h2>
              <div className="bg-blue-950/40 border border-blue-800/30 rounded-xl p-6">
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-blue-300">{fund.percentage}%</div>
                      <div className="text-sm font-medium text-white">{fund.category}</div>
                      <div className="text-xs text-blue-400/60">{fund.amount}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-32 text-sm text-blue-300/70">{fund.category}</div>
                      <div className="flex-1 bg-blue-900/30 rounded-full h-4">
                        <div
                          className="bg-blue-500 h-4 rounded-full"
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
                <FileText className="text-blue-400" />
                Sources
              </h2>
              <div className="bg-blue-950/40 border border-blue-800/30 rounded-lg p-4">
                <ul className="space-y-2">
                  {businessPlan.sources.map((source, i) => (
                    <li key={i}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
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
      <footer className="bg-blue-950/30 border-t border-blue-800/50 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-blue-400/50 text-sm">
          <p>{businessPlan.companyName} Business Plan * {businessPlan.version} * {businessPlan.date}</p>
          <p className="mt-2">Part of the <a href="/tokens/#framework" className="text-blue-400 hover:text-blue-300">Ribbit Token Cap-Ex Framework</a></p>
        </div>
      </footer>
    </div>
  )
}
