import { createClampVec3 } from "../fns/clamp";
import { createDegVec3 } from "../fns/deg";
import { createEmodVec3 } from "../fns/emod";
import { createModVec3 } from "../fns/mod";
import { createRadVec3 } from "../fns/rad";
import { createSignVec3 } from "../fns/sign";

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

  clamp = createClampVec3(this);
  deg   = createDegVec3(this);
  emod  = createEmodVec3(this);
  mod   = createModVec3(this);
  rad   = createRadVec3(this);
  sign  = createSignVec3(this);
}
