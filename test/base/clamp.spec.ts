import { expect } from 'chai';
import clamp from '../../src/base/clamp';

describe('base/clamp', function () {
  it('should clamp to bounds', function () {
    // Lower bound
    expect(clamp(0, 5, 10)).to.equal(5);

    // Upper bound
    expect(clamp(10, 0, 5)).to.equal(5);
  });

  it('should return number when within bounds', function () {
    expect(clamp(5, 0, 10)).to.equal(5);
  });
});
