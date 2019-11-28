import Vector2 from '../primitives/Vector2';
import Vector3 from '../primitives/Vector3';
import Vector4 from '../primitives/Vector4';
import core_clamp from '../core/clamp';

/* tslint:disable:max-line-length */
const fromVec2 = (vec: Vector2, min: Vector2 | number, max: Vector2 | number) => <any>null; /* TODO: Implement. */
const fromVec3 = (vec: Vector3, min: Vector3 | number, max: Vector3 | number) => <any>null; /* TODO: Implement. */
const fromVec4 = (vec: Vector4, min: Vector4 | number, max: Vector4 | number) => <any>null; /* TODO: Implement. */
/* tslint:enable:max-line-length */

export default function clamp(x: Vector2, min: Vector2 | number, max: Vector2 | number): Vector2;
export default function clamp(x: Vector3, min: Vector3 | number, max: Vector3 | number): Vector3;
export default function clamp(x: Vector4, min: Vector4 | number, max: Vector4 | number): Vector4;
export default function clamp(x: number, min: number, max: number): number;
export default function clamp(x: any, min: any, max: any) {
  if (x instanceof Vector2) return fromVec2(x, min, max);
  if (x instanceof Vector3) return fromVec3(x, min, max);
  if (x instanceof Vector4) return fromVec4(x, min, max);
  return core_clamp(x, min, max);
}
