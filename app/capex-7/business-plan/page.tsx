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
  Truck,
  Battery,
  MapPin,
  Database
} from 'lucide-react'

// Business Plan Data
const businessPlan = {
  companyName: "FleetForward",
  tagline: "The Intelligence Layer for Municipal Fleet Electrification",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Every city, county, and school district is buying EVs with no coordination. Charging infrastructure decisions are made in silos. $7.5B in federal NEVI funding is flooding in with zero visibility into how it's being deployed.",
    solution: "FleetForward tracks every municipal EV purchase, charging installation, and grant application—creating the intelligence layer for the federal EV infrastructure program and becoming the network of record for municipal fleet electrification.",
    market: "$7.5B NEVI program plus $45B+ municipal vehicle market. 90,000 local governments need coordination. Equipment vendors, grant consultants, and utilities desperately need market intelligence.",
    ask: "$5M Seed Round to build the municipal EV registry, launch grant tracking platform, and establish partnerships with major municipal associations."
  },

  problem: {
    title: "The Municipal Electrification Chaos",
    points: [
      {
        title: "Zero Coordination Across Jurisdictions",
        detail: "Cities, counties, school districts, transit authorities—all buying EVs independently. No shared learning, duplicated mistakes, incompatible charging networks.",
        stat: "90K+",
        statLabel: "local government entities"
      },
      {
        title: "Federal Money Flooding In Blind",
        detail: "$7.5B NEVI program plus billions more in IRA funding. Grants awarded with no tracking of outcomes. Taxpayers can't see ROI.",
        stat: "$7.5B",
        statLabel: "NEVI program funding"
      },
      {
        title: "Charging Infrastructure Silos",
        detail: "Every municipality planning charging separately. Incompatible systems, coverage gaps, stranded assets. No regional coordination.",
        stat: "0",
        statLabel: "unified municipal charging databases"
      },
      {
        title: "Vendors Flying Blind",
        detail: "EV manufacturers, charging companies, and fleet service providers have no visibility into municipal procurement pipelines or installed base.",
        stat: "$45B",
        statLabel: "municipal vehicle market"
      }
    ]
  },

  solution: {
    title: "FleetForward: Intelligence for Municipal Electrification",
    tagline: "Track. Coordinate. Optimize. Deploy.",
    pillars: [
      {
        icon: "Truck",
        title: "Vehicle Registry",
        description: "Comprehensive database of municipal EV purchases, fleet composition, and replacement schedules across all local governments.",
        features: ["Vehicle tracking by jurisdiction", "Fleet composition analysis", "Replacement timeline modeling", "TCO benchmarking"]
      },
      {
        icon: "Battery",
        title: "Charging Infrastructure Map",
        description: "Real-time tracking of municipal charging installations, utilization rates, and coverage gaps across regions.",
        features: ["Installation tracking", "Utilization monitoring", "Coverage gap analysis", "Interoperability scoring"]
      },
      {
        icon: "DollarSign",
        title: "Grant Intelligence",
        description: "Track every federal and state grant application, award, and outcome for EV infrastructure funding.",
        features: ["NEVI tracking", "Application pipeline", "Award monitoring", "Outcome reporting"]
      },
      {
        icon: "MapPin",
        title: "Coordination Platform",
        description: "Enable regional coordination between municipalities for joint procurement, shared infrastructure, and best practice sharing.",
        features: ["Regional planning tools", "Joint procurement matching", "Best practice library", "Peer benchmarking"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "NEVI Program Deployment",
        detail: "$7.5B National Electric Vehicle Infrastructure program now deploying. States scrambling to allocate funds. Only $527M obligated of $3.3B allocated through FY2025.",
        icon: "Zap"
      },
      {
        title: "Municipal EV Mandates",
        detail: "State laws requiring fleet electrification. California, New York, others mandating zero-emission municipal vehicles by 2035. Advanced Clean Fleets rule accelerating adoption.",
        icon: "Shield"
      },
      {
        title: "Federal Reporting Requirements",
        detail: "New federal requirements for grant reporting and outcome tracking. Municipalities need systems to comply. We become that system.",
        icon: "FileText"
      },
      {
        title: "Vendor Market Need",
        detail: "EV manufacturers and charging companies desperate for municipal market intelligence. Fleet electrification market growing at 9.2% CAGR to $224B by 2034.",
        icon: "TrendingUp"
      },
      {
        title: "School Bus Electrification Wave",
        detail: "$5B Clean School Bus Program has funded 8,700+ buses. 95% are electric. Demand outpaces funding 3:1. Districts need coordination.",
        icon: "Building2"
      }
    ]
  },

  marketSize: {
    title: "Market Opportunity",
    tam: {
      value: "$93B",
      label: "Total Addressable Market",
      description: "Global Fleet Electrification Market 2024",
      source: "Precedence Research"
    },
    sam: {
      value: "$45B",
      label: "Serviceable Addressable Market",
      description: "U.S. Municipal Vehicle Market",
      source: "Market Research Intellect"
    },
    som: {
      value: "$48M",
      label: "Serviceable Obtainable Market",
      description: "Year 5 revenue target",
      source: "Conservative capture estimate"
    },
    additionalMarkets: [
      { name: "Fleet Electrification (2034)", value: "$224.5B", cagr: "9.2%" },
      { name: "U.S. Fleet Management", value: "$28.9B (2032)", cagr: "11.4%" },
      { name: "Government Vehicle Sales (2023)", value: "272K units", cagr: "35.5% YoY" },
      { name: "Clean School Bus Program", value: "$5B allocated", cagr: "8,700+ buses funded" }
    ],
    keyMetrics: [
      { label: "Local governments in U.S.", value: "90,837" },
      { label: "NEVI funding allocated (FY22-25)", value: "$3.3B" },
      { label: "NEVI stations operational", value: "57 (Feb 2025)" },
      { label: "Electric school buses committed", value: "13,931" },
      { label: "Electric school buses operational", value: "5,300" },
      { label: "Municipal EV truck adoption", value: "20% of EV truck sales" }
    ]
  },

  competition: {
    title: "Competitive Landscape",
    players: [
      {
        name: "Geotab / Samsara",
        type: "Fleet Telematics",
        marketShare: "~15%",
        strengths: ["Strong telematics", "Large customer base", "Hardware + software"],
        weaknesses: ["No procurement data", "Not municipal-focused", "No grant tracking", "No infrastructure view"],
        threat: "Low - different focus"
      },
      {
        name: "GrantWatch / Grants.gov",
        type: "Grant Discovery",
        marketShare: "Grant discovery only",
        strengths: ["Grant databases", "Search functionality", "Established platforms"],
        weaknesses: ["No outcome tracking", "No municipal focus", "No fleet intelligence", "No vendor data"],
        threat: "Low"
      },
      {
        name: "AFDC (DOE)",
        type: "Federal Resource",
        marketShare: "Reference resource",
        strengths: ["Authoritative source", "Free access", "Station locator"],
        weaknesses: ["Public data only", "No procurement data", "No coordination tools", "No real-time updates"],
        threat: "Partner not competitor"
      },
      {
        name: "Municipal Associations (NLC, ICMA)",
        type: "Member Organizations",
        marketShare: "N/A",
        strengths: ["Municipal relationships", "Trust", "Policy influence"],
        weaknesses: ["No tech platform", "Manual coordination", "Limited data", "Potential partners"],
        threat: "Partners not competitors"
      }
    ],
    ourAdvantage: {
      title: "FleetForward's Unfair Advantages",
      points: [
        "Network effect: More municipalities = better benchmarking = more vendor interest = more data = better grant outcomes = more municipalities",
        "Data moat: First-mover on NEVI tracking creates permanent data advantage across all 50 states",
        "Federal integration potential: Position to become the implementation layer for federal reporting requirements",
        "Multi-sided platform: Municipal SaaS + vendor intelligence + utility data creates multiple revenue streams",
        "No channel conflict: We help municipalities and vendors succeed, not compete with them"
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
          "Municipal EV registry with vehicle tracking",
          "NEVI grant tracking dashboard for all 50 states",
          "Basic charging infrastructure mapping",
          "Municipal onboarding and data import tools",
          "NLC/ICMA partnership integration"
        ],
        milestone: "400 municipalities onboarded, all 50 states grant tracking live"
      },
      {
        phase: "Phase 2: Intelligence",
        timeline: "Months 7-12",
        deliverables: [
          "Vendor intelligence portal and API",
          "Advanced benchmarking and peer comparison tools",
          "Regional coordination and joint procurement matching",
          "Clean School Bus Program integration",
          "Utility grid planning data module"
        ],
        milestone: "950 municipalities, 50 vendor clients, $8.5M ARR"
      },
      {
        phase: "Phase 3: Scale",
        timeline: "Year 2-3",
        deliverables: [
          "Federal DOT reporting integration",
          "Predictive analytics for grant success",
          "National charging network interoperability scoring",
          "Insurance and risk data products",
          "Expansion to state-level fleet management"
        ],
        milestone: "$35M ARR, 2,200 municipalities, federal partnership"
      }
    ]
  },

  businessModel: {
    title: "Business Model",
    revenueStreams: [
      {
        name: "Municipal SaaS",
        description: "Subscription platform for municipalities to track their fleets, plan charging, and coordinate with peers",
        pricing: "$299-$1,499/month based on fleet size",
        margin: "85%",
        year1Revenue: "$1.4M",
        year3Revenue: "$8.5M"
      },
      {
        name: "Vendor Intelligence",
        description: "Market intelligence subscriptions for EV manufacturers, charging companies, and fleet service providers",
        pricing: "$50K-$250K/year based on scope",
        margin: "90%",
        year1Revenue: "$400K",
        year3Revenue: "$6M"
      },
      {
        name: "Grant Services",
        description: "Grant application support, tracking, and outcome reporting for federal EV infrastructure programs",
        pricing: "2-5% of grant value or flat fee",
        margin: "70%",
        year1Revenue: "$300K",
        year3Revenue: "$3M"
      },
      {
        name: "Data Licensing",
        description: "Aggregated, anonymized data for utilities, researchers, and policymakers",
        pricing: "$25K-$150K annual contracts",
        margin: "95%",
        year1Revenue: "$100K",
        year3Revenue: "$1.5M"
      }
    ],
    unitEconomics: {
      title: "Unit Economics Per Municipality",
      metrics: [
        { label: "Customer Acquisition Cost (CAC)", value: "$1,200", note: "Partnership + content marketing" },
        { label: "Average Revenue Per Municipality", value: "$600/month", note: "Blended across tiers" },
        { label: "Gross Margin", value: "82%", note: "After support and infrastructure" },
        { label: "Lifetime Value (LTV)", value: "$12,000", note: "4+ year government contract cycles" },
        { label: "LTV:CAC Ratio", value: "10:1", note: "Strong unit economics" },
        { label: "Payback Period", value: "6 months", note: "Fast capital efficiency" }
      ]
    }
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withFederalPartnership: {
        name: "With Federal Grant Angle (Recommended)",
        description: "Leverage NEVI program for distribution and become essential infrastructure for federal reporting",
        years: [
          { year: 1, revenue: "$2.2M", shops: 400, arr: "$2.2M", burn: "$2.8M", runway: "21 months" },
          { year: 2, revenue: "$8.5M", shops: 950, arr: "$8.5M", burn: "$1.5M", runway: "Profitable by Q4" },
          { year: 3, revenue: "$19M", shops: 1600, arr: "$19M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$35M", shops: 2200, arr: "$35M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$58M", shops: 3000, arr: "$58M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$5M Seed",
        keyAssumptions: [
          "NLC/ICMA partnerships drive 40% of municipal leads",
          "Federal reporting requirements create pull demand",
          "Vendor intelligence scales rapidly with data network effects",
          "Grant services provide high-margin expansion revenue",
          "4+ year municipal customer retention (sticky government contracts)"
        ]
      },
      withoutFederalPartnership: {
        name: "Without Federal Partnership (Conservative)",
        description: "Direct municipal sales with vendor intelligence focus",
        years: [
          { year: 1, revenue: "$1.4M", shops: 250, arr: "$1.4M", burn: "$2.0M", runway: "30 months" },
          { year: 2, revenue: "$5.2M", shops: 600, arr: "$5.2M", burn: "$800K", runway: "Profitable by Q4" },
          { year: 3, revenue: "$12M", shops: 1100, arr: "$12M", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$24M", shops: 1700, arr: "$24M", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$42M", shops: 2400, arr: "$42M", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$3.5M Seed",
        keyAssumptions: [
          "Direct sales to progressive municipalities",
          "Slower but organic municipal adoption",
          "Vendor intelligence is primary revenue driver early",
          "Less dependency on federal program timelines",
          "Higher churn without network effects (35% vs 25%)"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $5M Seed Funds",
      breakdown: [
        { category: "Engineering & Product", amount: "$2.0M", percentage: 40, detail: "Platform build, data infrastructure, API development" },
        { category: "Sales & Partnerships", amount: "$1.25M", percentage: 25, detail: "Municipal sales, NLC/ICMA partnerships, vendor BD" },
        { category: "Data & Content", amount: "$1.0M", percentage: 20, detail: "Grant tracking, vehicle registry, research and analysis" },
        { category: "Marketing", amount: "$500K", percentage: 10, detail: "Industry events, content marketing, thought leadership" },
        { category: "G&A & Buffer", amount: "$250K", percentage: 5, detail: "Legal, compliance, operations, contingency" }
      ]
    }
  },

  goToMarket: {
    title: "Go-to-Market Strategy",
    phases: [
      {
        phase: "Land",
        timeline: "Months 1-6",
        strategy: "Association Partnership Launch",
        tactics: [
          "Partner with National League of Cities (NLC) for credibility and distribution",
          "Launch with ICMA (International City/County Management Association) endorsement",
          "Target California, Texas, Florida municipalities with active NEVI programs",
          "Offer free grant tracking tier to build database and prove value"
        ],
        metrics: ["NLC partnership signed", "400 municipalities onboarded", "All 50 states grant tracking"]
      },
      {
        phase: "Expand",
        timeline: "Months 7-12",
        strategy: "Vendor Intelligence Launch",
        tactics: [
          "Launch vendor intelligence portal with procurement pipeline data",
          "Approach EV OEMs (Ford, GM, Rivian) and charging companies (ChargePoint, EVgo)",
          "Build utility partnerships for grid planning data",
          "Integrate Clean School Bus Program tracking"
        ],
        metrics: ["50 vendor clients", "950 municipalities", "2 utility pilots"]
      },
      {
        phase: "Dominate",
        timeline: "Year 2+",
        strategy: "Federal Integration & National Scale",
        tactics: [
          "Pursue DOT integration for federal reporting compliance",
          "Expand to state-level fleet management contracts",
          "Launch insurance and risk data products",
          "Build API ecosystem for third-party integrations"
        ],
        metrics: ["3,000+ municipalities", "Federal reporting partner", "National coverage"]
      }
    ],
    channels: [
      { name: "Association Partnerships", description: "NLC, ICMA, state municipal leagues", cost: "Medium", effectiveness: "Very High" },
      { name: "Federal Program Integration", description: "NEVI, Clean School Bus, DOT relationships", cost: "Low", effectiveness: "Very High" },
      { name: "Direct Sales", description: "Outbound to large municipalities and counties", cost: "High", effectiveness: "High" },
      { name: "Content Marketing", description: "Grant guides, benchmarking reports, thought leadership", cost: "Medium", effectiveness: "High" },
      { name: "Industry Events", description: "NLC City Summit, ICMA Annual Conference, EV conferences", cost: "Medium", effectiveness: "Medium" }
    ]
  },

  team: {
    title: "Team Requirements",
    currentNeeds: [
      {
        role: "CEO / Founder",
        skills: "GovTech experience, fundraising, municipal relationships, vision",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "CTO",
        skills: "Data infrastructure, platform development, government systems integration",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "VP Government Sales",
        skills: "Municipal sales experience, association relationships, procurement expertise",
        status: "Seeking",
        priority: "High"
      },
      {
        role: "VP Business Development",
        skills: "Vendor relationships, utility partnerships, enterprise sales",
        status: "Seeking",
        priority: "High"
      }
    ],
    advisorNeeds: [
      "Former municipal fleet director or city manager",
      "DOT or EPA official with NEVI/EV program experience",
      "EV industry executive (OEM or charging infrastructure)",
      "GovTech founder with successful exit (Govtech, OpenGov alumni)"
    ],
    orgPlan: {
      year1: "15 FTEs: 5 engineering, 4 sales, 3 data/content, 2 ops, 1 G&A",
      year2: "35 FTEs: 12 engineering, 12 sales, 6 data, 3 ops, 2 G&A",
      year3: "75 FTEs: 25 engineering, 25 sales, 12 data, 8 ops, 5 G&A"
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "Federal Program Changes / Political Uncertainty",
        severity: "High",
        likelihood: "Medium",
        description: "NEVI program guidance rescinded in Feb 2025. 16 states sued over impoundment. Future administration changes could alter federal EV priorities.",
        mitigation: "Diversify across multiple funding sources (NEVI, IRA, state programs, Clean School Bus). Build municipal value prop independent of federal grants. Vendor intelligence doesn't depend on federal programs. Municipal electrification driven by TCO, not just policy."
      },
      {
        risk: "Municipal Sales Cycles",
        severity: "High",
        likelihood: "High",
        description: "Government procurement is slow (6-18 months). Budget cycles are annual. Multiple stakeholders require buy-in.",
        mitigation: "Partner with NLC/ICMA for credibility and shortened sales cycles. Start with progressive early-adopter municipalities. Offer freemium tier for basic grant tracking to prove value before paid conversion."
      },
      {
        risk: "Data Collection Complexity",
        severity: "Medium",
        likelihood: "Medium",
        description: "Municipal data is fragmented across 90K+ jurisdictions. No standard formats. Requires manual data entry or integration work.",
        mitigation: "Start with public procurement data and grant records (NEVI, Clean School Bus). Incentivize municipalities to contribute data via benchmarking value. Build partnerships with state agencies. Automate collection where possible."
      },
      {
        risk: "Competition from Government Platforms",
        severity: "Medium",
        likelihood: "Low",
        description: "Federal government could build competing platform. DOE AFDC could expand scope.",
        mitigation: "Position as partner to federal/state agencies, not competitor. Offer to be the implementation layer for government initiatives. Government IT projects historically slow and underfunded. Move fast to build data moat."
      },
      {
        risk: "Vendor Revenue Concentration",
        severity: "Medium",
        likelihood: "Medium",
        description: "Large vendor contracts could create concentration risk. Single vendor cancellation could impact revenue.",
        mitigation: "Diversify across EV OEMs, charging companies, and fleet services. No single vendor >15% of revenue. Build unique data moat that makes platform indispensable."
      },
      {
        risk: "Technology Execution",
        severity: "Medium",
        likelihood: "Low",
        description: "Platform development delays or data integration challenges could slow growth and burn runway.",
        mitigation: "Hire experienced CTO with GovTech background. Start with MVP and iterate based on municipal feedback. Use existing data sources and APIs where possible."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Month 3", milestone: "Platform MVP live, first 100 municipalities onboarded", status: "planned" },
      { timeline: "Month 6", milestone: "NLC partnership signed, 400 municipalities, all 50 states grant tracking", status: "planned" },
      { timeline: "Month 9", milestone: "First vendor intelligence contracts, 600 municipalities", status: "planned" },
      { timeline: "Month 12", milestone: "$2.2M ARR, 950 municipalities, 50 vendor clients", status: "planned" },
      { timeline: "Month 15", milestone: "DOT pilot program initiated, $4M ARR run rate", status: "planned" },
      { timeline: "Month 18", milestone: "Series A fundraise, 1,200 municipalities", status: "planned" },
      { timeline: "Month 24", milestone: "$8.5M ARR, federal reporting integration live", status: "planned" }
    ]
  },

  ask: {
    title: "The Ask",
    amount: "$5,000,000",
    round: "Seed Round",
    terms: "Priced round at $20M post-money valuation",
    useOfFunds: [
      "Build municipal EV registry and grant tracking platform",
      "Establish NLC and ICMA partnership integrations",
      "Launch vendor intelligence portal with procurement pipeline data",
      "Onboard first 400 municipalities across all 50 states"
    ],
    timeline: "21-month runway to Series A milestones",
    seriesA: {
      timing: "Month 15-18",
      metrics: "$4-5M ARR, 1,000+ municipalities, federal partnership",
      raise: "$15-25M at $80-120M valuation"
    }
  },

  sources: [
    { name: "NEVI Formula Program (FHWA)", url: "https://www.fhwa.dot.gov/environment/nevi/", detail: "$5B formula + $2.5B discretionary, $3.3B allocated through FY2025" },
    { name: "Fleet Electrification Market Size (Precedence Research)", url: "https://www.precedenceresearch.com/electrification-market", detail: "$93B in 2024, projected $224B by 2034, 9.2% CAGR" },
    { name: "U.S. Fleet Management Market (Data Bridge)", url: "https://www.databridgemarketresearch.com/reports/us-fleet-management-market", detail: "$12.2B in 2024, projected $28.9B by 2032, 11.4% CAGR" },
    { name: "Municipal Vehicle Market (Market Research Intellect)", url: "https://www.marketresearchintellect.com/product/global-municipal-vehicles-market-size-and-forecast/", detail: "$45B in 2023, projected $60B by 2031, 3.5% CAGR" },
    { name: "EPA Clean School Bus Program", url: "https://www.epa.gov/cleanschoolbus", detail: "$5B program, 8,700+ buses funded, 95% electric" },
    { name: "Census of Governments (St. Louis Fed)", url: "https://www.stlouisfed.org/publications/regional-economist/2024/march/local-governments-us-number-type", detail: "90,837 local governments in U.S. (2022)" },
    { name: "National League of Cities", url: "https://www.nlc.org", detail: "19,491 municipalities in U.S." },
    { name: "Government Fleet Vehicle Sales", url: "https://www.government-fleet.com/10216112/report-indicates-government-vehicle-sales-growth-into-2024", detail: "272,403 units in 2023, 35.5% YoY growth" }
  ]
}

// Helper Components
function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-blue-600" />
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
      <div className="text-3xl font-bold text-blue-600">{value}</div>
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
      <header className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <a
            href="/capex-7"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to FleetForward Overview
          </a>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{businessPlan.companyName}</h1>
                  <p className="text-blue-100">{businessPlan.tagline}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-blue-200">{businessPlan.version}</div>
              <div className="text-sm text-blue-200">{businessPlan.date}</div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.ask.amount}</div>
              <div className="text-sm text-blue-100">Seed Round</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.marketSize.sam.value}</div>
              <div className="text-sm text-blue-100">Municipal Vehicle Market</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">90K+</div>
              <div className="text-sm text-blue-100">Local Governments</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">10:1</div>
              <div className="text-sm text-blue-100">LTV:CAC</div>
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
                activeTab === 'overview' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Executive Summary
            </button>
            <button
              onClick={() => setActiveTab('detailed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'detailed' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Full Plan
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'financials' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
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
                  <div key={i} className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{pillar.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {pillar.features.map((feature, j) => (
                        <span key={j} className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
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
                <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.tam.label}</div>
                  <div className="text-sm text-blue-100 mt-1">{businessPlan.marketSize.tam.description}</div>
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
            <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">{businessPlan.ask.title}</h2>
                <div className="text-5xl font-bold mb-2">{businessPlan.ask.amount}</div>
                <div className="text-xl text-blue-100">{businessPlan.ask.round}</div>
                <div className="text-blue-200 mt-2">{businessPlan.ask.terms}</div>
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
                    <p><span className="text-blue-200">Timing:</span> {businessPlan.ask.seriesA.timing}</p>
                    <p><span className="text-blue-200">Metrics:</span> {businessPlan.ask.seriesA.metrics}</p>
                    <p><span className="text-blue-200">Raise:</span> {businessPlan.ask.seriesA.raise}</p>
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
                            player.threat.includes('Partner') ? 'bg-blue-100 text-blue-700' :
                            player.threat === 'Low' || player.threat.includes('Low') ? 'bg-green-100 text-green-700' :
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

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">{businessPlan.competition.ourAdvantage.title}</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {businessPlan.competition.ourAdvantage.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
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
                  <div key={i} className="border-l-4 border-blue-400 pl-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                        {phase.timeline}
                      </span>
                      <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 mb-3">
                      {phase.deliverables.map((deliverable, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
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

              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{businessPlan.businessModel.unitEconomics.title}</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {businessPlan.businessModel.unitEconomics.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
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
                      <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
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
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
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
                    <span className="inline-block mt-2 px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
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
                        <Award className="w-4 h-4 text-blue-500" />
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
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200" />
                <div className="space-y-4">
                  {businessPlan.milestones.items.map((item, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white" />
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-blue-600">{item.timeline}</span>
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
                {/* Scenario 1: With Federal Partnership */}
                <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-blue-600 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withFederalPartnership.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withFederalPartnership.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-blue-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Municipalities</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withFederalPartnership.years.map((year, i) => (
                          <tr key={i} className="border-b border-blue-100">
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
                      {businessPlan.financials.scenarios.withFederalPartnership.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-blue-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-blue-600">
                      Funding Required: {businessPlan.financials.scenarios.withFederalPartnership.fundingRequired}
                    </span>
                  </div>
                </div>

                {/* Scenario 2: Without Federal Partnership */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{businessPlan.financials.scenarios.withoutFederalPartnership.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withoutFederalPartnership.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Municipalities</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">ARR</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutFederalPartnership.years.map((year, i) => (
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
                      {businessPlan.financials.scenarios.withoutFederalPartnership.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-gray-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-gray-600">
                      Funding Required: {businessPlan.financials.scenarios.withoutFederalPartnership.fundingRequired}
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
                        <span className="text-lg font-bold text-blue-600">{item.percentage}%</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-6 bg-gray-200 rounded overflow-hidden">
                          <div
                            className="h-full bg-blue-500 rounded"
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
                  <div key={i} className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600">{metric.value}</div>
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
                    <h4 className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                      {source.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{source.detail}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
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
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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
