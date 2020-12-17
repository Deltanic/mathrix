import Vector2 from '../primitives/Vector2';
import Vector3 from '../primitives/Vector3';
import Vector4 from '../primitives/Vector4';
import base_sign from '../base/sign';

const fromVec2 = (vec: Vector2) => new Vector2(
  base_sign(vec.x),
  base_sign(vec.y),
);

const fromVec3 = (vec: Vector3) => new Vector3(
  base_sign(vec.x),
  base_sign(vec.y),
  base_sign(vec.z),
);

const fromVec4 = (vec: Vector4) => new Vector4(
  base_sign(vec.x),
  base_sign(vec.y),
  base_sign(vec.z),
  base_sign(vec.w),
);

export const createSignVec2 = (vec: Vector2) => () => fromVec2(vec);
export const createSignVec3 = (vec: Vector3) => () => fromVec3(vec);
export const createSignVec4 = (vec: Vector4) => () => fromVec4(vec);

export default function sign(x: Vector2): Vector2;
export default function sign(x: Vector3): Vector3;
export default function sign(x: Vector4): Vector4;
export default function sign(x: number): number;
export default function sign(x: any) {
  if (x instanceof Vector2) return fromVec2(x);
  if (x instanceof Vector3) return fromVec3(x);
  if (x instanceof Vector4) return fromVec4(x);

  return base_sign(x);
}
