import { expect } from 'chai';

import Vector2 from '../../src/primitives/Vector2';
import Vector3 from '../../src/primitives/Vector3';
import Vector4 from '../../src/primitives/Vector4';
import emod from '../../src/fns/emod';

describe('fns/emod', function () {
  it('should accept `number`', function () {
    expect(emod(10, 2)).to.equal(0);
    expect(emod(10, 360)).to.equal(10);
  });

  it('should accept `Vector2', function () {
    const vec = new Vector2(10, -10);
    const val = emod(vec, 360);

    expect(val.x).to.equal(10);
    expect(val.y).to.equal(350);
  });

  it('should accept `Vector3`', function () {
    const vec = new Vector3(10, -10, 730);
    const val = emod(vec, 360);

    expect(val.x).to.equal(10);
    expect(val.y).to.equal(350);
    expect(val.z).to.equal(10);
  });

  it('should accept `Vector4`', function () {
    const vec = new Vector4(10, -10, 730, -730);
    const val = emod(vec, 360);

    expect(val.x).to.equal(10);
    expect(val.y).to.equal(350);
    expect(val.z).to.equal(10);
    expect(val.w).to.equal(350);
  });
});
