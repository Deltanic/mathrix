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

import rad from '../../src/base/rad';

describe('base/rad', function () {
  it('should convert radians to degrees', function () {
    expect(rad(DEG_QUAD_N)).to.equal(RAD_QUAD_N);
    expect(rad(DEG_QUAD_E)).to.equal(RAD_QUAD_E);
    expect(rad(DEG_QUAD_S)).to.equal(RAD_QUAD_S);
    expect(rad(DEG_QUAD_W)).to.equal(RAD_QUAD_W);
  });
});
