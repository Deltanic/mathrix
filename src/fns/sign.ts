import Vector2 from '../primitives/Vector2';
import Vector3 from '../primitives/Vector3';
import Vector4 from '../primitives/Vector4';
import core_sign from '../core/sign';

const fromVec2 = (vec: Vector2) => <any>null; /* TODO: Implement. */
const fromVec3 = (vec: Vector3) => <any>null; /* TODO: Implement. */
const fromVec4 = (vec: Vector4) => <any>null; /* TODO: Implement. */

export default function sign(x: Vector2): Vector2;
export default function sign(x: Vector3): Vector3;
export default function sign(x: Vector4): Vector4;
export default function sign(x: number): number;
export default function sign(x: any) {
  if (x instanceof Vector2) return fromVec2(x);
  if (x instanceof Vector3) return fromVec3(x);
  if (x instanceof Vector4) return fromVec4(x);
  return core_sign(x);
}
