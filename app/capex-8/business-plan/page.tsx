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
  Tractor,
  Wifi,
  Database,
  Lock
} from 'lucide-react'

// Business Plan Data
const businessPlan = {
  companyName: "FarmLink",
  tagline: "Open Telematics for Modern Agriculture",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "John Deere, CNH, and AGCO have locked farmers into proprietary telematics ecosystems. Farmers can't access their own equipment data, lenders underwrite blind, and the right-to-repair movement is gaining momentum as equipment costs soar.",
    solution: "FarmLink is an open telematics aggregator that works across all manufacturers. Farmer-controlled data with selective sharing to insurers, lenders, and agronomists—becoming the equipment intelligence layer for agriculture.",
    market: "$14.77B precision agriculture market (2025) growing at 12.7% CAGR. Farm equipment telematics projected to reach $2.09B by 2034. Equipment finance market exceeds $65B annually. FTC lawsuit against Deere accelerates right-to-repair momentum.",
    ask: "$6M Seed Round to build cross-manufacturer telematics platform, pilot with equipment dealers and ag lenders, and establish farmer data cooperative."
  },

  problem: {
    title: "The Agricultural Equipment Data Crisis",
    points: [
      {
        title: "Proprietary Lock-In",
        detail: "OEMs like John Deere lock farmers into closed ecosystems. Equipment data belongs to manufacturers, not the farmers who generate it. Deere controls 36% of ag machinery market.",
        stat: "36%",
        statLabel: "Deere market share"
      },
      {
        title: "Right-to-Repair Battle",
        detail: "Farmers can't service their own equipment or use independent mechanics. FTC and 6 states filed lawsuit against John Deere in January 2025 for repair monopoly.",
        stat: "$4.2B",
        statLabel: "potential farmer savings nationally"
      },
      {
        title: "Lenders Underwriting Blind",
        detail: "Equipment financiers have no visibility into utilization, maintenance, or condition. $65B+ annual ag equipment financing relies on guesswork for residual values.",
        stat: "$65B+",
        statLabel: "annual ag equipment financing"
      },
      {
        title: "Fragmented Data Platforms",
        detail: "Climate FieldView covers 100M+ acres but owned by Bayer (conflict of interest). No neutral, farmer-first platform exists for equipment data aggregation.",
        stat: "100M+",
        statLabel: "acres on Climate FieldView"
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
        title: "FTC Lawsuit Against Deere",
        detail: "January 2025: FTC and 6 states sued John Deere for repair monopoly. Regulatory momentum unprecedented. 13+ states introduced right-to-repair bills in early 2025.",
        icon: "TrendingUp"
      },
      {
        title: "Colorado Law Active",
        detail: "First ag right-to-repair law took effect January 2024. Requires manufacturers to provide parts, firmware, and repair manuals. More states following.",
        icon: "Shield"
      },
      {
        title: "Precision Ag Boom",
        detail: "Market growing 12.7% CAGR to reach $26.86B by 2030. Farmers already have sensors, GPS, variable-rate equipment. Ready for unified data layer.",
        icon: "Zap"
      },
      {
        title: "Bayer Trust Deficit",
        detail: "Climate FieldView owned by agrochemical giant creates conflict of interest. 100M+ acres but farmers skeptical of data use. Neutral alternative needed.",
        icon: "AlertTriangle"
      }
    ]
  },

  marketSize: {
    title: "Market Opportunity",
    tam: {
      value: "$207B",
      label: "Total Addressable Market",
      description: "Agricultural Equipment Finance Market 2025",
      source: "Research and Markets"
    },
    sam: {
      value: "$14.77B",
      label: "Serviceable Addressable Market",
      description: "Precision Farming Market 2025",
      source: "Mordor Intelligence"
    },
    som: {
      value: "$85M",
      label: "Serviceable Obtainable Market",
      description: "Year 5: 45K machines, 2.5K farms, major lender partnerships",
      source: "Conservative capture estimate"
    },
    additionalMarkets: [
      { name: "Farm Equipment Telematics", value: "$487M (2025)", cagr: "17.6%" },
      { name: "Tractor Telematics", value: "$1.16B (2024)", cagr: "15.0%" },
      { name: "Autonomous Farm Equipment", value: "$70.9B (2025)", cagr: "7.6%" }
    ],
    keyMetrics: [
      { label: "US connected tractors", value: "500K+" },
      { label: "Average farm equipment value", value: "$500K+" },
      { label: "Precision ag adoption rate", value: "45%+" },
      { label: "Equipment financing utilization", value: "45% of operators" }
    ]
  },

  competition: {
    title: "Competitive Landscape",
    players: [
      {
        name: "John Deere Operations Center",
        type: "OEM Platform",
        marketShare: "36% of ag machinery",
        strengths: ["Deep equipment integration", "Market leadership", "$1B+ R&D investment", "Largest connected fleet"],
        weaknesses: ["Proprietary lock-in", "FTC lawsuit pending", "Right-to-repair battles", "Premium pricing"],
        threat: "Disruption target"
      },
      {
        name: "Climate FieldView (Bayer)",
        type: "Field Data Platform",
        marketShare: "100M+ acres",
        strengths: ["Agronomic expertise", "Satellite imagery", "60+ integration partners", "Large farmer base"],
        weaknesses: ["Bayer ownership (trust)", "Data use concerns", "Not equipment-focused", "Agrochemical conflict"],
        threat: "Different focus"
      },
      {
        name: "Trimble Ag Software",
        type: "Precision Ag Suite",
        marketShare: "~15% precision ag",
        strengths: ["GPS expertise", "Enterprise features", "Hardware quality", "Broad portfolio"],
        weaknesses: ["Complex/expensive", "Enterprise focus", "Not farmer-first", "Limited data portability"],
        threat: "Low"
      },
      {
        name: "CNH Industrial/AGCO",
        type: "OEM Competitors",
        marketShare: "~25% combined",
        strengths: ["Equipment integration", "Dealer networks", "Financing arms"],
        weaknesses: ["Same proprietary model", "Smaller than Deere", "Following not leading"],
        threat: "Potential partners"
      }
    ],
    ourAdvantage: {
      title: "FarmLink's Unfair Advantages",
      points: [
        "Manufacturer-agnostic: Connect any brand, owned by farmers not OEMs",
        "Data moat: Only aggregated view of cross-brand equipment data",
        "Regulatory tailwind: FTC lawsuit + right-to-repair laws favor open systems",
        "Network effects: More equipment = better benchmarks = more value = more equipment",
        "Trust positioning: Farmer-owned cooperative model vs. corporate ownership"
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
          "Multi-brand telematics dashboard (web + mobile)",
          "Universal CAN bus retrofit device development",
          "Farmer data vault with ownership controls",
          "Basic equipment tracking and maintenance alerts",
          "Dealer onboarding portal"
        ],
        milestone: "100 farms connected, 2,000 machines tracked, 3 dealer partnerships"
      },
      {
        phase: "Phase 2: Data Services",
        timeline: "Months 7-12",
        deliverables: [
          "Equipment lender data portal (utilization, condition)",
          "Crop insurance integration for operational verification",
          "Predictive maintenance algorithms",
          "Fleet analytics and peer benchmarking",
          "API for agronomist and input supplier integration"
        ],
        milestone: "400 farms, 8K machines, first lender pilot, $3.2M ARR"
      },
      {
        phase: "Phase 3: Scale",
        timeline: "Year 2-3",
        deliverables: [
          "National dealer network (500+ locations)",
          "Insurance premium discount programs",
          "Carbon credit verification for sustainable practices",
          "Equipment valuation API for lenders",
          "International expansion (Canada, Australia)"
        ],
        milestone: "2,500 farms, 45K machines, $85M ARR, market leader"
      }
    ]
  },

  businessModel: {
    title: "Business Model",
    revenueStreams: [
      {
        name: "Farmer SaaS",
        description: "Monthly subscription for equipment connectivity, data dashboard, and analytics",
        pricing: "$50-$200/machine/month based on features",
        margin: "82%",
        year1Revenue: "$1.6M",
        year3Revenue: "$18M"
      },
      {
        name: "Retrofit Devices",
        description: "Hardware devices to connect older equipment or manufacturers without open APIs",
        pricing: "$800-$2,500/device + installation",
        margin: "45%",
        year1Revenue: "$800K",
        year3Revenue: "$12M"
      },
      {
        name: "Data Licensing",
        description: "Aggregated, anonymized data for equipment financiers, crop insurers, and manufacturers",
        pricing: "$100K-$500K annual contracts",
        margin: "92%",
        year1Revenue: "$600K",
        year3Revenue: "$15M"
      },
      {
        name: "API Access",
        description: "Developer API for agronomists, input suppliers, and ag retailers to access farmer-authorized data",
        pricing: "$0.10-$0.50/API call + base subscription",
        margin: "88%",
        year1Revenue: "$200K",
        year3Revenue: "$8M"
      }
    ],
    unitEconomics: {
      title: "Unit Economics Per Farm",
      metrics: [
        { label: "Customer Acquisition Cost (CAC)", value: "$1,200", note: "$600 digital + $600 dealer/channel" },
        { label: "Average Revenue Per Farm (ARPF)", value: "$1,100/month", note: "Blended across 8-machine avg farm" },
        { label: "Gross Margin", value: "74%", note: "After device COGS and support" },
        { label: "Lifetime Value (LTV)", value: "$18,000", note: "Assuming 5+ year retention" },
        { label: "LTV:CAC Ratio", value: "15:1", note: "Exceptional unit economics" },
        { label: "Payback Period", value: "6 months", note: "Very fast capital efficiency" }
      ]
    }
  },

  goToMarket: {
    title: "Go-to-Market Strategy",
    phases: [
      {
        phase: "Land",
        timeline: "Months 1-6",
        strategy: "Progressive Farmer Focus",
        tactics: [
          "Target large progressive farms (5,000+ acres) already frustrated with OEM lock-in",
          "Partner with independent equipment dealers seeking competitive advantage",
          "Leverage right-to-repair advocacy groups for farmer introductions",
          "Offer free pilot period for early adopter farms with case study rights"
        ],
        metrics: ["100 farms onboarded", "85% activation rate", "NPS > 60"]
      },
      {
        phase: "Expand",
        timeline: "Months 7-12",
        strategy: "Financial Services Integration",
        tactics: [
          "Approach equipment lenders with utilization data pilot proposals",
          "Target crop insurers for operational verification partnerships",
          "Build relationships with Farm Credit institutions",
          "Launch dealer certification program with equipment access benefits"
        ],
        metrics: ["3 lender pilots", "1 insurance partnership", "400 farms connected"]
      },
      {
        phase: "Dominate",
        timeline: "Year 2+",
        strategy: "Network Effects & Data Moat",
        tactics: [
          "Leverage lender partnerships for farmer distribution (financing incentive)",
          "Expand to adjacent markets: livestock, irrigation, grain handling",
          "Launch farmer data cooperative with profit-sharing model",
          "Build API ecosystem with agronomists and input suppliers"
        ],
        metrics: ["2,500+ farms", "45K+ machines", "5+ lender partnerships"]
      }
    ],
    channels: [
      { name: "Equipment Dealers", description: "Independent dealers seeking multi-brand solution", cost: "Medium", effectiveness: "Very High" },
      { name: "Farm Credit Institutions", description: "Lenders bundling data access with equipment financing", cost: "Low", effectiveness: "Very High" },
      { name: "Right-to-Repair Advocacy", description: "Farm Bureau, PIRG, repair associations", cost: "Low", effectiveness: "High" },
      { name: "Farm Cooperatives", description: "Ag co-ops with member farmers", cost: "Medium", effectiveness: "High" },
      { name: "Digital Marketing", description: "SEO, content, targeted ads to farm operations", cost: "Medium", effectiveness: "Medium" }
    ]
  },

  team: {
    title: "Team Requirements",
    currentNeeds: [
      {
        role: "CEO / Founder",
        skills: "Ag-tech experience, fundraising, farmer relationships, vision",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "CTO",
        skills: "Embedded systems, telematics, IoT, agricultural technology",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Engineering",
        skills: "Platform architecture, API design, data infrastructure",
        status: "Seeking",
        priority: "High"
      },
      {
        role: "VP Sales",
        skills: "Agricultural industry relationships, dealer channel experience",
        status: "Seeking",
        priority: "High"
      }
    ],
    advisorNeeds: [
      "Former John Deere or CNH executive with dealer network knowledge",
      "Farm Credit institution executive",
      "Ag-tech founder with successful exit",
      "Right-to-repair advocate with farmer coalition relationships"
    ],
    orgPlan: {
      year1: "15 FTEs: 6 engineering, 4 sales, 3 ops, 2 G&A",
      year2: "35 FTEs: 12 engineering, 12 sales, 7 ops, 4 G&A",
      year3: "80 FTEs: 25 engineering, 30 sales, 15 ops, 10 G&A"
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "OEM Retaliation",
        severity: "High",
        likelihood: "Medium",
        description: "John Deere could block CAN bus access, void warranties, or launch competing open platform in response to FTC pressure.",
        mitigation: "Position as complementary to OEM systems. Right-to-repair legal momentum provides cover. FTC lawsuit creates regulatory scrutiny on anti-competitive behavior. Build farmer coalition first."
      },
      {
        risk: "Hardware Complexity",
        severity: "High",
        likelihood: "Medium",
        description: "Retrofit devices must work across hundreds of equipment models with varying CAN bus protocols.",
        mitigation: "Partner with proven telematics hardware manufacturers. Start with software-first for newer equipment with APIs. Retrofit is Phase 2 after proving value. Focus on top 20 equipment models initially."
      },
      {
        risk: "Farmer Adoption",
        severity: "Medium",
        likelihood: "Medium",
        description: "Farmers may be skeptical of yet another data platform. Seasonal time constraints limit engagement.",
        mitigation: "Start with large progressive farms already frustrated with lock-in. Partner with trusted dealers and cooperatives. Prove ROI in first season. Farmer-owned cooperative structure builds trust."
      },
      {
        risk: "Lender Sales Cycle",
        severity: "Medium",
        likelihood: "High",
        description: "Equipment lenders and crop insurers have long procurement cycles (12-18 months).",
        mitigation: "Start with pilot programs requiring minimal procurement. Target progressive Farm Credit institutions. Build recurring SaaS revenue while enterprise deals develop."
      },
      {
        risk: "Data Privacy Backlash",
        severity: "Medium",
        likelihood: "Low",
        description: "Farmers may resist data sharing if monetization feels exploitative.",
        mitigation: "Farmer-first data ownership is core value prop. Transparent sharing controls. Never sell individual farm data without explicit consent. Cooperative profit-sharing model."
      },
      {
        risk: "Competition from Climate/Bayer",
        severity: "Low",
        likelihood: "Low",
        description: "Climate FieldView could expand into equipment telematics to compete.",
        mitigation: "Trust deficit with agrochemical ownership. We're equipment-focused, not input sales. Neutral, farmer-owned positioning is differentiated."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Q1 2026", milestone: "Close $6M seed round, hire core engineering team", status: "target" },
      { timeline: "Q2 2026", milestone: "Launch platform with 100 farms, 2,000 machines connected", status: "target" },
      { timeline: "Q3 2026", milestone: "First equipment lender pilot (5,000+ financed machines)", status: "target" },
      { timeline: "Q4 2026", milestone: "Retrofit device launch, 400 farms connected, $3.2M ARR", status: "target" },
      { timeline: "Q1 2027", milestone: "Crop insurance partnership announcement", status: "target" },
      { timeline: "Q2 2027", milestone: "1,100 farms, 22,000 machines, first data licensing revenue", status: "target" },
      { timeline: "Q4 2027", milestone: "Series A at $80-100M valuation, $14M ARR run rate", status: "target" }
    ]
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withLenderPartners: {
        name: "With Ag Lender & Insurance Partnerships",
        description: "Partner with equipment financiers and crop insurers for distribution and data licensing",
        years: [
          { year: 1, revenue: "$3.2M", farms: 400, machines: "8K", arr: "$3.2M", burn: "$4M", runway: "18 months" },
          { year: 2, revenue: "$14M", farms: 1100, machines: "22K", arr: "$14M", burn: "$2M", runway: "24 months" },
          { year: 3, revenue: "$38M", farms: 1900, machines: "38K", arr: "$38M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$68M", farms: 2800, machines: "52K", arr: "$68M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$112M", farms: 4000, machines: "75K", arr: "$112M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$6M Seed",
        keyAssumptions: [
          "Equipment lenders drive 40% of new farm signups via financing incentives",
          "Crop insurers offer premium discounts for connected/verified farms",
          "Data licensing accelerates Year 3+ (aggregated utilization benchmarks)",
          "Retrofit devices enable older equipment market ($500K+ avg farm equipment value)"
        ]
      },
      withoutLenderPartners: {
        name: "Without Financial Services Partners",
        description: "Direct farmer sales through dealers and farm cooperatives only",
        years: [
          { year: 1, revenue: "$1.8M", farms: 200, machines: "4K", arr: "$1.8M", burn: "$3M", runway: "24 months" },
          { year: 2, revenue: "$7M", farms: 600, machines: "12K", arr: "$7M", burn: "$1.5M", runway: "36 months" },
          { year: 3, revenue: "$18M", farms: 1200, machines: "24K", arr: "$18M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$35M", farms: 2000, machines: "40K", arr: "$35M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$58M", farms: 3000, machines: "55K", arr: "$58M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$4.5M Seed",
        keyAssumptions: [
          "Direct sales to progressive farms frustrated with OEM lock-in",
          "Equipment dealer channel partnerships for distribution",
          "Slower but higher-quality farm relationships",
          "Data licensing develops organically from install base"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $6M Seed Funds",
      breakdown: [
        { category: "Engineering & Product", amount: "$2.7M", percentage: 45, detail: "Platform, device firmware, API development, data infrastructure" },
        { category: "Sales & Partnerships", amount: "$1.5M", percentage: 25, detail: "Farmer sales, dealer relationships, lender partnerships" },
        { category: "Hardware & Manufacturing", amount: "$900K", percentage: 15, detail: "Retrofit device development, initial inventory, testing" },
        { category: "Marketing & Community", amount: "$600K", percentage: 10, detail: "Farm shows, content, cooperative relationships, advocacy" },
        { category: "Operations & Legal", amount: "$300K", percentage: 5, detail: "IP protection, compliance, G&A" }
      ]
    }
  },

  ask: {
    title: "The Ask",
    amount: "$6,000,000",
    round: "Seed Round",
    terms: "Priced round at $24M post-money valuation",
    useOfFunds: [
      "Build cross-manufacturer telematics platform (web + mobile)",
      "Develop and manufacture universal retrofit devices",
      "Acquire first 400 farms and 8,000 connected machines",
      "Launch equipment lender pilot partnerships (3+ institutions)"
    ],
    timeline: "18-month runway to Series A milestones",
    seriesA: {
      timing: "Q4 2027",
      metrics: "$14M ARR, 1,100+ farms, 3+ lender partnerships, data licensing traction",
      raise: "$25-35M at $80-100M valuation"
    }
  },

  sources: [
    { name: "Precision Farming Market 2025", url: "https://www.mordorintelligence.com/industry-reports/global-precision-farming-market-industry", detail: "$14.77B in 2025, 12.7% CAGR to $26.86B by 2030" },
    { name: "Farm Equipment Telematics Market", url: "https://www.researchandmarkets.com/report/farm-equipment-telematics-market", detail: "$487M in 2025, 17.6% CAGR to $2.09B by 2034" },
    { name: "Agricultural Equipment Finance Market", url: "https://www.researchandmarkets.com/report/agricultural-equipment-financing", detail: "$207B in 2025, 5.3% CAGR to $297B by 2032" },
    { name: "John Deere Market Position", url: "https://www.statista.com/topics/2724/john-deere/", detail: "36% of ag machinery manufacturing industry revenue" },
    { name: "Climate FieldView Coverage", url: "https://climate.com/", detail: "100M+ acres across US, Canada, Brazil; 100K+ farmers" },
    { name: "FTC Lawsuit Against Deere", url: "https://www.regulatoryoversight.com/2025/03/ftc-states-sue-john-deere-in-right-to-repair-lawsuit/", detail: "January 2025: FTC + 6 states sue for repair monopoly" },
    { name: "Colorado Right-to-Repair Law", url: "https://leg.colorado.gov/bills/hb23-1011", detail: "First ag right-to-repair law, effective January 2024" },
    { name: "Tractor Telematics Market", url: "https://www.reanin.com/reports/tractor-telematics-market", detail: "$1.16B in 2024, 15% CAGR to $3.08B by 2031" }
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
            href="/capex-8"
            className="inline-flex items-center gap-2 text-green-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to FarmLink Overview
          </a>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Tractor className="w-6 h-6" />
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
              <div className="text-2xl font-bold">{businessPlan.marketSize.sam.value}</div>
              <div className="text-sm text-green-100">Precision Ag Market</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">12.7%</div>
              <div className="text-sm text-green-100">Market CAGR</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">15:1</div>
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

              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => (
                  <div key={i} className="p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-400">
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
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.tam.label}</div>
                  <div className="text-sm text-green-100 mt-1">{businessPlan.marketSize.tam.description}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.sam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.sam.label}</div>
                  <div className="text-sm text-teal-100 mt-1">{businessPlan.marketSize.sam.description}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.som.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.som.label}</div>
                  <div className="text-sm text-emerald-100 mt-1">{businessPlan.marketSize.som.description}</div>
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
                            player.threat === 'Disruption target' ? 'bg-green-100 text-green-700' :
                            player.threat === 'Different focus' ? 'bg-blue-100 text-blue-700' :
                            player.threat === 'Low' ? 'bg-gray-100 text-gray-700' :
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

              <div className="grid md:grid-cols-2 gap-4">
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
                {/* Scenario 1: With Lender Partners */}
                <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-green-600 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withLenderPartners.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withLenderPartners.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-green-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Farms</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Machines</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withLenderPartners.years.map((year, i) => (
                          <tr key={i} className="border-b border-green-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.farms.toLocaleString()}</td>
                            <td className="py-2 px-3 text-right">{year.machines}</td>
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
                      {businessPlan.financials.scenarios.withLenderPartners.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-green-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-green-600">
                      Funding Required: {businessPlan.financials.scenarios.withLenderPartners.fundingRequired}
                    </span>
                  </div>
                </div>

                {/* Scenario 2: Without Lender Partners */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{businessPlan.financials.scenarios.withoutLenderPartners.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withoutLenderPartners.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Farms</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Machines</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutLenderPartners.years.map((year, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.farms.toLocaleString()}</td>
                            <td className="py-2 px-3 text-right">{year.machines}</td>
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
                      {businessPlan.financials.scenarios.withoutLenderPartners.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-gray-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-gray-600">
                      Funding Required: {businessPlan.financials.scenarios.withoutLenderPartners.fundingRequired}
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
