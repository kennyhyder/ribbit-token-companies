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
  Activity,
  Stethoscope
} from 'lucide-react'

// Business Plan Data
const businessPlan = {
  companyName: "MedService",
  tagline: "The Intelligence Layer Breaking OEM Service Monopolies",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "OEMs (GE, Siemens, Philips) control 70%+ of medical imaging equipment service, charging 2-3x fair market rates. Independent Service Organizations (ISOs) exist but are fragmented with no quality standardization. Health systems waste $5-10B annually on overpriced OEM contracts.",
    solution: "MedService aggregates ISOs into a credentialed network with standardized calibration protocols, real-time equipment performance tracking, and transparent pricing. We become the intelligence layer that health system CFOs trust to break OEM service monopolies.",
    market: "$55B global medical equipment maintenance market growing 10.5% annually. Third-party service can save health systems 30-50% vs OEM contracts. Right-to-repair legislation creating tailwinds.",
    ask: "$6M Seed Round to build ISO network platform, establish health system partnerships, and create the calibration quality standard that breaks OEM lock-in."
  },

  problem: {
    title: "The OEM Service Monopoly Crisis",
    points: [
      {
        title: "OEM Price Gouging",
        detail: "GE, Siemens, and Philips control service contracts with 60-80% gross margins. Health systems pay $150K-400K annually per MRI unit when third-party service costs $75K-200K.",
        stat: "2-3x",
        statLabel: "OEM premium over fair market value"
      },
      {
        title: "ISO Fragmentation",
        detail: "~2,000 independent service organizations exist but lack standardization, credentialing, and visibility. Health systems can't assess ISO quality or capabilities.",
        stat: "2,000+",
        statLabel: "fragmented ISOs with no quality standard"
      },
      {
        title: "Equipment Lock-in Tactics",
        detail: "OEMs restrict access to parts, software, and calibration data. Proprietary service tools and encrypted diagnostics create artificial barriers to competition.",
        stat: "70%",
        statLabel: "service market controlled by OEMs"
      },
      {
        title: "Right-to-Repair Momentum",
        detail: "FTC enforcement actions and state legislation (MA, NY, CO) forcing OEMs to provide repair access. Market is opening but ISOs lack infrastructure to capture opportunity.",
        stat: "12 States",
        statLabel: "with active right-to-repair legislation"
      }
    ]
  },

  solution: {
    title: "MedService: Quality Network for Medical Equipment Service",
    tagline: "Aggregate. Credential. Standardize. Disrupt.",
    pillars: [
      {
        icon: "Activity",
        title: "ISO Network",
        description: "Aggregated network of credentialed independent service organizations with verified capabilities, coverage areas, and equipment certifications.",
        features: ["500+ ISO profiles", "Capability verification", "Coverage mapping", "Real-time availability"]
      },
      {
        icon: "BarChart3",
        title: "Quality Scoring",
        description: "Data-driven ISO scores based on calibration accuracy, response times, first-time fix rates, and equipment uptime delivered.",
        features: ["0-100 quality score", "Calibration tracking", "Uptime metrics", "Customer reviews"]
      },
      {
        icon: "FileText",
        title: "Calibration Protocol",
        description: "Standardized calibration procedures meeting FDA and ACR requirements. Digital calibration records that pass regulatory audits.",
        features: ["FDA-compliant protocols", "ACR accreditation support", "Digital records", "Audit trail"]
      },
      {
        icon: "Zap",
        title: "Performance Intelligence",
        description: "Equipment performance data aggregated across the network. Predictive analytics for maintenance planning and capital replacement decisions.",
        features: ["Predictive maintenance", "Lifecycle analytics", "Benchmark data", "Capital planning"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "Right-to-Repair Legislation",
        detail: "FTC enforcement and state laws forcing OEMs to provide parts, tools, and documentation. The legal barriers to third-party service are crumbling.",
        icon: "FileText"
      },
      {
        title: "Health System Cost Pressure",
        detail: "Operating margins at historic lows (2-3%). CFOs actively seeking 30-50% savings on service contracts. Third-party service is low-hanging fruit.",
        icon: "DollarSign"
      },
      {
        title: "Equipment Aging",
        detail: "Average imaging equipment age is 10+ years. OEMs pushing costly upgrades while ISOs can extend equipment life cost-effectively.",
        icon: "Clock"
      },
      {
        title: "Remote Diagnostics",
        detail: "IoT connectivity and remote monitoring enable predictive maintenance and faster diagnostics. ISOs can now match OEM technical capabilities.",
        icon: "Globe"
      },
      {
        title: "Third-Party Market Share Growth",
        detail: "Third-party service share increased from 36% to 50% since 2019. Momentum is accelerating as hospitals seek cost-effective alternatives.",
        icon: "TrendingUp"
      }
    ]
  },

  marketSize: {
    title: "Market Opportunity",
    tam: {
      value: "$55B",
      label: "Total Addressable Market",
      description: "Global medical equipment maintenance market (2024)",
      source: "MarketsandMarkets"
    },
    sam: {
      value: "$21B",
      label: "Serviceable Addressable Market",
      description: "Medical imaging equipment services globally",
      source: "Signify Research"
    },
    som: {
      value: "$120M",
      label: "Serviceable Obtainable Market",
      description: "Year 5: 300 ISOs, 150 health systems, 2,500 units",
      source: "Conservative capture estimate"
    },
    additionalMarkets: [
      { name: "U.S. Hospital Imaging Service", value: "$4.3B (2022)", cagr: "4.2%" },
      { name: "North America Equipment Maintenance", value: "$18B (2024)", cagr: "10.8%" },
      { name: "Third-Party ISO Market Share", value: "50% (2022)", cagr: "Growing 14pts since 2019" }
    ],
    keyMetrics: [
      { label: "Average MRI service contract", value: "$150K-$400K/yr" },
      { label: "Third-party savings vs OEM", value: "30-50%" },
      { label: "Market CAGR through 2030", value: "10.5%" },
      { label: "Hospitals using third-party", value: "64%" }
    ]
  },

  competition: {
    title: "Competitive Landscape",
    players: [
      {
        name: "GE Healthcare Service",
        type: "OEM Leader",
        marketShare: "~28%",
        strengths: ["OEM parts access", "Proprietary diagnostics", "Brand trust", "Installed base data"],
        weaknesses: ["Premium pricing (2-3x)", "Slow response times", "Bundled with equipment sales", "Regulatory scrutiny"],
        threat: "Incumbent to disrupt"
      },
      {
        name: "Siemens Healthineers Service",
        type: "OEM Leader",
        marketShare: "~24%",
        strengths: ["Technical expertise", "Global coverage", "R&D investment", "Software integration"],
        weaknesses: ["Premium pricing", "Long contract terms", "Equipment lock-in tactics", "Antitrust risk"],
        threat: "Incumbent to disrupt"
      },
      {
        name: "Philips Healthcare Service",
        type: "OEM Leader",
        marketShare: "~18%",
        strengths: ["Monitoring expertise", "IoT capabilities", "Clinical integration", "Brand recognition"],
        weaknesses: ["Premium pricing", "Limited ISO competition", "Quality issues (recalls)", "Service backlogs"],
        threat: "Incumbent to disrupt"
      },
      {
        name: "Independent ISOs (Fragmented)",
        type: "Partners",
        marketShare: "~30%",
        strengths: ["30-50% lower pricing", "Local relationships", "Flexible service", "Faster response"],
        weaknesses: ["No quality standard", "Limited geographic coverage", "Parts access challenges", "No brand recognition"],
        threat: "Partners not competitors"
      }
    ],
    ourAdvantage: {
      title: "MedService's Unfair Advantages",
      points: [
        "Network effect: More ISOs in network = better coverage + more data = more health system adoption = more ISO demand",
        "Data moat: Aggregated equipment performance data creates unique intelligence for predictive maintenance",
        "Quality standard: First credentialed ISO network becomes the industry clearinghouse for third-party service",
        "Right-to-repair tailwind: Regulatory momentum is breaking down OEM barriers to competition",
        "Cap-Ex alignment: Equipment finance integration creates recurring data revenue"
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
          "ISO onboarding platform with capability profiling",
          "Quality scoring engine with calibration tracking",
          "Health system RFP matching and bid management",
          "Standardized service contract templates",
          "Basic equipment registry with GPS tagging"
        ],
        milestone: "75 ISOs onboarded, 3 health system pilots launched"
      },
      {
        phase: "Phase 2: Intelligence",
        timeline: "Months 7-12",
        deliverables: [
          "Equipment performance analytics dashboard",
          "Predictive maintenance algorithms",
          "ACR-aligned calibration protocol library",
          "Health system procurement portal",
          "ISO training and certification program"
        ],
        milestone: "150 ISOs, 10 health systems, $4M ARR, quality scoring live"
      },
      {
        phase: "Phase 3: Scale",
        timeline: "Year 2-3",
        deliverables: [
          "National ISO coverage (300+ certified providers)",
          "Equipment finance integration for lifecycle data",
          "Real-time parts sourcing marketplace",
          "Regulatory compliance automation",
          "Expansion to lab equipment and surgical devices"
        ],
        milestone: "$48M ARR, 150+ health system partnerships, market leader"
      }
    ]
  },

  businessModel: {
    title: "Business Model",
    revenueStreams: [
      {
        name: "Platform Transaction Fees",
        description: "Percentage of service contract value for deals facilitated through platform matching",
        pricing: "3-5% of contract value",
        margin: "90%",
        year1Revenue: "$1.6M",
        year3Revenue: "$18M"
      },
      {
        name: "ISO SaaS Subscriptions",
        description: "Monthly subscription for ISOs to access network, build quality scores, and receive service opportunities",
        pricing: "$2,500-$15,000/month based on capabilities",
        margin: "85%",
        year1Revenue: "$1.4M",
        year3Revenue: "$12M"
      },
      {
        name: "Health System Data Licensing",
        description: "API access to equipment performance data, ISO quality scores, and service benchmarking",
        pricing: "$100K-$300K annual contracts",
        margin: "92%",
        year1Revenue: "$800K",
        year3Revenue: "$12M"
      },
      {
        name: "Equipment Intelligence Products",
        description: "Lifecycle analytics, benchmark reports, and consulting for health systems and equipment finance",
        pricing: "$50K-$200K per engagement",
        margin: "75%",
        year1Revenue: "$400K",
        year3Revenue: "$6M"
      }
    ],
    unitEconomics: {
      title: "Unit Economics Per ISO",
      metrics: [
        { label: "Customer Acquisition Cost (CAC)", value: "$18,000", note: "Digital + sales/onboarding" },
        { label: "Average Revenue Per ISO (ARPI)", value: "$7,800/month", note: "Subscription + transaction fees" },
        { label: "Gross Margin", value: "86%", note: "Platform economics at scale" },
        { label: "Lifetime Value (LTV)", value: "$288,000", note: "3.5 year average retention" },
        { label: "LTV:CAC Ratio", value: "16:1", note: "Exceptional unit economics" },
        { label: "Payback Period", value: "6 months", note: "Fast capital efficiency" }
      ]
    }
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withFinancing: {
        name: "With Cap-Ex Financing Partnerships",
        description: "Deep equipment finance integration creates data moat and recurring revenue",
        years: [
          { year: 1, revenue: "$4.2M", shops: 75, arr: "$4.2M", burn: "$3.8M", runway: "19 months" },
          { year: 2, revenue: "$18M", shops: 150, arr: "$18M", burn: "$2M", runway: "Profitable Q4" },
          { year: 3, revenue: "$48M", shops: 220, arr: "$48M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$85M", shops: 275, arr: "$85M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$140M", shops: 350, arr: "$140M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$6M Seed",
        keyAssumptions: [
          "3 major health systems sign in Year 1",
          "Equipment finance data licensing drives 25% of revenue by Y3",
          "ISO network reaches 15% of quality ISOs",
          "Right-to-repair legislation accelerates adoption"
        ]
      },
      withoutFinancing: {
        name: "Without Cap-Ex Financing Angle",
        description: "Pure marketplace focus with ISO subscriptions and transaction fees",
        years: [
          { year: 1, revenue: "$2.4M", shops: 50, arr: "$2.4M", burn: "$2.5M", runway: "29 months" },
          { year: 2, revenue: "$9M", shops: 100, arr: "$9M", burn: "$1M", runway: "Profitable" },
          { year: 3, revenue: "$24M", shops: 160, arr: "$24M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$48M", shops: 210, arr: "$48M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$82M", shops: 280, arr: "$82M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$4M Seed",
        keyAssumptions: [
          "ISO acquisition primary driver",
          "Slower health system adoption without data products",
          "More capital-efficient growth path",
          "OEM competitive response possible"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $6M Seed Funds",
      breakdown: [
        { category: "Engineering & Product", amount: "$2.4M", percentage: 40, detail: "Platform build, calibration tools, equipment integrations" },
        { category: "Sales & Partnerships", amount: "$1.8M", percentage: 30, detail: "Health system BD, ISO onboarding, equipment finance partnerships" },
        { category: "Regulatory & Compliance", amount: "$900K", percentage: 15, detail: "FDA protocols, ACR standards, quality certification program" },
        { category: "Marketing", amount: "$600K", percentage: 10, detail: "ISO acquisition, industry positioning, thought leadership" },
        { category: "Operations", amount: "$300K", percentage: 5, detail: "Legal, insurance, G&A" }
      ]
    }
  },

  goToMarket: {
    title: "Go-to-Market Strategy",
    phases: [
      {
        phase: "Land",
        timeline: "Months 1-6",
        strategy: "ISO Network Foundation",
        tactics: [
          "Target top-tier ISOs with multi-state coverage and OEM-equivalent capabilities",
          "Partner with AAMI and industry associations for credibility and recruitment",
          "Offer free quality scoring in exchange for calibration data",
          "Focus on MRI and CT specialists first (highest contract values)"
        ],
        metrics: ["75 ISOs onboarded", "90% activation rate", "NPS > 50"]
      },
      {
        phase: "Expand",
        timeline: "Months 7-12",
        strategy: "Health System Pilots",
        tactics: [
          "Target CFOs at 200-500 bed hospitals with expiring OEM contracts",
          "Offer guaranteed 25% savings with quality-matched service",
          "Provide benchmark data on OEM vs. third-party performance",
          "Build case studies with first health system partners"
        ],
        metrics: ["10 health system pilots", "95% contract renewal rate", "$100K average deal size"]
      },
      {
        phase: "Dominate",
        timeline: "Year 2+",
        strategy: "Market Leadership",
        tactics: [
          "Launch ISO certification program as industry standard",
          "Expand to GPO partnerships for enterprise distribution",
          "Build equipment finance data products for lifecycle intelligence",
          "Advocate for right-to-repair as industry voice"
        ],
        metrics: ["300+ certified ISOs", "150+ health systems", "Market share leader"]
      }
    ],
    channels: [
      { name: "Direct Enterprise Sales", description: "Health system CFOs and VP Operations targeting", cost: "High", effectiveness: "Very High" },
      { name: "Industry Associations", description: "AAMI, ECRI, ACR partnerships for credibility", cost: "Medium", effectiveness: "High" },
      { name: "GPO Partnerships", description: "Premier, Vizient, HealthTrust distribution", cost: "Low", effectiveness: "Very High" },
      { name: "Trade Shows", description: "RSNA, HIMSS, AAMI for brand awareness", cost: "Medium", effectiveness: "Medium" },
      { name: "Content Marketing", description: "Right-to-repair advocacy, benchmark reports", cost: "Low", effectiveness: "Medium" }
    ]
  },

  team: {
    title: "Team Requirements",
    currentNeeds: [
      {
        role: "CEO / Founder",
        skills: "Healthcare industry experience, fundraising, network building",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "CTO",
        skills: "Platform architecture, equipment integrations, data systems",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Clinical Engineering",
        skills: "Calibration protocols, FDA compliance, ISO credentialing",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Sales",
        skills: "Health system enterprise sales, GPO relationships",
        status: "Seeking",
        priority: "High"
      }
    ],
    advisorNeeds: [
      "Former GE/Siemens/Philips service executive",
      "Health system CFO or VP Operations",
      "Medical equipment ISO founder/operator",
      "Right-to-repair policy advocate (repair.org)"
    ],
    orgPlan: {
      year1: "15 FTEs: 5 engineering, 4 sales, 3 clinical ops, 3 G&A",
      year2: "35 FTEs: 12 engineering, 12 sales, 6 clinical ops, 5 G&A",
      year3: "80 FTEs: 25 engineering, 30 sales, 15 clinical ops, 10 G&A"
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "OEM Retaliation",
        severity: "High",
        likelihood: "High",
        description: "GE, Siemens, Philips may respond with aggressive pricing, parts restrictions, or lobbying against right-to-repair legislation",
        mitigation: "Focus on equipment out of warranty. Document anticompetitive behavior for regulators. Build relationships with health system CFOs who want alternatives. Partner with FTC on enforcement."
      },
      {
        risk: "ISO Quality Variability",
        severity: "High",
        likelihood: "Medium",
        description: "Inconsistent ISO performance could damage platform reputation and health system trust",
        mitigation: "Rigorous credentialing process. Quality guarantee program with financial backing. Start with top-tier ISOs and expand carefully. Continuous monitoring and scoring."
      },
      {
        risk: "FDA/Regulatory Compliance",
        severity: "High",
        likelihood: "Medium",
        description: "Calibration protocols must meet FDA requirements or face liability and regulatory action",
        mitigation: "Hire FDA compliance experts. Develop protocols with ACR guidance. Partner with health system quality teams for validation. Build audit trail into platform."
      },
      {
        risk: "Parts Access Restrictions",
        severity: "Medium",
        likelihood: "High",
        description: "OEMs may continue restricting parts and software access despite right-to-repair momentum",
        mitigation: "Build secondary parts sourcing network. Document restrictions for right-to-repair advocacy. Partner with parts suppliers. Support legislation enforcement."
      },
      {
        risk: "Health System Sales Cycles",
        severity: "Medium",
        likelihood: "High",
        description: "Enterprise health system procurement can take 12-24 months, delaying revenue",
        mitigation: "Start with pilot programs requiring minimal procurement. Target CFOs with clear ROI. Partner with GPOs for faster procurement. Build SaaS revenue while enterprise deals close."
      },
      {
        risk: "OEM Acquisition of ISOs",
        severity: "Low",
        likelihood: "Low",
        description: "OEMs could acquire leading ISOs to consolidate market control",
        mitigation: "Build network loyalty through platform value. Offer ISOs equity participation. Make network stickier than individual relationships. Antitrust scrutiny makes large acquisitions difficult."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Q1 2026", milestone: "Close $6M seed round, hire core team", status: "target" },
      { timeline: "Q2 2026", milestone: "Launch MVP with 50 ISOs in 5 states", status: "target" },
      { timeline: "Q3 2026", milestone: "First 3 health system pilots launched", status: "target" },
      { timeline: "Q4 2026", milestone: "100 ISOs, quality scoring live, $4M ARR", status: "target" },
      { timeline: "Q1 2027", milestone: "ACR-aligned calibration protocols certified", status: "target" },
      { timeline: "Q2 2027", milestone: "10 health system partnerships, equipment finance pilot", status: "target" },
      { timeline: "Q3 2027", milestone: "Predictive maintenance product launch", status: "target" },
      { timeline: "Q4 2027", milestone: "Series A at $120-150M valuation, $18M ARR", status: "target" }
    ]
  },

  ask: {
    title: "The Ask",
    amount: "$6,000,000",
    round: "Seed Round",
    terms: "SAFE or Priced Round at $24M post-money valuation",
    useOfFunds: [
      "Build ISO network platform with quality scoring and calibration tools",
      "Acquire and credential first 150 ISOs across key U.S. markets",
      "Launch health system partnership pilots with 10+ facilities",
      "Develop ACR-aligned calibration protocols as industry standard"
    ],
    timeline: "18-month runway to Series A milestones",
    seriesA: {
      timing: "Month 18-24",
      metrics: "$15-20M ARR, 200+ ISOs, 50+ health system partnerships",
      raise: "$25-35M at $120-150M valuation"
    }
  },

  sources: [
    { name: "MarketsandMarkets - Medical Equipment Maintenance", url: "https://www.marketsandmarkets.com/Market-Reports/medical-equipment-maintenance-market-69695102.html", detail: "$55B in 2024, 10.5% CAGR to 2029" },
    { name: "Signify Research - Imaging Services Market", url: "https://www.signifyresearch.net/insights/medical-imaging-services-and-maintenance-revenue-to-reach-23-billion-by-2029/", detail: "$23B imaging services by 2029" },
    { name: "AuntMinnie - Third-Party Service Shift", url: "https://www.auntminnie.com/practice-management/service/equipment/article/15636838/diagnostic-imaging-service-expenditures-shifting-to-thirdparty-providers", detail: "Third-party share grew from 36% to 50%" },
    { name: "Grand View Research - Equipment Maintenance", url: "https://www.grandviewresearch.com/industry-analysis/medical-equipment-maintenance-market", detail: "$81B market projected by 2030" },
    { name: "FTC - Right to Repair Policy", url: "https://www.ftc.gov/news-events/news/press-releases/2021/07/ftc-ramp-law-enforcement-against-illegal-repair-restrictions", detail: "FTC enforcement on repair restrictions" },
    { name: "AAMI - ISO Guidelines", url: "https://www.aami.org/standards/iso-guidelines", detail: "Independent service organization standards" },
    { name: "ACR - Equipment Quality Standards", url: "https://www.acr.org/Clinical-Resources/Quality-Assurance", detail: "Imaging equipment quality requirements" },
    { name: "ECRI - Medical Device Service Guide", url: "https://www.ecri.org/medical-device-service-guide", detail: "Service provider evaluation framework" }
  ]
}

// Helper Components
function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-teal-600" />
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
      <div className="text-3xl font-bold text-teal-600">{value}</div>
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
      <header className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <a
            href="/tokens/#framework"
            className="inline-flex items-center gap-2 text-teal-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cap-Ex Opportunities
          </a>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{businessPlan.companyName}</h1>
                  <p className="text-teal-100">{businessPlan.tagline}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-teal-200">{businessPlan.version}</div>
              <div className="text-sm text-teal-200">{businessPlan.date}</div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.ask.amount}</div>
              <div className="text-sm text-teal-100">Seed Round</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.marketSize.tam.value}</div>
              <div className="text-sm text-teal-100">Global Market (2024)</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">10.5%</div>
              <div className="text-sm text-teal-100">Market CAGR</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">16:1</div>
              <div className="text-sm text-teal-100">LTV:CAC</div>
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
                activeTab === 'overview' ? 'bg-teal-100 text-teal-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Executive Summary
            </button>
            <button
              onClick={() => setActiveTab('detailed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'detailed' ? 'bg-teal-100 text-teal-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Full Plan
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'financials' ? 'bg-teal-100 text-teal-700' : 'text-gray-600 hover:bg-gray-100'
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
                  <div key={i} className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{pillar.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {pillar.features.map((feature, j) => (
                        <span key={j} className="px-2 py-0.5 bg-teal-100 text-teal-700 rounded text-xs">
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
                  <div key={i} className="p-4 bg-cyan-50 rounded-lg border-l-4 border-cyan-400">
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
                <div className="p-4 bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.tam.label}</div>
                  <div className="text-sm text-teal-100 mt-1">{businessPlan.marketSize.tam.description}</div>
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
            <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">{businessPlan.ask.title}</h2>
                <div className="text-5xl font-bold mb-2">{businessPlan.ask.amount}</div>
                <div className="text-xl text-teal-100">{businessPlan.ask.round}</div>
                <div className="text-teal-200 mt-2">{businessPlan.ask.terms}</div>
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
                    <p><span className="text-teal-200">Timing:</span> {businessPlan.ask.seriesA.timing}</p>
                    <p><span className="text-teal-200">Metrics:</span> {businessPlan.ask.seriesA.metrics}</p>
                    <p><span className="text-teal-200">Raise:</span> {businessPlan.ask.seriesA.raise}</p>
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
                            player.threat === 'Partners not competitors' ? 'bg-blue-100 text-blue-700' :
                            player.threat === 'Incumbent to disrupt' ? 'bg-red-100 text-red-700' :
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

              <div className="mt-6 p-4 bg-teal-50 rounded-lg">
                <h4 className="font-semibold text-teal-800 mb-2">{businessPlan.competition.ourAdvantage.title}</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {businessPlan.competition.ourAdvantage.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
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
                  <div key={i} className="border-l-4 border-teal-400 pl-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-teal-100 text-teal-700 rounded text-xs font-medium">
                        {phase.timeline}
                      </span>
                      <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 mb-3">
                      {phase.deliverables.map((deliverable, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
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

              <div className="p-4 bg-teal-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{businessPlan.businessModel.unitEconomics.title}</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {businessPlan.businessModel.unitEconomics.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-teal-600">{metric.value}</div>
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
                      <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
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
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
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
                    <span className="inline-block mt-2 px-2 py-0.5 bg-teal-100 text-teal-700 rounded text-xs">
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
                        <Award className="w-4 h-4 text-teal-500" />
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
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-teal-200" />
                <div className="space-y-4">
                  {businessPlan.milestones.items.map((item, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-teal-500 border-2 border-white" />
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-teal-600">{item.timeline}</span>
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
                <div className="p-4 bg-teal-50 rounded-lg border-2 border-teal-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-teal-600 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withFinancing.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-teal-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ISOs</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withFinancing.years.map((year, i) => (
                          <tr key={i} className="border-b border-teal-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.shops}</td>
                            <td className="py-2 px-3 text-right">{year.arr}</td>
                            <td className={`py-2 px-3 text-right ${year.burn === '$0' ? 'text-green-600' : 'text-red-600'}`}>
                              {year.burn}
                            </td>
                            <td className={`py-2 px-3 text-right ${year.runway === 'Profitable' || year.runway.includes('Profitable') ? 'text-green-600' : 'text-gray-600'}`}>
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
                          <span className="text-teal-500">*</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-teal-600">
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
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ISOs</th>
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
                            <td className="py-2 px-3 text-right">{year.shops}</td>
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
                        <span className="text-lg font-bold text-teal-600">{item.percentage}%</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-6 bg-gray-200 rounded overflow-hidden">
                          <div
                            className="h-full bg-teal-500 rounded"
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
                  <div key={i} className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-teal-600">{metric.value}</div>
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
                    <h4 className="font-medium text-gray-900 text-sm group-hover:text-teal-600 transition-colors">
                      {source.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{source.detail}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors flex-shrink-0" />
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
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
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
