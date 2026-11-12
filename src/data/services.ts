import type { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'residential-construction',
    slug: 'residential-construction',
    title: 'Residential Construction',
    shortTitle: 'Residential Build',
    categoryLabel: '01 · Build',
    shortDescription:
      'Custom villas, contemporary family homes, and turnkey residential builds engineered for structural longevity and natural light.',
    fullDescription:
      'From foundation excavation to final architectural finishes, we execute bespoke residential builds with disciplined site supervision, material transparency, and seamless coordination between structural engineers and interior artisans.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Modern two-storey residential villa with warm timber and stone facade',
    keyFeatures: [
      'Turnkey structural & finishing execution',
      'Curated material sourcing & quality checks',
      'Climate-responsive orientation & glazing',
      'Milestone-linked progress reporting',
    ],
    scopeOfServices: [
      'Site clearing, excavation & RCC structural framework',
      'Masonry, waterproofing & thermal insulation',
      'Electrical, plumbing & HVAC rough-ins and commissioning',
      'Custom millwork, stone cladding, flooring & exterior landscaping',
    ],
  },
  {
    id: 'commercial-construction',
    slug: 'commercial-construction',
    title: 'Commercial Construction',
    shortTitle: 'Commercial Build',
    categoryLabel: '02 · Build',
    shortDescription:
      'Boutique offices, hospitality spaces, and retail environments designed to elevate brand presence and operational flow.',
    fullDescription:
      'We deliver commercial spaces that balance architectural character with functional efficiency, code compliance, and predictable timelines for growing businesses and hospitality concepts.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Contemporary commercial building facade with architectural glass and steel',
    keyFeatures: [
      'Code-compliant structural & fire safety planning',
      'Acoustic & lighting engineering for workspaces',
      'Efficient floor-plate utilisation',
      'Phased scheduling to minimise business downtime',
    ],
    scopeOfServices: [
      'Core & shell commercial construction',
      'Facade glazing, curtain walls & architectural cladding',
      'MEP systems, data infrastructure & backup power integration',
      'Reception, boardroom, and retail fit-out execution',
    ],
  },
  {
    id: 'architectural-planning',
    slug: 'architectural-planning',
    title: 'Architectural Planning & Layouts',
    shortTitle: 'Architectural Planning',
    categoryLabel: '03 · Architecture',
    shortDescription:
      'Thoughtful spatial zoning, circulation clarity, and technical working drawings tailored to your site and lifestyle.',
    fullDescription:
      'Great architecture begins on paper. We translate your brief, site topography, sunlight path, and ventilation patterns into clear floor plans, elevations, and build-ready technical documentation.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Architectural blueprints, scale drawings, and drafting tools on a studio table',
    keyFeatures: [
      'Site-specific solar & wind orientation study',
      'Optimised spatial flow and natural daylighting',
      'Detailed municipal & structural working drawings',
      'Iterative concept-to-blueprint refinement',
    ],
    scopeOfServices: [
      'Concept massing & spatial zoning diagrams',
      '2D architectural floor plans, sections & elevations',
      'Structural coordination & MEP layout drawings',
      'Door, window & material specification schedules',
    ],
  },
  {
    id: 'interior-design',
    slug: 'interior-design',
    title: 'Interior Design',
    shortTitle: 'Interior Design',
    categoryLabel: '04 · Interiors',
    shortDescription:
      'Warm, tactile, and timeless interiors combining bespoke joinery, natural stone, curated lighting, and calm palettes.',
    fullDescription:
      'Our interior design practice crafts cohesive atmospheres where every surface, fixture, and piece of custom furniture feels intentional—balancing aesthetic restraint with everyday comfort.',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Warm minimalist luxury living room interior with natural oak and neutral sofa',
    keyFeatures: [
      'Bespoke furniture, kitchen & wardrobe detailing',
      'Layered ambient, task & accent lighting design',
      'Natural material & textile palette curation',
      'End-to-end styling & installation oversight',
    ],
    scopeOfServices: [
      'Mood boards, material sample boxes & colour direction',
      'False ceiling, lighting & electrical point layouts',
      'Custom joinery, cabinetry & stone fabrication drawings',
      'Fixture, hardware, soft furnishing & art curation',
    ],
  },
  {
    id: '3d-visualisation',
    slug: '3d-visualisation',
    title: '2D & 3D Architectural Visualisation',
    shortTitle: '2D & 3D Visualisation',
    categoryLabel: '05 · Visualisation',
    shortDescription:
      'Photorealistic exterior renders, interior walkthroughs, and material studies so you can experience every detail before build.',
    fullDescription:
      'Eliminate guesswork prior to breaking ground. Our 3D visualisation studio produces high-fidelity daylight studies, material comparisons, and spatial renders that bring unbuilt concepts to life.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Photorealistic modern architectural exterior 3D visualisation at dusk',
    keyFeatures: [
      'Photorealistic exterior & interior still renders',
      'Daylight, dusk & artificial lighting simulations',
      'Material & facade option comparisons',
      'Clear 2D furniture & presentation plans',
    ],
    scopeOfServices: [
      'Detailed 3D architectural modelling from CAD/BIM',
      'Texturing, bespoke lighting & landscaping staging',
      'Multiple camera angles for key living and facade zones',
      'High-resolution presentation decks for client review',
    ],
  },
  {
    id: 'land-development',
    slug: 'land-development',
    title: 'Land Development & Site Planning',
    shortTitle: 'Land & Site Planning',
    categoryLabel: '06 · Planning',
    shortDescription:
      'Strategic masterplanning, plot subdivision, grading concepts, and infrastructure integration for residential & mixed-use land.',
    fullDescription:
      'We evaluate terrain, access roads, drainage, and green buffers to unlock the full architectural and commercial potential of raw land parcels with sustainable site planning.',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Active land development and structural construction site with cranes at golden hour',
    keyFeatures: [
      'Topographic & site feasibility evaluation',
      'Internal road, utility & drainage layout planning',
      'Green-belt & open-space integration',
      'Phased development masterplans',
    ],
    scopeOfServices: [
      'Site analysis & boundary/setback study',
      'Plot layout, access circulation & parking zoning',
      'Stormwater, grading & landscape corridor planning',
      'Infrastructure & phased buildability roadmap',
    ],
  },
  {
    id: 'renovation-remodelling',
    slug: 'renovation-remodelling',
    title: 'Renovation & Remodelling',
    shortTitle: 'Renovation',
    categoryLabel: '07 · Transform',
    shortDescription:
      'Sensitive structural upgrades, spatial reconfigurations, and modern interior transformations for existing homes and offices.',
    fullDescription:
      'Whether opening up compartmentalised floor plans or refreshing an ageing facade, we reimagine existing structures while respecting their structural integrity and character.',
    image:
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Renovated open-plan kitchen and dining space with warm marble and wood',
    keyFeatures: [
      'Structural assessment before wall modifications',
      'Seamless integration of new MEP & smart systems',
      'Minimal disruption & clean site protocols',
      'Facade modernisation & interior uplift',
    ],
    scopeOfServices: [
      'As-built measurement & structural feasibility check',
      'Selective demolition & structural reinforcement',
      'Layout reconfiguration, flooring & ceiling renewal',
      'Kitchen, bath, lighting & facade upgrades',
    ],
  },
  {
    id: 'project-management',
    slug: 'project-management',
    title: 'Construction Project Management',
    shortTitle: 'Project Management',
    categoryLabel: '08 · Coordination',
    shortDescription:
      'Single-point accountability covering budgeting, contractor coordination, site inspections, and schedule control.',
    fullDescription:
      'Complex builds demand disciplined coordination. We act as your dedicated representative on site—aligning architects, structural consultants, vendors, and contractors to protect quality, cost, and timeline.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Architect and site engineer reviewing construction drawings on site',
    keyFeatures: [
      'Transparent BOQ & cost-tracking workflows',
      'Vendor vetting & procurement scheduling',
      'Regular site quality & safety audits',
      'Clear weekly client progress summaries',
    ],
    scopeOfServices: [
      'Project budgeting, BOQ preparation & tender review',
      'Master construction scheduling & critical-path tracking',
      'Quality assurance checklists at every build stage',
      'Snag-list resolution & structured project handover',
    ],
  },
];

