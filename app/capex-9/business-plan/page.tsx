'use client'

import { useState } from 'react'
import {
  ArrowLeft, Target, TrendingUp, DollarSign, Users, Shield, AlertTriangle,
  CheckCircle, ExternalLink, ChevronDown, ChevronUp, Building2, Zap, BarChart3,
  Clock, Wrench, FileText, Briefcase, Lightbulb, Globe, Award, PieChart, LineChart,
  CloudLightning, Radio, MapPin, Camera
} from 'lucide-react'

const businessPlan = {
  companyName: "StormGrid",
  tagline: "The Credentialed Network for Severe Weather Response",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Storm chasers operate as fragmented individuals with trucks and cameras. TV stations pay for footage ad-hoc with no quality assurance. Emergency managers have zero visibility into storm chaser positions or capabilities during active weather events.",
    solution: "StormGrid aggregates storm chasers into a credentialed network with real-time GPS positioning, footage verification, and coordinated routing. We provide insurance, liability coverage, and professional standards—becoming the dispatch layer between chasers and those who need storm intelligence.",
    market: "$4.2B weather services market with $12B+ in annual insured storm losses. TV stations need reliable footage, insurance carriers need early damage assessment, and emergency management agencies need ground-truth during severe weather.",
    ask: "$3M Seed Round to build chaser network, deploy tracking/verification platform, and establish partnerships with TV networks, insurance carriers, and emergency management agencies."
  },

  problem: {
    title: "The Severe Weather Intelligence Gap",
    points: [
      {
        title: "Fragmented Chaser Network",
        detail: "Thousands of storm chasers operate independently with no coordination, quality standards, or professional accountability. TV stations scramble to find reliable sources during events.",
        stat: "5K+",
        statLabel: "active storm chasers in the US"
      },
      {
        title: "No Real-Time Visibility",
        detail: "Emergency managers and media have no idea where chasers are positioned during severe weather. Critical footage and ground-truth intelligence goes uncaptured or arrives too late.",
        stat: "0",
        statLabel: "coordinated chaser networks"
      },
      {
        title: "Insurance Assessment Delays",
        detail: "After major storms, insurance companies wait days or weeks for damage assessment. Earlier ground-truth could accelerate claims and reduce fraud.",
        stat: "$12B+",
        statLabel: "annual US insured storm losses"
      },
      {
        title: "Safety & Liability Chaos",
        detail: "Chasers operate without standardized safety protocols or liability coverage. Accidents happen. TV stations buying footage have no protection.",
        stat: "Uninsured",
        statLabel: "majority of active chasers"
      }
    ]
  },

  solution: {
    title: "StormGrid: Intelligence for Severe Weather",
    tagline: "Aggregate. Coordinate. Verify. Protect.",
    pillars: [
      {
        icon: "CloudLightning",
        title: "Chaser Network",
        description: "Credentialed network of vetted storm chasers with verified equipment, training certifications, and professional standards.",
        features: ["Credential verification", "Equipment standards", "Safety certification", "Background checks"]
      },
      {
        icon: "MapPin",
        title: "Real-Time Positioning",
        description: "GPS tracking platform shows all network chasers in real-time. Dispatch optimal coverage based on storm tracks and chaser positions.",
        features: ["Live GPS tracking", "Storm track overlay", "Coverage optimization", "Dispatch coordination"]
      },
      {
        icon: "Camera",
        title: "Footage Verification",
        description: "Authenticated footage with GPS stamps, timestamps, and chain-of-custody. Guaranteed provenance for media and legal use.",
        features: ["GPS-stamped footage", "Blockchain verification", "Rights management", "Instant delivery"]
      },
      {
        icon: "Shield",
        title: "Insurance & Liability",
        description: "Network-wide liability coverage protects chasers, media buyers, and the public. Professional standards reduce risk for all parties.",
        features: ["Liability coverage", "Equipment insurance", "Professional standards", "Incident protocols"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "Climate-Driven Severe Weather",
        detail: "Severe weather events increasing in frequency and intensity. More storms = more demand for ground-truth intelligence.",
        icon: "TrendingUp"
      },
      {
        title: "Mobile Video Technology",
        detail: "4K cameras under $500, reliable cellular everywhere, drones under $1,000. Quality footage capture more accessible than ever.",
        icon: "Zap"
      },
      {
        title: "Insurance Industry Pressure",
        detail: "Carriers spending billions on claims with limited ground-truth. Desperate for early damage assessment and fraud prevention tools.",
        icon: "Shield"
      },
      {
        title: "Social Media Disruption",
        detail: "Twitter/X destroyed by amateur footage with no verification. Professional networks with authenticated content increasingly valuable.",
        icon: "Users"
      }
    ]
  },

  marketSize: {
    tam: {
      value: "$18B",
      description: "Total addressable market: Weather services + storm-related insurance intelligence",
      breakdown: [
        { segment: "Weather Services Market", value: "$4.2B", growth: "7.8% CAGR" },
        { segment: "Insurance Loss Mitigation", value: "$8.5B", growth: "Property casualty analytics" },
        { segment: "Emergency Management Tech", value: "$3.2B", growth: "12% CAGR" },
        { segment: "Media Weather Content", value: "$2.1B", growth: "Local TV weather spending" }
      ]
    },
    sam: {
      value: "$1.8B",
      description: "Serviceable addressable market: Severe weather ground-truth intelligence",
      breakdown: [
        { segment: "TV Station Weather Coverage", value: "$650M", growth: "200+ severe weather markets" },
        { segment: "Insurance Early Assessment", value: "$800M", growth: "Top 20 carriers" },
        { segment: "Emergency Management", value: "$250M", growth: "State/local agencies" },
        { segment: "Research & Verification", value: "$100M", growth: "NWS, universities, legal" }
      ]
    },
    som: {
      value: "$28M",
      description: "Year 5 revenue target: 800 credentialed chasers, 50 TV partnerships, 10 insurance carriers",
      breakdown: [
        { segment: "TV Network Contracts", value: "$12M", growth: "50 markets @ $240K/yr avg" },
        { segment: "Insurance Partnerships", value: "$9M", growth: "10 carriers @ $900K/yr avg" },
        { segment: "Chaser SaaS + Fees", value: "$4M", growth: "800 chasers @ $400/mo + fees" },
        { segment: "Emergency Mgmt Contracts", value: "$3M", growth: "State/local agreements" }
      ]
    }
  },

  competition: {
    overview: "No coordinated, credentialed storm chaser network exists. Current landscape is fragmented individuals and informal relationships.",
    competitors: [
      {
        name: "Freelance Chasers",
        description: "Individual storm chasers selling footage ad-hoc to whoever pays. No coordination or standards.",
        strengths: ["Low cost", "Passionate community", "Geographic coverage"],
        weaknesses: ["No coordination", "No verification", "No liability coverage", "Unreliable availability"],
        marketShare: "90%+ of current activity"
      },
      {
        name: "AccuWeather / Weather Companies",
        description: "Large weather services companies focused on forecasting, not ground-truth intelligence.",
        strengths: ["Brand recognition", "Data infrastructure", "Media relationships"],
        weaknesses: ["Forecast focus", "No chaser network", "No real-time ground-truth", "High overhead"],
        marketShare: "Minimal ground-truth"
      },
      {
        name: "TV Station Staff",
        description: "Some stations employ meteorologists who chase, but can't cover wide areas.",
        strengths: ["Direct employment", "Known quality", "Immediate access"],
        weaknesses: ["Limited coverage area", "Expensive", "Single storm at a time", "Not core competency"],
        marketShare: "Major markets only"
      },
      {
        name: "Social Media Aggregators",
        description: "Services that scan social media for storm content. Verification challenges.",
        strengths: ["Wide coverage", "Low cost", "Speed"],
        weaknesses: ["No verification", "Rights issues", "Quality problems", "Liability exposure"],
        marketShare: "Growing but problematic"
      }
    ],
    moat: "Network effects: More chasers = better coverage = more media/insurance interest = better chaser economics = more chasers. Credential standards create quality barrier competitors can't match quickly."
  },

  businessModel: {
    overview: "Three revenue streams: Enterprise contracts (TV/insurance), chaser network fees, and emergency management agreements.",
    revenueStreams: [
      {
        name: "TV Network Contracts",
        description: "Annual or seasonal contracts with TV stations for priority access to verified storm footage",
        pricing: "$100K-$500K/year per market",
        margin: "75%",
        details: [
          "Guaranteed coverage commitments",
          "Real-time footage delivery",
          "Exclusive market rights",
          "Multi-camera coordination",
          "24/7 severe weather access"
        ]
      },
      {
        name: "Insurance Partnerships",
        description: "Early damage assessment and verification services for property casualty carriers",
        pricing: "$500K-$2M/year per carrier",
        margin: "70%",
        details: [
          "Post-storm damage documentation",
          "Real-time loss estimation",
          "Fraud prevention verification",
          "Claims acceleration support",
          "Risk model data feeds"
        ]
      },
      {
        name: "Chaser Network Platform",
        description: "SaaS subscription + revenue share for credentialed storm chasers",
        pricing: "$199-$499/month + 15% footage fees",
        margin: "85%",
        details: [
          "GPS tracking & dispatch",
          "Footage upload & verification",
          "Liability coverage access",
          "Job matching",
          "Equipment discounts"
        ]
      },
      {
        name: "Emergency Management",
        description: "Contracts with state/local emergency management for severe weather ground-truth",
        pricing: "$50K-$300K/year per agency",
        margin: "65%",
        details: [
          "Real-time chaser positioning",
          "Ground-truth verification",
          "Damage assessment support",
          "Integration with EOC systems",
          "Training partnerships"
        ]
      }
    ],
    unitEconomics: {
      ltv: "$24,000",
      cac: "$3,000",
      ltvCacRatio: "8:1",
      paybackPeriod: "6 months",
      grossMargin: "72%",
      details: [
        "Blended across enterprise and chaser segments",
        "Enterprise contracts: 3+ year average lifetime",
        "Chaser retention: 85% annual",
        "CAC: Trade shows + direct sales + referrals"
      ]
    }
  },

  financials: {
    scenarios: {
      withFinancing: {
        name: "With Insurance/Media Cap-Ex Angle",
        description: "Leverage Cap-Ex budgets: TV stations capitalize weather tech, insurers fund loss mitigation infrastructure",
        projections: [
          { year: "Y1", revenue: "$1.2M", customers: "150 chasers, 8 TV stations", highlights: "Network launch, first TV contracts" },
          { year: "Y2", revenue: "$5.5M", customers: "350 chasers, 25 TV, 3 insurers", highlights: "Insurance pilot success" },
          { year: "Y3", revenue: "$12M", customers: "550 chasers, 40 TV, 7 insurers", highlights: "National coverage" },
          { year: "Y4", revenue: "$21M", customers: "700 chasers, 48 TV, 9 insurers", highlights: "Emergency mgmt expansion" },
          { year: "Y5", revenue: "$32M", customers: "850 chasers, 55 TV, 12 insurers", highlights: "Market leader, M&A interest" }
        ],
        keyAssumptions: [
          "Insurance Cap-Ex budgets fund infrastructure",
          "TV stations capitalize as weather technology",
          "Multi-year enterprise contracts",
          "Network effects accelerate Year 3+"
        ]
      },
      withoutFinancing: {
        name: "Without Cap-Ex Financing Angle",
        description: "Direct sales to media and insurance without leveraging capital expenditure positioning",
        projections: [
          { year: "Y1", revenue: "$800K", customers: "100 chasers, 5 TV stations", highlights: "Network launch" },
          { year: "Y2", revenue: "$2.8M", customers: "220 chasers, 15 TV, 1 insurer", highlights: "Regional expansion" },
          { year: "Y3", revenue: "$7M", customers: "380 chasers, 28 TV, 4 insurers", highlights: "Insurance traction" },
          { year: "Y4", revenue: "$14M", customers: "520 chasers, 38 TV, 6 insurers", highlights: "Multi-state coverage" },
          { year: "Y5", revenue: "$22M", customers: "680 chasers, 45 TV, 8 insurers", highlights: "Sustainable growth" }
        ],
        keyAssumptions: [
          "OpEx-based contracts only",
          "Slower enterprise sales cycles",
          "Higher churn on annual renewals",
          "Organic network growth"
        ]
      }
    },
    useOfFunds: [
      { category: "Engineering & Product", percentage: 40, amount: "$1.2M", details: "Platform, GPS tracking, verification system" },
      { category: "Chaser Network", percentage: 25, amount: "$750K", details: "Recruitment, credentialing, training programs" },
      { category: "Sales & Partnerships", percentage: 20, amount: "$600K", details: "TV, insurance, emergency mgmt sales" },
      { category: "Insurance & Legal", percentage: 10, amount: "$300K", details: "Liability coverage, compliance, contracts" },
      { category: "Operations", percentage: 5, amount: "$150K", details: "G&A, office, initial equipment" }
    ]
  },

  risks: [
    {
      risk: "Storm Seasonality",
      severity: "High",
      mitigation: "Annual contracts with guaranteed minimums. Expand to winter storms, hurricanes. Enterprise contracts smooth revenue."
    },
    {
      risk: "Chaser Safety Incidents",
      severity: "High",
      mitigation: "Rigorous safety certification requirements. Network-wide liability coverage. Strict protocols with enforcement."
    },
    {
      risk: "Technology Reliability",
      severity: "Medium",
      mitigation: "Cellular + satellite redundancy for tracking. Offline-capable apps. Multiple upload pathways for footage."
    },
    {
      risk: "Insurance Carrier Adoption",
      severity: "Medium",
      mitigation: "Start with pilot programs demonstrating ROI. Partner with insurtech companies who have carrier relationships."
    },
    {
      risk: "Competitive Response",
      severity: "Low",
      mitigation: "Network effects create barriers. Credential standards take time to replicate. First-mover advantage in relationships."
    },
    {
      risk: "Climate Variability",
      severity: "Low",
      mitigation: "Long-term trend is more severe weather. Year-to-year variability managed through contract structures."
    }
  ],

  milestones: [
    { quarter: "Q1 2026", milestone: "Close seed round, hire core team", status: "target" },
    { quarter: "Q2 2026", milestone: "Launch platform with 100 credentialed chasers", status: "target" },
    { quarter: "Q3 2026", milestone: "First TV station contracts (5+ markets)", status: "target" },
    { quarter: "Q4 2026", milestone: "150 chasers, insurance carrier pilot", status: "target" },
    { quarter: "Q1 2027", milestone: "First severe weather season with full network", status: "target" },
    { quarter: "Q2 2027", milestone: "300 chasers, 20 TV markets", status: "target" },
    { quarter: "Q3 2027", milestone: "Insurance carrier conversion to annual contract", status: "target" },
    { quarter: "Q4 2027", milestone: "Series A at $40-60M valuation", status: "target" }
  ],

  team: {
    hiring: [
      { role: "CTO", priority: "Critical", timeline: "Immediate", description: "Platform architecture, real-time systems, verification tech" },
      { role: "Head of Chaser Network", priority: "Critical", timeline: "Q1 2026", description: "Chaser recruitment, credentialing, community" },
      { role: "VP Sales", priority: "High", timeline: "Q2 2026", description: "TV, insurance, emergency management partnerships" },
      { role: "Director of Safety", priority: "High", timeline: "Q2 2026", description: "Safety protocols, training programs, incident response" }
    ]
  },

  ask: {
    amount: "$3M",
    round: "Seed",
    timeline: "Q1 2026",
    terms: "Priced round, standard seed terms",
    use: "Build chaser network, deploy tracking/verification platform, establish TV and insurance partnerships",
    targetInvestors: [
      "Weather/climate tech investors",
      "Insurance/insurtech focused funds",
      "Media and entertainment VCs",
      "Strategic angels from TV/insurance industry"
    ]
  },

  sources: [
    { name: "IBISWorld Weather Services", url: "https://www.ibisworld.com/united-states/market-research-reports/weather-forecasting-services-industry/" },
    { name: "Insurance Information Institute - Catastrophes", url: "https://www.iii.org/fact-statistic/facts-statistics-us-catastrophes" },
    { name: "NOAA Severe Weather Statistics", url: "https://www.spc.noaa.gov/wcm/" },
    { name: "National Weather Association", url: "https://www.nwas.org/" }
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
      <Icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
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
                <h1 className="text-2xl font-bold text-purple-400">{businessPlan.companyName}</h1>
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
                    ? 'text-purple-400 border-b-2 border-purple-400'
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
            <section className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-xl p-8 border border-purple-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="text-purple-400" />
                Executive Summary
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-purple-400 font-semibold mb-2">The Problem</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.problem}</p>
                </div>
                <div>
                  <h3 className="text-purple-400 font-semibold mb-2">Our Solution</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.solution}</p>
                </div>
                <div>
                  <h3 className="text-purple-400 font-semibold mb-2">Market Opportunity</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.market}</p>
                </div>
                <div>
                  <h3 className="text-purple-400 font-semibold mb-2">The Ask</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.ask}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard value="$18B" label="TAM" icon={Globe} />
                <StatCard value="5K+" label="US Storm Chasers" icon={Users} />
                <StatCard value="8:1" label="LTV:CAC Ratio" icon={TrendingUp} />
                <StatCard value="$3M" label="Seed Ask" icon={DollarSign} />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <AlertTriangle className="text-purple-400" />
                {businessPlan.problem.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.problem.points.map((point, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-white">{point.title}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-400">{point.stat}</div>
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
                <Lightbulb className="text-purple-400" />
                {businessPlan.solution.title}
              </h2>
              <p className="text-gray-400 mb-6">{businessPlan.solution.tagline}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {businessPlan.solution.pillars.map((pillar, i) => {
                  const IconComponent = pillar.icon === 'CloudLightning' ? CloudLightning :
                    pillar.icon === 'MapPin' ? MapPin :
                    pillar.icon === 'Camera' ? Camera :
                    pillar.icon === 'Shield' ? Shield : CloudLightning
                  return (
                    <div key={i} className="bg-gray-800 rounded-lg p-5">
                      <IconComponent className="w-8 h-8 text-purple-400 mb-3" />
                      <h3 className="font-semibold text-white mb-2">{pillar.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{pillar.description}</p>
                      <ul className="space-y-1">
                        {pillar.features.map((feature, j) => (
                          <li key={j} className="text-xs text-gray-500 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-purple-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </section>

            <section className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-8 border border-purple-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="text-purple-400" />
                The Ask
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400">{businessPlan.ask.amount}</div>
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
            <ExpandableSection title={<div className="flex items-center gap-2"><Clock className="text-purple-400" /> Why Now?</div>} defaultOpen={true}>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => {
                  const IconComponent = factor.icon === 'TrendingUp' ? TrendingUp : factor.icon === 'Zap' ? Zap : factor.icon === 'Users' ? Users : Shield
                  return (
                    <div key={i} className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5 text-purple-400" />
                        <h3 className="font-semibold text-white">{factor.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{factor.detail}</p>
                    </div>
                  )
                })}
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><PieChart className="text-purple-400" /> Market Size</div>}>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { key: 'tam', label: 'TAM', data: businessPlan.marketSize.tam },
                  { key: 'sam', label: 'SAM', data: businessPlan.marketSize.sam },
                  { key: 'som', label: 'SOM (Y5)', data: businessPlan.marketSize.som }
                ].map(({ key, label, data }) => (
                  <div key={key} className="bg-gray-800 rounded-lg p-5">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-purple-400">{data.value}</div>
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

            <ExpandableSection title={<div className="flex items-center gap-2"><Users className="text-purple-400" /> Competitive Landscape</div>}>
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
                        <div className="text-purple-400 font-medium mb-1">Weaknesses</div>
                        <ul className="text-gray-400 space-y-1">{comp.weaknesses.map((w, j) => <li key={j}>- {w}</li>)}</ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800">
                <h3 className="font-semibold text-purple-400 mb-2">Our Moat</h3>
                <p className="text-gray-300">{businessPlan.competition.moat}</p>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Briefcase className="text-purple-400" /> Business Model</div>}>
              <p className="text-gray-400 mb-4">{businessPlan.businessModel.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {businessPlan.businessModel.revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{stream.name}</h3>
                      <span className="text-purple-400 font-medium">{stream.pricing}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{stream.description}</p>
                    <div className="text-xs text-gray-500 mb-2">Gross Margin: {stream.margin}</div>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {stream.details.map((d, j) => (<li key={j} className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-purple-400" />{d}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-4">Unit Economics</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                  <div className="text-center"><div className="text-2xl font-bold text-purple-400">{businessPlan.businessModel.unitEconomics.ltv}</div><div className="text-xs text-gray-400">LTV</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-purple-400">{businessPlan.businessModel.unitEconomics.cac}</div><div className="text-xs text-gray-400">CAC</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-purple-400">{businessPlan.businessModel.unitEconomics.ltvCacRatio}</div><div className="text-xs text-gray-400">LTV:CAC</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-purple-400">{businessPlan.businessModel.unitEconomics.paybackPeriod}</div><div className="text-xs text-gray-400">Payback</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-purple-400">{businessPlan.businessModel.unitEconomics.grossMargin}</div><div className="text-xs text-gray-400">Gross Margin</div></div>
                </div>
                <ul className="text-sm text-gray-400 space-y-1">{businessPlan.businessModel.unitEconomics.details.map((d, i) => <li key={i}>• {d}</li>)}</ul>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Shield className="text-purple-400" /> Risks & Mitigations</div>}>
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

            <ExpandableSection title={<div className="flex items-center gap-2"><Award className="text-purple-400" /> Milestones & Timeline</div>}>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />
                <div className="space-y-4">
                  {businessPlan.milestones.map((m, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-purple-400" />
                      <div className="bg-gray-800 rounded-lg p-4">
                        <span className="text-purple-400 font-medium">{m.quarter}</span>
                        <p className="text-gray-300">{m.milestone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Users className="text-purple-400" /> Team & Hiring</div>}>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.team.hiring.map((hire, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{hire.role}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${hire.priority === 'Critical' ? 'bg-purple-900/50 text-purple-400' : 'bg-yellow-900/50 text-yellow-400'}`}>{hire.priority}</span>
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
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><LineChart className="text-purple-400" />Financial Projections</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-xl p-6 border-2 border-purple-600">
                  <div className="flex items-center gap-2 mb-2"><Zap className="text-purple-400" /><h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withFinancing.name}</h3></div>
                  <p className="text-gray-400 text-sm mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>
                  <table className="w-full text-sm mb-4">
                    <thead><tr className="border-b border-gray-700"><th className="text-left py-2 text-gray-400">Year</th><th className="text-right py-2 text-gray-400">Revenue</th><th className="text-right py-2 text-gray-400">Network</th></tr></thead>
                    <tbody>{businessPlan.financials.scenarios.withFinancing.projections.map((proj, i) => (<tr key={i} className="border-b border-gray-700/50"><td className="py-2 text-white">{proj.year}</td><td className="py-2 text-right text-purple-400 font-medium">{proj.revenue}</td><td className="py-2 text-right text-gray-300">{proj.customers}</td></tr>))}</tbody>
                  </table>
                  <div className="text-xs text-gray-400"><div className="font-medium mb-1">Key Assumptions:</div><ul className="space-y-1">{businessPlan.financials.scenarios.withFinancing.keyAssumptions.map((a, i) => <li key={i}>• {a}</li>)}</ul></div>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2"><Building2 className="text-gray-400" /><h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withoutFinancing.name}</h3></div>
                  <p className="text-gray-400 text-sm mb-4">{businessPlan.financials.scenarios.withoutFinancing.description}</p>
                  <table className="w-full text-sm mb-4">
                    <thead><tr className="border-b border-gray-700"><th className="text-left py-2 text-gray-400">Year</th><th className="text-right py-2 text-gray-400">Revenue</th><th className="text-right py-2 text-gray-400">Network</th></tr></thead>
                    <tbody>{businessPlan.financials.scenarios.withoutFinancing.projections.map((proj, i) => (<tr key={i} className="border-b border-gray-700/50"><td className="py-2 text-white">{proj.year}</td><td className="py-2 text-right text-purple-400 font-medium">{proj.revenue}</td><td className="py-2 text-right text-gray-300">{proj.customers}</td></tr>))}</tbody>
                  </table>
                  <div className="text-xs text-gray-400"><div className="font-medium mb-1">Key Assumptions:</div><ul className="space-y-1">{businessPlan.financials.scenarios.withoutFinancing.keyAssumptions.map((a, i) => <li key={i}>• {a}</li>)}</ul></div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><PieChart className="text-purple-400" />Use of Funds</h2>
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (<div key={i} className="text-center"><div className="text-2xl font-bold text-purple-400">{fund.percentage}%</div><div className="text-sm font-medium text-white">{fund.category}</div><div className="text-xs text-gray-400">{fund.amount}</div></div>))}
                </div>
                <div className="space-y-3">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (<div key={i} className="flex items-center gap-4"><div className="w-32 text-sm text-gray-400">{fund.category}</div><div className="flex-1 bg-gray-700 rounded-full h-4"><div className="bg-purple-500 h-4 rounded-full" style={{ width: `${fund.percentage}%` }} /></div><div className="w-24 text-sm text-right text-white">{fund.amount}</div></div>))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><FileText className="text-purple-400" />Sources</h2>
              <div className="bg-gray-800 rounded-lg p-4">
                <ul className="space-y-2">{businessPlan.sources.map((source, i) => (<li key={i}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 flex items-center gap-2"><ExternalLink className="w-4 h-4" />{source.name}</a></li>))}</ul>
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          <p>{businessPlan.companyName} Business Plan • {businessPlan.version} • {businessPlan.date}</p>
          <p className="mt-2">Part of the <a href="/tokens/#framework" className="text-purple-400 hover:text-purple-300">Ribbit Token Cap-Ex Framework</a></p>
        </div>
      </footer>
    </div>
  )
}
