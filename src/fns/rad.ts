import Vector2 from '../primitives/Vector2';
import Vector3 from '../primitives/Vector3';
import Vector4 from '../primitives/Vector4';
import base_rad from '../base/rad';

const fromVec2 = (vec: Vector2) => new Vector2(
  base_rad(vec.x),
  base_rad(vec.y),
);

const fromVec3 = (vec: Vector3) => new Vector3(
  base_rad(vec.x),
  base_rad(vec.y),
  base_rad(vec.z),
);

const fromVec4 = (vec: Vector4) => new Vector4(
  base_rad(vec.x),
  base_rad(vec.y),
  base_rad(vec.z),
  base_rad(vec.w),
);

export default function rad(deg: Vector2): Vector2;
export default function rad(deg: Vector3): Vector3;
export default function rad(deg: Vector4): Vector4;
export default function rad(deg: number): number;
export default function rad(deg: any) {
  if (deg instanceof Vector2) return fromVec2(deg);
  if (deg instanceof Vector3) return fromVec3(deg);
  if (deg instanceof Vector4) return fromVec4(deg);

  return base_rad(deg);
}
