import { expect } from 'chai';

import Vector2 from '../../src/primitives/Vector2';
import Vector3 from '../../src/primitives/Vector3';
import Vector4 from '../../src/primitives/Vector4';
import sign from '../../src/fns/sign';

describe('fns/sign', function () {
  it('should accept `number`', function () {
    expect(sign(0)).to.equal(0);
    expect(sign(10)).to.equal(1);
    expect(sign(-10)).to.equal(-1);
    expect(sign(-0)).to.equal(-0);
  });

  it('should accept `Vector2', function () {
    const vec = new Vector2(10, -10);
    const val = sign(vec);

    expect(val.x).to.equal(1);
    expect(val.y).to.equal(-1);
  });

  it('should accept `Vector3`', function () {
    const vec = new Vector3(10, -10, 0);
    const val = sign(vec);

    expect(val.x).to.equal(1);
    expect(val.y).to.equal(-1);
    expect(val.z).to.equal(0);
  });

  it('should accept `Vector4`', function () {
    const vec = new Vector4(10, -10, 0, -0);
    const val = sign(vec);

    expect(val.x).to.equal(1);
    expect(val.y).to.equal(-1);
    expect(val.z).to.equal(0);
    expect(val.w).to.equal(-0);
  });
});
