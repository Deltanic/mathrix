export default class Quaternion {
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

  eq(q: Quaternion, epsilon = 0) {
    return (
      Math.abs(this.x - q.x) <= epsilon &&
      Math.abs(this.y - q.y) <= epsilon &&
      Math.abs(this.z - q.z) <= epsilon &&
      Math.abs(this.w - q.w) <= epsilon
    );
  }

  toArray() {
    return [this.x, this.y, this.z, this.w];
  }

  toString() {
    return (
`Quaternion({
  x: ${this.x},
  y: ${this.y},
  z: ${this.z},
  w: ${this.w},
})`
    );
  }
}
