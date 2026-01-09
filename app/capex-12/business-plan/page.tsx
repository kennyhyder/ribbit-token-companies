'use client'

import { useState } from 'react'
import {
  ArrowLeft, Target, TrendingUp, DollarSign, Users, Shield, AlertTriangle,
  CheckCircle, ExternalLink, ChevronDown, ChevronUp, Building2, Zap, BarChart3,
  Clock, Wrench, FileText, Briefcase, Lightbulb, Globe, Award, PieChart, LineChart, Sun
} from 'lucide-react'

const businessPlan = {
  companyName: "SolarScore",
  tagline: "The Network of Record for Solar & Storage",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Solar installer market is massively fragmented—top 3 installers hold only 21% share. Sunrun/Tesla use subcontractors with no quality visibility. Lenders and utilities flying blind on installer performance.",
    solution: "SolarScore aggregates the fragmented installer network with quality scores, standardized quoting, and performance tracking—becoming the 'network of record' that lenders, utilities, and homeowners trust.",
    market: "$7.5B residential solar + $2B residential storage (2025). Growing 14%+ CAGR. Post-ITC expiration creates flight to TPO models where installer quality matters even more.",
    ask: "$5M Seed Round to build installer network platform, establish lender partnerships, and capture first-mover advantage as the quality layer for distributed energy."
  },

  problem: {
    title: "The Solar Quality Crisis",
    points: [
      {
        title: "Massive Fragmentation",
        detail: "Top 3 installers (Sunrun, Tesla, Freedom Forever) hold only 21% market share. Thousands of local installers with no standardized quality tracking.",
        stat: "21%",
        statLabel: "market share held by top 3 installers"
      },
      {
        title: "Subcontractor Chaos",
        detail: "Even major players like Tesla rely heavily on subcontractors. Sunrun partners with third-party installers. No visibility into actual installation quality.",
        stat: "70%+",
        statLabel: "of installs done by subcontractors"
      },
      {
        title: "Lender Blindness",
        detail: "Solar lenders (Mosaic, Sunlight, GoodLeap) fund $15B+ annually with minimal installer vetting. Default rates correlate with installer quality but data doesn't exist.",
        stat: "$15B+",
        statLabel: "annual solar lending with poor installer data"
      },
      {
        title: "ITC Cliff Creates Urgency",
        detail: "Residential 30% ITC expires Dec 31, 2025. TPO (lease/PPA) becomes only path to credits. Lenders need quality data more than ever.",
        stat: "Dec 2025",
        statLabel: "residential ITC expiration"
      }
    ]
  },

  solution: {
    title: "SolarScore: Quality Layer for Distributed Energy",
    tagline: "Aggregate. Score. Standardize. Trust.",
    pillars: [
      {
        icon: "Sun",
        title: "Installer Network",
        description: "Aggregated network of vetted solar and storage installers with real-time capacity, coverage areas, and certification status.",
        features: ["5,000+ installer profiles", "Real-time availability", "Certification tracking", "Coverage mapping"]
      },
      {
        icon: "BarChart3",
        title: "Quality Scoring",
        description: "Data-driven installer scores based on installation quality, customer satisfaction, warranty claims, and system performance.",
        features: ["0-100 quality score", "Performance tracking", "Warranty analytics", "Customer reviews"]
      },
      {
        icon: "FileText",
        title: "Standardized Quoting",
        description: "Universal quote format that lenders, utilities, and homeowners can trust. Apples-to-apples comparison across installers.",
        features: ["Standard quote format", "Equipment verification", "Price benchmarking", "Scope validation"]
      },
      {
        icon: "Zap",
        title: "Performance Intelligence",
        description: "Post-installation monitoring data aggregated across the network. Predictive analytics for lenders and insurers.",
        features: ["Production monitoring", "Degradation tracking", "Failure prediction", "Fleet analytics"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "ITC Cliff Reshapes Market",
        detail: "Dec 2025 ITC expiration for homeowners pushes market to TPO models. Third-party owners need installer quality data to protect their assets.",
        icon: "Clock"
      },
      {
        title: "Storage Attachment Surging",
        detail: "Battery attachment rates hitting 30%+ in key markets. Storage adds complexity—installers need certification, lenders need quality assurance.",
        icon: "Zap"
      },
      {
        title: "Lender Consolidation",
        detail: "Solar lending consolidating around Mosaic, Sunlight, GoodLeap. Fewer, larger players willing to pay for installer intelligence.",
        icon: "DollarSign"
      },
      {
        title: "Grid Reliability Focus",
        detail: "Utilities investing in distributed energy as grid infrastructure. Need installer networks for low-income programs, virtual power plants.",
        icon: "Globe"
      }
    ]
  },

  marketSize: {
    tam: {
      value: "$9.5B",
      description: "Total addressable market: U.S. residential solar + storage installation market",
      breakdown: [
        { segment: "Residential Solar Installation", value: "$7.45B", growth: "14.4% CAGR" },
        { segment: "Residential Battery Storage", value: "$2.0B", growth: "14.4% CAGR" },
        { segment: "Commercial Distributed", value: "$4.2B", growth: "8.5% CAGR" }
      ]
    },
    sam: {
      value: "$1.4B",
      description: "Serviceable addressable market: Platform fees, lender subscriptions, and data licensing",
      breakdown: [
        { segment: "Installer Network Fees (3% of installs)", value: "$280M", growth: "On $9.5B install volume" },
        { segment: "Lender Data Subscriptions", value: "$120M", growth: "Major solar lenders" },
        { segment: "Utility Program Management", value: "$85M", growth: "Low-income solar, VPP programs" },
        { segment: "Quote/Lead Marketplace", value: "$920M", growth: "Lead gen and matching fees" }
      ]
    },
    som: {
      value: "$78M",
      description: "Year 5 revenue target: 2,500 active installers, 8 lender partnerships, 50K installs through platform",
      breakdown: [
        { segment: "Installer SaaS Subscriptions", value: "$24M", growth: "2,500 installers @ $800/mo avg" },
        { segment: "Lender Data Licensing", value: "$18M", growth: "8 lenders @ $225K/yr avg" },
        { segment: "Transaction/Lead Fees", value: "$28M", growth: "50K installs @ $560 avg" },
        { segment: "Utility Program Fees", value: "$8M", growth: "12 utility programs" }
      ]
    }
  },

  competition: {
    overview: "No direct competitor has built a comprehensive installer quality network. Market has point solutions for leads, monitoring, and software but no unified quality layer.",
    competitors: [
      {
        name: "EnergySage",
        description: "Consumer marketplace connecting homeowners to solar quotes. Lead generation model, not installer quality network.",
        strengths: ["Strong consumer brand", "Large quote volume", "Installer marketplace"],
        weaknesses: ["Lead-gen only", "No quality scoring", "No lender relationships", "No post-install tracking"],
        marketShare: "~8% of residential leads"
      },
      {
        name: "Aurora Solar",
        description: "Design and proposal software for solar installers. Tool for installers, not quality layer for lenders/utilities.",
        strengths: ["Industry-standard design tool", "Large installer base", "Strong product"],
        weaknesses: ["Software tool, not network", "No quality data", "No lender integration", "Installer-focused only"],
        marketShare: "~40% of installer software"
      },
      {
        name: "Sunrun/Tesla Direct",
        description: "Vertically integrated installer-financiers. Compete with local installers, don't aggregate them.",
        strengths: ["Brand recognition", "Financing integration", "National scale"],
        weaknesses: ["Compete with installers", "Limited installer choice", "High customer acquisition cost", "Subcontractor quality issues"],
        marketShare: "~17% combined"
      },
      {
        name: "Solar Lenders (Mosaic, GoodLeap)",
        description: "Finance solar installations. Need installer quality data but build minimal in-house.",
        strengths: ["Capital access", "Installer relationships", "Transaction volume"],
        weaknesses: ["Not core competency", "Fragmented data", "Would likely partner/buy", "Regulatory focus limits scope"],
        marketShare: "~65% of solar lending"
      }
    ],
    moat: "Network effects: More installers in network = better data = more lender adoption = more installer demand. First comprehensive quality layer becomes industry standard."
  },

  businessModel: {
    overview: "Four-sided platform connecting installers, lenders, utilities, and homeowners around quality and trust.",
    revenueStreams: [
      {
        name: "Installer SaaS",
        description: "Monthly subscription for installers to access network, receive qualified leads, and build quality scores",
        pricing: "$299-$1,499/month based on volume",
        margin: "80%",
        details: [
          "Quality score profile and badge",
          "Lead access based on score tier",
          "Quote standardization tools",
          "Performance dashboard",
          "Certification management"
        ]
      },
      {
        name: "Lender Data Licensing",
        description: "API access to installer quality scores, performance data, and risk analytics for underwriting",
        pricing: "$150K-$500K annual contracts",
        margin: "90%",
        details: [
          "Real-time quality scores",
          "Historical performance data",
          "Risk scoring models",
          "Portfolio analytics",
          "Due diligence reports"
        ]
      },
      {
        name: "Transaction Fees",
        description: "Per-install fees for deals closed through platform matching",
        pricing: "$300-$800 per closed install",
        margin: "85%",
        details: [
          "Homeowner lead matching",
          "Quote comparison tools",
          "Contract standardization",
          "Installation verification",
          "Quality guarantee program"
        ]
      },
      {
        name: "Utility Program Management",
        description: "White-label installer networks for utility solar programs",
        pricing: "$50K-$200K per program + per-install fees",
        margin: "70%",
        details: [
          "Low-income solar programs",
          "Virtual power plant recruitment",
          "Grid services coordination",
          "Incentive management",
          "Quality assurance"
        ]
      }
    ],
    unitEconomics: {
      ltv: "$14,400",
      cac: "$1,200",
      ltvCacRatio: "12:1",
      paybackPeriod: "5 months",
      grossMargin: "82%",
      details: [
        "Average installer subscription: 2.4 years ($800/mo avg)",
        "Expansion revenue from volume growth and lead fees",
        "CAC: $800 digital + $400 sales/onboarding",
        "High retention due to quality score equity"
      ]
    }
  },

  financials: {
    scenarios: {
      withFinancing: {
        name: "With Cap-Ex Financing Partnerships",
        description: "Deep lender integration creates data moat and recurring revenue",
        projections: [
          { year: "Y1", revenue: "$2.8M", customers: "450 installers", highlights: "Platform launch, 2 lender pilots" },
          { year: "Y2", revenue: "$12M", customers: "1,100 installers", highlights: "5 lender partnerships, utility pilots" },
          { year: "Y3", revenue: "$32M", customers: "1,800 installers", highlights: "Market leader in lender data" },
          { year: "Y4", revenue: "$58M", customers: "2,300 installers", highlights: "Utility program expansion" },
          { year: "Y5", revenue: "$98M", customers: "2,800 installers", highlights: "Category dominance, M&A interest" }
        ],
        keyAssumptions: [
          "3 major lenders sign in Year 2",
          "Data licensing drives 40% of revenue",
          "Installer network reaches 25% of quality installers",
          "Utility programs add recurring base"
        ]
      },
      withoutFinancing: {
        name: "Without Cap-Ex Financing Angle",
        description: "Consumer marketplace focus with installer subscriptions and leads",
        projections: [
          { year: "Y1", revenue: "$1.6M", customers: "320 installers", highlights: "Marketplace launch, SEO focus" },
          { year: "Y2", revenue: "$6.2M", customers: "750 installers", highlights: "Lead gen scaling, quality scoring" },
          { year: "Y3", revenue: "$16M", customers: "1,200 installers", highlights: "Regional expansion" },
          { year: "Y4", revenue: "$32M", customers: "1,700 installers", highlights: "First lender partnerships" },
          { year: "Y5", revenue: "$58M", customers: "2,200 installers", highlights: "Sustainable growth, profitable" }
        ],
        keyAssumptions: [
          "Consumer lead gen primary driver",
          "Slower lender adoption without direct sales",
          "More capital-efficient growth path",
          "EnergySage competitive pressure"
        ]
      }
    },
    useOfFunds: [
      { category: "Engineering & Product", percentage: 40, amount: "$2.0M", details: "Platform build, installer tools, monitoring integrations" },
      { category: "Sales & Partnerships", percentage: 30, amount: "$1.5M", details: "Lender BD, utility partnerships, installer onboarding" },
      { category: "Data & Analytics", percentage: 15, amount: "$750K", details: "Quality scoring models, performance analytics" },
      { category: "Marketing", percentage: 10, amount: "$500K", details: "Installer acquisition, industry positioning" },
      { category: "Operations", percentage: 5, amount: "$250K", details: "Legal, compliance, G&A" }
    ]
  },

  risks: [
    {
      risk: "Lender Adoption Speed",
      severity: "High",
      mitigation: "Start with lender pilot programs before full contracts. Prove ROI on default reduction. Target CFO-level sponsors."
    },
    {
      risk: "Installer Network Building",
      severity: "High",
      mitigation: "Lead with value (leads, tools) before scoring. Partner with distributor networks for reach. Quality installers want differentiation."
    },
    {
      risk: "Market Cyclicality",
      severity: "Medium",
      mitigation: "ITC expiration actually helps—TPO growth continues. Diversify across residential, commercial, utility segments."
    },
    {
      risk: "EnergySage Competition",
      severity: "Medium",
      mitigation: "Different positioning: B2B quality layer vs B2C lead gen. Lender data not in EnergySage's DNA. Potential acquirer."
    },
    {
      risk: "Data Quality/Accuracy",
      severity: "Medium",
      mitigation: "Multiple data sources: installer-reported, monitoring APIs, lender outcomes, customer reviews. Statistical validation."
    },
    {
      risk: "Policy Uncertainty",
      severity: "Low",
      mitigation: "Solar fundamentals strong regardless of ITC. Storage growth accelerating. Grid reliability driving utility investment."
    }
  ],

  milestones: [
    { quarter: "Q1 2026", milestone: "Close seed round, hire core team", status: "target" },
    { quarter: "Q2 2026", milestone: "Launch MVP with 200 installers in 3 states", status: "target" },
    { quarter: "Q3 2026", milestone: "First lender pilot (Mosaic or GoodLeap)", status: "target" },
    { quarter: "Q4 2026", milestone: "500 installers, quality scoring live, $2M ARR", status: "target" },
    { quarter: "Q1 2027", milestone: "Second lender partnership signed", status: "target" },
    { quarter: "Q2 2027", milestone: "1,000 installers, first utility program", status: "target" },
    { quarter: "Q3 2027", milestone: "Performance monitoring integration complete", status: "target" },
    { quarter: "Q4 2027", milestone: "Series A at $80-100M valuation", status: "target" }
  ],

  team: {
    hiring: [
      { role: "CTO", priority: "Critical", timeline: "Immediate", description: "Platform architecture, data systems, integrations" },
      { role: "VP Sales", priority: "Critical", timeline: "Q2 2026", description: "Lender and utility partnerships, enterprise sales" },
      { role: "Head of Data Science", priority: "High", timeline: "Q2 2026", description: "Quality scoring models, performance analytics" },
      { role: "VP Installer Success", priority: "High", timeline: "Q3 2026", description: "Installer onboarding, network growth, retention" }
    ]
  },

  ask: {
    amount: "$5M",
    round: "Seed",
    timeline: "Q1 2026",
    terms: "Priced round, standard seed terms",
    use: "Build installer network platform, establish lender partnerships, prove quality scoring ROI",
    targetInvestors: [
      "Climate tech VCs (Congruent, Energy Impact Partners)",
      "Fintech investors (solar lending adjacent)",
      "Marketplace/platform specialists",
      "Strategic angels from solar/energy industry"
    ]
  },

  sources: [
    { name: "SEIA Solar Market Insight", url: "https://seia.org/research-resources/solar-market-insight-report-q4-2025/" },
    { name: "Grand View Research - Residential Solar", url: "https://www.grandviewresearch.com/industry-analysis/us-residential-solar-pv-market-report" },
    { name: "Fortune Business Insights - Battery Storage", url: "https://www.fortunebusinessinsights.com/u-s-residential-lithium-ion-battery-energy-storage-system-market-107571" },
    { name: "Wood Mackenzie - Installer Rankings", url: "https://www.woodmac.com/news/opinion/us-distributed-solar-leaderboard/" },
    { name: "SEIA - Investment Tax Credit", url: "https://seia.org/solar-investment-tax-credit/" },
    { name: "EnergySage - Federal Tax Credit", url: "https://www.energysage.com/solar/solar-tax-credit-explained/" }
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
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Executive Summary */}
            <section className="bg-gradient-to-r from-orange-900/50 to-yellow-900/50 rounded-xl p-8 border border-orange-800">
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

            {/* Key Stats */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard value="$9.5B" label="TAM" icon={Globe} />
                <StatCard value="21%" label="Top 3 Market Share" icon={Users} />
                <StatCard value="12:1" label="LTV:CAC Ratio" icon={TrendingUp} />
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
                <Lightbulb className="text-orange-400" />
                {businessPlan.solution.title}
              </h2>
              <p className="text-gray-400 mb-6">{businessPlan.solution.tagline}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {businessPlan.solution.pillars.map((pillar, i) => {
                  const IconComponent = pillar.icon === 'Sun' ? Sun :
                    pillar.icon === 'BarChart3' ? BarChart3 :
                    pillar.icon === 'FileText' ? FileText :
                    pillar.icon === 'Zap' ? Zap : Sun
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

            {/* The Ask */}
            <section className="bg-gradient-to-r from-orange-900/30 to-yellow-900/30 rounded-xl p-8 border border-orange-800">
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

        {/* Detailed Plan Tab */}
        {activeTab === 'detailed' && (
          <div className="space-y-4">
            {/* Why Now */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Clock className="text-orange-400" /> Why Now?</div>}
              defaultOpen={true}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => {
                  const IconComponent = factor.icon === 'Clock' ? Clock :
                    factor.icon === 'Zap' ? Zap :
                    factor.icon === 'DollarSign' ? DollarSign :
                    factor.icon === 'Globe' ? Globe : Clock
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

            {/* Market Size */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><PieChart className="text-orange-400" /> Market Size</div>}
            >
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

            {/* Competition */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Users className="text-orange-400" /> Competitive Landscape</div>}
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
              <div className="bg-orange-900/30 rounded-lg p-4 border border-orange-800">
                <h3 className="font-semibold text-orange-400 mb-2">Our Moat</h3>
                <p className="text-gray-300">{businessPlan.competition.moat}</p>
              </div>
            </ExpandableSection>

            {/* Business Model */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Briefcase className="text-orange-400" /> Business Model</div>}
            >
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
                      {stream.details.map((d, j) => (
                        <li key={j} className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-orange-400" />
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
                    <div className="text-2xl font-bold text-orange-400">{businessPlan.businessModel.unitEconomics.ltv}</div>
                    <div className="text-xs text-gray-400">LTV</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">{businessPlan.businessModel.unitEconomics.cac}</div>
                    <div className="text-xs text-gray-400">CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">{businessPlan.businessModel.unitEconomics.ltvCacRatio}</div>
                    <div className="text-xs text-gray-400">LTV:CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">{businessPlan.businessModel.unitEconomics.paybackPeriod}</div>
                    <div className="text-xs text-gray-400">Payback</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">{businessPlan.businessModel.unitEconomics.grossMargin}</div>
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
              title={<div className="flex items-center gap-2"><Shield className="text-orange-400" /> Risks & Mitigations</div>}
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
              title={<div className="flex items-center gap-2"><Award className="text-orange-400" /> Milestones & Timeline</div>}
            >
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />
                <div className="space-y-4">
                  {businessPlan.milestones.map((m, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-orange-400" />
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-orange-400 font-medium">{m.quarter}</span>
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
              title={<div className="flex items-center gap-2"><Users className="text-orange-400" /> Team & Hiring</div>}
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
                <LineChart className="text-orange-400" />
                Financial Projections
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* With Financing */}
                <div className="bg-gray-800 rounded-xl p-6 border-2 border-orange-600">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="text-orange-400" />
                    <h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withFinancing.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>

                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-2 text-gray-400">Year</th>
                          <th className="text-right py-2 text-gray-400">Revenue</th>
                          <th className="text-right py-2 text-gray-400">Installers</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withFinancing.projections.map((proj, i) => (
                          <tr key={i} className="border-b border-gray-700/50">
                            <td className="py-2 text-white">{proj.year}</td>
                            <td className="py-2 text-right text-orange-400 font-medium">{proj.revenue}</td>
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
                          <th className="text-right py-2 text-gray-400">Installers</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutFinancing.projections.map((proj, i) => (
                          <tr key={i} className="border-b border-gray-700/50">
                            <td className="py-2 text-white">{proj.year}</td>
                            <td className="py-2 text-right text-orange-400 font-medium">{proj.revenue}</td>
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
                <PieChart className="text-orange-400" />
                Use of Funds
              </h2>
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-orange-400">{fund.percentage}%</div>
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
                          className="bg-orange-500 h-4 rounded-full"
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
                <FileText className="text-orange-400" />
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
                        className="text-orange-400 hover:text-orange-300 flex items-center gap-2"
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
          <p className="mt-2">Part of the <a href="/tokens/#framework" className="text-orange-400 hover:text-orange-300">Ribbit Token Cap-Ex Framework</a></p>
        </div>
      </footer>
    </div>
  )
}
