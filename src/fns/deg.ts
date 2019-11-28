import Vector2 from '../primitives/Vector2';
import Vector3 from '../primitives/Vector3';
import Vector4 from '../primitives/Vector4';
import core_deg from '../core/deg';

const fromVec2 = (vec: Vector2) => <any>null; /* TODO: Implement. */
const fromVec3 = (vec: Vector3) => <any>null; /* TODO: Implement. */
const fromVec4 = (vec: Vector4) => <any>null; /* TODO: Implement. */

export default function deg(rad: Vector2): Vector2;
export default function deg(rad: Vector3): Vector3;
export default function deg(rad: Vector4): Vector4;
export default function deg(rad: number): number;
export default function deg(rad: any) {
  if (rad instanceof Vector2) return fromVec2(rad);
  if (rad instanceof Vector3) return fromVec3(rad);
  if (rad instanceof Vector4) return fromVec4(rad);
  return core_deg(rad);
}
