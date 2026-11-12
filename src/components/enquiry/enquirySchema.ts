import { z } from 'zod';

export const PROJECT_TYPE_OPTIONS = [
  'Residential Construction',
  'Commercial Construction',
  'Interior Design',
  'Architectural Planning',
  'Renovation',
  'Land Development',
  'Other',
] as const;

export const PROPERTY_TYPE_OPTIONS = [
  'Independent Plot / Land',
  'Villa / Detached House',
  'Apartment / Penthouse',
  'Townhouse',
  'Commercial Office / Retail',
  'Hospitality / Studio Space',
  'Other Property Type',
] as const;

export const BUDGET_RANGE_OPTIONS = [
  'Under $75,000 (Demo Range)',
  '$75,000 – $150,000 (Demo Range)',
  '$150,000 – $350,000 (Demo Range)',
  '$350,000 – $750,000 (Demo Range)',
  '$750,000+ (Demo Range)',
  'To be discussed after consultation',
] as const;

export const START_TIME_OPTIONS = [
  'Immediately (Within 30 days)',
  '1 – 3 Months',
  '3 – 6 Months',
  '6+ Months (Planning Phase)',
] as const;

export const URGENCY_OPTIONS = [
  'Standard Planning Pace',
  'Priority / Time-Sensitive',
  'Exploratory / Early Feasibility',
] as const;

export const CONTACT_METHOD_OPTIONS = ['Phone Call', 'WhatsApp', 'Email'] as const;

export const enquiryFormSchema = z.object({
  projectType: z.enum(PROJECT_TYPE_OPTIONS, {
    required_error: 'Please select a project type.',
  }),
  location: z
    .string()
    .trim()
    .min(2, 'Please enter the project city or locality.'),
  propertyType: z
    .string()
    .trim()
    .min(2, 'Please select or specify the property type.'),
  approximateArea: z.string().trim().optional(),
  requirements: z
    .string()
    .trim()
    .min(10, 'Please share a brief description of your requirements (at least 10 characters).'),
  budgetRange: z
    .string()
    .trim()
    .min(1, 'Please select an estimated budget range.'),
  preferredStartTime: z
    .string()
    .trim()
    .min(1, 'Please select a preferred starting time.'),
  urgency: z
    .string()
    .trim()
    .min(1, 'Please select your project urgency.'),
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name.'),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone number.')
    .regex(/^[+\d\s()-]{7,20}$/, 'Please enter a valid phone number format.'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address.')
    .optional()
    .or(z.literal('')),
  preferredContactMethod: z.enum(CONTACT_METHOD_OPTIONS, {
    required_error: 'Please select a preferred contact method.',
  }),
});

export type EnquiryFormValues = z.infer<typeof enquiryFormSchema>;

export const STEP_FIELDS: Record<number, (keyof EnquiryFormValues)[]> = {
  0: ['projectType'],
  1: ['location', 'propertyType', 'approximateArea', 'requirements'],
  2: ['budgetRange', 'preferredStartTime', 'urgency'],
  3: ['fullName', 'phone', 'email', 'preferredContactMethod'],
};

