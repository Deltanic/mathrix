import { expect } from 'chai';
import Quaternion from '../../src/primitives/Quaternion';

describe('primitives/Quaternion', function () {
  it('should be a function', function () {
    expect(typeof Quaternion).to.equal('function');
  });
});
