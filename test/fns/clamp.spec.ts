import { expect } from 'chai';
import clamp from '../../src/fns/clamp';

describe('fns/clamp', function () {
  it('should be a function', function () {
    expect(typeof clamp).to.equal('function');
  });
});
