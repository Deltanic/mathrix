import { expect } from 'chai';
import mod from '../../src/base/mod';

describe('base/mod', function () {
  it('should work', function () {
    expect(mod(10, 2)).to.equal(0);
    expect(mod(10, 360)).to.equal(10);
    expect(mod(-10, 360)).to.equal(-10);
    expect(mod(730, 360)).to.equal(10);
    expect(mod(-730, 360)).to.equal(-10);
  });
});
