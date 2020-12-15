import {
  ensureVec2,
  ensureVec3,
  ensureVec4,
} from '../helpers';

import Vector2 from '../primitives/Vector2';
import Vector3 from '../primitives/Vector3';
import Vector4 from '../primitives/Vector4';
import base_clamp from '../base/clamp';

const fromVec2 = (vec: Vector2, min: Vector2, max: Vector2) => new Vector2(
  base_clamp(vec.x, min.x, max.x),
  base_clamp(vec.y, min.y, max.y),
);

const fromVec3 = (vec: Vector3, min: Vector3, max: Vector3) => new Vector3(
  base_clamp(vec.x, min.x, max.x),
  base_clamp(vec.y, min.y, max.y),
  base_clamp(vec.z, min.z, max.z),
);

const fromVec4 = (vec: Vector4, min: Vector4, max: Vector4) => new Vector4(
  base_clamp(vec.x, min.x, max.x),
  base_clamp(vec.y, min.y, max.y),
  base_clamp(vec.z, min.z, max.z),
  base_clamp(vec.w, min.w, max.w),
);

export default function clamp(x: Vector2, min: Vector2 | number, max: Vector2 | number): Vector2;
export default function clamp(x: Vector3, min: Vector3 | number, max: Vector3 | number): Vector3;
export default function clamp(x: Vector4, min: Vector4 | number, max: Vector4 | number): Vector4;
export default function clamp(x: number, min: number, max: number): number;
export default function clamp(x: any, min: any, max: any) {
  if (x instanceof Vector2) return fromVec2(x, ensureVec2(min), ensureVec2(max));
  if (x instanceof Vector3) return fromVec3(x, ensureVec3(min), ensureVec3(max));
  if (x instanceof Vector4) return fromVec4(x, ensureVec4(min), ensureVec4(max));

  return base_clamp(x, min, max);
}
