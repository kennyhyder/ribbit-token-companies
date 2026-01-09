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
  Thermometer,
  Server,
  Network,
  Database
} from 'lucide-react'

// Business Plan Data
const businessPlan = {
  companyName: "BuildingIQ",
  tagline: "The Intelligence Layer Breaking OEM Lock-in for Building Controls",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Johnson Controls, Trane, and Carrier dominate commercial HVAC but installers and servicers are fragmented. Building Automation Systems (BAS) are proprietary nightmares with zero interoperability. Building owners are locked into single vendors, paying 3-5x premium for simple integrations and losing $billions in energy optimization opportunities.",
    solution: "BuildingIQ aggregates HVAC contractors into a credentialed network, standardizes BAS data extraction across proprietary systems, and creates building energy intelligence. We enable third-party optimization without OEM lock-in, becoming the interoperability layer building owners trust.",
    market: "$191B building automation systems market growing at 13.4% CAGR. Commercial HVAC market at $72B in 2025. Building owners waste 20-30% on energy costs due to siloed systems. ESG mandates and building performance standards driving urgent demand.",
    ask: "$5M Seed Round to build contractor network platform, develop BAS data extraction protocols, and establish utility partnerships that break OEM lock-in."
  },

  problem: {
    title: "The Building Controls Lock-in Crisis",
    points: [
      {
        title: "OEM Proprietary Lock-in",
        detail: "Johnson Controls, Trane, and Carrier use proprietary protocols. Want to connect your Trane rooftop unit to Johnson Controls BAS? That'll be $50K and 6 months. Building owners are trapped.",
        stat: "Zero",
        statLabel: "interoperability between major OEMs"
      },
      {
        title: "Contractor Fragmentation",
        detail: "~15,000 commercial HVAC contractors exist but lack standardization, quality metrics, and BAS expertise. Building owners can't assess contractor capabilities or pricing fairness.",
        stat: "15,000+",
        statLabel: "fragmented contractors with no quality standard"
      },
      {
        title: "Energy Waste at Scale",
        detail: "Buildings consume 40% of U.S. energy. Without unified data, optimization is impossible. Buildings waste 20-30% of HVAC energy due to siloed controls and poor commissioning.",
        stat: "20-30%",
        statLabel: "energy wasted due to siloed systems"
      },
      {
        title: "ESG Compliance Gap",
        detail: "New building performance standards (NYC LL97, CA Title 24) require energy reporting. Building owners can't extract data from proprietary BAS systems to prove compliance.",
        stat: "40+ Cities",
        statLabel: "with building performance mandates"
      }
    ]
  },

  solution: {
    title: "BuildingIQ: Unified Intelligence for Building Controls",
    tagline: "Aggregate. Extract. Optimize. Liberate.",
    pillars: [
      {
        icon: "Network",
        title: "Contractor Network",
        description: "Aggregated network of credentialed HVAC contractors with verified BAS capabilities, coverage areas, and equipment certifications.",
        features: ["500+ contractor profiles", "BAS capability verification", "Coverage mapping", "Real-time availability"]
      },
      {
        icon: "Database",
        title: "BAS Data Extraction",
        description: "Universal data extraction from proprietary BAS systems (JCI, Trane, Carrier, Siemens). One API for all building controls data.",
        features: ["20+ BAS protocol support", "Real-time data streaming", "Historical data migration", "Vendor-agnostic platform"]
      },
      {
        icon: "BarChart3",
        title: "Energy Intelligence",
        description: "Building energy analytics powered by cross-system data. Identify optimization opportunities and benchmark against similar buildings.",
        features: ["Energy benchmarking", "Fault detection", "Optimization recommendations", "ROI modeling"]
      },
      {
        icon: "Zap",
        title: "Third-Party Optimization",
        description: "Enable any optimization vendor to connect to any building. Break the OEM stranglehold on energy management.",
        features: ["Open API platform", "Third-party app marketplace", "Utility program integration", "Performance verification"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "Building Performance Standards",
        detail: "NYC Local Law 97, CA Title 24, and 40+ cities mandating building energy reporting. Owners need unified data to comply. Fines starting 2024.",
        icon: "FileText"
      },
      {
        title: "ESG Investment Mandates",
        detail: "Real estate investors requiring ESG metrics. Can't get building performance data without unified platform. $30T+ in ESG-focused capital.",
        icon: "TrendingUp"
      },
      {
        title: "Utility Decarbonization",
        detail: "Utilities offering $100M+ C&I efficiency incentives. Need standardized M&V data to verify savings. BuildingIQ becomes the verification layer.",
        icon: "DollarSign"
      },
      {
        title: "OEM Antitrust Pressure",
        detail: "Right-to-repair momentum and interoperability requirements in government contracts. OEMs losing ability to maintain closed ecosystems.",
        icon: "Globe"
      },
      {
        title: "Smart Building Boom",
        detail: "Smart building market growing at 18.9% CAGR to $554B by 2033. Retrofit projects capturing 62.5% of market. Massive modernization opportunity.",
        icon: "Building2"
      }
    ]
  },

  marketSize: {
    title: "Market Opportunity",
    tam: {
      value: "$191B",
      label: "Total Addressable Market",
      description: "Global Building Automation Systems by 2030",
      source: "MarketsandMarkets"
    },
    sam: {
      value: "$45B",
      label: "Serviceable Addressable Market",
      description: "U.S. Commercial BAS + HVAC Service",
      source: "Fortune Business Insights"
    },
    som: {
      value: "$105M",
      label: "Serviceable Obtainable Market",
      description: "Year 5 revenue target with utility partnerships",
      source: "Bottom-up analysis"
    },
    additionalMarkets: [
      { name: "Commercial HVAC Systems", value: "$72B (2025)", cagr: "5.7%" },
      { name: "Smart Building Management", value: "$111.5B (2025)", cagr: "10.7%" },
      { name: "Energy Management Software", value: "$8.2B (2025)", cagr: "14.2%" },
      { name: "Building Analytics", value: "$4.5B (2025)", cagr: "16.8%" }
    ],
    keyMetrics: [
      { label: "Buildings needing BAS modernization", value: "500,000+" },
      { label: "Average BAS retrofit cost", value: "$50K-$500K" },
      { label: "Energy savings from optimization", value: "15-30%" },
      { label: "Annual HVAC service spend per building", value: "$25K-$100K" }
    ]
  },

  competition: {
    title: "Competitive Landscape",
    players: [
      {
        name: "Johnson Controls",
        type: "BAS Market Leader",
        marketShare: "~25%",
        strengths: ["Market leader (25% share)", "Integrated hardware/software", "Enterprise relationships", "Global service network"],
        weaknesses: ["Proprietary lock-in backlash", "Premium pricing (3-5x)", "Slow innovation", "Antitrust risk"],
        threat: "Incumbent to disrupt"
      },
      {
        name: "Trane Technologies",
        type: "HVAC Equipment Leader",
        marketShare: "~18%",
        strengths: ["HVAC equipment dominance", "Energy efficiency expertise", "Service network", "Brand trust"],
        weaknesses: ["Limited BAS interoperability", "Equipment-centric (not software)", "Slow to cloud", "Contractor conflicts"],
        threat: "Partner not competitor"
      },
      {
        name: "Carrier Global",
        type: "HVAC & Controls",
        marketShare: "~15%",
        strengths: ["Strong in light commercial", "Distribution network", "Residential crossover", "UTC heritage"],
        weaknesses: ["Weaker enterprise presence", "BAS less sophisticated", "Integration limitations", "Fragmented products"],
        threat: "Low"
      },
      {
        name: "Independent Contractors",
        type: "Fragmented",
        marketShare: "~40% of service",
        strengths: ["Local relationships", "Lower pricing", "Flexible service", "Faster response"],
        weaknesses: ["No BAS expertise", "Limited scale", "Quality variability", "No data platform"],
        threat: "Partners not competitors"
      }
    ],
    ourAdvantage: {
      title: "BuildingIQ's Unfair Advantages",
      points: [
        "Network effect: More contractors = better coverage + more building data = more owner adoption = more contractor demand",
        "Data moat: First standardized BAS extraction layer becomes the industry utility",
        "Vendor-agnostic: We help building owners, not equipment manufacturers",
        "Cap-Ex alignment: Utility and ESG programs fund as infrastructure investment",
        "No channel conflict: We empower contractors and building owners, not compete with them"
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
          "Contractor onboarding platform with BAS certification tracking",
          "BAS data extraction for top 5 protocols (BACnet, Modbus, LonWorks, N2, Metasys)",
          "Building owner dashboard with unified equipment view",
          "Basic energy benchmarking and fault detection",
          "Contractor matching and job management"
        ],
        milestone: "100 contractors, 50 building pilots, first BAS integrations"
      },
      {
        phase: "Phase 2: Intelligence",
        timeline: "Months 7-12",
        deliverables: [
          "Advanced energy analytics with ML-powered optimization",
          "Utility program integration for automated M&V",
          "Third-party vendor API marketplace",
          "ESG reporting automation and compliance tracking",
          "Real-time fault detection and predictive maintenance"
        ],
        milestone: "250 contractors, 5 utility partnerships, $3.5M ARR"
      },
      {
        phase: "Phase 3: Scale",
        timeline: "Year 2-3",
        deliverables: [
          "National contractor network (500+ certified contractors)",
          "Full protocol library (20+ BAS systems supported)",
          "AI-powered optimization recommendations",
          "Grid-responsive demand management integration",
          "White-label platform for enterprise portfolios"
        ],
        milestone: "$38M ARR, market leadership, strategic acquisition interest"
      }
    ]
  },

  businessModel: {
    title: "Business Model",
    revenueStreams: [
      {
        name: "Platform Transaction Fees",
        description: "Percentage of service contract value for HVAC jobs facilitated through platform matching",
        pricing: "2-4% of contract value",
        margin: "92%",
        year1Revenue: "$850K",
        year3Revenue: "$12M"
      },
      {
        name: "Contractor SaaS Subscriptions",
        description: "Monthly subscription for contractors to access network, build quality scores, and receive service opportunities",
        pricing: "$1,500-$8,000/month based on capabilities",
        margin: "88%",
        year1Revenue: "$1.6M",
        year3Revenue: "$14M"
      },
      {
        name: "Building Owner Data Licensing",
        description: "API access to unified building data, energy benchmarking, and optimization recommendations",
        pricing: "$50K-$200K annual contracts",
        margin: "90%",
        year1Revenue: "$900K",
        year3Revenue: "$8M"
      },
      {
        name: "Utility Program Partnerships",
        description: "Performance verification and M&V services for utility efficiency programs",
        pricing: "$200-500 per building/year + savings share",
        margin: "75%",
        year1Revenue: "$450K",
        year3Revenue: "$4M"
      }
    ],
    unitEconomics: {
      title: "Unit Economics",
      metrics: [
        { label: "Customer Acquisition Cost (CAC)", value: "$15,000", note: "Blended contractor + building owner" },
        { label: "Lifetime Value (LTV)", value: "$195,000", note: "Multi-year contracts + expansion" },
        { label: "LTV:CAC Ratio", value: "13:1", note: "Exceptional unit economics" },
        { label: "Gross Margin", value: "84%", note: "Software + data margins" },
        { label: "Payback Period", value: "8 months", note: "Fast capital efficiency" },
        { label: "Net Revenue Retention", value: "125%", note: "Strong expansion revenue" }
      ]
    }
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withUtilityData: {
        name: "With Utility & Cap-Ex Partnerships (Recommended)",
        description: "Deep utility and equipment finance integration creates data moat and recurring revenue",
        years: [
          { year: 1, revenue: "$3.8M", shops: 80, arr: "$3.8M", burn: "$2.5M", runway: "18 months" },
          { year: 2, revenue: "$14M", shops: 175, arr: "$14M", burn: "$1M", runway: "Profitable Y3" },
          { year: 3, revenue: "$38M", shops: 280, arr: "$38M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$65M", shops: 350, arr: "$65M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$105M", shops: 450, arr: "$105M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$5M Seed",
        keyAssumptions: [
          "5 major building owners sign in Year 1",
          "Utility program partnerships drive 20% of revenue by Y3",
          "Contractor network reaches 3% of quality contractors",
          "ESG mandates accelerate building owner adoption"
        ]
      },
      withoutUtilityData: {
        name: "Without Utility Partnerships (Conservative)",
        description: "Pure marketplace focus with contractor subscriptions and transaction fees",
        years: [
          { year: 1, revenue: "$2.2M", shops: 55, arr: "$2.2M", burn: "$2M", runway: "24 months" },
          { year: 2, revenue: "$7M", shops: 110, arr: "$7M", burn: "$1.5M", runway: "24 months" },
          { year: 3, revenue: "$18M", shops: 180, arr: "$18M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$36M", shops: 260, arr: "$36M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$62M", shops: 340, arr: "$62M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$3.5M Seed",
        keyAssumptions: [
          "Contractor acquisition primary driver",
          "Slower building owner adoption without utility partnerships",
          "More capital-efficient growth path",
          "OEM competitive response possible"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $5M Seed Funds",
      breakdown: [
        { category: "Engineering & Product", amount: "$2.1M", percentage: 42, detail: "BAS integration protocols, platform build, data infrastructure" },
        { category: "Sales & Partnerships", amount: "$1.4M", percentage: 28, detail: "Building owner BD, contractor onboarding, utility partnerships" },
        { category: "Protocol Development", amount: "$750K", percentage: 15, detail: "BAS reverse engineering, interoperability standards, certifications" },
        { category: "Marketing", amount: "$500K", percentage: 10, detail: "Contractor acquisition, industry positioning, thought leadership" },
        { category: "Operations", amount: "$250K", percentage: 5, detail: "Legal, insurance, G&A" }
      ]
    }
  },

  goToMarket: {
    title: "Go-to-Market Strategy",
    phases: [
      {
        phase: "Land",
        timeline: "Months 1-6",
        strategy: "Geographic Concentration",
        tactics: [
          "Start in 3-5 metros with high ESG pressure (NYC, Boston, LA, SF, Seattle)",
          "Target buildings with multi-vendor BAS equipment already frustrated by lock-in",
          "Offer free BAS audit to building owners to demonstrate data extraction value",
          "Recruit top-tier HVAC contractors with BAS expertise as anchor partners"
        ],
        metrics: ["80 contractors onboarded", "50 building pilots", "5 protocol integrations"]
      },
      {
        phase: "Expand",
        timeline: "Months 7-12",
        strategy: "Utility & ESG Integration",
        tactics: [
          "Approach utilities with M&V automation proposals for C&I efficiency programs",
          "Target REITs and property managers with ESG reporting requirements",
          "Launch third-party optimization vendor partnerships",
          "Build case studies demonstrating 15-30% energy savings"
        ],
        metrics: ["5 utility partnerships", "20 building owner contracts", "95% data accuracy"]
      },
      {
        phase: "Dominate",
        timeline: "Year 2+",
        strategy: "National Platform",
        tactics: [
          "Leverage utility partnerships for credibility and co-marketing",
          "Expand to adjacent markets: industrial facilities, healthcare, education",
          "Launch API marketplace for third-party optimization vendors",
          "Position for strategic acquisition or IPO"
        ],
        metrics: ["450+ contractors", "200+ building portfolios", "Market leadership"]
      }
    ],
    channels: [
      { name: "Direct Enterprise Sales", description: "Field sales team targeting commercial real estate portfolios", cost: "High", effectiveness: "Very High" },
      { name: "Utility Partnerships", description: "Embedded in utility C&I efficiency programs", cost: "Low", effectiveness: "Very High" },
      { name: "Contractor Referrals", description: "Contractors refer building owners seeking unified data", cost: "Low", effectiveness: "High" },
      { name: "Industry Conferences", description: "BOMA, ASHRAE, AHR Expo presence and thought leadership", cost: "Medium", effectiveness: "Medium" },
      { name: "Digital Marketing", description: "SEO for building performance standards, ESG compliance", cost: "Medium", effectiveness: "Medium" }
    ]
  },

  team: {
    title: "Team Requirements",
    currentNeeds: [
      {
        role: "CEO / Founder",
        skills: "Building technology, enterprise sales, fundraising, industry relationships",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "CTO",
        skills: "BAS protocols, platform architecture, data systems, IoT integration",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Building Science",
        skills: "HVAC engineering, energy optimization, contractor credentialing",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Sales",
        skills: "Commercial real estate, enterprise sales, utility relationships",
        status: "Seeking",
        priority: "High"
      }
    ],
    advisorNeeds: [
      "Former Johnson Controls or Honeywell BAS executive",
      "Commercial real estate operator with large portfolio",
      "Utility executive with C&I program experience",
      "PropTech founder with successful exit (VTS, Building Engines)"
    ],
    orgPlan: {
      year1: "15 FTEs: 6 engineering, 4 sales/BD, 3 protocol specialists, 2 G&A",
      year2: "35 FTEs: 14 engineering, 10 sales/BD, 6 protocol, 5 support",
      year3: "80 FTEs: 28 engineering, 25 sales, 12 protocol, 15 ops"
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "OEM Retaliation",
        severity: "High",
        likelihood: "Medium",
        description: "Johnson Controls, Trane, or Carrier could block data extraction, pursue legal action, or acquire competing solutions.",
        mitigation: "Focus on buildings with multi-vendor equipment. Document anticompetitive behavior. Build relationships with building owner CFOs frustrated by lock-in. Leverage right-to-repair momentum. Data extraction from owner-controlled systems is legally defensible."
      },
      {
        risk: "BAS Protocol Complexity",
        severity: "High",
        likelihood: "Medium",
        description: "Each BAS system uses different proprietary protocols. Reverse engineering is time-consuming and may require frequent updates as vendors change systems.",
        mitigation: "Start with most common protocols (BACnet, Modbus). Hire OEM-experienced engineers. Build protocol library incrementally. Partner with BAS integration specialists. Focus on 80% solution covering top 5 protocols first."
      },
      {
        risk: "Contractor Quality Variability",
        severity: "High",
        likelihood: "High",
        description: "HVAC contractors vary wildly in BAS expertise and service quality. Poor service experiences could damage platform reputation.",
        mitigation: "Rigorous credentialing process. BAS certification requirements. Quality guarantee program with financial backing. Start with top-tier contractors and expand carefully. Real-time performance tracking."
      },
      {
        risk: "Building Owner Sales Cycles",
        severity: "Medium",
        likelihood: "High",
        description: "Commercial real estate has notoriously long procurement cycles. Large portfolio deals may take 6-12 months to close.",
        mitigation: "Start with pilot programs requiring minimal procurement. Target CFOs and sustainability officers with clear ROI. Partner with utilities for faster procurement via efficiency programs. Land-and-expand strategy."
      },
      {
        risk: "Utility Program Dependency",
        severity: "Medium",
        likelihood: "Medium",
        description: "Utility efficiency programs can change with regulatory shifts. Over-reliance on utility revenue is risky.",
        mitigation: "Diversify across multiple utilities and geographies. Build direct building owner relationships. ESG compliance services not utility-dependent. Transaction fees provide baseline revenue."
      },
      {
        risk: "Technology Execution",
        severity: "Medium",
        likelihood: "Low",
        description: "Platform development, BAS integration, and data infrastructure require significant technical expertise.",
        mitigation: "Hire CTO with BAS protocol experience. Start with MVP and iterate. Use existing integrations where possible. Focus on core value prop before feature expansion."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Q1 2026", milestone: "Close seed round, hire core team (CEO, CTO, VP Building Science)", status: "target" },
      { timeline: "Q2 2026", milestone: "Launch MVP with 50 contractors in 3 markets, first BAS integrations live", status: "target" },
      { timeline: "Q3 2026", milestone: "First building owner pilots (5 portfolios, 50+ buildings), utility partnership LOIs", status: "target" },
      { timeline: "Q4 2026", milestone: "100 contractors, BAS extraction for top 5 platforms, $3.5M ARR", status: "target" },
      { timeline: "Q1 2027", milestone: "First utility program partnership live (CA or NY), ESG compliance product launch", status: "target" },
      { timeline: "Q2 2027", milestone: "20 building owner partnerships, third-party optimization marketplace beta", status: "target" },
      { timeline: "Q3 2027", milestone: "250 contractors, 200 buildings under management, $14M ARR run rate", status: "target" },
      { timeline: "Q4 2027", milestone: "Series A raise at $100-130M valuation, market leadership position", status: "target" }
    ]
  },

  ask: {
    title: "The Ask",
    amount: "$5,000,000",
    round: "Seed Round",
    terms: "Priced round, standard seed terms",
    useOfFunds: [
      "Build contractor network platform with BAS certification tracking",
      "Develop BAS data extraction protocols for top 5 systems",
      "Establish utility program partnerships in CA and NY",
      "Hire core team: CTO, VP Building Science, VP Sales"
    ],
    timeline: "18-month runway to Series A milestones",
    seriesA: {
      timing: "Q4 2027",
      metrics: "$14M ARR, 250+ contractors, 5+ utility partnerships",
      raise: "$20-30M at $100-130M valuation"
    }
  },

  sources: [
    { name: "MarketsandMarkets - Building Automation Systems", url: "https://www.marketsandmarkets.com/Market-Reports/building-automation-control-systems-market-408.html", detail: "$191.13B global BAS market by 2030, 13.4% CAGR" },
    { name: "Fortune Business Insights - Commercial HVAC", url: "https://www.fortunebusinessinsights.com/commercial-hvac-market-112426", detail: "$72B commercial HVAC market in 2025, 5.7% CAGR" },
    { name: "Grand View Research - Smart Buildings", url: "https://www.grandviewresearch.com/industry-analysis/global-smart-buildings-market", detail: "$554B smart building market by 2033, 18.9% CAGR" },
    { name: "Precedence Research - Building Management Systems", url: "https://www.precedenceresearch.com/building-management-systems-market", detail: "$82B BMS market by 2034, 15% CAGR" },
    { name: "ASHRAE - BACnet Protocol Standards", url: "https://www.ashrae.org/technical-resources/bacnet", detail: "Building automation protocol standards" },
    { name: "NYC Local Law 97 - Building Performance Standards", url: "https://www.nyc.gov/site/buildings/codes/ll97.page", detail: "Building emissions requirements" },
    { name: "DOE - Commercial Building Energy Consumption", url: "https://www.eia.gov/consumption/commercial/", detail: "Commercial buildings consume 40% of U.S. energy" },
    { name: "IMT - Building Performance Standards Map", url: "https://www.imt.org/resources/map-building-performance-standards/", detail: "40+ cities with building performance mandates" }
  ]
}

// Helper Components
function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-cyan-600" />
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
      <div className="text-3xl font-bold text-cyan-600">{value}</div>
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
      <header className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <a
            href="/tokens/#framework"
            className="inline-flex items-center gap-2 text-cyan-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cap-Ex Opportunities
          </a>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{businessPlan.companyName}</h1>
                  <p className="text-cyan-100">{businessPlan.tagline}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-cyan-200">{businessPlan.version}</div>
              <div className="text-sm text-cyan-200">{businessPlan.date}</div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.ask.amount}</div>
              <div className="text-sm text-cyan-100">Seed Round</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.marketSize.tam.value}</div>
              <div className="text-sm text-cyan-100">BAS Market by 2030</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">13.4%</div>
              <div className="text-sm text-cyan-100">Market CAGR</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">13:1</div>
              <div className="text-sm text-cyan-100">LTV:CAC</div>
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
                activeTab === 'overview' ? 'bg-cyan-100 text-cyan-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Executive Summary
            </button>
            <button
              onClick={() => setActiveTab('detailed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'detailed' ? 'bg-cyan-100 text-cyan-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Full Plan
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'financials' ? 'bg-cyan-100 text-cyan-700' : 'text-gray-600 hover:bg-gray-100'
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
                  <div key={i} className="p-4 bg-cyan-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{pillar.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {pillar.features.map((feature, j) => (
                        <span key={j} className="px-2 py-0.5 bg-cyan-100 text-cyan-700 rounded text-xs">
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
                  <div key={i} className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
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
                <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.tam.label}</div>
                  <div className="text-sm text-cyan-100 mt-1">{businessPlan.marketSize.tam.description}</div>
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
            <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">{businessPlan.ask.title}</h2>
                <div className="text-5xl font-bold mb-2">{businessPlan.ask.amount}</div>
                <div className="text-xl text-cyan-100">{businessPlan.ask.round}</div>
                <div className="text-cyan-200 mt-2">{businessPlan.ask.terms}</div>
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
                    <p><span className="text-cyan-200">Timing:</span> {businessPlan.ask.seriesA.timing}</p>
                    <p><span className="text-cyan-200">Metrics:</span> {businessPlan.ask.seriesA.metrics}</p>
                    <p><span className="text-cyan-200">Raise:</span> {businessPlan.ask.seriesA.raise}</p>
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
                      <th className="text-left py-3 px-2 font-medium text-gray-900">Market Share</th>
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
                            player.threat === 'Partners not competitors' || player.threat === 'Partner not competitor' ? 'bg-blue-100 text-blue-700' :
                            player.threat === 'Low' ? 'bg-green-100 text-green-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {player.threat}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-cyan-50 rounded-lg">
                <h4 className="font-semibold text-cyan-800 mb-2">{businessPlan.competition.ourAdvantage.title}</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {businessPlan.competition.ourAdvantage.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
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
                  <div key={i} className="border-l-4 border-cyan-400 pl-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-cyan-100 text-cyan-700 rounded text-xs font-medium">
                        {phase.timeline}
                      </span>
                      <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 mb-3">
                      {phase.deliverables.map((deliverable, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
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

              <div className="p-4 bg-cyan-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{businessPlan.businessModel.unitEconomics.title}</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {businessPlan.businessModel.unitEconomics.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-cyan-600">{metric.value}</div>
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
                      <span className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
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
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
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
                    <span className="inline-block mt-2 px-2 py-0.5 bg-cyan-100 text-cyan-700 rounded text-xs">
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
                        <Award className="w-4 h-4 text-cyan-500" />
                        {advisor}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">Organization Plan</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium text-gray-700">Year 1:</span> <span className="text-gray-600">{businessPlan.team.orgPlan.year1}</span></p>
                    <p><span className="font-medium text-gray-700">Year 2:</span> <span className="text-gray-600">{businessPlan.team.orgPlan.year2}</span></p>
                    <p><span className="font-medium text-gray-700">Year 3:</span> <span className="text-gray-600">{businessPlan.team.orgPlan.year3}</span></p>
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
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-cyan-200" />
                <div className="space-y-4">
                  {businessPlan.milestones.items.map((item, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-cyan-500 border-2 border-white" />
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-cyan-600">{item.timeline}</span>
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
                {/* Scenario 1: With Utility Data */}
                <div className="p-4 bg-cyan-50 rounded-lg border-2 border-cyan-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-cyan-600 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withUtilityData.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withUtilityData.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-cyan-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Contractors</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withUtilityData.years.map((year, i) => (
                          <tr key={i} className="border-b border-cyan-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.shops.toLocaleString()}</td>
                            <td className="py-2 px-3 text-right">{year.arr}</td>
                            <td className={`py-2 px-3 text-right ${year.burn === '$0' ? 'text-green-600' : 'text-red-600'}`}>
                              {year.burn}
                            </td>
                            <td className={`py-2 px-3 text-right ${year.runway === 'Profitable' ? 'text-green-600' : 'text-gray-600'}`}>
                              {year.runway}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-3 bg-white rounded">
                    <h5 className="text-sm font-medium text-gray-900 mb-2">Key Assumptions</h5>
                    <ul className="grid md:grid-cols-2 gap-1">
                      {businessPlan.financials.scenarios.withUtilityData.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-cyan-500">*</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-cyan-600">
                      Funding Required: {businessPlan.financials.scenarios.withUtilityData.fundingRequired}
                    </span>
                  </div>
                </div>

                {/* Scenario 2: Without Utility Data */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{businessPlan.financials.scenarios.withoutUtilityData.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withoutUtilityData.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Contractors</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutUtilityData.years.map((year, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.shops.toLocaleString()}</td>
                            <td className="py-2 px-3 text-right">{year.arr}</td>
                            <td className={`py-2 px-3 text-right ${year.burn === '$0' ? 'text-green-600' : 'text-red-600'}`}>
                              {year.burn}
                            </td>
                            <td className={`py-2 px-3 text-right ${year.runway === 'Profitable' ? 'text-green-600' : 'text-gray-600'}`}>
                              {year.runway}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-3 bg-white rounded">
                    <h5 className="text-sm font-medium text-gray-900 mb-2">Key Assumptions</h5>
                    <ul className="grid md:grid-cols-2 gap-1">
                      {businessPlan.financials.scenarios.withoutUtilityData.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-gray-500">*</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-gray-600">
                      Funding Required: {businessPlan.financials.scenarios.withoutUtilityData.fundingRequired}
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
                        <span className="text-lg font-bold text-cyan-600">{item.percentage}%</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-6 bg-gray-200 rounded overflow-hidden">
                          <div
                            className="h-full bg-cyan-500 rounded"
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
                  <div key={i} className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-cyan-600">{metric.value}</div>
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
                    <h4 className="font-medium text-gray-900 text-sm group-hover:text-cyan-600 transition-colors">
                      {source.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{source.detail}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 transition-colors flex-shrink-0" />
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
              className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors"
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
