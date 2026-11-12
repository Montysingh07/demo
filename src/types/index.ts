export type ProjectCategory =
  | 'All'
  | 'Residential'
  | 'Commercial'
  | 'Interior Design'
  | 'Renovation'
  | 'Concept Design';

export interface NavLinkItem {
  label: string;
  path: string;
}

export interface CompanyConfig {
  brandName: string;
  brandSubtext: string;
  tagline: string;
  description: string;
  isDemoNotice: string;
  contact: {
    phonePlaceholder: string;
    emailPlaceholder: string;
    addressLine1: string;
    addressLine2: string;
    workingHours: string;
    whatsappNumberPlaceholder: string;
    whatsappPrefillText: string;
    mapCoordinatesLabel: string;
  };
  social: {
    instagram: string;
    linkedin: string;
    pinterest: string;
    behance: string;
  };
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  keyFeatures: string[];
  scopeOfServices: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  location: string;
  statusLabel: string;
  areaLabel: string;
  shortSummary: string;
  description: string;
  mainImage: string;
  mainImageAlt: string;
  gallery: {
    url: string;
    alt: string;
    caption: string;
  }[];
  highlights: string[];
  deliverables: string[];
}

export interface WhyChooseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'ShieldCheck' | 'Compass' | 'Sparkles' | 'MessageSquare' | 'Layers';
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  isDemo: boolean;
  demoLabel: string;
  quote: string;
  authorPlaceholder: string;
  projectType: string;
  locationPlaceholder: string;
}

export type EnquiryProjectType =
  | 'Residential Construction'
  | 'Commercial Construction'
  | 'Interior Design'
  | 'Architectural Planning'
  | 'Renovation'
  | 'Land Development'
  | 'Other';

export interface EnquirySubmission {
  id: string;
  submittedAt: string;
  projectType: EnquiryProjectType;
  location: string;
  propertyType: string;
  approximateArea?: string;
  requirements: string;
  budgetRange: string;
  preferredStartTime: string;
  urgency: string;
  fullName: string;
  phone: string;
  email?: string;
  preferredContactMethod: 'Phone Call' | 'WhatsApp' | 'Email';
}

