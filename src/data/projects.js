export const projects = [
    {
        id: 1,
        title: "Trademark Intelligence Platform",
        category: "IP Automation",
        company: "Cosmovici Intellectual Property",
        period: "June 2025 - Present",
        description: "Multi-phase intelligent lead generation system for IP law firm, from manual research to fully automated data pipeline processing 1M+ companies.",
        website: "https://cosmovici-ip.com/",
        tech: ["Python 3.x", "Selenium WebDriver", "MongoDB", "PyMongo", "Requests", "BeautifulSoup4", "lxml", "Pandas", "NumPy", "Apollo.io API", "fake-useragent", "tenacity", "phonenumbers", "email-validator", "python-dotenv", "Logging"],
        results: [
            "Processed 1M+ companies from INPI France and Swissreg (2024/2025)",
            "72% success rate: 3,400 qualified leads from 4,700 applications (Swissreg)",
            "Automated end-to-end lead generation pipeline",
            "Local execution with secure CSV delivery via email"
        ],
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600",
        details: {
            problem: "IP law firm needed to identify companies with trademark gaps in Switzerland and France markets. Manual research was limiting scalability and market coverage across 1M+ potential clients from combined databases containing 6M+ total entries.",
            solution: "Developed a three-phase approach:\n\nPhase 1 - Deep business logic learning to understand IP market gaps, lead qualification criteria, and conversion workflows.\n\nPhase 2 - Built sophisticated web scraping and data enrichment pipeline using dual Selenium strategy: headless Chrome for initial mass scraping of Swissreg and INPI France databases, then switched to headed Selenium with custom headers and cookie management for targeted site-specific scraping to improve results. Implemented PyMongo for MongoDB operations, fake-useragent for user-agent rotation, and location-specific proxy rotation. Automated Google searches with intelligent filtering using BeautifulSoup4/lxml for HTML parsing. Applied tenacity for retry logic, phonenumbers and email-validator for data validation, and Pandas/NumPy for data cleaning and transformation. Integrated Apollo.io REST API with rate limiting and error handling. Used python-dotenv for secure credential management.\n\nPhase 3 - Analysis and export.\nApplied client-specific qualification metrics to filter 1M+ scraped businesses down to 4,700 high-value opportunities that matched trademark gap criteria. Successfully enriched 3,400 qualified companies (72% conversion rate) with validated management contacts including direct emails and phone numbers. Generated structured CSV exports with actionable lead data, delivered securely via email. All processing executed locally with comprehensive logging to ensure data integrity and meet client security requirements.",
            challenges: "Handling 4M+ records efficiently, implementing anti-detection measures (header rotation, proxy management, user-agent spoofing), filtering noise from HTML parsing, avoiding IP blocks during automated Google searches, integrating Apollo.io API rate limits, and ensuring data quality while maintaining security through local-only processing.",
            architecture: "Python scraping engine → Swissreg/INPI France data extraction → MongoDB storage → Data cleaning (Pandas) → Automated Google search queries (product/company/owner combinations) → HTML parsing with noise filters → Apollo.io API enrichment for leadership contacts → CSV export → Email delivery"
        }
    },
    {
        id: 2,
        title: "B2B Lead Generation Engine",
        category: "Sales Automation",
        company: "Inereto",
        period: "September 2023 - June 2025",
        description: "Intelligent lead generation system targeting EU-funded companies and consultancy partnerships through automated scraping of government databases.",
        website: "https://inereto.com/",
        tech: ["Python 3.x", "Selenium WebDriver", "MongoDB", "PyMongo", "Requests", "BeautifulSoup4", "lxml", "Pandas", "fake-useragent", "tenacity", "email-validator", "python-dotenv"],
        results: [
            "Scraped 2,000+ EU funding recipients and consultancy firms",
            "80%+ data validation success rate",
            "Dual-target pipeline: service clients + strategic partners"
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        details: {
            problem: "Startup needed scalable B2B lead generation to offer full-stack development services to companies receiving EU funds, plus establish partnerships with funding consultancies to provide CRM solutions that boost project scores.",
            solution: "Built automated scraping pipeline targeting Romanian EU funding transparency portals (MySMIS, fonduri-ue.ro, program-specific databases) combined with Google search automation.\n\nTarget 1 - Service Clients:\nIdentified non-tech companies that received EU funding and would need full-stack development services for their funded projects. Applied filters to exclude tech companies and focus on traditional businesses requiring digital transformation.\n\nTarget 2 - Strategic Partners:\nScraped EU funding consultancy firms and audit companies to establish partnerships. Strategy: when partner helps client access EU funds, we provide CRM services to increase project scoring and success rates.\n\nImplemented same tech stack as Cosmovici IP project: dual Selenium approach (headless for mass scraping, headed with custom headers for specific portals), PyMongo for data storage, BeautifulSoup4/lxml for parsing, tenacity for retry logic, and comprehensive validation. All processing local with secure delivery.",
            challenges: "Navigating multiple government portal structures, filtering non-tech companies from EU beneficiaries, validating consultancy firm credentials, avoiding duplicate entries across databases, and maintaining data freshness as new funding rounds are announced.",
            architecture: "Python scraping engine → MySMIS/fonduri-ue.ro/POR portals + Google automation → MongoDB storage → Industry classification filtering (non-tech) → Contact validation → Dual pipeline (clients/partners) → CRM integration"
        }
    },
    {
        id: 3,
        title: "Ultimate Arena Fighting Gym Website",
        category: "Full-Stack Development",
        company: "Inereto",
        period: "September 2023 - June 2025",
        description: "Modern gym website for world champion kickboxer featuring Next.js, Tailwind CSS, user analytics, and GDPR-compliant cookie management.",
        website: "https://www.ultimatearena.it/en",
        tech: ["Next.js", "React", "Tailwind CSS", "AOS (Animate On Scroll)", "PostHog Analytics", "JavaScript", "Responsive Design", "GDPR Compliance"],
        results: [
            "Launched professional website for world champion's fighting gym",
            "Implemented analytics with heatmaps and session recordings",
            "GDPR-compliant cookie consent and data tracking",
            "Mobile-first responsive design across all devices"
        ],
        image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=600",
        details: {
            problem: "World champion kickboxer and gym owner requested a professional web presence to showcase his elite fighting gym, world-class trainers, and attract new members. Needed modern design with user tracking to optimize conversions.",
            solution: "Built high-performance website using Next.js framework with React for component architecture and SEO optimization. Implemented Tailwind CSS for modern, utility-first styling with mobile-first responsive design. Integrated AOS (Animate On Scroll) library for smooth scroll animations and engaging user interactions. Deployed PostHog for comprehensive product analytics including heatmaps to track user clicks, session recordings to review user journeys, and event tracking for conversion optimization. Implemented GDPR-compliant cookie consent banner and data management per European regulations. Worked directly with gym owner to translate his champion mindset into premium web experience.",
            challenges: "Creating premium design that reflects elite gym atmosphere, implementing smooth animations without performance impact, ensuring GDPR compliance for Italian/EU audience, integrating analytics while respecting user privacy, and optimizing Next.js bundle for fast loading times.",
            architecture: "Next.js SSR/SSG → React components → Tailwind CSS styling → AOS animations → PostHog analytics (heatmaps/session replays/events) → GDPR cookie management"
        }
    },
    {
        id: 4,
        title: "AI Voice Calling Campaign Platform",
        category: "AI & Marketing Automation",
        company: "HappyBrush",
        period: "November 2024",
        description: "Enterprise AI calling campaign management system for automated consent collection from German dental practices using VAPI voice AI with real-time transcript analysis.",
        tech: ["FastAPI", "Python 3.x", "PostgreSQL", "SQLAlchemy", "Celery", "Redis", "VAPI API", "ElevenLabs", "Docker", "httpx", "Pandas", "Klaviyo API", "Prometheus", "Sentry", "Alembic", "phonenumbers", "Hetzner VPS"],
        results: [
            "Executed 8,300+ AI voice calls to German dental practices",
            "Real-time consent detection via AI transcript analysis",
            "10 concurrent calls with distributed concurrency control",
            "Automated Klaviyo CRM integration for lead segmentation"
        ],
        image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=600",
        details: {
            problem: "Dental products company needed GDPR-compliant system to conduct 8,000+ consent calls to German dental practices for marketing campaigns. Required AI-powered voice automation with real-time consent detection, voicemail handling, cost tracking, and CRM integration.",
            solution: "Built enterprise AI calling platform using FastAPI backend with VAPI voice AI integration for natural German-language conversations. Architected PostgreSQL database with SQLAlchemy ORM for campaigns, leads, and call results with proper indexing and unique constraints. Implemented distributed campaign orchestration using Celery workers and Redis for task queue management with batch processing (100 leads per batch) for memory efficiency.\n\nCreated sophisticated webhook processing system to capture VAPI call completions in real-time and extract consent status from AI transcript analysis using regex pattern matching for German consent phrases. Implemented distributed locking mechanism using Redis to prevent concurrent campaign execution and VAPIConcurrencyLimit utility to enforce 10 simultaneous call limit per VAPI account constraints.\n\nBuilt CSV upload/parsing system with async processing threshold for large datasets, phone number normalization and validation using phonenumbers library. Integrated ElevenLabs voice synthesis with configurable voice parameters (language, speed, pitch). Created Klaviyo API integration to automatically segment leads based on consent status (consent_given, consent_refused, voicemail) for downstream marketing automation.\n\nDeployed production system to Hetzner VPS using Docker Compose orchestration with PostgreSQL, Redis, FastAPI web server, and Celery workers. Implemented comprehensive monitoring with Prometheus metrics instrumentation and Sentry error tracking. Built analysis scripts to calculate campaign costs, success rates, and generate detailed CSV reports for business intelligence with rate limiting (10 calls/minute) and per-call cost tracking for budget management.",
            challenges: "Implementing GDPR-compliant consent detection from German AI transcripts, handling VAPI webhook reliability and idempotency, preventing race conditions in distributed campaign execution with Redis locks, managing VAPI concurrency limits, detecting voicemail vs human responses from transcript patterns, ensuring phone number normalization for international formats, processing 8,000+ CSV records asynchronously, tracking costs accurately across failed/successful calls, and maintaining high availability on VPS deployment.",
            architecture: "FastAPI REST API → PostgreSQL (campaigns/leads/call_results) → Celery task queue (Redis broker) → VAPI API (place calls) → ElevenLabs voice synthesis → AI transcript analysis → Webhook callbacks → Celery workers (process results) → Consent extraction (regex patterns) → Campaign metrics update → Klaviyo API (lead segmentation) → Prometheus/Sentry monitoring"
        }
    },
    {
        id: 5,
        title: "AI WhatsApp Link Manager",
        category: "AI & Automation",
        company: "Personal Project",
        period: "October 2024 - November 2024",
        description: "Intelligent link organization system using WhatsApp bot with Claude AI classification and n8n workflow automation to automatically categorize and save links to Notion database.",
        tech: ["Node.js", "whatsapp-web.js", "n8n", "Claude API", "Notion API", "Docker", "Docker Compose", "Express", "Puppeteer", "OpenRouter", "Nginx", "Let's Encrypt", "Hetzner VPS"],
        results: [
            "Sub 5 secunde procesare: WhatsApp → Claude AI → Notion",
            "9 categorii automate cu AI classification și tagging inteligent",
            "Descrieri generate în limba română de Claude AI",
            "Self-hosted pe Hetzner VPS cu Docker orchestration"
        ],
        image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=600",
        details: {
            problem: "Managing hundreds of shared links across WhatsApp conversations was chaotic. Needed automated system to capture, classify, and organize links from WhatsApp into structured Notion database without manual categorization effort.",
            solution: "Built end-to-end automation pipeline using WhatsApp bot connected to n8n workflow engine with Claude AI intelligence. Developed Node.js WhatsApp bot using whatsapp-web.js library with Puppeteer for browser automation and Express for health endpoints. Implemented URL extraction using regex patterns to detect links from incoming WhatsApp messages.\n\nCreated sophisticated n8n workflow orchestrating the entire pipeline: webhook trigger receives links from WhatsApp bot, HTTP request node fetches URL metadata (title, description), code node extracts HTML metadata and detects source type, Claude AI via OpenRouter API analyzes content and returns structured JSON classification with category (9 options: AI & Tech, Learning, YouTube, News, Dev Tools, Business, Design, Social Media, Other), subcategory tags, priority level (High/Medium/Low), Romanian language summary, and estimated reading time.\n\nIntegrated Notion API to create database entries with rich properties including title, URL, select fields for categories, multi-select for tags, priority indicators, status tracking, source metadata, and AI-generated descriptions. Deployed entire stack to Hetzner VPS using Docker Compose orchestration with whatsapp-bot container (Node.js + Puppeteer), n8n container for workflow engine, and Nginx reverse proxy for SSL termination with Let's Encrypt certificates.\n\nImplemented comprehensive error handling with retry logic in n8n workflows, health check endpoints for monitoring, and persistent Docker volumes for WhatsApp session authentication and n8n workflow data. Total infrastructure cost: €6-10/month running 24/7 with <5 second end-to-end latency from WhatsApp message to Notion entry creation.",
            challenges: "Maintaining stable WhatsApp Web connection through whatsapp-web.js with Puppeteer browser automation, handling session persistence across Docker container restarts, implementing robust URL extraction regex for various message formats, ensuring Claude AI returns valid structured JSON for parsing, managing Notion API rate limits and authentication, deploying Chromium dependencies in Docker alpine images, configuring n8n credential encryption and workflow persistence, setting up SSL/TLS with Let's Encrypt for secure webhooks, and optimizing Docker image sizes for VPS deployment constraints.",
            architecture: "WhatsApp message → whatsapp-web.js (Puppeteer) → URL extraction (regex) → POST to n8n webhook → HTTP metadata fetch → Claude AI classification (OpenRouter) → JSON parsing → Notion API (database create) → Confirmation to WhatsApp → Docker containers (whatsapp-bot + n8n) → Nginx reverse proxy (SSL) → Hetzner VPS hosting"
        }
    }
];
