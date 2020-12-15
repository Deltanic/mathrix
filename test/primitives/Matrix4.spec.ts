import { expect } from 'chai';
import Matrix4 from '../../src/primitives/Matrix4';

describe('primitives/Matrix4', function () {
  describe('constructor', function () {
    it('should correctly construct', function () {
      const val = new Matrix4([
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ]);

      expect(val.matrix).to.deep.equal([
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ]);
    });
  });
});
