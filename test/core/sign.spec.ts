import { expect } from 'chai';
import sign from '../../src/core/sign';

describe('core/sign', function () {
  it('should be a function', function () {
    expect(typeof sign).to.equal('function');
  });
});
