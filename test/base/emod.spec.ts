import { expect } from 'chai';
import emod from '../../src/base/emod';

describe('base/emod', function () {
  it('should work', function () {
    expect(emod(10, 2)).to.equal(0);
    expect(emod(10, 360)).to.equal(10);
    expect(emod(-10, 360)).to.equal(350);
    expect(emod(730, 360)).to.equal(10);
    expect(emod(-730, 360)).to.equal(350);
  });
});
