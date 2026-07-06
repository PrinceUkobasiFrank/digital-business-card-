import './style.css';

import { DOM_IDS } from './constants';
import { initImageFallbacks } from './imageFallback';
import { renderQRCode } from './qrcode';
import { showToast } from './toast';
import { saveContact } from './vcard';
import { initParticles, watchReducedMotionPreference } from './animations';

/**
 * Wires the "Save Contact" button to generate and download a vCard,
 * then confirm success with a toast notification.
 */
function initSaveContactButton(): void {
  const button = document.getElementById(DOM_IDS.saveContactButton);
  if (!button) return;

  button.addEventListener('click', () => {
    saveContact();
    showToast();
  });
}

/**
 * Application bootstrap: runs once the DOM is ready.
 */
function init(): void {
  initImageFallbacks();
  initParticles();
  watchReducedMotionPreference();
  initSaveContactButton();
  void renderQRCode();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
