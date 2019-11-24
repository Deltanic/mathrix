export default class Vector4 {
  public x: number;
  public y: number;
  public z: number;
  public w: number;

  constructor(x: number, y: number, z: number, w: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  neg() {
    return new Vector4(-this.x, -this.y, -this.z, -this.w);
  }

  add(v: Vector4 | number) {
    return v instanceof Vector4
      ? new Vector4(this.x + v.x, this.y + v.y, this.z + v.z, this.w + v.w)
      : new Vector4(this.x + v, this.y + v, this.z + v, this.w + v);
  }

  sub(v: Vector4 | number) {
    return v instanceof Vector4
      ? new Vector4(this.x - v.x, this.y - v.y, this.z - v.z, this.w - v.w)
      : new Vector4(this.x - v, this.y - v, this.z - v, this.w - v);
  }

  mul(v: Vector4 | number) {
    return v instanceof Vector4
      ? new Vector4(this.x * v.x, this.y * v.y, this.z * v.z, this.w * v.w)
      : new Vector4(this.x * v, this.y * v, this.z * v, this.w * v);
  }

  div(v: Vector4 | number) {
    return v instanceof Vector4
      ? new Vector4(this.x / v.x, this.y / v.y, this.z / v.z, this.w / v.w)
      : new Vector4(this.x / v, this.y / v, this.z / v, this.w / v);
  }

  pow(v: Vector4 | number) {
    return v instanceof Vector4
      ? new Vector4(this.x ^ v.x, this.y ^ v.y, this.z ^ v.z, this.w ^ v.w)
      : new Vector4(this.x ^ v, this.y ^ v, this.z ^ v, this.w ^ v);
  }

  dot(v: Vector4) {
    return (
      this.x * v.x +
      this.y * v.y +
      this.z * v.z +
      this.w * v.w
    );
  }

  eq(v: Vector4) {
    return (
      this.x === v.x &&
      this.y === v.y &&
      this.z === v.z &&
      this.w === v.w
    );
  }

  toArray() {
    return [this.x, this.y, this.z, this.w];
  }

  toString() {
    return (
`Vector4({
  x: ${this.x},
  y: ${this.y},
  z: ${this.z},
  w: ${this.w},
})`
    );
  }

  get length() {
    return Math.sqrt(this.dot(this));
  }
}
