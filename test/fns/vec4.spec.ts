import { expect } from 'chai';

import Vector4 from '../../src/primitives/Vector4';
import vec4 from '../../src/fns/vec4';

describe('fns/vec4', function () {
  it('should construct a `Vector3`', function () {
    const a = vec4(1, 2, 3, 4);
    const b = new Vector4(1, 2, 3, 4);

    expect(a).to.be.instanceOf(Vector4);
    expect(a.x).to.equal(b.x);
    expect(a.y).to.equal(b.y);
    expect(a.z).to.equal(b.z);
    expect(a.w).to.equal(b.w);
  });
});
