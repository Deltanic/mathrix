import { createClampVec4 } from "../fns/clamp";
import { createDegVec4 } from "../fns/deg";
import { createEmodVec4 } from "../fns/emod";
import { createModVec4 } from "../fns/mod";
import { createRadVec4 } from "../fns/rad";
import { createSignVec4 } from "../fns/sign";

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

  clamp = createClampVec4(this);
  deg   = createDegVec4(this);
  emod  = createEmodVec4(this);
  mod   = createModVec4(this);
  rad   = createRadVec4(this);
  sign  = createSignVec4(this);
}
