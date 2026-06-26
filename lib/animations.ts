export const EASING = {
  out: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  in: 'cubic-bezier(0.4, 0.0, 1, 1)',
  inOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

export const DURATION = {
  micro: 150,
  fast: 200,
  base: 300,
  slow: 500,
} as const;

export function fadeIn(el: Element, delay = 0): Animation {
  return el.animate(
    [
      { opacity: 0, transform: 'translateY(16px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
    { duration: DURATION.slow, delay, fill: 'both', easing: EASING.out }
  );
}

export function scaleIn(el: Element, delay = 0): Animation {
  return el.animate(
    [
      { opacity: 0, transform: 'scale(0.92)' },
      { opacity: 1, transform: 'scale(1)' },
    ],
    { duration: DURATION.slow, delay, fill: 'both', easing: EASING.spring }
  );
}
