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
  Cog,
  Settings,
  Cpu
} from 'lucide-react'

// Business Plan Data
const businessPlan = {
  companyName: "RoboServ",
  tagline: "Breaking OEM Dependence in Industrial Automation Service",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Fanuc, ABB, and KUKA control industrial robot service with limited competition. Manufacturers face $10K-100K+ per hour downtime costs and are dependent on OEM or single integrators. Service contracts are inflexible and parts access is restricted.",
    solution: "RoboServ aggregates independent automation technicians into a credentialed network with remote diagnostics, standardized service contracts, and multi-vendor support. We enable manufacturers to break OEM dependence while improving uptime.",
    market: "$22.5B global industrial robotics services market (2024) growing at 6.35% CAGR. Third-party service can save manufacturers 25-40% vs OEM contracts while improving response times. Robot Maintenance-as-a-Service projected to reach $7.8B by 2033.",
    ask: "$6M Seed Round to build technician network platform, establish manufacturer partnerships, and create the remote diagnostics infrastructure that breaks OEM lock-in."
  },

  problem: {
    title: "The Industrial Automation Service Crisis",
    points: [
      {
        title: "OEM Service Monopoly",
        detail: "Fanuc, ABB, KUKA, and Yaskawa control 55%+ of industrial robot market and bundle restrictive service contracts. Manufacturers pay premium prices for inflexible service schedules and slow response times.",
        stat: "55%+",
        statLabel: "market controlled by Big 4 OEMs"
      },
      {
        title: "Devastating Downtime Costs",
        detail: "When robots go down, production stops. Automotive lines lose $2.3M per hour (up 77% since 2019). Even smaller manufacturers face $10K-100K+ per hour losses waiting for OEM technicians.",
        stat: "$2.3M/hr",
        statLabel: "automotive downtime cost (Siemens 2024)"
      },
      {
        title: "Fragmented Independent Techs",
        detail: "~5,000 qualified independent automation technicians exist but lack coordination, standardized credentials, and visibility. Manufacturers can't find or vet alternatives to OEM service.",
        stat: "5,000+",
        statLabel: "fragmented independent techs"
      },
      {
        title: "Parts & Diagnostics Lock-in",
        detail: "OEMs restrict access to spare parts, software updates, and diagnostic tools. Proprietary systems create artificial barriers to third-party service. Big 4 market share declining from 60% to 45% as alternatives emerge.",
        stat: "382K",
        statLabel: "industrial robots in US (IFR 2024)"
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
        detail: "Industrial robot installations exceeded 542,000 units globally in 2024, doubling from 10 years ago. US installed base reached 382,000 robots. More robots = more service demand.",
        icon: "TrendingUp"
      },
      {
        title: "Reshoring Manufacturing",
        detail: "US manufacturing investment at all-time highs. 40% of new robot installations in automotive sector. New facilities need flexible service options, not OEM lock-in.",
        icon: "Building2"
      },
      {
        title: "OEM Market Share Declining",
        detail: "Big 4 (Fanuc, ABB, KUKA, Yaskawa) market share declined from 60% to 45%. Emerging robot brands create multi-vendor service opportunity.",
        icon: "Cpu"
      },
      {
        title: "Labor Market Dynamics",
        detail: "Experienced automation techs retiring from OEMs. Many prefer independent work with better pay and flexibility. Global shortage of skilled maintenance personnel driving outsourcing.",
        icon: "Users"
      }
    ]
  },

  marketSize: {
    title: "Market Opportunity",
    tam: {
      value: "$22.5B",
      label: "Total Addressable Market",
      description: "Global Industrial Robotics Services Market 2024",
      source: "Market.us - Growing at 6.35% CAGR to $41.6B by 2033"
    },
    sam: {
      value: "$6.2B",
      label: "Serviceable Addressable Market",
      description: "North America robot service, maintenance, and parts",
      source: "35% of global market share in robot maintenance services"
    },
    som: {
      value: "$150M",
      label: "Serviceable Obtainable Market",
      description: "Year 5 target: 400 techs, 200 manufacturer partnerships",
      source: "Conservative capture estimate"
    },
    additionalMarkets: [
      { name: "Robot Maintenance-as-a-Service", value: "$1.2B (2024)", cagr: "23.7%" },
      { name: "Industrial Robot Equipment", value: "$34B (2024)", cagr: "9.9%" },
      { name: "Robots Repair Service Global", value: "$18B (2024)", cagr: "12.0%" }
    ],
    keyMetrics: [
      { label: "Industrial robots in US", value: "382,000 (2024)" },
      { label: "Annual US robot installations", value: "34,200 units" },
      { label: "Automotive downtime cost", value: "$2.3M per hour" },
      { label: "Robot downtime cost range", value: "$1K-10K per minute" }
    ]
  },

  competition: {
    title: "Competitive Landscape",
    players: [
      {
        name: "Fanuc America Service",
        type: "OEM Leader",
        marketShare: "~17% global",
        strengths: ["OEM parts access", "Low-maintenance hardware", "Predictive tools", "15+ year robot lifespan"],
        weaknesses: ["Premium pricing (2-3x)", "Slow response in some regions", "Fanuc-only", "Inflexible contracts"],
        threat: "Partner not competitor"
      },
      {
        name: "ABB Robotics Service",
        type: "Global OEM",
        marketShare: "~11% global",
        strengths: ["Global coverage", "600K+ robot installed base", "Connected services", "Software integration"],
        weaknesses: ["Higher maintenance costs", "ABB-focused", "Complex contract terms", "Expensive to service"],
        threat: "Medium"
      },
      {
        name: "KUKA Service",
        type: "Midea-Owned OEM",
        marketShare: "~5% global",
        strengths: ["Automotive expertise", "Strong Europe support", "Competitive pricing vs peers", "Training programs"],
        weaknesses: ["Ownership uncertainty", "Limited US footprint", "KUKA-only", "Parts availability gaps"],
        threat: "Low"
      },
      {
        name: "System Integrators",
        type: "Fragmented (~2,000)",
        marketShare: "100% of install",
        strengths: ["Multi-vendor capable", "Local relationships", "Flexible service", "Applications expertise"],
        weaknesses: ["Limited geographic coverage", "No quality standard", "Variable capabilities", "Capacity constraints"],
        threat: "Partners not competitors"
      }
    ],
    ourAdvantage: {
      title: "RoboServ's Unfair Advantages",
      points: [
        "Network effects: More techs = better coverage + faster response = more manufacturer adoption",
        "Data moat: Only aggregated view of multi-vendor robot service quality and pricing",
        "Manufacturer-agnostic: Fanuc, ABB, KUKA, Yaskawa, and emerging brands all supported",
        "No channel conflict: We help installers succeed, OEMs avoid managing service networks",
        "Equipment finance synergy: Predictive maintenance data valuable to lenders and insurers"
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
          "Tech onboarding platform with certification verification",
          "Coverage mapping and real-time availability system",
          "Manufacturer matching and dispatch MVP",
          "Quality scoring and performance tracking",
          "Basic parts network directory"
        ],
        milestone: "60 techs onboarded in Midwest manufacturing corridor"
      },
      {
        phase: "Phase 2: Intelligence",
        timeline: "Months 7-12",
        deliverables: [
          "Remote diagnostics platform with IoT integration",
          "Predictive maintenance alerts and error code library",
          "Video-assist troubleshooting for techs",
          "Manufacturer data portal with equipment analytics",
          "SLA tracking and performance dashboards"
        ],
        milestone: "100 techs, remote diagnostics beta, $5M ARR"
      },
      {
        phase: "Phase 3: Scale",
        timeline: "Year 2-3",
        deliverables: [
          "National tech coverage (400+ certified technicians)",
          "Shared parts inventory network with cross-docking",
          "Equipment finance integration for predictive data licensing",
          "Insurance and risk data products",
          "API for manufacturer ERP/CMMS integration"
        ],
        milestone: "$58M ARR, 200 manufacturer partnerships, market leader"
      }
    ]
  },

  businessModel: {
    title: "Business Model",
    revenueStreams: [
      {
        name: "Platform Transaction Fees",
        description: "Percentage of service contract value for jobs dispatched through platform matching",
        pricing: "4-6% of contract value",
        margin: "90%",
        year1Revenue: "$2.4M",
        year3Revenue: "$23M"
      },
      {
        name: "Tech SaaS Subscriptions",
        description: "Monthly subscription for techs to access network, build credentials, and receive service opportunities",
        pricing: "$2,000-$12,000/month",
        margin: "85%",
        year1Revenue: "$1.6M",
        year3Revenue: "$22M"
      },
      {
        name: "Manufacturer Data Licensing",
        description: "API access to equipment performance data, tech quality scores, and service benchmarking",
        pricing: "$80K-$250K annual contracts",
        margin: "92%",
        year1Revenue: "$400K",
        year3Revenue: "$8M"
      },
      {
        name: "Parts Network Revenue",
        description: "Margin on parts transactions through shared inventory network and procurement aggregation",
        pricing: "8-15% margin on parts",
        margin: "35%",
        year1Revenue: "$400K",
        year3Revenue: "$5M"
      }
    ],
    unitEconomics: {
      title: "Unit Economics Per Tech",
      metrics: [
        { label: "Customer Acquisition Cost (CAC)", value: "$21,000", note: "$14K digital + $7K sales/onboarding" },
        { label: "Average Revenue Per Tech (ARPT)", value: "$6,700/month", note: "Blended across revenue streams" },
        { label: "Gross Margin", value: "82%", note: "After platform and support costs" },
        { label: "Lifetime Value (LTV)", value: "$315,000", note: "Assuming 4-year retention" },
        { label: "LTV:CAC Ratio", value: "15:1", note: "Exceptional unit economics" },
        { label: "Payback Period", value: "7 months", note: "Fast capital efficiency" }
      ]
    }
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withFinancing: {
        name: "With Cap-Ex Financing Partnerships",
        description: "Deep equipment finance integration creates data moat and recurring revenue from predictive maintenance insights",
        years: [
          { year: 1, revenue: "$4.8M", shops: 80, arr: "$4.8M", burn: "$3.5M", runway: "18 months" },
          { year: 2, revenue: "$22M", shops: 175, arr: "$22M", burn: "$1M", runway: "24+ months" },
          { year: 3, revenue: "$58M", shops: 280, arr: "$58M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$102M", shops: 350, arr: "$102M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$165M", shops: 450, arr: "$165M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$6M Seed",
        keyAssumptions: [
          "5 major manufacturers sign in Year 1",
          "Equipment finance data licensing drives 20% of revenue by Y3",
          "Tech network reaches 10% of qualified independents",
          "Remote diagnostics reduces dispatch time 40%"
        ]
      },
      withoutFinancing: {
        name: "Without Cap-Ex Financing Angle",
        description: "Pure marketplace focus with tech subscriptions and transaction fees, slower manufacturer adoption",
        years: [
          { year: 1, revenue: "$2.8M", shops: 55, arr: "$2.8M", burn: "$2.5M", runway: "24 months" },
          { year: 2, revenue: "$11M", shops: 120, arr: "$11M", burn: "$1M", runway: "18 months" },
          { year: 3, revenue: "$32M", shops: 190, arr: "$32M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$58M", shops: 260, arr: "$58M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$95M", shops: 340, arr: "$95M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$4M Seed",
        keyAssumptions: [
          "Tech acquisition primary driver",
          "Slower manufacturer adoption without data products",
          "More capital-efficient growth path",
          "OEM competitive response possible"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $6M Seed Funds",
      breakdown: [
        { category: "Engineering & Product", amount: "$2.4M", percentage: 40, detail: "Platform build, remote diagnostics, IoT equipment integrations" },
        { category: "Sales & Partnerships", amount: "$1.68M", percentage: 28, detail: "Manufacturer BD, tech onboarding, equipment finance partnerships" },
        { category: "Operations & Logistics", amount: "$900K", percentage: 15, detail: "Parts network infrastructure, dispatch operations" },
        { category: "Marketing", amount: "$720K", percentage: 12, detail: "Tech acquisition, industry positioning, trade shows" },
        { category: "G&A & Buffer", amount: "$300K", percentage: 5, detail: "Legal, insurance, administration" }
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
          "Start in Midwest manufacturing corridor (Detroit, Chicago, Cleveland, Indianapolis)",
          "Partner with equipment distributors for tech recruitment referrals",
          "Offer free trial period with immediate service opportunity flow",
          "Target techs frustrated with OEM employment restrictions"
        ],
        metrics: ["60 techs onboarded", "85% activation rate", "NPS > 50"]
      },
      {
        phase: "Expand",
        timeline: "Months 7-12",
        strategy: "Manufacturer Partnership Launch",
        tactics: [
          "Approach Fortune 500 manufacturers with service cost reduction pilots",
          "Target operations/maintenance managers with clear ROI models",
          "Partner with equipment finance companies for introductions",
          "Build case studies with 25-40% cost savings vs OEM"
        ],
        metrics: ["5 manufacturer pilots", "15,000 robots under monitoring", "95% SLA compliance"]
      },
      {
        phase: "Dominate",
        timeline: "Year 2+",
        strategy: "National Rollout",
        tactics: [
          "Expand tech network to cover major manufacturing regions nationally",
          "Launch parts network with distributor partnerships",
          "Build equipment finance data licensing products",
          "API integrations with manufacturer CMMS/ERP systems"
        ],
        metrics: ["400+ techs", "200 manufacturer partnerships", "National coverage"]
      }
    ],
    channels: [
      { name: "Direct Sales", description: "Field sales targeting high-volume manufacturers", cost: "High", effectiveness: "Very High" },
      { name: "Equipment Distributors", description: "Referrals bundled with robot sales and integration", cost: "Low", effectiveness: "Very High" },
      { name: "Equipment Finance Partners", description: "Data partnerships drive manufacturer introductions", cost: "Low", effectiveness: "High" },
      { name: "Trade Associations", description: "RIA, AMTS, automation industry groups", cost: "Medium", effectiveness: "Medium" },
      { name: "Digital Marketing", description: "SEO, content, targeted ads to tech business owners", cost: "Medium", effectiveness: "Medium" }
    ]
  },

  team: {
    title: "Team Requirements",
    currentNeeds: [
      {
        role: "CEO / Founder",
        skills: "Industrial automation experience, fundraising, network building",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "CTO",
        skills: "Platform architecture, IoT integrations, data systems, robotics",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Operations",
        skills: "Dispatch operations, tech credentialing, quality programs",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Sales",
        skills: "Manufacturer partnerships, enterprise sales, industrial sector",
        status: "Seeking",
        priority: "High"
      }
    ],
    advisorNeeds: [
      "Former Fanuc, ABB, or KUKA executive (service operations)",
      "Manufacturing operations executive (Fortune 500)",
      "Industrial IoT / predictive maintenance founder",
      "Equipment finance industry veteran"
    ],
    orgPlan: {
      year1: "15 FTEs: 5 engineering, 4 sales, 4 ops, 2 G&A",
      year2: "40 FTEs: 12 engineering, 15 sales, 10 ops, 3 G&A",
      year3: "85 FTEs: 25 engineering, 35 sales, 18 ops, 7 G&A"
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "OEM Retaliation",
        severity: "High",
        likelihood: "Medium",
        description: "OEMs could restrict parts access, void warranties for third-party service, or launch competing network platforms. However, Big 4 have avoided managing installers for 20+ years due to channel conflict.",
        mitigation: "Focus on multi-vendor environments and out-of-warranty equipment. Build relationships with manufacturer CFOs who want alternatives. Document anticompetitive behavior. OEMs historically avoid network management."
      },
      {
        risk: "Tech Quality Variability",
        severity: "High",
        likelihood: "Medium",
        description: "Independent techs may have inconsistent skills, training, or professionalism. Quality issues could damage manufacturer relationships and network reputation.",
        mitigation: "Rigorous certification verification. Quality guarantee program with financial backing. Start with top-tier techs and expand carefully. Remote supervision and video-assist capabilities."
      },
      {
        risk: "Parts Access Restrictions",
        severity: "High",
        likelihood: "High",
        description: "OEMs actively restrict parts, software, and diagnostic tools to authorized service networks. Could limit service capability for certain brands or models.",
        mitigation: "Build secondary parts sourcing network. Partner with aftermarket suppliers. Develop refurbishment capabilities. Document OEM restrictions for advocacy. Focus on multi-vendor facilities."
      },
      {
        risk: "Manufacturer Sales Cycles",
        severity: "Medium",
        likelihood: "High",
        description: "Enterprise sales cycles are 6-12 months. Procurement processes slow adoption. Could delay revenue recognition.",
        mitigation: "Start with pilot programs at single facilities. Target operations/maintenance managers with clear ROI. Partner with equipment finance companies for introductions."
      },
      {
        risk: "Safety & Liability",
        severity: "Medium",
        likelihood: "Low",
        description: "Industrial robots are safety-critical equipment. Improper service could cause injury or equipment damage.",
        mitigation: "Comprehensive insurance requirements. Safety protocol standardization. Incident tracking and response. Legal framework for liability allocation. OSHA compliance verification."
      },
      {
        risk: "Tech Poaching by OEMs",
        severity: "Low",
        likelihood: "Medium",
        description: "OEMs could recruit top techs from our network, reducing service capacity and quality.",
        mitigation: "Build network loyalty through volume and flexibility. Offer techs equity participation. Make platform stickier than individual OEM employment. Non-compete provisions."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Q1 2026", milestone: "Close seed round, hire core team (CEO, CTO, VP Ops)", status: "planned" },
      { timeline: "Q2 2026", milestone: "Launch MVP with 60 techs in Midwest manufacturing corridor", status: "planned" },
      { timeline: "Q3 2026", milestone: "First manufacturer pilot (Fortune 500 tier)", status: "planned" },
      { timeline: "Q4 2026", milestone: "100 techs, remote diagnostics beta, $5M ARR", status: "planned" },
      { timeline: "Q1 2027", milestone: "Parts network pilot with 3 distributors", status: "planned" },
      { timeline: "Q2 2027", milestone: "5 manufacturer partnerships, equipment finance pilot", status: "planned" },
      { timeline: "Q3 2027", milestone: "Predictive maintenance product launch", status: "planned" },
      { timeline: "Q4 2027", milestone: "Series A at $150-180M valuation, $22M ARR", status: "planned" }
    ]
  },

  ask: {
    title: "The Ask",
    amount: "$6,000,000",
    round: "Seed Round",
    terms: "Priced round at $24M post-money valuation",
    useOfFunds: [
      "Build tech network platform with credentialing and dispatch",
      "Develop remote diagnostics infrastructure with IoT integration",
      "Acquire and onboard first 100 certified automation technicians",
      "Launch manufacturer partnership pilots with 5+ Fortune 500 companies"
    ],
    timeline: "18-month runway to Series A milestones",
    seriesA: {
      timing: "Q4 2027",
      metrics: "$22M ARR, 175 techs, 15+ manufacturer partnerships",
      raise: "$25-35M at $150-180M valuation"
    }
  },

  sources: [
    { name: "Market.us - Industrial Robotics Services Market", url: "https://market.us/report/industrial-robotics-services-market/", detail: "$22.5B in 2024, 6.35% CAGR to $41.6B by 2033" },
    { name: "IFR World Robotics 2024", url: "https://ifr.org/worldrobotics", detail: "542K robots installed globally in 2024, 382K US installed base" },
    { name: "Siemens True Cost of Downtime 2024", url: "https://blog.siemens.com/2024/07/the-true-cost-of-an-hours-downtime-an-industry-analysis/", detail: "$2.3M/hour automotive downtime, up 77% since 2019" },
    { name: "ResearchIntelo - Robot Maintenance-as-a-Service", url: "https://researchintelo.com/report/robot-maintenance-as-a-service-market/", detail: "$1.2B in 2024, 23.7% CAGR to $7.8B by 2033" },
    { name: "Grand View Research - Industrial Robotics", url: "https://www.grandviewresearch.com/industry-analysis/industrial-robotics-market", detail: "$34B equipment market, 9.9% CAGR" },
    { name: "MarketReportAnalytics - Robots Repair Service", url: "https://www.marketreportanalytics.com/reports/robots-repair-service-335383", detail: "$18B global repair market, 12% CAGR" },
    { name: "Fortune Business Insights - North America Industrial Robots", url: "https://www.fortunebusinessinsights.com/north-america-industrial-robots-market-108629", detail: "$3.84B in 2024, 11.5% CAGR to $8.89B by 2032" },
    { name: "Progressive Robotics - Big 4 Market Analysis", url: "https://progressiverobotics.ai/beyond-the-big-4-abb-fanuc-kuka-yaskawa-the-complete-2025-robot-manufacturer-guide-for-smart-integrators/", detail: "Big 4 market share declined from 60% to 45%" }
  ]
}

// Helper Components
function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-slate-600" />
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
      <div className="text-3xl font-bold text-slate-600">{value}</div>
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
      <header className="bg-gradient-to-r from-slate-700 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <a
            href="/tokens/#framework"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cap-Ex Opportunities
          </a>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Cog className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{businessPlan.companyName}</h1>
                  <p className="text-slate-300">{businessPlan.tagline}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-300">{businessPlan.version}</div>
              <div className="text-sm text-slate-300">{businessPlan.date}</div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.ask.amount}</div>
              <div className="text-sm text-slate-300">Seed Round</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.marketSize.tam.value}</div>
              <div className="text-sm text-slate-300">Global Services Market</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">6.35%</div>
              <div className="text-sm text-slate-300">Market CAGR</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">15:1</div>
              <div className="text-sm text-slate-300">LTV:CAC</div>
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
                activeTab === 'overview' ? 'bg-slate-100 text-slate-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Executive Summary
            </button>
            <button
              onClick={() => setActiveTab('detailed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'detailed' ? 'bg-slate-100 text-slate-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Full Plan
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'financials' ? 'bg-slate-100 text-slate-700' : 'text-gray-600 hover:bg-gray-100'
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
                  <div key={i} className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{pillar.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {pillar.features.map((feature, j) => (
                        <span key={j} className="px-2 py-0.5 bg-slate-200 text-slate-700 rounded text-xs">
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

              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-400">
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
                <div className="p-4 bg-gradient-to-br from-slate-600 to-slate-800 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.tam.label}</div>
                  <div className="text-sm text-slate-300 mt-1">{businessPlan.marketSize.tam.description}</div>
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
            <section className="bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">{businessPlan.ask.title}</h2>
                <div className="text-5xl font-bold mb-2">{businessPlan.ask.amount}</div>
                <div className="text-xl text-slate-300">{businessPlan.ask.round}</div>
                <div className="text-slate-400 mt-2">{businessPlan.ask.terms}</div>
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
                    <p><span className="text-slate-300">Timing:</span> {businessPlan.ask.seriesA.timing}</p>
                    <p><span className="text-slate-300">Metrics:</span> {businessPlan.ask.seriesA.metrics}</p>
                    <p><span className="text-slate-300">Raise:</span> {businessPlan.ask.seriesA.raise}</p>
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
                            player.threat === 'Partner not competitor' || player.threat === 'Partners not competitors' ? 'bg-blue-100 text-blue-700' :
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

              <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">{businessPlan.competition.ourAdvantage.title}</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {businessPlan.competition.ourAdvantage.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-slate-600 mt-0.5 flex-shrink-0" />
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
                  <div key={i} className="border-l-4 border-slate-400 pl-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                        {phase.timeline}
                      </span>
                      <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 mb-3">
                      {phase.deliverables.map((deliverable, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
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

              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{businessPlan.businessModel.unitEconomics.title}</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {businessPlan.businessModel.unitEconomics.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-slate-600">{metric.value}</div>
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
                      <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
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
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
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
                    <span className="inline-block mt-2 px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs">
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
                        <Award className="w-4 h-4 text-slate-500" />
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
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" />
                <div className="space-y-4">
                  {businessPlan.milestones.items.map((item, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-slate-500 border-2 border-white" />
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-slate-600">{item.timeline}</span>
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
                {/* Scenario 1: With Financing */}
                <div className="p-4 bg-slate-50 rounded-lg border-2 border-slate-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-slate-700 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withFinancing.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Techs</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withFinancing.years.map((year, i) => (
                          <tr key={i} className="border-b border-slate-100">
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
                      {businessPlan.financials.scenarios.withFinancing.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-slate-500">*</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-slate-600">
                      Funding Required: {businessPlan.financials.scenarios.withFinancing.fundingRequired}
                    </span>
                  </div>
                </div>

                {/* Scenario 2: Without Financing */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{businessPlan.financials.scenarios.withoutFinancing.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withoutFinancing.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Techs</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutFinancing.years.map((year, i) => (
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
                      {businessPlan.financials.scenarios.withoutFinancing.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-gray-500">*</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-gray-600">
                      Funding Required: {businessPlan.financials.scenarios.withoutFinancing.fundingRequired}
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
                        <span className="text-lg font-bold text-slate-600">{item.percentage}%</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-6 bg-gray-200 rounded overflow-hidden">
                          <div
                            className="h-full bg-slate-500 rounded"
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
                  <div key={i} className="p-4 bg-gradient-to-br from-slate-50 to-gray-100 rounded-lg text-center">
                    <div className="text-3xl font-bold text-slate-600">{metric.value}</div>
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
                    <h4 className="font-medium text-gray-900 text-sm group-hover:text-slate-600 transition-colors">
                      {source.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{source.detail}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-slate-600 transition-colors flex-shrink-0" />
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
              className="inline-flex items-center gap-2 bg-slate-600 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
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
