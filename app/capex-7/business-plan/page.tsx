'use client'

import { useState } from 'react'
import {
  ArrowLeft, Target, TrendingUp, DollarSign, Users, Shield, AlertTriangle,
  CheckCircle, ExternalLink, ChevronDown, ChevronUp, Building2, Zap, BarChart3,
  Clock, Wrench, FileText, Briefcase, Lightbulb, Globe, Award, PieChart, LineChart,
  Truck, Battery, MapPin, Database
} from 'lucide-react'

const businessPlan = {
  companyName: "FleetForward",
  tagline: "The Intelligence Layer for Municipal Fleet Electrification",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Every city, county, and school district is buying EVs with no coordination. Charging infrastructure decisions are made in silos. $7.5B in federal NEVI funding is flooding in with zero visibility into how it's being deployed.",
    solution: "FleetForward tracks every municipal EV purchase, charging installation, and grant application—creating the intelligence layer for the federal EV infrastructure program and becoming the network of record for municipal fleet electrification.",
    market: "$7.5B NEVI program plus $45B+ municipal vehicle market. 90,000 local governments need coordination. Equipment vendors, grant consultants, and utilities desperately need market intelligence.",
    ask: "$5M Seed Round to build the municipal EV registry, launch grant tracking platform, and establish partnerships with major municipal associations."
  },

  problem: {
    title: "The Municipal Electrification Chaos",
    points: [
      {
        title: "Zero Coordination Across Jurisdictions",
        detail: "Cities, counties, school districts, transit authorities—all buying EVs independently. No shared learning, duplicated mistakes, incompatible charging networks.",
        stat: "90K+",
        statLabel: "local government entities"
      },
      {
        title: "Federal Money Flooding In Blind",
        detail: "$7.5B NEVI program plus billions more in IRA funding. Grants awarded with no tracking of outcomes. Taxpayers can't see ROI.",
        stat: "$7.5B",
        statLabel: "NEVI program funding"
      },
      {
        title: "Charging Infrastructure Silos",
        detail: "Every municipality planning charging separately. Incompatible systems, coverage gaps, stranded assets. No regional coordination.",
        stat: "0",
        statLabel: "unified municipal charging databases"
      },
      {
        title: "Vendors Flying Blind",
        detail: "EV manufacturers, charging companies, and fleet service providers have no visibility into municipal procurement pipelines or installed base.",
        stat: "$45B",
        statLabel: "municipal vehicle market"
      }
    ]
  },

  solution: {
    title: "FleetForward: Intelligence for Municipal Electrification",
    tagline: "Track. Coordinate. Optimize. Deploy.",
    pillars: [
      {
        icon: "Truck",
        title: "Vehicle Registry",
        description: "Comprehensive database of municipal EV purchases, fleet composition, and replacement schedules across all local governments.",
        features: ["Vehicle tracking by jurisdiction", "Fleet composition analysis", "Replacement timeline modeling", "TCO benchmarking"]
      },
      {
        icon: "Battery",
        title: "Charging Infrastructure Map",
        description: "Real-time tracking of municipal charging installations, utilization rates, and coverage gaps across regions.",
        features: ["Installation tracking", "Utilization monitoring", "Coverage gap analysis", "Interoperability scoring"]
      },
      {
        icon: "DollarSign",
        title: "Grant Intelligence",
        description: "Track every federal and state grant application, award, and outcome for EV infrastructure funding.",
        features: ["NEVI tracking", "Application pipeline", "Award monitoring", "Outcome reporting"]
      },
      {
        icon: "MapPin",
        title: "Coordination Platform",
        description: "Enable regional coordination between municipalities for joint procurement, shared infrastructure, and best practice sharing.",
        features: ["Regional planning tools", "Joint procurement matching", "Best practice library", "Peer benchmarking"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "NEVI Program Deployment",
        detail: "$7.5B National Electric Vehicle Infrastructure program now deploying. States scrambling to allocate funds. Zero visibility into outcomes.",
        icon: "Zap"
      },
      {
        title: "Municipal EV Mandates",
        detail: "State laws requiring fleet electrification. California, New York, others mandating zero-emission municipal vehicles by 2035.",
        icon: "Shield"
      },
      {
        title: "Federal Reporting Requirements",
        detail: "New federal requirements for grant reporting and outcome tracking. Municipalities need systems to comply. We become that system.",
        icon: "FileText"
      },
      {
        title: "Vendor Market Need",
        detail: "EV manufacturers and charging companies desperate for municipal market intelligence. Willing to pay premium for procurement visibility.",
        icon: "TrendingUp"
      }
    ]
  },

  marketSize: {
    tam: {
      value: "$58B",
      description: "Total addressable market: Municipal vehicles + EV infrastructure + intelligence services",
      breakdown: [
        { segment: "Municipal Vehicle Market", value: "$45B", growth: "6.2% CAGR" },
        { segment: "NEVI + Federal EV Programs", value: "$7.5B", growth: "IRA funding ongoing" },
        { segment: "Fleet Management Software", value: "$4.2B", growth: "12% CAGR" },
        { segment: "Market Intelligence Services", value: "$1.3B", growth: "18% CAGR" }
      ]
    },
    sam: {
      value: "$3.2B",
      description: "Serviceable addressable market: Municipal fleet intelligence, grant services, and vendor data",
      breakdown: [
        { segment: "Municipal SaaS/Intelligence", value: "$1.4B", growth: "90K local governments" },
        { segment: "Grant Consulting Market", value: "$800M", growth: "Federal funding surge" },
        { segment: "Vendor Market Intelligence", value: "$600M", growth: "EV OEMs + charging cos" },
        { segment: "Utility Planning Data", value: "$400M", growth: "Grid capacity planning" }
      ]
    },
    som: {
      value: "$48M",
      description: "Year 5 revenue target: 2,500 municipalities, 150 vendor clients, comprehensive grant tracking",
      breakdown: [
        { segment: "Municipal SaaS", value: "$18M", growth: "2,500 entities @ $600/mo avg" },
        { segment: "Vendor Intelligence", value: "$15M", growth: "150 vendors @ $100K/yr avg" },
        { segment: "Grant Services", value: "$10M", growth: "Application support + tracking" },
        { segment: "Data Licensing", value: "$5M", growth: "Utilities, researchers, policy" }
      ]
    }
  },

  competition: {
    overview: "No comprehensive platform exists for municipal fleet electrification intelligence. Point solutions exist for fleet management or grant tracking, but none combine vehicle registry, charging infrastructure, and grant intelligence.",
    competitors: [
      {
        name: "Geotab / Samsara",
        description: "Fleet telematics providers. Focus on vehicle tracking, not procurement intelligence or grant coordination.",
        strengths: ["Strong telematics", "Large customer base", "Hardware + software"],
        weaknesses: ["No procurement data", "Not municipal-focused", "No grant tracking", "No infrastructure view"],
        marketShare: "~15% of fleet telematics"
      },
      {
        name: "GrantWatch / Grants.gov",
        description: "Grant discovery platforms. List opportunities but don't track outcomes or coordinate applications.",
        strengths: ["Grant databases", "Search functionality", "Established platforms"],
        weaknesses: ["No outcome tracking", "No municipal focus", "No fleet intelligence", "No vendor data"],
        marketShare: "Grant discovery only"
      },
      {
        name: "AFDC (DOE)",
        description: "Alternative Fuels Data Center. Federal resource but limited to public data, no procurement tracking.",
        strengths: ["Authoritative source", "Free access", "Station locator"],
        weaknesses: ["Public data only", "No procurement data", "No coordination tools", "No real-time updates"],
        marketShare: "Reference resource"
      },
      {
        name: "Municipal Associations (NLC, ICMA)",
        description: "Provide resources but no technology platform for coordination or intelligence.",
        strengths: ["Municipal relationships", "Trust", "Policy influence"],
        weaknesses: ["No tech platform", "Manual coordination", "Limited data", "Potential partners"],
        marketShare: "N/A - potential partners"
      }
    ],
    moat: "Network effects: More municipalities = better benchmarking = more vendor interest = more data = better grant outcomes = more municipalities. First-mover on NEVI tracking creates permanent data advantage."
  },

  businessModel: {
    overview: "Four revenue streams: Municipal SaaS subscriptions, vendor intelligence licensing, grant services, and data licensing to utilities and researchers.",
    revenueStreams: [
      {
        name: "Municipal SaaS",
        description: "Subscription platform for municipalities to track their fleets, plan charging, and coordinate with peers",
        pricing: "$299-$1,499/month based on fleet size",
        margin: "85%",
        details: [
          "Fleet registry & tracking",
          "Charging infrastructure planning",
          "Grant opportunity matching",
          "Peer benchmarking",
          "Compliance reporting"
        ]
      },
      {
        name: "Vendor Intelligence",
        description: "Market intelligence subscriptions for EV manufacturers, charging companies, and fleet service providers",
        pricing: "$50K-$250K/year based on scope",
        margin: "90%",
        details: [
          "Procurement pipeline visibility",
          "RFP alerts & analysis",
          "Market share tracking",
          "Competitive intelligence",
          "Custom research"
        ]
      },
      {
        name: "Grant Services",
        description: "Grant application support, tracking, and outcome reporting for federal EV infrastructure programs",
        pricing: "2-5% of grant value or flat fee",
        margin: "70%",
        details: [
          "NEVI application support",
          "Grant tracking dashboard",
          "Outcome reporting",
          "Compliance monitoring",
          "Success benchmarking"
        ]
      },
      {
        name: "Data Licensing",
        description: "Aggregated, anonymized data for utilities, researchers, and policymakers",
        pricing: "$25K-$150K annual contracts",
        margin: "95%",
        details: [
          "Grid capacity planning data",
          "Policy impact analysis",
          "Academic research access",
          "Infrastructure modeling",
          "Trend reporting"
        ]
      }
    ],
    unitEconomics: {
      ltv: "$12,000",
      cac: "$1,200",
      ltvCacRatio: "10:1",
      paybackPeriod: "6 months",
      grossMargin: "82%",
      details: [
        "Average municipal lifetime: 4+ years (sticky government contracts)",
        "Vendor contracts 2-3 year terms typical",
        "CAC: $800 partnership + $400 content marketing",
        "High expansion revenue from grant services"
      ]
    }
  },

  financials: {
    scenarios: {
      withFinancing: {
        name: "With Federal Grant Angle",
        description: "Leverage NEVI program for distribution and become essential infrastructure for federal reporting",
        projections: [
          { year: "Y1", revenue: "$2.2M", customers: "400 municipalities", highlights: "Platform launch, NLC partnership" },
          { year: "Y2", revenue: "$8.5M", customers: "950 municipalities", highlights: "Vendor intelligence launch, grant tracking" },
          { year: "Y3", revenue: "$19M", customers: "1,600 municipalities", highlights: "Federal reporting integration" },
          { year: "Y4", revenue: "$35M", customers: "2,200 municipalities", highlights: "Utility partnerships, national coverage" },
          { year: "Y5", revenue: "$58M", customers: "3,000 municipalities", highlights: "Market leader, policy influence" }
        ],
        keyAssumptions: [
          "NLC/ICMA partnerships drive 40% of municipal leads",
          "Federal reporting requirements create pull demand",
          "Vendor intelligence scales rapidly with data",
          "Grant services provide high-margin expansion"
        ]
      },
      withoutFinancing: {
        name: "Without Federal Grant Angle",
        description: "Direct municipal sales with vendor intelligence focus",
        projections: [
          { year: "Y1", revenue: "$1.4M", customers: "250 municipalities", highlights: "Platform launch, regional focus" },
          { year: "Y2", revenue: "$5.2M", customers: "600 municipalities", highlights: "Vendor intelligence launch" },
          { year: "Y3", revenue: "$12M", customers: "1,100 municipalities", highlights: "Multi-region expansion" },
          { year: "Y4", revenue: "$24M", customers: "1,700 municipalities", highlights: "National vendor relationships" },
          { year: "Y5", revenue: "$42M", customers: "2,400 municipalities", highlights: "Sustainable growth" }
        ],
        keyAssumptions: [
          "Direct sales to progressive municipalities",
          "Slower but organic municipal adoption",
          "Vendor intelligence is primary revenue driver",
          "Less dependency on federal programs"
        ]
      }
    },
    useOfFunds: [
      { category: "Engineering & Product", percentage: 40, amount: "$2.0M", details: "Platform build, data infrastructure, integrations" },
      { category: "Sales & Partnerships", percentage: 25, amount: "$1.25M", details: "Municipal sales, association partnerships" },
      { category: "Data & Content", percentage: 20, amount: "$1.0M", details: "Grant tracking, vehicle registry, research" },
      { category: "Marketing", percentage: 10, amount: "$500K", details: "Industry events, content, thought leadership" },
      { category: "Operations", percentage: 5, amount: "$250K", details: "Legal, compliance, G&A" }
    ]
  },

  risks: [
    {
      risk: "Federal Program Changes",
      severity: "High",
      mitigation: "Diversify across multiple funding sources (NEVI, IRA, state programs). Build municipal value prop independent of grants. Vendor intelligence doesn't depend on federal programs."
    },
    {
      risk: "Municipal Sales Cycles",
      severity: "High",
      mitigation: "Partner with municipal associations for credibility and distribution. Start with progressive early-adopter municipalities. Offer freemium tier for basic tracking."
    },
    {
      risk: "Data Collection Complexity",
      severity: "Medium",
      mitigation: "Start with public procurement data and grant records. Incentivize municipalities to contribute data via benchmarking value. Build partnerships with state agencies."
    },
    {
      risk: "Competition from Government",
      severity: "Medium",
      mitigation: "Position as partner to federal/state agencies, not competitor. Offer to be the implementation layer for government initiatives. Build relationships with DOE/DOT."
    },
    {
      risk: "Vendor Concentration",
      severity: "Medium",
      mitigation: "Diversify across EV OEMs, charging companies, and fleet services. No single vendor >15% of revenue. Build unique data moat."
    },
    {
      risk: "Economic/Political Shifts",
      severity: "Low",
      mitigation: "Bipartisan support for EV infrastructure. Municipal electrification driven by TCO, not just policy. Building permits and regulations are sticky regardless of federal changes."
    }
  ],

  milestones: [
    { quarter: "Q1 2026", milestone: "Close $5M seed round, hire core team", status: "target" },
    { quarter: "Q2 2026", milestone: "Launch platform with 150 municipalities, NLC partnership signed", status: "target" },
    { quarter: "Q3 2026", milestone: "Grant tracking for all 50 states live, 300 municipalities", status: "target" },
    { quarter: "Q4 2026", milestone: "First vendor intelligence contracts, 500 municipalities", status: "target" },
    { quarter: "Q1 2027", milestone: "Federal reporting integration pilot with DOT", status: "target" },
    { quarter: "Q2 2027", milestone: "1,000 municipalities, 50 vendor clients", status: "target" },
    { quarter: "Q3 2027", milestone: "Utility partnerships for grid planning data", status: "target" },
    { quarter: "Q4 2027", milestone: "Series A at $60-80M valuation", status: "target" }
  ],

  team: {
    hiring: [
      { role: "CTO", priority: "Critical", timeline: "Immediate", description: "Data infrastructure, platform architecture, integrations" },
      { role: "VP Government Sales", priority: "Critical", timeline: "Q2 2026", description: "Municipal sales, association relationships, procurement expertise" },
      { role: "Head of Data", priority: "High", timeline: "Q2 2026", description: "Grant tracking, vehicle registry, research and analysis" },
      { role: "VP Business Development", priority: "High", timeline: "Q3 2026", description: "Vendor relationships, utility partnerships, data licensing" }
    ]
  },

  ask: {
    amount: "$5M",
    round: "Seed",
    timeline: "Q1 2026",
    terms: "Priced round, standard seed terms",
    use: "Build municipal EV registry, launch grant tracking platform, establish NLC/ICMA partnerships, prove intelligence value to vendors",
    targetInvestors: [
      "Climate tech / cleantech investors",
      "GovTech specialists",
      "Vertical SaaS investors",
      "Strategic angels from municipal/EV industry"
    ]
  },

  sources: [
    { name: "NEVI Formula Program (FHWA)", url: "https://www.fhwa.dot.gov/environment/nevi/" },
    { name: "Alternative Fuels Data Center (DOE)", url: "https://afdc.energy.gov/" },
    { name: "National League of Cities", url: "https://www.nlc.org" },
    { name: "ICMA - International City/County Management Association", url: "https://icma.org" },
    { name: "Bloomberg NEF EV Outlook", url: "https://about.bnef.com/electric-vehicle-outlook/" }
  ]
}

function ExpandableSection({ title, children, defaultOpen = false }: {
  title: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-slate-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-slate-800 flex items-center justify-between hover:bg-slate-750 transition-colors"
      >
        <div className="font-semibold text-lg text-white">{title}</div>
        {isOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-slate-900">
          {children}
        </div>
      )}
    </div>
  )
}

function StatCard({ value, label, icon: Icon }: { value: string; label: string; icon: any }) {
  return (
    <div className="bg-slate-800 rounded-lg p-4 text-center">
      <Icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  )
}

export default function BusinessPlanPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'detailed' | 'financials'>('overview')

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4">
              <a href="/capex-7" className="text-slate-400 hover:text-white transition-colors mt-1">
                <ArrowLeft className="w-5 h-5" />
              </a>
              <div>
                <h1 className="text-2xl font-bold text-blue-400">{businessPlan.companyName}</h1>
                <p className="text-slate-400 text-sm">{businessPlan.tagline}</p>
              </div>
            </div>
            <div className="text-right text-sm text-slate-500">
              <div>{businessPlan.version}</div>
              <div>{businessPlan.date}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
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
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-slate-400 hover:text-white'
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
            <section className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-xl p-8 border border-blue-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="text-blue-400" />
                Executive Summary
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-blue-400 font-semibold mb-2">The Problem</h3>
                  <p className="text-slate-300">{businessPlan.executiveSummary.problem}</p>
                </div>
                <div>
                  <h3 className="text-blue-400 font-semibold mb-2">Our Solution</h3>
                  <p className="text-slate-300">{businessPlan.executiveSummary.solution}</p>
                </div>
                <div>
                  <h3 className="text-blue-400 font-semibold mb-2">Market Opportunity</h3>
                  <p className="text-slate-300">{businessPlan.executiveSummary.market}</p>
                </div>
                <div>
                  <h3 className="text-blue-400 font-semibold mb-2">The Ask</h3>
                  <p className="text-slate-300">{businessPlan.executiveSummary.ask}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard value="$58B" label="TAM" icon={Globe} />
                <StatCard value="90K+" label="Local Governments" icon={Building2} />
                <StatCard value="10:1" label="LTV:CAC Ratio" icon={TrendingUp} />
                <StatCard value="$5M" label="Seed Ask" icon={DollarSign} />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <AlertTriangle className="text-blue-400" />
                {businessPlan.problem.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.problem.points.map((point, i) => (
                  <div key={i} className="bg-slate-800 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-white">{point.title}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-400">{point.stat}</div>
                        <div className="text-xs text-slate-500">{point.statLabel}</div>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm">{point.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Lightbulb className="text-blue-400" />
                {businessPlan.solution.title}
              </h2>
              <p className="text-slate-400 mb-6">{businessPlan.solution.tagline}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {businessPlan.solution.pillars.map((pillar, i) => {
                  const IconComponent = pillar.icon === 'Truck' ? Truck :
                    pillar.icon === 'Battery' ? Battery :
                    pillar.icon === 'DollarSign' ? DollarSign :
                    pillar.icon === 'MapPin' ? MapPin : Database
                  return (
                    <div key={i} className="bg-slate-800 rounded-lg p-5">
                      <IconComponent className="w-8 h-8 text-blue-400 mb-3" />
                      <h3 className="font-semibold text-white mb-2">{pillar.title}</h3>
                      <p className="text-slate-400 text-sm mb-3">{pillar.description}</p>
                      <ul className="space-y-1">
                        {pillar.features.map((feature, j) => (
                          <li key={j} className="text-xs text-slate-500 flex items-center gap-1">
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

            <section className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl p-8 border border-blue-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="text-blue-400" />
                The Ask
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400">{businessPlan.ask.amount}</div>
                  <div className="text-slate-400">{businessPlan.ask.round} Round</div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-slate-300 mb-4">{businessPlan.ask.use}</p>
                  <div className="flex flex-wrap gap-2">
                    {businessPlan.ask.targetInvestors.map((investor, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300">
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
            <ExpandableSection title={<div className="flex items-center gap-2"><Clock className="text-blue-400" /> Why Now?</div>} defaultOpen={true}>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => {
                  const IconComponent = factor.icon === 'TrendingUp' ? TrendingUp : factor.icon === 'Zap' ? Zap : factor.icon === 'Shield' ? Shield : FileText
                  return (
                    <div key={i} className="bg-slate-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5 text-blue-400" />
                        <h3 className="font-semibold text-white">{factor.title}</h3>
                      </div>
                      <p className="text-slate-400 text-sm">{factor.detail}</p>
                    </div>
                  )
                })}
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><PieChart className="text-blue-400" /> Market Size</div>}>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { key: 'tam', label: 'TAM', data: businessPlan.marketSize.tam },
                  { key: 'sam', label: 'SAM', data: businessPlan.marketSize.sam },
                  { key: 'som', label: 'SOM (Y5)', data: businessPlan.marketSize.som }
                ].map(({ key, label, data }) => (
                  <div key={key} className="bg-slate-800 rounded-lg p-5">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-blue-400">{data.value}</div>
                      <div className="text-sm text-slate-400">{label}</div>
                    </div>
                    <p className="text-sm text-slate-400 mb-3">{data.description}</p>
                    <div className="space-y-2">
                      {data.breakdown.map((item, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span className="text-slate-400">{item.segment}</span>
                          <span className="text-white font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Users className="text-blue-400" /> Competitive Landscape</div>}>
              <p className="text-slate-400 mb-4">{businessPlan.competition.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {businessPlan.competition.competitors.map((comp, i) => (
                  <div key={i} className="bg-slate-800 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">{comp.name}</h3>
                    <p className="text-slate-400 text-sm mb-3">{comp.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="text-green-400 font-medium mb-1">Strengths</div>
                        <ul className="text-slate-400 space-y-1">{comp.strengths.map((s, j) => <li key={j}>+ {s}</li>)}</ul>
                      </div>
                      <div>
                        <div className="text-red-400 font-medium mb-1">Weaknesses</div>
                        <ul className="text-slate-400 space-y-1">{comp.weaknesses.map((w, j) => <li key={j}>- {w}</li>)}</ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-800">
                <h3 className="font-semibold text-blue-400 mb-2">Our Moat</h3>
                <p className="text-slate-300">{businessPlan.competition.moat}</p>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Briefcase className="text-blue-400" /> Business Model</div>}>
              <p className="text-slate-400 mb-4">{businessPlan.businessModel.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {businessPlan.businessModel.revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-slate-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{stream.name}</h3>
                      <span className="text-blue-400 font-medium">{stream.pricing}</span>
                    </div>
                    <p className="text-slate-400 text-sm mb-3">{stream.description}</p>
                    <div className="text-xs text-slate-500 mb-2">Gross Margin: {stream.margin}</div>
                    <ul className="text-xs text-slate-400 space-y-1">
                      {stream.details.map((d, j) => (<li key={j} className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-blue-400" />{d}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-4">Unit Economics</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                  <div className="text-center"><div className="text-2xl font-bold text-blue-400">{businessPlan.businessModel.unitEconomics.ltv}</div><div className="text-xs text-slate-400">LTV</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-blue-400">{businessPlan.businessModel.unitEconomics.cac}</div><div className="text-xs text-slate-400">CAC</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-blue-400">{businessPlan.businessModel.unitEconomics.ltvCacRatio}</div><div className="text-xs text-slate-400">LTV:CAC</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-blue-400">{businessPlan.businessModel.unitEconomics.paybackPeriod}</div><div className="text-xs text-slate-400">Payback</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-blue-400">{businessPlan.businessModel.unitEconomics.grossMargin}</div><div className="text-xs text-slate-400">Gross Margin</div></div>
                </div>
                <ul className="text-sm text-slate-400 space-y-1">{businessPlan.businessModel.unitEconomics.details.map((d, i) => <li key={i}>• {d}</li>)}</ul>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Shield className="text-blue-400" /> Risks & Mitigations</div>}>
              <div className="space-y-3">
                {businessPlan.risks.map((risk, i) => (
                  <div key={i} className="bg-slate-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{risk.risk}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${risk.severity === 'High' ? 'bg-red-900/50 text-red-400' : risk.severity === 'Medium' ? 'bg-yellow-900/50 text-yellow-400' : 'bg-green-900/50 text-green-400'}`}>{risk.severity}</span>
                    </div>
                    <p className="text-slate-400 text-sm"><strong className="text-slate-300">Mitigation:</strong> {risk.mitigation}</p>
                  </div>
                ))}
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Award className="text-blue-400" /> Milestones & Timeline</div>}>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700" />
                <div className="space-y-4">
                  {businessPlan.milestones.map((m, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-blue-400" />
                      <div className="bg-slate-800 rounded-lg p-4">
                        <span className="text-blue-400 font-medium">{m.quarter}</span>
                        <p className="text-slate-300">{m.milestone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Users className="text-blue-400" /> Team & Hiring</div>}>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.team.hiring.map((hire, i) => (
                  <div key={i} className="bg-slate-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{hire.role}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${hire.priority === 'Critical' ? 'bg-red-900/50 text-red-400' : 'bg-yellow-900/50 text-yellow-400'}`}>{hire.priority}</span>
                    </div>
                    <p className="text-slate-400 text-sm mb-1">{hire.description}</p>
                    <p className="text-xs text-slate-500">Timeline: {hire.timeline}</p>
                  </div>
                ))}
              </div>
            </ExpandableSection>
          </div>
        )}

        {activeTab === 'financials' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><LineChart className="text-blue-400" />Financial Projections</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800 rounded-xl p-6 border-2 border-blue-600">
                  <div className="flex items-center gap-2 mb-2"><Zap className="text-blue-400" /><h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withFinancing.name}</h3></div>
                  <p className="text-slate-400 text-sm mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>
                  <table className="w-full text-sm mb-4">
                    <thead><tr className="border-b border-slate-700"><th className="text-left py-2 text-slate-400">Year</th><th className="text-right py-2 text-slate-400">Revenue</th><th className="text-right py-2 text-slate-400">Municipalities</th></tr></thead>
                    <tbody>{businessPlan.financials.scenarios.withFinancing.projections.map((proj, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-2 text-white">{proj.year}</td><td className="py-2 text-right text-blue-400 font-medium">{proj.revenue}</td><td className="py-2 text-right text-slate-300">{proj.customers}</td></tr>))}</tbody>
                  </table>
                  <div className="text-xs text-slate-400"><div className="font-medium mb-1">Key Assumptions:</div><ul className="space-y-1">{businessPlan.financials.scenarios.withFinancing.keyAssumptions.map((a, i) => <li key={i}>• {a}</li>)}</ul></div>
                </div>
                <div className="bg-slate-800 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2"><Building2 className="text-slate-400" /><h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withoutFinancing.name}</h3></div>
                  <p className="text-slate-400 text-sm mb-4">{businessPlan.financials.scenarios.withoutFinancing.description}</p>
                  <table className="w-full text-sm mb-4">
                    <thead><tr className="border-b border-slate-700"><th className="text-left py-2 text-slate-400">Year</th><th className="text-right py-2 text-slate-400">Revenue</th><th className="text-right py-2 text-slate-400">Municipalities</th></tr></thead>
                    <tbody>{businessPlan.financials.scenarios.withoutFinancing.projections.map((proj, i) => (<tr key={i} className="border-b border-slate-700/50"><td className="py-2 text-white">{proj.year}</td><td className="py-2 text-right text-blue-400 font-medium">{proj.revenue}</td><td className="py-2 text-right text-slate-300">{proj.customers}</td></tr>))}</tbody>
                  </table>
                  <div className="text-xs text-slate-400"><div className="font-medium mb-1">Key Assumptions:</div><ul className="space-y-1">{businessPlan.financials.scenarios.withoutFinancing.keyAssumptions.map((a, i) => <li key={i}>• {a}</li>)}</ul></div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><PieChart className="text-blue-400" />Use of Funds</h2>
              <div className="bg-slate-800 rounded-xl p-6">
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (<div key={i} className="text-center"><div className="text-2xl font-bold text-blue-400">{fund.percentage}%</div><div className="text-sm font-medium text-white">{fund.category}</div><div className="text-xs text-slate-400">{fund.amount}</div></div>))}
                </div>
                <div className="space-y-3">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (<div key={i} className="flex items-center gap-4"><div className="w-32 text-sm text-slate-400">{fund.category}</div><div className="flex-1 bg-slate-700 rounded-full h-4"><div className="bg-blue-500 h-4 rounded-full" style={{ width: `${fund.percentage}%` }} /></div><div className="w-24 text-sm text-right text-white">{fund.amount}</div></div>))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><FileText className="text-blue-400" />Sources</h2>
              <div className="bg-slate-800 rounded-lg p-4">
                <ul className="space-y-2">{businessPlan.sources.map((source, i) => (<li key={i}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center gap-2"><ExternalLink className="w-4 h-4" />{source.name}</a></li>))}</ul>
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-slate-500 text-sm">
          <p>{businessPlan.companyName} Business Plan • {businessPlan.version} • {businessPlan.date}</p>
          <p className="mt-2">Part of the <a href="/tokens/#framework" className="text-blue-400 hover:text-blue-300">Ribbit Token Cap-Ex Framework</a></p>
        </div>
      </footer>
    </div>
  )
}
