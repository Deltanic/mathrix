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

  eq(v: Vector3) {
    return (
      this.x === v.x &&
      this.y === v.y &&
      this.z === v.z
    );
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
