export default class Vector2 {
  public type: 'Vector2' = 'Vector2';

  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // TODO: Implement.
  clamp = (..._: any[]) => this
  deg   = (..._: any[]) => this
  emod  = (..._: any[]) => this
  mod   = (..._: any[]) => this
  rad   = (..._: any[]) => this
  sign  = (..._: any[]) => this
}
