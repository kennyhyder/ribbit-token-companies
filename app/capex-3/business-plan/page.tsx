'use client'

import { useState } from 'react'
import {
  ArrowLeft,
  Target,
  TrendingUp,
  DollarSign,
  Users,
  Shield,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Building2,
  Zap,
  BarChart3,
  Clock,
  Wrench,
  Radio,
  FileText,
  Briefcase,
  Scale,
  Lightbulb,
  Globe,
  Award,
  PieChart,
  LineChart
} from 'lucide-react'

// Business Plan Data
const businessPlan = {
  companyName: "TowerTrack",
  tagline: "The Intelligence Layer for Wireless Infrastructure",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Carriers have internal data, but no public aggregation exists. Municipalities struggle with permit tracking. Tower REITs and infrastructure investors are flying blind on $35B+ in annual carrier capex.",
    solution: "TowerTrack aggregates permit data, deployment tracking, and carrier intelligence to create the definitive source of truth for wireless infrastructure investment and planning.",
    market: "$7.33B U.S. telecom tower market (2025) growing to $8.99B by 2030. Global 5G deployment market reaching $17.78B by 2028 at 11.6% CAGR.",
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
        description: "Machine learning models to predict where carriers will build next based on permit patterns and market signals.",
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
        detail: "After tower-based 5G buildout, carriers shifting to small cells for capacity. Thousands of new sites per carrier annually.",
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
      { name: "5G Cell Tower Market", value: "Growing rapidly", cagr: "11.5%" },
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
        weaknesses: ["Internal data only", "Won't share intelligence", "No permit aggregation", "Not a software company"],
        threat: "Customer not competitor"
      },
      {
        name: "Crown Castle",
        type: "Tower REIT",
        marketShare: "#2 US",
        strengths: ["40K+ towers", "Small cell focus", "Urban density", "Infrastructure expertise"],
        weaknesses: ["Divesting fiber", "Internal focus only", "No data product", "Limited tech investment"],
        threat: "Customer not competitor"
      },
      {
        name: "SBA Communications",
        type: "Tower REIT",
        marketShare: "#3 US",
        strengths: ["18K+ towers", "Latin America presence", "Focused strategy"],
        weaknesses: ["Smaller scale", "No intelligence offering", "Limited data capabilities"],
        threat: "Customer not competitor"
      },
      {
        name: "Consulting Firms",
        type: "Advisory",
        marketShare: "N/A",
        strengths: ["Custom research", "Deep analysis", "Relationships", "Industry expertise"],
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

  product: {
    title: "Product Roadmap",
    phases: [
      {
        phase: "Phase 1: Foundation",
        timeline: "Months 1-6",
        deliverables: [
          "Permit data pipeline for 500 municipalities",
          "Core database and API infrastructure",
          "Basic search and mapping interface",
          "Data normalization and quality scoring",
          "Initial ML models for carrier identification"
        ],
        milestone: "500 municipalities covered, 5 paying customers"
      },
      {
        phase: "Phase 2: Scale",
        timeline: "Months 7-12",
        deliverables: [
          "Expand to 2,500+ municipalities",
          "Predictive analytics for deployment forecasting",
          "Tower REIT dashboard and reporting tools",
          "Real estate integration module",
          "Advanced carrier strategy analytics"
        ],
        milestone: "2,500 municipalities, 15 customers, $1.4M ARR"
      },
      {
        phase: "Phase 3: Dominate",
        timeline: "Year 2-3",
        deliverables: [
          "National coverage (10,000+ municipalities)",
          "Equipment vendor intelligence module",
          "M&A due diligence product",
          "International expansion (Canada, Mexico)",
          "Real-time deployment alerts and notifications"
        ],
        milestone: "$15M ARR, 80 customers, market leader"
      }
    ]
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
        { label: "Average Contract Value (ACV)", value: "$150,000", note: "Year 1 blended average" },
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
        description: "Complete platform with permit aggregation, analytics, and national enterprise sales",
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
        description: "Slower growth with limited geographic coverage and smaller team",
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
          "Smaller sales team, longer sales cycles",
          "Less ML investment, more manual processing",
          "Regional focus before national expansion",
          "Lower ACV due to limited coverage"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $6M Seed Funds",
      breakdown: [
        { category: "Engineering & Data", amount: "$2.5M", percentage: 42, detail: "Data infrastructure, ML/AI, platform development" },
        { category: "Data Acquisition", amount: "$1.2M", percentage: 20, detail: "Permit data, municipal partnerships, FOIA" },
        { category: "Sales & Business Dev", amount: "$1.2M", percentage: 20, detail: "Enterprise sales, tower REIT partnerships" },
        { category: "Operations & Support", amount: "$600K", percentage: 10, detail: "Data quality, customer success, processing" },
        { category: "G&A & Buffer", amount: "$500K", percentage: 8, detail: "Legal, accounting, office, contingency" }
      ]
    }
  },

  goToMarket: {
    title: "Go-to-Market Strategy",
    phases: [
      {
        phase: "Land",
        timeline: "Months 1-6",
        strategy: "Tower REIT Focus",
        tactics: [
          "Target top 3 tower REITs (American Tower, Crown Castle, SBA)",
          "Offer pilot programs with limited geographic data",
          "Build relationships through industry conferences",
          "Leverage FOIA for initial data set creation"
        ],
        metrics: ["5 paying customers", "2 REIT pilots", "500 municipalities covered"]
      },
      {
        phase: "Expand",
        timeline: "Months 7-12",
        strategy: "Infrastructure Investors",
        tactics: [
          "Expand to infrastructure private equity and hedge funds",
          "Build equipment vendor relationships (Ericsson, Nokia)",
          "Create carrier-specific analytics products",
          "Launch API platform for integration partners"
        ],
        metrics: ["15 customers", "$1.4M ARR", "2 REIT partnerships"]
      },
      {
        phase: "Dominate",
        timeline: "Year 2+",
        strategy: "Market Leadership",
        tactics: [
          "National coverage with 5,000+ municipalities",
          "Real estate vertical launch",
          "M&A advisory product line",
          "International expansion to Canada and Mexico"
        ],
        metrics: ["80+ customers", "$15M ARR", "Market leadership"]
      }
    ],
    channels: [
      { name: "Direct Enterprise Sales", description: "Dedicated sales team targeting tower REITs and infrastructure investors", cost: "High", effectiveness: "Very High" },
      { name: "Industry Conferences", description: "CTIA, Tower Summit, wireless infrastructure events", cost: "Medium", effectiveness: "High" },
      { name: "Content Marketing", description: "Industry reports, market analysis, thought leadership", cost: "Low", effectiveness: "Medium" },
      { name: "Partner Referrals", description: "Equipment vendors, consultants, law firms", cost: "Low", effectiveness: "High" },
      { name: "API Partners", description: "Integration with real estate and financial platforms", cost: "Medium", effectiveness: "Medium" }
    ]
  },

  team: {
    title: "Team Requirements",
    currentNeeds: [
      {
        role: "CEO / Founder",
        skills: "Telecom industry experience, enterprise sales, fundraising",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "CTO",
        skills: "Data engineering, ML/AI, scalable infrastructure",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Data",
        skills: "Data acquisition, municipal relationships, FOIA expertise",
        status: "Seeking",
        priority: "High"
      },
      {
        role: "VP Sales",
        skills: "Enterprise sales, tower REIT relationships, infrastructure investing",
        status: "Seeking",
        priority: "High"
      }
    ],
    advisorNeeds: [
      "Former tower REIT executive (American Tower, Crown Castle)",
      "Carrier network planning executive",
      "Infrastructure private equity investor",
      "Enterprise data/SaaS company founder"
    ],
    orgPlan: {
      year1: "12 FTEs: 5 engineering, 2 data, 3 sales, 2 G&A",
      year2: "30 FTEs: 12 engineering, 5 data, 8 sales, 5 G&A",
      year3: "60 FTEs: 20 engineering, 10 data, 18 sales, 12 G&A"
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "Data Access Restrictions",
        severity: "High",
        likelihood: "Medium",
        description: "Municipalities could restrict access to permit data or charge prohibitive fees for FOIA requests",
        mitigation: "FOIA requests ensure access to public records. Build relationships with forward-thinking municipalities. Diversify data sources. Consider data partnerships."
      },
      {
        risk: "Tower Company Competition",
        severity: "Medium",
        likelihood: "Low",
        description: "American Tower or Crown Castle could build competing intelligence platform in-house",
        mitigation: "Tower companies focused on real estate operations, not software. They're customers, not competitors. Our neutral position is valuable—they won't share data with each other."
      },
      {
        risk: "Enterprise Sales Cycle",
        severity: "Medium",
        likelihood: "High",
        description: "Enterprise customers (tower REITs, infrastructure funds) have long procurement cycles of 6-12 months",
        mitigation: "Start with smaller customers and pilots. Build case studies. Offer trial periods. Be patient with enterprise while building recurring revenue base."
      },
      {
        risk: "Data Quality",
        severity: "High",
        likelihood: "Medium",
        description: "Permit data inconsistent, incomplete, or delayed across municipalities with varying formats",
        mitigation: "Heavy investment in data normalization. ML for data quality. Multiple source triangulation. Transparency about coverage and confidence scores."
      },
      {
        risk: "Technology Execution",
        severity: "Medium",
        likelihood: "Low",
        description: "ML models underperform or data infrastructure doesn't scale",
        mitigation: "Hire experienced CTO with data background. Start with proven technologies. Iterate quickly. Partner with cloud providers for scale."
      },
      {
        risk: "Market Timing",
        severity: "Low",
        likelihood: "Low",
        description: "5G deployment slower than projected or carrier capex reduced",
        mitigation: "5G is mandated by carrier competition. Trend is clear and accelerating. Even at slower pace, infrastructure investment continues. Diversify customer base."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Month 3", milestone: "Data pipeline live for 100 municipalities, MVP platform", status: "planned" },
      { timeline: "Month 6", milestone: "500 municipalities covered, first 5 paying customers", status: "planned" },
      { timeline: "Month 9", milestone: "First tower REIT partnership signed, $800K ARR", status: "planned" },
      { timeline: "Month 12", milestone: "$1.4M ARR, 15 customers, 1,000 municipalities", status: "planned" },
      { timeline: "Month 15", milestone: "2,500 municipalities, predictive analytics launch", status: "planned" },
      { timeline: "Month 18", milestone: "$3M ARR, 30 customers, Series A ready", status: "planned" },
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
      "Hire enterprise sales team and close first REITs",
      "Develop predictive analytics and API platform"
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
    { name: "Telecom Towers Market Global", url: "https://www.precedenceresearch.com/telecom-tower-market", detail: "$29.29B in 2025, $33.69B by 2030" },
    { name: "American Tower Annual Report", url: "https://www.americantower.com/investor-relations/", detail: "220K+ global tower sites, carrier relationships" },
    { name: "Carrier Capex Analysis", url: "https://www.spglobal.com/marketintelligence/en/", detail: "$35B+ annual carrier capex spending" },
    { name: "Small Cell Forum", url: "https://www.smallcellforum.org/", detail: "Small cell deployment trends and forecasts" }
  ]
}

// Helper Components
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

function StatCard({ value, label, sublabel }: { value: string; label: string; sublabel?: string }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
      <div className="text-3xl font-bold text-indigo-600">{value}</div>
      <div className="text-sm font-medium text-gray-900 mt-1">{label}</div>
      {sublabel && <div className="text-xs text-gray-500 mt-1">{sublabel}</div>}
    </div>
  )
}

function ExpandableSection({ title, children, defaultOpen = false }: { title: React.ReactNode; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
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
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <a
            href="/tokens/#framework"
            className="inline-flex items-center gap-2 text-indigo-100 hover:text-white transition-colors mb-6"
          >
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

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.ask.amount}</div>
              <div className="text-sm text-indigo-100">Seed Round</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.marketSize.tam.value}</div>
              <div className="text-sm text-indigo-100">TAM (2028)</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">11.6%</div>
              <div className="text-sm text-indigo-100">Market CAGR</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">18:1</div>
              <div className="text-sm text-indigo-100">LTV:CAC</div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 py-3">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'overview' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Executive Summary
            </button>
            <button
              onClick={() => setActiveTab('detailed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'detailed' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Full Plan
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'financials' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <LineChart className="w-4 h-4 inline mr-2" />
              Financials
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Executive Summary */}
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

            {/* Problem */}
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

            {/* Solution */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Lightbulb} title={businessPlan.solution.title} subtitle={businessPlan.solution.tagline} />

              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.solution.pillars.map((pillar, i) => (
                  <div key={i} className="p-4 bg-indigo-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{pillar.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {pillar.features.map((feature, j) => (
                        <span key={j} className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Now */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Clock} title={businessPlan.whyNow.title} />

              <div className="grid md:grid-cols-3 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => (
                  <div key={i} className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                    <h4 className="font-semibold text-gray-900 mb-2">{factor.title}</h4>
                    <p className="text-sm text-gray-600">{factor.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Market Size */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={PieChart} title={businessPlan.marketSize.title} />

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.tam.label}</div>
                  <div className="text-sm text-indigo-100 mt-1">{businessPlan.marketSize.tam.description}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.sam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.sam.label}</div>
                  <div className="text-sm text-green-100 mt-1">{businessPlan.marketSize.sam.description}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.som.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.som.label}</div>
                  <div className="text-sm text-purple-100 mt-1">{businessPlan.marketSize.som.description}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Adjacent Markets</h4>
                  <div className="space-y-2">
                    {businessPlan.marketSize.additionalMarkets.map((market, i) => (
                      <div key={i} className="flex justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm text-gray-700">{market.name}</span>
                        <span className="text-sm font-medium text-gray-900">{market.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Key Metrics</h4>
                  <div className="space-y-2">
                    {businessPlan.marketSize.keyMetrics.map((metric, i) => (
                      <div key={i} className="flex justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm text-gray-700">{metric.label}</span>
                        <span className="text-sm font-medium text-gray-900">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* The Ask */}
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
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{use}</span>
                      </li>
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
            {/* Competition */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Users} title={businessPlan.competition.title} />

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-medium text-gray-900">Competitor</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-900">Market Position</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-900">Strengths</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-900">Weaknesses</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-900">Threat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {businessPlan.competition.players.map((player, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-3 px-2">
                          <div className="font-medium text-gray-900">{player.name}</div>
                          <div className="text-xs text-gray-500">{player.type}</div>
                        </td>
                        <td className="py-3 px-2 text-sm">{player.marketShare}</td>
                        <td className="py-3 px-2">
                          <ul className="text-xs text-gray-600 space-y-1">
                            {player.strengths.slice(0, 2).map((s, j) => (
                              <li key={j}>+ {s}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="py-3 px-2">
                          <ul className="text-xs text-gray-600 space-y-1">
                            {player.weaknesses.slice(0, 2).map((w, j) => (
                              <li key={j}>- {w}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="py-3 px-2">
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                            player.threat.includes('Customer') ? 'bg-blue-100 text-blue-700' :
                            player.threat === 'Medium' ? 'bg-orange-100 text-orange-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {player.threat}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">{businessPlan.competition.ourAdvantage.title}</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {businessPlan.competition.ourAdvantage.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Product Roadmap */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Wrench} title={businessPlan.product.title} />

              <div className="space-y-6">
                {businessPlan.product.phases.map((phase, i) => (
                  <div key={i} className="border-l-4 border-indigo-400 pl-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded text-xs font-medium">
                        {phase.timeline}
                      </span>
                      <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 mb-3">
                      {phase.deliverables.map((deliverable, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                    <div className="p-2 bg-green-50 rounded text-sm">
                      <span className="font-medium text-green-800">Milestone:</span>{' '}
                      <span className="text-gray-700">{phase.milestone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Business Model */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={DollarSign} title={businessPlan.businessModel.title} />

              <div className="grid gap-4 mb-6">
                {businessPlan.businessModel.revenueStreams.map((stream, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">{stream.name}</h4>
                        <p className="text-sm text-gray-600">{stream.description}</p>
                      </div>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">
                        {stream.margin} margin
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-3 text-sm">
                      <div>
                        <span className="text-gray-500">Pricing:</span>
                        <span className="ml-2 font-medium">{stream.pricing}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Year 1:</span>
                        <span className="ml-2 font-medium">{stream.year1Revenue}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Year 3:</span>
                        <span className="ml-2 font-medium">{stream.year3Revenue}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-indigo-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{businessPlan.businessModel.unitEconomics.title}</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {businessPlan.businessModel.unitEconomics.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">{metric.value}</div>
                      <div className="text-sm font-medium text-gray-900">{metric.label}</div>
                      <div className="text-xs text-gray-500">{metric.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Go-to-Market */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Target} title={businessPlan.goToMarket.title} />

              <div className="space-y-6">
                {businessPlan.goToMarket.phases.map((phase, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{phase.phase}: {phase.strategy}</h4>
                        <span className="text-sm text-gray-500">{phase.timeline}</span>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-2">Tactics</h5>
                        <ul className="space-y-1">
                          {phase.tactics.map((tactic, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                              {tactic}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-2">Success Metrics</h5>
                        <div className="flex flex-wrap gap-2">
                          {phase.metrics.map((metric, j) => (
                            <span key={j} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-gray-900 mb-3">Distribution Channels</h4>
                <div className="grid md:grid-cols-3 gap-3">
                  {businessPlan.goToMarket.channels.map((channel, i) => (
                    <div key={i} className="p-3 border border-gray-200 rounded-lg">
                      <h5 className="font-medium text-gray-900 text-sm">{channel.name}</h5>
                      <p className="text-xs text-gray-600 mt-1">{channel.description}</p>
                      <div className="flex gap-2 mt-2">
                        <span className={`px-1.5 py-0.5 rounded text-xs ${
                          channel.cost === 'Low' ? 'bg-green-100 text-green-700' :
                          channel.cost === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {channel.cost} cost
                        </span>
                        <span className={`px-1.5 py-0.5 rounded text-xs ${
                          channel.effectiveness.includes('High') ? 'bg-green-100 text-green-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {channel.effectiveness}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Team */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Users} title={businessPlan.team.title} />

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {businessPlan.team.currentNeeds.map((need, i) => (
                  <div key={i} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{need.role}</h4>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        need.priority === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {need.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{need.skills}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded text-xs">
                      {need.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">Advisory Board Needs</h4>
                  <ul className="space-y-2">
                    {businessPlan.team.advisorNeeds.map((advisor, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <Award className="w-4 h-4 text-indigo-500" />
                        {advisor}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">Organization Plan</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year 1:</span>
                      <span className="font-medium text-gray-900">{businessPlan.team.orgPlan.year1}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year 2:</span>
                      <span className="font-medium text-gray-900">{businessPlan.team.orgPlan.year2}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year 3:</span>
                      <span className="font-medium text-gray-900">{businessPlan.team.orgPlan.year3}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Risks */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Shield} title={businessPlan.risks.title} />

              <div className="space-y-4">
                {businessPlan.risks.risks.map((risk, i) => (
                  <ExpandableSection key={i} title={
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        risk.severity === 'High' ? 'bg-red-100 text-red-700' :
                        risk.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {risk.severity}
                      </span>
                      <span>{risk.risk}</span>
                    </div>
                  }>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Likelihood:</span>
                        <span className="ml-2 text-sm text-gray-600">{risk.likelihood}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-700">Description:</span>
                        <p className="text-sm text-gray-600 mt-1">{risk.description}</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded">
                        <span className="text-sm font-medium text-green-800">Mitigation:</span>
                        <p className="text-sm text-gray-700 mt-1">{risk.mitigation}</p>
                      </div>
                    </div>
                  </ExpandableSection>
                ))}
              </div>
            </section>

            {/* Milestones */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={Target} title={businessPlan.milestones.title} />

              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-200" />
                <div className="space-y-4">
                  {businessPlan.milestones.items.map((item, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-indigo-500 border-2 border-white" />
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-indigo-600">{item.timeline}</span>
                        <p className="text-gray-700 mt-1">{item.milestone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'financials' && (
          <div className="space-y-8">
            {/* Financial Projections */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={LineChart} title="Financial Projections" />

              <div className="space-y-8">
                {/* Scenario 1: Full Model */}
                <div className="p-4 bg-indigo-50 rounded-lg border-2 border-indigo-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-indigo-600 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withEquipmentFinancing.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withEquipmentFinancing.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-indigo-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Customers</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withEquipmentFinancing.years.map((year, i) => (
                          <tr key={i} className="border-b border-indigo-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.shops}</td>
                            <td className="py-2 px-3 text-right">{year.arr}</td>
                            <td className={`py-2 px-3 text-right ${year.burn === '$0' ? 'text-green-600' : 'text-red-600'}`}>
                              {year.burn}
                            </td>
                            <td className="py-2 px-3 text-right text-sm">{year.runway}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-3 bg-white rounded">
                    <h5 className="text-sm font-medium text-gray-900 mb-2">Key Assumptions</h5>
                    <ul className="grid md:grid-cols-2 gap-1">
                      {businessPlan.financials.scenarios.withEquipmentFinancing.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-indigo-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-indigo-600">
                      Funding Required: {businessPlan.financials.scenarios.withEquipmentFinancing.fundingRequired}
                    </span>
                  </div>
                </div>

                {/* Scenario 2: Conservative */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{businessPlan.financials.scenarios.withoutEquipmentFinancing.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withoutEquipmentFinancing.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Customers</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutEquipmentFinancing.years.map((year, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.shops}</td>
                            <td className="py-2 px-3 text-right">{year.arr}</td>
                            <td className={`py-2 px-3 text-right ${year.burn === '$0' ? 'text-green-600' : 'text-red-600'}`}>
                              {year.burn}
                            </td>
                            <td className="py-2 px-3 text-right text-sm">{year.runway}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-3 bg-white rounded">
                    <h5 className="text-sm font-medium text-gray-900 mb-2">Key Assumptions</h5>
                    <ul className="grid md:grid-cols-2 gap-1">
                      {businessPlan.financials.scenarios.withoutEquipmentFinancing.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-gray-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-gray-600">
                      Funding Required: {businessPlan.financials.scenarios.withoutEquipmentFinancing.fundingRequired}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Use of Funds */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={DollarSign} title={businessPlan.financials.useOfFunds.title} />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {businessPlan.financials.useOfFunds.breakdown.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-16 text-right">
                        <span className="text-lg font-bold text-indigo-600">{item.percentage}%</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-6 bg-gray-200 rounded overflow-hidden">
                          <div
                            className="h-full bg-indigo-500 rounded"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                      <div className="w-32">
                        <div className="font-medium text-gray-900">{item.amount}</div>
                        <div className="text-xs text-gray-500">{item.category}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {businessPlan.financials.useOfFunds.breakdown.map((item, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded">
                      <h4 className="font-medium text-gray-900 text-sm">{item.category}</h4>
                      <p className="text-xs text-gray-600 mt-1">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Unit Economics Detail */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <SectionHeader icon={BarChart3} title="Unit Economics" />

              <div className="grid md:grid-cols-3 gap-4">
                {businessPlan.businessModel.unitEconomics.metrics.map((metric, i) => (
                  <div key={i} className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-indigo-600">{metric.value}</div>
                    <div className="text-sm font-medium text-gray-900 mt-1">{metric.label}</div>
                    <div className="text-xs text-gray-500 mt-1">{metric.note}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Sources */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-8">
          <SectionHeader icon={ExternalLink} title="Sources & References" />

          <div className="grid md:grid-cols-2 gap-3">
            {businessPlan.sources.map((source, i) => (
              <a
                key={i}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm group-hover:text-indigo-600 transition-colors">
                      {source.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{source.detail}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">{businessPlan.companyName}</h3>
          <p className="text-gray-400">{businessPlan.tagline}</p>
          <p className="text-gray-500 text-sm mt-4">
            {businessPlan.version} | {businessPlan.date}
          </p>
          <div className="mt-6">
            <a
              href="https://hyder.me/#contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Briefcase className="w-5 h-5" />
              Contact for Investment Inquiries
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
