import { expect } from 'chai';
import clamp from '../../src/core/clamp';

describe('core/clamp', function () {
  it('should be a function', function () {
    expect(typeof clamp).to.equal('function');
  });
});
