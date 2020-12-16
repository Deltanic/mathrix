import { expect } from 'chai';

import base_deg from '../../src/base/deg';
import base_rad from '../../src/base/rad';

import Vector2 from '../../src/primitives/Vector2';

describe('primitives/Vector2', function () {
  describe('constructor', function () {
    it('should correctly construct', function () {
      const val = new Vector2(1, 2);

      expect(val.x).to.equal(1);
      expect(val.y).to.equal(2);
    });
  });

  describe('#clamp', function () {
    it('should `clamp` all components', function () {
      const vec = new Vector2(10, 25);
      const val = vec.clamp(20, 30);

      expect(val.x).to.equal(20);
      expect(val.y).to.equal(25);
    });
  });

  describe('#deg', function () {
    it('should `deg` all components', function () {
      const vec = new Vector2(1, 2);
      const val = vec.deg();

      expect(val.x).to.equal(base_deg(1));
      expect(val.y).to.equal(base_deg(2));
    });
  });

  describe('#emod', function () {
    it('should `emod` all components', function () {
      const vec = new Vector2(10, -10);
      const val = vec.emod(360);

      expect(val.x).to.equal(10);
      expect(val.y).to.equal(350);
    });
  });

  describe('#mod', function () {
    it('should `mod` all components', function () {
      const vec = new Vector2(10, -10);
      const val = vec.mod(360);

      expect(val.x).to.equal(10);
      expect(val.y).to.equal(-10);
    });
  });

  describe('#rad', function () {
    it('should `rad` all components', function () {
      const vec = new Vector2(1, 2);
      const val = vec.rad();

      expect(val.x).to.equal(base_rad(1));
      expect(val.y).to.equal(base_rad(2));
    });
  });

  describe('#sign', function () {
    it('should `sign` all components', function () {
      const vec = new Vector2(10, -10);
      const val = vec.sign();

      expect(val.x).to.equal(1);
      expect(val.y).to.equal(-1);
    });
  });
});
