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

  eq(v: Quaternion) {
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
`Quaternion({
  x: ${this.x},
  y: ${this.y},
  z: ${this.z},
  w: ${this.w},
})`
    );
  }
}
