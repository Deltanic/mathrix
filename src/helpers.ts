import Vector2 from './primitives/Vector2';
import Vector3 from './primitives/Vector3';
import Vector4 from './primitives/Vector4';
import Matrix4 from './primitives/Matrix4';
import { Matrix4Array } from './types';

export const createMatrix4Array = (x: number): Matrix4Array => ([
  [x, x, x, x],
  [x, x, x, x],
  [x, x, x, x],
  [x, x, x, x],
]);


export const ensureVec2 = (x: Vector2 | number) => x instanceof Vector2 ? x : new Vector2(x, x);
export const ensureVec3 = (x: Vector3 | number) => x instanceof Vector3 ? x : new Vector3(x, x, x);
export const ensureVec4 = (x: Vector4 | number) => x instanceof Vector4 ? x : new Vector4(x, x, x, x);
export const ensureMat4 = (x: Matrix4 | number) => x instanceof Matrix4 ? x : new Matrix4(createMatrix4Array(x));

export const stringify = (className: string, data: any) => {};
