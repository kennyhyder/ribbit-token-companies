'use client'

import { useState } from 'react'
import {
  ArrowLeft, Target, TrendingUp, DollarSign, Users, Shield, AlertTriangle,
  CheckCircle, ExternalLink, ChevronDown, ChevronUp, Building2, Zap, BarChart3,
  Clock, Wrench, FileText, Briefcase, Lightbulb, Globe, Award, PieChart, LineChart, Radio
} from 'lucide-react'

const businessPlan = {
  companyName: "TowerTrack",
  tagline: "The Intelligence Platform for Wireless Infrastructure",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Carriers have internal data, but no public aggregation exists. Municipalities struggle with permit tracking. Investors are flying blind on $35B+ in annual carrier capex.",
    solution: "TowerTrack aggregates permit data, deployment tracking, and carrier intelligence to create the definitive source of truth for wireless infrastructure investment.",
    market: "$7.33B U.S. telecom tower market (2025) growing to $8.99B by 2030. Global 5G deployment market reaching $17.78B by 2028.",
    ask: "$6M Seed Round to build data infrastructure, aggregate permits from 500+ municipalities, and secure first tower REIT partnerships."
  },

  problem: {
    title: "The Wireless Infrastructure Blind Spot",
    points: [
      {
        title: "No Public Data",
        detail: "Carrier deployment plans are closely guarded secrets. No aggregated view of where towers and small cells are being built.",
        stat: "0",
        statLabel: "public sources of deployment data"
      },
      {
        title: "Municipal Chaos",
        detail: "Permits scattered across thousands of cities, counties, and townships. No standardization. Each jurisdiction different.",
        stat: "19,000+",
        statLabel: "municipalities with permit data"
      },
      {
        title: "Investor Blindness",
        detail: "Tower REITs, infrastructure funds, and equipment vendors make billion-dollar decisions with incomplete information.",
        stat: "$35B+",
        statLabel: "annual carrier capex with limited visibility"
      },
      {
        title: "5G Transition",
        detail: "Massive shift from macro towers to small cells requires entirely new infrastructure intelligence. Old data sources obsolete.",
        stat: "11.6%",
        statLabel: "5G deployment CAGR through 2028"
      }
    ]
  },

  solution: {
    title: "TowerTrack: Wireless Infrastructure Intelligence",
    tagline: "Aggregate. Analyze. Predict. Profit.",
    pillars: [
      {
        icon: "Globe",
        title: "Permit Aggregation",
        description: "Automated collection and standardization of permit data from thousands of municipalities nationwide.",
        features: ["Real-time permit tracking", "Standardized data format", "Historical archives", "API access"]
      },
      {
        icon: "Radio",
        title: "Deployment Tracking",
        description: "Track every tower, small cell, and DAS installation with location, carrier, and specification data.",
        features: ["GPS-precise locations", "Carrier identification", "Equipment specifications", "Timeline tracking"]
      },
      {
        icon: "BarChart3",
        title: "Investment Intelligence",
        description: "Analytics and insights for tower REITs, infrastructure funds, and equipment vendors.",
        features: ["Market heat maps", "Carrier capex forecasts", "Coverage gap analysis", "Competitive intelligence"]
      },
      {
        icon: "TrendingUp",
        title: "Predictive Analytics",
        description: "Machine learning models to predict where carriers will build next based on permit patterns.",
        features: ["Deployment predictions", "Carrier strategy analysis", "Real estate opportunity scoring", "Risk assessment"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "5G Buildout Peak",
        detail: "Carriers channeling $35B in 2025 capex into 3.5 GHz and C-band upgrades. Massive equipment additions to existing towers.",
        icon: "Radio"
      },
      {
        title: "Small Cell Explosion",
        detail: "After tower-based 5G buildout, carriers shifting to small cells for capacity. Thousands of new sites per carrier.",
        icon: "Building2"
      },
      {
        title: "Tower REIT Transition",
        detail: "Crown Castle sold $8.5B fiber assets in 2025 to focus on towers. Consolidation creating demand for intelligence.",
        icon: "TrendingUp"
      },
      {
        title: "Real Estate Impact",
        detail: "Wireless coverage affects property values. Dead zones hurt real estate. Developers need deployment intelligence.",
        icon: "Target"
      },
      {
        title: "AI Data Processing",
        detail: "Modern ML can now process millions of permit documents, making aggregation economically viable for the first time.",
        icon: "Zap"
      }
    ]
  },

  marketSize: {
    title: "Market Opportunity",
    tam: {
      value: "$17.8B",
      label: "Total Addressable Market",
      description: "Global 5G Deployment Market by 2028",
      source: "The Insight Partners"
    },
    sam: {
      value: "$7.33B",
      label: "Serviceable Addressable Market",
      description: "U.S. Telecom Towers Market 2025",
      source: "Mordor Intelligence"
    },
    som: {
      value: "$150M",
      label: "Serviceable Obtainable Market",
      description: "Data/intelligence services (2% of market)",
      source: "Conservative estimate"
    },
    additionalMarkets: [
      { name: "Global Telecom Towers", value: "$29.29B (2025)", cagr: "2.84%" },
      { name: "5G Cell Tower Market", value: "Growing", cagr: "11.5%" },
      { name: "Cell Site Operations (US)", value: "$61.6B (2025)", cagr: "3.5%" }
    ],
    keyMetrics: [
      { label: "Tower company amendment fees", value: "$15K-$50K" },
      { label: "Average tower rental", value: "$2,000-$3,000/mo" },
      { label: "Small cell installations (2025)", value: "50K+ new" },
      { label: "Annual carrier capex", value: "$35B+" }
    ]
  },

  competition: {
    title: "Competitive Landscape",
    players: [
      {
        name: "American Tower",
        type: "Tower REIT",
        marketShare: "#1 US",
        strengths: ["220K+ global sites", "Carrier relationships", "Financial strength", "Scale"],
        weaknesses: ["Internal data only", "Won't share intelligence", "No permit aggregation"],
        threat: "Customer not competitor"
      },
      {
        name: "Crown Castle",
        type: "Tower REIT",
        marketShare: "#2 US",
        strengths: ["40K+ towers", "Small cell focus", "Urban density"],
        weaknesses: ["Divesting fiber", "Internal focus", "No data product"],
        threat: "Customer not competitor"
      },
      {
        name: "SBA Communications",
        type: "Tower REIT",
        marketShare: "#3 US",
        strengths: ["18K+ towers", "Latin America", "Focused strategy"],
        weaknesses: ["Smaller scale", "No intelligence offering"],
        threat: "Customer not competitor"
      },
      {
        name: "Consulting Firms",
        type: "Advisory",
        marketShare: "N/A",
        strengths: ["Custom research", "Deep analysis", "Relationships"],
        weaknesses: ["Manual processes", "Expensive", "Point-in-time", "Not scalable"],
        threat: "Low - different model"
      }
    ],
    ourAdvantage: {
      title: "TowerTrack's Unfair Advantages",
      points: [
        "First-mover in permit data aggregation at scale",
        "AI/ML processing enables economics that were impossible before",
        "Neutral platform—all carriers and tower companies can use",
        "Real-time data vs. consultant point-in-time reports",
        "Network effects: more data = better predictions = more customers"
      ]
    }
  },

  businessModel: {
    title: "Business Model",
    revenueStreams: [
      {
        name: "Data Subscriptions",
        description: "Annual subscriptions for permit data, deployment tracking, and market intelligence",
        pricing: "$50K-$500K/year based on coverage and features",
        margin: "85%+",
        year1Revenue: "$800K",
        year3Revenue: "$8M"
      },
      {
        name: "API Access",
        description: "Programmatic access to deployment data for integration into customer systems",
        pricing: "$0.10-$1.00 per API call or $25K-$100K annual",
        margin: "90%+",
        year1Revenue: "$200K",
        year3Revenue: "$3M"
      },
      {
        name: "Custom Research",
        description: "Bespoke analysis for M&A, site selection, and competitive intelligence",
        pricing: "$25K-$250K per engagement",
        margin: "60%",
        year1Revenue: "$300K",
        year3Revenue: "$2M"
      },
      {
        name: "Real Estate Intelligence",
        description: "Coverage data and deployment forecasts for real estate investors and developers",
        pricing: "$10K-$50K/year per portfolio",
        margin: "85%+",
        year1Revenue: "$100K",
        year3Revenue: "$2M"
      }
    ],
    unitEconomics: {
      title: "Unit Economics Per Enterprise Customer",
      metrics: [
        { label: "Customer Acquisition Cost (CAC)", value: "$25,000", note: "Enterprise sales cycle" },
        { label: "Average Contract Value (ACV)", value: "$150,000", note: "Year 1 average" },
        { label: "Gross Margin", value: "80%", note: "Data business margins" },
        { label: "Lifetime Value (LTV)", value: "$450,000", note: "3-year avg retention" },
        { label: "LTV:CAC Ratio", value: "18:1", note: "Strong enterprise unit economics" },
        { label: "Payback Period", value: "4 months", note: "Fast for enterprise" }
      ]
    }
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withEquipmentFinancing: {
        name: "Full Model (Recommended)",
        description: "Complete platform with permit aggregation, analytics, and enterprise sales",
        years: [
          { year: 1, revenue: "$1.4M", shops: 15, arr: "$1.4M", burn: "$4.6M", runway: "15 months" },
          { year: 2, revenue: "$5M", shops: 40, arr: "$5M", burn: "$2M", runway: "24 months" },
          { year: 3, revenue: "$15M", shops: 80, arr: "$15M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$30M", shops: 140, arr: "$30M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$55M", shops: 220, arr: "$55M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$6M Seed",
        keyAssumptions: [
          "15 enterprise customers Year 1, growing to 220 by Year 5",
          "500 municipalities covered by end of Year 1, 5,000 by Year 3",
          "2 tower REIT partnerships by end of Year 1",
          "$150K average contract value, growing over time",
          "80% gross margin at scale"
        ]
      },
      withoutEquipmentFinancing: {
        name: "Bootstrapped Model (Conservative)",
        description: "Slower growth with limited geographic coverage",
        years: [
          { year: 1, revenue: "$500K", shops: 8, arr: "$500K", burn: "$2M", runway: "30 months" },
          { year: 2, revenue: "$1.5M", shops: 18, arr: "$1.5M", burn: "$1M", runway: "18 months" },
          { year: 3, revenue: "$4M", shops: 35, arr: "$4M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$8M", shops: 60, arr: "$8M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$15M", shops: 100, arr: "$15M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$2.5M Seed",
        keyAssumptions: [
          "Limited to top 50 metro areas initially",
          "Smaller sales team, longer cycles",
          "Less ML investment, more manual processing",
          "Regional focus before national expansion"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $6M Seed Funds",
      breakdown: [
        { category: "Engineering & Data", amount: "$2.5M", percentage: 42, detail: "Data infrastructure, ML/AI, platform" },
        { category: "Data Acquisition", amount: "$1.2M", percentage: 20, detail: "Permit data, municipal partnerships" },
        { category: "Sales & BD", amount: "$1.2M", percentage: 20, detail: "Enterprise sales, REIT partnerships" },
        { category: "Operations", amount: "$600K", percentage: 10, detail: "Data quality, support, processing" },
        { category: "G&A & Buffer", amount: "$500K", percentage: 8, detail: "Legal, accounting, contingency" }
      ]
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "Data Access Restrictions",
        severity: "High",
        likelihood: "Medium",
        description: "Municipalities could restrict access to permit data or charge prohibitive fees",
        mitigation: "FOIA requests ensure access to public records. Build relationships with forward-thinking municipalities. Diversify data sources."
      },
      {
        risk: "Tower Company Competition",
        severity: "Medium",
        likelihood: "Low",
        description: "American Tower or Crown Castle could build competing intelligence platform",
        mitigation: "Tower companies focused on real estate, not software. They're customers, not competitors. Our neutral position is valuable."
      },
      {
        risk: "Enterprise Sales Cycle",
        severity: "Medium",
        likelihood: "High",
        description: "Enterprise customers (tower REITs, funds) have long procurement cycles",
        mitigation: "Start with smaller customers. Offer pilots. Build case studies. Patience with enterprise while building recurring revenue."
      },
      {
        risk: "Data Quality",
        severity: "High",
        likelihood: "Medium",
        description: "Permit data inconsistent, incomplete, or delayed across municipalities",
        mitigation: "Heavy investment in data normalization. ML for data quality. Multiple source triangulation. Transparency about coverage."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Month 3", milestone: "Data pipeline live for 100 municipalities", status: "planned" },
      { timeline: "Month 6", milestone: "500 municipalities, first 5 paying customers", status: "planned" },
      { timeline: "Month 9", milestone: "First tower REIT partnership, $800K ARR", status: "planned" },
      { timeline: "Month 12", milestone: "$1.4M ARR, 15 customers, 1,000 municipalities", status: "planned" },
      { timeline: "Month 18", milestone: "2,500 municipalities, $3M ARR, Series A ready", status: "planned" },
      { timeline: "Month 24", milestone: "$5M ARR, 40 customers, national coverage", status: "planned" }
    ]
  },

  ask: {
    title: "The Ask",
    amount: "$6,000,000",
    round: "Seed Round",
    terms: "SAFE or Priced Round at $24M post-money valuation",
    useOfFunds: [
      "Build data infrastructure and ML processing pipeline",
      "Aggregate permit data from 500+ municipalities",
      "Hire enterprise sales team",
      "Secure first tower REIT partnerships"
    ],
    timeline: "18-month runway to Series A milestones",
    seriesA: {
      timing: "Month 15-18",
      metrics: "$3-4M ARR, 30+ customers, 2,500+ municipalities",
      raise: "$20-30M at $100-150M valuation"
    }
  },

  sources: [
    { name: "U.S. Telecom Towers Market", url: "https://www.mordorintelligence.com/industry-reports/united-states-telecom-towers-market", detail: "$7.33B in 2025, 4.19% CAGR to $8.99B by 2030" },
    { name: "5G Network Deployment Market", url: "https://www.globenewswire.com/news-release/2023/01/27/2596999/0/en/5G-Network-and-Tower-Deployment-Market-Worth-17-78-Billion-Globally-by-2028", detail: "$17.78B by 2028, 11.6% CAGR" },
    { name: "Light Reading: Cell Towers by Numbers", url: "https://www.lightreading.com/digital-transformation/us-cell-towers-and-small-cells-by-the-numbers", detail: "Tower and small cell deployment statistics" },
    { name: "Crown Castle Fiber Sale", url: "https://www.crowncastle.com/news/", detail: "$8.5B fiber divestiture in March 2025" },
    { name: "Telecom Towers Market Global", url: "https://www.precedenceresearch.com/telecom-tower-market", detail: "$29.29B in 2025, $33.69B by 2030" }
  ]
}

function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-indigo-600" />
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
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <a href="/tokens/#framework" className="inline-flex items-center gap-2 text-indigo-100 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Cap-Ex Opportunities
          </a>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Radio className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{businessPlan.companyName}</h1>
                  <p className="text-indigo-100">{businessPlan.tagline}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-indigo-200">{businessPlan.version}</div>
              <div className="text-sm text-indigo-200">{businessPlan.date}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.ask.amount}</div>
              <div className="text-sm text-indigo-100">Seed Round</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.marketSize.sam.value}</div>
              <div className="text-sm text-indigo-100">U.S. Market</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">11.6%</div>
              <div className="text-sm text-indigo-100">5G CAGR</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">18:1</div>
              <div className="text-sm text-indigo-100">LTV:CAC</div>
            </div>
          </div>
        </div>
      </header>

      <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 py-3">
            {(['overview', 'detailed', 'financials'] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === tab ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}>
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
                  <div key={i} className="p-4 bg-indigo-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{pillar.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {pillar.features.map((feature, j) => (
                        <span key={j} className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded text-xs">{feature}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={PieChart} title={businessPlan.marketSize.title} />
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.tam.label}</div>
                  <div className="text-sm text-indigo-100 mt-1">{businessPlan.marketSize.tam.description}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.sam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.sam.label}</div>
                  <div className="text-sm text-green-100 mt-1">{businessPlan.marketSize.sam.description}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.som.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.som.label}</div>
                  <div className="text-sm text-purple-100 mt-1">{businessPlan.marketSize.som.description}</div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">{businessPlan.ask.title}</h2>
                <div className="text-5xl font-bold mb-2">{businessPlan.ask.amount}</div>
                <div className="text-xl text-indigo-100">{businessPlan.ask.round}</div>
                <div className="text-indigo-200 mt-2">{businessPlan.ask.terms}</div>
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
                    <p><span className="text-indigo-200">Timing:</span> {businessPlan.ask.seriesA.timing}</p>
                    <p><span className="text-indigo-200">Metrics:</span> {businessPlan.ask.seriesA.metrics}</p>
                    <p><span className="text-indigo-200">Raise:</span> {businessPlan.ask.seriesA.raise}</p>
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
                      <th className="text-left py-3 px-2 font-medium text-gray-900">Position</th>
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
              <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">{businessPlan.competition.ourAdvantage.title}</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {businessPlan.competition.ourAdvantage.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />{point}</li>
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
                <div className="p-4 bg-indigo-50 rounded-lg border-2 border-indigo-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-indigo-600 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withEquipmentFinancing.name}</h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead><tr className="border-b border-indigo-200"><th className="text-left py-2 px-3">Year</th><th className="text-right py-2 px-3">Revenue</th><th className="text-right py-2 px-3">Customers</th><th className="text-right py-2 px-3">ARR</th><th className="text-right py-2 px-3">Net Burn</th></tr></thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withEquipmentFinancing.years.map((year, i) => (
                          <tr key={i} className="border-b border-indigo-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.shops}</td>
                            <td className="py-2 px-3 text-right">{year.arr}</td>
                            <td className={`py-2 px-3 text-right ${year.burn === '$0' ? 'text-green-600' : 'text-red-600'}`}>{year.burn}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3 text-center"><span className="text-lg font-bold text-indigo-600">Funding Required: {businessPlan.financials.scenarios.withEquipmentFinancing.fundingRequired}</span></div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={DollarSign} title={businessPlan.financials.useOfFunds.title} />
              <div className="space-y-3">
                {businessPlan.financials.useOfFunds.breakdown.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-16 text-right"><span className="text-lg font-bold text-indigo-600">{item.percentage}%</span></div>
                    <div className="flex-1"><div className="h-6 bg-gray-200 rounded overflow-hidden"><div className="h-full bg-indigo-500 rounded" style={{ width: `${item.percentage}%` }} /></div></div>
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
                  <div><h4 className="font-medium text-gray-900 text-sm group-hover:text-indigo-600 transition-colors">{source.name}</h4><p className="text-xs text-gray-500 mt-1">{source.detail}</p></div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors flex-shrink-0" />
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
            <a href="https://hyder.me/#contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              <Briefcase className="w-5 h-5" />Contact for Investment Inquiries
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
