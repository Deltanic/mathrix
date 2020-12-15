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

import deg from '../../src/base/deg';

describe('base/deg', function () {
  it('should convert degrees to radians', function () {
    expect(deg(RAD_QUAD_N)).to.equal(DEG_QUAD_N);
    expect(deg(RAD_QUAD_E)).to.equal(DEG_QUAD_E);
    expect(deg(RAD_QUAD_S)).to.equal(DEG_QUAD_S);
    expect(deg(RAD_QUAD_W)).to.equal(DEG_QUAD_W);
  });
});
