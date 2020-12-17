import { AxisOrder } from '../enums';
import { Matrix4Array } from '../types';
import {
  convertQuaternionToMatrix4,
  convertVector3ToMatrix4,
} from '../convert';

import Matrix4 from '../primitives/Matrix4';
import Vector3 from '../primitives/Vector3';
import Quaternion from '../primitives/Quaternion';

export const createFromVec3 = (vec: Vector3) => (axisOrder: AxisOrder) => convertVector3ToMatrix4(vec, axisOrder);
export const createFromQuat = (quat: Quaternion) => () => convertQuaternionToMatrix4(quat);

export default function mat4(vec: Vector3, order: AxisOrder): Matrix4;
export default function mat4(quat: Quaternion): Matrix4;
export default function mat4(matrix: Matrix4Array): Matrix4;
export default function mat4(v: any, p1?: any): Matrix4 {
  if (v instanceof Vector3) return convertVector3ToMatrix4(v, p1);
  if (v instanceof Quaternion) return convertQuaternionToMatrix4(v);

  return new Matrix4(v);
}
