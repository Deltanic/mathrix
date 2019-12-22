import Quaternion from '../primitives/Quaternion';
import Vector3 from '../primitives/Vector3';
import Matrix4 from '../primitives/Matrix4';
import { AxisOrder } from '../types';

const fromVec3 = (vec: Vector3, order = AxisOrder.XYZ) => <any>null; /* TODO: Implement. */
const fromMat4 = (mat: Matrix4) => <any>null; /* TODO: Implement. */

export default function quat(vec: Vector3, order: AxisOrder): Quaternion;
export default function quat(mat: Matrix4): Quaternion;
export default function quat(x: number, y: number, z: number, w: number): Quaternion;
export default function quat(p0: any, p1?: any, p2?: any, p3?: any) {
  if (p0 instanceof Vector3) return fromVec3(p0, p1);
  if (p0 instanceof Matrix4) return fromMat4(p0);

  return new Quaternion(p0, p1, p2, p3);
}
