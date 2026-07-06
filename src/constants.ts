import type { ContactInfo, ImageFallbackTarget } from './types';

/** Canonical contact information used for the vCard export. */
export const CONTACT: ContactInfo = {
  firstName: 'Prince',
  lastName: 'Frank',
  fullName: 'Prince Ukobasi Frank',
  organization: 'PR3NC2 Technologies',
  title: 'Founder & CEO',
  phone: '+2349015003692',
  email: 'hello@pr3nc2.com.ng',
  website: 'https://pr3nc2.com.ng',
  portfolio: 'https://pfrank.pr3nc2.com.ng',
  github: 'https://github.com/PrinceUkobasiFrank',
};

/** Public URL this card is deployed at — used for the QR code payload. */
export const CARD_URL = 'https://pfrank.pr3nc2.com.ng/card';

/** Filename used when the vCard (.vcf) file is downloaded. */
export const VCARD_FILENAME = 'Prince_Ukobasi_Frank.vcf';

/** How long the "Contact saved" toast stays visible, in milliseconds. */
export const TOAST_DURATION_MS = 2500;

/** Pixel dimensions of the rendered QR code. */
export const QR_CODE_SIZE = 64;

/** QR code colors, matching the card's obsidian/white palette. */
export const QR_COLORS = {
  dark: '#0a0a0f',
  light: '#ffffff',
} as const;

/** DOM element ids used throughout the app. */
export const DOM_IDS = {
  toast: 'toast',
  qrContainer: 'qr',
  saveContactButton: 'save-contact-btn',
} as const;

/** Image + fallback pairs that need graceful error handling. */
export const IMAGE_FALLBACKS: readonly ImageFallbackTarget[] = [
  { imageId: 'logo-top-img', fallbackId: 'logo-top-fallback' },
  { imageId: 'profile-img', fallbackId: 'profile-fallback' },
  { imageId: 'company-logo-img', fallbackId: 'company-logo-fallback' },
];
