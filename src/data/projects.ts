import type { ProjectCategory, ProjectItem } from '../types';

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'All',
  'Residential',
  'Commercial',
  'Interior Design',
  'Renovation',
  'Concept Design',
];

/**
 * Six sample portfolio projects for demo presentation.
 * Locations and project details are editable demo placeholders.
 */
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-courtyard-pavilion',
    slug: 'the-courtyard-pavilion',
    title: 'The Courtyard Pavilion',
    category: 'Residential',
    location: 'Hillside Enclave · Demo Location',
    statusLabel: 'Sample Portfolio Case Study',
    areaLabel: '4,600 sq.ft (Demo Spec)',
    shortSummary:
      'A low-slung contemporary residence organised around a planted central courtyard, travertine walls, and deep cantilevered eaves.',
    description:
      'Designed to frame natural daylight and cross-ventilation, The Courtyard Pavilion separates private sleeping quarters from an expansive double-height living pavilion. Warm board-formed concrete, fluted oak, and honed limestone create a calm dialogue between architecture and landscape.',
    mainImage:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
    mainImageAlt: 'Contemporary courtyard residence with warm exterior lighting and pool',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
        alt: 'South facade overlooking the lap pool and courtyard terrace',
        caption: 'Primary elevation with cantilevered timber soffits',
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
        alt: 'Garden-facing living pavilion with full-height glazing',
        caption: 'Indoor-outdoor transition to the landscaped deck',
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
        alt: 'Minimalist dining and kitchen interior in warm oak',
        caption: 'Custom oak millwork and monolithic stone island',
      },
    ],
    highlights: [
      'Passive solar shading via 1.8m cantilevered roof overhangs',
      'Central planted courtyard bringing daylight to every corridor',
      'Turnkey architectural, structural, and interior coordination',
      'Natural lime plaster and locally quarried stone finishes',
    ],
    deliverables: [
      'Architectural Planning',
      'Turnkey Construction',
      'Bespoke Interior Design',
      'Landscape Integration',
    ],
  },
  {
    id: 'proj-meridian-atrium',
    slug: 'meridian-atelier-headquarters',
    title: 'Meridian Atelier Headquarters',
    category: 'Commercial',
    location: 'Central Business District · Demo Location',
    statusLabel: 'Sample Portfolio Case Study',
    areaLabel: '12,400 sq.ft (Demo Spec)',
    shortSummary:
      'A daylight-filled boutique commercial building featuring a sculptural concrete core, acoustic timber baffles, and flexible studio floors.',
    description:
      'Meridian Atelier Headquarters reimagines the modern workplace as a tactile, gallery-like environment. Full-height acoustic glazing maximises daylight while architectural louvres temper afternoon glare, supporting collaborative studios and quiet client suites alike.',
    mainImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
    mainImageAlt: 'Modern commercial building with clean glass and steel architectural grid',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
        alt: 'Exterior architectural glass facade of commercial building',
        caption: 'Curtain-wall facade with solar-control glazing',
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
        alt: 'Minimalist architectural office studio interior',
        caption: 'Open-plan studio floor with acoustic ceiling treatment',
      },
      {
        url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85',
        alt: 'Executive glass-partitioned conference suite',
        caption: 'Client presentation room with integrated AV',
      },
    ],
    highlights: [
      'Column-free structural span for adaptable workspace zoning',
      'Acoustic ceiling baffles & double-glazed curtain wall',
      'Energy-efficient HVAC zoning and daylight harvesting',
      'Dedicated double-height reception gallery',
    ],
    deliverables: [
      'Commercial Construction',
      'Facade Engineering',
      'MEP Coordination',
      'Workspace Interiors',
    ],
  },
  {
    id: 'proj-sandstone-residence',
    slug: 'sandstone-loft-interiors',
    title: 'Sandstone Loft Interiors',
    category: 'Interior Design',
    location: 'Arts Quarter · Demo Location',
    statusLabel: 'Sample Portfolio Case Study',
    areaLabel: '2,850 sq.ft (Demo Spec)',
    shortSummary:
      'Warm minimalist apartment interiors anchored by travertine plinths, curved plasterwork, and bespoke walnut joinery.',
    description:
      'Created for a calm urban sanctuary, Sandstone Loft Interiors strips back visual clutter in favour of honest textures. Hand-trowelled mineral walls, smoked walnut cabinetry, and concealed linear lighting create an understated, gallery-grade living experience.',
    mainImage:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
    mainImageAlt: 'Warm neutral living room interior with linen sofa and oak accents',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
        alt: 'Living lounge with bespoke oak shelving and soft natural light',
        caption: 'Primary lounge with mineral plaster wall finish',
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
        alt: 'Serene dining area with sculptural pendant lighting',
        caption: 'Dining zone with custom travertine table',
      },
      {
        url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
        alt: 'Warm minimalist bedroom suite with linen drapery',
        caption: 'Primary suite with integrated headboard joinery',
      },
    ],
    highlights: [
      'Bespoke fluted walnut and brushed brass cabinetry',
      'Seamless micro-cement and wide-plank oak flooring',
      'Dimmable 2700K architectural lighting scenes',
      'Curated soft furnishings and tactile bouclé upholstery',
    ],
    deliverables: [
      'Interior Architecture',
      'Custom Joinery Drawings',
      'Lighting Design',
      'Turnkey Styling',
    ],
  },
  {
    id: 'proj-heritage-townhouse',
    slug: 'olive-grove-townhouse-remodel',
    title: 'Olive Grove Townhouse Remodel',
    category: 'Renovation',
    location: 'Old Town Precinct · Demo Location',
    statusLabel: 'Sample Portfolio Case Study',
    areaLabel: '3,200 sq.ft (Demo Spec)',
    shortSummary:
      'Complete structural opening and contemporary interior transformation of a compartmentalised three-storey townhouse.',
    description:
      'By introducing a new steel-framed rear skylight and removing non-load-bearing partitions, we transformed a dark, segmented townhouse into a bright, flowing family home. Original masonry was restored and paired with contemporary terrazzo and warm oak.',
    mainImage:
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85',
    mainImageAlt: 'Renovated open-plan kitchen and dining space with marble island',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85',
        alt: 'Open-plan kitchen remodel with stone island',
        caption: 'Reconfigured ground floor kitchen & entertaining zone',
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
        alt: 'Bright renovated living area opening to courtyard',
        caption: 'New steel-framed glazing connecting to the garden',
      },
      {
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
        alt: 'Modern spa-inspired bathroom remodel with stone vanity',
        caption: 'Upper-level bath suite in honed travertine',
      },
    ],
    highlights: [
      'Structural steel portal framing to open the ground floor',
      'Full electrical, plumbing & underfloor heating renewal',
      'Skylight well bringing zenithal light to the stairwell',
      'Restored exterior brickwork with slim-profile glazing',
    ],
    deliverables: [
      'Structural Remodelling',
      'MEP Overhaul',
      'Kitchen & Bath Fit-Out',
      'Site Supervision',
    ],
  },
  {
    id: 'proj-horizon-cliff-villa',
    slug: 'horizon-ridge-concept-villa',
    title: 'Horizon Ridge Concept Villa',
    category: 'Concept Design',
    location: 'Coastal Ridge · Demo Location',
    statusLabel: '3D Architectural Visualisation',
    areaLabel: '5,800 sq.ft (Concept Spec)',
    shortSummary:
      'A speculative architectural concept and 3D visualisation study exploring terraced concrete volumes and panoramic ocean framing.',
    description:
      'Developed as a pre-construction architectural study, Horizon Ridge explores how stepped stone plinths can anchor a modern residence into a sloping coastal ridge. Full 3D lighting and material simulations allowed stakeholders to validate views and massing before site works.',
    mainImage:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
    mainImageAlt: '3D architectural visualisation of modern cantilevered glass and concrete villa',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
        alt: 'Dusk 3D exterior render showing warm interior glow',
        caption: 'Evening lighting study and infinity-edge terrace',
      },
      {
        url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',
        alt: 'Daylight 3D architectural render of pool and cantilevered deck',
        caption: 'Daylight shadow and material reflectance study',
      },
      {
        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
        alt: 'Architectural layout plans and elevation drawings',
        caption: 'Concept spatial zoning and structural grid',
      },
    ],
    highlights: [
      'Photorealistic dusk & midday sun-path simulations',
      'Terraced massing adapted to natural slope contours',
      '360-degree material palette & facade option studies',
      'Ready-to-develop schematic floor plans',
    ],
    deliverables: [
      'Concept Architecture',
      '3D Exterior Visualisation',
      'Sun-Path Study',
      'Schematic Floor Plans',
    ],
  },
  {
    id: 'proj-botanica-residences',
    slug: 'botanica-terrace-residences',
    title: 'Botanica Terrace Residences',
    category: 'Residential',
    location: 'Greenbelt Avenue · Demo Location',
    statusLabel: 'Sample Portfolio Case Study',
    areaLabel: '7,200 sq.ft (Demo Spec)',
    shortSummary:
      'Twin contemporary residences featuring screened terracotta brickwork, lush balcony planters, and double-height living volumes.',
    description:
      'Botanica Terrace Residences balances urban privacy with biophilic warmth. Perforated terracotta screens filter harsh afternoon sun while creating a distinctive architectural rhythm across the facade, complemented by generous planted terraces.',
    mainImage:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
    mainImageAlt: 'Contemporary luxury residence exterior with landscaped garden and pool',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
        alt: 'Front architectural view of contemporary home with manicured lawn',
        caption: 'Street-facing elevation with layered privacy screens',
      },
      {
        url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=85',
        alt: 'Bright double-height living room with natural timber ceiling',
        caption: 'Double-height family lounge with clerestory windows',
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
        alt: 'Minimalist kitchen and breakfast counter in natural stone',
        caption: 'Kitchen pavilion opening onto the rear garden',
      },
    ],
    highlights: [
      'Perforated terracotta brise-soleil for passive cooling',
      'Integrated rainwater harvesting & terrace irrigation',
      'Acoustic separation between twin residential wings',
      'Custom architectural concrete and teakwood joinery',
    ],
    deliverables: [
      'Site Planning',
      'Architectural Design',
      'Residential Construction',
      'Interior Fit-Out',
    ],
  },
];

