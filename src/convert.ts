import { AxisOrder } from './enums';

import Vector3 from './primitives/Vector3';
import Quaternion from './primitives/Quaternion';
import Matrix4 from './primitives/Matrix4';

// -----------------------------------------------------------------------------

export function convertVector3ToQuaternion(vec3: Vector3, axisOrder: AxisOrder) {
  return new Quaternion(1, 2, 3, 4);
}

export function convertVector3ToMatrix4(vec3: Vector3, axisOrder: AxisOrder) {
  return new Matrix4([
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]);
}

// -----------------------------------------------------------------------------

export function convertQuaternionToVector3(quat: Quaternion) {
  return new Vector3(1, 2, 3);
}

export function convertQuaternionToMatrix4(quat: Quaternion) {
  return new Matrix4([
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]);
}

// -----------------------------------------------------------------------------

export function convertMatrix4ToVector3(mat4: Matrix4) {
  return new Vector3(1, 2, 3);
}

export function convertMatrix4ToQuaternion(mat4: Matrix4) {
  return new Quaternion(1, 2, 3, 4);
}
