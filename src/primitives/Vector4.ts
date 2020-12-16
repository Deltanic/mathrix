export default class Vector4 {
  public type: 'Vector4' = 'Vector4';

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

  // TODO: Implement.
  clamp = (..._: any[]) => this
  deg   = (..._: any[]) => this
  emod  = (..._: any[]) => this
  mod   = (..._: any[]) => this
  rad   = (..._: any[]) => this
  sign  = (..._: any[]) => this
}
