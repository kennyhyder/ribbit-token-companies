'use client'

import { useState } from 'react'
import {
  ArrowLeft, Target, TrendingUp, DollarSign, Users, Shield, AlertTriangle,
  CheckCircle, ExternalLink, ChevronDown, ChevronUp, Building2, Zap, BarChart3,
  Clock, Wrench, FileText, Briefcase, Lightbulb, Globe, Award, PieChart, LineChart,
  Tractor, Wifi, Database, Lock
} from 'lucide-react'

const businessPlan = {
  companyName: "FarmLink",
  tagline: "Open Telematics for Modern Agriculture",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "John Deere, CNH, and AGCO have locked farmers into proprietary telematics ecosystems. Farmers can't access their own equipment data, lenders underwrite blind, and the right-to-repair movement is gaining momentum as equipment costs soar.",
    solution: "FarmLink is an open telematics aggregator that works across all manufacturers. Farmer-controlled data with selective sharing to insurers, lenders, and agronomists—becoming the equipment intelligence layer for agriculture.",
    market: "$150B+ agricultural equipment market with $45B precision agriculture segment growing 12% annually. Equipment finance companies need utilization data. Crop insurers need operational verification.",
    ask: "$6M Seed Round to build cross-manufacturer telematics platform, pilot with equipment dealers and ag lenders, and establish farmer data cooperative."
  },

  problem: {
    title: "The Agricultural Equipment Data Crisis",
    points: [
      {
        title: "Proprietary Lock-In",
        detail: "OEMs like John Deere lock farmers into closed ecosystems. Equipment data belongs to manufacturers, not the farmers who generate it.",
        stat: "3",
        statLabel: "major OEMs control 80% of market"
      },
      {
        title: "Right-to-Repair Battle",
        detail: "Farmers can't service their own equipment or use independent mechanics. Forced to pay dealer rates, wait for authorized service.",
        stat: "$500K+",
        statLabel: "average farm equipment investment"
      },
      {
        title: "Lenders Underwriting Blind",
        detail: "Equipment financiers have no visibility into utilization, maintenance, or condition. Residual value models are guesswork.",
        stat: "$48B",
        statLabel: "annual ag equipment financing"
      },
      {
        title: "Crop Insurance Data Gaps",
        detail: "Insurers lack operational verification for claims. No way to correlate equipment usage with crop outcomes or validate farming practices.",
        stat: "$120B",
        statLabel: "annual crop insurance premiums"
      }
    ]
  },

  solution: {
    title: "FarmLink: Open Telematics for Agriculture",
    tagline: "Your Equipment. Your Data. Your Choice.",
    pillars: [
      {
        icon: "Tractor",
        title: "Universal Connectivity",
        description: "Connect any equipment from any manufacturer. Retrofit devices for older equipment, direct API integration for newer models.",
        features: ["Multi-brand support", "Retrofit devices", "CAN bus integration", "Cellular + satellite"]
      },
      {
        icon: "Database",
        title: "Farmer Data Vault",
        description: "Secure, farmer-owned data storage. Complete operational history that follows the equipment, not locked to manufacturer.",
        features: ["Equipment history", "Maintenance logs", "GPS field mapping", "Fuel & usage analytics"]
      },
      {
        icon: "Lock",
        title: "Selective Sharing",
        description: "Farmers control who sees what. Share specific data with lenders, insurers, or agronomists while protecting competitive information.",
        features: ["Granular permissions", "Time-limited access", "Anonymization options", "Audit trails"]
      },
      {
        icon: "BarChart3",
        title: "Value-Add Intelligence",
        description: "Turn raw data into actionable insights. Predictive maintenance, fleet optimization, and benchmarking against regional peers.",
        features: ["Predictive maintenance", "Fleet analytics", "Peer benchmarking", "Agronomist integration"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "Right-to-Repair Momentum",
        detail: "Colorado, Minnesota passed right-to-repair laws. John Deere signed MOU with Farm Bureau. Regulatory momentum favors open systems.",
        icon: "TrendingUp"
      },
      {
        title: "Dealer Frustration",
        detail: "Independent dealers locked out of OEM data. Equipment dealers frustrated with manufacturer control. Looking for alternatives.",
        icon: "Wrench"
      },
      {
        title: "Precision Ag Adoption",
        detail: "Farmers investing in precision agriculture. Already have sensors, GPS, variable-rate equipment. Ready for unified data layer.",
        icon: "Zap"
      },
      {
        title: "ESG & Sustainability",
        detail: "Carbon credits, sustainable farming practices require verifiable data. Farmers need audit trails for premium markets and subsidies.",
        icon: "Shield"
      }
    ]
  },

  marketSize: {
    tam: {
      value: "$195B",
      description: "Total addressable market: Ag equipment + precision ag + equipment financing data",
      breakdown: [
        { segment: "Agricultural Equipment", value: "$150B", growth: "4.5% CAGR" },
        { segment: "Precision Agriculture", value: "$45B", growth: "12.2% CAGR" },
        { segment: "Farm Equipment Financing", value: "$48B", growth: "6% CAGR annually" }
      ]
    },
    sam: {
      value: "$8.2B",
      description: "Serviceable addressable market: Connected equipment telematics, data services, and financing intelligence",
      breakdown: [
        { segment: "Telematics Services", value: "$3.2B", growth: "Connected tractors & combines" },
        { segment: "Equipment Data Licensing", value: "$2.8B", growth: "Lenders, insurers, agronomists" },
        { segment: "Retrofit Devices", value: "$2.2B", growth: "Older equipment connectivity" }
      ]
    },
    som: {
      value: "$85M",
      description: "Year 5 revenue target: 45,000 connected machines, 2,500 farms, major lender partnerships",
      breakdown: [
        { segment: "Farmer SaaS", value: "$32M", growth: "2.5K farms @ $1,100/mo avg" },
        { segment: "Device Revenue", value: "$22M", growth: "15K retrofit devices/year" },
        { segment: "Data Licensing", value: "$18M", growth: "Lenders, insurers, ag retailers" },
        { segment: "API Access", value: "$13M", growth: "Agronomists, input suppliers" }
      ]
    }
  },

  competition: {
    overview: "OEMs dominate with proprietary systems. Precision ag platforms exist but don't solve the data ownership problem. No independent, farmer-first telematics aggregator at scale.",
    competitors: [
      {
        name: "John Deere Operations Center",
        description: "Market leader in ag telematics. Excellent technology but proprietary, Deere-only, farmer data locked in.",
        strengths: ["Deep equipment integration", "Market leadership", "R&D investment", "Dealer network"],
        weaknesses: ["Proprietary lock-in", "Data ownership issues", "Right-to-repair battles", "Premium pricing"],
        marketShare: "~35% of connected tractors"
      },
      {
        name: "Climate Corp (Bayer)",
        description: "Field-level data platform focused on agronomic decisions. Owned by agrochemical company—trust issues.",
        strengths: ["Agronomic expertise", "Satellite imagery", "Large farmer base", "Bayer resources"],
        weaknesses: ["Bayer ownership concerns", "Data use for input sales", "Not equipment-focused", "Trust deficit"],
        marketShare: "~25% of large farms"
      },
      {
        name: "Trimble Ag Software",
        description: "Farm management software with equipment connectivity. Enterprise-focused, complex implementation.",
        strengths: ["GPS expertise", "Enterprise features", "Hardware quality", "Broad portfolio"],
        weaknesses: ["Complex/expensive", "Enterprise focus", "Not farmer-first", "Limited data portability"],
        marketShare: "~15% of precision ag"
      },
      {
        name: "Independent Telematics (Raven, AgJunction)",
        description: "Smaller players with niche offerings. Acquired or struggling. Validate market need.",
        strengths: ["Specific expertise", "Independent positioning", "Farmer relationships"],
        weaknesses: ["Limited scale", "Acquisition targets", "Narrow product scope", "Underfunded"],
        marketShare: "Fragmented, <5% each"
      }
    ],
    moat: "Network effects: More connected equipment = better benchmarking data = more valuable to farmers = more lender/insurer partnerships = more equipment. First mover in farmer-owned data positioning."
  },

  businessModel: {
    overview: "Four revenue streams: Farmer SaaS subscriptions, retrofit device sales, data licensing to financial services, and API access for ecosystem partners.",
    revenueStreams: [
      {
        name: "Farmer SaaS",
        description: "Monthly subscription for equipment connectivity, data dashboard, and basic analytics",
        pricing: "$50-$200/machine/month based on features",
        margin: "82%",
        details: [
          "Multi-brand equipment dashboard",
          "Maintenance alerts & scheduling",
          "GPS tracking & field mapping",
          "Basic fleet analytics",
          "Data export & ownership"
        ]
      },
      {
        name: "Retrofit Devices",
        description: "Hardware devices to connect older equipment or manufacturers without open APIs",
        pricing: "$800-$2,500/device + installation",
        margin: "45%",
        details: [
          "Universal CAN bus adapter",
          "Cellular/satellite connectivity",
          "GPS/location tracking",
          "Sensor integration",
          "Plug-and-play installation"
        ]
      },
      {
        name: "Data Licensing",
        description: "Aggregated, anonymized data for equipment financiers, crop insurers, and manufacturers",
        pricing: "$100K-$500K annual contracts",
        margin: "92%",
        details: [
          "Equipment residual value models",
          "Utilization benchmarking",
          "Maintenance pattern analysis",
          "Risk scoring inputs",
          "Market intelligence reports"
        ]
      },
      {
        name: "API Access",
        description: "Developer API for agronomists, input suppliers, and ag retailers to access farmer-authorized data",
        pricing: "$0.10-$0.50/API call + base subscription",
        margin: "88%",
        details: [
          "Real-time equipment data",
          "Field operation history",
          "Prescription integration",
          "Inventory management",
          "Custom analytics"
        ]
      }
    ],
    unitEconomics: {
      ltv: "$18,000",
      cac: "$1,200",
      ltvCacRatio: "15:1",
      paybackPeriod: "6 months",
      grossMargin: "74%",
      details: [
        "Average farm lifetime: 5+ years",
        "Farm ARPU grows with fleet size",
        "CAC: $600 digital + $600 dealer/channel",
        "Device attachment drives immediate revenue",
        "Data licensing provides high-margin expansion"
      ]
    }
  },

  financials: {
    scenarios: {
      withFinancing: {
        name: "With Ag Lender & Insurance Partnerships",
        description: "Partner with equipment financiers and crop insurers for distribution and data licensing",
        projections: [
          { year: "Y1", revenue: "$3.2M", customers: "400 farms, 8K machines", highlights: "Platform launch, 3 lender pilots" },
          { year: "Y2", revenue: "$14M", customers: "1,100 farms, 22K machines", highlights: "Insurance partnerships, retrofit scale" },
          { year: "Y3", revenue: "$38M", customers: "1,900 farms, 38K machines", highlights: "Data licensing traction" },
          { year: "Y4", revenue: "$68M", customers: "2,800 farms, 52K machines", highlights: "API ecosystem launch" },
          { year: "Y5", revenue: "$112M", customers: "4,000 farms, 75K machines", highlights: "Market leader, strategic interest" }
        ],
        keyAssumptions: [
          "Equipment lenders drive 40% of new farm signups",
          "Crop insurers offer premium discounts for connected farms",
          "Data licensing accelerates Year 3+",
          "Retrofit devices enable older equipment market"
        ]
      },
      withoutFinancing: {
        name: "Without Financial Services Partners",
        description: "Direct farmer sales through dealers and farm cooperatives",
        projections: [
          { year: "Y1", revenue: "$1.8M", customers: "200 farms, 4K machines", highlights: "Platform launch, dealer pilots" },
          { year: "Y2", revenue: "$7M", customers: "600 farms, 12K machines", highlights: "Regional expansion" },
          { year: "Y3", revenue: "$18M", customers: "1,200 farms, 24K machines", highlights: "Cooperative partnerships" },
          { year: "Y4", revenue: "$35M", customers: "2,000 farms, 40K machines", highlights: "Organic data licensing" },
          { year: "Y5", revenue: "$58M", customers: "3,000 farms, 55K machines", highlights: "Sustainable growth" }
        ],
        keyAssumptions: [
          "Direct sales to progressive farms",
          "Equipment dealer channel partnerships",
          "Slower but higher-quality farm relationships",
          "Data licensing develops organically from install base"
        ]
      }
    },
    useOfFunds: [
      { category: "Engineering & Product", percentage: 45, amount: "$2.7M", details: "Platform, device firmware, API development" },
      { category: "Sales & Partnerships", percentage: 25, amount: "$1.5M", details: "Farmer sales, dealer relationships, lender partnerships" },
      { category: "Hardware & Manufacturing", percentage: 15, amount: "$900K", details: "Retrofit device development, initial inventory" },
      { category: "Marketing & Community", percentage: 10, amount: "$600K", details: "Farm shows, content, cooperative relationships" },
      { category: "Operations & Legal", percentage: 5, amount: "$300K", details: "IP protection, compliance, G&A" }
    ]
  },

  risks: [
    {
      risk: "OEM Retaliation",
      severity: "High",
      mitigation: "Position as complementary to OEM systems. Support their APIs when available. Right-to-repair legal momentum provides cover. Build farmer coalition first."
    },
    {
      risk: "Hardware Complexity",
      severity: "High",
      mitigation: "Partner with proven telematics hardware manufacturers. Start with software-first for newer equipment. Retrofit is Phase 2 after proving value."
    },
    {
      risk: "Farmer Adoption",
      severity: "Medium",
      mitigation: "Start with large progressive farms already using precision ag. Partner with trusted dealers and cooperatives. Prove ROI in first season."
    },
    {
      risk: "Data Privacy Concerns",
      severity: "Medium",
      mitigation: "Farmer-first data ownership is core value prop. Transparent sharing controls. Never sell individual farm data without explicit consent."
    },
    {
      risk: "Seasonal Revenue",
      severity: "Medium",
      mitigation: "Annual contracts smooth seasonality. Data licensing is year-round. Focus on livestock operations for diversification (no growing season)."
    },
    {
      risk: "Competition from Climate/Bayer",
      severity: "Low",
      mitigation: "Trust deficit with agrochemical ownership. We're equipment-focused, not input sales. Position as neutral, farmer-owned alternative."
    }
  ],

  milestones: [
    { quarter: "Q1 2026", milestone: "Close seed round, hire core engineering team", status: "target" },
    { quarter: "Q2 2026", milestone: "Launch platform with 100 farms, 2,000 machines", status: "target" },
    { quarter: "Q3 2026", milestone: "First equipment lender pilot (5,000+ financed machines)", status: "target" },
    { quarter: "Q4 2026", milestone: "Retrofit device launch, 400 farms connected", status: "target" },
    { quarter: "Q1 2027", milestone: "Crop insurance partnership announcement", status: "target" },
    { quarter: "Q2 2027", milestone: "1,000 farms, 20,000 machines connected", status: "target" },
    { quarter: "Q3 2027", milestone: "Data licensing first $1M in contracts", status: "target" },
    { quarter: "Q4 2027", milestone: "Series A at $80-100M valuation", status: "target" }
  ],

  team: {
    hiring: [
      { role: "CTO", priority: "Critical", timeline: "Immediate", description: "Embedded systems, telematics, agricultural technology" },
      { role: "VP Engineering", priority: "Critical", timeline: "Q1 2026", description: "Platform architecture, API design, data infrastructure" },
      { role: "VP Sales", priority: "High", timeline: "Q2 2026", description: "Agricultural industry relationships, dealer channels" },
      { role: "Head of Partnerships", priority: "High", timeline: "Q2 2026", description: "Equipment lenders, crop insurers, ag retailers" },
      { role: "Hardware Lead", priority: "High", timeline: "Q3 2026", description: "Retrofit device development, manufacturing partnerships" }
    ]
  },

  ask: {
    amount: "$6M",
    round: "Seed",
    timeline: "Q1 2026",
    terms: "Priced round, standard seed terms",
    use: "Build cross-manufacturer telematics platform, develop retrofit devices, pilot with equipment lenders, and establish farmer data cooperative",
    targetInvestors: [
      "Ag-tech specialists",
      "Industrial IoT investors",
      "Fintech / equipment finance focus",
      "Strategic angels from agriculture industry",
      "Impact investors (farmer empowerment)"
    ]
  },

  sources: [
    { name: "USDA Economic Research Service", url: "https://www.ers.usda.gov/topics/farm-economy/farm-sector-income-finances/" },
    { name: "Precision Agriculture Market Research", url: "https://www.marketsandmarkets.com/Market-Reports/precision-farming-market-1243.html" },
    { name: "Equipment Dealers Association", url: "https://www.equipmentdealers.org" },
    { name: "Farm Bureau Right-to-Repair MOU", url: "https://www.fb.org/newsroom/american-farm-bureau-federation-john-deere-sign-agreement" }
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
      <Icon className="w-6 h-6 text-green-500 mx-auto mb-2" />
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
              <a href="/capex-8" className="text-gray-400 hover:text-white transition-colors mt-1">
                <ArrowLeft className="w-5 h-5" />
              </a>
              <div>
                <h1 className="text-2xl font-bold text-green-500">{businessPlan.companyName}</h1>
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
                    ? 'text-green-500 border-b-2 border-green-500'
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
            <section className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-xl p-8 border border-green-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="text-green-500" />
                Executive Summary
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-green-500 font-semibold mb-2">The Problem</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.problem}</p>
                </div>
                <div>
                  <h3 className="text-green-500 font-semibold mb-2">Our Solution</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.solution}</p>
                </div>
                <div>
                  <h3 className="text-green-500 font-semibold mb-2">Market Opportunity</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.market}</p>
                </div>
                <div>
                  <h3 className="text-green-500 font-semibold mb-2">The Ask</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.ask}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard value="$195B" label="TAM" icon={Globe} />
                <StatCard value="2M+" label="US Farm Tractors" icon={Tractor} />
                <StatCard value="15:1" label="LTV:CAC Ratio" icon={TrendingUp} />
                <StatCard value="$6M" label="Seed Ask" icon={DollarSign} />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <AlertTriangle className="text-green-500" />
                {businessPlan.problem.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.problem.points.map((point, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-white">{point.title}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-500">{point.stat}</div>
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
                <Lightbulb className="text-green-500" />
                {businessPlan.solution.title}
              </h2>
              <p className="text-gray-400 mb-6">{businessPlan.solution.tagline}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {businessPlan.solution.pillars.map((pillar, i) => {
                  const IconComponent = pillar.icon === 'Tractor' ? Tractor :
                    pillar.icon === 'Database' ? Database :
                    pillar.icon === 'Lock' ? Lock :
                    pillar.icon === 'BarChart3' ? BarChart3 : Wifi
                  return (
                    <div key={i} className="bg-gray-800 rounded-lg p-5">
                      <IconComponent className="w-8 h-8 text-green-500 mb-3" />
                      <h3 className="font-semibold text-white mb-2">{pillar.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{pillar.description}</p>
                      <ul className="space-y-1">
                        {pillar.features.map((feature, j) => (
                          <li key={j} className="text-xs text-gray-500 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </section>

            <section className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-8 border border-green-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="text-green-500" />
                The Ask
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500">{businessPlan.ask.amount}</div>
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
            <ExpandableSection title={<div className="flex items-center gap-2"><Clock className="text-green-500" /> Why Now?</div>} defaultOpen={true}>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => {
                  const IconComponent = factor.icon === 'TrendingUp' ? TrendingUp : factor.icon === 'Wrench' ? Wrench : factor.icon === 'Zap' ? Zap : Shield
                  return (
                    <div key={i} className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5 text-green-500" />
                        <h3 className="font-semibold text-white">{factor.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{factor.detail}</p>
                    </div>
                  )
                })}
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><PieChart className="text-green-500" /> Market Size</div>}>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { key: 'tam', label: 'TAM', data: businessPlan.marketSize.tam },
                  { key: 'sam', label: 'SAM', data: businessPlan.marketSize.sam },
                  { key: 'som', label: 'SOM (Y5)', data: businessPlan.marketSize.som }
                ].map(({ key, label, data }) => (
                  <div key={key} className="bg-gray-800 rounded-lg p-5">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-green-500">{data.value}</div>
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

            <ExpandableSection title={<div className="flex items-center gap-2"><Users className="text-green-500" /> Competitive Landscape</div>}>
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
              <div className="bg-green-900/30 rounded-lg p-4 border border-green-800">
                <h3 className="font-semibold text-green-500 mb-2">Our Moat</h3>
                <p className="text-gray-300">{businessPlan.competition.moat}</p>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Briefcase className="text-green-500" /> Business Model</div>}>
              <p className="text-gray-400 mb-4">{businessPlan.businessModel.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {businessPlan.businessModel.revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{stream.name}</h3>
                      <span className="text-green-500 font-medium">{stream.pricing}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{stream.description}</p>
                    <div className="text-xs text-gray-500 mb-2">Gross Margin: {stream.margin}</div>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {stream.details.map((d, j) => (<li key={j} className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500" />{d}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-4">Unit Economics</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                  <div className="text-center"><div className="text-2xl font-bold text-green-500">{businessPlan.businessModel.unitEconomics.ltv}</div><div className="text-xs text-gray-400">LTV</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-green-500">{businessPlan.businessModel.unitEconomics.cac}</div><div className="text-xs text-gray-400">CAC</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-green-500">{businessPlan.businessModel.unitEconomics.ltvCacRatio}</div><div className="text-xs text-gray-400">LTV:CAC</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-green-500">{businessPlan.businessModel.unitEconomics.paybackPeriod}</div><div className="text-xs text-gray-400">Payback</div></div>
                  <div className="text-center"><div className="text-2xl font-bold text-green-500">{businessPlan.businessModel.unitEconomics.grossMargin}</div><div className="text-xs text-gray-400">Gross Margin</div></div>
                </div>
                <ul className="text-sm text-gray-400 space-y-1">{businessPlan.businessModel.unitEconomics.details.map((d, i) => <li key={i}>• {d}</li>)}</ul>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Shield className="text-green-500" /> Risks & Mitigations</div>}>
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

            <ExpandableSection title={<div className="flex items-center gap-2"><Award className="text-green-500" /> Milestones & Timeline</div>}>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />
                <div className="space-y-4">
                  {businessPlan.milestones.map((m, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-green-500" />
                      <div className="bg-gray-800 rounded-lg p-4">
                        <span className="text-green-500 font-medium">{m.quarter}</span>
                        <p className="text-gray-300">{m.milestone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ExpandableSection>

            <ExpandableSection title={<div className="flex items-center gap-2"><Users className="text-green-500" /> Team & Hiring</div>}>
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
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><LineChart className="text-green-500" />Financial Projections</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-xl p-6 border-2 border-green-600">
                  <div className="flex items-center gap-2 mb-2"><Zap className="text-green-500" /><h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withFinancing.name}</h3></div>
                  <p className="text-gray-400 text-sm mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>
                  <table className="w-full text-sm mb-4">
                    <thead><tr className="border-b border-gray-700"><th className="text-left py-2 text-gray-400">Year</th><th className="text-right py-2 text-gray-400">Revenue</th><th className="text-right py-2 text-gray-400">Connected</th></tr></thead>
                    <tbody>{businessPlan.financials.scenarios.withFinancing.projections.map((proj, i) => (<tr key={i} className="border-b border-gray-700/50"><td className="py-2 text-white">{proj.year}</td><td className="py-2 text-right text-green-500 font-medium">{proj.revenue}</td><td className="py-2 text-right text-gray-300">{proj.customers}</td></tr>))}</tbody>
                  </table>
                  <div className="text-xs text-gray-400"><div className="font-medium mb-1">Key Assumptions:</div><ul className="space-y-1">{businessPlan.financials.scenarios.withFinancing.keyAssumptions.map((a, i) => <li key={i}>• {a}</li>)}</ul></div>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2"><Building2 className="text-gray-400" /><h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withoutFinancing.name}</h3></div>
                  <p className="text-gray-400 text-sm mb-4">{businessPlan.financials.scenarios.withoutFinancing.description}</p>
                  <table className="w-full text-sm mb-4">
                    <thead><tr className="border-b border-gray-700"><th className="text-left py-2 text-gray-400">Year</th><th className="text-right py-2 text-gray-400">Revenue</th><th className="text-right py-2 text-gray-400">Connected</th></tr></thead>
                    <tbody>{businessPlan.financials.scenarios.withoutFinancing.projections.map((proj, i) => (<tr key={i} className="border-b border-gray-700/50"><td className="py-2 text-white">{proj.year}</td><td className="py-2 text-right text-green-500 font-medium">{proj.revenue}</td><td className="py-2 text-right text-gray-300">{proj.customers}</td></tr>))}</tbody>
                  </table>
                  <div className="text-xs text-gray-400"><div className="font-medium mb-1">Key Assumptions:</div><ul className="space-y-1">{businessPlan.financials.scenarios.withoutFinancing.keyAssumptions.map((a, i) => <li key={i}>• {a}</li>)}</ul></div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><PieChart className="text-green-500" />Use of Funds</h2>
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (<div key={i} className="text-center"><div className="text-2xl font-bold text-green-500">{fund.percentage}%</div><div className="text-sm font-medium text-white">{fund.category}</div><div className="text-xs text-gray-400">{fund.amount}</div></div>))}
                </div>
                <div className="space-y-3">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (<div key={i} className="flex items-center gap-4"><div className="w-32 text-sm text-gray-400">{fund.category}</div><div className="flex-1 bg-gray-700 rounded-full h-4"><div className="bg-green-500 h-4 rounded-full" style={{ width: `${fund.percentage}%` }} /></div><div className="w-24 text-sm text-right text-white">{fund.amount}</div></div>))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><FileText className="text-green-500" />Sources</h2>
              <div className="bg-gray-800 rounded-lg p-4">
                <ul className="space-y-2">{businessPlan.sources.map((source, i) => (<li key={i}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 flex items-center gap-2"><ExternalLink className="w-4 h-4" />{source.name}</a></li>))}</ul>
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          <p>{businessPlan.companyName} Business Plan • {businessPlan.version} • {businessPlan.date}</p>
          <p className="mt-2">Part of the <a href="/tokens/#framework" className="text-green-500 hover:text-green-400">Ribbit Token Cap-Ex Framework</a></p>
        </div>
      </footer>
    </div>
  )
}
