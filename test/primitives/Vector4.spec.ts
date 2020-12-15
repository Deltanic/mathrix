import { expect } from 'chai';
import Vector4 from '../../src/primitives/Vector4';

describe('primitives/Vector4', function () {
  describe('constructor', function () {
    it('should correctly construct', function () {
      const val = new Vector4(1, 2, 3, 4);

      expect(val.x).to.equal(1);
      expect(val.y).to.equal(2);
      expect(val.z).to.equal(3);
      expect(val.w).to.equal(4);
    });
  });
});
