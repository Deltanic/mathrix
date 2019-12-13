import Quaternion from './Quaternion';
import Matrix4 from './Matrix4';
import rad from '../core/rad';
import { UnsupportedAxisError } from '../errors';
import { AxisOrder, Matrix4Array } from '../types';

export default class Vector3 {
  public x: number;
  public y: number;
  public z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  neg() {
    return new Vector3(-this.x, -this.y, -this.z);
  }

  add(v: Vector3 | number) {
    return v instanceof Vector3
      ? new Vector3(this.x + v.x, this.y + v.y, this.z + v.z)
      : new Vector3(this.x + v, this.y + v, this.z + v);
  }

  sub(v: Vector3 | number) {
    return v instanceof Vector3
      ? new Vector3(this.x - v.x, this.y - v.y, this.z - v.z)
      : new Vector3(this.x - v, this.y - v, this.z - v);
  }

  mul(v: Vector3 | number) {
    return v instanceof Vector3
      ? new Vector3(this.x * v.x, this.y * v.y, this.z * v.z)
      : new Vector3(this.x * v, this.y * v, this.z * v);
  }

  div(v: Vector3 | number) {
    return v instanceof Vector3
      ? new Vector3(this.x / v.x, this.y / v.y, this.z / v.z)
      : new Vector3(this.x / v, this.y / v, this.z / v);
  }

  pow(v: Vector3 | number) {
    return v instanceof Vector3
      ? new Vector3(this.x ^ v.x, this.y ^ v.y, this.z ^ v.z)
      : new Vector3(this.x ^ v, this.y ^ v, this.z ^ v);
  }

  dot(v: Vector3) {
    return (
      this.x * v.x +
      this.y * v.y +
      this.z * v.z
    );
  }

  eq(v: Vector3, epsilon = 0) {
    return (
      Math.abs(this.x - v.x) <= epsilon &&
      Math.abs(this.y - v.y) <= epsilon &&
      Math.abs(this.z - v.z) <= epsilon
    );
  }

  toQuaternion(order = AxisOrder.XYZ) {
    const radX = rad(this.x) / 2;
    const radY = rad(this.y) / 2;
    const radZ = rad(this.z) / 2;

    const sinX = Math.sin(radX);
    const sinY = Math.sin(radY);
    const sinZ = Math.sin(radZ);

    const cosX = Math.cos(radX);
    const cosY = Math.cos(radY);
    const cosZ = Math.cos(radZ);

    switch (order) {
      case AxisOrder.XYZ: {
        const x = sinX * cosY * cosZ + cosX * sinY * sinZ;
        const y = cosX * sinY * cosZ - sinX * cosY * sinZ;
        const z = cosX * cosY * sinZ + sinX * sinY * cosZ;
        const w = cosX * cosY * cosZ - sinX * sinY * sinZ;

        return new Quaternion(x, y, z, w);
      }

      case AxisOrder.YXZ: {
        const x = sinX * cosY * cosZ + cosX * sinY * sinZ;
        const y = cosX * sinY * cosZ - sinX * cosY * sinZ;
        const z = cosX * cosY * sinZ - sinX * sinY * cosZ;
        const w = cosX * cosY * cosZ + sinX * sinY * sinZ;

        return new Quaternion(x, y, z, w);
      }

      case AxisOrder.ZXY: {
        const x = sinX * cosY * cosZ - cosX * sinY * sinZ;
        const y = cosX * sinY * cosZ + sinX * cosY * sinZ;
        const z = cosX * cosY * sinZ + sinX * sinY * cosZ;
        const w = cosX * cosY * cosZ - sinX * sinY * sinZ;

        return new Quaternion(x, y, z, w);
      }

      case AxisOrder.ZYX: {
        const x = sinX * cosY * cosZ - cosX * sinY * sinZ;
        const y = cosX * sinY * cosZ + sinX * cosY * sinZ;
        const z = cosX * cosY * sinZ - sinX * sinY * cosZ;
        const w = cosX * cosY * cosZ + sinX * sinY * sinZ;

        return new Quaternion(x, y, z, w);
      }

      case AxisOrder.YZX: {
        const x = sinX * cosY * cosZ + cosX * sinY * sinZ;
        const y = cosX * sinY * cosZ + sinX * cosY * sinZ;
        const z = cosX * cosY * sinZ - sinX * sinY * cosZ;
        const w = cosX * cosY * cosZ - sinX * sinY * sinZ;

        return new Quaternion(x, y, z, w);
      }

      case AxisOrder.XZY: {
        const x = sinX * cosY * cosZ - cosX * sinY * sinZ;
        const y = cosX * sinY * cosZ - sinX * cosY * sinZ;
        const z = cosX * cosY * sinZ + sinX * sinY * cosZ;
        const w = cosX * cosY * cosZ + sinX * sinY * sinZ;

        return new Quaternion(x, y, z, w);
      }

      default:
        throw new UnsupportedAxisError(order);
    }
  }

  toMatrix(order: string = AxisOrder.XYZ) {
    const radX = rad(this.x);
    const radY = rad(this.y);
    const radZ = rad(this.z);

    const sinX = Math.sin(radX);
    const sinY = Math.sin(radY);
    const sinZ = Math.sin(radZ);

    const cosX = Math.cos(radX);
    const cosY = Math.cos(radY);
    const cosZ = Math.cos(radZ);

    const matrix: Matrix4Array = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 1],
    ];

    switch (order) {
      case AxisOrder.XYZ: {
        matrix[0][0] = cosY * cosZ;
        matrix[0][1] = -cosY * sinZ;
        matrix[0][2] = sinY;

        matrix[1][0] = cosX * sinZ + sinX * cosZ * sinY;
        matrix[1][1] = cosX * cosZ - sinX * sinZ * sinY;
        matrix[1][2] = -sinX * cosY;

        matrix[2][0] = sinX * sinZ - cosX * cosZ * sinY;
        matrix[2][1] = sinX * cosZ + cosX * sinZ * sinY;
        matrix[2][2] = cosX * cosY;

        return new Matrix4(matrix);
      }

      case AxisOrder.YXZ: {
        matrix[0][0] = cosY * cosZ + sinY * sinZ * sinX;
        matrix[0][1] = sinY * cosZ * sinX - cosY * sinZ;
        matrix[0][2] = cosX * sinY;

        matrix[1][0] = cosX * sinZ;
        matrix[1][1] = cosX * cosZ;
        matrix[1][2] = -sinX;

        matrix[2][0] = cosY * sinZ * sinX - sinY * cosZ;
        matrix[2][1] = sinY * sinZ + cosY * cosZ * sinX;
        matrix[2][2] = cosX * cosY;

        return new Matrix4(matrix);
      }

      case AxisOrder.ZXY: {
        matrix[0][0] = cosY * cosZ - sinY * sinZ * sinX;
        matrix[0][1] = -cosX * sinZ;
        matrix[0][2] = sinY * cosZ + cosY * sinZ * sinX;

        matrix[1][0] = cosY * sinZ + sinY * cosZ * sinX;
        matrix[1][1] = cosX * cosZ;
        matrix[1][2] = sinY * sinZ - cosY * cosZ * sinX;

        matrix[2][0] = -cosX * sinY;
        matrix[2][1] = sinX;
        matrix[2][2] = cosX * cosY;

        return new Matrix4(matrix);
      }

      case AxisOrder.ZYX: {
        matrix[0][0] = cosY * cosZ;
        matrix[0][1] = sinX * cosZ * sinY - cosX * sinZ;
        matrix[0][2] = cosX * cosZ * sinY + sinX * sinZ;

        matrix[1][0] = cosY * sinZ;
        matrix[1][1] = sinX * sinZ * sinY + cosX * cosZ;
        matrix[1][2] = cosX * sinZ * sinY - sinX * cosZ;

        matrix[2][0] = -sinY;
        matrix[2][1] = sinX * cosY;
        matrix[2][2] = cosX * cosY;

        return new Matrix4(matrix);
      }

      case AxisOrder.YZX: {
        matrix[0][0] = cosY * cosZ;
        matrix[0][1] = sinX * sinY - cosX * cosY * sinZ;
        matrix[0][2] = sinX * cosY * sinZ + cosX * sinY;

        matrix[1][0] = sinZ;
        matrix[1][1] = cosX * cosZ;
        matrix[1][2] = -sinX * cosZ;

        matrix[2][0] = -sinY * cosZ;
        matrix[2][1] = cosX * sinY * sinZ + sinX * cosY;
        matrix[2][2] = cosX * cosY - sinX * sinY * sinZ;

        return new Matrix4(matrix);
      }

      case AxisOrder.XZY: {
        matrix[0][0] = cosY * cosZ;
        matrix[0][1] = -sinZ;
        matrix[0][2] = sinY * cosZ;

        matrix[1][0] = cosX * cosY * sinZ + sinX * sinY;
        matrix[1][1] = cosX * cosZ;
        matrix[1][2] = cosX * sinY * sinZ - sinX * cosY;

        matrix[2][0] = sinX * cosY * sinZ - cosX * sinY;
        matrix[2][1] = sinX * cosZ;
        matrix[2][2] = sinX * sinY * sinZ + cosX * cosY;

        return new Matrix4(matrix);
      }

      default:
        throw new UnsupportedAxisError(order);
    }
  }

  toArray() {
    return [this.x, this.y, this.z];
  }

  toString() {
    return (
`Vector3({
  x: ${this.x},
  y: ${this.y},
  z: ${this.z},
})`
    );
  }

  get length() {
    return Math.sqrt(this.dot(this));
  }
}
