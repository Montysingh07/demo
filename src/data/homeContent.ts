import type { ProcessStep, TestimonialItem, WhyChooseItem } from '../types';

export const HERO_CONTENT = {
  eyebrow: 'Architecture · Construction · Interior Design',
  heading: 'Building Your Vision. Designing Your Future.',
  description:
    'From initial architectural layouts and 3D visualisations to turnkey construction and bespoke interiors, we craft enduring spaces with clarity and precision.',
  primaryCta: 'Explore Our Projects',
  secondaryCta: 'Start Your Project',
  heroImage:
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
  heroImageAlt: 'Contemporary architectural residence with warm evening light and clean lines',
};

export const ABOUT_PREVIEW_CONTENT = {
  eyebrow: 'The Studio',
  heading: 'Architecture & build unified under one considered roof.',
  description:
    'Atelier Forma brings together architectural planning, interior design, and construction execution so every drawing translates faithfully into built reality. We focus on natural light, honest materials, and structured project coordination from day one.',
  image:
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
  imageAlt: 'Warm contemporary interior architecture with natural timber and travertine finishes',
  ctaLabel: 'Learn More About Us',
};

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: 'quality-execution',
    number: '01',
    title: 'Quality-Focused Execution',
    description:
      'Disciplined site supervision, verified material specifications, and stage-by-stage quality inspections ensure structural integrity and refined finishes.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'thoughtful-planning',
    number: '02',
    title: 'Thoughtful Architectural Planning',
    description:
      'Every floor plan is shaped around natural daylight, cross-ventilation, circulation clarity, and long-term spatial adaptability.',
    iconName: 'Compass',
  },
  {
    id: 'design-led',
    number: '03',
    title: 'Design-Led Approach',
    description:
      'Architecture, 3D visualisation, and interior detailing work in tandem so proportions, textures, and lighting feel cohesive.',
    iconName: 'Sparkles',
  },
  {
    id: 'transparent-comms',
    number: '04',
    title: 'Transparent Communication',
    description:
      'Clear scopes, documented BOQs, and structured milestone updates keep you informed at every stage without guesswork.',
    iconName: 'MessageSquare',
  },
  {
    id: 'project-coordination',
    number: '05',
    title: 'Professional Project Coordination',
    description:
      'Single-point coordination across structural engineers, MEP specialists, artisans, and site teams for predictable delivery.',
    iconName: 'Layers',
  },
];

export const OUR_PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Consultation',
    subtitle: 'Brief & Vision Alignment',
    description:
      'We discuss your goals, functional needs, aesthetic preferences, and preliminary budget parameters to establish a clear project brief.',
  },
  {
    stepNumber: '02',
    title: 'Site Visit',
    subtitle: 'Context & Feasibility Study',
    description:
      'Our team evaluates site dimensions, orientation, access, natural light, and existing structural conditions on location.',
  },
  {
    stepNumber: '03',
    title: 'Planning & Design',
    subtitle: 'Layouts, 3D & Materiality',
    description:
      'We develop 2D architectural plans, 3D visualisations, and curated interior material palettes for collaborative review.',
  },
  {
    stepNumber: '04',
    title: 'Estimation & Approval',
    subtitle: 'Scope, BOQ & Schedule',
    description:
      'Detailed bills of quantities, milestone timelines, and working drawings are finalised and approved prior to mobilisation.',
  },
  {
    stepNumber: '05',
    title: 'Construction',
    subtitle: 'Execution & Site Supervision',
    description:
      'Coordinated civil works, MEP installations, custom joinery, and finishes are executed with regular quality and progress checks.',
  },
  {
    stepNumber: '06',
    title: 'Handover',
    subtitle: 'Inspection & Walkthrough',
    description:
      'We conduct a thorough snag-list inspection, commission all systems, and hand over your completed space with documentation.',
  },
];

/**
 * Clearly identified demo testimonials for client presentation.
 * Replace with verified client testimonials before live launch.
 */
export const DEMO_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'demo-test-1',
    isDemo: true,
    demoLabel: 'Demo Testimonial · Sample Placeholder',
    quote:
      'Seeing the 3D exterior visualisations alongside the floor plans gave us complete confidence before construction began. Every material transition felt deliberate.',
    authorPlaceholder: 'Sample Client A — Residential Villa',
    projectType: 'Residential Construction & Interiors',
    locationPlaceholder: 'Demo Location',
  },
  {
    id: 'demo-test-2',
    isDemo: true,
    demoLabel: 'Demo Testimonial · Sample Placeholder',
    quote:
      'Having architecture, interior detailing, and site coordination managed by one studio eliminated the usual friction between drawings and on-site execution.',
    authorPlaceholder: 'Sample Client B — Commercial Studio',
    projectType: 'Commercial Fit-Out',
    locationPlaceholder: 'Demo Location',
  },
  {
    id: 'demo-test-3',
    isDemo: true,
    demoLabel: 'Demo Testimonial · Sample Placeholder',
    quote:
      'Our townhouse remodel opened up natural daylight we never thought possible. The weekly progress summaries kept decisions calm and transparent.',
    authorPlaceholder: 'Sample Client C — Home Renovation',
    projectType: 'Renovation & Remodelling',
    locationPlaceholder: 'Demo Location',
  },
  {
    id: 'demo-test-4',
    isDemo: true,
    demoLabel: 'Demo Testimonial · Sample Placeholder',
    quote:
      'From site feasibility to custom oak joinery, the attention to proportion and tactile finishes transformed how our family uses every room.',
    authorPlaceholder: 'Sample Client D — Bespoke Residence',
    projectType: 'Architectural Planning & Interiors',
    locationPlaceholder: 'Demo Location',
  },
];

