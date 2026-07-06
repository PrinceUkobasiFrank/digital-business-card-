import { IMAGE_FALLBACKS } from './constants';
import type { ImageFallbackTarget } from './types';

/**
 * Wires up a single image so that, if it fails to load (missing asset,
 * network error, etc.), the image is hidden and a text/icon fallback
 * element is shown in its place instead.
 */
function attachFallback({ imageId, fallbackId }: ImageFallbackTarget): void {
  const img = document.getElementById(imageId) as HTMLImageElement | null;
  const fallback = document.getElementById(fallbackId);

  if (!img || !fallback) return;

  img.addEventListener(
    'error',
    () => {
      img.style.display = 'none';
      fallback.style.display = 'flex';
    },
    { once: true },
  );
}

/**
 * Initializes graceful image-fallback handling for every configured
 * image on the page. Call once on startup.
 */
export function initImageFallbacks(): void {
  for (const target of IMAGE_FALLBACKS) {
    attachFallback(target);
  }
}
