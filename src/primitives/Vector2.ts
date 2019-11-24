export default class Vector2 {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  neg() {
    return new Vector2(-this.x, -this.y);
  }

  add(v: Vector2 | number) {
    return v instanceof Vector2
      ? new Vector2(this.x + v.x, this.y + v.y)
      : new Vector2(this.x + v, this.y + v);
  }

  sub(v: Vector2 | number) {
    return v instanceof Vector2
      ? new Vector2(this.x - v.x, this.y - v.y)
      : new Vector2(this.x - v, this.y - v);
  }

  mul(v: Vector2 | number) {
    return v instanceof Vector2
      ? new Vector2(this.x * v.x, this.y * v.y)
      : new Vector2(this.x * v, this.y * v);
  }

  div(v: Vector2 | number) {
    return v instanceof Vector2
      ? new Vector2(this.x / v.x, this.y / v.y)
      : new Vector2(this.x / v, this.y / v);
  }

  pow(v: Vector2 | number) {
    return v instanceof Vector2
      ? new Vector2(this.x ^ v.x, this.y ^ v.y)
      : new Vector2(this.x ^ v, this.y ^ v);
  }

  dot(v: Vector2) {
    return (
      this.x * v.x +
      this.y * v.y
    );
  }

  eq(v: Vector2) {
    return (
      this.x === v.x &&
      this.y === v.y
    );
  }

  toArray() {
    return [this.x, this.y];
  }

  toString() {
    return (
`Vector2({
  x: ${this.x},
  y: ${this.y},
})`
    );
  }

  get length() {
    return Math.sqrt(this.dot(this));
  }
}
