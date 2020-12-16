import clamp from "../fns/clamp";

export default class Vector3 {
  public type: 'Vector3' = 'Vector3';

  public x: number;
  public y: number;
  public z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  // TODO: Implement.
  clamp = (..._: any[]) => this
  deg   = (..._: any[]) => this
  emod  = (..._: any[]) => this
  mod   = (..._: any[]) => this
  rad   = (..._: any[]) => this
  sign  = (..._: any[]) => this
}
