import { AxisOrder } from '../enums';
import {
  convertMatrix4ToQuaternion,
  convertVector3ToQuaternion,
} from '../convert';

import Quaternion from '../primitives/Quaternion';
import Vector3 from '../primitives/Vector3';
import Matrix4 from '../primitives/Matrix4';

export const createFromVec3 = (vec: Vector3) => (axisOrder: AxisOrder) => convertVector3ToQuaternion(vec, axisOrder);
export const createFromMat4 = (mat: Matrix4) => () => convertMatrix4ToQuaternion(mat);

export default function quat(vec: Vector3, order: AxisOrder): Quaternion;
export default function quat(mat: Matrix4): Quaternion;
export default function quat(x: number, y: number, z: number, w: number): Quaternion;
export default function quat(p0: any, p1?: any, p2?: any, p3?: any): Quaternion {
  if (p0 instanceof Vector3) return convertVector3ToQuaternion(p0, p1);
  if (p0 instanceof Matrix4) return convertMatrix4ToQuaternion(p0);

  return new Quaternion(p0, p1, p2, p3);
}
