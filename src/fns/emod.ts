import {
  ensureVec2,
  ensureVec3,
  ensureVec4,
} from '../helpers';

import Vector2 from '../primitives/Vector2';
import Vector3 from '../primitives/Vector3';
import Vector4 from '../primitives/Vector4';
import base_emod from '../base/emod';

const fromVec2 = (vec: Vector2, m: Vector2) => new Vector2(
  base_emod(vec.x, m.x),
  base_emod(vec.y, m.y),
);

const fromVec3 = (vec: Vector3, m: Vector3) => new Vector3(
  base_emod(vec.x, m.x),
  base_emod(vec.y, m.y),
  base_emod(vec.z, m.z),
);

const fromVec4 = (vec: Vector4, m: Vector4) => new Vector4(
  base_emod(vec.x, m.x),
  base_emod(vec.y, m.y),
  base_emod(vec.z, m.z),
  base_emod(vec.w, m.w),
);

export const createEmodVec2 = (vec: Vector2) => (m: Vector2 | number) => fromVec2(vec, ensureVec2(m));
export const createEmodVec3 = (vec: Vector3) => (m: Vector3 | number) => fromVec3(vec, ensureVec3(m));
export const createEmodVec4 = (vec: Vector4) => (m: Vector4 | number) => fromVec4(vec, ensureVec4(m));

export default function emod(n: Vector2, m: Vector2 | number): Vector2;
export default function emod(n: Vector3, m: Vector3 | number): Vector3;
export default function emod(n: Vector4, m: Vector4 | number): Vector4;
export default function emod(n: number, m: number): number;
export default function emod(n: any, m: any) {
  if (n instanceof Vector2) return fromVec2(n, ensureVec2(m));
  if (n instanceof Vector3) return fromVec3(n, ensureVec3(m));
  if (n instanceof Vector4) return fromVec4(n, ensureVec4(m));

  return base_emod(n, m);
}
