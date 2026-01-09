'use client'

import { useState } from 'react'
import {
  ArrowLeft, Target, TrendingUp, DollarSign, Users, Shield, AlertTriangle,
  CheckCircle, ExternalLink, ChevronDown, ChevronUp, Building2, Zap, BarChart3,
  Clock, Wrench, FileText, Briefcase, Lightbulb, Globe, Award, PieChart, LineChart, Activity,
  Cog, Settings, Cpu
} from 'lucide-react'

const businessPlan = {
  companyName: "RoboServ",
  tagline: "Breaking OEM Dependence in Industrial Automation Service",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Fanuc, ABB, and KUKA control industrial robot service with limited competition. Manufacturers face $10K-100K+ per hour downtime costs and are dependent on OEM or single integrators. Service contracts are inflexible and parts access is restricted.",
    solution: "RoboServ aggregates independent automation technicians into a credentialed network with remote diagnostics, standardized service contracts, and multi-vendor support. We enable manufacturers to break OEM dependence while improving uptime.",
    market: "$55B global industrial robotics market with $20B+ in automation services. Third-party service can save manufacturers 25-40% vs OEM contracts while improving response times.",
    ask: "$6M Seed Round to build technician network platform, establish manufacturer partnerships, and create the remote diagnostics infrastructure that breaks OEM lock-in."
  },

  problem: {
    title: "The Industrial Automation Service Crisis",
    points: [
      {
        title: "OEM Service Monopoly",
        detail: "Fanuc, ABB, and KUKA control service contracts with restrictive terms. Manufacturers pay premium prices for inflexible service schedules and slow response times.",
        stat: "70%+",
        statLabel: "service controlled by OEMs/single integrators"
      },
      {
        title: "Devastating Downtime Costs",
        detail: "When robots go down, production stops. Automotive lines lose $22K/minute. Even smaller manufacturers face $10K-100K+ per hour losses waiting for OEM technicians.",
        stat: "$10K-100K+",
        statLabel: "per hour downtime cost"
      },
      {
        title: "Fragmented Independent Techs",
        detail: "~5,000 qualified independent automation technicians exist but lack coordination, standardized credentials, and visibility. Manufacturers can't find or vet alternatives.",
        stat: "5,000+",
        statLabel: "fragmented independent techs"
      },
      {
        title: "Parts & Diagnostics Lock-in",
        detail: "OEMs restrict access to spare parts, software updates, and diagnostic tools. Proprietary systems create artificial barriers to third-party service.",
        stat: "$50K-500K",
        statLabel: "per robot unit cost"
      }
    ]
  },

  solution: {
    title: "RoboServ: Multi-Vendor Industrial Automation Service Network",
    tagline: "Aggregate. Diagnose. Dispatch. Deliver.",
    pillars: [
      {
        icon: "Cog",
        title: "Tech Network",
        description: "Aggregated network of credentialed independent automation technicians with verified certifications, coverage areas, and equipment expertise.",
        features: ["500+ tech profiles", "Multi-vendor certified", "Coverage mapping", "Real-time availability"]
      },
      {
        icon: "Cpu",
        title: "Remote Diagnostics",
        description: "IoT-enabled remote monitoring and diagnostics platform. Identify issues before dispatching techs. Reduce truck rolls and improve first-time fix rates.",
        features: ["Predictive alerts", "Remote troubleshooting", "Video assist", "Error code library"]
      },
      {
        icon: "FileText",
        title: "Standardized Contracts",
        description: "Flexible service contracts that work across robot brands. Transparent pricing, SLA guarantees, and performance tracking.",
        features: ["Multi-vendor coverage", "SLA guarantees", "Transparent pricing", "Performance metrics"]
      },
      {
        icon: "Settings",
        title: "Shared Parts Network",
        description: "Pooled spare parts inventory across the network. Reduce working capital while improving parts availability and response times.",
        features: ["Parts marketplace", "Inventory sharing", "Cross-docking", "Expedited shipping"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "Robot Adoption Surge",
        detail: "Industrial robot installations up 31% in 2024. More robots = more service demand. Installed base growing faster than OEM service capacity.",
        icon: "TrendingUp"
      },
      {
        title: "Reshoring Manufacturing",
        detail: "US manufacturing investment at all-time highs. New facilities need flexible service options, not OEM lock-in.",
        icon: "Building2"
      },
      {
        title: "IoT & Remote Diagnostics",
        detail: "Connected robots enable remote monitoring and diagnostics. Independent techs can now match OEM technical capabilities.",
        icon: "Cpu"
      },
      {
        title: "Labor Market Dynamics",
        detail: "Experienced automation techs retiring from OEMs. Many prefer independent work with better pay and flexibility.",
        icon: "Users"
      }
    ]
  },

  marketSize: {
    tam: {
      value: "$55B",
      description: "Total addressable market: Global industrial robotics including equipment and services",
      breakdown: [
        { segment: "Industrial Robot Sales", value: "$35B", growth: "12.3% CAGR" },
        { segment: "Automation Services", value: "$20B", growth: "8.5% CAGR" },
        { segment: "Spare Parts & Components", value: "$8B", growth: "7.2% CAGR" }
      ]
    },
    sam: {
      value: "$6.2B",
      description: "Serviceable addressable market: North America industrial automation service opportunity",
      breakdown: [
        { segment: "Robot Maintenance Contracts", value: "$2.8B", growth: "~350K robots installed" },
        { segment: "Break-Fix Service", value: "$1.8B", growth: "Emergency repairs" },
        { segment: "Spare Parts", value: "$1.2B", growth: "Replacement components" },
        { segment: "Training & Consulting", value: "$400M", growth: "Operator certification" }
      ]
    },
    som: {
      value: "$150M",
      description: "Year 5 revenue target: 400 active techs, 200 manufacturer partnerships, 5,000 robots under management",
      breakdown: [
        { segment: "Platform Transaction Fees", value: "$65M", growth: "4% of $1.6B service volume" },
        { segment: "Tech SaaS Subscriptions", value: "$32M", growth: "400 techs @ $6,700/mo avg" },
        { segment: "Manufacturer Data Licensing", value: "$28M", growth: "200 mfgs @ $140K/yr" },
        { segment: "Parts Network Revenue", value: "$25M", growth: "Margin on parts transactions" }
      ]
    }
  },

  competition: {
    overview: "The market is dominated by OEMs who bundle service with equipment sales. System integrators provide local support but lack scale. No platform has aggregated the independent technician ecosystem for multi-vendor service.",
    competitors: [
      {
        name: "Fanuc America Service",
        description: "Largest industrial robot OEM. Controls service on Fanuc equipment. Strong installed base in automotive and heavy manufacturing.",
        strengths: ["OEM parts access", "Proprietary diagnostics", "Brand trust", "Training programs"],
        weaknesses: ["Premium pricing (2-3x)", "Slow response in some regions", "Fanuc-only", "Inflexible contracts"],
        marketShare: "~35% of robot service"
      },
      {
        name: "ABB Robotics Service",
        description: "Second largest robot OEM globally. Strong in Europe with growing US presence. Pushing connected services initiative.",
        strengths: ["Global coverage", "Technical expertise", "Software integration", "Connected services"],
        weaknesses: ["Premium pricing", "ABB-focused", "Complex contract terms", "Variable response times"],
        marketShare: "~25% of robot service"
      },
      {
        name: "KUKA Service",
        description: "German OEM, now Chinese-owned (Midea). Strong in automotive. Aggressive pricing to gain market share.",
        strengths: ["Automotive expertise", "Competitive pricing vs peers", "Programming support", "Training"],
        weaknesses: ["Ownership uncertainty", "Limited US footprint", "KUKA-only", "Parts availability"],
        marketShare: "~15% of robot service"
      },
      {
        name: "System Integrators (Fragmented)",
        description: "~2,000 regional integrators providing installation and service. Local relationships but no national coordination.",
        strengths: ["Multi-vendor capable", "Local relationships", "Flexible service", "Applications expertise"],
        weaknesses: ["Limited geographic coverage", "No quality standard", "Variable capabilities", "Capacity constraints"],
        marketShare: "~25% of robot service"
      }
    ],
    moat: "Network effects: More techs in network = better coverage + faster response = more manufacturer adoption = more tech demand. First standardized multi-vendor service network becomes the industry clearinghouse."
  },

  businessModel: {
    overview: "Four-sided platform connecting independent techs, manufacturers, equipment finance companies, and parts suppliers around uptime, transparency, and cost savings.",
    revenueStreams: [
      {
        name: "Platform Transaction Fees",
        description: "Percentage of service contract value for jobs dispatched through platform matching",
        pricing: "4-6% of contract value",
        margin: "90%",
        details: [
          "Automated matching algorithm",
          "Dispatch optimization",
          "Quality guarantee program",
          "Payment processing",
          "SLA enforcement"
        ]
      },
      {
        name: "Tech SaaS Subscriptions",
        description: "Monthly subscription for techs to access network, build credentials, and receive service opportunities",
        pricing: "$2,000-$12,000/month based on certifications",
        margin: "85%",
        details: [
          "Credential verification",
          "Remote diagnostics access",
          "Parts network access",
          "Training & certification",
          "Insurance & compliance"
        ]
      },
      {
        name: "Manufacturer Data Licensing",
        description: "API access to equipment performance data, tech quality scores, and service benchmarking for maintenance planning",
        pricing: "$80K-$250K annual contracts",
        margin: "92%",
        details: [
          "Equipment health analytics",
          "Service cost benchmarking",
          "Predictive maintenance data",
          "Vendor performance tracking",
          "Utilization reporting"
        ]
      },
      {
        name: "Parts Network Revenue",
        description: "Margin on parts transactions through shared inventory network and procurement aggregation",
        pricing: "8-15% margin on parts",
        margin: "35%",
        details: [
          "Pooled inventory access",
          "Bulk procurement savings",
          "Cross-docking logistics",
          "Expedited shipping",
          "Quality verification"
        ]
      }
    ],
    unitEconomics: {
      ltv: "$315,000",
      cac: "$21,000",
      ltvCacRatio: "15:1",
      paybackPeriod: "7 months",
      grossMargin: "82%",
      details: [
        "Average tech subscription: 4 years ($6,700/mo avg) + transaction fees",
        "Expansion revenue from certifications, parts volume, and territory growth",
        "CAC: $14K digital + $7K sales/onboarding for techs",
        "High retention due to credential equity and dispatch volume"
      ]
    }
  },

  financials: {
    scenarios: {
      withFinancing: {
        name: "With Cap-Ex Financing Partnerships",
        description: "Deep equipment finance integration creates data moat and recurring revenue",
        projections: [
          { year: "Y1", revenue: "$4.8M", customers: "80 techs", highlights: "Platform launch, 5 manufacturer pilots" },
          { year: "Y2", revenue: "$22M", customers: "175 techs", highlights: "15 manufacturer partnerships, remote diagnostics live" },
          { year: "Y3", revenue: "$58M", customers: "280 techs", highlights: "Market leader in multi-vendor service" },
          { year: "Y4", revenue: "$102M", customers: "350 techs", highlights: "Parts network scaling, equipment finance integration" },
          { year: "Y5", revenue: "$165M", customers: "450 techs", highlights: "Category dominance, strategic acquisition interest" }
        ],
        keyAssumptions: [
          "5 major manufacturers sign in Year 1",
          "Equipment finance data licensing drives 20% of revenue by Y3",
          "Tech network reaches 10% of qualified independents",
          "Remote diagnostics reduces dispatch time 40%"
        ]
      },
      withoutFinancing: {
        name: "Without Cap-Ex Financing Angle",
        description: "Pure marketplace focus with tech subscriptions and transaction fees",
        projections: [
          { year: "Y1", revenue: "$2.8M", customers: "55 techs", highlights: "Marketplace launch, regional focus" },
          { year: "Y2", revenue: "$11M", customers: "120 techs", highlights: "Tech network scaling, quality scoring" },
          { year: "Y3", revenue: "$32M", customers: "190 techs", highlights: "Multi-region expansion" },
          { year: "Y4", revenue: "$58M", customers: "260 techs", highlights: "First manufacturer partnerships" },
          { year: "Y5", revenue: "$95M", customers: "340 techs", highlights: "Sustainable growth, profitable" }
        ],
        keyAssumptions: [
          "Tech acquisition primary driver",
          "Slower manufacturer adoption without data products",
          "More capital-efficient growth path",
          "OEM competitive response possible"
        ]
      }
    },
    useOfFunds: [
      { category: "Engineering & Product", percentage: 40, amount: "$2.4M", details: "Platform build, remote diagnostics, equipment integrations" },
      { category: "Sales & Partnerships", percentage: 28, amount: "$1.68M", details: "Manufacturer BD, tech onboarding, equipment finance partnerships" },
      { category: "Operations & Logistics", percentage: 15, amount: "$900K", details: "Parts network infrastructure, dispatch operations" },
      { category: "Marketing", percentage: 12, amount: "$720K", details: "Tech acquisition, industry positioning, trade shows" },
      { category: "G&A", percentage: 5, amount: "$300K", details: "Legal, insurance, administration" }
    ]
  },

  risks: [
    {
      risk: "OEM Retaliation",
      severity: "High",
      mitigation: "Focus on multi-vendor environments and out-of-warranty equipment. Build relationships with manufacturer CFOs who want alternatives. Document anticompetitive behavior."
    },
    {
      risk: "Tech Quality Variability",
      severity: "High",
      mitigation: "Rigorous certification verification. Quality guarantee program with financial backing. Start with top-tier techs and expand carefully. Remote supervision capabilities."
    },
    {
      risk: "Parts Access Restrictions",
      severity: "High",
      mitigation: "Build secondary parts sourcing network. Partner with aftermarket suppliers. Develop refurbishment capabilities. Document OEM restrictions for advocacy."
    },
    {
      risk: "Manufacturer Sales Cycles",
      severity: "Medium",
      mitigation: "Start with pilot programs at single facilities. Target operations/maintenance managers with clear ROI. Partner with equipment finance companies for introductions."
    },
    {
      risk: "Safety & Liability",
      severity: "Medium",
      mitigation: "Comprehensive insurance requirements. Safety protocol standardization. Incident tracking and response. Legal framework for liability allocation."
    },
    {
      risk: "Tech Poaching by OEMs",
      severity: "Low",
      mitigation: "Build network loyalty through volume and flexibility. Offer techs equity participation. Make platform stickier than individual OEM employment."
    }
  ],

  milestones: [
    { quarter: "Q1 2026", milestone: "Close seed round, hire core team", status: "target" },
    { quarter: "Q2 2026", milestone: "Launch MVP with 60 techs in Midwest manufacturing corridor", status: "target" },
    { quarter: "Q3 2026", milestone: "First manufacturer pilot (Fortune 500 tier)", status: "target" },
    { quarter: "Q4 2026", milestone: "100 techs, remote diagnostics beta, $5M ARR", status: "target" },
    { quarter: "Q1 2027", milestone: "Parts network pilot with 3 distributors", status: "target" },
    { quarter: "Q2 2027", milestone: "5 manufacturer partnerships, equipment finance pilot", status: "target" },
    { quarter: "Q3 2027", milestone: "Predictive maintenance product launch", status: "target" },
    { quarter: "Q4 2027", milestone: "Series A at $150-180M valuation", status: "target" }
  ],

  team: {
    hiring: [
      { role: "CTO", priority: "Critical", timeline: "Immediate", description: "Platform architecture, IoT integrations, data systems" },
      { role: "VP Operations", priority: "Critical", timeline: "Q1 2026", description: "Dispatch operations, tech credentialing, quality programs" },
      { role: "VP Sales", priority: "Critical", timeline: "Q2 2026", description: "Manufacturer partnerships, enterprise sales" },
      { role: "Head of Tech Success", priority: "High", timeline: "Q2 2026", description: "Tech onboarding, network growth, training programs" }
    ]
  },

  ask: {
    amount: "$6M",
    round: "Seed",
    timeline: "Q1 2026",
    terms: "Priced round, standard seed terms",
    use: "Build tech network platform, establish manufacturer partnerships, develop remote diagnostics infrastructure",
    targetInvestors: [
      "Industrial technology investors (Eclipse, Brick & Mortar)",
      "Manufacturing-focused VCs",
      "Equipment finance strategics",
      "Automation industry angels"
    ]
  },

  sources: [
    { name: "International Federation of Robotics - World Robotics Report", url: "https://ifr.org/worldrobotics" },
    { name: "Interact Analysis - Industrial Robot Service Market", url: "https://interactanalysis.com/industrial-robot-service" },
    { name: "Manufacturing Institute - Automation Workforce Study", url: "https://www.themanufacturinginstitute.org/research/automation-workforce" },
    { name: "McKinsey - Future of Manufacturing Operations", url: "https://www.mckinsey.com/capabilities/operations/our-insights" },
    { name: "Deloitte - Smart Factory Survey", url: "https://www2.deloitte.com/us/en/insights/industry/manufacturing/smart-factory-survey.html" },
    { name: "Robotics Business Review - Service Market Analysis", url: "https://www.roboticsbusinessreview.com/service-market" }
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
      <Icon className="w-6 h-6 text-slate-400 mx-auto mb-2" />
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
                <h1 className="text-2xl font-bold text-slate-300">{businessPlan.companyName}</h1>
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
                    ? 'text-slate-300 border-b-2 border-slate-400'
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
            <section className="bg-gradient-to-r from-zinc-800/50 to-slate-800/50 rounded-xl p-8 border border-zinc-600">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="text-slate-400" />
                Executive Summary
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-slate-300 font-semibold mb-2">The Problem</h3>
                  <p className="text-zinc-300">{businessPlan.executiveSummary.problem}</p>
                </div>
                <div>
                  <h3 className="text-slate-300 font-semibold mb-2">Our Solution</h3>
                  <p className="text-zinc-300">{businessPlan.executiveSummary.solution}</p>
                </div>
                <div>
                  <h3 className="text-slate-300 font-semibold mb-2">Market Opportunity</h3>
                  <p className="text-zinc-300">{businessPlan.executiveSummary.market}</p>
                </div>
                <div>
                  <h3 className="text-slate-300 font-semibold mb-2">The Ask</h3>
                  <p className="text-zinc-300">{businessPlan.executiveSummary.ask}</p>
                </div>
              </div>
            </section>

            {/* Key Stats */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard value="$55B" label="TAM" icon={Globe} />
                <StatCard value="25-40%" label="Savings vs OEM" icon={TrendingUp} />
                <StatCard value="15:1" label="LTV:CAC Ratio" icon={BarChart3} />
                <StatCard value="$6M" label="Seed Ask" icon={DollarSign} />
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
                <Lightbulb className="text-slate-400" />
                {businessPlan.solution.title}
              </h2>
              <p className="text-zinc-400 mb-6">{businessPlan.solution.tagline}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {businessPlan.solution.pillars.map((pillar, i) => {
                  const IconComponent = pillar.icon === 'Cog' ? Cog :
                    pillar.icon === 'Cpu' ? Cpu :
                    pillar.icon === 'FileText' ? FileText :
                    pillar.icon === 'Settings' ? Settings : Cog
                  return (
                    <div key={i} className="bg-zinc-800 rounded-lg p-5">
                      <IconComponent className="w-8 h-8 text-slate-400 mb-3" />
                      <h3 className="font-semibold text-white mb-2">{pillar.title}</h3>
                      <p className="text-zinc-400 text-sm mb-3">{pillar.description}</p>
                      <ul className="space-y-1">
                        {pillar.features.map((feature, j) => (
                          <li key={j} className="text-xs text-zinc-500 flex items-center gap-1">
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

            {/* The Ask */}
            <section className="bg-gradient-to-r from-zinc-800/30 to-slate-800/30 rounded-xl p-8 border border-zinc-600">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="text-slate-400" />
                The Ask
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-300">{businessPlan.ask.amount}</div>
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
              title={<div className="flex items-center gap-2"><Clock className="text-slate-400" /> Why Now?</div>}
              defaultOpen={true}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => {
                  const IconComponent = factor.icon === 'TrendingUp' ? TrendingUp :
                    factor.icon === 'Building2' ? Building2 :
                    factor.icon === 'Cpu' ? Cpu :
                    factor.icon === 'Users' ? Users : Clock
                  return (
                    <div key={i} className="bg-zinc-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5 text-slate-400" />
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
              title={<div className="flex items-center gap-2"><PieChart className="text-slate-400" /> Market Size</div>}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { key: 'tam', label: 'TAM', data: businessPlan.marketSize.tam },
                  { key: 'sam', label: 'SAM', data: businessPlan.marketSize.sam },
                  { key: 'som', label: 'SOM (Y5)', data: businessPlan.marketSize.som }
                ].map(({ key, label, data }) => (
                  <div key={key} className="bg-zinc-800 rounded-lg p-5">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-slate-300">{data.value}</div>
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
              title={<div className="flex items-center gap-2"><Users className="text-slate-400" /> Competitive Landscape</div>}
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
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
                <h3 className="font-semibold text-slate-300 mb-2">Our Moat</h3>
                <p className="text-zinc-300">{businessPlan.competition.moat}</p>
              </div>
            </ExpandableSection>

            {/* Business Model */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Briefcase className="text-slate-400" /> Business Model</div>}
            >
              <p className="text-zinc-400 mb-4">{businessPlan.businessModel.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {businessPlan.businessModel.revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-zinc-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{stream.name}</h3>
                      <span className="text-slate-300 font-medium">{stream.pricing}</span>
                    </div>
                    <p className="text-zinc-400 text-sm mb-3">{stream.description}</p>
                    <div className="text-xs text-zinc-500 mb-2">Gross Margin: {stream.margin}</div>
                    <ul className="text-xs text-zinc-400 space-y-1">
                      {stream.details.map((d, j) => (
                        <li key={j} className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-slate-400" />
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
                    <div className="text-2xl font-bold text-slate-300">{businessPlan.businessModel.unitEconomics.ltv}</div>
                    <div className="text-xs text-zinc-400">LTV</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-300">{businessPlan.businessModel.unitEconomics.cac}</div>
                    <div className="text-xs text-zinc-400">CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-300">{businessPlan.businessModel.unitEconomics.ltvCacRatio}</div>
                    <div className="text-xs text-zinc-400">LTV:CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-300">{businessPlan.businessModel.unitEconomics.paybackPeriod}</div>
                    <div className="text-xs text-zinc-400">Payback</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-300">{businessPlan.businessModel.unitEconomics.grossMargin}</div>
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
              title={<div className="flex items-center gap-2"><Shield className="text-slate-400" /> Risks & Mitigations</div>}
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
              title={<div className="flex items-center gap-2"><Award className="text-slate-400" /> Milestones & Timeline</div>}
            >
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-700" />
                <div className="space-y-4">
                  {businessPlan.milestones.map((m, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-slate-400" />
                      <div className="bg-zinc-800 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 font-medium">{m.quarter}</span>
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
              title={<div className="flex items-center gap-2"><Users className="text-slate-400" /> Team & Hiring</div>}
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
                <LineChart className="text-slate-400" />
                Financial Projections
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* With Financing */}
                <div className="bg-zinc-800 rounded-xl p-6 border-2 border-slate-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="text-slate-300" />
                    <h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withFinancing.name}</h3>
                  </div>
                  <p className="text-zinc-400 text-sm mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>

                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-zinc-700">
                          <th className="text-left py-2 text-zinc-400">Year</th>
                          <th className="text-right py-2 text-zinc-400">Revenue</th>
                          <th className="text-right py-2 text-zinc-400">Techs</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withFinancing.projections.map((proj, i) => (
                          <tr key={i} className="border-b border-zinc-700/50">
                            <td className="py-2 text-white">{proj.year}</td>
                            <td className="py-2 text-right text-slate-300 font-medium">{proj.revenue}</td>
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
                          <th className="text-right py-2 text-zinc-400">Techs</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutFinancing.projections.map((proj, i) => (
                          <tr key={i} className="border-b border-zinc-700/50">
                            <td className="py-2 text-white">{proj.year}</td>
                            <td className="py-2 text-right text-slate-300 font-medium">{proj.revenue}</td>
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
                <PieChart className="text-slate-400" />
                Use of Funds
              </h2>
              <div className="bg-zinc-800 rounded-xl p-6">
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-slate-300">{fund.percentage}%</div>
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
                          className="bg-slate-500 h-4 rounded-full"
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
                <FileText className="text-slate-400" />
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
                        className="text-slate-400 hover:text-slate-300 flex items-center gap-2"
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
          <p className="mt-2">Part of the <a href="/tokens/#framework" className="text-slate-400 hover:text-slate-300">Ribbit Token Cap-Ex Framework</a></p>
        </div>
      </footer>
    </div>
  )
}
