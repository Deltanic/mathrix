import Vector2 from '../primitives/Vector2';
import Vector3 from '../primitives/Vector3';
import Vector4 from '../primitives/Vector4';
import core_emod from '../core/emod';

const fromVec2 = (vec: Vector2, m: Vector2 | number) => <any>null; /* TODO: Implement. */
const fromVec3 = (vec: Vector3, m: Vector3 | number) => <any>null; /* TODO: Implement. */
const fromVec4 = (vec: Vector4, m: Vector4 | number) => <any>null; /* TODO: Implement. */

export default function emod(n: Vector2, m: Vector2 | number): Vector2;
export default function emod(n: Vector3, m: Vector3 | number): Vector3;
export default function emod(n: Vector4, m: Vector4 | number): Vector4;
export default function emod(n: number, m: number): number;
export default function emod(n: any, m: any) {
  if (n instanceof Vector2) return fromVec2(n, m);
  if (n instanceof Vector3) return fromVec3(n, m);
  if (n instanceof Vector4) return fromVec4(n, m);
  return core_emod(n, m);
}
