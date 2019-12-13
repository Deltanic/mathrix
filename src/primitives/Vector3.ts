import Quaternion from '../primitives/Quaternion';
import rad from '../core/rad';
import { AxisOrder } from '../types';
import { UnsupportedAxisError } from '../errors';

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
