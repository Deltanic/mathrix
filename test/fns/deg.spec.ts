import { expect } from 'chai';
import {
  RAD_QUAD_N,
  RAD_QUAD_E,
  RAD_QUAD_S,
  RAD_QUAD_W,

  DEG_QUAD_N,
  DEG_QUAD_E,
  DEG_QUAD_S,
  DEG_QUAD_W,
} from '../../src/constants';

import Vector2 from '../../src/primitives/Vector2';
import Vector3 from '../../src/primitives/Vector3';
import Vector4 from '../../src/primitives/Vector4';
import deg from '../../src/fns/deg';

describe('fns/deg', function () {
  it('should accept `number`', function () {
    expect(deg(RAD_QUAD_E)).to.equal(DEG_QUAD_E);
    expect(deg(RAD_QUAD_W)).to.equal(DEG_QUAD_W);
  });

  it('should accept `Vector2`', function () {
    const val = deg(new Vector2(
      RAD_QUAD_N,
      RAD_QUAD_E
    ));

    expect(val.x).to.equal(DEG_QUAD_N);
    expect(val.y).to.equal(DEG_QUAD_E);
  });

  it('should accept `Vector3`', function () {
    const val = deg(new Vector3(
      RAD_QUAD_N,
      RAD_QUAD_E,
      RAD_QUAD_S
    ));

    expect(val.x).to.equal(DEG_QUAD_N);
    expect(val.y).to.equal(DEG_QUAD_E);
    expect(val.z).to.equal(DEG_QUAD_S);
  });

  it('should accept `Vector4`', function () {
    const val = deg(new Vector4(
      RAD_QUAD_N,
      RAD_QUAD_E,
      RAD_QUAD_S,
      RAD_QUAD_W
    ));
    
    expect(val.x).to.equal(DEG_QUAD_N);
    expect(val.y).to.equal(DEG_QUAD_E);
    expect(val.z).to.equal(DEG_QUAD_S);
    expect(val.w).to.equal(DEG_QUAD_W);
  });
});
