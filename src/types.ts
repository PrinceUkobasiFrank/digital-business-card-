/**
 * Contact details for vCard generation.
 */
export interface ContactInfo {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullName: string;
  readonly organization: string;
  readonly title: string;
  readonly phone: string;
  readonly email: string;
  readonly website: string;
  readonly portfolio: string;
  readonly github: string;
}

/**
 * Configuration for an image element that has a text/icon fallback
 * when the source image fails to load (e.g. asset not yet uploaded).
 */
export interface ImageFallbackTarget {
  readonly imageId: string;
  readonly fallbackId: string;
}

/**
 * Options for the toast notification.
 */
export interface ToastOptions {
  readonly message?: string;
  readonly durationMs?: number;
}
