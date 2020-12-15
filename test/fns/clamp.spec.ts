import { expect } from 'chai';

import Vector2 from '../../src/primitives/Vector2';
import Vector3 from '../../src/primitives/Vector3';
import Vector4 from '../../src/primitives/Vector4';
import clamp from '../../src/fns/clamp';
import base_clamp from '../../src/base/clamp';

describe('fns/clamp', function () {
  it('should accept `number`', function () {
    expect(clamp(0, 5, 10)).to.equal(5);
    expect(clamp(10, 0, 5)).to.equal(5);
    expect(clamp(5, 0, 10)).to.equal(5);
  });

  it('should accept `Vector2', function () {
    const vec = new Vector2(5, 15);
    const val = clamp(vec, 0, 10);

    expect(val.x).to.equal(5);
    expect(val.y).to.equal(10);
  });

  it('should accept `Vector3`', function () {
    const vec = new Vector3(5, 15, 20);
    const val = clamp(vec, 0, 10);

    expect(val.x).to.equal(5);
    expect(val.y).to.equal(10);
    expect(val.z).to.equal(10);
  });

  it('should accept `Vector4`', function () {
    const vec = new Vector4(5, 15, 20, 25);

    const min = 0;
    const max = 10;
    const val = clamp(vec, min, max);

    expect(val.x).to.equal(base_clamp(vec.x, min, max));
    expect(val.y).to.equal(base_clamp(vec.y, min, max));
    expect(val.z).to.equal(base_clamp(vec.z, min, max));
    expect(val.w).to.equal(base_clamp(vec.w, min, max));
  });
});
