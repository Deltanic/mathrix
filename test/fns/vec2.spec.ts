import { expect } from 'chai';

import Vector2 from '../../src/primitives/Vector2';
import vec2 from '../../src/fns/vec2';

describe('fns/vec2', function () {
  it('should construct a `Vector2`', function () {
    const a = vec2(1, 2);
    const b = new Vector2(1, 2);

    expect(a).to.be.instanceOf(Vector2);
    expect(a.x).to.equal(b.x);
    expect(a.y).to.equal(b.y);
  });
});
