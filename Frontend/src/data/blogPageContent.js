// Blog Page Data Source
// All local images imported strictly from src/assets/blog/
import blogFeatured from "../assets/blog/blog-featured.png";
import blogKitchen from "../assets/blog/blog-kitchen.jpg";
import blogLighting from "../assets/blog/blog-lighting.jpg";
import blogMaterials from "../assets/blog/blog-materials.jpg";
import blogSmallSpaces from "../assets/blog/blog-small-spaces.png";
import blogBedroom from "../assets/blog/blog-bedroom.png";
import blogCommercial from "../assets/blog/blog-commercial.jpg";
import blogMasterclass from "../assets/blog/blog-masterclass.jpg";
import blogNoteWood from "../assets/blog/blog-note-wood.jpg";
import blogNoteHistoric from "../assets/blog/blog-note-historic.jpg";

export const blogPageContent = {
  header: {
    eyebrow: "BLOG / DESIGN IDEAS",
    title: "Design Ideas & Insights",
    description:
      "A curated collection of interior design ideas, spatial trends, practical planning guidance, and studio insights.",
  },

  featuredPost: {
    id: "featured-creating-spaces",
    slug: "creating-spaces-that-feel-like-home",
    badge: "FEATURED",
    category: "INTERIOR DESIGN",
    date: "12 AUG 2026",
    readTime: "6 MIN READ",
    title: "Creating Spaces That Feel Like Home",
    author: "Elena Rostova",
    authorRole: "Studio Principal Architect",
    authorNote: "Studio Lead Curated",
    readMoreText: "Read Article",
    image: blogFeatured,
    alt: "Contemporary open living penthouse with bespoke furniture and natural panoramic light",
    description:
      "A thoughtful guide to designing interiors that balance comfort, function, personality, and timeless architectural style through considered materials and organic spatial flow.",
    content: [
      "Interior architecture is not merely about decorating an enclosure; it is an ongoing dialogue between human ergonomics, honest materiality, and natural diurnal illumination. When approaching an expansive open-plan space, the immediate instinct is often to fill every square meter. True design mastery, however, lies in the discipline of restraint.",
      "By anchoring rooms with sculptural focal points—whether a monolith travertine hearth, an integrated white-oak library, or a low-slung conversation pit—we establish intuitive pathways that guide movement while safeguarding quiet sanctuary.",
      "Light plays an architectural role as decisive as any load-bearing pillar. We prioritize morning eastward luminescence for kitchen and breakfast perimeters, while designing recessed, indirect 2700K perimeter coves that gently awaken as natural twilight wanes.",
      "The result is a living environment that never feels staged or rigid, but rather breathes organically alongside the daily rhythms of those who inhabit it.",
    ],
    keyTakeaways: [
      "Prioritize spatial choreography and clear visual sightlines before selecting decorative furnishings.",
      "Incorporate unlacquered metals, porous natural stone, and raw timbers that cultivate a graceful patina over time.",
      "Layer ambient, task, and architectural cove lighting to eliminate harsh overhead downlight glare.",
    ],
  },

  filters: [
    { id: "all", label: "All" },
    { id: "design-ideas", label: "Design Ideas" },
    { id: "interior-trends", label: "Interior Trends" },
    { id: "space-planning", label: "Space Planning" },
    { id: "materials-finishes", label: "Materials & Finishes" },
    { id: "lighting", label: "Lighting" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
  ],

  latestInsightsHeader: {
    eyebrow: "CURATED INSIGHTS",
    title: "Latest Design Ideas",
    description:
      "Fresh explorations into residential architecture, material tactile warmth, and spatial utility.",
  },

  // 6 Primary Articles in the Bento / Dynamic Grid
  latestPosts: [
    {
      id: "modern-kitchen-ideas",
      slug: "modern-kitchen-design-ideas",
      badge: "Design Ideas",
      category: "RESIDENTIAL",
      filterCategory: "residential",
      secondaryCategories: ["design-ideas"],
      date: "08 AUG 2026",
      readTime: "5 MIN READ",
      title: "Modern Kitchen Design Ideas for Everyday Living",
      author: "Marcus Vance",
      authorRole: "Senior Kitchen & Joinery Designer",
      image: blogKitchen,
      alt: "Modern luxury kitchen with double marble waterfall islands and skylight illumination",
      description:
        "How architectural island zoning, concealed storage joinery, and warm tactile marble combine to create culinary hubs that anchor modern family life.",
      readMoreText: "Read Article",
      content: [
        "The contemporary kitchen has transcended its purely utilitarian heritage to become the emotional and social gravitational center of the home. Designing for everyday living demands a rigorous balance between chef-grade ergonomic efficiency and warm architectural tactility.",
        "Concealed joinery is paramount. By integrating full-height pocket doors that seamlessly tuck away countertop appliances, secondary prep sinks, and pantry reserves, the main island remains a serene visual centerpiece even during rigorous culinary preparation.",
        "We specify honed quartzite and leathered marbles over polished surfaces. These tactile finishes resist stark reflections from skylights while offering a soft, velvet-smooth hand feel that encourages casual gathering and long family conversations.",
      ],
      keyTakeaways: [
        "Incorporate dual-zone island layouts: one for active cooking prep and one dedicated to social seating.",
        "Utilize concealed pocket-door pantries to maintain clean, clutter-free sightlines from adjacent living areas.",
        "Pair cool natural stone worktops with rift-sawn timber cabinetry to infuse biological warmth.",
      ],
    },
    {
      id: "layered-lighting-mood",
      slug: "art-of-layered-lighting",
      badge: "Lighting",
      category: "LIGHTING",
      filterCategory: "lighting",
      secondaryCategories: ["design-ideas"],
      date: "04 AUG 2026",
      readTime: "4 MIN READ",
      title: "The Art of Layered Lighting: Mood, Task & Atmosphere",
      author: "James Sterling",
      authorRole: "Architectural Lighting Consultant",
      image: blogLighting,
      alt: "Intimate architectural lounge with layered indirect warm cove and accent lighting",
      description:
        "Mastering the subtle triad of ambient ceiling coves, tailored reading sconces, and sculptural pendants.",
      readMoreText: "Read Article",
      content: [
        "Great architectural lighting is rarely seen directly; rather, it is felt through the surfaces it kisses and the shadows it sculpts. Relying on an aggressive grid of ceiling spotlights flattens dimensionality and produces physiological fatigue.",
        "Instead, our studio employs a layered triad strategy: ambient ceiling illumination bounced off matte lime-washed ceilings, purposeful task lighting directed at reading chairs or kitchen work surfaces, and atmospheric accent sconces placed strictly below eye level.",
        "Color temperature calibration is essential. We specify 2700K warm fixtures with high color rendering indices (CRI 95+) for evening living spaces, creating a restorative amber glow that respects circadian sleep cycles.",
      ],
      keyTakeaways: [
        "Ditch uniform downlight grids in favor of perimeter ceiling coves and wall-grazing fixtures.",
        "Place reading sconces and mood lamps below seated eye level to cultivate warm intimacy.",
        "Standardize on 2700K high-CRI illumination for residential relaxation spaces.",
      ],
    },
    {
      id: "choosing-materials-last",
      slug: "choosing-materials-that-last",
      badge: "Materials",
      category: "MATERIALS",
      filterCategory: "materials-finishes",
      secondaryCategories: ["design-ideas"],
      date: "29 JUL 2026",
      readTime: "6 MIN READ",
      title: "Choosing Materials That Last: Plaster, Stone & Oak",
      author: "Priya Nair",
      authorRole: "Materiality & Finishes Director",
      image: blogMaterials,
      alt: "Minimalist stone vanity and hand-applied lime plaster alcove",
      description:
        "A studio guide to investing in tactile, raw surfaces that age with graceful patina rather than degrading.",
      readMoreText: "Read Article",
      content: [
        "In an era dominated by synthetic laminates and disposable micro-trends, true luxury is rooted in physical permanence. Materials extracted from the earth—tumbled limestone, hand-troweled lime plaster, and solid quarter-sawn white oak—possess an inherent longevity that manufactured substitutes can never emulate.",
        "Where artificial vinyl and veneers chip, peel, and become obsolete, authentic stone and raw timber embrace the passage of time. A slight ring on an unsealed travertine tabletop or the burnished edge of a brass cabinet pull tells a tactile story of living.",
        "When planning a renovation, allocating your material budget toward durable architectural surfaces rather than fleeting decorative novelties ensures your home remains grounded, graceful, and valuable for decades.",
      ],
      keyTakeaways: [
        "Invest in structural materials that can be sanded, re-oiled, or repolished rather than replaced.",
        "Embrace natural lime plaster for its breathable, mold-resistant, and acoustic-dampening qualities.",
        "Select unlacquered architectural hardware that patinas organically through human touch.",
      ],
    },
    {
      id: "designing-small-spaces",
      slug: "designing-small-spaces-without-compromising-comfort",
      badge: "Space Planning",
      category: "SPACE PLANNING",
      filterCategory: "space-planning",
      secondaryCategories: ["residential"],
      date: "24 JUL 2026",
      readTime: "4 MIN READ",
      title: "Designing Small Spaces Without Compromising Comfort",
      author: "Claire Thorne",
      authorRole: "Urban Residential Specialist",
      image: blogSmallSpaces,
      alt: "Sunlit compact loft apartment with custom floor-to-ceiling storage joinery",
      description:
        "Principles of vertical storage integration, sightline preservation, and multipurpose millwork for urban living.",
      readMoreText: "Read Article",
      content: [
        "Compact urban floor plans require an architectural mindset centered on cubic volume rather than square footage. When horizontal space is precious, drawing the eye upward through floor-to-ceiling millwork and uninterrupted sightlines expands spatial perception dramatically.",
        "Multipurpose millwork serves as the backbone of small space design. Custom credenzas that conceal pull-out home office workstations, banquette dining seating with integrated storage bays, and pocketing fluted glass partitions allow a single room to adapt effortlessly throughout the day.",
        "Consistency in floor finishes is another powerful optical tool. Running continuous wide-plank oak flooring across hallways, living quarters, and kitchens eliminates visual fragmentation, creating an expansive, cohesive spatial rhythm.",
      ],
      keyTakeaways: [
        "Design custom full-height millwork to capture vertical storage while visually elongating ceiling height.",
        "Use sliding acoustic or fluted glass doors instead of swinging doors to save precious clearance space.",
        "Maintain unified flooring materials throughout to eliminate visual barriers between adjoining zones.",
      ],
    },
    {
      id: "calm-functional-bedroom",
      slug: "creating-a-calm-and-functional-bedroom-sanctuary",
      badge: "Residential",
      category: "INTERIOR TRENDS",
      filterCategory: "interior-trends",
      secondaryCategories: ["residential"],
      date: "19 JUL 2026",
      readTime: "5 MIN READ",
      title: "Creating a Calm and Functional Bedroom Sanctuary",
      author: "Elena Rostova",
      authorRole: "Studio Principal Architect",
      image: blogBedroom,
      alt: "Serene architectural master bedroom with fluted wall paneling and ambient reading glow",
      description:
        "Balancing acoustic dampening, custom headboard millwork, and warm circadian lighting choreography.",
      readMoreText: "Read Article",
      content: [
        "The bedroom is the most intimate space within the home—an architectural sanctuary dedicated to restoration and quiet reflection. Designing a calm master suite requires deliberate attention to acoustic insulation, tactile softness, and the complete absence of visual clutter.",
        "We begin with acoustic architecture. Incorporating upholstered wall panels, heavyweight Belgian linen drapery, and plush wool area rugs eliminates flutter echoes and shields the space from external street resonance.",
        "Integrated headboard joinery eliminates the need for bulky detached nightstands. Concealed wireless charging surfaces, recessed directional brass reading lights with tactile knurled dimmers, and floating soft-close drawers keep the visual horizon pristine and tranquil.",
      ],
      keyTakeaways: [
        "Layer heavyweight natural textiles to soften acoustics and create a nurturing, cocooned atmosphere.",
        "Integrate bedside lighting controls within arm's reach to avoid harsh main fixture disruptions.",
        "Conceal electronic clutter and storage behind flush, handleless millwork panels.",
      ],
    },
    {
      id: "productive-commercial-spaces",
      slug: "designing-productive-commercial-spaces-for-tomorrow",
      badge: "Commercial",
      category: "COMMERCIAL",
      filterCategory: "commercial",
      secondaryCategories: ["space-planning"],
      date: "15 JUL 2026",
      readTime: "7 MIN READ",
      title: "Designing Productive Commercial Spaces for Tomorrow",
      author: "Julian Vance",
      authorRole: "Commercial Workspace Director",
      image: blogCommercial,
      alt: "Modern airy corporate collaborative workplace lounge with natural timber dividers",
      description:
        "How modern corporate headquarters balance private acoustic focus zones with collaborative spatial warmth.",
      readMoreText: "Read Article",
      content: [
        "The modern office is no longer a holding container for desks and computer monitors; it is a collaborative destination designed to foster high-level strategic alignment, cross-pollination, and deep cognitive focus.",
        "Successful workplace architecture is grounded in spatial agility. Rather than uniform cubicle fields or cavernous open plans, we introduce micro-neighborhoods: acoustic phone pods for confidential calls, collaborative soft-seating lounges bathed in natural daylight, and ergonomic quiet libraries dedicated to uninterrupted flow states.",
        "Biophilic architecture and tactile hospitality elements—warm timber screen dividers, living moss wall features, and tailored beverage bars—elevate employee well-being, transforming commercial facilities into inspiring hubs of creative productivity.",
      ],
      keyTakeaways: [
        "Design distinct spatial zones calibrated for either high collaboration or deep heads-down focus.",
        "Incorporate acoustic ceiling baffles and felt wall treatments to control sound spill in open areas.",
        "Bring residential warmth and tactile finishes into executive boardrooms and breakout lounges.",
      ],
    },
  ],

  // Masterclass Banner Card
  masterclass: {
    id: "project-masterclass-guide",
    slug: "how-to-plan-a-successful-interior-design-project",
    eyebrow: "PROJECT MASTERCLASS • 10 MIN READ",
    title: "How to Plan a Successful Interior Design Project",
    category: "MASTERCLASS",
    date: "10 JUL 2026",
    readTime: "10 MIN READ",
    author: "Elena Rostova & Design Team",
    authorRole: "Full Studio Masterclass",
    image: blogMasterclass,
    alt: "Architectural blueprints, material swatches, and drawing instruments on designer workbench",
    description:
      "From schematic vision and budget allocation to contractor coordination and white glove turnkey installation — an essential roadmap for homeowners.",
    readMoreText: "Read Comprehensive Guide",
    content: [
      "Embarking on a comprehensive interior architectural renovation is an exhilarating yet complex journey. Without a structured roadmap, homeowners frequently encounter budget inflation, uncoordinated trade delays, and compromised spatial outcomes.",
      "Phase One: Schematic Vision & Spatial Programming. Before discussing tile samples or paint swatches, we establish strict spatial flow diagrams, lifestyle ergonomics, and millimeter-precise dimensional layouts. Understanding how you move through your morning and evening dictates every future decision.",
      "Phase Two: Material Specifications & Tender Documentation. Ambiguity is the enemy of budget control. Our studio develops comprehensive tender packages detailing every joinery junction, plumbing rough-in, electrical schedule, and material finish. This ensures competitive, binding contractor bids with zero hidden surprises.",
      "Phase Three: On-Site Coordination & Turnkey Delivery. Construction demands relentless quality oversight. Our architects manage site milestones, resolve unexpected structural discoveries, and supervise final white-glove installation of furnishings, artwork, and tailored accessories.",
    ],
    keyTakeaways: [
      "Lock down comprehensive architectural drawings and specifications before commencing demolition.",
      "Establish a realistic 10-15% contingency reserve for unforeseen structural and plumbing discoveries.",
      "Work with an integrated design-led turnkey team to ensure singular accountability from concept to keys.",
    ],
  },

  // Studio Methodology Section
  methodology: {
    eyebrow: "Studio Methodology",
    title: "Creating Spaces That Feel Like Home",
    description:
      "Interior architecture is not merely about decorating an enclosure; it is an ongoing dialogue between human ergonomics, honest materiality, and natural diurnal illumination. Here we unpack our core technical principles.",
    pillars: [
      {
        id: "methodology-color",
        slug: "choosing-the-right-colours-for-your-interior-space",
        number: "01 / COLOR THEORY",
        title: "Choosing the Right Colours for Your Interior Space",
        category: "COLOR THEORY",
        date: "01 JUL 2026",
        readTime: "4 MIN READ",
        author: "Priya Nair",
        authorRole: "Color & Finishes Specialist",
        description:
          "Examining how tonal shifts, warm mineral bases, and natural lighting orientations transform spatial perception.",
        ctaText: "Explore Topic",
        content: [
          "Color is fundamentally a function of light. A paint swatch that radiates warmth under high-noon southern illumination can appear cool and clinical in a north-facing morning room.",
          "We construct mineral-based palettes that harmonize with the geographic orientation of each window aperture. By layering subtle shifts in tonal depth—soft ecru, chalky alabaster, and muted slate—rooms feel expansive, grounded, and emotionally balanced throughout changing seasons.",
        ],
        keyTakeaways: [
          "Always test paint swatches on site across morning, afternoon, and artificial night lighting.",
          "Use warm mineral bases rather than cold gray undertones to prevent sterile living environments.",
        ],
      },
      {
        id: "methodology-illumination",
        slug: "how-lighting-changes-the-mood-of-an-architectural-room",
        number: "02 / ILLUMINATION",
        title: "How Lighting Changes the Mood of an Architectural Room",
        category: "ILLUMINATION",
        date: "25 JUN 2026",
        readTime: "4 MIN READ",
        author: "James Sterling",
        authorRole: "Architectural Lighting Consultant",
        description:
          "Designing indirect lighting coves and warm 2700K fixtures to sculpt quiet evening calm after sunset.",
        ctaText: "Explore Topic",
        content: [
          "The emotional resonance of a room changes radically when the sun dips beneath the horizon. Where daylight illuminates everything uniformly, evening illumination should embrace mystery, shadow, and warm localized pockets of calm.",
          "Concealing LED strips inside crown reveals and underneath floating credenzas washes walls with soft reflected lumens, visually raising ceiling heights while creating a gentle, tranquil resting aura.",
        ],
        keyTakeaways: [
          "Use indirect architectural coves to reflect light off matte surfaces.",
          "Incorporate multi-scene dimming switches to transition effortlessly from cooking to entertaining.",
        ],
      },
      {
        id: "methodology-material",
        slug: "residential-interior-trends-longevity-over-novelty",
        number: "03 / MATERIAL CRAFT",
        title: "Residential Interior Trends: Longevity Over Novelty",
        category: "MATERIAL CRAFT",
        date: "18 JUN 2026",
        readTime: "5 MIN READ",
        author: "Marcus Vance",
        authorRole: "Master Craftsperson",
        description:
          "Why timeless craftsmanship and natural stone outlast short lived digital design micro trends.",
        ctaText: "Explore Topic",
        content: [
          "The design world is inundated with ephemeral internet trends that look captivating in a 10-second smartphone video but degrade quickly under real human use. Architectural integrity demands choosing finishes that will look as dignified thirty years from now as they do today.",
          "By prioritizing classical proportions, hand-chiseled masonry, and joinery crafted from certified sustainably harvested hardwoods, we build legacy residences that outlast commercial hype cycles.",
        ],
        keyTakeaways: [
          "Prioritize authentic natural substances that develop timeless patina over synthetic composites.",
          "Focus on classical architectural symmetry before layering decorative trends.",
        ],
      },
    ],
  },

  // Studio Practice Notes Section
  studioPractice: {
    eyebrow: "Studio Practice",
    title: "Creating Spaces That Feel Like Home",
    description:
      "Thoughtful observations and practical guidance from our interior design team.",
    notes: [
      {
        id: "note-wood-plaster",
        slug: "the-tactile-language-of-natural-wood-and-plaster",
        category: "MATERIALS & FINISHES",
        date: "12 JUN 2026",
        readTime: "4 MIN READ",
        title: "The Tactile Language of Natural Wood & Plaster",
        author: "Priya Nair",
        authorRole: "Studio Materials Lead",
        description:
          "Field notes from our workshop on pairing quarter sawn white oak with hand applied limewash surfaces.",
        readMoreText: "Read Studio Note",
        image: blogNoteWood,
        alt: "Craftsman hand-inspecting quarter sawn white oak timber grain and lime plaster texture",
        content: [
          "There is an unspoken sensory dialogue that occurs when raw timber meets artisanal plaster. In our custom millwork studio, we continually experiment with the micro-texture of hand-applied limewash set directly against wire-brushed European white oak.",
          "The subtle porosity of plaster diffuses daylight into soft gradient washes, while the linear grain of radial-cut oak provides rhythmic structural cadence. Together, they anchor rooms with peaceful, grounding tactility.",
        ],
        keyTakeaways: [
          "Pair matte plaster walls with open-grain oiled woods to enhance natural acoustic damping.",
          "Avoid synthetic polyurethane coatings in favor of organic microcrystalline wax finishes.",
        ],
      },
      {
        id: "note-historic-precision",
        slug: "harmonizing-historic-character-with-contemporary-precision",
        category: "RENOVATION & CRAFT",
        date: "05 JUN 2026",
        readTime: "5 MIN READ",
        title: "Harmonizing Historic Character With Contemporary Precision",
        author: "Elena Rostova",
        authorRole: "Studio Principal Architect",
        description:
          "Observations on respectful spatial interventions within classic architectural envelopes.",
        readMoreText: "Read Studio Note",
        image: blogNoteHistoric,
        alt: "Historic restored arched doorway transitioning seamlessly into contemporary kitchen joinery",
        content: [
          "Renovating historic buildings is a sacred balance between historical reverence and contemporary functional precision. Rather than mimicking old details with hollow replicas, we celebrate historical crown moldings and masonry while introducing crisp, millimeter-sharp contemporary millwork.",
          "This intentional contrast—honoring centuries of craftsmanship while inserting modern lighting and climate control—creates homes with extraordinary depth, narrative, and quiet architectural drama.",
        ],
        keyTakeaways: [
          "Preserve and restore original historic structural millwork wherever feasible.",
          "Introduce contemporary insertions as clean, distinct architectural volumes with clear shadow reveals.",
        ],
      },
    ],
  },

  // Newsletter Section
  newsletter: {
    eyebrow: "DESIGN IN YOUR INBOX",
    title: "Stay Inspired",
    description:
      "Receive occasional design ideas, project insights, and architectural inspiration directly from our studio. No spam, ever.",
    placeholder: "Your email address",
    buttonText: "Subscribe",
    successMessage: "Thank you for subscribing to our studio dispatches.",
  },

  // Global Bottom CTA (Matching Project Standard)
  cta: {
    eyebrow: "BEGIN YOUR PROJECT",
    title: "Let's Create a Space That Feels Like Yours",
    description:
      "Ready to discuss your space? Tell us about your project and our design team will help you take the next step.",
    primaryCta: {
      label: "Get a Free Consultation",
      href: "/contact",
      showArrow: true,
    },
    secondaryCta: {
      label: "Request a Quote",
      href: "/contact?type=quote",
      showArrow: true,
    },
  },
};

/**
 * Helper utility to find an article by slug across all published blog sections
 */
export function getArticleBySlug(slug) {
  if (!slug) return null;
  const target = String(slug).toLowerCase().trim();

  // 1. Check Featured Post
  if (blogPageContent.featuredPost.slug === target) {
    return blogPageContent.featuredPost;
  }

  // 2. Check Latest Posts
  const foundInLatest = blogPageContent.latestPosts.find(
    (post) => post.slug === target
  );
  if (foundInLatest) return foundInLatest;

  // 3. Check Masterclass
  if (blogPageContent.masterclass.slug === target) {
    return blogPageContent.masterclass;
  }

  // 4. Check Methodology Pillars
  const foundInMethodology = blogPageContent.methodology.pillars.find(
    (pillar) => pillar.slug === target
  );
  if (foundInMethodology) return foundInMethodology;

  // 5. Check Studio Practice Notes
  const foundInPractice = blogPageContent.studioPractice.notes.find(
    (note) => note.slug === target
  );
  if (foundInPractice) return foundInPractice;

  return null;
}

export default blogPageContent;
