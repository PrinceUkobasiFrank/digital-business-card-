import { DOM_IDS, TOAST_DURATION_MS } from './constants';
import type { ToastOptions } from './types';

let hideTimeoutId: number | undefined;

/**
 * Shows the toast notification with the given message, then hides it
 * again automatically after `durationMs`. Safe to call repeatedly;
 * a new call resets any pending hide timer.
 */
export function showToast({ durationMs = TOAST_DURATION_MS }: ToastOptions = {}): void {
  const toast = document.getElementById(DOM_IDS.toast);
  if (!toast) return;

  toast.classList.add('show');

  if (hideTimeoutId !== undefined) {
    window.clearTimeout(hideTimeoutId);
  }

  hideTimeoutId = window.setTimeout(() => {
    toast.classList.remove('show');
    hideTimeoutId = undefined;
  }, durationMs);
}
