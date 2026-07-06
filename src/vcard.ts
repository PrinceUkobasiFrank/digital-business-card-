import { CONTACT, VCARD_FILENAME } from './constants';
import type { ContactInfo } from './types';

/**
 * Builds a vCard 3.0 payload string from the given contact info.
 * Line endings use CRLF per the vCard spec.
 */
export function buildVCard(contact: ContactInfo): string {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${contact.fullName}`,
    `N:${contact.lastName};${contact.firstName};;;`,
    `ORG:${contact.organization}`,
    `TITLE:${contact.title}`,
    `TEL;TYPE=CELL:${contact.phone}`,
    `EMAIL;TYPE=WORK:${contact.email}`,
    `URL;TYPE=WORK:${contact.website}`,
    `URL;TYPE=PORTFOLIO:${contact.portfolio}`,
    `X-SOCIALPROFILE;TYPE=github:${contact.github}`,
    `NOTE:${contact.title} of ${contact.organization}`,
    'END:VCARD',
  ];

  return lines.join('\r\n');
}

/**
 * Triggers a browser download of the given vCard content as a .vcf file.
 * Cleans up the temporary object URL and anchor element afterward.
 */
export function downloadVCard(vCardContent: string, filename: string): void {
  const blob = new Blob([vCardContent], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);

  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

  URL.revokeObjectURL(url);
}

/**
 * Convenience helper: builds and downloads the vCard for the site's
 * canonical contact, using the configured filename.
 */
export function saveContact(): void {
  const vCard = buildVCard(CONTACT);
  downloadVCard(vCard, VCARD_FILENAME);
}
