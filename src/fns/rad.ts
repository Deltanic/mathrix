import Vector2 from '../primitives/Vector2';
import Vector3 from '../primitives/Vector3';
import Vector4 from '../primitives/Vector4';
import core_rad from '../core/rad';

const fromVec2 = (vec: Vector2) => <any>null; /* TODO: Implement. */
const fromVec3 = (vec: Vector3) => <any>null; /* TODO: Implement. */
const fromVec4 = (vec: Vector4) => <any>null; /* TODO: Implement. */

export default function rad(deg: Vector2): Vector2;
export default function rad(deg: Vector3): Vector3;
export default function rad(deg: Vector4): Vector4;
export default function rad(deg: number): number;
export default function rad(deg: any): any {
  if (deg instanceof Vector2) return fromVec2(deg);
  if (deg instanceof Vector3) return fromVec3(deg);
  if (deg instanceof Vector4) return fromVec4(deg);
  return core_rad(deg);
}
