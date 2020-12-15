import { expect } from 'chai';
import Vector3 from '../../src/primitives/Vector3';

describe('primitives/Vector3', function () {
  describe('constructor', function () {
    it('should correctly construct', function () {
      const val = new Vector3(1, 2, 3);

      expect(val.x).to.equal(1);
      expect(val.y).to.equal(2);
      expect(val.z).to.equal(3);
    });
  });
});
