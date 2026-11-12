import type { EnquirySubmission } from '../types';

const ENQUIRY_STORAGE_KEY = 'atelier_forma_demo_enquiries';

export function getSavedEnquiries(): EnquirySubmission[] {
  try {
    const raw = window.localStorage.getItem(ENQUIRY_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveDemoEnquiry(
  payload: Omit<EnquirySubmission, 'id' | 'submittedAt'>
): EnquirySubmission {
  const existing = getSavedEnquiries();
  const newEntry: EnquirySubmission = {
    ...payload,
    id: `DEMO-${Date.now().toString(36).toUpperCase()}`,
    submittedAt: new Date().toISOString(),
  };

  try {
    window.localStorage.setItem(
      ENQUIRY_STORAGE_KEY,
      JSON.stringify([newEntry, ...existing])
    );
  } catch {
    // Ignore storage quota errors in restricted browser modes
  }

  return newEntry;
}

export function clearSavedEnquiries(): void {
  try {
    window.localStorage.removeItem(ENQUIRY_STORAGE_KEY);
  } catch {
    // Ignore errors
  }
}

