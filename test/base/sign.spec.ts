import { expect } from 'chai';
import sign from '../../src/base/sign';

describe('base/sign', function () {
  it('should work', function () {
    expect(sign(0)).to.equal(0);
    expect(sign(5)).to.equal(1);
    expect(sign(-5)).to.equal(-1);
    expect(sign(-0)).to.equal(-0);
  });
});
