import Matrix4 from '../primitives/Matrix4';
import Vector3 from '../primitives/Vector3';
import Quaternion from '../primitives/Quaternion';
import { Matrix4Array, AxisOrder } from '../types';

const fromVec3 = (vec: Vector3, order = AxisOrder.XYZ) => <any>null; /* TODO: Implement. */
const fromQuat = (quat: Quaternion) => <any>null; /* TODO: Implement. */

export default function mat4(vec: Vector3, order: AxisOrder): Matrix4;
export default function mat4(quat: Quaternion): Matrix4;
export default function mat4(matrix: Matrix4Array): Matrix4;
export default function mat4(v: any, p1?: any) {
  if (v instanceof Vector3) return fromVec3(v, p1);
  if (v instanceof Quaternion) return fromQuat(v);

  return new Matrix4(v);
}
