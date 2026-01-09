'use client'

import { useState } from 'react'
import {
  ArrowLeft, Target, TrendingUp, DollarSign, Users, Shield, AlertTriangle,
  CheckCircle, ExternalLink, ChevronDown, ChevronUp, Building2, Zap, BarChart3,
  Clock, Wrench, FileText, Briefcase, Lightbulb, Globe, Award, PieChart, LineChart, Activity
} from 'lucide-react'

const businessPlan = {
  companyName: "MedService",
  tagline: "The Intelligence Layer Breaking OEM Service Monopolies",
  version: "Investor Pitch Deck v1.0",
  date: "January 2026",

  executiveSummary: {
    problem: "OEMs (GE, Siemens, Philips) control 70%+ of medical imaging equipment service, charging 2-3x fair market rates. Independent Service Organizations (ISOs) exist but are fragmented with no quality standardization. Health systems waste $5-10B annually on overpriced OEM contracts.",
    solution: "MedService aggregates ISOs into a credentialed network with standardized calibration protocols, real-time equipment performance tracking, and transparent pricing. We become the intelligence layer that health system CFOs trust to break OEM service monopolies.",
    market: "$25B global medical imaging service market growing 6% annually. Third-party service can save health systems 30-50% vs OEM contracts. Right-to-repair legislation creating tailwinds.",
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
      }
    ]
  },

  marketSize: {
    tam: {
      value: "$25B",
      description: "Total addressable market: Global medical imaging equipment service and maintenance",
      breakdown: [
        { segment: "North America Imaging Service", value: "$12B", growth: "6.2% CAGR" },
        { segment: "Europe Imaging Service", value: "$8B", growth: "5.8% CAGR" },
        { segment: "Asia-Pacific Imaging Service", value: "$5B", growth: "8.4% CAGR" }
      ]
    },
    sam: {
      value: "$4.2B",
      description: "Serviceable addressable market: U.S. third-party medical imaging service opportunity",
      breakdown: [
        { segment: "MRI Service Contracts", value: "$1.8B", growth: "~8,000 units in U.S." },
        { segment: "CT Service Contracts", value: "$1.2B", growth: "~15,000 units in U.S." },
        { segment: "X-ray/Fluoroscopy Service", value: "$700M", growth: "~50,000 units in U.S." },
        { segment: "Ultrasound/Other Modalities", value: "$500M", growth: "High volume, lower cost" }
      ]
    },
    som: {
      value: "$120M",
      description: "Year 5 revenue target: 300 active ISOs, 150 health system partnerships, 2,500 equipment units under management",
      breakdown: [
        { segment: "Platform Transaction Fees", value: "$52M", growth: "3% of $1.7B service volume" },
        { segment: "ISO SaaS Subscriptions", value: "$28M", growth: "300 ISOs @ $7,800/mo avg" },
        { segment: "Health System Data Licensing", value: "$24M", growth: "150 systems @ $160K/yr" },
        { segment: "Equipment Intelligence Products", value: "$16M", growth: "Lifecycle analytics, benchmarking" }
      ]
    }
  },

  competition: {
    overview: "The market is dominated by OEMs who control both equipment sales and service. ISOs compete locally but have no coordinated network or quality standard. No platform has aggregated the ISO ecosystem.",
    competitors: [
      {
        name: "GE Healthcare Service",
        description: "Largest OEM service provider. Controls service on GE equipment and aggressively protects market share through parts restrictions.",
        strengths: ["OEM parts access", "Proprietary diagnostics", "Brand trust", "Installed base data"],
        weaknesses: ["Premium pricing (2-3x)", "Slow response times", "Bundled with equipment sales", "Regulatory scrutiny"],
        marketShare: "~28% of imaging service"
      },
      {
        name: "Siemens Healthineers Service",
        description: "Second largest OEM. Strong in advanced imaging (MRI, CT). Aggressive service contract bundling with equipment purchases.",
        strengths: ["Technical expertise", "Global coverage", "R&D investment", "Software integration"],
        weaknesses: ["Premium pricing", "Long contract terms", "Equipment lock-in tactics", "Antitrust risk"],
        marketShare: "~24% of imaging service"
      },
      {
        name: "Philips Healthcare Service",
        description: "Third major OEM. Strength in patient monitoring and ultrasound. Pushing remote monitoring services.",
        strengths: ["Monitoring expertise", "IoT capabilities", "Clinical integration", "Brand recognition"],
        weaknesses: ["Premium pricing", "Limited ISO competition", "Quality issues (recalls)", "Service backlogs"],
        marketShare: "~18% of imaging service"
      },
      {
        name: "Independent ISOs (Fragmented)",
        description: "~2,000 small independent service organizations. Local expertise but no national coordination or quality standardization.",
        strengths: ["30-50% lower pricing", "Local relationships", "Flexible service", "Faster response"],
        weaknesses: ["No quality standard", "Limited geographic coverage", "Parts access challenges", "No brand recognition"],
        marketShare: "~30% of imaging service"
      }
    ],
    moat: "Network effects: More ISOs in network = better coverage + more data = more health system adoption = more ISO demand. First standardized quality network becomes the industry clearinghouse."
  },

  businessModel: {
    overview: "Four-sided platform connecting ISOs, health systems, equipment finance companies, and OEMs around quality, transparency, and cost savings.",
    revenueStreams: [
      {
        name: "Platform Transaction Fees",
        description: "Percentage of service contract value for deals facilitated through platform matching",
        pricing: "3-5% of contract value",
        margin: "90%",
        details: [
          "Automated matching algorithm",
          "Contract negotiation support",
          "Quality guarantee program",
          "Payment processing",
          "Dispute resolution"
        ]
      },
      {
        name: "ISO SaaS Subscriptions",
        description: "Monthly subscription for ISOs to access network, build quality scores, and receive service opportunities",
        pricing: "$2,500-$15,000/month based on capabilities",
        margin: "85%",
        details: [
          "Quality score profile",
          "Calibration documentation",
          "Parts sourcing network",
          "Training & certification",
          "Remote diagnostics tools"
        ]
      },
      {
        name: "Health System Data Licensing",
        description: "API access to equipment performance data, ISO quality scores, and service benchmarking for capital planning",
        pricing: "$100K-$300K annual contracts",
        margin: "92%",
        details: [
          "Equipment performance analytics",
          "Service cost benchmarking",
          "Capital replacement modeling",
          "Vendor performance tracking",
          "Regulatory compliance data"
        ]
      },
      {
        name: "Equipment Intelligence Products",
        description: "Lifecycle analytics, benchmark reports, and consulting for health systems and equipment finance companies",
        pricing: "$50K-$200K per engagement",
        margin: "75%",
        details: [
          "Equipment lifecycle analysis",
          "Total cost of ownership models",
          "Capital planning support",
          "Fleet optimization consulting",
          "M&A due diligence"
        ]
      }
    ],
    unitEconomics: {
      ltv: "$288,000",
      cac: "$18,000",
      ltvCacRatio: "16:1",
      paybackPeriod: "6 months",
      grossMargin: "86%",
      details: [
        "Average ISO subscription: 3.5 years ($7,800/mo avg) + transaction fees",
        "Expansion revenue from additional capabilities and equipment coverage",
        "CAC: $12K digital + $6K sales/onboarding for ISOs",
        "High retention due to quality score equity and network value"
      ]
    }
  },

  financials: {
    scenarios: {
      withFinancing: {
        name: "With Cap-Ex Financing Partnerships",
        description: "Deep equipment finance integration creates data moat and recurring revenue",
        projections: [
          { year: "Y1", revenue: "$4.2M", customers: "75 ISOs", highlights: "Platform launch, 3 health system pilots" },
          { year: "Y2", revenue: "$18M", customers: "150 ISOs", highlights: "10 health system partnerships, equipment finance pilots" },
          { year: "Y3", revenue: "$48M", customers: "220 ISOs", highlights: "Market leader in ISO aggregation" },
          { year: "Y4", revenue: "$85M", customers: "275 ISOs", highlights: "Equipment finance integration, predictive maintenance" },
          { year: "Y5", revenue: "$140M", customers: "350 ISOs", highlights: "Category dominance, strategic acquisition interest" }
        ],
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
        projections: [
          { year: "Y1", revenue: "$2.4M", customers: "50 ISOs", highlights: "Marketplace launch, SEO focus" },
          { year: "Y2", revenue: "$9M", customers: "100 ISOs", highlights: "ISO network scaling, quality scoring" },
          { year: "Y3", revenue: "$24M", customers: "160 ISOs", highlights: "Regional expansion" },
          { year: "Y4", revenue: "$48M", customers: "210 ISOs", highlights: "First health system partnerships" },
          { year: "Y5", revenue: "$82M", customers: "280 ISOs", highlights: "Sustainable growth, profitable" }
        ],
        keyAssumptions: [
          "ISO acquisition primary driver",
          "Slower health system adoption without data products",
          "More capital-efficient growth path",
          "OEM competitive response possible"
        ]
      }
    },
    useOfFunds: [
      { category: "Engineering & Product", percentage: 40, amount: "$2.4M", details: "Platform build, calibration tools, equipment integrations" },
      { category: "Sales & Partnerships", percentage: 30, amount: "$1.8M", details: "Health system BD, ISO onboarding, equipment finance partnerships" },
      { category: "Regulatory & Compliance", percentage: 15, amount: "$900K", details: "FDA protocols, ACR standards, quality certification program" },
      { category: "Marketing", percentage: 10, amount: "$600K", details: "ISO acquisition, industry positioning, thought leadership" },
      { category: "Operations", percentage: 5, amount: "$300K", details: "Legal, insurance, G&A" }
    ]
  },

  risks: [
    {
      risk: "OEM Retaliation",
      severity: "High",
      mitigation: "Focus on equipment out of warranty. Document anticompetitive behavior for regulators. Build relationships with health system CFOs who want alternatives."
    },
    {
      risk: "ISO Quality Variability",
      severity: "High",
      mitigation: "Rigorous credentialing process. Quality guarantee program with financial backing. Start with top-tier ISOs and expand carefully."
    },
    {
      risk: "FDA/Regulatory Compliance",
      severity: "High",
      mitigation: "Hire FDA compliance experts. Develop protocols with ACR guidance. Partner with health system quality teams for validation."
    },
    {
      risk: "Parts Access Restrictions",
      severity: "Medium",
      mitigation: "Build secondary parts sourcing network. Document OEM restrictions for right-to-repair advocacy. Partner with parts suppliers."
    },
    {
      risk: "Health System Sales Cycles",
      severity: "Medium",
      mitigation: "Start with pilot programs. Target CFOs with clear ROI. Partner with GPOs for faster procurement."
    },
    {
      risk: "OEM Acquisition of ISOs",
      severity: "Low",
      mitigation: "Build network loyalty through platform value. Offer ISOs equity participation. Make network stickier than individual relationships."
    }
  ],

  milestones: [
    { quarter: "Q1 2026", milestone: "Close seed round, hire core team", status: "target" },
    { quarter: "Q2 2026", milestone: "Launch MVP with 50 ISOs in 5 states", status: "target" },
    { quarter: "Q3 2026", milestone: "First health system pilot (100+ bed facility)", status: "target" },
    { quarter: "Q4 2026", milestone: "100 ISOs, quality scoring live, $4M ARR", status: "target" },
    { quarter: "Q1 2027", milestone: "ACR-aligned calibration protocols certified", status: "target" },
    { quarter: "Q2 2027", milestone: "3 health system partnerships, equipment finance pilot", status: "target" },
    { quarter: "Q3 2027", milestone: "Predictive maintenance product launch", status: "target" },
    { quarter: "Q4 2027", milestone: "Series A at $120-150M valuation", status: "target" }
  ],

  team: {
    hiring: [
      { role: "CTO", priority: "Critical", timeline: "Immediate", description: "Platform architecture, equipment integrations, data systems" },
      { role: "VP Clinical Engineering", priority: "Critical", timeline: "Q1 2026", description: "Calibration protocols, FDA compliance, ISO credentialing" },
      { role: "VP Sales", priority: "Critical", timeline: "Q2 2026", description: "Health system partnerships, enterprise sales" },
      { role: "Head of ISO Success", priority: "High", timeline: "Q2 2026", description: "ISO onboarding, network growth, quality programs" }
    ]
  },

  ask: {
    amount: "$6M",
    round: "Seed",
    timeline: "Q1 2026",
    terms: "Priced round, standard seed terms",
    use: "Build ISO network platform, establish health system partnerships, develop calibration quality standards",
    targetInvestors: [
      "Healthcare IT investors (Oak HC/FT, General Catalyst)",
      "Health system innovation funds",
      "Equipment finance strategics",
      "Right-to-repair advocates (repair.org network)"
    ]
  },

  sources: [
    { name: "Grand View Research - Medical Equipment Maintenance", url: "https://www.grandviewresearch.com/industry-analysis/medical-equipment-maintenance-market" },
    { name: "AAMI - Independent Service Organization Guidelines", url: "https://www.aami.org/standards/iso-guidelines" },
    { name: "FTC - Right to Repair Policy Statement", url: "https://www.ftc.gov/news-events/news/press-releases/2021/07/ftc-ramp-law-enforcement-against-illegal-repair-restrictions" },
    { name: "ACR - Equipment Quality Standards", url: "https://www.acr.org/Clinical-Resources/Quality-Assurance" },
    { name: "Modern Healthcare - Service Contract Analysis", url: "https://www.modernhealthcare.com/operations/hospitals-seeking-alternatives-oem-service-contracts" },
    { name: "ECRI - Medical Device Service Guide", url: "https://www.ecri.org/medical-device-service-guide" }
  ]
}

function ExpandableSection({ title, children, defaultOpen = false }: {
  title: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-gray-800 flex items-center justify-between hover:bg-gray-750 transition-colors"
      >
        <div className="font-semibold text-lg text-white">{title}</div>
        {isOpen ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-900">
          {children}
        </div>
      )}
    </div>
  )
}

function StatCard({ value, label, icon: Icon }: { value: string; label: string; icon: any }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 text-center">
      <Icon className="w-6 h-6 text-teal-400 mx-auto mb-2" />
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}

export default function BusinessPlanPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'detailed' | 'financials'>('overview')

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4">
              <a href="/tokens/#framework" className="text-gray-400 hover:text-white transition-colors mt-1">
                <ArrowLeft className="w-5 h-5" />
              </a>
              <div>
                <h1 className="text-2xl font-bold text-teal-400">{businessPlan.companyName}</h1>
                <p className="text-gray-400 text-sm">{businessPlan.tagline}</p>
              </div>
            </div>
            <div className="text-right text-sm text-gray-500">
              <div>{businessPlan.version}</div>
              <div>{businessPlan.date}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'detailed', label: 'Detailed Plan' },
              { id: 'financials', label: 'Financials' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-teal-400 border-b-2 border-teal-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Executive Summary */}
            <section className="bg-gradient-to-r from-teal-900/50 to-cyan-900/50 rounded-xl p-8 border border-teal-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="text-teal-400" />
                Executive Summary
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-teal-400 font-semibold mb-2">The Problem</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.problem}</p>
                </div>
                <div>
                  <h3 className="text-teal-400 font-semibold mb-2">Our Solution</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.solution}</p>
                </div>
                <div>
                  <h3 className="text-teal-400 font-semibold mb-2">Market Opportunity</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.market}</p>
                </div>
                <div>
                  <h3 className="text-teal-400 font-semibold mb-2">The Ask</h3>
                  <p className="text-gray-300">{businessPlan.executiveSummary.ask}</p>
                </div>
              </div>
            </section>

            {/* Key Stats */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard value="$25B" label="TAM" icon={Globe} />
                <StatCard value="30-50%" label="Savings vs OEM" icon={TrendingUp} />
                <StatCard value="16:1" label="LTV:CAC Ratio" icon={BarChart3} />
                <StatCard value="$6M" label="Seed Ask" icon={DollarSign} />
              </div>
            </section>

            {/* Problem */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <AlertTriangle className="text-red-400" />
                {businessPlan.problem.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.problem.points.map((point, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-white">{point.title}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-400">{point.stat}</div>
                        <div className="text-xs text-gray-500">{point.statLabel}</div>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{point.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Lightbulb className="text-teal-400" />
                {businessPlan.solution.title}
              </h2>
              <p className="text-gray-400 mb-6">{businessPlan.solution.tagline}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {businessPlan.solution.pillars.map((pillar, i) => {
                  const IconComponent = pillar.icon === 'Activity' ? Activity :
                    pillar.icon === 'BarChart3' ? BarChart3 :
                    pillar.icon === 'FileText' ? FileText :
                    pillar.icon === 'Zap' ? Zap : Activity
                  return (
                    <div key={i} className="bg-gray-800 rounded-lg p-5">
                      <IconComponent className="w-8 h-8 text-teal-400 mb-3" />
                      <h3 className="font-semibold text-white mb-2">{pillar.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{pillar.description}</p>
                      <ul className="space-y-1">
                        {pillar.features.map((feature, j) => (
                          <li key={j} className="text-xs text-gray-500 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-teal-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* The Ask */}
            <section className="bg-gradient-to-r from-teal-900/30 to-cyan-900/30 rounded-xl p-8 border border-teal-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="text-teal-400" />
                The Ask
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-400">{businessPlan.ask.amount}</div>
                  <div className="text-gray-400">{businessPlan.ask.round} Round</div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-300 mb-4">{businessPlan.ask.use}</p>
                  <div className="flex flex-wrap gap-2">
                    {businessPlan.ask.targetInvestors.map((investor, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                        {investor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Detailed Plan Tab */}
        {activeTab === 'detailed' && (
          <div className="space-y-4">
            {/* Why Now */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Clock className="text-teal-400" /> Why Now?</div>}
              defaultOpen={true}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.whyNow.factors.map((factor, i) => {
                  const IconComponent = factor.icon === 'Clock' ? Clock :
                    factor.icon === 'FileText' ? FileText :
                    factor.icon === 'DollarSign' ? DollarSign :
                    factor.icon === 'Globe' ? Globe : Clock
                  return (
                    <div key={i} className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5 text-teal-400" />
                        <h3 className="font-semibold text-white">{factor.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{factor.detail}</p>
                    </div>
                  )
                })}
              </div>
            </ExpandableSection>

            {/* Market Size */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><PieChart className="text-teal-400" /> Market Size</div>}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { key: 'tam', label: 'TAM', data: businessPlan.marketSize.tam },
                  { key: 'sam', label: 'SAM', data: businessPlan.marketSize.sam },
                  { key: 'som', label: 'SOM (Y5)', data: businessPlan.marketSize.som }
                ].map(({ key, label, data }) => (
                  <div key={key} className="bg-gray-800 rounded-lg p-5">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-teal-400">{data.value}</div>
                      <div className="text-sm text-gray-400">{label}</div>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{data.description}</p>
                    <div className="space-y-2">
                      {data.breakdown.map((item, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span className="text-gray-400">{item.segment}</span>
                          <span className="text-white font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ExpandableSection>

            {/* Competition */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Users className="text-teal-400" /> Competitive Landscape</div>}
            >
              <p className="text-gray-400 mb-4">{businessPlan.competition.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {businessPlan.competition.competitors.map((comp, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">{comp.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{comp.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="text-green-400 font-medium mb-1">Strengths</div>
                        <ul className="text-gray-400 space-y-1">
                          {comp.strengths.map((s, j) => <li key={j}>+ {s}</li>)}
                        </ul>
                      </div>
                      <div>
                        <div className="text-red-400 font-medium mb-1">Weaknesses</div>
                        <ul className="text-gray-400 space-y-1">
                          {comp.weaknesses.map((w, j) => <li key={j}>- {w}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-teal-900/30 rounded-lg p-4 border border-teal-800">
                <h3 className="font-semibold text-teal-400 mb-2">Our Moat</h3>
                <p className="text-gray-300">{businessPlan.competition.moat}</p>
              </div>
            </ExpandableSection>

            {/* Business Model */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Briefcase className="text-teal-400" /> Business Model</div>}
            >
              <p className="text-gray-400 mb-4">{businessPlan.businessModel.overview}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {businessPlan.businessModel.revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{stream.name}</h3>
                      <span className="text-teal-400 font-medium">{stream.pricing}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{stream.description}</p>
                    <div className="text-xs text-gray-500 mb-2">Gross Margin: {stream.margin}</div>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {stream.details.map((d, j) => (
                        <li key={j} className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-teal-400" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Unit Economics */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-4">Unit Economics</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">{businessPlan.businessModel.unitEconomics.ltv}</div>
                    <div className="text-xs text-gray-400">LTV</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">{businessPlan.businessModel.unitEconomics.cac}</div>
                    <div className="text-xs text-gray-400">CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">{businessPlan.businessModel.unitEconomics.ltvCacRatio}</div>
                    <div className="text-xs text-gray-400">LTV:CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">{businessPlan.businessModel.unitEconomics.paybackPeriod}</div>
                    <div className="text-xs text-gray-400">Payback</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">{businessPlan.businessModel.unitEconomics.grossMargin}</div>
                    <div className="text-xs text-gray-400">Gross Margin</div>
                  </div>
                </div>
                <ul className="text-sm text-gray-400 space-y-1">
                  {businessPlan.businessModel.unitEconomics.details.map((d, i) => (
                    <li key={i}>* {d}</li>
                  ))}
                </ul>
              </div>
            </ExpandableSection>

            {/* Risks */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Shield className="text-teal-400" /> Risks & Mitigations</div>}
            >
              <div className="space-y-3">
                {businessPlan.risks.map((risk, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{risk.risk}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        risk.severity === 'High' ? 'bg-red-900/50 text-red-400' :
                        risk.severity === 'Medium' ? 'bg-yellow-900/50 text-yellow-400' :
                        'bg-green-900/50 text-green-400'
                      }`}>
                        {risk.severity}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm"><strong className="text-gray-300">Mitigation:</strong> {risk.mitigation}</p>
                  </div>
                ))}
              </div>
            </ExpandableSection>

            {/* Milestones */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Award className="text-teal-400" /> Milestones & Timeline</div>}
            >
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />
                <div className="space-y-4">
                  {businessPlan.milestones.map((m, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-teal-400" />
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-teal-400 font-medium">{m.quarter}</span>
                        </div>
                        <p className="text-gray-300">{m.milestone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ExpandableSection>

            {/* Team */}
            <ExpandableSection
              title={<div className="flex items-center gap-2"><Users className="text-teal-400" /> Team & Hiring</div>}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {businessPlan.team.hiring.map((hire, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-white">{hire.role}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        hire.priority === 'Critical' ? 'bg-red-900/50 text-red-400' : 'bg-yellow-900/50 text-yellow-400'
                      }`}>
                        {hire.priority}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-1">{hire.description}</p>
                    <p className="text-xs text-gray-500">Timeline: {hire.timeline}</p>
                  </div>
                ))}
              </div>
            </ExpandableSection>
          </div>
        )}

        {/* Financials Tab */}
        {activeTab === 'financials' && (
          <div className="space-y-8">
            {/* Scenario Comparison */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <LineChart className="text-teal-400" />
                Financial Projections
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* With Financing */}
                <div className="bg-gray-800 rounded-xl p-6 border-2 border-teal-600">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="text-teal-400" />
                    <h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withFinancing.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{businessPlan.financials.scenarios.withFinancing.description}</p>

                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-2 text-gray-400">Year</th>
                          <th className="text-right py-2 text-gray-400">Revenue</th>
                          <th className="text-right py-2 text-gray-400">ISOs</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withFinancing.projections.map((proj, i) => (
                          <tr key={i} className="border-b border-gray-700/50">
                            <td className="py-2 text-white">{proj.year}</td>
                            <td className="py-2 text-right text-teal-400 font-medium">{proj.revenue}</td>
                            <td className="py-2 text-right text-gray-300">{proj.customers}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="text-xs text-gray-400">
                    <div className="font-medium mb-1">Key Assumptions:</div>
                    <ul className="space-y-1">
                      {businessPlan.financials.scenarios.withFinancing.keyAssumptions.map((a, i) => (
                        <li key={i}>* {a}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Without Financing */}
                <div className="bg-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="text-gray-400" />
                    <h3 className="text-xl font-bold text-white">{businessPlan.financials.scenarios.withoutFinancing.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{businessPlan.financials.scenarios.withoutFinancing.description}</p>

                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-2 text-gray-400">Year</th>
                          <th className="text-right py-2 text-gray-400">Revenue</th>
                          <th className="text-right py-2 text-gray-400">ISOs</th>
                        </tr>
                      </thead>
                      <tbody>
                        {businessPlan.financials.scenarios.withoutFinancing.projections.map((proj, i) => (
                          <tr key={i} className="border-b border-gray-700/50">
                            <td className="py-2 text-white">{proj.year}</td>
                            <td className="py-2 text-right text-teal-400 font-medium">{proj.revenue}</td>
                            <td className="py-2 text-right text-gray-300">{proj.customers}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="text-xs text-gray-400">
                    <div className="font-medium mb-1">Key Assumptions:</div>
                    <ul className="space-y-1">
                      {businessPlan.financials.scenarios.withoutFinancing.keyAssumptions.map((a, i) => (
                        <li key={i}>* {a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Use of Funds */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <PieChart className="text-teal-400" />
                Use of Funds
              </h2>
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-teal-400">{fund.percentage}%</div>
                      <div className="text-sm font-medium text-white">{fund.category}</div>
                      <div className="text-xs text-gray-400">{fund.amount}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {businessPlan.financials.useOfFunds.map((fund, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-32 text-sm text-gray-400">{fund.category}</div>
                      <div className="flex-1 bg-gray-700 rounded-full h-4">
                        <div
                          className="bg-teal-500 h-4 rounded-full"
                          style={{ width: `${fund.percentage}%` }}
                        />
                      </div>
                      <div className="w-24 text-sm text-right text-white">{fund.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Sources */}
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText className="text-teal-400" />
                Sources
              </h2>
              <div className="bg-gray-800 rounded-lg p-4">
                <ul className="space-y-2">
                  {businessPlan.sources.map((source, i) => (
                    <li key={i}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 hover:text-teal-300 flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {source.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          <p>{businessPlan.companyName} Business Plan * {businessPlan.version} * {businessPlan.date}</p>
          <p className="mt-2">Part of the <a href="/tokens/#framework" className="text-teal-400 hover:text-teal-300">Ribbit Token Cap-Ex Framework</a></p>
        </div>
      </footer>
    </div>
  )
}
