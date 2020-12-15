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
import rad from '../../src/fns/rad';

describe('fns/rad', function () {
  it('should accept `number`', function () {
    expect(rad(DEG_QUAD_E)).to.equal(RAD_QUAD_E);
    expect(rad(DEG_QUAD_W)).to.equal(RAD_QUAD_W);
  });

  it('should accept `Vector2`', function () {
    const val = rad(new Vector2(
      DEG_QUAD_N,
      DEG_QUAD_E
    ));

    expect(val.x).to.equal(RAD_QUAD_N);
    expect(val.y).to.equal(RAD_QUAD_E);
  });

  it('should accept `Vector3`', function () {
    const val = rad(new Vector3(
      DEG_QUAD_N,
      DEG_QUAD_E,
      DEG_QUAD_S
    ));

    expect(val.x).to.equal(RAD_QUAD_N);
    expect(val.y).to.equal(RAD_QUAD_E);
    expect(val.z).to.equal(RAD_QUAD_S);
  });

  it('should accept `Vector4`', function () {
    const val = rad(new Vector4(
      DEG_QUAD_N,
      DEG_QUAD_E,
      DEG_QUAD_S,
      DEG_QUAD_W
    ));
    
    expect(val.x).to.equal(RAD_QUAD_N);
    expect(val.y).to.equal(RAD_QUAD_E);
    expect(val.z).to.equal(RAD_QUAD_S);
    expect(val.w).to.equal(RAD_QUAD_W);
  });
});
