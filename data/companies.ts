export interface Company {
  name: string;
  description: string;
  context: string;
  website: string;
  ribbitPortfolio?: boolean;
}

export interface Category {
  name: string;
  description: string;
  color: string;
  companies: Company[];
}

export const categories: Category[] = [
  {
    name: "AI Foundation Models & Labs",
    description: "Companies building the core large language models and AI systems powering the Token Revolution",
    color: "bg-purple-500",
    companies: [
      {
        name: "OpenAI",
        description: "Creator of ChatGPT and GPT-4, leading the development of large language models with 800M+ weekly active users",
        context: "Mentioned as the leading LLM provider with ChatGPT having early pole position in capturing memory tokens. Their memory feature is changing how people interact with AI, sharing highly personal information with 'sometimes staggering outcomes.'",
        website: "https://openai.com"
      },
      {
        name: "Anthropic",
        description: "AI safety company behind Claude, focused on building reliable and interpretable AI systems",
        context: "Mentioned alongside ChatGPT and other LLMs as platforms where users are sharing memory tokens. The letter notes that 'memory tokens held by Anthropic would be the richest ongoing representation' of a person.",
        website: "https://anthropic.com"
      },
      {
        name: "Google / Alphabet",
        description: "Tech giant behind Gemini AI models, processing 480T+ tokens monthly with 50x growth in token processing",
        context: "Highlighted in the 'Token Revolution Is Upon Us' chart showing massive growth in Google Monthly Tokens Processed. Gemini 2.5 Pro has a context window of 1M tokens. Google and Microsoft together process over 500T tokens monthly.",
        website: "https://google.com"
      },
      {
        name: "Meta",
        description: "Parent company of Facebook, creator of open-source Llama models democratizing AI access",
        context: "Mentioned as a contributor to open-source AI through Llama models, helping propel AI forward through 'open-source or open-weight contributions.' Also noted for generating $164B in ad revenue from identity-based targeting.",
        website: "https://meta.com"
      },
      {
        name: "DeepSeek",
        description: "Chinese AI lab developing open-weight foundation models competing with Western AI labs",
        context: "Cited alongside Llama as an open-source model driving down inference costs by a factor of 1,000 over three years through 'intense competition between the world's best capitalized companies.'",
        website: "https://deepseek.com"
      },
      {
        name: "xAI / Grok",
        description: "Elon Musk's AI company building the Grok conversational AI assistant",
        context: "Mentioned as one of the LLMs where users are sharing memory tokens, alongside ChatGPT and Claude. Shown interacting with autonomous agent Bankr in early agent-to-agent communication examples.",
        website: "https://x.ai"
      }
    ]
  },
  {
    name: "AI Infrastructure & Developer Tools",
    description: "Platforms and tools enabling developers to build AI applications and token factories",
    color: "bg-blue-500",
    companies: [
      {
        name: "NVIDIA",
        description: "Leading GPU manufacturer powering AI compute infrastructure, with Jensen Huang originating the 'token factories' concept",
        context: "Credited as the source of the 'token factories' concept through Jensen Huang's 2025 CES Keynote. Noted as teaching that 'owning rare physical capabilities with defensible IP can create extraordinary returns.'",
        website: "https://nvidia.com"
      },
      {
        name: "Cursor",
        description: "AI-powered code editor enabling developers to write code faster with AI assistance",
        context: "Listed as a leading AI coding agent 'spreading like wildfire' - noted that 'at leading AI companies, most new code is now LLM-written.'",
        website: "https://cursor.com"
      },
      {
        name: "Cognition / Devin",
        description: "Creator of Devin, the first AI software engineer capable of autonomous coding",
        context: "Highlighted as writing 'code at a junior engineer level' and positioned to have 'first crack at registering agent identities' as a leading agent creator.",
        website: "https://cognition.ai"
      },
      {
        name: "Replit",
        description: "Browser-based IDE making coding accessible to everyone through AI assistance",
        context: "Mentioned alongside Genspark as 'making agents accessible to non-technical users' through vibe coding, enabling 'more founders experimenting faster than ever before.'",
        website: "https://replit.com"
      },
      {
        name: "LangChain",
        description: "Open-source framework for building LLM applications and agent workflows",
        context: "Listed as one of the open-source frameworks that 'can compress months of engineering into a few lines of Python' for building token factories.",
        website: "https://langchain.com"
      },
      {
        name: "AutoGen",
        description: "Microsoft's framework for building multi-agent conversational AI systems",
        context: "Mentioned alongside LangChain and CrewAI as frameworks enabling rapid development of agentic systems.",
        website: "https://microsoft.github.io/autogen/"
      },
      {
        name: "CrewAI",
        description: "Framework for orchestrating role-playing autonomous AI agents working together",
        context: "Listed as an open-source framework helping developers build token factories more efficiently.",
        website: "https://crewai.com"
      },
      {
        name: "OpenRouter",
        description: "Unified API for accessing multiple LLM providers, now processing 5T+ tokens monthly",
        context: "Highlighted as processing 'over 5T tokens a month' as an interface for accessing multiple LLMs, demonstrating the scale of token processing.",
        website: "https://openrouter.ai"
      },
      {
        name: "Crusoe",
        description: "AI data center company optimizing compute infrastructure for AI workloads",
        context: "Named as a Ribbit portfolio company and 'leader in AI data center orchestration' - an example of 'Real World Token Factories' building defensible physical infrastructure.",
        website: "https://crusoe.ai",
        ribbitPortfolio: true
      },
      {
        name: "CoreWeave",
        description: "Cloud infrastructure provider specializing in GPU compute for AI applications",
        context: "Mentioned alongside Crusoe as 'AI data center specialists racing to lock up as much power as possible.'",
        website: "https://coreweave.com"
      },
      {
        name: "PsiQuantum",
        description: "Quantum computing company building fault-tolerant quantum computers",
        context: "Named as a Ribbit portfolio company and 'leader in quantum computing' - part of their 'Real World Token Factories' investment thesis.",
        website: "https://psiquantum.com",
        ribbitPortfolio: true
      },
      {
        name: "Scale AI",
        description: "Data labeling and AI infrastructure company providing training data for models",
        context: "Mentioned alongside Gretel as companies that 'keep improving quality and efficiency' in creating synthetic datasets and data labeling.",
        website: "https://scale.com"
      },
      {
        name: "Gretel",
        description: "Synthetic data platform helping companies generate privacy-safe training data",
        context: "Listed as improving 'quality and efficiency' in synthetic dataset generation, supplementing human-labeled data.",
        website: "https://gretel.ai"
      }
    ]
  },
  {
    name: "Fintech & Payments",
    description: "Companies transforming financial services, payments, and digital money infrastructure",
    color: "bg-green-500",
    companies: [
      {
        name: "Stripe",
        description: "Global payments infrastructure company storing billions of payment tokens including through Link wallet",
        context: "Highlighted as storing and deploying 'billions of payment tokens' - when 'an agent needs credentials for a transaction, Stripe will likely be the most efficient and secure way.' Acquired Bridge for stablecoin infrastructure.",
        website: "https://stripe.com",
        ribbitPortfolio: true
      },
      {
        name: "Visa",
        description: "Global payments network with 11.5B tokens deployed globally, handling $16T in annual volume",
        context: "Featured in the 'Token Revolution Is Upon Us' chart showing 115x growth in tokens deployed. Noted as 'iterating quickly on infrastructure for agents and agentic systems.'",
        website: "https://visa.com"
      },
      {
        name: "Mastercard",
        description: "Global payments network processing approximately 4B monthly tokens",
        context: "Cited as processing 'about 4B monthly tokens' - an example of incumbent payment infrastructure at scale.",
        website: "https://mastercard.com"
      },
      {
        name: "Plaid",
        description: "Financial data network connecting over 780M accounts, enabling financial connectivity",
        context: "Highlighted as a proprietary token supplier with 'over half of all Americans' in their network. Even with coding agents, competitors would face friction without Plaid's 'brand, stored credentials, bank agreements, or security.'",
        website: "https://plaid.com",
        ribbitPortfolio: true
      },
      {
        name: "Nubank",
        description: "Brazilian digital bank and one of the world's largest neobanks, spending $600M+ annually on support",
        context: "Described as 'the gold standard in mobile banking service' but still spending over $600M annually on support. Positioned to lead in 'developing agentic experiences.'",
        website: "https://nubank.com.br",
        ribbitPortfolio: true
      },
      {
        name: "Robinhood",
        description: "Commission-free trading platform democratizing access to financial markets",
        context: "Mentioned alongside Groww as a modern brand that knows 'a lot about you from your ever-growing stream of transactions and clicks.' Featured in ChatGPT citations for stock trading questions.",
        website: "https://robinhood.com",
        ribbitPortfolio: true
      },
      {
        name: "Groww",
        description: "India's leading investment platform making investing accessible to millions",
        context: "Listed alongside Robinhood as an example of modern digital brands that capture rich transaction data, positioned to compete for memory tokens.",
        website: "https://groww.in",
        ribbitPortfolio: true
      },
      {
        name: "Cred",
        description: "Indian fintech platform for credit card payments and rewards",
        context: "Listed among trusted digital brands 'in a much stronger position' to develop agentic experiences with their 'capabilities, data, and engagement.'",
        website: "https://cred.club",
        ribbitPortfolio: true
      },
      {
        name: "Revolut",
        description: "Digital banking super app offering banking, crypto, and investment services globally",
        context: "Named as a trusted digital brand positioned to lead agentic finance, and as a platform giving 'people and agents safe ways to navigate the wild world of programmable money.'",
        website: "https://revolut.com",
        ribbitPortfolio: true
      },
      {
        name: "Ajaib",
        description: "Indonesian investment platform making stock and mutual fund investing accessible",
        context: "Listed among trusted digital brands positioned to develop agentic experiences.",
        website: "https://ajaib.co.id",
        ribbitPortfolio: true
      },
      {
        name: "Monzo",
        description: "UK digital bank known for its user-friendly mobile banking experience",
        context: "Named among trusted digital brands 'in a much stronger position' to lead in developing agentic financial experiences.",
        website: "https://monzo.com",
        ribbitPortfolio: true
      },
      {
        name: "Chime",
        description: "US digital bank focused on fee-free banking for everyday Americans",
        context: "Featured in the Customer Agents section as an example of companies deploying AI assistants ('Hi I'm Jade, your AI assistant') for customer support.",
        website: "https://chime.com"
      },
      {
        name: "Bilt",
        description: "Rewards program for renters allowing them to earn points on rent payments",
        context: "Featured alongside Chime in the Customer Agents section showing 'Chat with Bilt' conversational AI interface.",
        website: "https://biltrewards.com",
        ribbitPortfolio: true
      },
      {
        name: "PayOS",
        description: "Payment infrastructure for AI agents and autonomous systems",
        context: "Named as an 'upstart' alongside Stripe as 'early leaders' building for agents, serving key AI leaders.",
        website: "https://payos.ai"
      },
      {
        name: "Modern Treasury",
        description: "Payment operations platform for managing money movement at scale",
        context: "Listed among entrepreneurial companies 'working to make life easier for finance teams' through workflow automation.",
        website: "https://moderntreasury.com"
      },
      {
        name: "Bridge",
        description: "Stablecoin infrastructure company acquired by Stripe for onboarding and orchestration",
        context: "Highlighted as acquired by Stripe for 'good reasons - skyrocketing demand and awareness that handling stablecoin payments safely and compliantly is not trivial.'",
        website: "https://bridge.xyz"
      },
      {
        name: "Sling",
        description: "Global payments company leveraging stablecoins for cross-border transfers",
        context: "Mentioned as part of the portfolio seeing 'rising impact of stablecoin uses (e.g. vendor payments, remittances, foreign aid).'",
        website: "https://sling.money",
        ribbitPortfolio: true
      }
    ]
  },
  {
    name: "Crypto & Blockchain",
    description: "Decentralized networks, protocols, and platforms building the infrastructure for tokenized assets",
    color: "bg-orange-500",
    companies: [
      {
        name: "Bitcoin",
        description: "First and largest cryptocurrency, with 21M maximum token supply described in ~4,330 tokens",
        context: "Referenced as 'perfectly scarce but available to anyone with resources.' The Bitcoin whitepaper is described as 'around 4,330 tokens, describing a system that will only ever produce 21M Bitcoin tokens.'",
        website: "https://bitcoin.org"
      },
      {
        name: "Ethereum",
        description: "Leading smart contract platform enabling programmable money and DeFi",
        context: "Mentioned alongside Bitcoin and Solana as networks where 'agents will appreciate the composability and accessibility.' ERC standards like ERC-6900 and ERC-6551 enable programmable tokens.",
        website: "https://ethereum.org"
      },
      {
        name: "Solana",
        description: "High-performance blockchain with 40K+ tokens launched daily, sub-$0.02 transaction fees",
        context: "Highlighted for launching 'over 40K tokens every day in May.' Featured as where 'launching a token now costs less than $10 in gas, and transaction fees have collapsed to under $0.02.' Token Extensions growing rapidly.",
        website: "https://solana.com"
      },
      {
        name: "Coinbase",
        description: "Leading US cryptocurrency exchange and custodian, issuer of Base L2",
        context: "Listed among portfolio companies seeing 'rising impact of stablecoin uses' and as a platform giving 'people and agents safe ways to navigate programmable money.' AgentKit for developer tooling.",
        website: "https://coinbase.com",
        ribbitPortfolio: true
      },
      {
        name: "Tether",
        description: "Largest stablecoin issuer with $250B+ AUM, earning $13B profit last year (~$86M per employee)",
        context: "Highlighted as earning '$13B of profits last year, 100x the profits per employee of kingpins like JPM and Blackstone.' An example of 'potent economic leverage in branded digital assets with global scale.'",
        website: "https://tether.to"
      },
      {
        name: "Circle",
        description: "Issuer of USDC stablecoin and digital currency infrastructure provider",
        context: "Implicitly referenced as a major stablecoin issuer alongside Tether in the discussion of stablecoins growing to '$250B in AUM.'",
        website: "https://circle.com"
      },
      {
        name: "Fireblocks",
        description: "Digital asset custody and infrastructure platform for institutions",
        context: "Listed among portfolio companies seeing 'rising impact of stablecoin uses (e.g. vendor payments, remittances, foreign aid).'",
        website: "https://fireblocks.com",
        ribbitPortfolio: true
      },
      {
        name: "Polymarket",
        description: "Prediction market platform that accurately forecast the 2024 US election with $4B+ wagered",
        context: "Featured prominently for predicting Trump at '60% odds' while polls showed a dead heat. Over '$4B wagered by participants with skin in the game' provided more reliable information tokens.",
        website: "https://polymarket.com"
      },
      {
        name: "Kalshi",
        description: "CFTC-regulated prediction market allowing Americans to trade on real-world events",
        context: "Listed alongside Polymarket and Robinhood in the '2025 Presidential Election Winner Contracts Traded' chart, showing prediction markets' accuracy.",
        website: "https://kalshi.com"
      },
      {
        name: "Chainlink",
        description: "Decentralized oracle network securing nearly $50B of value across 700+ protocols",
        context: "Named as an oracle network that 'currently secure[s] nearly $50B of value (across 700 protocols)' by incentivizing nodes to report accurate data.",
        website: "https://chain.link"
      },
      {
        name: "Pyth",
        description: "High-frequency oracle network providing real-time market data to DeFi",
        context: "Listed alongside Chainlink as oracle networks providing machine-accessible 'sources of truth for information external to a market.'",
        website: "https://pyth.network"
      },
      {
        name: "Uniswap",
        description: "Leading decentralized exchange protocol for token swapping",
        context: "Named as DeFi infrastructure giving 'people and agents safe ways to navigate the wild world of programmable money.'",
        website: "https://uniswap.org"
      },
      {
        name: "Morpho",
        description: "DeFi lending protocol optimizing capital efficiency",
        context: "Listed as infrastructure trusted to help 'people and agents safe ways to navigate the wild world of programmable money.'",
        website: "https://morpho.org"
      },
      {
        name: "Jito",
        description: "Solana MEV infrastructure and liquid staking protocol",
        context: "Named among trusted DeFi infrastructure platforms for navigating programmable money.",
        website: "https://jito.network"
      },
      {
        name: "Virtuals.io",
        description: "Platform for creating autonomous AI agents with crypto wallets and tokenized equity",
        context: "Featured extensively - 'anyone can create an agent with a purpose, instructions, and tools - and then set them free to operate autonomously.' Agents 'valued' at over $2B market cap at peak.",
        website: "https://virtuals.io"
      },
      {
        name: "AIXBT",
        description: "Autonomous AI agent offering market insights with tradeable token, spawning ecosystem of trading agents",
        context: "Highlighted as an agent offering 'market insights based on real-time on-chain and sentiment data.' Followers pay for direct access and 'early looks at trading calls,' spawning an 'ecosystem of agents trading based on its signals.'",
        website: "https://twitter.com/aixbt_agent"
      },
      {
        name: "Bittensor",
        description: "Decentralized AI network with $3B+ market cap and 275K+ active accounts",
        context: "Named as a decentralized compute network with '$3B+ market cap, 275K+ active accounts' offering programmable and censorship-resistant compute access.",
        website: "https://bittensor.com"
      },
      {
        name: "Prime Intellect",
        description: "Decentralized AI training platform for collaborative model development",
        context: "Listed alongside Bittensor and Nous as decentralized compute networks for agents to access different models for inference and training.",
        website: "https://primeintellect.ai"
      },
      {
        name: "Nous",
        description: "Decentralized AI research collective building open models",
        context: "Mentioned as a decentralized compute network opportunity for agent inference and training.",
        website: "https://nousresearch.com"
      }
    ]
  },
  {
    name: "Identity & Security",
    description: "Companies building identity verification, authentication, and data security infrastructure",
    color: "bg-red-500",
    companies: [
      {
        name: "Persona",
        description: "Identity verification platform with Reusable Personas (RPs) storing identity tokens across devices",
        context: "Named as a Ribbit portfolio example - 'Persona's Reusable Personas (RPs) product helps users store identity tokens across devices and services; when an agent needs to make sure an RP user is a real or specific human, Persona will have an unfair advantage.'",
        website: "https://withpersona.com",
        ribbitPortfolio: true
      },
      {
        name: "ID.me",
        description: "Digital identity network with 140M users verified across government and commercial services",
        context: "Featured as a leading identity wallet with '140M users' - users 'can bring verified identities with them across different walks of life - from accessing government benefits to hustling through airports.'",
        website: "https://id.me"
      },
      {
        name: "CLEAR",
        description: "Biometric identity platform with 30M users for secure verification at airports and venues",
        context: "Highlighted with '30M users' running the identity wallet play - 'with each interaction (e.g. a venue check-in, tax filing, or overseas trip) these wallets add context to dynamic profiles tied to unique identities.'",
        website: "https://clearme.com"
      },
      {
        name: "Worldcoin",
        description: "Global identity and financial network using iris biometrics for proof of personhood",
        context: "Named among 'decentralized networks' that 'will play a significant role' in making multi-modal biometrics 'a gold standard for higher risk or higher value use cases.'",
        website: "https://worldcoin.org"
      },
      {
        name: "CyberArk",
        description: "Enterprise identity security company with decades of machine identity experience",
        context: "Mentioned alongside Microsoft and SailPoint as having 'worked on machine identity for decades' - though 'basic identifiers like IP addresses and API keys no longer convey what we need.'",
        website: "https://cyberark.com"
      },
      {
        name: "SailPoint",
        description: "Enterprise identity governance platform for managing user access",
        context: "Listed among companies with decades of machine identity experience, now facing new challenges as 'basic identifiers' become inadequate.",
        website: "https://sailpoint.com"
      },
      {
        name: "Microsoft Entra",
        description: "Microsoft's identity and access management platform (formerly Azure AD)",
        context: "Named among 'IAM leaders like Okta, CyberArk, and Microsoft Entra' that are 'already expanding into agent auth and access control.'",
        website: "https://microsoft.com/security/business/microsoft-entra"
      },
      {
        name: "Okta",
        description: "Leading identity and access management platform for enterprises",
        context: "Listed as an IAM leader 'already expanding into agent auth and access control' for the coming world of agent identities.",
        website: "https://okta.com"
      },
      {
        name: "Oasis Security",
        description: "Machine identity security platform focused on non-human identities",
        context: "Named as a 'talented new team' emerging 'to focus on machine-first identity.'",
        website: "https://oasis.security"
      },
      {
        name: "Token Security",
        description: "Machine identity protection platform for securing non-human accounts",
        context: "Listed alongside Oasis Security as teams emerging to tackle machine-first identity challenges.",
        website: "https://tokensecurity.com"
      },
      {
        name: "Evervault",
        description: "Data encryption and tokenization platform for securing sensitive data",
        context: "Named as a 'leading tokenization platform' that 'should benefit' from adding agents into payment flows, already supporting 'merchants with complex payment security and data challenges.'",
        website: "https://evervault.com"
      },
      {
        name: "VGS (Very Good Security)",
        description: "Data security platform enabling companies to handle sensitive data without storing it",
        context: "Listed as a 'data bank' alongside Evervault, positioned to help with 'nuances of adding agents in the loop' for payments.",
        website: "https://verygoodsecurity.com"
      }
    ]
  },
  {
    name: "Enterprise SaaS & Vertical Platforms",
    description: "B2B software companies building 'Vertical Token Systems' - the operating systems of industries",
    color: "bg-indigo-500",
    companies: [
      {
        name: "Brex",
        description: "Corporate card and spend management platform for startups and enterprises",
        context: "Named among incumbents 'starting in a strong position to compete to become leading Vertical Token Systems' due to 'expanding rapidly in size, product surface area, and depth of data connectivity.'",
        website: "https://brex.com"
      },
      {
        name: "Ramp",
        description: "Corporate card and expense management platform with AI-powered insights",
        context: "Listed among leading platforms 'expanding rapidly' - data from Ramp customers shows 70% of finance companies using AI by Jan 2025. Featured in charts showing AI adoption by industry.",
        website: "https://ramp.com"
      },
      {
        name: "Deel",
        description: "Global HR and payroll platform for hiring international teams",
        context: "Named among platforms 'expanding rapidly' and HRIS platforms that 'could become a system of record for agentic workers too.'",
        website: "https://deel.com"
      },
      {
        name: "Rippling",
        description: "HR, IT, and finance platform unifying employee management systems",
        context: "Listed as an HRIS platform that 'already act[s] as the system of record for human workers' and could do the same for agents.",
        website: "https://rippling.com"
      },
      {
        name: "Juniper Square",
        description: "Investment management platform for private markets and real estate",
        context: "Named as positioned to '1) build token factories that reinvent efficiency' and '2) leverage a trove of valuable tokens (identities, holdings, transactions, performance data) to create new markets.'",
        website: "https://junipersquare.com",
        ribbitPortfolio: true
      },
      {
        name: "Shopify",
        description: "E-commerce platform enabling businesses to sell online and in-person",
        context: "Named alongside Toast as companies that 'keep bundling more functionality under a trusted brand' in SMB, 'poised to compound for many years to come.'",
        website: "https://shopify.com"
      },
      {
        name: "Toast",
        description: "Restaurant management platform with POS, payments, and operations tools",
        context: "Listed with Shopify as SMB platforms bundling functionality and positioned for continued growth in agentic solutions.",
        website: "https://toasttab.com"
      },
      {
        name: "Decagon",
        description: "AI customer support platform enabling agents to observe, decide, and act within operational environments",
        context: "Featured extensively as enabling agents with '70-80% ticket deflection and customer satisfaction scores that match humans.' Company agents 'can span multiple backend systems.'",
        website: "https://decagon.ai"
      },
      {
        name: "Salient",
        description: "AI-powered collections platform automating debt recovery communications",
        context: "Named alongside Decagon as a company building 'specialized support' agents for collections use cases.",
        website: "https://salient.co"
      },
      {
        name: "Harvey",
        description: "AI platform for legal professionals automating complex legal work",
        context: "Featured in charts showing rapid ARR growth - 'automating complex research questions across domains for legal, tax and regulatory firms.'",
        website: "https://harvey.ai"
      },
      {
        name: "Abridge",
        description: "AI medical documentation platform converting conversations to clinical notes, $117M CARR",
        context: "Detailed as starting 'by helping doctors capture notes that are compliant, clinically useful, and billable' then creating 'virtuous cycle of feedback and model improvement' reaching '$117M CARR.'",
        website: "https://abridge.com"
      },
      {
        name: "AlphaSense",
        description: "AI-powered market intelligence platform for financial and business research",
        context: "Named among platforms navigating 'complex data for expert users' - 'financial analysts' - with chart showing growing LLM token consumption.",
        website: "https://alpha-sense.com"
      },
      {
        name: "Hebbia",
        description: "AI-powered document analysis platform for financial services",
        context: "Listed among platforms building 'ChatGPT for finance' serving 'financial analysts' including hedge funds, long-only investors, bankers.",
        website: "https://hebbia.ai"
      },
      {
        name: "Rogo",
        description: "AI research assistant for finance professionals",
        context: "Named among financial analysis platforms that will 'soon make financial analysis accessible to a much broader audience.'",
        website: "https://rogo.ai"
      },
      {
        name: "BlueFlame",
        description: "AI platform for private markets deal sourcing and analysis",
        context: "Listed among platforms navigating 'a panoply of complex data for expert users.'",
        website: "https://blueflame.ai"
      },
      {
        name: "Rowspace",
        description: "AI-powered financial modeling and analysis platform",
        context: "Named among financial analysis platforms serving different types of financial analysts.",
        website: "https://rowspace.com"
      },
      {
        name: "Endex",
        description: "AI platform for investment research and due diligence",
        context: "Listed among platforms building tools for financial analysis across hedge funds, banks, and consultants.",
        website: "https://endex.ai"
      },
      {
        name: "SafetyKit",
        description: "AI compliance and content moderation platform, enabling real-time agentic oversight",
        context: "Featured as a 'queue killer' deploying 'compliance agents that execute a company's SOPs, enabling customers like Etsy to shift from slow, error-prone BPOs to real-time agentic oversight, at near 100% accuracy.'",
        website: "https://safetykit.com"
      },
      {
        name: "CoPlane",
        description: "AI platform for automating back-office financial operations",
        context: "Named as a company 'working to make life easier for finance teams' with 'Vendor Matching Agent' shown automating vendor matches from invoices.",
        website: "https://coplane.co"
      },
      {
        name: "Payflows",
        description: "Payment operations automation platform for enterprises",
        context: "Listed among companies building 'AI-centric applications (payment ops, procurement, onboarding) built on top of ERP and HRIS systems.'",
        website: "https://payflows.com"
      },
      {
        name: "Zamp",
        description: "Automated sales tax compliance platform",
        context: "Named among entrepreneurial companies 'working to make life easier for finance teams.'",
        website: "https://zamp.com"
      },
      {
        name: "Zip",
        description: "Procurement and spend management platform",
        context: "Listed among companies making life easier for finance teams through workflow automation.",
        website: "https://ziphq.com"
      },
      {
        name: "Atlar",
        description: "Treasury management platform for modern finance teams",
        context: "Named among companies building for finance teams with potential to become 'vampire squids to the ERPs they leverage.'",
        website: "https://atlar.com"
      },
      {
        name: "Databricks",
        description: "Data and AI platform unifying data warehousing, data engineering, and machine learning",
        context: "Noted as having 'been siphoning data out of ERPs for several years, and are now using it to become leading platforms for agentic use cases.'",
        website: "https://databricks.com"
      },
      {
        name: "Snowflake",
        description: "Cloud data platform enabling data warehousing and analytics",
        context: "Listed alongside Databricks as already 'siphoning data out of ERPs' and positioning for agentic use cases.",
        website: "https://snowflake.com"
      },
      {
        name: "Workday",
        description: "Enterprise HR and finance cloud platform",
        context: "Named as an HRIS platform that 'could become a system of record for agentic workers' alongside human workers.",
        website: "https://workday.com"
      },
      {
        name: "Pylon",
        description: "Customer communication platform for B2B companies",
        context: "Named among platforms enabling 'infrastructure for agent orchestration, memory, action, and feedback.'",
        website: "https://usepylon.com"
      },
      {
        name: "Agency",
        description: "AI automation platform for business workflows",
        context: "Listed as one of the 'most important platforms and brands in the future of B2B' for agent orchestration.",
        website: "https://agency.com"
      },
      {
        name: "Enter",
        description: "AI legal platform helping enterprises respond to consumer lawsuits in Brazil",
        context: "Highlighted as having 'a fast path into the market helping enterprises respond to overwhelming caseloads' due to velocity of lawsuits.",
        website: "https://enter.law"
      },
      {
        name: "Multiplier",
        description: "AI-powered professional services firm reimagining how consulting works",
        context: "Featured as an example of 'AI-powered roll-ups' reimagining 'what a leading services firm can be' - going 'beyond cost cutting with agents.'",
        website: "https://multiplier.ai"
      },
      {
        name: "Additive",
        description: "AI document extraction platform for accounting and wealth management",
        context: "Featured as 'automating document extraction for accounting firms and wealth managers.'",
        website: "https://additive.ai"
      }
    ]
  },
  {
    name: "Wealth Management & Personal Finance",
    description: "Companies building the future of financial advice and personal finance management",
    color: "bg-teal-500",
    companies: [
      {
        name: "Jump",
        description: "AI platform for wealth advisors turning client conversations into CRM entries",
        context: "Named alongside Zocks as 'gaining rapid adoption with advisors by turning client conversations into detailed CRM entries and follow ups.'",
        website: "https://jump.co"
      },
      {
        name: "Zocks",
        description: "AI assistant for financial advisors capturing meeting notes and action items",
        context: "Listed as gaining 'rapid adoption with advisors' through conversation-to-CRM automation.",
        website: "https://zocks.com"
      },
      {
        name: "Farther",
        description: "Modern wealth management platform combining human advisors with technology",
        context: "Named among 'fast-moving teams vying to become Vertical Token Systems in wealth.'",
        website: "https://farther.com"
      },
      {
        name: "Nevis",
        description: "AI-powered financial planning platform for advisors",
        context: "Listed as a team vying to become a Vertical Token System in wealth management.",
        website: "https://nevis.com"
      },
      {
        name: "Compound",
        description: "Financial planning platform for startup founders and employees",
        context: "Named among fast-moving teams competing in wealth management vertical.",
        website: "https://withcompound.com"
      },
      {
        name: "Savvy",
        description: "Employee benefits and financial wellness platform",
        context: "Listed as a team vying to become a Vertical Token System in wealth.",
        website: "https://savvy.com"
      },
      {
        name: "Wealthfront",
        description: "Automated investment service and financial planning platform",
        context: "Featured in ChatGPT citations chart as where users are directed for investment portfolio management questions.",
        website: "https://wealthfront.com"
      },
      {
        name: "Copilot (PFM)",
        description: "Personal finance app for tracking spending and managing money",
        context: "Featured in PFM app downloads chart showing growth alongside other personal finance apps.",
        website: "https://copilot.money"
      },
      {
        name: "YNAB",
        description: "Budgeting app teaching users to 'give every dollar a job'",
        context: "Listed in PFM app downloads chart showing strong growth in personal finance app adoption.",
        website: "https://ynab.com"
      },
      {
        name: "Rocket",
        description: "Personal finance app from Rocket Companies",
        context: "Featured in PFM app downloads chart.",
        website: "https://rocket.com"
      },
      {
        name: "Cleo",
        description: "AI-powered financial assistant helping users manage money through chat",
        context: "Named among 'strong, entrepreneurial teams' exploring 'new frontiers' in personal finance.",
        website: "https://meetcleo.com"
      },
      {
        name: "Monarch",
        description: "Personal finance app for budgeting and wealth tracking",
        context: "Featured in PFM app downloads chart showing growth in the personal finance category.",
        website: "https://monarchmoney.com"
      },
      {
        name: "Albert",
        description: "AI-powered financial app offering banking, budgeting, and investing",
        context: "Listed in PFM app downloads chart among growing personal finance apps.",
        website: "https://albert.com"
      },
      {
        name: "Hiro",
        description: "AI-powered personal finance assistant",
        context: "Named among 'strong, entrepreneurial teams' exploring new frontiers in personal finance.",
        website: "https://hiro.ai"
      }
    ]
  },
  {
    name: "Consumer & Marketplaces",
    description: "Consumer-facing platforms and marketplaces being transformed by AI and tokenization",
    color: "bg-pink-500",
    companies: [
      {
        name: "DoorDash",
        description: "Food delivery platform unlocked by smartphone capabilities like GPS",
        context: "Cited as an example of how 'smartphone capabilities (e.g. GPS, high-quality cameras) unlocked novel business models' - tokenizers will create similar knock-on effects.",
        website: "https://doordash.com"
      },
      {
        name: "Uber",
        description: "Ride-sharing platform that revolutionized transportation through mobile technology",
        context: "Named alongside DoorDash as examples of business models enabled by smartphones. 'Waymo rides feel safer and smoother than Ubers.'",
        website: "https://uber.com"
      },
      {
        name: "Grab",
        description: "Southeast Asian super app collecting driver video for real-time address intelligence",
        context: "Featured as example of tokenization: 'collecting raw video footage from its drivers in Indonesia, turning those tokens into context about every street and address, and creating real-time audio instructions.'",
        website: "https://grab.com"
      },
      {
        name: "Kavak",
        description: "Latin American used car marketplace with 75%+ of customers starting through agents",
        context: "Featured for shifting to 'agent-first experience' - 'today, over 75% of Kavak customers start their relationship with the company through agents.'",
        website: "https://kavak.com",
        ribbitPortfolio: true
      },
      {
        name: "Waymo",
        description: "Autonomous vehicle company from Alphabet offering robotaxi service",
        context: "Cited as evidence machines are 'mirroring humans more reliably than people do' - 'Waymo rides feel safer and smoother than Ubers.'",
        website: "https://waymo.com"
      },
      {
        name: "Groupon",
        description: "Local deals marketplace that pioneered digital coupon discovery",
        context: "Named alongside Thumbtack and DoorDash as examples where 'customer acquisition has been a consistent theme across many of the most successful SMB tech platforms.'",
        website: "https://groupon.com"
      },
      {
        name: "Thumbtack",
        description: "Local services marketplace connecting customers with professionals",
        context: "Listed among successful SMB platforms where customer acquisition was central to success.",
        website: "https://thumbtack.com"
      },
      {
        name: "Etsy",
        description: "E-commerce platform for handmade and vintage items using SafetyKit for compliance",
        context: "Named as a SafetyKit customer shifting 'from slow, error-prone BPOs to real-time agentic oversight, at near 100% accuracy.'",
        website: "https://etsy.com"
      }
    ]
  },
  {
    name: "Productivity & Note-Taking",
    description: "Tools capturing context and memory tokens from human interactions",
    color: "bg-yellow-500",
    companies: [
      {
        name: "Granola",
        description: "AI note-taking app that captures meeting context and generates summaries",
        context: "Named as a note-taking agent with 'magical' first experience - 'by converting audio recordings of meetings into structured notes, these apps generate 10x-100x more shareable context.'",
        website: "https://granola.ai"
      },
      {
        name: "Otter.ai",
        description: "AI meeting assistant transcribing and summarizing conversations",
        context: "Featured in AI Note Taker traffic chart, listed as a 'straightforward example' of tokenizers capturing latent data.",
        website: "https://otter.ai"
      },
      {
        name: "Fireflies.ai",
        description: "AI meeting assistant for recording, transcribing, and analyzing meetings",
        context: "Named among note-taking agents creating 'foundation for a wide range of organizational improvements.'",
        website: "https://fireflies.ai"
      },
      {
        name: "Sonix",
        description: "Automated transcription service selling at <$0.20 per minute",
        context: "Cited as example of AI transcription services '5-25x cheaper than human transcription' enabling more token inputs.",
        website: "https://sonix.ai"
      },
      {
        name: "Notion",
        description: "All-in-one workspace for notes, docs, and project management",
        context: "Mentioned as where one 'might in the past have called a friend or started a thought in Notion, Google Docs, or Word.'",
        website: "https://notion.so"
      },
      {
        name: "Fathom",
        description: "AI meeting assistant for recording and summarizing video calls",
        context: "Featured in AI Note Taker monthly web traffic chart showing growth.",
        website: "https://fathom.video"
      },
      {
        name: "Read.ai",
        description: "AI assistant for meeting analysis and productivity insights",
        context: "Listed in AI Note Taker traffic chart among growing meeting intelligence tools.",
        website: "https://read.ai"
      }
    ]
  },
  {
    name: "Data Infrastructure & Analytics",
    description: "Companies transforming raw data into valuable token inputs for AI systems",
    color: "bg-cyan-500",
    companies: [
      {
        name: "Reducto",
        description: "Document ingestion platform converting unstructured documents into structured data",
        context: "Named as a tokenizer with 'potential to become powerful data skeleton keys and eliminate millions of hours of tedious work' - featured in data extraction illustration.",
        website: "https://reducto.ai"
      },
      {
        name: "Heron Data",
        description: "Financial data extraction platform for lending and banking",
        context: "Listed alongside Reducto and Pulse as 'ingestion companies' solving document digitization.",
        website: "https://herondata.io"
      },
      {
        name: "Pulse",
        description: "Data extraction and automation platform",
        context: "Named as an ingestion company helping tokenize data that exists 'just not in forms machines can use effectively.'",
        website: "https://pulse.so"
      },
      {
        name: "Kanastra",
        description: "Brazilian fund administration and securitization platform",
        context: "Named alongside Juniper Square as 'positioned to 1) build token factories that reinvent efficiency' in fund administration.",
        website: "https://kanastra.com.br",
        ribbitPortfolio: true
      },
      {
        name: "Pitchbook",
        description: "Financial data and research platform for private and public markets",
        context: "Mentioned as a traditional data source that one might have 'gone to Pitchbook for some data' before asking AI instead.",
        website: "https://pitchbook.com"
      },
      {
        name: "Dune Analytics",
        description: "Blockchain analytics platform for on-chain data analysis",
        context: "Listed as source for multiple data visualizations including 'Total Tokens Launched On Chain' showing 120x growth.",
        website: "https://dune.com"
      }
    ]
  },
  {
    name: "Other Notable Companies",
    description: "Major technology players and infrastructure companies shaping the token economy",
    color: "bg-gray-500",
    companies: [
      {
        name: "Amazon",
        description: "E-commerce and cloud giant, exemplifying abundance strategy",
        context: "Referenced via Jeff Bezos as holding 'a masterclass in how to give customers cheaper, better and faster.' Amazon Nova Act shown as browser control agent.",
        website: "https://amazon.com"
      },
      {
        name: "Microsoft",
        description: "Tech giant processing 500T+ tokens monthly alongside Google",
        context: "Noted as processing over '500T tokens a month' together with Google. Microsoft Entra expanding into agent auth.",
        website: "https://microsoft.com"
      },
      {
        name: "Apple",
        description: "Consumer technology company whose Touch ID and Face ID habituated biometric authentication",
        context: "Touch ID and Face ID noted as having 'habituated us to the idea that you are the key' - enabling biometrics as authentication standard.",
        website: "https://apple.com"
      },
      {
        name: "TSMC",
        description: "World's largest semiconductor foundry manufacturing advanced chips",
        context: "Named alongside NVIDIA, ASML, SpaceX as showing 'owning rare physical capabilities with defensible IP can create extraordinary returns.'",
        website: "https://tsmc.com"
      },
      {
        name: "ASML",
        description: "Only manufacturer of extreme ultraviolet lithography machines for advanced chips",
        context: "Listed as example of 'extraordinary returns' from rare physical capabilities with defensible IP.",
        website: "https://asml.com"
      },
      {
        name: "SpaceX",
        description: "Space transportation company building rockets and satellite internet",
        context: "Named among companies teaching that 'owning rare physical capabilities with defensible IP can create extraordinary returns.'",
        website: "https://spacex.com"
      },
      {
        name: "Figma",
        description: "Collaborative design platform democratizing design tools",
        context: "Cited alongside Airtable as 'low-code tools' that 'have given us a glimpse of how much faster organizations can move when you unblock non-technical builders.'",
        website: "https://figma.com"
      },
      {
        name: "Airtable",
        description: "Spreadsheet-database hybrid enabling no-code applications",
        context: "Listed as a low-code tool demonstrating organizational speed improvements, with coding agents doing 'that on steroids.'",
        website: "https://airtable.com"
      },
      {
        name: "n8n",
        description: "Open-source workflow automation platform",
        context: "Named as platform where 'empowered people inside of companies' are 'building an agent with n8n or Make.com to handle some nagging recurring task.'",
        website: "https://n8n.io"
      },
      {
        name: "Make.com",
        description: "Visual automation platform connecting apps and workflows",
        context: "Listed alongside n8n as tools people are using to build agents for automation.",
        website: "https://make.com"
      },
      {
        name: "Sesame AI",
        description: "Voice AI company creating realistic conversational voices",
        context: "Cited as evidence machines mirror humans: 'Sesame AI voice agents are easily mistaken for the real thing.'",
        website: "https://sesame.com"
      },
      {
        name: "Qualtrics",
        description: "Experience management platform that surveyed 28K people on customer service",
        context: "Referenced for research showing 'U.S. businesses lose over $800B in sales from poor customer service.'",
        website: "https://qualtrics.com"
      },
      {
        name: "ForecastEx",
        description: "Election prediction market platform",
        context: "Featured in 2025 Presidential Election contracts traded chart alongside Polymarket and Kalshi.",
        website: "https://forecastex.com"
      },
      {
        name: "OneChronos",
        description: "Next-generation securities exchange using optimal matching",
        context: "Named as working 'to build regulated spot or derivatives markets' for compute alongside Compute Exchange.",
        website: "https://onechronos.com"
      },
      {
        name: "Compute Exchange",
        description: "Marketplace for trading compute resources",
        context: "Listed as team building 'regulated spot or derivatives markets' for compute demand.",
        website: "https://computeexchange.io"
      },
      {
        name: "Qognitive",
        description: "Quantum-inspired machine learning company making fundamental advances",
        context: "Named as a Ribbit portfolio company as 'a top-of-mind example' of teams 'outside of the large labs' making 'fundamental advancements in how machines learn.'",
        website: "https://qognitive.io",
        ribbitPortfolio: true
      }
    ]
  }
];

// Summary of the Ribbit Token Letter
export const summary = {
  title: "Ribbit Capital Token Letter - June 2025",
  subtitle: "The Token Revolution: How Tokens Will Transform Finance, AI, and Every Industry",
  keyThesis: "Over the next decade, how you create, transform, source, store, and distribute tokens will define nearly all companies on the planet. Every business is becoming a supplier to, builder of, or orchestrator of token factories.",
  overview: "A 41 page letter put out by Ribbit Capital presents a comprehensive framework for understanding how tokenization is reshaping every industry. The core insight is that 'tokens' - discrete units of encoded information - are becoming the fundamental building blocks of the digital economy. Whether it's AI processing language tokens, payment networks handling transaction tokens, or blockchains managing asset tokens, the ability to create, transform, and distribute tokens will determine business success in the coming decade.",
  tokenTypes: [
    {
      name: "Access Tokens",
      description: "Credentials and permissions that grant entry to systems, services, or resources. Examples include API keys, login credentials, and authorization tokens.",
      examples: "OAuth tokens, session tokens, API keys, biometric credentials"
    },
    {
      name: "Memory Tokens",
      description: "Personal context and history that AI systems use to understand and serve individuals better. These represent the ongoing record of interactions and preferences.",
      examples: "Chat history with AI assistants, browsing patterns, personal preferences stored by apps"
    },
    {
      name: "Expert Tokens",
      description: "Domain-specific knowledge encoded into systems. These represent specialized expertise that can be accessed and applied programmatically.",
      examples: "Medical diagnostic models, legal document analysis, financial modeling expertise"
    },
    {
      name: "Context Tokens",
      description: "Real-time preferences, intent signals, and situational awareness that enable personalized experiences and recommendations.",
      examples: "Location data, current activity, stated preferences, shopping intent"
    },
    {
      name: "Identity Tokens",
      description: "Personal information that establishes who someone is across digital and physical systems. The foundation for trust and personalization.",
      examples: "Government IDs, KYC data, biometric signatures, reputation scores"
    },
    {
      name: "Knowledge Tokens",
      description: "Company and organizational data that powers business operations, from internal processes to customer-facing intelligence.",
      examples: "Enterprise data lakes, proprietary algorithms, business process documentation"
    },
    {
      name: "Asset Tokens",
      description: "Digital representations of ownership rights, from cryptocurrencies to tokenized real-world assets like real estate or securities.",
      examples: "Stablecoins, NFTs, tokenized securities, loyalty points"
    }
  ],
  strongBeliefs: [
    {
      title: "Token factories will be the most valuable companies",
      detail: "Companies that can efficiently create, transform, and distribute tokens at scale will capture enormous value. This includes AI labs, payment processors, and data platforms."
    },
    {
      title: "Memory tokens are the new oil",
      detail: "The personal context accumulated by AI assistants represents unprecedented insight into human behavior, preferences, and needs. Companies with rich memory tokens will have sustainable competitive advantages."
    },
    {
      title: "Vertical Token Systems will replace horizontal SaaS",
      detail: "Industry-specific platforms that combine multiple token types (expert, knowledge, context) will become the operating systems of industries, displacing generic software."
    },
    {
      title: "Agents will be first-class economic actors",
      detail: "AI agents will need bank accounts, identity credentials, and legal standing. The infrastructure for agent commerce is a massive opportunity."
    },
    {
      title: "Stablecoins were just a prototype",
      detail: "The $250B stablecoin market demonstrates demand for programmable money. Machine-first dollars will enable autonomous economic activity at unprecedented scale."
    },
    {
      title: "Cost-cutting leads, but pie-expansion wins",
      detail: "While AI will initially be deployed to reduce costs, the biggest opportunities are in serving previously uneconomical markets: SMBs, creators, and underserved populations."
    },
    {
      title: "Trust becomes scarce in an AI-rich world",
      detail: "As AI-generated content proliferates, verified truth and trusted sources become premium commodities. Prediction markets and oracle networks will be critical infrastructure."
    },
    {
      title: "Personal finance will be democratized",
      detail: "Everyone will have access to world-class financial advice through AI agents that work 24/7, understand your complete financial picture, and have no conflicts of interest."
    },
    {
      title: "The tokenizer opportunity is massive",
      detail: "Early AI killer apps will be tools that convert latent data into structured tokens. Note-taking, document processing, and data ingestion tools are foundational."
    },
    {
      title: "Proprietary token suppliers will build moats",
      detail: "Companies with unique access to identity, context, or memory tokens will be difficult to displace. Data network effects will compound over time."
    }
  ],
  mainSections: [
    {
      title: "Understanding Tokenization",
      summary: "Tokens are making the world accessible and legible to machines.",
      content: "Tokens are making the world accessible and legible to machines - encoding who we are, what we own, what we do, and what we want. They underpin AI, payments, crypto, identity, and more. Ribbit categorizes tokens into: Access (credentials), Memory (personal context), Expert (domain knowledge), Context (preferences/intent), Identity (personal info), Knowledge (company data), and Asset tokens (ownership rights). The key insight is that these different token types are converging - AI systems need identity tokens to personalize, payment systems need context tokens to prevent fraud, and agent systems need all of them to operate autonomously."
    },
    {
      title: "Why Now?",
      summary: "Four forces are converging to accelerate the token revolution.",
      content: "The cost of running and building token factories is plummeting (1000x reduction in inference costs over 3 years). Raw inputs are exploding with unstructured data availability. Critical infrastructure is growing (blockchain transaction fees < $0.02). Entrepreneurial builders are emerging (2/3 of YC companies are AI-focused). The combination of cheaper compute, abundant data, mature infrastructure, and motivated talent creates a once-in-a-generation opportunity for new company formation around token-based business models."
    },
    {
      title: "Sourcing Tokens",
      summary: "The first wave of valuable companies will be 'tokenizers' - tools that capture latent data.",
      content: "Early AI killer apps will be 'tokenizers' - tools that capture latent data and turn it into context. Note-taking apps, document ingestion, and vertical-specific tools will create the foundation for more sophisticated token factories. Proprietary token suppliers (identity, context, memory tokens) will build the most valuable businesses. The letter specifically calls out the opportunity in 'boring' data capture - every doctor's note, legal document, and financial statement that gets digitized creates new token supply for AI systems to consume."
    },
    {
      title: "Building Agents",
      summary: "AI agents will transform from assistants to autonomous economic actors.",
      content: "Relationship agents will transform customer support from cost center to strategic asset. Vertical Token Systems will become the operating systems of industries, replacing SaaS and BPOs. Cost-cutting will lead but pie-expanding use cases (serving SMBs, creators, underserved populations) will be most valuable. The letter envisions agents that can handle complete workflows - from understanding customer intent to executing transactions to following up - without human intervention. This requires agents to have access to identity, payment, and context tokens."
    },
    {
      title: "Personal Finance Revolution",
      summary: "AI will democratize access to world-class financial advice.",
      content: "Everyone will have access to world-class financial advisors through agents that know you, never sleep, and don't want a Porsche. Digital financial advice will be 10x better - working on your finances every minute of the year, not quarterly check-ins. The letter describes a future where your AI financial advisor has complete context on your income, spending, goals, and risk tolerance, and can proactively optimize your finances across all accounts and time horizons. This represents a massive expansion of the addressable market for wealth management."
    },
    {
      title: "Autonomous Agents",
      summary: "Agents may thrive most with resources and freedom to act independently.",
      content: "Agents may thrive most with resources and freedom. Open systems like Virtuals.io show early examples of agents with wallets, social presence, and autonomous decision-making. Systems for agent governance, identity, and reputation will be critical infrastructure. The letter explores the philosophical and practical implications of agents that can own assets, enter contracts, and build reputations. This requires new primitives for agent identity, accountability, and coordination."
    },
    {
      title: "Asset Tokenization",
      summary: "Stablecoins proved the concept; programmable assets will transform finance.",
      content: "Stablecoins ($250B AUM, $2T+ monthly volume) were just a prototype. Machine-first dollars enable intelligent systems to move value globally in the blink of an eye. As more assets are tokenized, agents will utilize programmable assets for complex financial operations. The letter sees stablecoins as the first successful example of asset tokenization, proving that digital representations of value can achieve scale. The next wave will tokenize securities, real estate, commodities, and more - creating assets that agents can trade, collateralize, and compose programmatically."
    },
    {
      title: "Information Markets",
      summary: "In an AI-rich world, attention and verified truth become scarce resources.",
      content: "In an AI-rich world, attention and truth become scarce. Prediction markets, oracle networks, and tokenized content will create 'newspapers for machines' - trusted sources of information for agents to consume and act upon. The letter argues that as AI-generated content floods the internet, verified truth becomes a premium commodity. Prediction markets aggregate dispersed knowledge into probability estimates; oracle networks provide cryptographic guarantees of data provenance; and tokenized content aligns creator incentives with accuracy."
    }
  ],
  keyStats: [
    "Google processes 480T+ tokens monthly (~50x growth)",
    "42M+ tokens launched on-chain (120x growth)",
    "Visa has deployed 11.5B tokens globally (115x growth)",
    "Inference costs dropped 1000x in 3 years",
    "40K+ tokens launched on Solana daily",
    "ChatGPT has 800M weekly active users",
    "$250B+ stablecoin AUM",
    "Tether earned $13B profit ($86M per employee)",
    "2/3 of YC companies are AI-focused",
    "$700B+ annual tech spend in financial services"
  ],
  investmentFocus: [
    "Teams treating agents as first-class customers (MCP servers for payments/identity)",
    "Enterprise agent platforms in compliance, tax, and accounting verticals",
    "Financial services infrastructure for how agents will pay, earn, borrow, and own",
    "Reinventing CRM for an agent-first world",
    "Tools that tokenize latent data (note-taking, document processing)",
    "Vertical Token Systems that become industry operating systems",
    "Agent governance, identity, and reputation infrastructure",
    "Prediction markets and oracle networks for verified truth"
  ]
};

// Kenny's Framework - Distribution Control & Cap-Ex Opportunities
export const nicksFramework = {
  title: "Kenny's Framework: Distribution Control in the Age of AI",
  subtitle: "Insights from a conversation about PowerOutage.com and vertical domination",
  coreThesis: "Whoever controls the distribution of tokens (data, relationships, information) in a vertical will own that vertical. Build the tokenizer, become the operating system.",

  mentalModel: {
    title: "Common Sense + Determinism Architecture",
    description: "LLMs are 'common sense engines' while code is deterministic. Mixing these creates powerful automation that can run 24/7 for years.",
    layers: [
      { name: "Common Sense", tech: "Local LLMs (Qwen 80B)", function: "Pattern recognition, data enrichment, ambiguity handling" },
      { name: "Determinism", tech: "Traditional code", function: "Reliable execution, data pipelines, business logic" },
      { name: "Infrastructure", tech: "Mac Studios (128-512GB)", function: "Self-hosted compute at $4K-10K per unit, years of runtime" }
    ]
  },

  capExInsight: {
    title: "The Cap-Ex vs Op-Ex Arbitrage",
    description: "The most powerful tactical insight: understand how your customers make money and structure around it.",
    explanation: "Investor-owned utilities (IOUs) make profit by building their rate base (capital investments). Operating expenses are pass-through costs with no profit margin. By repackaging SaaS as on-premise infrastructure, you convert a cost center (Op-Ex) into a profit center (Cap-Ex) for the utility—and can bill 2-3x.",
    keyQuote: "You only learn insights like this by controlling distribution in an industry."
  },

  threeYearPlaybook: {
    title: "3-Year Distribution Capture Playbook",
    years: [
      { year: 1, action: "Build platform, give away distribution free", economics: "Invest in user/entity acquisition" },
      { year: 2, action: "Small SaaS or get major sponsor", economics: "Break even or slight profit" },
      { year: 3, action: "World has changed, you own the relationships", economics: "Monetize distribution, expand vertically" }
    ],
    example: "Get Sig Sauer to sponsor a firearms site, offer free listings to instructors, free class management—while capturing all the relationships and data."
  },

  criteria: {
    title: "What to Target",
    include: [
      "Already unaggregated industries",
      "Verticals big business won't touch",
      "Real-time data-sensitive industries",
      "Industries with cap-ex budget structures",
      "Obscure data aggregators (ship movements, etc.)"
    ],
    avoid: [
      "Heavily regulated (finance, healthcare) without resources",
      "Anything a big tech company cares about",
      "Static directories (live data has defensibility)",
      "Consumer-focused without institutional buyers"
    ]
  },

  keyQuotes: [
    "SEO style cheap distribution is going to be dead in 3-5 years. Get distribution while you can.",
    "Figure out how to control the relationships with the biggest wallets in the industry.",
    "Self hosted non frontier models will be the workhorses and steam engines of this era.",
    "Aggregate an entire industry. Build a platform. Get everyone on it. Control distribution."
  ]
};

export interface CapExOpportunity {
  title: string;
  industry: string;
  currentState: string;
  tokenPlay: string;
  capExAngle: string;
  distributionPath: string;
  whyBigBusinessWont: string;
  potentialSponsors: string[];
  synergies: string;
  difficulty: 'Low' | 'Medium' | 'High';
}

export const capExOpportunities: CapExOpportunity[] = [
  {
    title: "Auto Glass Installation & Calibration Network",
    industry: "Automotive Services",
    currentState: "Safelite dominates but fragmented independents exist. ADAS calibration is exploding due to sensor-heavy vehicles. Most shops lack calibration equipment ($15K-50K per unit).",
    tokenPlay: "Aggregate independent shops, standardize quoting, track ADAS calibration capabilities. Create the 'network of record' for insurance companies to route claims.",
    capExAngle: "Calibration equipment is capital-intensive. Offer equipment financing/leasing bundled with network membership. Insurance companies may fund equipment rollout to ensure calibration compliance and reduce liability.",
    distributionPath: "Partner with insurance carriers (they pay 70%+ of auto glass claims). Become the preferred network = control the relationship between insurers and shops.",
    whyBigBusinessWont: "Safelite is vertically integrated but can't scale calibration fast enough. Independents are too fragmented for insurers to manage directly.",
    potentialSponsors: ["State Farm", "Progressive", "Calibration equipment manufacturers (Autel, Hunter)"],
    synergies: "ADAS data feeds into autonomous vehicle development. Calibration quality data is valuable for OEMs and insurers.",
    difficulty: "Medium"
  },
  {
    title: "Generator & Backup Power Installation Network",
    industry: "Energy / Home Services",
    currentState: "Generac dominates hardware, installers are completely fragmented. No standardized quoting, wildly variable install quality.",
    tokenPlay: "Aggregate installer network, standardize quoting, track every installation. Know where every backup power system is = know grid resilience gaps.",
    capExAngle: "Municipalities and utilities can fund backup power programs as infrastructure investment (Cap-Ex). HOAs and commercial properties can capitalize generator systems.",
    distributionPath: "Direct synergy with PowerOutage—outages drive generator demand. Cross-sell to utility relationships.",
    whyBigBusinessWont: "Generac sells hardware, doesn't want to compete with installers. Installers are too small to aggregate themselves.",
    potentialSponsors: ["Generac", "Kohler", "Briggs & Stratton", "Utility companies"],
    synergies: "Combined with outage data = predictive demand modeling. Utility partnerships for grid resilience programs.",
    difficulty: "Low"
  },
  {
    title: "Cell Tower & Small Cell Deployment Tracking",
    industry: "Telecommunications Infrastructure",
    currentState: "Carriers have internal data, no public aggregation. Municipalities struggle with permit tracking. Investors flying blind on carrier capex.",
    tokenPlay: "Track every deployment, permit, and carrier buildout in real-time. Aggregate permit data from thousands of municipalities.",
    capExAngle: "Tower companies (American Tower, Crown Castle, SBA) and infrastructure funds make pure cap-ex investments. Data about deployment pipelines is worth millions for investment decisions.",
    distributionPath: "Start with permit data (public records), layer in carrier intelligence. Sell to investors, real estate developers, municipalities.",
    whyBigBusinessWont: "Carriers won't share competitive data. No one wants to do the grunt work of aggregating municipal permits.",
    potentialSponsors: ["Tower REITs", "Infrastructure PE funds", "Equipment vendors (Ericsson, Nokia)"],
    synergies: "Coverage data valuable for real estate (dead zones affect property values), fleet management, IoT deployments.",
    difficulty: "High"
  },
  {
    title: "EV Charging Infrastructure Network",
    industry: "Energy / Transportation",
    currentState: "ChargePoint, EVgo, Electrify America exist but coverage is spotty. Reliability is terrible (30%+ of chargers broken at any time). No aggregated reliability data.",
    tokenPlay: "Aggregate real-time charger status, reliability scores, and wait times. Become the 'TripAdvisor for EV charging' that drivers actually trust.",
    capExAngle: "Charging infrastructure is pure cap-ex for utilities, retail locations, and municipalities. Reliability data influences where billions in federal infrastructure money flows.",
    distributionPath: "Partner with EV manufacturers for in-dash integration. Utilities need this data for grid planning.",
    whyBigBusinessWont: "Charger networks won't share reliability data that makes them look bad. Automakers focused on hardware not software.",
    potentialSponsors: ["Utilities", "DOE/state energy offices", "EV manufacturers", "Retail chains (want to attract EV drivers)"],
    synergies: "Grid load data valuable for utilities. Location intelligence valuable for retail and real estate.",
    difficulty: "Medium"
  },
  {
    title: "Private Well & Septic System Registry",
    industry: "Environmental / Rural Infrastructure",
    currentState: "43M Americans on private wells, 25% of US homes on septic. Zero centralized data. Counties barely track permits.",
    tokenPlay: "Aggregate testing data, system locations, maintenance history. Create the 'Carfax for rural property infrastructure.'",
    capExAngle: "Rural utilities and municipalities can fund testing programs as infrastructure (Cap-Ex). EPA grants available for water quality monitoring.",
    distributionPath: "Partner with well drillers, septic pumpers, and rural real estate agents. Mandatory for property transactions in many states.",
    whyBigBusinessWont: "Too fragmented, no sexy tech angle, literally involves tracking sewage.",
    potentialSponsors: ["EPA", "State environmental agencies", "Rural housing lenders", "Title insurance companies"],
    synergies: "Environmental data valuable for climate/insurance modeling. Real estate transaction data = lead gen for services.",
    difficulty: "Medium"
  },
  {
    title: "Commercial Kitchen Equipment Network",
    industry: "Food Service / Restaurant",
    currentState: "Walk-in coolers, fryers, hoods all serviced by fragmented local techs. No standardized maintenance tracking. Equipment failure = restaurant closure.",
    tokenPlay: "Aggregate service providers, track equipment lifecycles, enable predictive maintenance. IoT sensors on critical equipment.",
    capExAngle: "Restaurant equipment is typically financed or leased (Cap-Ex treatment). Equipment finance companies need maintenance data for residual value modeling.",
    distributionPath: "Partner with restaurant POS systems (Toast, Square) or food distributors (Sysco, US Foods) who touch every restaurant.",
    whyBigBusinessWont: "Equipment manufacturers sell and forget. Too fragmented for tech companies to care.",
    potentialSponsors: ["Equipment manufacturers (Hobart, True)", "Restaurant finance companies", "Food distributors"],
    synergies: "Health department compliance data. Energy efficiency programs. Insurance (equipment failure claims).",
    difficulty: "Medium"
  },
  {
    title: "Municipal Fleet Electrification Tracking",
    industry: "Government / Transportation",
    currentState: "Every city, county, school district buying EVs with no coordination. Charging infrastructure decisions made in silos. Federal money flooding in.",
    tokenPlay: "Track every municipal EV purchase, charging installation, and grant application. Create the intelligence layer for the $7.5B federal EV infrastructure program.",
    capExAngle: "100% Cap-Ex play. Municipal vehicles are capital assets. Federal grants specifically fund infrastructure investment.",
    distributionPath: "Partner with municipal associations (NLC, ICMA). Grant consultants need this data. Equipment vendors need market intelligence.",
    whyBigBusinessWont: "Government sales cycles are painful. Data is scattered across thousands of municipalities.",
    potentialSponsors: ["DOE", "Bus/truck OEMs (Proterra, Lightning eMotors)", "Charging networks", "Grant management platforms"],
    synergies: "Grid planning data. Fleet management software upsell. Maintenance and parts distribution.",
    difficulty: "High"
  },
  {
    title: "Agricultural Equipment Connectivity Platform",
    industry: "Agriculture",
    currentState: "John Deere, CNH, AGCO have proprietary telematics. Farmers locked into ecosystems. Right-to-repair movement gaining steam.",
    tokenPlay: "Open telematics aggregator that works across manufacturers. Farmer-controlled data with selective sharing to insurers, lenders, agronomists.",
    capExAngle: "Farm equipment is 100% Cap-Ex, often financed. Lenders need equipment utilization data for underwriting. Crop insurance needs operational data.",
    distributionPath: "Partner with ag lenders, crop insurance providers, or equipment dealers frustrated with OEM lock-in.",
    whyBigBusinessWont: "OEMs actively fighting against interoperability. Data is their moat.",
    potentialSponsors: ["Ag lenders (Rabo AgriFinance)", "Crop insurers", "Independent equipment dealers", "Farmer cooperatives"],
    synergies: "Precision agriculture data. Carbon credit verification. Supply chain visibility for food companies.",
    difficulty: "High"
  },
  {
    title: "Storm Chaser & Severe Weather Response Network",
    industry: "Weather / Emergency Services",
    currentState: "Fragmented individuals with trucks and cameras. TV stations pay for footage ad-hoc. Emergency managers have no visibility.",
    tokenPlay: "Aggregate storm chasers, provide real-time positioning, verification, and routing. Credentialed network with insurance and liability coverage.",
    capExAngle: "Emergency management vehicles and equipment are Cap-Ex. TV stations capitalize weather technology. Insurance companies fund loss mitigation infrastructure.",
    distributionPath: "Partner with TV networks (guaranteed footage), insurance carriers (early damage assessment), and emergency management agencies.",
    whyBigBusinessWont: "Too fragmented, liability concerns, seasonal revenue.",
    potentialSponsors: ["Insurance carriers (early claims data)", "TV networks", "Emergency management agencies"],
    synergies: "Direct synergy with PowerOutage—severe weather causes outages. Damage assessment data valuable for claims processing.",
    difficulty: "Low"
  },
  {
    title: "Fire Sprinkler & Suppression System Registry",
    industry: "Fire Safety / Commercial Real Estate",
    currentState: "Required in most commercial buildings, inspected annually, zero aggregation. Inspectors are fragmented local contractors.",
    tokenPlay: "Aggregate inspection data, system specifications, contractor performance. The 'building safety score' that insurers and owners need.",
    capExAngle: "Fire suppression is Cap-Ex for buildings. Insurance premiums tied to system quality. Upgrade financing is a lending opportunity.",
    distributionPath: "Partner with commercial insurance carriers who need inspection data. Property management software integration.",
    whyBigBusinessWont: "Boring, fragmented inspectors, no tech glamour.",
    potentialSponsors: ["Commercial property insurers", "Fire protection equipment manufacturers", "Property management platforms"],
    synergies: "Building safety data aggregation. IoT monitoring upsell. Insurance underwriting automation.",
    difficulty: "Medium"
  },
  {
    title: "Elevator & Vertical Transport Maintenance Network",
    industry: "Commercial Real Estate / Infrastructure",
    currentState: "4 major OEMs (Otis, Schindler, KONE, TK) control 80% of maintenance contracts. Independent maintainers exist but fragmented. No transparency on pricing or performance.",
    tokenPlay: "Aggregate independent elevator techs, standardize service contracts, track uptime/performance. Create price transparency that breaks OEM lock-in.",
    capExAngle: "Elevators are pure Cap-Ex with 25-40 year lifecycles. Modernization projects ($100K-500K per unit) are capital investments. Building owners capitalize maintenance contracts.",
    distributionPath: "Partner with commercial real estate owners/managers who hate OEM pricing. Property management software integration.",
    whyBigBusinessWont: "OEMs actively protect service revenue (80% margins). Too litigious for startups to challenge directly.",
    potentialSponsors: ["Large REITs", "Property management platforms (Yardi, MRI)", "Independent parts suppliers"],
    synergies: "Building systems data. Predictive maintenance across all building infrastructure. Insurance risk modeling.",
    difficulty: "High"
  },
  {
    title: "Solar & Battery Installation Network",
    industry: "Energy / Home Services",
    currentState: "Installers fragmented (thousands of local players). Sunrun/Tesla dominate financing but use subcontractors. No standardized quality tracking.",
    tokenPlay: "Aggregate installer network with quality scores, standardize system design/quoting, track performance data. Create the 'network of record' for utilities and financiers.",
    capExAngle: "Solar is 100% Cap-Ex. Federal ITC credits (30%) flow to capital investors. Utilities fund programs as grid infrastructure. Battery storage increasingly part of grid reliability.",
    distributionPath: "Partner with solar lenders (Mosaic, Sunlight) who need installer quality data. Utilities running low-income solar programs need installer networks.",
    whyBigBusinessWont: "Sunrun/Tesla focused on vertical integration, not aggregation. Too much installer fragmentation for fintech companies to manage.",
    potentialSponsors: ["Solar lenders", "Utilities", "Battery manufacturers (Tesla, Enphase)", "Homebuilders"],
    synergies: "Grid reliability data (with PowerOutage). Energy storage for outage resilience. EV charging integration.",
    difficulty: "Medium"
  },
  {
    title: "Medical Equipment Service & Calibration Network",
    industry: "Healthcare / Medical Devices",
    currentState: "OEMs (GE, Siemens, Philips) control service on imaging equipment. Independent service organizations (ISOs) exist but fragmented. Right-to-repair legislation gaining traction.",
    tokenPlay: "Aggregate ISOs, track equipment performance, standardize calibration protocols. Create the intelligence layer that breaks OEM service monopolies.",
    capExAngle: "Imaging equipment ($500K-$3M per unit) is pure Cap-Ex for health systems. Service contracts capitalized over equipment life. Third-party service can save 30-50% vs OEM.",
    distributionPath: "Partner with health system CFOs who want service cost reduction. Equipment finance companies need maintenance data.",
    whyBigBusinessWont: "OEMs extremely litigious on service access. FDA compliance complexity scares off tech companies.",
    potentialSponsors: ["Large health systems", "Medical equipment finance companies", "ISO trade associations"],
    synergies: "Healthcare facility management data. Compliance tracking. Equipment lifecycle intelligence for capital planning.",
    difficulty: "High"
  },
  {
    title: "Commercial HVAC & Building Controls Network",
    industry: "Commercial Real Estate / Energy",
    currentState: "Johnson Controls, Trane, Carrier dominate but installers/servicers are fragmented. Building automation systems (BAS) are proprietary nightmares. No interoperability.",
    tokenPlay: "Aggregate HVAC contractors, standardize BAS data extraction, create building energy intelligence. Enable third-party optimization without OEM lock-in.",
    capExAngle: "Commercial HVAC is Cap-Ex ($50K-500K per rooftop unit). Building controls are capitalized assets. Energy efficiency upgrades qualify for utility incentives and cap-ex treatment.",
    distributionPath: "Partner with utilities offering C&I energy efficiency programs. Building owners want BAS data without OEM dependence.",
    whyBigBusinessWont: "OEMs protect BAS data as competitive moat. Too fragmented and building-specific for platform companies.",
    potentialSponsors: ["Utilities (efficiency programs)", "Commercial property insurers", "ESG/sustainability software vendors"],
    synergies: "Grid demand response integration. Carbon tracking for ESG compliance. Building safety systems integration.",
    difficulty: "High"
  },
  {
    title: "Fleet Telematics & Maintenance Network",
    industry: "Transportation / Logistics",
    currentState: "Samsara, Geotab, Verizon Connect provide telematics but don't own maintenance. Maintenance fragmented across independent shops. No integrated fleet lifecycle view.",
    tokenPlay: "Aggregate independent truck/fleet maintenance shops, integrate with telematics data, enable predictive maintenance. Create the 'TrueValue for commercial fleets.'",
    capExAngle: "Commercial vehicles are Cap-Ex assets depreciated over 5-7 years. Fleet maintenance can be structured as capital maintenance. Telematics hardware is cap-ex.",
    distributionPath: "Partner with fleet finance companies (Element, ARI) who need maintenance cost data. Telematics companies want maintenance integration.",
    whyBigBusinessWont: "Telematics companies focused on software margins, not shop networks. Dealers protect service revenue.",
    potentialSponsors: ["Fleet management companies", "Commercial auto insurers", "Truck OEMs (for warranty data)"],
    synergies: "Insurance telematics integration. Driver safety programs. Parts supply chain optimization.",
    difficulty: "Medium"
  },
  {
    title: "Industrial Automation & Robotics Service Network",
    industry: "Manufacturing / Industrial",
    currentState: "Fanuc, ABB, KUKA robots require specialized service. Most manufacturers dependent on OEM or single integrators. Downtime costs $10K-100K+ per hour.",
    tokenPlay: "Aggregate independent automation techs, create remote diagnostics network, standardize service contracts. Enable multi-vendor support without OEM dependence.",
    capExAngle: "Robots and automation are 100% Cap-Ex ($50K-500K per unit). Service contracts capitalized. Spare parts inventory is working capital that could be shared.",
    distributionPath: "Partner with manufacturers who want OEM alternatives. Equipment finance companies need utilization data.",
    whyBigBusinessWont: "OEMs protect service revenue aggressively. Requires deep technical expertise that platform companies lack.",
    potentialSponsors: ["Manufacturing trade associations", "Equipment finance companies", "System integrators wanting to scale"],
    synergies: "Predictive maintenance across all plant equipment. Spare parts marketplace. Training/certification platform.",
    difficulty: "High"
  },
  {
    title: "Data Center Infrastructure Monitoring Network",
    industry: "Technology / Infrastructure",
    currentState: "Hyperscalers build internal tools. Colocation providers have fragmented monitoring. Edge data centers exploding with zero standardization.",
    tokenPlay: "Aggregate edge/colo facility data (power, cooling, connectivity), create reliability scoring, enable capacity marketplace. PowerOutage for data centers.",
    capExAngle: "Data centers are pure Cap-Ex infrastructure. Edge facilities ($1-10M each) being deployed by thousands of companies. Reliability data affects financing terms.",
    distributionPath: "Partner with data center REITs, edge infrastructure developers. Enterprises need visibility into colo/edge reliability.",
    whyBigBusinessWont: "Hyperscalers won't share data. Colo providers compete on opaque reliability claims.",
    potentialSponsors: ["Data center REITs (Digital Realty, Equinix)", "Edge infrastructure investors", "Telecom carriers building edge"],
    synergies: "Direct synergy with power outage data. Network connectivity monitoring. AI inference infrastructure intelligence.",
    difficulty: "Medium"
  },
  {
    title: "Water Utility & Pipe Infrastructure Network",
    industry: "Utilities / Infrastructure",
    currentState: "3,000+ water utilities in US with aging infrastructure. No aggregated pipe condition data. Leak detection fragmented. Lead pipe replacement mandated but untracked.",
    tokenPlay: "Aggregate leak detection, pipe condition assessments, and replacement tracking. Create the PowerOutage equivalent for water infrastructure.",
    capExAngle: "Water infrastructure is 100% Cap-Ex for utilities. $625B infrastructure bill includes water funding. Lead pipe replacement ($2-10K per service line) is capital investment.",
    distributionPath: "Partner with water utilities needing infrastructure intelligence. EPA and state regulators need compliance tracking.",
    whyBigBusinessWont: "Water utilities fragmented and slow-moving. No sexy tech angle. Local politics complicate expansion.",
    potentialSponsors: ["EPA", "State drinking water agencies", "Pipe manufacturers", "Infrastructure PE funds"],
    synergies: "Combined with power outage data = complete utility infrastructure view. Real estate due diligence. Insurance risk modeling.",
    difficulty: "Medium"
  },
  {
    title: "Parking Structure & Garage Maintenance Network",
    industry: "Commercial Real Estate / Infrastructure",
    currentState: "Parking structures require specialized maintenance (concrete, waterproofing, lighting, gates). Zero aggregation of contractors or condition data.",
    tokenPlay: "Aggregate specialized parking contractors, track structure conditions, enable capital planning. Create the inspection/maintenance record for parking assets.",
    capExAngle: "Parking structures are Cap-Ex assets ($20K-50K per space to build). Major repairs ($1-5M) are capital investments. REITs capitalize maintenance.",
    distributionPath: "Partner with parking operators (LAZ, SP+) and REITs. Municipalities own thousands of structures with deferred maintenance.",
    whyBigBusinessWont: "Too boring. Contractors hyper-local. No one thinks about parking infrastructure until it fails.",
    potentialSponsors: ["Parking operators", "Municipal bond insurers", "Commercial REITs"],
    synergies: "EV charging infrastructure integration. Real estate due diligence. ADA compliance tracking.",
    difficulty: "Low"
  }
];

// Top 20 Opportunities based on page 38 criteria
export const opportunities = [
  {
    title: "Agent Payment Identity Layer",
    category: "Agent Stack Infrastructure",
    criteria: "Teams treating agents as first-class customer (MCP server for payments/identity)",
    description: "A standard Model Context Protocol (MCP) server that provides agents with secure payment credentials and identity verification capabilities. Enables any agent to transact, authenticate, and prove identity across platforms.",
    gap: "Currently agents lack standardized ways to handle payments and identity verification. Each platform implements custom solutions."
  },
  {
    title: "Agentic Tax & Compliance Platform",
    category: "Vertical Token Systems",
    criteria: "Enterprise agent platforms in compliance, tax, accounting",
    description: "An AI-native tax preparation and compliance platform that tokenizes tax code expertise, automatically interprets regulations, and files returns with human-level accuracy at scale.",
    gap: "Current tax software is rule-based. No platform combines deep tax expertise tokens with agentic action and continuous learning from CPA feedback."
  },
  {
    title: "Agent Treasury & Cash Management",
    category: "Financial Services for Agents",
    criteria: "Financial services for how agents will pay, earn, borrow, and own assets",
    description: "A treasury management system designed for agents to optimize yield, manage liquidity, execute FX, and access credit facilities autonomously based on programmatic rules.",
    gap: "Agents currently can't manage corporate treasuries. No infrastructure for agents to access credit, optimize yield, or manage working capital."
  },
  {
    title: "Agent-First CRM Platform",
    category: "Customer Relationship Management",
    criteria: "Reinventing customer relationship management for agent-first world",
    description: "A CRM that treats agent-to-agent interactions as first-class citizens, tracks agent reputation, manages agent relationships, and optimizes for AX (Agent Experience) alongside UX.",
    gap: "CRMs are human-centric. No platform manages relationships where both customer and company sides may be agents."
  },
  {
    title: "Portable Memory Token Wallet",
    category: "Identity & Memory",
    criteria: "Identity solutions giving control/ownership of memory tokens",
    description: "A personal data vault that stores, encrypts, and selectively shares your memory tokens (preferences, history, context) across any AI platform with granular permissions.",
    gap: "Memory is locked in individual platforms (ChatGPT, Claude). Users can't port their AI training/context or control who accesses it."
  },
  {
    title: "Holistic AI Financial Advisor",
    category: "Personal Finance",
    criteria: "Universal personal finance assistant",
    description: "An agent that unifies all financial accounts, provides personalized advice, automatically optimizes savings/investments/insurance/taxes, and acts on your behalf 24/7.",
    gap: "Personal finance apps are dashboards, not advisors. No platform combines deep personalization with autonomous financial actions."
  },
  {
    title: "SMB Business-in-a-Box Agent Suite",
    category: "SMB Superpowers",
    criteria: "Superpowers for creators and small business owners",
    description: "An integrated suite of agents (sales, marketing, support, accounting, legal) that gives any small business owner access to enterprise-level capabilities at fraction of cost.",
    gap: "SMBs use fragmented tools or nothing. No unified agent suite that handles all business functions while learning from the owner."
  },
  {
    title: "Tokenized Private Asset Exchange",
    category: "Asset Tokenization",
    criteria: "Enabling growth of tokenized assets - issuers, processors, admins",
    description: "A regulated marketplace for tokenized private market assets (real estate, private equity, SMB equity) with programmatic compliance, automated administration, and agent-accessible trading.",
    gap: "Private market assets lack liquidity and accessibility. Current tokenization efforts lack regulatory clarity and institutional infrastructure."
  },
  {
    title: "Expert Services Marketplace for Everyone",
    category: "Democratizing Expert Services",
    criteria: "Helping everyone access services only available to the 1%",
    description: "A platform matching users with AI agents trained by world-class experts (tax strategists, estate planners, interior designers) at 1/100th the cost of human equivalents.",
    gap: "Expert services remain expensive and inaccessible. AI can democratize but no platform aggregates expert-trained agents with quality guarantees."
  },
  {
    title: "Prediction Market Protocol for Everything",
    category: "Information Markets",
    criteria: "Newspapers for machines - prediction/content markets",
    description: "A generalized prediction market infrastructure allowing creation of markets on any verifiable outcome, with agent-native APIs and oracle integration for real-time truth signals.",
    gap: "Prediction markets are siloed (Polymarket, Kalshi). No unified protocol for creating arbitrary prediction markets with standardized resolution."
  },
  {
    title: "Agent Compute Futures Exchange",
    category: "Autonomous Agent Resources",
    criteria: "Resources for autonomous agents - compute/data markets",
    description: "A regulated derivatives market for AI compute, allowing agents (and humans) to hedge compute costs, speculate on capacity, and ensure inference availability.",
    gap: "Compute pricing is opaque and volatile. Hyperscalers are 'naked long' hundreds of billions in inference with no hedging instruments."
  },
  {
    title: "Agent Reputation & Governance System",
    category: "Autonomous Agent Resources",
    criteria: "Governance and reputation systems for agents",
    description: "A decentralized registry of agent identities with cryptographic provenance, performance history, reputation scores, and programmable permission scopes.",
    gap: "No standard for agent reputation or accountability. Can't verify agent capabilities, history, or trustworthiness across platforms."
  },
  {
    title: "AI-Native Insurance Platform",
    category: "Vertical Token Systems",
    criteria: "Enterprise agent platforms in insurance",
    description: "An insurance platform where agents handle underwriting, claims, and customer service end-to-end, with expert tokens trained on actuarial knowledge and claims history.",
    gap: "Insurance remains highly manual. Agent adoption limited to chatbots. No platform automates the full insurance lifecycle with true AI expertise."
  },
  {
    title: "Real Estate Transaction Agent Suite",
    category: "Vertical Token Systems",
    criteria: "Enterprise agent platforms in real estate",
    description: "Agents that handle the entire real estate transaction from search to close - title research, document preparation, escrow management, and closing coordination.",
    gap: "Real estate transactions involve 20+ parties and months of coordination. No agent suite handles the full transaction lifecycle."
  },
  {
    title: "Healthcare Administrative Agent",
    category: "Vertical Token Systems",
    criteria: "Enterprise agent platforms in healthcare",
    description: "An agent platform that handles healthcare administrative burden - prior authorizations, claims, appeals, patient communication - learning from expert billers and administrators.",
    gap: "Healthcare admin consumes 30%+ of costs. Current solutions are point products. No comprehensive agent handling full revenue cycle."
  },
  {
    title: "Creator IP Tokenization & Licensing Platform",
    category: "Asset Tokenization",
    criteria: "Enabling growth of tokenized assets",
    description: "A platform for creators to tokenize their work with embedded licensing terms, enabling agent-to-agent negotiation for usage rights and programmatic royalty distribution.",
    gap: "Creator IP is poorly protected and monetized. No infrastructure for machine-readable licensing or automated royalty collection."
  },
  {
    title: "Legal Document Automation Platform",
    category: "Vertical Token Systems",
    criteria: "Enterprise agent platforms in legal",
    description: "Beyond document review - agents that draft, negotiate, and execute legal agreements using expert tokens from practicing attorneys, with built-in compliance verification.",
    gap: "Current legal AI focuses on review/search. No platform handles full contract lifecycle from drafting through negotiation to execution."
  },
  {
    title: "Agent-Native Advertising Exchange",
    category: "Information Markets",
    criteria: "Agent attention markets",
    description: "An advertising platform where brands bid for agent attention, with transparent pricing, performance verification, and anti-manipulation measures for the AEO (Answer Engine Optimization) era.",
    gap: "AI platforms lack clear advertising models. No transparent marketplace for brands to reach users through AI agents."
  },
  {
    title: "Physical World Token Factory - Robotics Fleet OS",
    category: "Real-World Token Factories",
    criteria: "Real-world token factories with strong IP",
    description: "Operating system for commercial robot fleets that handles identity, governance, learning, and coordination across heterogeneous robots with verifiable capability credentials.",
    gap: "Robots lack standardized identity and capability verification. No OS handles multi-vendor fleet coordination with cryptographic trust."
  },
  {
    title: "Cross-Border Agent Payment Rails",
    category: "Financial Services for Agents",
    criteria: "Financial services for agents",
    description: "A payment network optimized for agent-to-agent cross-border transactions, combining stablecoin settlement, FX optimization, and compliance in a single programmable layer.",
    gap: "Cross-border payments remain slow and expensive. No infrastructure optimized for high-frequency, low-value agent transactions globally."
  }
];
