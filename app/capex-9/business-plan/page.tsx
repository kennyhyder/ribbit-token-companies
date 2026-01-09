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
  CloudLightning,
  Radio,
  MapPin,
  Camera
} from 'lucide-react'

// Business Plan Data
const businessPlan = {
  companyName: "StormGrid",
  tagline: "The Credentialed Network for Severe Weather Response",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "Storm chasers operate as fragmented individuals with trucks and cameras. TV stations pay for footage ad-hoc with no quality assurance. Emergency managers have zero visibility into storm chaser positions or capabilities during active weather events.",
    solution: "StormGrid aggregates storm chasers into a credentialed network with real-time GPS positioning, footage verification, and coordinated routing. We provide insurance, liability coverage, and professional standards—becoming the dispatch layer between chasers and those who need storm intelligence.",
    market: "$3.5B U.S. weather forecasting services market growing at 7.2% CAGR. Insured losses from severe convective storms reached $50B in 2025. TV stations and insurers desperately need verified ground-truth during severe weather events.",
    ask: "$3M Seed Round to build chaser network, deploy tracking/verification platform, and establish partnerships with TV networks, insurance carriers, and emergency management agencies."
  },

  problem: {
    title: "The Severe Weather Intelligence Gap",
    points: [
      {
        title: "Fragmented Chaser Network",
        detail: "Thousands of storm chasers operate independently with no coordination, quality standards, or professional accountability. TV stations scramble to find reliable sources during events.",
        stat: "5K+",
        statLabel: "active storm chasers in the US"
      },
      {
        title: "No Real-Time Visibility",
        detail: "Emergency managers and media have no idea where chasers are positioned during severe weather. Critical footage and ground-truth intelligence goes uncaptured or arrives too late.",
        stat: "0",
        statLabel: "coordinated chaser networks"
      },
      {
        title: "Insurance Assessment Delays",
        detail: "After major storms, insurance companies wait days or weeks for damage assessment. Severe convective storm losses hit $50B in 2025—earlier ground-truth could accelerate claims and reduce fraud.",
        stat: "$50B",
        statLabel: "2025 SCS insured losses"
      },
      {
        title: "Safety & Liability Chaos",
        detail: "Chasers operate without standardized safety protocols or liability coverage. Accidents happen. TV stations buying footage have no protection.",
        stat: "Uninsured",
        statLabel: "majority of active chasers"
      }
    ]
  },

  solution: {
    title: "StormGrid: Intelligence for Severe Weather",
    tagline: "Aggregate. Coordinate. Verify. Protect.",
    pillars: [
      {
        icon: "CloudLightning",
        title: "Chaser Network",
        description: "Credentialed network of vetted storm chasers with verified equipment, training certifications, and professional standards.",
        features: ["Credential verification", "Equipment standards", "Safety certification", "Background checks"]
      },
      {
        icon: "MapPin",
        title: "Real-Time Positioning",
        description: "GPS tracking platform shows all network chasers in real-time. Dispatch optimal coverage based on storm tracks and chaser positions.",
        features: ["Live GPS tracking", "Storm track overlay", "Coverage optimization", "Dispatch coordination"]
      },
      {
        icon: "Camera",
        title: "Footage Verification",
        description: "Authenticated footage with GPS stamps, timestamps, and chain-of-custody. Guaranteed provenance for media and legal use.",
        features: ["GPS-stamped footage", "Blockchain verification", "Rights management", "Instant delivery"]
      },
      {
        icon: "Shield",
        title: "Insurance & Liability",
        description: "Network-wide liability coverage protects chasers, media buyers, and the public. Professional standards reduce risk for all parties.",
        features: ["Liability coverage", "Equipment insurance", "Professional standards", "Incident protocols"]
      }
    ]
  },

  whyNow: {
    title: "The Perfect Storm",
    factors: [
      {
        title: "Climate-Driven Severe Weather",
        detail: "Severe weather events increasing in frequency and intensity. Global insured nat-cat losses exceeded $100B for sixth consecutive year in 2025.",
        icon: "TrendingUp"
      },
      {
        title: "Mobile Video Technology",
        detail: "4K cameras under $500, reliable cellular everywhere, drones under $1,000. Quality footage capture more accessible than ever.",
        icon: "Zap"
      },
      {
        title: "Insurance Industry Pressure",
        detail: "Carriers spent $107B on insured nat-cat losses in 2025. Desperate for early damage assessment and fraud prevention tools.",
        icon: "Shield"
      },
      {
        title: "Social Media Disruption",
        detail: "X/Twitter flooded with amateur footage lacking verification. Professional networks with authenticated content increasingly valuable.",
        icon: "Users"
      },
      {
        title: "Local TV Weather Crisis",
        detail: "TV stations cutting weather staff while 90% of viewers watch local news for weather. Need reliable external footage sources.",
        icon: "Target"
      }
    ]
  },

  marketSize: {
    title: "Market Opportunity",
    tam: {
      value: "$22B",
      label: "Total Addressable Market",
      description: "Weather services + storm insurance intelligence",
      source: "Combined weather data and insurance analytics"
    },
    sam: {
      value: "$3.5B",
      label: "Serviceable Addressable Market",
      description: "U.S. Weather Forecasting Services 2025",
      source: "Mordor Intelligence"
    },
    som: {
      value: "$45M",
      label: "Serviceable Obtainable Market",
      description: "Year 5 target: 1,000 chasers, 60 TV, 15 insurers",
      source: "Conservative capture estimate"
    },
    additionalMarkets: [
      { name: "Storm Tracking Apps", value: "$2B (2025)", cagr: "15%" },
      { name: "Weather Data Services", value: "$1.6B (2024)", cagr: "8%" },
      { name: "Emergency Management Software", value: "$408M (2025)", cagr: "11.3%" }
    ],
    keyMetrics: [
      { label: "2025 SCS insured losses (US)", value: "$50 billion" },
      { label: "2025 total nat-cat insured losses", value: "$107 billion" },
      { label: "Active US storm chasers", value: "5,000+" },
      { label: "US severe weather markets", value: "200+" }
    ]
  },

  competition: {
    title: "Competitive Landscape",
    players: [
      {
        name: "Freelance Chasers",
        type: "Fragmented",
        marketShare: "90%+ of activity",
        strengths: ["Low cost", "Passionate community", "Geographic coverage"],
        weaknesses: ["No coordination", "No verification", "No liability coverage", "Unreliable availability"],
        threat: "Partners not competitors"
      },
      {
        name: "AccuWeather / The Weather Company",
        type: "Weather Services",
        marketShare: "Major forecast providers",
        strengths: ["Brand recognition", "Data infrastructure", "Media relationships"],
        weaknesses: ["Forecast focus", "No chaser network", "No real-time ground-truth", "High overhead"],
        threat: "Low"
      },
      {
        name: "TV Station Staff",
        type: "In-House",
        marketShare: "Major markets only",
        strengths: ["Direct employment", "Known quality", "Immediate access"],
        weaknesses: ["Limited coverage area", "Expensive", "Single storm at a time", "Layoffs accelerating"],
        threat: "Low"
      },
      {
        name: "Social Media Aggregators",
        type: "Content Platforms",
        marketShare: "Growing but problematic",
        strengths: ["Wide coverage", "Low cost", "Speed"],
        weaknesses: ["No verification", "Rights issues", "Quality problems", "Liability exposure"],
        threat: "Medium"
      }
    ],
    ourAdvantage: {
      title: "StormGrid's Unfair Advantages",
      points: [
        "Network effect: More chasers = better coverage = more media/insurance interest = better chaser economics",
        "Credential moat: Quality standards take time to replicate—first-mover advantage",
        "Data layer: Only aggregated view of real-time chaser positions during severe weather",
        "Verification: Blockchain-based footage authentication for legal/insurance use",
        "Cap-Ex alignment: TV stations and insurers can fund as infrastructure investment"
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
          "Chaser onboarding platform (web + mobile)",
          "GPS tracking and real-time positioning system",
          "Credential verification and safety certification",
          "Basic footage upload with GPS/timestamp stamps",
          "Initial TV station partnership integrations"
        ],
        milestone: "200 chasers onboarded, 5 TV station pilots"
      },
      {
        phase: "Phase 2: Intelligence",
        timeline: "Months 7-12",
        deliverables: [
          "Storm track integration and predictive positioning",
          "Automated dispatch and coverage optimization",
          "Blockchain footage verification system",
          "Insurance carrier pilot programs",
          "Emergency management agency integrations"
        ],
        milestone: "500 chasers, 15 TV markets, 2 insurance pilots, $1.5M ARR"
      },
      {
        phase: "Phase 3: Scale",
        timeline: "Year 2-3",
        deliverables: [
          "National chaser coverage (1,500+ chasers)",
          "Real-time damage assessment for insurers",
          "Emergency management ground-truth API",
          "Drone integration for aerial assessment",
          "International severe weather expansion"
        ],
        milestone: "$18M ARR, 10+ insurance partnerships, market leader"
      }
    ]
  },

  businessModel: {
    title: "Business Model",
    revenueStreams: [
      {
        name: "TV Network Contracts",
        description: "Annual or seasonal contracts with TV stations for priority access to verified storm footage",
        pricing: "$100K-$500K/year per market",
        margin: "75%",
        year1Revenue: "$600K",
        year3Revenue: "$8M"
      },
      {
        name: "Insurance Partnerships",
        description: "Early damage assessment and verification services for property casualty carriers",
        pricing: "$500K-$2M/year per carrier",
        margin: "70%",
        year1Revenue: "$300K",
        year3Revenue: "$7M"
      },
      {
        name: "Chaser Network Platform",
        description: "SaaS subscription + revenue share for credentialed storm chasers",
        pricing: "$199-$499/month + 15% footage fees",
        margin: "85%",
        year1Revenue: "$400K",
        year3Revenue: "$2.5M"
      },
      {
        name: "Emergency Management",
        description: "Contracts with state/local emergency management for severe weather ground-truth",
        pricing: "$50K-$300K/year per agency",
        margin: "65%",
        year1Revenue: "$200K",
        year3Revenue: "$2.5M"
      }
    ],
    unitEconomics: {
      title: "Unit Economics",
      metrics: [
        { label: "Customer Acquisition Cost (CAC)", value: "$3,000", note: "Blended across segments" },
        { label: "Average Contract Value", value: "$180K/yr", note: "Enterprise weighted average" },
        { label: "Gross Margin", value: "72%", note: "After chaser payouts and support" },
        { label: "Lifetime Value (LTV)", value: "$24,000", note: "Blended 3+ year retention" },
        { label: "LTV:CAC Ratio", value: "8:1", note: "Strong unit economics" },
        { label: "Payback Period", value: "6 months", note: "Fast capital efficiency" }
      ]
    }
  },

  financials: {
    title: "Financial Projections",
    scenarios: {
      withCapEx: {
        name: "With Cap-Ex Financing Angle (Recommended)",
        description: "Leverage Cap-Ex budgets: TV stations capitalize weather tech, insurers fund loss mitigation infrastructure",
        years: [
          { year: 1, revenue: "$1.5M", chasers: 200, customers: "8 TV, 2 insurers", burn: "$2.5M", runway: "18 months" },
          { year: 2, revenue: "$6M", chasers: 450, customers: "25 TV, 5 insurers", burn: "$1M", runway: "Profitable Q4" },
          { year: 3, revenue: "$18M", chasers: 800, customers: "45 TV, 10 insurers", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$32M", chasers: 1100, customers: "55 TV, 13 insurers", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$48M", chasers: 1400, customers: "65 TV, 18 insurers", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$3M Seed",
        keyAssumptions: [
          "Insurance Cap-Ex budgets fund loss mitigation infrastructure",
          "TV stations capitalize as weather technology investment",
          "Multi-year enterprise contracts (3+ year terms)",
          "Network effects accelerate Year 2+ growth"
        ]
      },
      withoutCapEx: {
        name: "Without Cap-Ex Financing (Conservative)",
        description: "Direct sales to media and insurance without leveraging capital expenditure positioning",
        years: [
          { year: 1, revenue: "$900K", chasers: 150, customers: "5 TV, 1 insurer", burn: "$2.5M", runway: "14 months" },
          { year: 2, revenue: "$3.2M", chasers: 300, customers: "15 TV, 3 insurers", burn: "$1.5M", runway: "20 months" },
          { year: 3, revenue: "$9M", chasers: 500, customers: "30 TV, 6 insurers", burn: "$0", runway: "Profitable" },
          { year: 4, revenue: "$18M", chasers: 700, customers: "42 TV, 9 insurers", burn: "$0", runway: "Profitable" },
          { year: 5, revenue: "$28M", chasers: 900, customers: "52 TV, 12 insurers", burn: "$0", runway: "Profitable" }
        ],
        fundingRequired: "$3M Seed",
        keyAssumptions: [
          "OpEx-based contracts only",
          "Slower enterprise sales cycles (12-18 months)",
          "Higher churn on annual renewals",
          "Organic network growth only"
        ]
      }
    },
    useOfFunds: {
      title: "Use of $3M Seed Funds",
      breakdown: [
        { category: "Engineering & Product", amount: "$1.2M", percentage: 40, detail: "Platform, GPS tracking, verification system" },
        { category: "Chaser Network", amount: "$750K", percentage: 25, detail: "Recruitment, credentialing, training programs" },
        { category: "Sales & Partnerships", amount: "$600K", percentage: 20, detail: "TV, insurance, emergency mgmt sales" },
        { category: "Insurance & Legal", amount: "$300K", percentage: 10, detail: "Liability coverage, compliance, contracts" },
        { category: "Operations", amount: "$150K", percentage: 5, detail: "G&A, office, initial equipment" }
      ]
    }
  },

  goToMarket: {
    title: "Go-to-Market Strategy",
    phases: [
      {
        phase: "Land",
        timeline: "Months 1-6",
        strategy: "Tornado Alley Focus",
        tactics: [
          "Start in top severe weather markets (Oklahoma City, Dallas, Kansas City, Wichita, Tulsa)",
          "Recruit respected veteran chasers as founding network members",
          "Partner with storm chasing tour companies for initial credentialing",
          "Target local TV stations frustrated with unreliable freelance footage"
        ],
        metrics: ["200 chasers onboarded", "85% activation rate", "NPS > 50"]
      },
      {
        phase: "Expand",
        timeline: "Months 7-12",
        strategy: "Insurance & National TV",
        tactics: [
          "Approach insurance carriers with damage assessment pilot proposals",
          "Target progressive insurers with CAT loss mitigation budgets",
          "Expand to hurricane markets (Houston, Miami, Tampa, New Orleans)",
          "Build relationships with state emergency management agencies"
        ],
        metrics: ["2 insurance pilots", "15 TV markets", "500 chasers"]
      },
      {
        phase: "Dominate",
        timeline: "Year 2+",
        strategy: "National Coverage & Scale",
        tactics: [
          "Leverage insurance partnerships for credibility and co-marketing",
          "Expand to all severe weather markets nationwide",
          "Launch emergency management ground-truth products",
          "Build API for third-party weather app integrations"
        ],
        metrics: ["1,500+ chasers", "10+ insurance partnerships", "National coverage"]
      }
    ],
    channels: [
      { name: "Direct Sales", description: "Field sales team targeting TV stations and insurance carriers", cost: "High", effectiveness: "Very High" },
      { name: "Chaser Community", description: "Recruit through storm chasing forums, conferences, and veteran chasers", cost: "Low", effectiveness: "Very High" },
      { name: "Insurance Conferences", description: "CAT loss mitigation and claims conferences (PLRB, NAMIC)", cost: "Medium", effectiveness: "High" },
      { name: "Emergency Mgmt Agencies", description: "State and local EM referrals through pilot successes", cost: "Low", effectiveness: "High" },
      { name: "NAB / Broadcast Events", description: "National Association of Broadcasters and local TV conferences", cost: "Medium", effectiveness: "Medium" }
    ]
  },

  team: {
    title: "Team Requirements",
    currentNeeds: [
      {
        role: "CEO / Founder",
        skills: "Weather/media industry experience, fundraising, network building",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "CTO",
        skills: "Real-time systems, GPS tracking, mobile apps, verification tech",
        status: "Seeking",
        priority: "Critical"
      },
      {
        role: "Head of Chaser Network",
        skills: "Storm chasing experience, community relationships, credentialing",
        status: "Seeking",
        priority: "High"
      },
      {
        role: "VP Sales",
        skills: "Media/insurance enterprise sales, partnership development",
        status: "Seeking",
        priority: "High"
      }
    ],
    advisorNeeds: [
      "Former TV news executive (weather/operations)",
      "Insurance industry executive (CAT/claims experience)",
      "Veteran storm chaser with community credibility",
      "Emergency management / FEMA background"
    ],
    orgPlan: {
      year1: "10 FTEs: 4 engineering, 2 chaser ops, 2 sales, 2 G&A",
      year2: "25 FTEs: 8 engineering, 6 chaser ops, 8 sales, 3 G&A",
      year3: "55 FTEs: 15 engineering, 15 chaser ops, 18 sales, 7 G&A"
    }
  },

  risks: {
    title: "Risks & Mitigations",
    risks: [
      {
        risk: "Storm Seasonality",
        severity: "High",
        likelihood: "High",
        description: "Tornado season is concentrated in spring/early summer. Hurricane season is summer/fall. Revenue could be lumpy.",
        mitigation: "Annual contracts with guaranteed minimums. Expand to winter storms and hurricanes for year-round coverage. Enterprise contracts smooth revenue across seasons."
      },
      {
        risk: "Chaser Safety Incidents",
        severity: "High",
        likelihood: "Medium",
        description: "Storm chasing is inherently dangerous. A serious injury or fatality in our network would create liability and reputational risk.",
        mitigation: "Rigorous safety certification requirements. Network-wide liability coverage through specialized insurers. Strict protocols with enforcement. Only credential experienced chasers."
      },
      {
        risk: "Technology Reliability During Storms",
        severity: "Medium",
        likelihood: "Medium",
        description: "Cellular coverage can be spotty during severe weather. GPS tracking and footage upload could fail when needed most.",
        mitigation: "Cellular + satellite redundancy (Starlink integration). Offline-capable mobile apps with sync. Multiple upload pathways including mesh networking."
      },
      {
        risk: "Insurance Carrier Adoption Cycles",
        severity: "Medium",
        likelihood: "High",
        description: "Insurance companies have notoriously long procurement cycles (12-24 months). Could delay revenue significantly.",
        mitigation: "Start with pilot programs requiring minimal procurement. Target progressive insurers with innovation budgets. Build recurring TV revenue while insurance deals develop."
      },
      {
        risk: "Major Weather Company Competition",
        severity: "Medium",
        likelihood: "Low",
        description: "AccuWeather or The Weather Company could build their own chaser network, leveraging existing media relationships.",
        mitigation: "Weather companies are forecast-focused and have avoided ground-truth for decades. Network effects create barriers. Move fast to build chaser loyalty before they reconsider."
      },
      {
        risk: "Chaser Community Resistance",
        severity: "Medium",
        likelihood: "Medium",
        description: "Storm chasing culture values independence. Some chasers may resist joining a credentialed network or sharing data.",
        mitigation: "Lead with value (insurance, leads, higher payouts). Recruit respected veteran chasers first. Build from inside the community, not outside."
      }
    ]
  },

  milestones: {
    title: "Key Milestones",
    items: [
      { timeline: "Month 3", milestone: "Platform MVP live, first 50 chasers onboarded", status: "planned" },
      { timeline: "Month 6", milestone: "200 chasers, 5 TV station pilots launched", status: "planned" },
      { timeline: "Month 9", milestone: "First insurance carrier pilot, 350 chasers", status: "planned" },
      { timeline: "Month 12", milestone: "$1.5M ARR, 500 chasers, 15 TV markets", status: "planned" },
      { timeline: "Month 15", milestone: "Insurance pilot converts to annual contract", status: "planned" },
      { timeline: "Month 18", milestone: "$3M ARR, Series A initiated", status: "planned" },
      { timeline: "Month 24", milestone: "$6M ARR, national coverage, 10 insurance partners", status: "planned" }
    ]
  },

  ask: {
    title: "The Ask",
    amount: "$3,000,000",
    round: "Seed Round",
    terms: "SAFE or Priced Round at $12M post-money valuation",
    useOfFunds: [
      "Build chaser credentialing and tracking platform",
      "Recruit and onboard first 200 credentialed chasers",
      "Launch TV station partnership pilots in 5+ markets",
      "Develop insurance damage assessment pilot program"
    ],
    timeline: "18-month runway to Series A milestones",
    seriesA: {
      timing: "Month 15-18",
      metrics: "$2-3M ARR, 500+ chasers, 2+ insurance partnerships",
      raise: "$10-15M at $50-70M valuation"
    }
  },

  sources: [
    { name: "Mordor Intelligence - Weather Forecasting Services", url: "https://www.mordorintelligence.com/industry-reports/weather-forecasting-services-market", detail: "$3.47B in 2025, 7.17% CAGR to 2030" },
    { name: "Swiss Re - Natural Catastrophe Losses 2025", url: "https://www.swissre.com/institute/research/sigma-research/sigma-2025-01-natural-catastrophes-trend.html", detail: "$107B insured losses in 2025, 6th year over $100B" },
    { name: "Insurance Journal - SCS Losses 2025", url: "https://www.insurancejournal.com/news/international/2025/12/16/851270.htm", detail: "Severe convective storms: $50B global insured losses" },
    { name: "Emergen Research - Weather Data Services", url: "https://www.emergenresearch.com/industry-report/weather-data-service-market", detail: "$1.6B in 2024, 8% CAGR to $3.25B by 2033" },
    { name: "Data Insights Market - Storm Tracking Apps", url: "https://www.datainsightsmarket.com/reports/storm-tracking-apps-1400586", detail: "$2B in 2025, 15% CAGR to $7B by 2033" },
    { name: "Global Growth Insights - Emergency Management Software", url: "https://www.globalgrowthinsights.com/market-reports/emergency-management-software-market-105680", detail: "$408M in 2025, 11.3% CAGR" },
    { name: "NOAA Storm Prediction Center", url: "https://www.spc.noaa.gov/wcm/", detail: "Severe weather climatology and statistics" },
    { name: "RTDNA - Local TV Weather Content", url: "https://www.rtdna.org/news/updating-local-weather-content-a-call-to-action-for-tv-stations", detail: "90% of viewers watch local news for weather" }
  ]
}

// Helper Components
function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-purple-600" />
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
      <div className="text-3xl font-bold text-purple-600">{value}</div>
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
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <a
            href="/tokens/#framework"
            className="inline-flex items-center gap-2 text-purple-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cap-Ex Opportunities
          </a>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <CloudLightning className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{businessPlan.companyName}</h1>
                  <p className="text-purple-100">{businessPlan.tagline}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-purple-200">{businessPlan.version}</div>
              <div className="text-sm text-purple-200">{businessPlan.date}</div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.ask.amount}</div>
              <div className="text-sm text-purple-100">Seed Round</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{businessPlan.marketSize.sam.value}</div>
              <div className="text-sm text-purple-100">U.S. Market (2025)</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">7.2%</div>
              <div className="text-sm text-purple-100">Market CAGR</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">8:1</div>
              <div className="text-sm text-purple-100">LTV:CAC</div>
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
                activeTab === 'overview' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Executive Summary
            </button>
            <button
              onClick={() => setActiveTab('detailed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'detailed' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Full Plan
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'financials' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
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
                  <div key={i} className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{pillar.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {pillar.features.map((feature, j) => (
                        <span key={j} className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs">
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
                  <div key={i} className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-400">
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
                <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.tam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.tam.label}</div>
                  <div className="text-sm text-purple-100 mt-1">{businessPlan.marketSize.tam.description}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.sam.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.sam.label}</div>
                  <div className="text-sm text-green-100 mt-1">{businessPlan.marketSize.sam.description}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">{businessPlan.marketSize.som.value}</div>
                  <div className="font-medium">{businessPlan.marketSize.som.label}</div>
                  <div className="text-sm text-blue-100 mt-1">{businessPlan.marketSize.som.description}</div>
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
            <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">{businessPlan.ask.title}</h2>
                <div className="text-5xl font-bold mb-2">{businessPlan.ask.amount}</div>
                <div className="text-xl text-purple-100">{businessPlan.ask.round}</div>
                <div className="text-purple-200 mt-2">{businessPlan.ask.terms}</div>
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
                    <p><span className="text-purple-200">Timing:</span> {businessPlan.ask.seriesA.timing}</p>
                    <p><span className="text-purple-200">Metrics:</span> {businessPlan.ask.seriesA.metrics}</p>
                    <p><span className="text-purple-200">Raise:</span> {businessPlan.ask.seriesA.raise}</p>
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

              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">{businessPlan.competition.ourAdvantage.title}</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {businessPlan.competition.ourAdvantage.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
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
                  <div key={i} className="border-l-4 border-purple-400 pl-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                        {phase.timeline}
                      </span>
                      <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 mb-3">
                      {phase.deliverables.map((deliverable, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
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

              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{businessPlan.businessModel.unitEconomics.title}</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {businessPlan.businessModel.unitEconomics.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{metric.value}</div>
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
                      <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
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
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
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
                    <span className="inline-block mt-2 px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs">
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
                        <Award className="w-4 h-4 text-purple-500" />
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
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-200" />
                <div className="space-y-4">
                  {businessPlan.milestones.items.map((item, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-purple-500 border-2 border-white" />
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-purple-600">{item.timeline}</span>
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
                {/* Scenario 1: With Cap-Ex */}
                <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-purple-600 text-white rounded text-xs font-medium">RECOMMENDED</span>
                    <h4 className="font-semibold text-gray-900">{businessPlan.financials.scenarios.withCapEx.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withCapEx.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-purple-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Chasers</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Customers</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withCapEx.years.map((year, i) => (
                          <tr key={i} className="border-b border-purple-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.chasers.toLocaleString()}</td>
                            <td className="py-2 px-3 text-right text-sm">{year.customers}</td>
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
                      {businessPlan.financials.scenarios.withCapEx.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-purple-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-purple-600">
                      Funding Required: {businessPlan.financials.scenarios.withCapEx.fundingRequired}
                    </span>
                  </div>
                </div>

                {/* Scenario 2: Without Cap-Ex */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{businessPlan.financials.scenarios.withoutCapEx.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{businessPlan.financials.scenarios.withoutCapEx.description}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Year</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Revenue</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Chasers</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Customers</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Net Burn</th>
                          <th className="text-right py-2 px-3 font-medium text-gray-900">Runway</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutCapEx.years.map((year, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="py-2 px-3 font-medium">Year {year.year}</td>
                            <td className="py-2 px-3 text-right">{year.revenue}</td>
                            <td className="py-2 px-3 text-right">{year.chasers.toLocaleString()}</td>
                            <td className="py-2 px-3 text-right text-sm">{year.customers}</td>
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
                      {businessPlan.financials.scenarios.withoutCapEx.keyAssumptions.map((assumption, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-gray-500">•</span>
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-lg font-bold text-gray-600">
                      Funding Required: {businessPlan.financials.scenarios.withoutCapEx.fundingRequired}
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
                        <span className="text-lg font-bold text-purple-600">{item.percentage}%</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-6 bg-gray-200 rounded overflow-hidden">
                          <div
                            className="h-full bg-purple-500 rounded"
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
                  <div key={i} className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg text-center">
                    <div className="text-3xl font-bold text-purple-600">{metric.value}</div>
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
                    <h4 className="font-medium text-gray-900 text-sm group-hover:text-purple-600 transition-colors">
                      {source.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{source.detail}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors flex-shrink-0" />
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
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
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
