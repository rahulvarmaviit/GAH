
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const services = [
    // 1. Cybersecurity & Risk Management
    {
        title: 'Cybersecurity & Risk Management',
        slug: 'cybersecurity-risk-management',
        description: 'Protect your digital assets with our advanced threat detection and prevention services.',
        link: '/services/cybersecurity-risk-management',
        image: PlaceHolderImages.find((img) => img.id === 'service-2'),
        heroAttributes: {
            title: 'Secure Today. Strengthen Tomorrow. Scale Confidently.',
            subtitle: 'We enable enterprises to build secure, resilient, and compliant digital operations that support innovation without introducing unnecessary risk.',
            tags: [
                'Security Strategy & Architecture',
                'Identity & Access Management',
                'Cloud & Application Security',
                'GRC & Compliance',
                'Threat Detection & Incident Response'
            ],
            cta: 'Request a Cybersecurity Posture Diagnostic →',
            ctaSecondary: 'View Our Engagement Approach',
            note: 'We bring security into the core of your digital transformation — not as an afterthought.',
            whoWeHelp: [
                'Expanding rapidly into digital products and cloud services',
                'Preparing for global markets or regulated industries',
                'Strengthening resilience after incidents or audit findings',
                'Lacking a formal cybersecurity function or strategy',
                'Modernising IT and integrating AI, APIs & new technologies'
            ],
            metrics: {
                riskExposure: 90,
                afterEngagement: 35
            }
        },
        realitySection: {
            title: 'Cyber threats now target your business continuity and trust.',
            subtitle: 'Modern threats are sophisticated and persistent. The real risk is not just data loss — it’s downtime, brand damage and loss of customer confidence.',
            points: [
                'Attackers exploit identities, cloud services, APIs and supply chains, not just networks.',
                'Security tools are often siloed, leaving gaps in visibility and response.',
                'Boards and regulators expect evidence of robust controls and resilience.'
            ]
        },
        valueProposition: {
            title: 'We turn cybersecurity into a strategic capability.',
            subtitle: 'We combine global best practices, automation, and continuous monitoring so security protects your business while enabling growth.',
            points: [
                'Security strategy aligned with your business model and risk appetite.',
                'Modern architecture across identity, cloud, applications and data.',
                'Defined playbooks and metrics so you can measure and improve security ROI.'
            ],
            note: 'We focus on measurable outcomes: reduced exposure, faster detection and response, simpler compliance, and stronger stakeholder trust.'
        },
        servicePillars: {
            title: 'How we build and run your security program.',
            subtitle: 'Our Cybersecurity & Risk Management practice spans strategy, identity, cloud, compliance and incident response.',
            pillars: [
                {
                    badge: '1 · Security Strategy & Architecture',
                    title: 'Security Strategy & Architecture',
                    description: 'Align security investments and controls with your business objectives and transformation roadmap.',
                    points: [
                        'Enterprise security architecture & maturity assessments',
                        'Zero Trust and DevSecOps roadmap',
                        'Prioritised, ROI-driven security program'
                    ]
                },
                {
                    badge: '2 · Identity & Access Management',
                    title: 'Identity & Access Management (IAM)',
                    description: 'Make identity the new perimeter with strong governance and control.',
                    points: [
                        'SSO, MFA and role-based access models',
                        'Privileged access management (PAM)',
                        'Identity lifecycle and recertification processes'
                    ]
                },
                {
                    badge: '3 · Cloud & Application Security',
                    title: 'Cloud & Application Security',
                    description: 'Secure workloads, APIs and applications across hybrid and multi-cloud platforms.',
                    points: [
                        'Secure cloud architecture and configuration hardening',
                        'Secure SDLC, code review and DevSecOps practices',
                        'API, microservices & container security'
                    ]
                },
                {
                    badge: '4 · Governance, Risk & Compliance',
                    title: 'Governance, Risk & Compliance (GRC)',
                    description: 'Embed governance so compliance is a by-product of how you operate.',
                    points: [
                        'Risk assessment, register and treatment plans',
                        'Policies aligned to ISO 27001, SOC 2, GDPR and local regulations',
                        'Third-party and supply chain cyber risk management'
                    ]
                },
                {
                    badge: '5 · Threat Detection & Incident Response',
                    title: 'Threat Monitoring & Incident Response',
                    description: 'Be prepared, not surprised, when an incident occurs.',
                    points: [
                        'Threat intelligence and SOC/SIEM advisory',
                        'Incident response playbooks and tabletop exercises',
                        'Continuous improvement from post-incident reviews'
                    ]
                },
                {
                    badge: '+ Tools & Expertise',
                    title: 'Tools & Partner Expertise',
                    description: 'We work with leading platforms while staying vendor neutral — selecting what fits your environment.',
                    points: [
                        'Microsoft, AWS & Azure security services',
                        'SIEM/SOC platforms and DevSecOps toolchains',
                        'Identity, access and governance suites'
                    ]
                }
            ]
        },
        useCases: {
            title: 'Where our cybersecurity practice creates impact quickly.',
            subtitle: 'We prioritise scenarios that address immediate risk and deliver visible outcomes for business and technology leaders.',
            cases: [
                {
                    tag: 'Secure digital products',
                    title: 'Securing new digital services',
                    description: 'Security by design for new customer portals, mobile apps and platforms so you can launch with confidence.'
                },
                {
                    tag: 'Cloud transformation',
                    title: 'Cloud adoption and modernization',
                    description: 'Cloud security posture management, guardrails and controls to protect workloads as you modernise.'
                },
                {
                    tag: 'Regulated industries',
                    title: 'Compliance for regulated environments',
                    description: 'Support for industries like BFSI, healthcare, manufacturing and others with strong control frameworks.'
                },
                {
                    tag: 'Workforce & partners',
                    title: 'Secure workforce and third-party access',
                    description: 'Identity, device and network security for employees, contractors and partners accessing critical systems.'
                },
                {
                    tag: 'Breach readiness',
                    title: 'Incident and ransomware readiness',
                    description: 'Playbooks, exercises and escalation paths so your teams know exactly what to do during an incident.'
                },
                {
                    tag: 'Executive visibility',
                    title: 'Cyber risk visibility for leadership',
                    description: 'Reporting and dashboards that communicate risk in business terms, enabling better decisions and investment.'
                }
            ]
        },
        businessOutcomes: {
            title: 'What you can expect from working with us.',
            subtitle: 'Cybersecurity should deliver tangible benefits, not just tick boxes. We define success with you upfront.',
            outcomes: [
                {
                    value: '40–60% reduction',
                    label: 'in cyber risk exposure',
                    description: 'Lower likelihood and impact of breaches, fewer critical vulnerabilities and improved control coverage.'
                },
                {
                    value: '2–3× faster',
                    label: 'detection & response',
                    description: 'Defined playbooks, integrated tooling and clear ownership drastically reduce time to detect and respond.'
                },
                {
                    value: '↑ Trust & assurance',
                    label: 'for customers, partners & regulators',
                    description: 'Stronger security posture, smoother audits and better evidence to support commercial and compliance discussions.'
                }
            ]
        },
        engagementApproach: {
            title: 'A structured, collaborative way of working.',
            subtitle: 'We combine proven frameworks with practical delivery, working as an extension of your team and enabling them along the way.',
            steps: [
                {
                    step: 1,
                    title: 'Assess & profile risk',
                    description: 'Understand your environment, critical assets, threats, existing controls and gaps in context of your business.'
                },
                {
                    step: 2,
                    title: 'Design & prioritise',
                    description: 'Define a target architecture, controls and initiatives that deliver maximum risk reduction for effort invested.'
                },
                {
                    step: 3,
                    title: 'Implement & integrate',
                    description: 'Deploy, tune and integrate security capabilities, automations and operating processes into day-to-day work.'
                },
                {
                    step: 4,
                    title: 'Measure & evolve',
                    description: 'Track metrics, test readiness and continuously adjust security posture as your business and threat landscape change.'
                }
            ]
        },
        whyChooseExtended: {
            title: 'A cybersecurity partner for long-term, secure growth.',
            subtitle: 'We bring deep cybersecurity expertise together with cloud, data, AI and application experience — so decisions are made with the full picture in mind.',
            cards: [
                {
                    title: 'Business-aligned security',
                    description: 'We link cyber initiatives directly to revenue, cost and risk outcomes so leaders see tangible value.'
                },
                {
                    title: 'Modern-first architecture',
                    description: 'Our designs are optimised for cloud, SaaS, APIs and digital products, not legacy perimeter models.'
                },
                {
                    title: 'Automation-led operations',
                    description: 'We use automation wherever possible to reduce manual effort, fatigue and response times.'
                },
                {
                    title: 'Vendor-neutral advice',
                    description: 'We are not tied to any single security vendor and select platforms based on your needs and context.'
                },
                {
                    title: 'Enablement focused',
                    description: 'We build playbooks, processes and capability within your teams — not long-term dependencies.'
                },
                {
                    title: 'End-to-end transformation',
                    description: 'Security that is integrated with your cloud, data, SAP and digital engineering programs.'
                }
            ],
            futureReady: {
                message: 'As your organisation enters new markets, adopts AI, or scales digital products, your cybersecurity posture evolves with you. Security becomes a competitive advantage — not a constraint.',
                tags: [
                    'Zero Trust aligned',
                    'Cloud & API ready',
                    'AI & automation aware',
                    'Board & audit friendly'
                ]
            }
        },
        // Legacy fields for compatibility (optional or kept if needed by other components, otherwise assume handled by conditional rendering)
        fullDescription: 'Our cybersecurity services offer 360-degree protection for your digital assets. We identify vulnerabilities, protect against threats, and ensure compliance with industry standards.',
        features: [
            'Vulnerability assessment and penetration testing',
            'Managed detection and response (MDR)',
            'Security architecture review',
            'Compliance and governance (ISO 27001, SOC 2)',
        ],
        problemStatement: "The increasing sophistication of cyber threats puts businesses at constant risk of data breaches, financial loss, and reputational damage.",
        solutionsOffered: [
            "Threat Intelligence and Monitoring",
            "Identity and Access Management (IAM)",
            "Endpoint Detection and Response (EDR)",
        ],
        toolsTechStack: [
            { name: 'CrowdStrike', icon: 'Shield' },
            { name: 'Splunk', icon: 'BarChart' },
            { name: 'Okta', icon: 'Shield' },
            { name: 'Nessus', icon: 'Shield' },
            { name: 'Metasploit', icon: 'Code' },
        ],
        whyChooseGAH: "Our team of ethical hackers and security analysts acts as an extension of your team.",
        caseStudies: [
            { title: "Healthcare Provider Thwarts Ransomware Attack", description: "Our rapid response team contained a ransomware attack on a large hospital network, restoring operations within hours and preventing data exfiltration.", link: "#" },
            { title: "Startup Secures Series A Funding with Proven Security Posture", description: "We conducted a full security audit and implemented a robust security program for a tech startup, which was a key factor in their successful funding round.", link: "#" },
        ],
        faqs: [
            { question: "How often should we conduct penetration testing?", answer: "We recommend at least one comprehensive penetration test annually, with additional tests after any significant changes to your network or applications. Continuous vulnerability scanning is also crucial." },
            { question: "What is Managed Detection and Response (MDR)?", answer: "MDR is a service where we provide 24/7 monitoring of your network, endpoints, and cloud environments to detect, investigate, and respond to threats in real-time. It's like having an elite security operations center without the overhead." },
        ],
        outcomeFocus: [
            'Reduced risk of data breaches',
            'Strengthened security posture',
            'Compliance with industry regulations',
            'Increased customer trust'
        ],
    },
    // 2. Cloud Modernization & DevOps
    {
        title: 'Cloud Modernization & DevOps',
        slug: 'cloud-modernization-devops',
        description: 'Scalable and secure cloud infrastructure to power your applications, ensuring reliability and performance.',
        link: '/services/cloud-modernization-devops',
        image: PlaceHolderImages.find((img) => img.id === 'service-1'),
        heroAttributes: {
            title: 'Modernize. Automate. Deliver at the speed of your business.',
            subtitle: 'We help you modernize core systems, adopt cloud-native architectures and implement DevOps automation so teams can ship faster, safer and more reliably.',
            tags: [
                'Cloud strategy & migration',
                'DevOps & platform engineering',
                'Cloud security & governance',
                'FinOps & cost optimization'
            ],
            cta: 'Plan Your Cloud Modernization →',
            ctaSecondary: 'View Our Cloud & DevOps Approach',
            note: 'Our focus is on business results — reduced lead time, higher reliability, and optimized cloud spend, not just migration.',
            whoWeHelp: [
                'Simplify and modernize legacy environments',
                'Automate delivery from code to production',
                'Design for reliability, observability and security',
                'Use cloud spend as a lever for efficiency'
            ],
            metrics: {
                label: 'Deployment Frequency',
                riskExposure: 40,
                afterEngagement: 85,
                beforeDescription: 'Before: weekly or monthly releases with manual coordination.',
                afterDescription: 'After: multiple deploys per day with automated pipelines.'
            }
        },
        realitySection: {
            title: 'Legacy delivery models can’t keep up with digital demand.',
            subtitle: 'On-prem, monolithic systems and manual deployment processes slow down innovation, increase risk and inflate operating cost.',
            points: [
                'New features take weeks or months to reach production.',
                'Environments are brittle, hard to replicate and inconsistent.',
                'Cloud costs rise without clear visibility or accountability.'
            ]
        },
        valueProposition: {
            title: 'We turn your cloud and delivery stack into an innovation engine.',
            subtitle: 'We combine cloud strategy, DevOps, security and FinOps to create a platform where teams can build, ship and scale digital products confidently.',
            points: [
                'Clear modernization roadmap aligned to business priorities and risk.',
                'Automated CI/CD pipelines and self-service environments for engineering teams.',
                'Cloud governance and cost optimization baked into operations.'
            ],
            note: 'We simplify transformation by starting where impact is highest — combining quick wins with a scalable long-term platform vision.'
        },
        servicePillars: {
            title: 'Cloud Modernization & DevOps services.',
            subtitle: 'From strategy and migration to platform engineering and FinOps — we cover the full lifecycle of cloud-powered delivery.',
            pillars: [
                {
                    badge: '1 · Cloud Strategy & Migration',
                    title: 'Cloud Strategy & Migration Modernization',
                    description: 'Move to the cloud with a clear strategy, predictable execution and minimal disruption.',
                    points: [
                        'Cloud readiness and TCO/ROI analysis',
                        'Migration plans (rehost, replatform, refactor)',
                        'Legacy modernization and microservices strategy'
                    ]
                },
                {
                    badge: '2 · DevOps & Platform Engineering',
                    title: 'DevOps & Platform Engineering',
                    description: 'Automate software delivery and provide a robust internal platform for developers.',
                    points: [
                        'CI/CD pipelines with automated testing & security gates',
                        'Infrastructure as Code, GitOps and self-service environments',
                        'Observability, SRE practices and reliability engineering'
                    ]
                },
                {
                    badge: '3 · Cloud Security & Governance',
                    title: 'Cloud Security & Governance',
                    description: 'Operate securely in the cloud with clear guardrails, policies and controls.',
                    points: [
                        'Cloud security posture assessment and hardening',
                        'Identity, policy and access governance in cloud',
                        'Compliance automation and audit support'
                    ]
                },
                {
                    badge: '4 · Cloud FinOps & Optimization',
                    title: 'Cloud FinOps & Cost Optimization',
                    description: 'Make cloud spend visible, efficient and aligned to value creation.',
                    points: [
                        'Cloud cost visibility and chargeback/showback models',
                        'Rightsizing, autoscaling and pricing model optimization',
                        'Continuous cost-performance tuning'
                    ]
                }
            ]
        },
        useCases: {
            title: 'Where Cloud & DevOps create immediate value.',
            subtitle: 'We prioritize modernization initiatives that reduce friction, accelerate delivery and free up capacity for innovation.',
            cases: [
                {
                    tag: 'Digital product launch',
                    title: 'Launching new digital products',
                    description: 'Design and stand up cloud-native platforms and pipelines to ship new customer experiences rapidly and safely.'
                },
                {
                    tag: 'Core modernization',
                    title: 'Modernizing legacy applications',
                    description: 'Break down monoliths, introduce APIs and container platforms to increase agility and maintainability.'
                },
                {
                    tag: 'Global scale',
                    title: 'Scaling globally with reliability',
                    description: 'Architect for high availability, performance and observability across regions and clouds.'
                },
                {
                    tag: 'Engineering velocity',
                    title: 'Accelerating engineering teams',
                    description: 'Provide self-service environments, standardized pipelines and golden paths to remove bottlenecks.'
                },
                {
                    tag: 'Cost control',
                    title: 'Cloud cost optimization',
                    description: 'Introduce FinOps practices, guardrails and dashboards to reduce waste and improve margins.'
                },
                {
                    tag: 'M&A & consolidation',
                    title: 'Integration after mergers & acquisitions',
                    description: 'Consolidate platforms, standardize tooling and align delivery practices across acquired entities.'
                }
            ]
        },
        businessOutcomes: {
            title: 'What you can expect from Cloud & DevOps engagements.',
            subtitle: 'We define outcome metrics from day one — and design the program to move those numbers in the right direction.',
            outcomes: [
                {
                    value: '20–50% faster',
                    label: 'feature release cycles',
                    description: 'Shorter lead time from idea to production through automation, standardization and better collaboration.'
                },
                {
                    value: '99.9%+',
                    label: 'uptime for critical services',
                    description: 'Architected for resilience, with observability and SRE practices to keep services dependable.'
                },
                {
                    value: '20–40%',
                    label: 'reduction in cloud spend',
                    description: 'Optimized resource usage, right-sizing and clear accountability reduce waste without sacrificing performance.'
                }
            ]
        },
        engagementApproach: {
            title: 'A pragmatic, platform-first approach to modernization.',
            subtitle: 'We structure cloud & DevOps engagements so that each phase delivers value on its own, while building towards a long-term platform.',
            steps: [
                {
                    step: 1,
                    title: 'Discover & prioritize',
                    description: 'Assess your current landscape, identify bottlenecks, map dependencies and align on target outcomes and priorities.'
                },
                {
                    step: 2,
                    title: 'Design & standardize',
                    description: 'Define reference architectures, platform patterns and golden paths for development and operations teams.'
                },
                {
                    step: 3,
                    title: 'Automate & enable',
                    description: 'Implement pipelines, platform services and guardrails, while enabling teams through pairing and training.'
                },
                {
                    step: 4,
                    title: 'Optimize & evolve',
                    description: 'Continuously refine reliability, performance, security and cloud cost as your products and usage grow.'
                }
            ]
        },
        whyChooseExtended: {
            title: 'A modernization partner focused on speed and stability.',
            subtitle: 'We blend cloud, DevOps, security and product engineering expertise to ensure modernization serves both IT and business goals.',
            cards: [
                {
                    title: 'Modern-first mindset',
                    description: 'We design for cloud-native practices — containers, microservices, APIs and automation — not lift-and-shift alone.'
                },
                {
                    title: 'Business-aligned modernization',
                    description: 'Initiatives are prioritized based on impact on revenue, risk, cost and strategic objectives.'
                },
                {
                    title: 'DevOps culture acceleration',
                    description: 'We enable teams with new practices, not just new tools — pairing, coaching and shared ownership.'
                },
                {
                    title: 'Secure & compliant by design',
                    description: 'Security, governance and compliance are embedded into the platform from the start.'
                },
                {
                    title: 'Vendor-neutral and multi-cloud',
                    description: 'We work across AWS, Azure, GCP and hybrid setups, recommending what fits your context.'
                },
                {
                    title: 'Scalable engagement model',
                    description: 'Start with a pilot or critical product, then expand with proven patterns and platforms.'
                }
            ],
            futureReady: {
                message: 'As your portfolio grows, your cloud platform and DevOps practices adapt with it — enabling more products, more teams and more regions without reinventing the foundation each time.',
                tags: [
                    'Cloud-native & scalable',
                    'Product & platform aligned',
                    'Cost & performance optimized',
                    'Ready for AI & data'
                ]
            }
        },
        fullDescription: 'We provide comprehensive cloud solutions, from infrastructure setup to migration and management. Our services are designed to be scalable, secure, and cost-effective, helping you leverage the full power of the cloud.',
        features: [
            'Cloud infrastructure setup (AWS, Azure, GCP)',
            'Serverless architecture design',
            'Cloud migration and modernization',
            'Containerization with Docker and Kubernetes',
        ],
        problemStatement: "Businesses often struggle with managing complex, on-premise infrastructure that is expensive, difficult to scale, and prone to downtime. This limits their ability to innovate and respond to market changes quickly.",
        solutionsOffered: [
            "Infrastructure as a Service (IaaS)",
            "Platform as a Service (PaaS)",
            "Software as a Service (SaaS) development",
            "Hybrid and Multi-Cloud Strategies",
        ],
        toolsTechStack: [
            { name: 'AWS', icon: 'Server' },
            { name: 'Azure', icon: 'Server' },
            { name: 'Google Cloud', icon: 'Server' },
            { name: 'Docker', icon: 'Code' },
            { name: 'Kubernetes', icon: 'Code' },
            { name: 'Terraform', icon: 'Code' },
        ],
        whyChooseGAH: "Our certified cloud experts design and implement bespoke cloud strategies that align with your business goals. We focus on cost-optimization, security, and scalability, ensuring your cloud environment is a powerful asset, not a complex liability. With our 24/7 management, you can focus on your core business while we handle the cloud.",
        caseStudies: [
            { title: "E-commerce Platform Scales for Black Friday", description: "How we migrated a major e-commerce client to a scalable AWS architecture, resulting in zero downtime during peak traffic.", link: "#" },
            { title: "Financial Firm Achieves Compliance in the Cloud", description: "We implemented a secure and compliant multi-cloud environment for a financial services firm, meeting all regulatory requirements.", link: "#" },
        ],
        faqs: [
            { question: "Which cloud provider is best for my business?", answer: "The best provider depends on your specific needs, existing technology stack, and budget. We conduct a thorough analysis to recommend the optimal solution, whether it's AWS, Azure, GCP, or a hybrid approach." },
            { question: "How do you ensure data security in the cloud?", answer: "Security is our top priority. We implement a multi-layered security strategy including encryption, identity and access management (IAM), network security, and continuous monitoring to protect your data at all times." },
        ],
        outcomeFocus: [
            'Reduced operational costs',
            'Increased scalability and flexibility',
            'Enhanced security and compliance',
            'Improved development agility'
        ],
    },
    // 3. Digital Engineering & Application Development
    {
        title: 'Digital Engineering & Application Development',
        slug: 'digital-engineering-application-development',
        description: 'Bespoke web development to meet your unique business needs, from corporate sites to complex applications.',
        link: '/services/digital-engineering-application-development',
        fullDescription: 'We build high-performance, scalable, and secure web solutions tailored to your specific requirements. Our team handles everything from initial concept and design to development, deployment, and maintenance.',
        image: PlaceHolderImages.find((img) => img.id === 'service-3-new'),
        heroAttributes: {
            title: 'Build what’s next. Secure, scalable & user-centric applications.',
            subtitle: 'We design, build and modernize digital applications that are cloud-native, secure by design and deeply aligned with your business goals — from customer experiences to core operations.',
            tags: [
                'Product discovery & UX',
                'Web & mobile engineering',
                'Application modernization & integration',
                'Quality engineering & DevSecOps'
            ],
            cta: 'Discuss Your Application Roadmap →',
            ctaSecondary: 'View Our Delivery Approach',
            note: 'We don’t just write code — we engineer digital capabilities that can evolve with your customers and your strategy.',
            whoWeHelp: [
                'Building digital products users actually adopt',
                'Digitizing manual and paper-based processes',
                'Modernizing legacy systems into API-driven platforms',
                'Embedding security, reliability and observability from day one'
            ],
            metrics: {
                label: 'Time-to-market',
                riskExposure: 70,
                afterEngagement: 30,
                beforeDescription: 'Typical baseline: releases delayed by requirements churn & tech debt.',
                afterDescription: 'Reduced cycles through discovery, clean architecture & automation.'
            }
        },
        realitySection: {
            title: 'Many applications are built fast — but age badly.',
            subtitle: 'Rapid delivery without strong architecture, UX and security leads to fragile apps, low adoption and mounting technical debt.',
            points: [
                'Users struggle with clunky interfaces and disconnected experiences.',
                'Core systems are hard to change, making innovation slow and risky.',
                'Shadow IT and spreadsheets appear where systems don’t keep up.'
            ]
        },
        valueProposition: {
            title: 'We engineer products that are loved by users and trusted by IT.',
            subtitle: 'We combine discovery, UX, cloud-native engineering and DevSecOps to build applications that are delightful, maintainable and ready for scale.',
            points: [
                'Start with user and business outcomes, not just feature lists.',
                'Design modular, API-driven architecture that can evolve over time.',
                'Integrate security, testing and deployment automation from the beginning.'
            ],
            note: 'We act as a strategic engineering partner — helping you avoid throwaway builds and create a sustainable digital product portfolio.'
        },
        servicePillars: {
            title: 'Digital Engineering & Application Development services.',
            subtitle: 'From product discovery to modernization, we support the full lifecycle of business-critical applications.',
            pillars: [
                {
                    badge: '1 · Product Discovery & Experience Design',
                    title: 'Product Discovery & Experience Design',
                    description: 'Build the right thing — then build it right, informed by real user and business insight.',
                    points: [
                        'Stakeholder and user research, journey mapping',
                        'UX/UI design, wireframes and clickable prototypes',
                        'Value-based product roadmaps & MVP definition'
                    ]
                },
                {
                    badge: '2 · Web & Mobile Engineering',
                    title: 'Web & Mobile Application Development',
                    description: 'Engineer modern, responsive applications with clean, maintainable code and strong foundations.',
                    points: [
                        'Cloud-native web applications and APIs',
                        'Native and cross-platform mobile apps',
                        'Performance, reliability and observability built in'
                    ]
                },
                {
                    badge: '3 · Application Modernization & Integration',
                    title: 'Application Modernization & Integration',
                    description: 'Transform legacy systems into flexible, integrated platforms that support innovation.',
                    points: [
                        'Decoupling monoliths and exposing APIs',
                        'UX modernization for critical business applications',
                        'Integration with SAP, CRM and enterprise systems'
                    ]
                },
                {
                    badge: '4 · Quality Engineering & DevSecOps',
                    title: 'Quality Engineering & DevSecOps',
                    description: 'Deliver frequently without trading off on stability, security or compliance.',
                    points: [
                        'Test automation and continuous quality gates',
                        'Secure coding practices and pipeline integration',
                        'Release governance, monitoring and rollback strategies'
                    ]
                }
            ]
        },
        useCases: {
            title: 'Where digital engineering delivers visible change.',
            subtitle: 'We prioritize use cases with strong user impact and strategic value — creating reference wins you can build on.',
            cases: [
                {
                    tag: 'Customer experience',
                    title: 'Customer & partner portals',
                    description: 'Self-service portals and dashboards that improve engagement, reduce support load and open new digital channels.'
                },
                {
                    tag: 'Process digitization',
                    title: 'Digitizing manual workflows',
                    description: 'Replace spreadsheets, email chains and paper forms with guided, automated digital workflows.'
                },
                {
                    tag: 'Workforce enablement',
                    title: 'Mobile & frontline apps',
                    description: 'Equip field teams and frontline staff with mobile tools for real-time data capture and decision support.'
                },
                {
                    tag: 'Platform strategy',
                    title: 'API-led integration platforms',
                    description: 'Build API layers and integration hubs to connect SAP, CRM, data platforms and digital products.'
                },
                {
                    tag: 'New digital revenue',
                    title: 'SaaS & data products',
                    description: 'Turn internal capabilities or data assets into products you can offer to customers or partners.'
                },
                {
                    tag: 'Experience uplift',
                    title: 'UI/UX modernization',
                    description: 'Refresh existing applications with modern UX and performance improvements to boost adoption and satisfaction.'
                }
            ]
        },
        businessOutcomes: {
            title: 'What you can expect from digital engineering engagements.',
            subtitle: 'We design products and applications with measurable outcomes in mind — not just delivery dates.',
            outcomes: [
                {
                    value: '40–60% faster',
                    label: 'time-to-market for new features',
                    description: 'Cleaner architecture, automation and agile practices reduce delivery friction and rework.'
                },
                {
                    value: '50–70% less',
                    label: 'manual effort in key processes',
                    description: 'Digitized workflows and integrated systems remove duplicate work and error-prone steps.'
                },
                {
                    value: '↑ Adoption & uptime',
                    label: 'for critical applications',
                    description: 'Better UX and reliability lead to higher user satisfaction, fewer incidents and greater business reliance.'
                }
            ]
        },
        engagementApproach: {
            title: 'A delivery approach built for learning and evolution.',
            subtitle: 'We treat every product as a living system — starting small, learning quickly and scaling what works.',
            steps: [
                {
                    step: 1,
                    title: 'Understand & envision',
                    description: 'Align on business goals, users, constraints and success metrics through structured discovery workshops.'
                },
                {
                    step: 2,
                    title: 'Architect & design',
                    description: 'Define experience, information architecture and technical architecture with security and scale in mind.'
                },
                {
                    step: 3,
                    title: 'Build & iterate',
                    description: 'Develop in iterative sprints with demos, feedback loops and continuous testing and integration.'
                },
                {
                    step: 4,
                    title: 'Scale & optimize',
                    description: 'Enhance features, performance and integrations based on real-world usage and evolving needs.'
                }
            ]
        },
        whyChooseExtended: {
            title: 'A digital engineering partner for modern, resilient products.',
            subtitle: 'We sit at the intersection of strategy, design and engineering — enabling applications that your users love and your teams can sustain.',
            cards: [
                {
                    title: 'Business-first product mindset',
                    description: 'We prioritize outcomes — adoption, revenue, efficiency — over feature checklists or vanity releases.'
                },
                {
                    title: 'Modern engineering practices',
                    description: 'Cloud-native architecture, clean code, observability and CI/CD are standard, not optional.'
                },
                {
                    title: 'Security & performance by design',
                    description: 'We build with security, scalability and performance embedded from the first iteration.'
                },
                {
                    title: 'Enterprise integration experience',
                    description: 'Deep understanding of integrating with SAP, data platforms, identity systems and existing IT landscapes.'
                },
                {
                    title: 'Transparent, collaborative delivery',
                    description: 'Regular demos, open backlogs and clear communication keep stakeholders aligned and in control.'
                },
                {
                    title: 'Foundation for AI & analytics',
                    description: 'Applications are designed to expose and consume data — enabling future AI and analytics initiatives.'
                }
            ],
            futureReady: {
                message: 'As your business, users and products evolve, your application portfolio evolves with them — modular, API-first and ready to adopt new capabilities like AI, automation and advanced analytics.',
                tags: [
                    'Cloud-native & modular',
                    'API & data friendly',
                    'Security & DevSecOps ready',
                    'Aligned with AI & analytics'
                ]
            }
        },
        features: [
            'Custom web application development',
            'Business process automation',
            'API integration and microservices',
            'Mobile app development',
        ],
        problemStatement: "Off-the-shelf solutions often fail to meet the unique needs and workflows of a business, leading to compromises in functionality, scalability, and user experience.",
        solutionsOffered: [
            "Tailor-made web applications",
            "Scalable e-commerce stores",
            "Headless CMS implementation",
            "Third-party API integrations",
        ],
        toolsTechStack: [
            { name: 'Next.js', icon: 'Code' },
            { name: 'React', icon: 'Code' },
            { name: 'Node.js', icon: 'Server' },
            { name: 'PostgreSQL', icon: 'Server' },
            { name: 'Vercel', icon: 'Server' },
        ],
        whyChooseGAH: "We don't just build websites; we build digital assets that drive business growth...",
        caseStudies: [
            { title: "SaaS company launches MVP in record time", description: "We helped a SaaS startup build and launch their MVP in just 3 months.", link: "#" },
            { title: "Retailer sees 300% increase in online sales", description: "A custom e-commerce platform we built resulted in a 300% increase in online sales.", link: "#" },
        ],
        faqs: [
            { question: "Can you work with our existing brand guidelines?", answer: "Yes, our design and development teams work closely with your brand guidelines..." },
            { question: "What is your development process?", answer: "We follow an agile methodology..." },
        ],
        outcomeFocus: [
            'Improved operational efficiency',
            'Enhanced user engagement',
            'Increased revenue and sales',
            'Scalable and future-proof solutions'
        ],
    },
    // 4. Data & Analytics
    {
        title: 'Data & Analytics',
        slug: 'data-analytics',
        description: 'Turn your data into actionable intelligence with our comprehensive analytics platforms.',
        link: '/services/data-analytics',
        fullDescription: 'Our data analytics services help you make sense of your data. We build data pipelines, create interactive dashboards, and provide insights to drive business decisions.',
        image: PlaceHolderImages.find((img) => img.id === 'service-4'),
        heroAttributes: {
            title: 'Turn data into intelligence. Turn intelligence into advantage.',
            subtitle: 'We help you build trusted, accessible and intelligent data ecosystems that enable better decisions today and AI-driven automation tomorrow.',
            tags: [
                'Data strategy & governance',
                'Modern data platforms',
                'Business intelligence & analytics',
                'DataOps & AI readiness'
            ],
            cta: 'Request a Data & Analytics Maturity Assessment →',
            ctaSecondary: 'View Our Data Engagement Approach',
            note: 'Our goal is simple: make your data trustworthy, usable and powerful — for every function, not just IT.',
            whoWeHelp: [
                'Trusted data foundations and governance models',
                'Modern data architectures for scale and flexibility',
                'Self-service analytics for leaders and teams',
                'Data readiness for AI, automation & advanced analytics'
            ],
            metrics: {
                label: 'Data trust & consistency',
                riskExposure: 45,
                afterEngagement: 85,
                beforeDescription: 'Before: conflicting reports, manual spreadsheets, low confidence.',
                afterDescription: 'After: governed, reconciled data powering decisions and automation.'
            }
        },
        realitySection: {
            title: 'Most organisations are rich in data — but poor in insight.',
            subtitle: 'Siloed systems, manual reporting and inconsistent definitions make it hard to trust data and even harder to move fast based on it.',
            points: [
                'Different teams report different numbers for the same metric.',
                'Analysts spend more time preparing data than analysing it.',
                'Leaders hesitate to rely on dashboards for critical decisions.'
            ]
        },
        valueProposition: {
            title: 'We make data trustworthy, accessible and action-oriented.',
            subtitle: 'We combine strategy, governance, engineering and analytics so data flows from source to decision-maker — cleanly and repeatably.',
            points: [
                'Clear ownership, definitions and controls for critical data.',
                'Modern data platforms that support BI, real-time analytics and AI.',
                'Self-service analytics and automation that scale across functions.'
            ],
            note: 'We see data as the bridge between your operations today and your AI & automation potential tomorrow.'
        },
        servicePillars: {
            title: 'Data & Analytics services.',
            subtitle: 'From strategy and governance to platforms and advanced analytics, we help you unlock the full value of your data.',
            pillars: [
                {
                    badge: '1 · Data Strategy & Governance',
                    title: 'Data Strategy & Governance',
                    description: 'Build trust and alignment around your data assets, with a clear roadmap and guardrails.',
                    points: [
                        'Enterprise data strategy and capability roadmap',
                        'Data ownership, stewardship & governance frameworks',
                        'Master data management and critical data elements'
                    ]
                },
                {
                    badge: '2 · Modern Data Architecture & Platforms',
                    title: 'Modern Data Architecture & Platforms',
                    description: 'Design and implement scalable data platforms that support analytics and AI use cases.',
                    points: [
                        'Cloud data platforms, warehouses & data lakes',
                        'ETL/ELT pipelines, streaming and batch ingestion',
                        'API-driven data products and integration patterns'
                    ]
                },
                {
                    badge: '3 · Business Intelligence & Advanced Analytics',
                    title: 'Business Intelligence & Advanced Analytics',
                    description: 'Turn raw data into insight and foresight for leadership and operations teams.',
                    points: [
                        'Self-service BI, semantic models and curated datasets',
                        'Executive dashboards and KPI frameworks',
                        'Predictive analytics and machine learning pilots'
                    ]
                },
                {
                    badge: '4 · Data Operations & Optimization',
                    title: 'Data Operations & Optimization',
                    description: 'Keep your data ecosystem healthy, cost-effective and compliant as it grows.',
                    points: [
                        'Data quality monitoring and remediation processes',
                        'Metadata, cataloguing and lineage for transparency',
                        'FinOps for data platforms and performance optimisation'
                    ]
                }
            ]
        },
        useCases: {
            title: 'Where Data & Analytics unlock business value.',
            subtitle: 'We prioritise data initiatives that clearly support growth, efficiency and risk management.',
            cases: [
                {
                    tag: 'Growth & revenue',
                    title: 'Customer & product insights',
                    description: 'Understand which customers, segments and products drive value so you can allocate resources more effectively.'
                },
                {
                    tag: 'Operational efficiency',
                    title: 'Process & cost analytics',
                    description: 'Use data to identify bottlenecks, waste and optimization opportunities across operations, supply chain and service.'
                },
                {
                    tag: 'Risk & compliance',
                    title: 'Regulatory & audit analytics',
                    description: 'Provide evidence, lineage and controls to support regulatory reporting, risk monitoring and internal audits.'
                },
                {
                    tag: 'Real-time decisions',
                    title: 'Operational & streaming analytics',
                    description: 'Combine real-time signals with thresholds and alerts to support time-sensitive operations.'
                },
                {
                    tag: 'Data-driven culture',
                    title: 'Self-service analytics for teams',
                    description: 'Enable business users to answer their own questions safely, with governed access to certified data.'
                },
                {
                    tag: 'AI readiness',
                    title: 'Data foundation for AI & automation',
                    description: 'Prepare trusted, well-structured data to power AI, machine learning and intelligent automation initiatives.'
                }
            ]
        },
        businessOutcomes: {
            title: 'What you can expect from Data & Analytics engagements.',
            subtitle: 'We measure success in terms of decisions improved, effort reduced and opportunities unlocked.',
            outcomes: [
                {
                    value: '30–50% uplift',
                    label: 'in data trust & consistency',
                    description: 'Fewer conflicting reports, clearer definitions and a single source of truth for key metrics.'
                },
                {
                    value: '2–4× faster',
                    label: 'access to insights',
                    description: 'Self-service BI and streamlined pipelines dramatically reduce time from question to answer.'
                },
                {
                    value: '60–80% less',
                    label: 'manual reporting effort',
                    description: 'Automating recurring reports frees your analysts to focus on exploration and strategy, not data wrangling.'
                }
            ]
        },
        engagementApproach: {
            title: 'A structured path from data chaos to data confidence.',
            subtitle: 'We sequence the work so each phase adds value on its own — while building towards your long-term data vision.',
            steps: [
                {
                    step: 1,
                    title: 'Assess & align',
                    description: 'Understand business goals, current data landscape, pain points and priorities; define what “good” looks like.'
                },
                {
                    step: 2,
                    title: 'Modernize & govern',
                    description: 'Design and implement architecture, platforms and governance models that support trusted, scalable data.'
                },
                {
                    step: 3,
                    title: 'Democratize & empower',
                    description: 'Enable business teams with self-service tools, curated datasets and training to use data confidently.'
                },
                {
                    step: 4,
                    title: 'Advance & automate',
                    description: 'Introduce predictive analytics, ML and intelligent automation where data maturity supports it.'
                }
            ]
        },
        whyChooseExtended: {
            title: 'A data partner that connects strategy, technology and execution.',
            subtitle: 'We don’t stop at dashboards — we ensure the right people can trust and act on the data with confidence.',
            cards: [
                {
                    title: 'Outcome-first data strategy',
                    description: 'We tie data initiatives directly to revenue growth, cost optimization and risk reduction goals.'
                },
                {
                    title: 'Modern architecture expertise',
                    description: 'Experience with leading cloud data platforms, integration patterns and best-practice designs.'
                },
                {
                    title: 'Governance that enables, not blocks',
                    description: 'Controls that protect data while still supporting agility and self-service for the business.'
                },
                {
                    title: 'Cross-functional enablement',
                    description: 'We work across IT, data and business functions to embed analytics into everyday decision making.'
                },
                {
                    title: 'Integration with wider transformation',
                    description: 'Data & Analytics aligned with your cloud, digital, SAP and AI programs for maximum leverage.'
                },
                {
                    title: 'Stepping stone to AI & automation',
                    description: 'We deliberately design data foundations that can support advanced AI and intelligent automation at scale.'
                }
            ],
            futureReady: {
                message: 'As your business expands, new data sources come online and AI opportunities grow, your data landscape remains structured, governed and ready — turning analytics into a true competitive advantage.',
                tags: [
                    'AI-ready data foundation',
                    'Governed & compliant',
                    'Self-service friendly',
                    'Integrated with digital & cloud'
                ]
            }
        },
        features: [
            'Data warehousing and ETL pipelines',
            'Business intelligence dashboard development',
            'Real-time data processing and analytics',
            'Big data solutions (Hadoop, Spark)',
        ],
        problemStatement: "Data is often siloed across different departments and systems, making it impossible to get a holistic view of business performance. Decision-making is based on guesswork rather than facts, hindering growth.",
        solutionsOffered: [
            "Centralized Data Warehousing",
            "Interactive Business Intelligence (BI) Dashboards",
            "Real-time Analytics and Reporting",
            "Customer and Marketing Analytics",
        ],
        toolsTechStack: [
            { name: 'Tableau', icon: 'BarChart' },
            { name: 'Power BI', icon: 'BarChart' },
            { name: 'Snowflake', icon: 'Server' },
            { name: 'dbt', icon: 'Code' },
            { name: 'Airflow', icon: 'Code' },
        ],
        whyChooseGAH: "We democratize data. Our approach is to break down data silos and empower your entire organization with self-service analytics tools. We build robust, scalable data platforms and intuitive dashboards that put actionable insights at your fingertips, fostering a culture of data-driven decision-making.",
        caseStudies: [
            { title: "Logistics Company Optimizes Routes, Saving Millions", description: "By creating a central analytics platform, a logistics company was able to analyze route efficiency and weather patterns, leading to significant fuel and time savings.", link: "#" },
            { title: "SaaS Company Reduces Churn with Customer Analytics", description: "We developed a customer health dashboard that identified at-risk users, allowing the success team to intervene proactively and reduce churn by 15%.", link: "#" },
        ],
        faqs: [
            { question: "What's the difference between BI and AI?", answer: "Business Intelligence (BI) focuses on describing what has happened in the past using historical data. Artificial Intelligence (AI) and Machine Learning focus on predicting what will happen in the future and prescribing actions to take. BI tells you what, AI tells you why and what's next." },
            { question: "Can you work with our existing data infrastructure?", answer: "Absolutely. Our solutions are tool-agnostic. We can integrate with your existing databases, data warehouses, and applications, or help you build a new, modern data stack from the ground up." },
        ],
        outcomeFocus: [
            'Single source of truth for data',
            'Improved strategic planning',
            'Enhanced operational visibility',
            'Higher ROI on marketing spend'
        ],
    },
    // 5. AI & Intelligent Automation
    {
        title: 'AI & Intelligent Automation',
        slug: 'ai-intelligent-automation',
        description: 'Leverage the power of AI to unlock insights, automate processes, and drive innovation.',
        link: '/services/ai-intelligent-automation',
        fullDescription: 'We help you harness the power of Artificial Intelligence and Machine Learning to build intelligent applications, automate processes, and gain a competitive edge.',
        image: PlaceHolderImages.find((img) => img.id === 'service-3'),
        heroAttributes: {
            title: 'Automate smarter. Augment your people. Accelerate outcomes.',
            subtitle: 'We design and implement AI- and automation-led solutions that reduce effort, improve experience and free your teams to focus on higher-value work.',
            tags: [
                'AI opportunity assessment',
                'Intelligent workflows & RPA',
                'Conversational AI & copilots',
                'Predictive & generative AI'
            ],
            cta: 'Request an AI & Automation Opportunity Scan →',
            ctaSecondary: 'View Our AI Delivery Approach',
            note: 'Our focus is on practical, high-ROI AI and automation — not experiments that never leave the lab.',
            whoWeHelp: [
                'High-volume, repetitive work draining expert time',
                'Customer or employee journeys with long waiting times',
                'Decisions based on rules that could be learned or predicted',
                'Content- or document-heavy processes ideal for generative AI'
            ],
            metrics: {
                label: 'Manual effort today',
                riskExposure: 90,
                afterEngagement: 30,
                beforeDescription: 'Multiple handoffs, rework and dependence on spreadsheets and email.',
                afterDescription: 'Machines handle the repetitive tasks; people focus on judgment and relationships.'
            }
        },
        realitySection: {
            title: 'AI hype is everywhere — but value is uneven.',
            subtitle: 'Many AI and automation initiatives stall because they are technology-first, disconnected from processes, or ignore data and change management realities.',
            points: [
                'Pilots that never scale beyond a single team or use case.',
                'Point solutions that create new silos instead of integrated workflows.',
                'Employees who don’t trust or understand AI-driven recommendations.'
            ]
        },
        valueProposition: {
            title: 'We design AI & automation around work, not the other way around.',
            subtitle: 'We combine process thinking, data foundations and AI/ML expertise to identify use cases where automation is both feasible and worthwhile.',
            points: [
                'Start with business processes, pain points and measurable outcomes.',
                'Blend rules-based automation with ML and generative AI where appropriate.',
                'Design solutions with governance, transparency and human oversight in mind.'
            ],
            note: 'We’re pragmatic: not every process needs AI. Sometimes structured automation delivers more value with less risk.'
        },
        servicePillars: {
            title: 'AI & Intelligent Automation services.',
            subtitle: 'From opportunity identification to scaled AI operations, we support your automation journey end-to-end.',
            pillars: [
                {
                    badge: '1 · AI & Automation Opportunity Assessment',
                    title: 'AI & Automation Opportunity Assessment',
                    description: 'Identify and prioritize high-value, feasible use cases before investing in technology.',
                    points: [
                        'Process discovery and automation assessments',
                        'Value and feasibility scoring across use cases',
                        'Prioritized AI & automation roadmap'
                    ]
                },
                {
                    badge: '2 · Intelligent Workflows & RPA',
                    title: 'Intelligent Workflows & RPA',
                    description: 'Automate repetitive, rule-based work with orchestrated workflows and digital workers.',
                    points: [
                        'RPA and workflow automation design & implementation',
                        'Integration with ERP, CRM and line-of-business systems',
                        'Monitoring, exception handling and continuous improvement'
                    ]
                },
                {
                    badge: '3 · Conversational AI & Digital Assistants',
                    title: 'Conversational AI & Digital Assistants',
                    description: 'Use chatbots, virtual agents and copilots to augment customer and employee interactions.',
                    points: [
                        'Chatbots for customer service and internal support',
                        'Knowledge retrieval using enterprise content and documents',
                        'Task-focused copilots embedded in everyday tools'
                    ]
                },
                {
                    badge: '4 · Predictive & Generative AI Solutions',
                    title: 'Predictive & Generative AI Solutions',
                    description: 'Apply ML and generative models to forecast, recommend or generate content at scale.',
                    points: [
                        'Predictive models for demand, risk or churn',
                        'Generative AI for document drafting and content automation',
                        'Human-in-the-loop review for quality and compliance'
                    ]
                }
            ]
        },
        useCases: {
            title: 'Where AI & automation deliver visible impact.',
            subtitle: 'We target use cases where effort reduction, cycle time and experience improvements are quantifiable.',
            cases: [
                {
                    tag: 'Customer operations',
                    title: 'Customer support augmentation',
                    description: 'AI assistants and intelligent routing that resolve routine queries and guide agents on complex cases.'
                },
                {
                    tag: 'Back-office efficiency',
                    title: 'Finance & HR process automation',
                    description: 'Automate invoice processing, reconciliations, onboarding, leave management and more with workflows and bots.'
                },
                {
                    tag: 'Sales & marketing',
                    title: 'Lead qualification & personalization',
                    description: 'Use AI to score leads, personalize outreach and surface next-best actions for sales teams.'
                },
                {
                    tag: 'Knowledge-heavy work',
                    title: 'Document-heavy workflows',
                    description: 'Extract data, summarize content and draft responses across contracts, policies, emails and reports.'
                },
                {
                    tag: 'Risk & control',
                    title: 'Exception monitoring & early warning',
                    description: 'Use ML to flag anomalies or threshold breaches in operations, finance, or security logs.'
                },
                {
                    tag: 'Employee productivity',
                    title: 'Copilots for internal teams',
                    description: 'Provide AI copilots inside tools like email, CRM or ticketing systems to save time on drafting, research and updates.'
                }
            ]
        },
        businessOutcomes: {
            title: 'What you can expect from AI & automation engagements.',
            subtitle: 'We define outcome metrics up front and design initiatives to move them measurably.',
            outcomes: [
                {
                    value: '60–80% reduction',
                    label: 'in manual effort for targeted tasks',
                    description: 'Free up capacity for higher-value work by automating repetitive steps end-to-end where possible.'
                },
                {
                    value: '30–50% faster',
                    label: 'cycle times for key processes',
                    description: 'Shorten response times, approval cycles and throughput times across critical workflows.'
                },
                {
                    value: '↑ Experience & accuracy',
                    label: 'for customers, partners & employees',
                    description: 'More consistent responses, fewer errors and smoother experiences improve satisfaction and trust.'
                }
            ]
        },
        engagementApproach: {
            title: 'A responsible and scalable AI & automation approach.',
            subtitle: 'We move from idea to pilot to scaled deployment in structured steps — with governance at every stage.',
            steps: [
                {
                    step: 1,
                    title: 'Discover & prioritize',
                    description: 'Identify candidate processes, evaluate value and feasibility, and align on priority use cases and success criteria.'
                },
                {
                    step: 2,
                    title: 'Design & validate',
                    description: 'Design solutions, data flows and human-in-the-loop controls; validate with prototypes and limited pilots.'
                },
                {
                    step: 3,
                    title: 'Implement & integrate',
                    description: 'Implement workflows, bots and AI models; integrate with systems, identity and monitoring platforms.'
                },
                {
                    step: 4,
                    title: 'Monitor & scale',
                    description: 'Track performance, refine models and workflows, manage risk and expand to additional processes or regions.'
                }
            ]
        },
        whyChooseExtended: {
            title: 'A partner for practical, responsible AI adoption.',
            subtitle: 'We combine AI, automation, data, security and engineering experience — so your initiatives are robust, governed and connected to your broader transformation.',
            cards: [
                {
                    title: 'Business-first AI thinking',
                    description: 'We start with value, process and change impact — not with models or tools in isolation.'
                },
                {
                    title: 'End-to-end capability',
                    description: 'From discovery to MLOps and automation support, we cover the full lifecycle of AI solutions.'
                },
                {
                    title: 'Data & security aware',
                    description: 'Alignment with your data platforms, governance, privacy and cybersecurity requirements is non-negotiable.'
                },
                {
                    title: 'Vendor- and platform-agnostic',
                    description: 'We work across AI platforms, cloud providers and automation tools — choosing what fits your context.'
                },
                {
                    title: 'Change management focus',
                    description: 'Training, operating model design and communication to ensure adoption and trust from your teams.'
                },
                {
                    title: 'Aligned with your transformation roadmap',
                    description: 'AI & automation initiatives that reinforce, not compete with, your cloud, data, SAP and digital programs.'
                }
            ],
            futureReady: {
                message: 'As AI capabilities evolve, your organisation will already have the foundations — processes, data, governance and culture — to adopt them safely and strategically, not reactively.',
                tags: [
                    'Process-first automation',
                    'Responsible & governed AI',
                    'Data & security aligned',
                    'Designed to scale'
                ]
            }
        },
        features: [
            'Custom machine learning model development',
            'Natural Language Processing (NLP) solutions',
            'Computer vision and image analysis',
            'Predictive analytics and forecasting',
        ],
        problemStatement: "Businesses are collecting more data than ever, but most struggle to extract meaningful, actionable insights from it. This untapped potential leads to missed opportunities, operational inefficiencies, and a failure to innovate.",
        solutionsOffered: [
            "Predictive Modeling and Forecasting",
            "Natural Language Processing (NLP) for text analysis",
            "Computer Vision for image and video analysis",
            "AI-Powered Robotic Process Automation (RPA)",
        ],
        toolsTechStack: [
            { name: 'Python', icon: 'Code' },
            { name: 'TensorFlow', icon: 'BrainCircuit' },
            { name: 'PyTorch', icon: 'BrainCircuit' },
            { name: 'scikit-learn', icon: 'BarChart' },
            { name: 'OpenCV', icon: 'Code' },
        ],
        whyChooseGAH: "We are not just data scientists; we are business problem-solvers. We partner with you to understand your challenges...",
        caseStudies: [
            { title: "Retailer Increases Sales by 20% with Recommendation Engine", description: "We built a custom recommendation engine that personalized the online shopping experience...", link: "#" },
            { title: "Manufacturer Reduces Defects with AI-Powered Quality Control", description: "An automated quality control system using computer vision was implemented on the factory floor...", link: "#" },
        ],
        faqs: [
            { question: "What kind of data do I need for an AI project?", answer: "The data required depends on the problem..." },
            { question: "How long does it take to see results from an AI project?", answer: "While some 'quick wins' can be achieved in a few weeks..." },
        ],
        outcomeFocus: [
            'Data-driven decision making',
            'Increased operational efficiency',
            'New revenue streams',
            'Enhanced customer experiences'
        ],
    },
    // 6. SAP Consulting & Enterprise Solutions
    {
        title: 'SAP Consulting & Enterprise Solutions',
        slug: 'sap-consulting-enterprise-solutions',
        description: 'End-to-end SAP solutions, from implementation and migration to optimization and support, driving enterprise efficiency.',
        link: '/services/sap-consulting-enterprise-solutions',
        fullDescription: 'We specialize in SAP transformation to streamline your business processes, enhance efficiency, and drive growth. Our expert consultants provide end-to-end solutions, from S/4HANA migration to custom development and ongoing support.',
        image: PlaceHolderImages.find((img) => img.id === 'service-6-new'),
        heroAttributes: {
            title: 'Stabilise today. Modernise SAP for tomorrow. Enable enterprise scale.',
            subtitle: 'We help you design, implement and optimise SAP landscapes so they are stable, integrated and ready for S/4HANA, cloud and digital initiatives.',
            tags: [
                'SAP strategy & roadmap',
                'S/4HANA transformation',
                'SAP implementation & rollout',
                'SAP integration & AMS'
            ],
            cta: 'Discuss Your SAP Roadmap →',
            ctaSecondary: 'View Our SAP Engagement Approach',
            note: 'Our SAP consultants bring 15+ years of experience and certifications across core modules and S/4HANA — with a strong focus on business outcomes, not just configuration.',
            whoWeHelp: [
                'Aligning SAP capability with business and operating models',
                'S/4HANA and cloud journeys with minimal disruption',
                'Integrating SAP with digital, data and surrounding applications',
                'Continuous optimisation, governance and support'
            ],
            metrics: {
                label: 'Unrealised SAP value',
                riskExposure: 65,
                afterEngagement: 85,
                beforeDescription: 'Underused modules, customisations, manual workarounds and integration gaps.',
                afterDescription: 'Higher adoption, cleaner processes and SAP aligned with your transformation plans.'
            }
        },
        realitySection: {
            title: 'SAP is critical — but often complex, customised and under-leveraged.',
            subtitle: 'Years of incremental changes and local workarounds can leave your SAP landscape fragile and resistant to change just when the business needs agility.',
            points: [
                'Heavy customisations make upgrades and S/4HANA moves difficult.',
                'Processes differ across regions, business units and plants.',
                'Data quality and integration gaps limit analytics and digital initiatives.'
            ]
        },
        valueProposition: {
            title: 'We treat SAP as a strategic platform, not just a system of record.',
            subtitle: 'We bring senior SAP consultants (15+ years) who understand both the technology and the business — designing solutions that balance standardisation and flexibility.',
            points: [
                'Clear, staged SAP roadmap aligned to business priorities and risk.',
                'S/4HANA, cloud and integration strategies that minimise disruption.',
                'Continuous optimisation and AMS that improve adoption and stability.'
            ],
            note: 'Our consultants are certified across SAP modules and cloud platforms, with deep experience in complex multi-country and multi-entity environments.'
        },
        servicePillars: {
            title: 'SAP Consulting & Enterprise Solutions services.',
            subtitle: 'From roadmap and design to implementation, integration and AMS — we support the full SAP lifecycle.',
            pillars: [
                {
                    badge: '1 · SAP Strategy & Roadmap',
                    title: 'SAP Strategy & Roadmap',
                    description: 'Define where SAP fits in your enterprise architecture and how it evolves over the next 3–5 years.',
                    points: [
                        'Current landscape assessment and pain-point analysis',
                        'SAP role in your target operating model and architecture',
                        'Prioritised roadmap (S/4HANA, cloud, integrations, retirements)'
                    ]
                },
                {
                    badge: '2 · SAP Implementation & Global Rollout',
                    title: 'SAP Implementation & Global Rollout',
                    description: 'Deliver new SAP solutions and rollouts with strong process design and change management.',
                    points: [
                        'Greenfield, brownfield and hybrid S/4HANA approaches',
                        'Template design, localisation and multi-country rollouts',
                        'Cutover planning, hypercare and post-go-live stabilisation'
                    ]
                },
                {
                    badge: '3 · SAP Modernisation & Integration',
                    title: 'SAP Modernisation & Integration',
                    description: 'Simplify and standardise SAP while connecting it to your digital, data and cloud platforms.',
                    points: [
                        'Custom code analysis, remediation and simplification',
                        'Integration patterns (APIs, events) with non-SAP systems',
                        'Data quality improvements and analytics enablement'
                    ]
                },
                {
                    badge: '4 · SAP AMS & Continuous Optimisation',
                    title: 'SAP AMS & Continuous Optimisation',
                    description: 'Keep SAP stable, compliant and continuously improving through managed services.',
                    points: [
                        'Application support across key SAP modules and technologies',
                        'Enhancement and change request management',
                        'Performance, audit and compliance tuning over time'
                    ]
                }
            ]
        },
        useCases: {
            title: 'Where SAP transformation delivers tangible business impact.',
            subtitle: 'We focus on SAP initiatives that clearly impact cost, control, compliance and growth.',
            cases: [
                {
                    tag: 'Finance & control',
                    title: 'Finance transformation on SAP',
                    description: 'Standardise processes, speed up closing cycles and improve control through SAP-led finance transformation.'
                },
                {
                    tag: 'Supply chain',
                    title: 'Supply chain & manufacturing optimisation',
                    description: 'Align planning, procurement, inventory and production processes with real-time SAP data and workflows.'
                },
                {
                    tag: 'S/4HANA',
                    title: 'Transition to S/4HANA',
                    description: 'Plan and execute your move to S/4HANA with clear benefits, risk mitigation and phased delivery.'
                },
                {
                    tag: 'Integration',
                    title: 'Integrating SAP with digital products',
                    description: 'Expose SAP processes and data securely to portals, apps, data platforms and automation tools.'
                },
                {
                    tag: 'Data & compliance',
                    title: 'Improving data quality & compliance',
                    description: 'Clean, govern and standardise SAP data to support analytics, reporting and regulatory needs.'
                },
                {
                    tag: 'Cost & efficiency',
                    title: 'Optimising SAP TCO & operations',
                    description: 'Reduce run costs, simplify footprint and optimise licensing while improving service levels.'
                }
            ]
        },
        businessOutcomes: {
            title: 'What you can expect from SAP Consulting & Enterprise Solutions.',
            subtitle: 'We define success in business terms — stability, speed, cost and strategic agility.',
            outcomes: [
                {
                    value: '20–40% reduction',
                    label: 'in SAP-related incidents & firefighting',
                    description: 'Better design, simplification and AMS reduce unplanned outages and production issues.'
                },
                {
                    value: '30–50% faster',
                    label: 'cycle times for key SAP processes',
                    description: 'Standardised processes and automation accelerate finance, supply chain and operational cycles.'
                },
                {
                    value: '↑ Alignment & readiness',
                    label: 'for S/4HANA, cloud & digital',
                    description: 'SAP is positioned as an enabler for your broader transformation, not a constraint.'
                }
            ]
        },
        engagementApproach: {
            title: 'A structured, low-risk approach to SAP change.',
            subtitle: 'We sequence SAP work to protect business continuity while delivering incremental value.',
            steps: [
                {
                    step: 1,
                    title: 'Assess & understand',
                    description: 'Review your current SAP landscape, processes, customisations, pain points and constraints from business and IT perspectives.'
                },
                {
                    step: 2,
                    title: 'Design & roadmap',
                    description: 'Define target architecture, process templates and a phased roadmap for improvements and transformation.'
                },
                {
                    step: 3,
                    title: 'Implement & stabilise',
                    description: 'Execute projects with strong governance, data focus and change management, followed by structured hypercare.'
                },
                {
                    step: 4,
                    title: 'Optimise & evolve',
                    description: 'Continuously tune processes, performance and integration as your business and SAP roadmap evolve.'
                }
            ]
        },
        whyChooseExtended: {
            title: 'A SAP partner with both depth and cross-functional perspective.',
            subtitle: 'We combine certified SAP expertise (15+ years) with strong experience in cloud, data, security and digital — so SAP decisions are made in the full enterprise context.',
            cards: [
                {
                    title: 'Senior, certified SAP consultants',
                    description: 'Consultants with 15+ years across implementations, rollouts and AMS in complex environments.'
                },
                {
                    title: 'Business-first SAP design',
                    description: 'We start from processes and outcomes — not just module configuration or technical features.'
                },
                {
                    title: 'Balanced standardisation & flexibility',
                    description: 'We help you strike the right balance between global templates and necessary local differences.'
                },
                {
                    title: 'Integration with cloud & digital',
                    description: 'SAP plans aligned with your cloud, data, cybersecurity and digital product initiatives.'
                },
                {
                    title: 'Structured governance & risk management',
                    description: 'Clear roles, controls and decision paths reduce project and operational risk.'
                },
                {
                    title: 'Long-term partnership mindset',
                    description: 'We support you beyond go-live — through AMS, optimisation and subsequent SAP releases.'
                }
            ],
            futureReady: {
                message: 'As you expand into new markets, adopt cloud, AI and advanced analytics, your SAP landscape will be positioned as a secure, integrated backbone — not a constraint — for your next stage of growth.',
                tags: [
                    'S/4HANA & cloud ready',
                    'Integrated with data & digital',
                    'Stable yet adaptable',
                    'Fit for global scale'
                ]
            }
        },
        features: [
            'SAP S/4HANA Migration and Implementation',
            'SAP Business Technology Platform (BTP) Development',
            'SAP Analytics Cloud (SAC) and Data Intelligence',
            'Managed Services and Application Support',
        ],
        problemStatement: "Many enterprises struggle to unlock the full potential of their SAP investment. Legacy systems, complex integrations, and a lack of specialized expertise can lead to inefficiencies, high operational costs, and an inability to adapt to modern business demands.",
        solutionsOffered: [
            "Greenfield and Brownfield S/4HANA implementations.",
            "Custom Fiori application development on BTP.",
            "Data migration and integration strategies.",
            "24/7 application management and support.",
        ],
        toolsTechStack: [
            { name: 'SAP S/4HANA', icon: 'Server' },
            { name: 'SAP BTP', icon: 'Code' },
            { name: 'SAP Analytics Cloud', icon: 'BarChart' },
            { name: 'ABAP', icon: 'Code' },
            { name: 'SAP Fiori', icon: 'Code' },
        ],
        whyChooseGAH: "Our certified SAP consultants bring deep industry knowledge and technical expertise to every project. We focus on delivering value-driven transformations that not only modernize your ERP system but also empower your business with agile, intelligent, and integrated processes for a competitive edge.",
        caseStudies: [
            { title: "Manufacturing giant streamlines supply chain with S/4HANA", description: "We led a successful S/4HANA migration that unified supply chain data, providing real-time visibility and reducing operational costs by 15%.", link: "#" },
            { title: "Retail company enhances customer experience with custom Fiori apps", description: "Our team developed a suite of custom Fiori apps on BTP, creating a seamless and intuitive experience for both in-store and online customers.", link: "#" },
        ],
        faqs: [
            { question: "What is the typical timeline for an S/4HANA migration?", answer: "The timeline can vary significantly based on the complexity of your current landscape. A typical brownfield migration can take 6-12 months, while a greenfield implementation might be longer. We conduct a detailed assessment to provide a realistic timeline." },
            { question: "How does SAP BTP extend the capabilities of S/4HANA?", answer: "SAP Business Technology Platform (BTP) allows you to build custom applications and extensions without modifying the core S/4HANA system. This keeps your core clean, simplifies upgrades, and enables rapid innovation." },
        ],
        outcomeFocus: [
            'Streamlined business processes',
            'Real-time data for decision-making',
            'Improved user experience with Fiori apps',
            'Lower total cost of ownership (TCO)'
        ],
    },
];

