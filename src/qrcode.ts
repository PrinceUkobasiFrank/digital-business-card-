import QRCode from 'qrcode';
import { CARD_URL, DOM_IDS, QR_CODE_SIZE, QR_COLORS } from './constants';

/**
 * Renders the card's QR code into the `#qr` container as a canvas
 * element, linking to the canonical public card URL.
 */
export async function renderQRCode(): Promise<void> {
  const container = document.getElementById(DOM_IDS.qrContainer);
  if (!container) return;

  const canvas = document.createElement('canvas');
  container.appendChild(canvas);

  try {
    await QRCode.toCanvas(canvas, CARD_URL, {
      width: QR_CODE_SIZE,
      margin: 0,
      color: {
        dark: QR_COLORS.dark,
        light: QR_COLORS.light,
      },
      errorCorrectionLevel: 'H',
    });
  } catch (error) {
    console.error('Failed to render QR code:', error);
    container.remove();
  }
}
