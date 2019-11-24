export function rad(deg: number) {
  return deg * (Math.PI / 180);
}

export function deg(rad: number) {
  return rad * (180 / Math.PI);
}

// euclideanModulo
export function emod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export function sign(x: number) {
  return (x < 0) ? -1 : (x > 0) ? 1 : +x;
}

export function clamp(x: number, min: number, max: number) {
  return Math.min(Math.max(x, min), max);
}
