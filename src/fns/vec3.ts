import {
  convertMatrix4ToVector3,
  convertQuaternionToVector3,
} from '../convert';

import Vector3 from '../primitives/Vector3';
import Quaternion from '../primitives/Quaternion';
import Matrix4 from '../primitives/Matrix4';

export default function vec3(quat: Quaternion): Vector3;
export default function vec3(mat: Matrix4): Vector3;
export default function vec3(x: number, y: number, z: number): Vector3;
export default function vec3(p0: any, p1?: any, p2?: any): Vector3 {
  if (p0 instanceof Quaternion) return convertQuaternionToVector3(p0);
  if (p0 instanceof Matrix4) return convertMatrix4ToVector3(p0);

  return new Vector3(p0, p1, p2);
}
