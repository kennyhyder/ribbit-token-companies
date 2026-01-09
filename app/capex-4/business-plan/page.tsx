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
  FileText,
  Briefcase,
  Lightbulb,
  Globe,
  Award,
  PieChart,
  LineChart,
  Plug,
  Battery,
  MapPin
} from 'lucide-react'

// Business Plan Data
const businessPlan = {
  companyName: "ChargeScore",
  tagline: "The TripAdvisor for EV Charging",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "EV charging reliability is terrible - 16% of charging attempts fail. ChargePoint, Electrify America, and EVgo score 59-66 on reliability. Drivers have 'charger anxiety' and no trustworthy data.",
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
        title: "Reliability Crisis",
        detail: "Q1 2025 saw 1.4 point improvement in reliability index, but networks still average only 60-66%. Gap is glaring.",
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
      { name: "U.S. EV Charging Market", value: "$5.09B (2024)", cagr: "30.3%" },
      { name: "DC Fast Charging (US)", value: "68K stalls (2025)", cagr: "33%" },
      { name: "Public Charging Points", value: "200K+ (2024)", cagr: "20%" },
      { name: "EV Navigation Software", value: "$2.1B (2025)", cagr: "18%" }
    ],
    keyMetrics: [
      { label: "Average DC fast charge", value: "$15-$30" },
      { label: "Chargers per EV needed", value: "1:20 ratio" },
      { label: "Network utilization rate", value: "8-15%" },
      { label: "Driver reliability premium", value: "20%+ willing to pay" }
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
        strengths: ["Largest US network", "Hardware control", "Enterprise focus", "Established brand"],
        weaknesses: ["59% reliability score", "Won't share bad data", "Conflict of interest", "Slow innovation"],
        threat: "Low - they're the problem"
      },
      {
        name: "Electrify America",
        type: "Network Operator",
        marketShare: "~5K DC stalls",
        strengths: ["VW backing", "Highway focus", "350kW capability", "Growing fast"],
        weaknesses: ["66% reliability score", "Software issues", "Won't share reliability", "Customer complaints"],
        threat: "Low - they're the problem"
      },
      {
        name: "A Better Route Planner",
        type: "Route Planning",
        marketShare: "Enthusiast niche",
        strengths: ["Technical depth", "EV enthusiast loyalty", "Good routing", "Detailed data"],
        weaknesses: ["Complex UX", "Limited reliability data", "Small team", "Niche audience"],
        threat: "Low - different focus"
      }
    ],
    ourAdvantage: {
      title: "ChargeScore's Unfair Advantages",
      points: [
        "Reliability-first positioning captures driver trust before competitors pivot",
        "Crowdsourced data creates accuracy that networks can't match due to conflicts of interest",
        "OEM partnerships for in-dash integration create distribution moat",
        "Utility/DOE channel for infrastructure intelligence diversifies revenue",
        "Network-agnostic positioning enables honest reliability scoring"
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
          "Mobile app (iOS + Android) with reliability scoring",
          "Crowdsourced reporting system with gamification",
          "Integration with major network APIs (ChargePoint, EA, EVgo)",
          "Basic route planning with reliability weighting",
          "User review and photo verification system"
        ],
        milestone: "500K users, reliability scores for 50K+ chargers"
      },
      {
        phase: "Phase 2: Scale",
        timeline: "Months 7-12",
        deliverables: [
          "Advanced ML-based reliability predictions",
          "Real-time wait time estimation",
          "First OEM integration (targeting Rivian or Lucid)",
          "Infrastructure intelligence dashboard for utilities",
          "Premium subscription tier launch"
        ],
        milestone: "2M users, first OEM deal, $1.4M ARR"
      },
      {
        phase: "Phase 3: Dominate",
        timeline: "Year 2-3",
        deliverables: [
          "In-dash integration with 5+ automakers",
          "DOE/NEVI compliance reporting tools",
          "Fleet management charging intelligence",
          "Predictive maintenance alerts for operators",
          "International expansion (EU, Canada)"
        ],
        milestone: "$26M ARR, 10M users, market leader"
      }
    ]
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
        { label: "Gross Margin", value: "85%", note: "Pure software model" },
        { label: "Lifetime Value (LTV)", value: "$35", note: "4+ year EV ownership cycle" },
        { label: "LTV:CAC Ratio", value: "12:1", note: "Strong consumer economics" },
        { label: "Payback Period", value: "5 months", note: "Fast capital efficiency" }
      ]
    }
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withOEMDeals: {
        name: "Full Model with OEM Deals (Recommended)",
        description: "Consumer app + OEM licensing + infrastructure intelligence creates diversified revenue",
        years: [
          { year: 1, revenue: "$1.4M", users: 500000, arr: "$1.4M", burn: "$3.6M", runway: "16 months" },
          { year: 2, revenue: "$6M", users: 2000000, arr: "$6M", burn: "$1.5M", runway: "Profitable path" },
          { year: 3, revenue: "$26M", users: 5000000, arr: "$26M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$55M", users: 10000000, arr: "$55M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$100M", users: 18000000, arr: "$100M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$5M Seed",
        keyAssumptions: [
          "500K users Year 1, growing to 18M by Year 5",
          "First OEM deal by end of Year 1 ($500K+ value)",
          "3 utility/DOE contracts by Year 2 ($400K+ value)",
          "5% premium conversion rate on consumer app",
          "85% gross margin at scale across all revenue"
        ]
      },
      consumerOnly: {
        name: "Consumer-Only Model (Conservative)",
        description: "Focus on consumer app with premium subscriptions and advertising only",
        years: [
          { year: 1, revenue: "$500K", users: 300000, arr: "$500K", burn: "$2M", runway: "30 months" },
          { year: 2, revenue: "$2M", users: 1000000, arr: "$2M", burn: "$1M", runway: "24 months" },
          { year: 3, revenue: "$6M", users: 2500000, arr: "$6M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$12M", users: 5000000, arr: "$12M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$25M", users: 10000000, arr: "$25M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$2.5M Seed",
        keyAssumptions: [
          "Slower user growth without OEM distribution",
          "Higher CAC ($8) without in-dash integration",
          "Pure ad + premium model limits upside",
          "No enterprise revenue stream",
          "Longer path to profitability"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $5M Seed Funds",
      breakdown: [
        { category: "Engineering & Product", amount: "$2.0M", percentage: 40, detail: "App development, data infrastructure, ML/AI systems" },
        { category: "Growth & Marketing", amount: "$1.25M", percentage: 25, detail: "User acquisition, community building, brand" },
        { category: "Business Development", amount: "$1.0M", percentage: 20, detail: "OEM partnerships, enterprise sales, utility deals" },
        { category: "Data & Operations", amount: "$500K", percentage: 10, detail: "Data quality, moderation, customer support" },
        { category: "G&A & Buffer", amount: "$250K", percentage: 5, detail: "Legal, accounting, office, contingency" }
      ]
    }
  },

  goToMarket: {
    title: "Go-to-Market Strategy",
    phases: [
      {
        phase: "Land",
        timeline: "Months 1-6",
        strategy: "Viral Consumer Growth",
        tactics: [
          "Launch iOS/Android app with reliability-first positioning",
          "Target EV enthusiast communities (Reddit, forums, Facebook groups)",
          "Gamify crowdsourced reporting with badges and leaderboards",
          "Partner with EV YouTubers and influencers for organic reach"
        ],
        metrics: ["500K app downloads", "50K monthly active users", "NPS > 60"]
      },
      {
        phase: "Expand",
        timeline: "Months 7-12",
        strategy: "Enterprise & OEM Partnerships",
        tactics: [
          "Approach EV-native automakers (Rivian, Lucid, Polestar) first",
          "Build DOE/utility relationships through NEVI compliance angle",
          "Launch premium tier with advanced features",
          "Create API for fleet management integrations"
        ],
        metrics: ["First OEM LOI signed", "2 utility pilots", "$1.4M ARR"]
      },
      {
        phase: "Dominate",
        timeline: "Year 2+",
        strategy: "Platform & Ecosystem",
        tactics: [
          "Expand to legacy automakers (Ford, GM, VW)",
          "Launch infrastructure intelligence product suite",
          "International expansion starting with EU markets",
          "Build network operator partnerships (data feedback loop)"
        ],
        metrics: ["5+ OEM deals", "10M+ users", "$26M ARR"]
      }
    ],
    channels: [
      { name: "App Stores", description: "Organic discovery + ASO optimization", cost: "Low", effectiveness: "High" },
      { name: "EV Communities", description: "Reddit, forums, Facebook groups, enthusiast sites", cost: "Low", effectiveness: "Very High" },
      { name: "Influencer Marketing", description: "EV YouTubers, reviewers, and thought leaders", cost: "Medium", effectiveness: "High" },
      { name: "OEM Integration", description: "In-dash pre-installation distribution", cost: "Low", effectiveness: "Very High" },
      { name: "Trade Shows", description: "CES, auto shows for enterprise leads", cost: "High", effectiveness: "Medium" }
    ]
  },

  team: {
    title: "Team Requirements",
    currentNeeds: [
      {
        role: "CEO / Founder",
        skills: "Consumer tech experience, fundraising, vision for EV/mobility",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "CTO",
        skills: "Mobile development, ML/AI, real-time data systems",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Product",
        skills: "Consumer app experience, EV/automotive knowledge",
        status: "Seeking",
        priority: "High"
      },
      {
        role: "VP Business Development",
        skills: "Automotive OEM relationships, enterprise sales experience",
        status: "Seeking",
        priority: "High"
      }
    ],
    advisorNeeds: [
      "Former automotive OEM executive (product or partnerships)",
      "EV charging network executive (operations perspective)",
      "Consumer app growth expert (100M+ scale)",
      "DOE/utility sector expert (policy and funding)"
    ],
    orgPlan: {
      year1: "12 FTEs: 6 engineering, 2 product, 2 growth, 2 BD/ops",
      year2: "30 FTEs: 15 engineering, 4 product, 5 growth, 4 BD, 2 ops",
      year3: "75 FTEs: 35 engineering, 10 product, 15 growth, 10 BD, 5 ops"
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "Charging Networks Block Data Access",
        severity: "Medium",
        likelihood: "Medium",
        description: "Networks could restrict API access or try to block crowdsourced data collection efforts",
        mitigation: "Crowdsourced data doesn't require network cooperation. Focus on driver-reported data first. Networks actually have incentive to show reliability improvements - we can be allies, not adversaries."
      },
      {
        risk: "PlugShare Competitive Response",
        severity: "Medium",
        likelihood: "High",
        description: "PlugShare could add reliability features and aggressively defend their market position with their existing user base",
        mitigation: "Move fast to establish reliability-first brand positioning. PlugShare's ad-supported model creates conflict of interest with honest scoring. OEM deals create distribution moat they can't match."
      },
      {
        risk: "OEM Deal Cycles Take Longer",
        severity: "Medium",
        likelihood: "Medium",
        description: "Automaker partnerships have notoriously long sales cycles (12-24 months) which could delay revenue",
        mitigation: "Build consumer base first for leverage and proof points. Start with EV-native brands (Rivian, Lucid) who move faster. Consumer revenue provides runway while enterprise develops."
      },
      {
        risk: "Charging Reliability Improves Significantly",
        severity: "Low",
        likelihood: "Medium",
        description: "If networks rapidly fix reliability issues, the core value proposition could weaken",
        mitigation: "Even at 95%+ reliability, drivers still want confirmation before trips. Expand to wait times, pricing, amenities, speed verification. Intelligence value remains regardless of reliability levels."
      },
      {
        risk: "Data Quality & Trust Issues",
        severity: "Medium",
        likelihood: "Low",
        description: "Crowdsourced data could be gamed or inaccurate, damaging user trust",
        mitigation: "Implement robust verification systems, cross-reference with network APIs where available, use ML to detect anomalies. Reputation system for contributors. Quality is the moat."
      },
      {
        risk: "Funding Environment Deteriorates",
        severity: "Medium",
        likelihood: "Low",
        description: "EV/cleantech funding could cool, making Series A more difficult",
        mitigation: "Conservative burn rate, multiple revenue streams for faster path to profitability. $5M provides 18+ months runway. Consumer model is capital-efficient."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Month 3", milestone: "App launched (iOS + Android), 50K users, reliability scoring for top 10 markets", status: "planned" },
      { timeline: "Month 6", milestone: "500K users, first utility pilot signed, active OEM conversations", status: "planned" },
      { timeline: "Month 9", milestone: "1M users, first OEM LOI signed, premium tier launched", status: "planned" },
      { timeline: "Month 12", milestone: "$1.4M ARR, 2M users, first OEM deal closed, Series A preparation", status: "planned" },
      { timeline: "Month 18", milestone: "5M users, 3 OEM deals, $4M ARR, Series A raised", status: "planned" },
      { timeline: "Month 24", milestone: "$6M ARR, 8M users, in-dash integration live with first OEM partner", status: "planned" },
      { timeline: "Year 3", milestone: "$26M ARR, 10M users, market leader position, international expansion", status: "planned" }
    ]
  },

  ask: {
    title: "The Ask",
    amount: "$5,000,000",
    round: "Seed Round",
    terms: "SAFE or Priced Round at $20M post-money valuation",
    useOfFunds: [
      "Build world-class mobile app and data platform",
      "Acquire first 500K users through viral growth and community",
      "Secure first OEM partnership for in-dash integration",
      "Launch infrastructure intelligence product for utilities/DOE"
    ],
    timeline: "18-month runway to Series A milestones",
    seriesA: {
      timing: "Month 15-18",
      metrics: "5M users, $4M ARR, 2+ OEM deals signed",
      raise: "$20-30M at $100-150M valuation"
    }
  },

  sources: [
    { name: "EV Charging Infrastructure Market Size", url: "https://www.datamintelligence.com/research-report/ev-charging-infrastructure-market", detail: "$31.1B (2025) to $113.4B (2032), 20.3% CAGR global growth" },
    { name: "U.S. EV Charging Market Report", url: "https://www.grandviewresearch.com/industry-analysis/us-electric-vehicle-charging-infrastructure-evci-market", detail: "$5.09B (2024), fastest-growing at 30.3% CAGR" },
    { name: "Vecharged Reliability Report 2025", url: "https://vecharged.com/news/ev-charger-reliability-report-2025/", detail: "Network reliability scores: ChargePoint 59%, EA 66%, EVgo 64%" },
    { name: "Paren Q2 2025 Industry Report", url: "https://www.paren.app/reports/state-of-the-industry-report-us-ev-fast-charging-q2-2025", detail: "84% charging success rate, 16% failure rate documented" },
    { name: "DC Fast Charging Networks Jan 2026", url: "https://evchargingstations.com/chargingnews/largest-dc-fast-charging-networks-jan-2026/", detail: "68K DC fast charging stalls, 33% YoY growth" },
    { name: "NEVI Federal Funding Program", url: "https://www.fhwa.dot.gov/environment/nevi/", detail: "$7.5B federal infrastructure investment in EV charging" },
    { name: "J.D. Power EV Experience Study", url: "https://www.jdpower.com/business/press-releases/2024-us-electric-vehicle-experience-evx-public-charging-study", detail: "Public charging satisfaction and reliability metrics" },
    { name: "BloombergNEF EV Outlook", url: "https://about.bnef.com/electric-vehicle-outlook/", detail: "EV adoption projections and charging infrastructure needs" }
  ]
}

// Helper Components
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

function StatCard({ value, label, sublabel }: { value: string; label: string; sublabel?: string }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
      <div className="text-3xl font-bold text-green-600">{value}</div>
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
      <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <a
            href="/tokens/#framework"
            className="inline-flex items-center gap-2 text-green-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cap-Ex Opportunities
          </a>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Plug className="w-6 h-6" />
                </div>
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

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.ask.amount}</div>
              <div className="text-sm text-green-100">Seed Round</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.marketSize.tam.value}</div>
              <div className="text-sm text-green-100">TAM (2032)</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">20.3%</div>
              <div className="text-sm text-green-100">Market CAGR</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">12:1</div>
              <div className="text-sm text-green-100">LTV:CAC</div>
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
                activeTab === 'overview' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Executive Summary
            </button>
            <button
              onClick={() => setActiveTab('detailed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'detailed' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Full Plan
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'financials' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'
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
                  <div key={i} className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{pillar.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {pillar.features.map((feature, j) => (
                        <span key={j} className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs">
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
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.tam.label}</div>
                  <div className="text-sm text-green-100 mt-1">{businessPlan.marketSize.tam.description}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.sam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.sam.label}</div>
                  <div className="text-sm text-teal-100 mt-1">{businessPlan.marketSize.sam.description}</div>
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
                            player.threat.includes('Medium') ? 'bg-yellow-100 text-yellow-700' :
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

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">{businessPlan.competition.ourAdvantage.title}</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {businessPlan.competition.ourAdvantage.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
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
                  <div key={i} className="border-l-4 border-green-400 pl-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">
                        {phase.timeline}
                      </span>
                      <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 mb-3">
                      {phase.deliverables.map((deliverable, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                    <div className="p-2 bg-emerald-50 rounded text-sm">
                      <span className="font-medium text-emerald-800">Milestone:</span>{' '}
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

              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{businessPlan.businessModel.unitEconomics.title}</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {businessPlan.businessModel.unitEconomics.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-green-600">{metric.value}</div>
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
                      <span className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">
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
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
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
                    <span className="inline-block mt-2 px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs">
                      {need.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">Advisory Board Needs</h4>
                  <ul className="space-y-2">
                    {businessPlan.team.advisorNeeds.map((advisor, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <Award className="w-4 h-4 text-green-500" />
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
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-200" />
                <div className="space-y-4">
                  {businessPlan.milestones.items.map((item, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-green-500 border-2 border-white" />
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-green-600">{item.timeline}</span>
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
                {/* Scenario 1: With OEM Deals */}
                <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-green-600 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withOEMDeals.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withOEMDeals.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-green-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Users</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withOEMDeals.years.map((year, i) => (
                          <tr key={i} className="border-b border-green-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.users.toLocaleString()}</td>
                            <td className="py-2 px-3 text-right">{year.arr}</td>
                            <td className={`py-2 px-3 text-right ${year.burn === '$0' ? 'text-green-600' : 'text-red-600'}`}>
                              {year.burn}
                            </td>
                            <td className="py-2 px-3 text-right text-sm text-gray-600">{year.runway}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-3 bg-white rounded">
                    <h5 className="text-sm font-medium text-gray-900 mb-2">Key Assumptions</h5>
                    <ul className="grid md:grid-cols-2 gap-1">
                      {businessPlan.financials.scenarios.withOEMDeals.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-green-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-green-600">
                      Funding Required: {businessPlan.financials.scenarios.withOEMDeals.fundingRequired}
                    </span>
                  </div>
                </div>

                {/* Scenario 2: Consumer Only */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{businessPlan.financials.scenarios.consumerOnly.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.consumerOnly.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Users</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.consumerOnly.years.map((year, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.users.toLocaleString()}</td>
                            <td className="py-2 px-3 text-right">{year.arr}</td>
                            <td className={`py-2 px-3 text-right ${year.burn === '$0' ? 'text-green-600' : 'text-red-600'}`}>
                              {year.burn}
                            </td>
                            <td className="py-2 px-3 text-right text-sm text-gray-600">{year.runway}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-3 bg-white rounded">
                    <h5 className="text-sm font-medium text-gray-900 mb-2">Key Assumptions</h5>
                    <ul className="grid md:grid-cols-2 gap-1">
                      {businessPlan.financials.scenarios.consumerOnly.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-gray-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-gray-600">
                      Funding Required: {businessPlan.financials.scenarios.consumerOnly.fundingRequired}
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
                        <span className="text-lg font-bold text-green-600">{item.percentage}%</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-6 bg-gray-200 rounded overflow-hidden">
                          <div
                            className="h-full bg-green-500 rounded"
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
                  <div key={i} className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-green-600">{metric.value}</div>
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
                    <h4 className="font-medium text-gray-900 text-sm group-hover:text-green-600 transition-colors">
                      {source.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{source.detail}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0" />
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
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
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
