export const faqCategories = [
  { id: "all", label: "All" },
  { id: "process", label: "Process" },
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "timeline", label: "Timeline" },
  { id: "projects", label: "Projects" },
];

export const faqHeroContent = {
  eyebrow: "FREQUENTLY ASKED QUESTIONS",
  heading: "Questions, Answered.",
  supportingText:
    "Everything you need to know about our design process, services, timelines, and working together.",
};

export const faqEditorialContent = {
  badge: "FAQ",
  heading: "How We Work Together",
  description:
    "Here are clear answers to the most common questions clients ask before embarking on an interior design project with our studio.",
  guidanceCard: {
    eyebrow: "FAQ",
    title: "Have a question about your project?",
    text: "Not sure where to start? Find answers about our design process, services, pricing, timelines, materials, and project requirements.",
    ctaText: "Need more information?",
    ctaHref: "/contact",
  },
};

export const faqCtaContent = {
  eyebrow: "READY TO START?",
  title: "Let's Create a Space That Feels Like You.",
  description:
    "Tell us about your space and requirements, and our design team will guide you through the next steps with clarity and care.",
  primaryCta: {
    label: "Get a Free Consultation",
    href: "/contact?type=consultation",
  },
  secondaryCta: {
    label: "Request a Quote",
    href: "/contact?type=quote",
  },
};

export const faqData = [
  // PROCESS
  {
    id: "process-1",
    category: "process",
    topic: "Initial Steps",
    question: "How does the interior design process begin?",
    answer:
      "Our process begins with an in-depth discovery consultation where we walk through your space, explore your functional requirements, understand your aesthetic preferences, and establish initial budget parameters. Following this meeting, we outline a comprehensive design brief and project roadmap before moving into spatial planning and concept development.",
  },
  {
    id: "process-2",
    category: "process",
    topic: "First Consultation",
    question: "What happens during the first consultation?",
    answer:
      "During the initial consultation, we review your floor plans, listen to your daily lifestyle routines, assess site conditions, and discuss what works and what doesn't in your current layout. We share our studio methodology, review potential architectural configurations, and define the exact scope of services required for your residence or commercial property.",
  },
  {
    id: "process-3",
    category: "process",
    topic: "Client Collaboration",
    question: "How involved will I be during the design process?",
    answer:
      "Collaboration is built directly into our milestone structure. You are heavily involved during early concept and schematic review sessions to confirm layout decisions, material tactile boards, and 3D perspectives. Once design decisions are finalized, our studio manages all procurement, contractor coordination, and site technicalities, keeping you updated through scheduled weekly briefings without burdening your daily schedule.",
  },
  {
    id: "process-4",
    category: "process",
    topic: "Design Revisions",
    question: "Can I make changes after the concept is approved?",
    answer:
      "Yes. We include structured review rounds during schematic design and technical drawing stages to refine spatial proportions and material selections. While revisions are welcomed during the design phase, we finalize every drawing, millwork detail, and specification before procurement and construction begin to avoid on-site delays and unexpected budget variations.",
  },

  // SERVICES
  {
    id: "services-1",
    category: "services",
    topic: "Project Scope",
    question: "What types of interior design projects do you take on?",
    answer:
      "We handle complete residential renovations, bespoke penthouse interiors, new-build architectural interiors, historical restorations, and boutique commercial environments including creative studios, hospitality spaces, and executive offices. We prioritize projects that value spatial refinement, honest materials, and considered craftsmanship.",
  },
  {
    id: "services-2",
    category: "services",
    topic: "Space Typologies",
    question: "Do you work on residential and commercial spaces?",
    answer:
      "Yes. Our portfolio spans both private residences—such as urban townhomes, high-rise apartments, and coastal retreats—and tailored commercial environments including hospitality lounges, executive workspaces, retail flagships, and wellness studios. Each typology receives the same dedication to human ergonomics and architectural integrity.",
  },
  {
    id: "services-3",
    category: "services",
    topic: "Furnishing & Finishes",
    question: "Do you handle furniture, lighting and material selection?",
    answer:
      "Comprehensively. Our studio curates every tangible surface in your interior—from architectural lighting plans and electrical layouts to bespoke upholstery, case goods, natural stone slabs, architectural hardware, acoustic wall treatments, and window drapery. We also design custom joinery and work directly with skilled artisans for one-of-a-kind furniture pieces.",
  },
  {
    id: "services-4",
    category: "services",
    topic: "Turnkey Execution",
    question: "Do you provide complete interior execution?",
    answer:
      "Yes, we offer full turnkey interior delivery. In addition to architectural drawings and 3D visualizations, our team coordinates contractor bidding, supervises site execution, oversees artisan fabrication, manages logistics and warehousing, and conducts white-glove staging right down to art hanging and accessory placement.",
  },

  // PRICING
  {
    id: "pricing-1",
    category: "pricing",
    topic: "Design Fees",
    question: "How is the design fee calculated?",
    answer:
      "Our design fees are structured transparently based on total square footage, project complexity, and scope of services. We establish a fixed design fee for the schematic, 3D visualization, and technical drawing packages, paired with an agreed percentage or management fee for procurement and construction site supervision. You receive a full fee breakdown before signing an agreement.",
  },
  {
    id: "pricing-2",
    category: "pricing",
    topic: "Cost Factors",
    question: "What factors affect the overall project cost?",
    answer:
      "The overall investment is influenced primarily by three elements: architectural interventions (such as relocating walls, plumbing, or electrical drops), the caliber of materials selected (custom millwork and natural stone versus standard finishes), and the degree of custom furniture and imported lighting specified.",
  },
  {
    id: "pricing-3",
    category: "pricing",
    topic: "Detailed Quotation",
    question: "Do you provide a detailed quotation before starting?",
    answer:
      "Absolutely. Transparency is core to our client relationships. Before any construction contracts are awarded or purchase orders placed, we compile an itemized project budget spanning design fees, contractor estimates, joinery fabrication, lighting, fixtures, and freight. Every line item is reviewed and approved by you in advance.",
  },
  {
    id: "pricing-4",
    category: "pricing",
    topic: "Phased Execution",
    question: "Can the project be completed in phases?",
    answer:
      "Yes. For larger residences or multi-level spaces, we can formulate a master interior plan and execute the build in carefully sequenced phases. Developing the holistic master plan first ensures that finishes, electrical pathways, and spatial continuity remain harmonious as each zone is completed.",
  },

  // TIMELINE
  {
    id: "timeline-1",
    category: "timeline",
    topic: "Total Duration",
    question: "How long does an interior design project usually take?",
    answer:
      "Project duration depends on overall scope, architectural schematics, joinery fabrication, and turnkey coordination. Focused room transformations generally take fewer weeks, whereas full-scope residential spaces and commercial interiors progress across deliberate design, procurement, and execution phases with agreed milestones established early on.",
  },
  {
    id: "timeline-2",
    category: "timeline",
    topic: "Design Phase",
    question: "How long does the design stage take?",
    answer:
      "The initial design phase—encompassing space planning, 3D visualization, material curation, and technical drawing sets—typically takes between 4 to 8 weeks. This timeframe allows thoughtful iteration, physical sample reviews, and thorough engineering before on-site fabrication commences.",
  },
  {
    id: "timeline-3",
    category: "timeline",
    topic: "Deadline Management",
    question: "How do you manage project deadlines?",
    answer:
      "We build a realistic critical-path project schedule using milestone tracking across four distinct phases: Concept, Documentation, Procurement, and On-Site Execution. By ordering long-lead items early and maintaining direct communication with general contractors and workshops, we proactively resolve bottlenecks before they impact move-in targets.",
  },
  {
    id: "timeline-4",
    category: "timeline",
    topic: "Schedule Variables",
    question: "What can cause a project timeline to change?",
    answer:
      "The most common timeline variables are municipal permitting approvals, unforeseen existing site conditions uncovered during demolition, client-requested design changes mid-construction, and international freight lead times on specialized imported stone or artisan lighting fixtures. When unexpected conditions arise, we present clear recovery solutions immediately.",
  },

  // PROJECTS
  {
    id: "projects-1",
    category: "projects",
    topic: "Portfolio Work",
    question: "Can I see examples of previous projects?",
    answer:
      "Yes, our curated project gallery showcases complete case studies of our residential, commercial, and architectural transformations. During our discovery meeting, we also share detailed construction drawing packages, material boards, and behind-the-scenes build documentation relevant to your specific property type.",
  },
  {
    id: "projects-2",
    category: "projects",
    topic: "Existing Spaces",
    question: "Can you work with an existing space?",
    answer:
      "Much of our studio's work involves reimagining existing residences and historic structures. We specialize in evaluating load-bearing constraints, optimizing natural light corridors, and transforming awkward floor plans into serene, fluid spaces while respecting the architectural character of the building.",
  },
  {
    id: "projects-3",
    category: "projects",
    topic: "Existing Furniture",
    question: "Can you design around existing furniture?",
    answer:
      "Yes. If you have beloved family heirlooms, collectible art, or signature furniture pieces, we catalogue their dimensions, timber tones, and visual weight during discovery. We then design architectural millwork, spatial groupings, and color palettes that naturally integrate and highlight those pieces within the new interior.",
  },
  {
    id: "projects-4",
    category: "projects",
    topic: "Design Aesthetics",
    question: "Do you work with specific design styles?",
    answer:
      "While our signature studio aesthetic is rooted in understated architectural minimalism, warm tactility, and honest materiality, we do not impose a single rigid look. Every project is an individual response to the site's light, the building's architecture, and how you personally wish to live in your home.",
  },
];
