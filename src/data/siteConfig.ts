import type { CompanyConfig, NavLinkItem } from '../types';

/**
 * Editable company configuration.
 * Replace all placeholder values below with your client's real business details
 * before presenting or deploying to production.
 */
export const SITE_CONFIG: CompanyConfig = {
  brandName: 'Atelier Forma',
  brandSubtext: 'Architecture · Build · Interiors',
  tagline: 'Building Your Vision. Designing Your Future.',
  description:
    'A multidisciplinary architecture, construction, and interior design studio crafting thoughtful residential, commercial, and bespoke living spaces.',
  isDemoNotice:
    'Demo Presentation Mode: Sample portfolio data, placeholder contact details, and local enquiry storage are active.',
  contact: {
    phonePlaceholder: '+1 (555) 019-2834 [Demo Placeholder]',
    emailPlaceholder: 'studio@atelierforma-demo.example',
    addressLine1: '420 Meridian Design District, Suite 300',
    addressLine2: 'Demo City, State 00000 [Replace with Client Address]',
    workingHours: 'Monday – Saturday · 09:00 AM – 06:30 PM',
    whatsappNumberPlaceholder: '15550192834',
    whatsappPrefillText:
      'Hello, I would like to discuss a construction / interior design project.',
    mapCoordinatesLabel: 'Studio Location Placeholder · Replace with Google Maps Embed',
  },
  social: {
    instagram: '#instagram-placeholder',
    linkedin: '#linkedin-placeholder',
    pinterest: '#pinterest-placeholder',
    behance: '#behance-placeholder',
  },
};

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

