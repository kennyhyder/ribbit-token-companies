'use client'

import { useState } from 'react'
import {
  ArrowLeft, Target, TrendingUp, DollarSign, Users, Shield, AlertTriangle,
  CheckCircle, ExternalLink, ChevronDown, ChevronUp, Building2, Zap, BarChart3,
  Clock, Wrench, FileText, Briefcase, Lightbulb, Globe, Award, PieChart, LineChart, Plug
} from 'lucide-react'

const businessPlan = {
  companyName: "ChargeScore",
  tagline: "The TripAdvisor for EV Charging",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "EV charging reliability is terrible—16% of charging attempts fail. ChargePoint, Electrify America, and EVgo score 59-66 on reliability. Drivers have 'charger anxiety' and no trustworthy data.",
    solution: "ChargeScore aggregates real-time charger status, reliability scores, and wait times to become the trusted source of truth that drivers, automakers, and utilities need.",
    market: "$31.1B global EV charging market (2025) growing at 20.3% CAGR to $113.4B by 2032. U.S. market growing at 30.3% CAGR.",
    ask: "$5M Seed Round to build crowdsourced data platform, secure OEM integrations, and capture first-mover advantage in charging intelligence."
  },

  problem: {
    title: "The Charger Anxiety Crisis",
    points: [
      {
        title: "Reliability Disaster",
        detail: "Only 84% of charging attempts succeed. 16% failure rate means EV drivers can't trust public infrastructure.",
        stat: "16%",
        statLabel: "of charging attempts fail"
      },
      {
        title: "Network Fragmentation",
        detail: "ChargePoint, Electrify America, EVgo all scoring 59-66 on reliability. Fragmented apps, no unified view.",
        stat: "59-66",
        statLabel: "reliability scores for major networks"
      },
      {
        title: "No Real-Time Data",
        detail: "Networks don't share reliability data. Drivers arrive to find broken chargers. 30%+ of chargers non-functional at any time.",
        stat: "30%+",
        statLabel: "chargers broken at any time"
      },
      {
        title: "Federal Money at Stake",
        detail: "$7.5B federal infrastructure funding flowing to EV charging. No accountability for where it goes or if chargers work.",
        stat: "$7.5B",
        statLabel: "federal EV infrastructure funding"
      }
    ]
  },

  solution: {
    title: "ChargeScore: Trust for EV Charging",
    tagline: "Crowdsource. Score. Route. Trust.",
    pillars: [
      {
        icon: "Globe",
        title: "Real-Time Status",
        description: "Crowdsourced charger status from millions of EV drivers plus direct network integrations where available.",
        features: ["Live availability", "Crowdsourced reports", "Network APIs", "Photo verification"]
      },
      {
        icon: "BarChart3",
        title: "Reliability Scoring",
        description: "Comprehensive reliability scores for every charger, station, and network based on actual success rates.",
        features: ["Success rate tracking", "Historical trends", "Network rankings", "Station grades"]
      },
      {
        icon: "Zap",
        title: "Smart Routing",
        description: "Route planning that factors in reliability, not just distance. Never get stranded at a broken charger.",
        features: ["Reliability-weighted routing", "Backup options", "Wait time estimates", "Speed verification"]
      },
      {
        icon: "TrendingUp",
        title: "Infrastructure Intelligence",
        description: "Data for utilities, DOE, and policymakers on where charging works and where it fails.",
        features: ["Coverage gap analysis", "Reliability heat maps", "Investment ROI tracking", "Policy insights"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "EV Adoption Accelerating",
        detail: "EV sales growing 25%+ annually. Charging infrastructure can't keep up. Problem getting worse, not better.",
        icon: "TrendingUp"
      },
      {
        title: "Reliability Improving",
        detail: "Q1 2025 saw 1.4 point improvement in reliability index. Networks finally investing in uptime. Data more valuable than ever.",
        icon: "Zap"
      },
      {
        title: "Federal Funding Flowing",
        detail: "$7.5B NEVI program requires reliability tracking. DOE needs independent data on where money is working.",
        icon: "DollarSign"
      },
      {
        title: "OEM Frustration",
        detail: "Automakers frustrated with third-party network quality. Want to control charging experience. Need data partners.",
        icon: "Building2"
      },
      {
        title: "Tesla Opening Up",
        detail: "Tesla Supercharger network opening to other EVs. Creates need for cross-network intelligence.",
        icon: "Plug"
      }
    ]
  },

  marketSize: {
    title: "Market Opportunity",
    tam: {
      value: "$113.4B",
      label: "Total Addressable Market",
      description: "Global EV Charging Market by 2032",
      source: "DataM Intelligence"
    },
    sam: {
      value: "$31.1B",
      label: "Serviceable Addressable Market",
      description: "Global EV Charging Market 2025",
      source: "DataM Intelligence"
    },
    som: {
      value: "$250M",
      label: "Serviceable Obtainable Market",
      description: "Data/intelligence layer (0.8% of market)",
      source: "Conservative estimate"
    },
    additionalMarkets: [
      { name: "U.S. EV Charging", value: "$5.09B (2024)", cagr: "30.3%" },
      { name: "DC Fast Charging US", value: "68K stalls (2025)", cagr: "33%" },
      { name: "Public Charging Points", value: "200K+ (2024)", cagr: "20%" }
    ],
    keyMetrics: [
      { label: "Average DC fast charge", value: "$15-$30" },
      { label: "Chargers per EV needed", value: "1:20 ratio" },
      { label: "Utilization rate", value: "8-15%" },
      { label: "Driver willingness to pay for reliability", value: "20%+ premium" }
    ]
  },

  competition: {
    title: "Competitive Landscape",
    players: [
      {
        name: "PlugShare",
        type: "Incumbent App",
        marketShare: "Largest community",
        strengths: ["Large user base", "First mover", "Community content", "Brand recognition"],
        weaknesses: ["Ad-supported model", "Limited real-time data", "No reliability focus", "Outdated UX"],
        threat: "Medium - can be disrupted"
      },
      {
        name: "ChargePoint",
        type: "Network Operator",
        marketShare: "~5K DC stalls",
        strengths: ["Largest US network", "Hardware control", "Enterprise focus"],
        weaknesses: ["59% reliability score", "Won't share bad data", "Conflict of interest"],
        threat: "Low - they're the problem"
      },
      {
        name: "Electrify America",
        type: "Network Operator",
        marketShare: "~5K DC stalls",
        strengths: ["VW backing", "Highway focus", "350kW capability"],
        weaknesses: ["66% reliability score", "Software issues", "Won't share reliability"],
        threat: "Low - they're the problem"
      },
      {
        name: "A Better Route Planner",
        type: "Route Planning",
        marketShare: "Enthusiast niche",
        strengths: ["Technical depth", "EV enthusiast loyalty", "Good routing"],
        weaknesses: ["Complex UX", "Limited reliability data", "Small team"],
        threat: "Low - different focus"
      }
    ],
    ourAdvantage: {
      title: "ChargeScore's Unfair Advantages",
      points: [
        "Reliability-first positioning captures driver trust",
        "Crowdsourced data creates accuracy networks can't match",
        "OEM partnerships for in-dash integration",
        "Utility/DOE channel for infrastructure intelligence",
        "Network-agnostic enables honest reliability scoring"
      ]
    }
  },

  businessModel: {
    title: "Business Model",
    revenueStreams: [
      {
        name: "OEM Licensing",
        description: "In-dash integration of charging intelligence for automakers",
        pricing: "$2-$5 per vehicle per year or $50M+ enterprise deals",
        margin: "85%+",
        year1Revenue: "$500K",
        year3Revenue: "$10M"
      },
      {
        name: "Premium Consumer",
        description: "Ad-free app with advanced routing, reliability alerts, and trip planning",
        pricing: "$4.99/month or $39.99/year",
        margin: "90%+",
        year1Revenue: "$300K",
        year3Revenue: "$5M"
      },
      {
        name: "Infrastructure Intelligence",
        description: "Data products for utilities, DOE, and charging network operators",
        pricing: "$50K-$500K annual contracts",
        margin: "80%+",
        year1Revenue: "$400K",
        year3Revenue: "$8M"
      },
      {
        name: "Advertising & Partnerships",
        description: "Sponsored placements for charging networks, hotels, retail locations",
        pricing: "CPM/CPC or partnership deals",
        margin: "70%",
        year1Revenue: "$200K",
        year3Revenue: "$3M"
      }
    ],
    unitEconomics: {
      title: "Unit Economics Per User",
      metrics: [
        { label: "Customer Acquisition Cost (CAC)", value: "$3", note: "Viral + organic growth" },
        { label: "Average Revenue Per User (ARPU)", value: "$8/year", note: "Blended free + premium" },
        { label: "Gross Margin", value: "85%", note: "Pure software" },
        { label: "Lifetime Value (LTV)", value: "$35", note: "4+ year EV ownership" },
        { label: "LTV:CAC Ratio", value: "12:1", note: "Strong consumer economics" },
        { label: "Payback Period", value: "5 months", note: "Fast payback" }
      ]
    }
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withEquipmentFinancing: {
        name: "Full Model with OEM Deals (Recommended)",
        description: "Consumer app + OEM licensing + infrastructure intelligence",
        years: [
          { year: 1, revenue: "$1.4M", shops: 500000, arr: "$1.4M", burn: "$3.6M", runway: "16 months" },
          { year: 2, revenue: "$6M", shops: 2000000, arr: "$6M", burn: "$1.5M", runway: "Profitable" },
          { year: 3, revenue: "$26M", shops: 5000000, arr: "$26M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$55M", shops: 10000000, arr: "$55M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$100M", shops: 18000000, arr: "$100M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$5M Seed",
        keyAssumptions: [
          "500K users Year 1, growing to 18M by Year 5",
          "First OEM deal by end of Year 1",
          "3 utility/DOE contracts by Year 2",
          "5% premium conversion rate",
          "85% gross margin at scale"
        ]
      },
      withoutEquipmentFinancing: {
        name: "Consumer-Only Model (Conservative)",
        description: "Focus on consumer app, no enterprise deals",
        years: [
          { year: 1, revenue: "$500K", shops: 300000, arr: "$500K", burn: "$2M", runway: "30 months" },
          { year: 2, revenue: "$2M", shops: 1000000, arr: "$2M", burn: "$1M", runway: "24 months" },
          { year: 3, revenue: "$6M", shops: 2500000, arr: "$6M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$12M", shops: 5000000, arr: "$12M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$25M", shops: 10000000, arr: "$25M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$2.5M Seed",
        keyAssumptions: [
          "Slower user growth without OEM distribution",
          "Higher CAC without in-dash integration",
          "Pure ad + premium model",
          "No enterprise revenue stream"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $5M Seed Funds",
      breakdown: [
        { category: "Engineering & Product", amount: "$2.0M", percentage: 40, detail: "App, data infrastructure, ML" },
        { category: "Growth & Marketing", amount: "$1.25M", percentage: 25, detail: "User acquisition, community" },
        { category: "Business Development", amount: "$1.0M", percentage: 20, detail: "OEM partnerships, enterprise sales" },
        { category: "Data & Operations", amount: "$500K", percentage: 10, detail: "Data quality, moderation, support" },
        { category: "G&A & Buffer", amount: "$250K", percentage: 5, detail: "Legal, accounting, contingency" }
      ]
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "Charging Networks Block Data",
        severity: "Medium",
        likelihood: "Medium",
        description: "Networks could restrict API access or block crowdsourcing",
        mitigation: "Crowdsourced data doesn't require network cooperation. Focus on driver-reported data. Networks have incentive to show reliability improvements."
      },
      {
        risk: "PlugShare Responds",
        severity: "Medium",
        likelihood: "High",
        description: "PlugShare could add reliability features and defend market position",
        mitigation: "Move fast, establish reliability-first brand. PlugShare's ad model conflicts with honest scoring. OEM deals create distribution moat."
      },
      {
        risk: "OEM Deals Take Longer",
        severity: "Medium",
        likelihood: "Medium",
        description: "Automaker partnerships have long sales cycles",
        mitigation: "Build consumer base first for leverage. Start with EV-only brands (Rivian, Lucid). Consumer revenue provides runway."
      },
      {
        risk: "Charging Reliability Improves",
        severity: "Low",
        likelihood: "Medium",
        description: "Networks fix reliability, reducing need for our service",
        mitigation: "Even at 95%+ reliability, drivers want confirmation. Expand to wait times, pricing, amenities. Intelligence value remains."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Month 3", milestone: "App launched, 50K users, reliability scoring live", status: "planned" },
      { timeline: "Month 6", milestone: "500K users, first utility pilot, OEM conversations active", status: "planned" },
      { timeline: "Month 9", milestone: "1M users, first OEM LOI signed", status: "planned" },
      { timeline: "Month 12", milestone: "$1.4M ARR, 2M users, first OEM deal closed", status: "planned" },
      { timeline: "Month 18", milestone: "5M users, 3 OEM deals, $4M ARR, Series A ready", status: "planned" },
      { timeline: "Month 24", milestone: "$6M ARR, 8M users, in-dash integration live", status: "planned" }
    ]
  },

  ask: {
    title: "The Ask",
    amount: "$5,000,000",
    round: "Seed Round",
    terms: "SAFE or Priced Round at $20M post-money valuation",
    useOfFunds: [
      "Build world-class mobile app and data platform",
      "Acquire first 500K users through viral growth",
      "Secure first OEM partnership",
      "Launch infrastructure intelligence product for utilities"
    ],
    timeline: "18-month runway to Series A milestones",
    seriesA: {
      timing: "Month 15-18",
      metrics: "5M users, $4M ARR, 2+ OEM deals",
      raise: "$20-30M at $100-150M valuation"
    }
  },

  sources: [
    { name: "EV Charging Infrastructure Market", url: "https://www.datamintelligence.com/research-report/ev-charging-infrastructure-market", detail: "$31.1B (2025) to $113.4B (2032), 20.3% CAGR" },
    { name: "U.S. EV Charging Market", url: "https://www.grandviewresearch.com/industry-analysis/us-electric-vehicle-charging-infrastructure-evci-market", detail: "$5.09B (2024), 30.3% CAGR" },
    { name: "Vecharged Reliability Report 2025", url: "https://vecharged.com/news/ev-charger-reliability-report-2025/", detail: "Network reliability scores 59-66" },
    { name: "Paren Q2 2025 Report", url: "https://www.paren.app/reports/state-of-the-industry-report-us-ev-fast-charging-q2-2025", detail: "84% success rate, 16% failures" },
    { name: "DC Fast Charging Networks Jan 2026", url: "https://evchargingstations.com/chargingnews/largest-dc-fast-charging-networks-jan-2026/", detail: "68K stalls, 33% growth" }
  ]
}

function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {subtitle && <p className="text-gray-600 ml-13">{subtitle}</p>}
    </div>
  )
}

function ExpandableSection({ title, children, defaultOpen = false }: { title: React.ReactNode; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
        <div className="font-medium text-gray-900">{title}</div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {isOpen && <div className="p-4 border-t border-gray-200">{children}</div>}
    </div>
  )
}

export default function BusinessPlanPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'detailed' | 'financials'>('overview')

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <a href="/tokens/#framework" className="inline-flex items-center gap-2 text-green-100 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />Back to Cap-Ex Opportunities
          </a>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center"><Plug className="w-6 h-6" /></div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{businessPlan.companyName}</h1>
                  <p className="text-green-100">{businessPlan.tagline}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-green-200">{businessPlan.version}</div>
              <div className="text-sm text-green-200">{businessPlan.date}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3"><div className="text-2xl font-bold">{businessPlan.ask.amount}</div><div className="text-sm text-green-100">Seed Round</div></div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3"><div className="text-2xl font-bold">{businessPlan.marketSize.sam.value}</div><div className="text-sm text-green-100">Global Market</div></div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3"><div className="text-2xl font-bold">20.3%</div><div className="text-sm text-green-100">Market CAGR</div></div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3"><div className="text-2xl font-bold">12:1</div><div className="text-sm text-green-100">LTV:CAC</div></div>
          </div>
        </div>
      </header>

      <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 py-3">
            {(['overview', 'detailed', 'financials'] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === tab ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                {tab === 'overview' ? <><FileText className="w-4 h-4 inline mr-2" />Executive Summary</> : tab === 'detailed' ? <><Briefcase className="w-4 h-4 inline mr-2" />Full Plan</> : <><LineChart className="w-4 h-4 inline mr-2" />Financials</>}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={FileText} title="Executive Summary" />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400"><h4 className="font-semibold text-red-800 mb-2">The Problem</h4><p className="text-sm text-gray-700">{businessPlan.executiveSummary.problem}</p></div>
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400"><h4 className="font-semibold text-green-800 mb-2">Our Solution</h4><p className="text-sm text-gray-700">{businessPlan.executiveSummary.solution}</p></div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400"><h4 className="font-semibold text-blue-800 mb-2">Market Opportunity</h4><p className="text-sm text-gray-700">{businessPlan.executiveSummary.market}</p></div>
                  <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400"><h4 className="font-semibold text-purple-800 mb-2">The Ask</h4><p className="text-sm text-gray-700">{businessPlan.executiveSummary.ask}</p></div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={AlertTriangle} title={businessPlan.problem.title} />
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.problem.points.map((point, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="text-center"><div className="text-2xl font-bold text-red-600">{point.stat}</div><div className="text-xs text-gray-500">{point.statLabel}</div></div>
                      <div><h4 className="font-semibold text-gray-900">{point.title}</h4><p className="text-sm text-gray-600 mt-1">{point.detail}</p></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Lightbulb} title={businessPlan.solution.title} subtitle={businessPlan.solution.tagline} />
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.solution.pillars.map((pillar, i) => (
                  <div key={i} className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{pillar.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1">{pillar.features.map((feature, j) => (<span key={j} className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs">{feature}</span>))}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={PieChart} title={businessPlan.marketSize.title} />
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-lg text-center"><div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div><div className="font-medium">{businessPlan.marketSize.tam.label}</div><div className="text-sm text-green-100 mt-1">{businessPlan.marketSize.tam.description}</div></div>
                <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-lg text-center"><div className="text-3xl font-bold">{businessPlan.marketSize.sam.value}</div><div className="font-medium">{businessPlan.marketSize.sam.label}</div><div className="text-sm text-blue-100 mt-1">{businessPlan.marketSize.sam.description}</div></div>
                <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg text-center"><div className="text-3xl font-bold">{businessPlan.marketSize.som.value}</div><div className="font-medium">{businessPlan.marketSize.som.label}</div><div className="text-sm text-purple-100 mt-1">{businessPlan.marketSize.som.description}</div></div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">{businessPlan.ask.title}</h2>
                <div className="text-5xl font-bold mb-2">{businessPlan.ask.amount}</div>
                <div className="text-xl text-green-100">{businessPlan.ask.round}</div>
                <div className="text-green-200 mt-2">{businessPlan.ask.terms}</div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Use of Funds</h4>
                  <ul className="space-y-2">{businessPlan.ask.useOfFunds.map((use, i) => (<li key={i} className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /><span>{use}</span></li>))}</ul>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Series A Target</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-green-200">Timing:</span> {businessPlan.ask.seriesA.timing}</p>
                    <p><span className="text-green-200">Metrics:</span> {businessPlan.ask.seriesA.metrics}</p>
                    <p><span className="text-green-200">Raise:</span> {businessPlan.ask.seriesA.raise}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'detailed' && (
          <div className="space-y-8">
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Users} title={businessPlan.competition.title} />
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead><tr className="border-b border-gray-200"><th className="text-left py-3 px-2">Competitor</th><th className="text-left py-3 px-2">Position</th><th className="text-left py-3 px-2">Strengths</th><th className="text-left py-3 px-2">Weaknesses</th></tr></thead>
                  <tbody>
                    {businessPlan.competition.players.map((player, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-3 px-2"><div className="font-medium text-gray-900">{player.name}</div><div className="text-xs text-gray-500">{player.type}</div></td>
                        <td className="py-3 px-2 text-sm">{player.marketShare}</td>
                        <td className="py-3 px-2"><ul className="text-xs text-gray-600 space-y-1">{player.strengths.slice(0, 2).map((s, j) => <li key={j}>+ {s}</li>)}</ul></td>
                        <td className="py-3 px-2"><ul className="text-xs text-gray-600 space-y-1">{player.weaknesses.slice(0, 2).map((w, j) => <li key={j}>- {w}</li>)}</ul></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">{businessPlan.competition.ourAdvantage.title}</h4>
                <ul className="grid md:grid-cols-2 gap-2">{businessPlan.competition.ourAdvantage.points.map((point, i) => (<li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />{point}</li>))}</ul>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={DollarSign} title={businessPlan.businessModel.title} />
              <div className="grid gap-4 mb-6">
                {businessPlan.businessModel.revenueStreams.map((stream, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2"><div><h4 className="font-semibold text-gray-900">{stream.name}</h4><p className="text-sm text-gray-600">{stream.description}</p></div><span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">{stream.margin} margin</span></div>
                    <div className="grid grid-cols-3 gap-4 mt-3 text-sm"><div><span className="text-gray-500">Pricing:</span><span className="ml-2 font-medium">{stream.pricing}</span></div><div><span className="text-gray-500">Year 1:</span><span className="ml-2 font-medium">{stream.year1Revenue}</span></div><div><span className="text-gray-500">Year 3:</span><span className="ml-2 font-medium">{stream.year3Revenue}</span></div></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Shield} title={businessPlan.risks.title} />
              <div className="space-y-4">
                {businessPlan.risks.risks.map((risk, i) => (
                  <ExpandableSection key={i} title={<div className="flex items-center gap-3"><span className={`px-2 py-0.5 rounded text-xs font-medium ${risk.severity === 'High' ? 'bg-red-100 text-red-700' : risk.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>{risk.severity}</span><span>{risk.risk}</span></div>}>
                    <div className="space-y-3">
                      <div><span className="text-sm font-medium text-gray-700">Likelihood:</span><span className="ml-2 text-sm text-gray-600">{risk.likelihood}</span></div>
                      <div><span className="text-sm font-medium text-gray-700">Description:</span><p className="text-sm text-gray-600 mt-1">{risk.description}</p></div>
                      <div className="p-3 bg-green-50 rounded"><span className="text-sm font-medium text-green-800">Mitigation:</span><p className="text-sm text-gray-700 mt-1">{risk.mitigation}</p></div>
                    </div>
                  </ExpandableSection>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'financials' && (
          <div className="space-y-8">
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={LineChart} title="Financial Projections" />
              <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                <div className="flex items-center gap-2 mb-4"><span className="px-2 py-0.5 bg-green-600 text-white rounded text-xs font-medium">RECOMMENDED</span><h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withEquipmentFinancing.name}</h4></div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead><tr className="border-b border-green-200"><th className="text-left py-2 px-3">Year</th><th className="text-right py-2 px-3">Revenue</th><th className="text-right py-2 px-3">Users</th><th className="text-right py-2 px-3">ARR</th><th className="text-right py-2 px-3">Net Burn</th></tr></thead>
                    <tbody>
                      {businessPlan.financials.scenarios.withEquipmentFinancing.years.map((year, i) => (
                        <tr key={i} className="border-b border-green-100"><td className="py-2 px-3 font-medium">Year {year.year}</td><td className="py-2 px-3 text-right">{year.revenue}</td><td className="py-2 px-3 text-right">{year.shops.toLocaleString()}</td><td className="py-2 px-3 text-right">{year.arr}</td><td className={`py-2 px-3 text-right ${year.burn === '$0' ? 'text-green-600' : 'text-red-600'}`}>{year.burn}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-3 text-center"><span className="text-lg font-bold text-green-600">Funding Required: {businessPlan.financials.scenarios.withEquipmentFinancing.fundingRequired}</span></div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={DollarSign} title={businessPlan.financials.useOfFunds.title} />
              <div className="space-y-3">
                {businessPlan.financials.useOfFunds.breakdown.map((item, i) => (
                  <div key={i} className="flex items-center gap-3"><div className="w-16 text-right"><span className="text-lg font-bold text-green-600">{item.percentage}%</span></div><div className="flex-1"><div className="h-6 bg-gray-200 rounded overflow-hidden"><div className="h-full bg-green-500 rounded" style={{ width: `${item.percentage}%` }} /></div></div><div className="w-32"><div className="font-medium text-gray-900">{item.amount}</div><div className="text-xs text-gray-500">{item.category}</div></div></div>
                ))}
              </div>
            </section>
          </div>
        )}

        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-8">
          <SectionHeader icon={ExternalLink} title="Sources & References" />
          <div className="grid md:grid-cols-2 gap-3">
            {businessPlan.sources.map((source, i) => (
              <a key={i} href={source.url} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                <div className="flex items-start justify-between"><div><h4 className="font-medium text-gray-900 text-sm group-hover:text-green-600 transition-colors">{source.name}</h4><p className="text-xs text-gray-500 mt-1">{source.detail}</p></div><ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0" /></div>
              </a>
            ))}
          </div>
        </section>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">{businessPlan.companyName}</h3>
          <p className="text-gray-400">{businessPlan.tagline}</p>
          <div className="mt-6"><a href="https://hyder.me/#contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"><Briefcase className="w-5 h-5" />Contact for Investment Inquiries</a></div>
        </div>
      </footer>
    </main>
  )
}
