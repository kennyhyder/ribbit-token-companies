'use client'

import { useState } from 'react'
import {
  ArrowLeft, Target, TrendingUp, DollarSign, Users, Shield, AlertTriangle,
  CheckCircle, ExternalLink, ChevronDown, ChevronUp, Building2, Zap, BarChart3,
  Clock, Wrench, FileText, Briefcase, Lightbulb, Globe, Award, PieChart, LineChart, Battery
} from 'lucide-react'

const businessPlan = {
  companyName: "PowerReady",
  tagline: "The Network of Record for Backup Power Installation",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Generac dominates hardware but installers are completely fragmented. No standardized quoting, wildly variable install quality, and zero visibility into where backup power exists.",
    solution: "PowerReady aggregates the installer network, standardizes quoting and quality, and tracks every installation to create the definitive map of grid resilience.",
    market: "$7.9B home standby generator market (2023) growing at 6.7% CAGR. U.S. standby generator market valued at $6.6B in 2024.",
    ask: "$4M Seed Round to build platform, onboard first 300 installers, and secure utility/municipal partnerships."
  },

  problem: {
    title: "The Grid Resilience Blind Spot",
    points: [
      {
        title: "Installer Fragmentation",
        detail: "Thousands of electricians and contractors install generators with no coordination, standardization, or quality tracking.",
        stat: "10K+",
        statLabel: "fragmented installers nationwide"
      },
      {
        title: "No Visibility",
        detail: "No one knows where backup power exists. Utilities can't plan, municipalities can't respond, insurers can't price risk.",
        stat: "0%",
        statLabel: "centralized backup power data"
      },
      {
        title: "Variable Quality",
        detail: "Installation quality varies wildly. Some installers follow code perfectly, others cut corners. No accountability.",
        stat: "30%+",
        statLabel: "of installs have compliance issues"
      },
      {
        title: "Rising Demand",
        detail: "Extreme weather events increasing 4x over 20 years. Power outages up 64% since 2011. Demand for backup power exploding.",
        stat: "64%",
        statLabel: "increase in outages since 2011"
      }
    ]
  },

  solution: {
    title: "PowerReady: Grid Resilience Intelligence",
    tagline: "Aggregate. Standardize. Track. Predict.",
    pillars: [
      {
        icon: "Globe",
        title: "Installer Network",
        description: "Aggregated network of certified backup power installers with standardized quoting, scheduling, and quality verification.",
        features: ["Certified installer directory", "Standardized pricing", "Quality scorecards", "Customer reviews"]
      },
      {
        icon: "Battery",
        title: "Installation Registry",
        description: "Track every backup power installation with location, specifications, and maintenance history.",
        features: ["GPS-tagged installations", "Equipment specifications", "Permit verification", "Maintenance tracking"]
      },
      {
        icon: "BarChart3",
        title: "Grid Intelligence",
        description: "Real-time visibility into backup power coverage, gaps, and grid resilience at any geographic level.",
        features: ["Coverage heat maps", "Resilience scoring", "Gap analysis", "Outage correlation"]
      },
      {
        icon: "Zap",
        title: "Predictive Demand",
        description: "Combine outage data with installation data to predict where demand will spike before storms hit.",
        features: ["Weather integration", "Demand forecasting", "Inventory optimization", "Lead routing"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "Climate Volatility",
        detail: "Extreme weather events up 400% over 20 years. Winter storms, hurricanes, heat waves all driving generator demand.",
        icon: "AlertTriangle"
      },
      {
        title: "Grid Aging",
        detail: "U.S. grid infrastructure averages 40+ years old. Power outages increased 64% since 2011 and accelerating.",
        icon: "Zap"
      },
      {
        title: "Work From Home",
        detail: "Remote work made home power critical infrastructure. A day without power now means a day without income.",
        icon: "Building2"
      },
      {
        title: "Generac's Blind Spot",
        detail: "Generac sells hardware, doesn't want to compete with or manage installers. Leaves massive network opportunity.",
        icon: "Target"
      },
      {
        title: "Utility Need",
        detail: "Utilities desperately need visibility into distributed generation for grid planning. They'll pay for this data.",
        icon: "TrendingUp"
      }
    ]
  },

  marketSize: {
    title: "Market Opportunity",
    tam: {
      value: "$28.5B",
      label: "Total Addressable Market",
      description: "Global Generator Market by 2035",
      source: "Fact.MR"
    },
    sam: {
      value: "$6.6B",
      label: "Serviceable Addressable Market",
      description: "U.S. Standby Generator Market 2024",
      source: "GMInsights"
    },
    som: {
      value: "$200M",
      label: "Serviceable Obtainable Market",
      description: "3% market share in 5 years",
      source: "Conservative estimate"
    },
    additionalMarkets: [
      { name: "Home Standby Gensets", value: "$7.9B (2023)", cagr: "6.7%" },
      { name: "North America Standby", value: "$2.7B (2024)", cagr: "7.6%" },
      { name: "Residential Generator", value: "$10.5B (2025)", cagr: "4.1%" }
    ],
    keyMetrics: [
      { label: "Avg generator install cost", value: "$12K-$25K" },
      { label: "Installer margin", value: "25-35%" },
      { label: "Annual maintenance", value: "$300-$500" },
      { label: "Market growth (post-storm)", value: "300-500%" }
    ]
  },

  competition: {
    title: "Competitive Landscape",
    players: [
      {
        name: "Generac",
        type: "Hardware Leader",
        marketShare: "75%+",
        strengths: ["Brand dominance", "Product quality", "Dealer network", "Financing programs"],
        weaknesses: ["Hardware-focused", "Won't manage installers", "No network data", "Channel conflict fears"],
        threat: "Partner not competitor"
      },
      {
        name: "Kohler",
        type: "Premium Alternative",
        marketShare: "~15%",
        strengths: ["Premium positioning", "Whole-house solutions", "Quality reputation"],
        weaknesses: ["Smaller dealer network", "Higher prices", "No installer aggregation"],
        threat: "Low"
      },
      {
        name: "HomeAdvisor/Angi",
        type: "Lead Gen",
        marketShare: "N/A",
        strengths: ["Consumer traffic", "Lead volume", "Brand awareness"],
        weaknesses: ["No specialization", "Quality issues", "Race to bottom pricing"],
        threat: "Low - different model"
      },
      {
        name: "Local Contractors",
        type: "Fragmented",
        marketShare: "100% of install",
        strengths: ["Local relationships", "Existing customer base", "Installation expertise"],
        weaknesses: ["No marketing", "No standardization", "No data sharing"],
        threat: "Partners not competitors"
      }
    ],
    ourAdvantage: {
      title: "PowerReady's Unfair Advantages",
      points: [
        "Network effect: More installers = better coverage = more utility interest = more installers",
        "Data moat: Only aggregated view of backup power infrastructure in the U.S.",
        "PowerOutage synergy: Direct integration with outage data for predictive demand",
        "Cap-Ex alignment: Utilities and municipalities can fund as infrastructure investment",
        "No channel conflict: We help installers, not compete with them"
      ]
    }
  },

  businessModel: {
    title: "Business Model",
    revenueStreams: [
      {
        name: "Installer SaaS",
        description: "Monthly subscription for installers to access leads, quoting tools, and network benefits",
        pricing: "$299-$599/month per installer",
        margin: "85%+",
        year1Revenue: "$400K",
        year3Revenue: "$3M"
      },
      {
        name: "Lead Generation",
        description: "Qualified leads routed to network installers based on location and capacity",
        pricing: "$50-$150 per qualified lead",
        margin: "70%",
        year1Revenue: "$300K",
        year3Revenue: "$4M"
      },
      {
        name: "Data & Intelligence",
        description: "Grid resilience data sold to utilities, municipalities, and insurers",
        pricing: "$25K-$250K annual contracts",
        margin: "90%+",
        year1Revenue: "$200K",
        year3Revenue: "$5M"
      },
      {
        name: "Financing Referrals",
        description: "Referral fees from financing partners for generator purchases",
        pricing: "2-4% of financed amount",
        margin: "100%",
        year1Revenue: "$100K",
        year3Revenue: "$2M"
      }
    ],
    unitEconomics: {
      title: "Unit Economics Per Installer",
      metrics: [
        { label: "Customer Acquisition Cost (CAC)", value: "$800", note: "Field sales + onboarding" },
        { label: "Average Revenue Per Installer", value: "$450/month", note: "Blended revenue" },
        { label: "Gross Margin", value: "75%", note: "Software + lead costs" },
        { label: "Lifetime Value (LTV)", value: "$12,000", note: "28-month avg retention" },
        { label: "LTV:CAC Ratio", value: "15:1", note: "Strong unit economics" },
        { label: "Payback Period", value: "2 months", note: "Very fast payback" }
      ]
    }
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withEquipmentFinancing: {
        name: "Full Model (Recommended)",
        description: "Complete platform with installer network, data sales, and utility partnerships",
        years: [
          { year: 1, revenue: "$1M", shops: 300, arr: "$1M", burn: "$3M", runway: "16 months" },
          { year: 2, revenue: "$5M", shops: 800, arr: "$5M", burn: "$1.5M", runway: "Profitable" },
          { year: 3, revenue: "$14M", shops: 1500, arr: "$14M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$28M", shops: 2500, arr: "$28M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$50M", shops: 4000, arr: "$50M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$4M Seed",
        keyAssumptions: [
          "300 installers Year 1, growing to 4,000 by Year 5",
          "PowerOutage integration drives predictive demand features",
          "2 utility data partnerships by end of Year 1",
          "$450 blended monthly revenue per installer",
          "75% gross margin at scale"
        ]
      },
      withoutEquipmentFinancing: {
        name: "SaaS-Only Model (Conservative)",
        description: "Installer SaaS and leads only, no utility data partnerships",
        years: [
          { year: 1, revenue: "$500K", shops: 200, arr: "$500K", burn: "$2M", runway: "24 months" },
          { year: 2, revenue: "$2M", shops: 500, arr: "$2M", burn: "$1M", runway: "24 months" },
          { year: 3, revenue: "$6M", shops: 1000, arr: "$6M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$12M", shops: 1800, arr: "$12M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$22M", shops: 3000, arr: "$22M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$2.5M Seed",
        keyAssumptions: [
          "Slower growth without data monetization",
          "Higher churn without utility partnerships (40% vs 25%)",
          "Pure SaaS margins but lower revenue per installer",
          "No predictive demand features",
          "Less differentiation from generic contractor platforms"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $4M Seed Funds",
      breakdown: [
        { category: "Engineering & Product", amount: "$1.6M", percentage: 40, detail: "Platform, mobile apps, data infrastructure" },
        { category: "Sales & BD", amount: "$1.0M", percentage: 25, detail: "Installer acquisition, utility partnerships" },
        { category: "Operations", amount: "$600K", percentage: 15, detail: "Installer onboarding, quality verification" },
        { category: "Marketing", amount: "$400K", percentage: 10, detail: "Installer recruitment, consumer awareness" },
        { category: "G&A & Buffer", amount: "$400K", percentage: 10, detail: "Legal, accounting, contingency" }
      ]
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "Generac Launches Competing Network",
        severity: "High",
        likelihood: "Low",
        description: "Generac could build their own installer network platform",
        mitigation: "Generac has avoided this for 20 years due to channel conflict. We're manufacturer-agnostic which is an advantage. Move fast to build network effects."
      },
      {
        risk: "Installer Adoption",
        severity: "Medium",
        likelihood: "Medium",
        description: "Installers may resist joining network or sharing data",
        mitigation: "Lead generation provides immediate ROI. Start with forward-thinking installers. Build case studies quickly."
      },
      {
        risk: "Utility Sales Cycle",
        severity: "Medium",
        likelihood: "High",
        description: "Utilities have long procurement cycles (12-24 months)",
        mitigation: "Start with pilot programs. Target progressive utilities. Build recurring SaaS revenue while utility deals develop."
      },
      {
        risk: "Economic Downturn",
        severity: "Medium",
        likelihood: "Medium",
        description: "Recession could slow generator purchases",
        mitigation: "Generator demand is counter-cyclical to some extent (storms don't stop). Focus on essential infrastructure positioning."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Month 3", milestone: "Platform MVP live, first 50 installers onboarded", status: "planned" },
      { timeline: "Month 6", milestone: "300 installers, PowerOutage integration complete", status: "planned" },
      { timeline: "Month 9", milestone: "First utility pilot launched, 500 installers", status: "planned" },
      { timeline: "Month 12", milestone: "$1M ARR, 2 utility partnerships signed", status: "planned" },
      { timeline: "Month 18", milestone: "1,000 installers, $3M ARR, Series A ready", status: "planned" },
      { timeline: "Month 24", milestone: "$5M ARR, national coverage, profitable", status: "planned" }
    ]
  },

  ask: {
    title: "The Ask",
    amount: "$4,000,000",
    round: "Seed Round",
    terms: "SAFE or Priced Round at $16M post-money valuation",
    useOfFunds: [
      "Build platform and mobile apps for installer network",
      "Acquire first 300 certified installers",
      "Launch utility partnership pilots",
      "Integrate with PowerOutage for predictive demand"
    ],
    timeline: "18-month runway to Series A milestones",
    seriesA: {
      timing: "Month 15-18",
      metrics: "$2-3M ARR, 800+ installers, 2+ utility partnerships",
      raise: "$12-18M at $60-80M valuation"
    }
  },

  sources: [
    { name: "U.S. Standby Generator Market", url: "https://www.gminsights.com/industry-analysis/us-standby-generator-sets-market", detail: "$6.6B in 2024, 6.8% CAGR" },
    { name: "Home Standby Gensets Market", url: "https://www.gminsights.com/industry-analysis/home-standby-gensets-market", detail: "$7.9B in 2023, 6.7% CAGR" },
    { name: "Generator Market Forecast", url: "https://www.precedenceresearch.com/generator-market", detail: "$67.45B by 2034" },
    { name: "Residential Generator Market", url: "https://www.futuremarketinsights.com/reports/residential-generator-market", detail: "$10.5B in 2025" },
    { name: "Generac Q4 2024 Results", url: "https://www.generac.com/investor-relations", detail: "16% YoY growth, $743M residential" }
  ]
}

function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-amber-600" />
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
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <a href="/tokens/#framework" className="inline-flex items-center gap-2 text-amber-100 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Cap-Ex Opportunities
          </a>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Battery className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{businessPlan.companyName}</h1>
                  <p className="text-amber-100">{businessPlan.tagline}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-amber-200">{businessPlan.version}</div>
              <div className="text-sm text-amber-200">{businessPlan.date}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.ask.amount}</div>
              <div className="text-sm text-amber-100">Seed Round</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.marketSize.sam.value}</div>
              <div className="text-sm text-amber-100">U.S. Market</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">6.8%</div>
              <div className="text-sm text-amber-100">Market CAGR</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">15:1</div>
              <div className="text-sm text-amber-100">LTV:CAC</div>
            </div>
          </div>
        </div>
      </header>

      <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 py-3">
            {(['overview', 'detailed', 'financials'] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === tab ? 'bg-amber-100 text-amber-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                {tab === 'overview' ? <><FileText className="w-4 h-4 inline mr-2" />Executive Summary</> :
                 tab === 'detailed' ? <><Briefcase className="w-4 h-4 inline mr-2" />Full Plan</> :
                 <><LineChart className="w-4 h-4 inline mr-2" />Financials</>}
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
                  <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 mb-2">The Problem</h4>
                    <p className="text-sm text-gray-700">{businessPlan.executiveSummary.problem}</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-800 mb-2">Our Solution</h4>
                    <p className="text-sm text-gray-700">{businessPlan.executiveSummary.solution}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-800 mb-2">Market Opportunity</h4>
                    <p className="text-sm text-gray-700">{businessPlan.executiveSummary.market}</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-800 mb-2">The Ask</h4>
                    <p className="text-sm text-gray-700">{businessPlan.executiveSummary.ask}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={AlertTriangle} title={businessPlan.problem.title} />
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.problem.points.map((point, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">{point.stat}</div>
                        <div className="text-xs text-gray-500">{point.statLabel}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{point.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{point.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Lightbulb} title={businessPlan.solution.title} subtitle={businessPlan.solution.tagline} />
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.solution.pillars.map((pillar, i) => (
                  <div key={i} className="p-4 bg-amber-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{pillar.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {pillar.features.map((feature, j) => (
                        <span key={j} className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs">{feature}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={PieChart} title={businessPlan.marketSize.title} />
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.tam.label}</div>
                  <div className="text-sm text-amber-100 mt-1">{businessPlan.marketSize.tam.description}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.sam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.sam.label}</div>
                  <div className="text-sm text-green-100 mt-1">{businessPlan.marketSize.sam.description}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.som.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.som.label}</div>
                  <div className="text-sm text-purple-100 mt-1">{businessPlan.marketSize.som.description}</div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">{businessPlan.ask.title}</h2>
                <div className="text-5xl font-bold mb-2">{businessPlan.ask.amount}</div>
                <div className="text-xl text-amber-100">{businessPlan.ask.round}</div>
                <div className="text-amber-200 mt-2">{businessPlan.ask.terms}</div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Use of Funds</h4>
                  <ul className="space-y-2">
                    {businessPlan.ask.useOfFunds.map((use, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /><span>{use}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Series A Target</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-amber-200">Timing:</span> {businessPlan.ask.seriesA.timing}</p>
                    <p><span className="text-amber-200">Metrics:</span> {businessPlan.ask.seriesA.metrics}</p>
                    <p><span className="text-amber-200">Raise:</span> {businessPlan.ask.seriesA.raise}</p>
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
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-medium text-gray-900">Competitor</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-900">Market Share</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-900">Strengths</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-900">Weaknesses</th>
                    </tr>
                  </thead>
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
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">{businessPlan.competition.ourAdvantage.title}</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {businessPlan.competition.ourAdvantage.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />{point}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={DollarSign} title={businessPlan.businessModel.title} />
              <div className="grid gap-4 mb-6">
                {businessPlan.businessModel.revenueStreams.map((stream, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div><h4 className="font-semibold text-gray-900">{stream.name}</h4><p className="text-sm text-gray-600">{stream.description}</p></div>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">{stream.margin} margin</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-3 text-sm">
                      <div><span className="text-gray-500">Pricing:</span><span className="ml-2 font-medium">{stream.pricing}</span></div>
                      <div><span className="text-gray-500">Year 1:</span><span className="ml-2 font-medium">{stream.year1Revenue}</span></div>
                      <div><span className="text-gray-500">Year 3:</span><span className="ml-2 font-medium">{stream.year3Revenue}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Shield} title={businessPlan.risks.title} />
              <div className="space-y-4">
                {businessPlan.risks.risks.map((risk, i) => (
                  <ExpandableSection key={i} title={<div className="flex items-center gap-3"><span className={`px-2 py-0.5 rounded text-xs font-medium ${risk.severity === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{risk.severity}</span><span>{risk.risk}</span></div>}>
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
              <div className="space-y-8">
                <div className="p-4 bg-amber-50 rounded-lg border-2 border-amber-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-amber-600 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withEquipmentFinancing.name}</h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead><tr className="border-b border-amber-200"><th className="text-left py-2 px-3">Year</th><th className="text-right py-2 px-3">Revenue</th><th className="text-right py-2 px-3">Installers</th><th className="text-right py-2 px-3">ARR</th><th className="text-right py-2 px-3">Net Burn</th></tr></thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withEquipmentFinancing.years.map((year, i) => (
                          <tr key={i} className="border-b border-amber-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.shops.toLocaleString()}</td>
                            <td className="py-2 px-3 text-right">{year.arr}</td>
                            <td className={`py-2 px-3 text-right ${year.burn === '$0' ? 'text-green-600' : 'text-red-600'}`}>{year.burn}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3 text-center"><span className="text-lg font-bold text-amber-600">Funding Required: {businessPlan.financials.scenarios.withEquipmentFinancing.fundingRequired}</span></div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={DollarSign} title={businessPlan.financials.useOfFunds.title} />
              <div className="space-y-3">
                {businessPlan.financials.useOfFunds.breakdown.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-16 text-right"><span className="text-lg font-bold text-amber-600">{item.percentage}%</span></div>
                    <div className="flex-1"><div className="h-6 bg-gray-200 rounded overflow-hidden"><div className="h-full bg-amber-500 rounded" style={{ width: `${item.percentage}%` }} /></div></div>
                    <div className="w-32"><div className="font-medium text-gray-900">{item.amount}</div><div className="text-xs text-gray-500">{item.category}</div></div>
                  </div>
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
                <div className="flex items-start justify-between">
                  <div><h4 className="font-medium text-gray-900 text-sm group-hover:text-amber-600 transition-colors">{source.name}</h4><p className="text-xs text-gray-500 mt-1">{source.detail}</p></div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-amber-600 transition-colors flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">{businessPlan.companyName}</h3>
          <p className="text-gray-400">{businessPlan.tagline}</p>
          <div className="mt-6">
            <a href="https://hyder.me/#contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors">
              <Briefcase className="w-5 h-5" />Contact for Investment Inquiries
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
