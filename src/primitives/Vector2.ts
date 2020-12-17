import { createClampVec2 } from "../fns/clamp";
import { createDegVec2 } from "../fns/deg";
import { createEmodVec2 } from "../fns/emod";
import { createModVec2 } from "../fns/mod";
import { createRadVec2 } from "../fns/rad";
import { createSignVec2 } from "../fns/sign";

export default class Vector2 {
  public type: 'Vector2' = 'Vector2';

  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  clamp = createClampVec2(this);
  deg = createDegVec2(this);
  emod = createEmodVec2(this);
  mod = createModVec2(this);
  rad = createRadVec2(this);
  sign = createSignVec2(this);
}
