import { expect } from 'chai';
import Vector2 from '../../src/primitives/Vector2';

describe('primitives/Vector2', function () {
  describe('constructor', function () {
    it('should correctly construct', function () {
      const val = new Vector2(1, 2);

      expect(val.x).to.equal(1);
      expect(val.y).to.equal(2);
    });
  });
});
