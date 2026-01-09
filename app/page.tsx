'use client'

import { useState, useEffect } from 'react'
import { ExternalLink, ChevronDown, ChevronUp, Search, Star, Lightbulb, FileText, Building2, BookOpen, TrendingUp, Target, Coins, Zap, DollarSign, Wrench, Quote } from 'lucide-react'
import { categories, summary, opportunities, nicksFramework, capExOpportunities, Company, Category, CapExOpportunity } from '../data/companies'

function CompanyCard({ company }: { company: Company }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 card-hover">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900">{company.name}</h3>
            {company.ribbitPortfolio && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                <Star className="w-3 h-3 mr-1" />
                Ribbit Portfolio
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-1">{company.description}</p>
        </div>
        {company.website && (
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 p-2 text-gray-400 hover:text-green-600 transition-colors"
            title="Visit website"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 flex items-center text-sm text-green-600 hover:text-green-700 transition-colors"
      >
        {expanded ? (
          <>
            <ChevronUp className="w-4 h-4 mr-1" />
            Hide context
          </>
        ) : (
          <>
            <ChevronDown className="w-4 h-4 mr-1" />
            Show PDF context
          </>
        )}
      </button>

      {expanded && (
        <div className="mt-3 p-3 bg-gray-50 rounded-md">
          <p className="text-sm text-gray-700 italic">{company.context}</p>
        </div>
      )}
    </div>
  )
}

function CategorySection({ category }: { category: Category }) {
  return (
    <section id={category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
        <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
        <span className="text-sm text-gray-500">({category.companies.length} companies)</span>
      </div>
      <p className="text-gray-600 mb-6">{category.description}</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {category.companies.map((company) => (
          <CompanyCard key={company.name} company={company} />
        ))}
      </div>
    </section>
  )
}

function OpportunityCard({ opportunity, index }: { opportunity: { title: string; description: string; category: string; criteria: string; gap: string }; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 card-hover">
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm">
          {index + 1}
        </span>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{opportunity.title}</h3>
          <span className="inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700">
            {opportunity.category}
          </span>
          <p className="text-sm text-gray-600 mt-2">{opportunity.description}</p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 flex items-center text-sm text-green-600 hover:text-green-700 transition-colors"
          >
            {expanded ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" />
                Hide details
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                View gap & criteria
              </>
            )}
          </button>

          {expanded && (
            <div className="mt-3 p-3 bg-green-50 rounded-md space-y-2">
              <p className="text-sm"><span className="font-medium text-gray-900">Criteria:</span> <span className="text-gray-700">{opportunity.criteria}</span></p>
              <p className="text-sm"><span className="font-medium text-gray-900">Gap:</span> <span className="text-gray-700">{opportunity.gap}</span></p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function CapExOpportunityCard({ opportunity, index, expanded, onToggle }: { opportunity: CapExOpportunity; index: number; expanded: boolean; onToggle: () => void }) {
  const difficultyColors = {
    'Low': 'bg-green-100 text-green-700',
    'Medium': 'bg-yellow-100 text-yellow-700',
    'High': 'bg-red-100 text-red-700'
  }

  // Check if this opportunity has a business plan (capex 1-5 and 12 have business plans)
  const businessPlanIndices = [0, 1, 2, 3, 4, 11] // capex 1-5 and 12
  const hasBusinessPlan = businessPlanIndices.includes(index)

  return (
    <div id={`capex-${index + 1}`} className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 card-hover scroll-mt-24">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
            {index + 1}
          </span>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg group cursor-pointer" onClick={onToggle}>
              {opportunity.title}
              <span className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity text-sm ml-2">#</span>
            </h3>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700">
                {opportunity.industry}
              </span>
              <span className={`px-2 py-0.5 rounded text-xs font-medium ${difficultyColors[opportunity.difficulty]}`}>
                {opportunity.difficulty} Difficulty
              </span>
              {hasBusinessPlan && (
                <a
                  href={`/tokens/capex-${index + 1}/business-plan`}
                  className="px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700 hover:bg-green-200 transition-colors flex items-center gap-1"
                >
                  <FileText className="w-3 h-3" />
                  View Full Business Plan
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Current State</p>
          <p className="text-sm text-gray-700">{opportunity.currentState}</p>
        </div>

        <div className="p-3 bg-amber-50 rounded-lg border-l-4 border-amber-400">
          <p className="text-xs font-medium text-amber-800 uppercase tracking-wide flex items-center gap-1">
            <DollarSign className="w-3 h-3" /> Cap-Ex Angle
          </p>
          <p className="text-sm text-gray-700 mt-1">{opportunity.capExAngle}</p>
        </div>

        <button
          onClick={onToggle}
          className="flex items-center text-sm text-amber-600 hover:text-amber-700 transition-colors"
        >
          {expanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-1" />
              Hide full analysis
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-1" />
              View full analysis
            </>
          )}
        </button>

        {expanded && (
          <div className="space-y-3 pt-2 border-t border-gray-100">
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Token Play</p>
              <p className="text-sm text-gray-700">{opportunity.tokenPlay}</p>
            </div>

            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Distribution Path</p>
              <p className="text-sm text-gray-700">{opportunity.distributionPath}</p>
            </div>

            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Why Big Business Won&apos;t</p>
              <p className="text-sm text-gray-700">{opportunity.whyBigBusinessWont}</p>
            </div>

            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Potential Sponsors</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {opportunity.potentialSponsors.map((sponsor, i) => (
                  <span key={i} className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-700">
                    {sponsor}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Synergies</p>
              <p className="text-sm text-gray-700">{opportunity.synergies}</p>
            </div>

            {hasBusinessPlan && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a
                  href={`/tokens/capex-${index + 1}/business-plan`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm"
                >
                  <FileText className="w-4 h-4" />
                  View Full Business Plan & Investor Pitch
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function FrameworkSection() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['mentalModel']))
  const [expandedCapEx, setExpandedCapEx] = useState<Set<number>>(new Set())

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(section)) {
      newExpanded.delete(section)
    } else {
      newExpanded.add(section)
    }
    setExpandedSections(newExpanded)
    // Update URL hash
    const currentHash = window.location.hash.split('&')[0] || '#framework'
    if (newExpanded.has(section)) {
      window.history.pushState(null, '', `${currentHash}&${section}`)
    }
  }

  const toggleCapEx = (index: number) => {
    const newExpanded = new Set(expandedCapEx)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
      window.history.pushState(null, '', '#framework')
    } else {
      newExpanded.add(index)
      window.history.pushState(null, '', `#framework&capex-${index + 1}`)
      // Scroll to the element
      setTimeout(() => {
        document.getElementById(`capex-${index + 1}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
    setExpandedCapEx(newExpanded)
  }

  // Handle section deep links on mount
  useEffect(() => {
    const hash = window.location.hash
    const sections = ['mentalModel', 'capEx', 'playbook', 'criteria', 'quotes']
    sections.forEach(section => {
      if (hash.includes(section)) {
        setExpandedSections(prev => new Set([...Array.from(prev), section]))
      }
    })
    // Handle capex-N deep links
    const capexMatch = hash.match(/capex-(\d+)/)
    if (capexMatch) {
      const capexIndex = parseInt(capexMatch[1], 10) - 1
      setExpandedCapEx(new Set([capexIndex]))
      setTimeout(() => {
        document.getElementById(`capex-${capexMatch[1]}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [])

  return (
    <div className="space-y-8">
      {/* Framework Header */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-6 h-6" />
            <h2 className="text-2xl font-bold">{nicksFramework.title}</h2>
          </div>
          <p className="text-amber-100">{nicksFramework.subtitle}</p>
        </div>

        <div className="p-6">
          {/* Core Thesis */}
          <div className="mb-6 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
            <p className="text-gray-800 font-medium italic">&ldquo;{nicksFramework.coreThesis}&rdquo;</p>
          </div>

          {/* Mental Model */}
          <div id="framework-mentalModel" className="mb-6 scroll-mt-24">
            <button
              onClick={() => toggleSection('mentalModel')}
              className="flex items-center justify-between w-full text-left group"
            >
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold text-gray-900 text-lg">{nicksFramework.mentalModel.title}</h3>
                <span className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity text-sm">#</span>
              </div>
              {expandedSections.has('mentalModel') ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {expandedSections.has('mentalModel') && (
              <div className="mt-3">
                <p className="text-gray-600 mb-4">{nicksFramework.mentalModel.description}</p>
                <div className="grid gap-3 md:grid-cols-3">
                  {nicksFramework.mentalModel.layers.map((layer, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900">{layer.name}</h4>
                      <p className="text-xs text-amber-600 mt-1">{layer.tech}</p>
                      <p className="text-sm text-gray-600 mt-2">{layer.function}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Cap-Ex Insight */}
          <div id="framework-capEx" className="mb-6 border-t border-gray-100 pt-6 scroll-mt-24">
            <button
              onClick={() => toggleSection('capEx')}
              className="flex items-center justify-between w-full text-left group"
            >
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold text-gray-900 text-lg">{nicksFramework.capExInsight.title}</h3>
                <span className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity text-sm">#</span>
              </div>
              {expandedSections.has('capEx') ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {expandedSections.has('capEx') && (
              <div className="mt-3 space-y-3">
                <p className="text-gray-600">{nicksFramework.capExInsight.description}</p>
                <div className="p-4 bg-amber-50 rounded-lg">
                  <p className="text-gray-700">{nicksFramework.capExInsight.explanation}</p>
                </div>
                <p className="text-sm text-amber-700 italic">{nicksFramework.capExInsight.keyQuote}</p>
              </div>
            )}
          </div>

          {/* 3-Year Playbook */}
          <div id="framework-playbook" className="mb-6 border-t border-gray-100 pt-6 scroll-mt-24">
            <button
              onClick={() => toggleSection('playbook')}
              className="flex items-center justify-between w-full text-left group"
            >
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold text-gray-900 text-lg">{nicksFramework.threeYearPlaybook.title}</h3>
                <span className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity text-sm">#</span>
              </div>
              {expandedSections.has('playbook') ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {expandedSections.has('playbook') && (
              <div className="mt-4">
                <div className="grid gap-3 md:grid-cols-3">
                  {nicksFramework.threeYearPlaybook.years.map((year) => (
                    <div key={year.year} className="p-4 bg-gray-50 rounded-lg border-l-4 border-amber-400">
                      <span className="inline-block px-2 py-0.5 rounded bg-amber-100 text-amber-700 text-xs font-bold mb-2">
                        Year {year.year}
                      </span>
                      <h4 className="font-medium text-gray-900 text-sm">{year.action}</h4>
                      <p className="text-xs text-gray-500 mt-1">{year.economics}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">Example: {nicksFramework.threeYearPlaybook.example}</p>
              </div>
            )}
          </div>

          {/* Criteria */}
          <div id="framework-criteria" className="mb-6 border-t border-gray-100 pt-6 scroll-mt-24">
            <button
              onClick={() => toggleSection('criteria')}
              className="flex items-center justify-between w-full text-left group"
            >
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold text-gray-900 text-lg">{nicksFramework.criteria.title}</h3>
                <span className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity text-sm">#</span>
              </div>
              {expandedSections.has('criteria') ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {expandedSections.has('criteria') && (
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Target These</h4>
                  <ul className="space-y-1">
                    {nicksFramework.criteria.include.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-green-500 mt-1">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-2">Avoid These</h4>
                  <ul className="space-y-1">
                    {nicksFramework.criteria.avoid.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-red-500 mt-1">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Key Quotes */}
          <div id="framework-quotes" className="border-t border-gray-100 pt-6 scroll-mt-24">
            <button
              onClick={() => toggleSection('quotes')}
              className="flex items-center justify-between w-full text-left group"
            >
              <div className="flex items-center gap-2">
                <Quote className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold text-gray-900 text-lg">Key Quotes</h3>
                <span className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity text-sm">#</span>
              </div>
              {expandedSections.has('quotes') ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {expandedSections.has('quotes') && (
              <div className="mt-4 space-y-3">
                {nicksFramework.keyQuotes.map((quote, i) => (
                  <div key={i} className="p-3 bg-gray-50 rounded-lg border-l-4 border-amber-300">
                    <p className="text-sm text-gray-700 italic">&ldquo;{quote}&rdquo;</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cap-Ex Opportunities */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-amber-600" />
            Cap-Ex Opportunities
          </h2>
          <p className="text-gray-600">
            Opportunities with strong capital expenditure angles—where customers make money from infrastructure investment,
            enabling 2-3x pricing and stickier relationships.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {capExOpportunities.map((opportunity, index) => (
            <CapExOpportunityCard key={opportunity.title} opportunity={opportunity} index={index} expanded={expandedCapEx.has(index)} onToggle={() => toggleCapEx(index)} />
          ))}
        </div>
      </section>
    </div>
  )
}

function SummarySection() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const [showAllTokenTypes, setShowAllTokenTypes] = useState(false)
  const [showAllBeliefs, setShowAllBeliefs] = useState(false)
  const [showAllSections, setShowAllSections] = useState(false)

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(section)) {
      newExpanded.delete(section)
    } else {
      newExpanded.add(section)
    }
    setExpandedSections(newExpanded)
    // Update URL hash
    if (!newExpanded.has(section)) {
      window.history.pushState(null, '', window.location.pathname + window.location.hash.split('&')[0])
    } else {
      const currentHash = window.location.hash || '#companies'
      window.history.pushState(null, '', `${currentHash}&${section}`)
    }
  }

  // Handle section deep links on mount
  useEffect(() => {
    const hash = window.location.hash
    const sections = ['overview', 'tokenTypes', 'beliefs', 'sections', 'investmentCriteria', 'lookingFor']
    sections.forEach(section => {
      if (hash.includes(section)) {
        setExpandedSections(prev => new Set([...Array.from(prev), section]))
      }
    })
  }, [])

  return (
    <section className="mb-12 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="gradient-bg text-white p-6">
        <div className="flex items-center gap-3 mb-2">
          <FileText className="w-6 h-6" />
          <h2 className="text-2xl font-bold">Letter Summary</h2>
        </div>
        <p className="text-green-100 text-lg">{summary.subtitle}</p>
      </div>

      <div className="p-6">
        {/* Key Thesis */}
        <div className="mb-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
          <p className="text-gray-800 font-medium italic">&ldquo;{summary.keyThesis}&rdquo;</p>
        </div>

        {/* Overview - Expandable */}
        <div id="summary-overview" className="mb-6 scroll-mt-24">
          <button
            onClick={() => toggleSection('overview')}
            className="flex items-center justify-between w-full text-left group"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-gray-900 text-lg">Overview</h3>
              <span className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity text-sm">#</span>
            </div>
            {expandedSections.has('overview') ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          {expandedSections.has('overview') && (
            <div className="mt-3 text-gray-700 leading-relaxed">
              {summary.overview}
            </div>
          )}
        </div>

        {/* Token Types - Expandable */}
        <div id="summary-tokenTypes" className="mb-6 border-t border-gray-100 pt-6 scroll-mt-24">
          <button
            onClick={() => toggleSection('tokenTypes')}
            className="flex items-center justify-between w-full text-left group"
          >
            <div className="flex items-center gap-2">
              <Coins className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-gray-900 text-lg">The 7 Token Types</h3>
              <span className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity text-sm">#</span>
            </div>
            {expandedSections.has('tokenTypes') ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {/* Always show token type names */}
          <div className="mt-3 flex flex-wrap gap-2">
            {summary.tokenTypes.map((token, i) => (
              <span key={i} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                {token.name}
              </span>
            ))}
          </div>

          {expandedSections.has('tokenTypes') && (
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {(showAllTokenTypes ? summary.tokenTypes : summary.tokenTypes.slice(0, 4)).map((token, i) => (
                <div key={i} className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900">{token.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{token.description}</p>
                  <p className="text-xs text-gray-500 mt-2"><span className="font-medium">Examples:</span> {token.examples}</p>
                </div>
              ))}
              {!showAllTokenTypes && summary.tokenTypes.length > 4 && (
                <button
                  onClick={() => setShowAllTokenTypes(true)}
                  className="col-span-full text-sm text-green-600 hover:text-green-700 flex items-center justify-center gap-1 py-2"
                >
                  <ChevronDown className="w-4 h-4" />
                  Show all {summary.tokenTypes.length} token types
                </button>
              )}
            </div>
          )}
        </div>

        {/* 10 Strong Beliefs - Expandable */}
        <div id="summary-beliefs" className="mb-6 border-t border-gray-100 pt-6 scroll-mt-24">
          <button
            onClick={() => toggleSection('beliefs')}
            className="flex items-center justify-between w-full text-left group"
          >
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-gray-900 text-lg">10 Strong Beliefs (Loosely Held)</h3>
              <span className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity text-sm">#</span>
            </div>
            {expandedSections.has('beliefs') ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {expandedSections.has('beliefs') && (
            <div className="mt-4 space-y-3">
              {(showAllBeliefs ? summary.strongBeliefs : summary.strongBeliefs.slice(0, 5)).map((belief, i) => (
                <div key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-900">{belief.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{belief.detail}</p>
                  </div>
                </div>
              ))}
              {!showAllBeliefs && summary.strongBeliefs.length > 5 && (
                <button
                  onClick={() => setShowAllBeliefs(true)}
                  className="text-sm text-green-600 hover:text-green-700 flex items-center gap-1 ml-9"
                >
                  <ChevronDown className="w-4 h-4" />
                  Show all 10 beliefs
                </button>
              )}
            </div>
          )}
        </div>

        {/* Main Sections - Expandable */}
        <div id="summary-sections" className="mb-6 border-t border-gray-100 pt-6 scroll-mt-24">
          <button
            onClick={() => toggleSection('mainSections')}
            className="flex items-center justify-between w-full text-left group"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-gray-900 text-lg">Key Themes & Sections</h3>
              <span className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity text-sm">#</span>
            </div>
            {expandedSections.has('mainSections') ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {expandedSections.has('mainSections') && (
            <div className="mt-4 space-y-4">
              {(showAllSections ? summary.mainSections : summary.mainSections.slice(0, 4)).map((section, i) => (
                <div key={i} className="border-l-2 border-green-200 pl-4">
                  <h4 className="font-medium text-gray-900">{section.title}</h4>
                  <p className="text-sm text-green-600 mt-1">{section.summary}</p>
                  <p className="text-sm text-gray-600 mt-2">{section.content}</p>
                </div>
              ))}
              {!showAllSections && summary.mainSections.length > 4 && (
                <button
                  onClick={() => setShowAllSections(true)}
                  className="text-sm text-green-600 hover:text-green-700 flex items-center gap-1 ml-4"
                >
                  <ChevronDown className="w-4 h-4" />
                  Show all {summary.mainSections.length} sections
                </button>
              )}
            </div>
          )}
        </div>

        {/* Key Statistics - Always visible with option to expand */}
        <div id="summary-stats" className="border-t border-gray-100 pt-6 scroll-mt-24">
          <button
            onClick={() => toggleSection('stats')}
            className="flex items-center justify-between w-full text-left group"
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-gray-900 text-lg">Key Statistics</h3>
              <span className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity text-sm">#</span>
            </div>
            {expandedSections.has('stats') ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {/* Preview stats */}
          <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
            {summary.keyStats.slice(0, 4).map((stat, i) => (
              <div key={i} className="p-3 bg-gray-50 rounded-lg text-center">
                <p className="text-sm text-gray-700">{stat}</p>
              </div>
            ))}
          </div>

          {expandedSections.has('stats') && (
            <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3">
              {summary.keyStats.slice(4).map((stat, i) => (
                <div key={i} className="p-3 bg-gray-50 rounded-lg text-center">
                  <p className="text-sm text-gray-700">{stat}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Investment Focus */}
        <div className="mt-6 border-t border-gray-100 pt-6">
          <button
            onClick={() => toggleSection('focus')}
            className="flex items-center justify-between w-full text-left"
          >
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-gray-900 text-lg">What Ribbit is Hunting For</h3>
            </div>
            {expandedSections.has('focus') ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {expandedSections.has('focus') && (
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              {summary.investmentFocus.map((focus, i) => (
                <div key={i} className="flex items-start gap-2 p-2 bg-green-50 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                  <p className="text-sm text-gray-700">{focus}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSection, setActiveSection] = useState<'companies' | 'opportunities' | 'framework'>('companies')

  // Handle URL hash for linkable tabs
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      const baseHash = hash.split('&')[0]
      if (baseHash === 'companies' || baseHash === 'opportunities' || baseHash === 'framework') {
        setActiveSection(baseHash)
      } else if (hash.includes('capex-')) {
        // capex links should go to framework tab
        setActiveSection('framework')
      }
    }

    // Check hash on initial load
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Update URL hash when tab changes
  const handleTabChange = (section: 'companies' | 'opportunities' | 'framework') => {
    setActiveSection(section)
    window.history.pushState(null, '', `#${section}`)
  }

  const filteredCategories = categories.map(category => ({
    ...category,
    companies: category.companies.filter(company =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.companies.length > 0)

  const totalCompanies = categories.reduce((sum, cat) => sum + cat.companies.length, 0)
  const ribbitPortfolioCount = categories.reduce(
    (sum, cat) => sum + cat.companies.filter(c => c.ribbitPortfolio).length,
    0
  )

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center gap-6 mb-6">
            <a href="https://hyder.me" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
              <img src="https://hyder.me/assets/imgs/logos/hyder-media-logo.png" alt="Hyder Media" className="h-20 md:h-24" />
            </a>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                The Future of Tokens
              </h1>
              <a href="https://hyder.me/#contact" target="_blank" rel="noopener noreferrer" className="inline-block text-xl text-green-100 hover:text-white transition-colors underline">Let&apos;s Talk</a>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2">
              <span className="font-bold text-2xl">{totalCompanies}+</span>
              <p className="text-green-100">Companies Mentioned</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2">
              <span className="font-bold text-2xl">{categories.length}</span>
              <p className="text-green-100">Categories</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2">
              <span className="font-bold text-2xl">{ribbitPortfolioCount}</span>
              <p className="text-green-100">Ribbit Portfolio</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2">
              <span className="font-bold text-2xl">{opportunities.length}</span>
              <p className="text-green-100">Opportunities</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2">
              <span className="font-bold text-2xl">{capExOpportunities.length}</span>
              <p className="text-green-100">Cap-Ex Plays</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex gap-2">
              <a
                href="#companies"
                onClick={(e) => { e.preventDefault(); handleTabChange('companies') }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeSection === 'companies'
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Building2 className="w-4 h-4" />
                Companies
              </a>
              <a
                href="#opportunities"
                onClick={(e) => { e.preventDefault(); handleTabChange('opportunities') }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeSection === 'opportunities'
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Lightbulb className="w-4 h-4" />
                Opportunities
              </a>
              <a
                href="#framework"
                onClick={(e) => { e.preventDefault(); handleTabChange('framework') }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeSection === 'framework'
                    ? 'bg-amber-100 text-amber-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Zap className="w-4 h-4" />
                Framework
              </a>
            </div>
            {activeSection === 'companies' && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-64"
                />
              </div>
            )}
          </div>

          {activeSection === 'companies' && (
            <div className="flex gap-2 pb-3 overflow-x-auto">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={`#${category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="flex-shrink-0 px-3 py-1.5 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                >
                  {category.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* PDF Summary Section - Enhanced with Expandable Content */}
        <SummarySection />

        {activeSection === 'companies' ? (
          /* Companies View */
          <div className="space-y-12">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <CategorySection key={category.name} category={category} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No companies found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        ) : activeSection === 'opportunities' ? (
          /* Opportunities View */
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Top 20 Opportunities</h2>
              <p className="text-gray-600">
                Based on the investment criteria from page 38 of the Ribbit Token Letter,
                these are areas where significant opportunities exist for building new products and companies.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {opportunities.map((opportunity, index) => (
                <OpportunityCard key={opportunity.title} opportunity={opportunity} index={index} />
              ))}
            </div>
          </section>
        ) : (
          /* Framework View */
          <FrameworkSection />
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About This Page</h3>
              <p className="text-gray-400 text-sm">
                This page catalogs companies mentioned in the Ribbit Capital Token Letter (June 2025),
                exploring how tokens are transforming AI, finance, and every industry.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {categories.slice(0, 6).map(cat => (
                  <li key={cat.name}>{cat.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Ribbit Capital</h3>
              <p className="text-gray-400 text-sm mb-4">
                Ribbit Capital is a venture capital firm focused on financial services and technology.
              </p>
              <a
                href="https://ribbitcap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                Visit Ribbit Capital
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>Data extracted from Ribbit Token Letter - June 2025</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
