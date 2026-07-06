const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Returns true if the user has requested reduced motion at the OS/browser
 * level. Respected across the app so we never fight the user's preference.
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia?.(REDUCED_MOTION_QUERY).matches ?? false;
}

/**
 * The floating background particles are pure CSS keyframe animations
 * (`animation: particleFloat`), which the browser already runs on the
 * compositor thread — no JS-driven per-frame work needed. This function
 * simply removes them from the DOM entirely when reduced motion is
 * requested, since `display: none` (set via CSS) still leaves inert
 * nodes around; removing them is a small additional courtesy for
 * lower-powered devices.
 */
export function initParticles(): void {
  if (!prefersReducedMotion()) return;

  const particles = document.getElementById('particles');
  particles?.remove();
}

/**
 * Watches for live changes to the reduced-motion preference (e.g. the
 * user toggles it in OS settings while the page is open) and re-applies
 * the particle cleanup accordingly.
 */
export function watchReducedMotionPreference(): void {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);

  const handleChange = (event: MediaQueryListEvent): void => {
    if (event.matches) {
      document.getElementById('particles')?.remove();
    }
  };

  mediaQuery.addEventListener('change', handleChange);
}
