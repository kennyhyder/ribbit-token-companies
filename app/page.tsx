'use client'

import { useState } from 'react'
import { ExternalLink, ChevronDown, ChevronUp, Search, Star, Lightbulb, FileText, Building2 } from 'lucide-react'
import { categories, summary, opportunities, Company, Category } from '../data/companies'

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

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSection, setActiveSection] = useState<'companies' | 'opportunities'>('companies')

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ribbit Token Letter Companies
          </h1>
          <p className="text-xl text-green-100 mb-6">June 2025 Edition</p>
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
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveSection('companies')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeSection === 'companies'
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Building2 className="w-4 h-4" />
                Companies
              </button>
              <button
                onClick={() => setActiveSection('opportunities')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeSection === 'opportunities'
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Lightbulb className="w-4 h-4" />
                Opportunities
              </button>
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
        {/* PDF Summary Section */}
        <section className="mb-12 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Letter Summary</h2>
          </div>
          <p className="text-lg text-gray-600 mb-2">{summary.subtitle}</p>
          <p className="text-gray-700 mb-6 italic border-l-4 border-green-500 pl-4">{summary.keyThesis}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Key Sections</h3>
              <ul className="space-y-3">
                {summary.mainSections.slice(0, 4).map((section, i) => (
                  <li key={i} className="text-sm">
                    <span className="font-medium text-gray-900">{section.title}:</span>
                    <span className="text-gray-600 ml-1">{section.content.slice(0, 150)}...</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Key Statistics</h3>
              <div className="space-y-2">
                {summary.keyStats.map((stat, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                    {stat}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

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
        ) : (
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
