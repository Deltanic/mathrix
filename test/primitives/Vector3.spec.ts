import { expect } from 'chai';

import base_deg from '../../src/base/deg';
import base_rad from '../../src/base/rad';

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

  describe('#clamp', function () {
    it('should `clamp` all components', function () {
      const vec = new Vector3(10, 25, 40);
      const val = vec.clamp(20, 30);

      expect(val.x).to.equal(20);
      expect(val.y).to.equal(25);
      expect(val.z).to.equal(30);
    });
  });

  describe('#deg', function () {
    it('should `deg` all components', function () {
      const vec = new Vector3(1, 2, 3);
      const val = vec.deg();

      expect(val.x).to.equal(base_deg(1));
      expect(val.y).to.equal(base_deg(2));
      expect(val.z).to.equal(base_deg(3));
    });
  });

  describe('#emod', function () {
    it('should `emod` all components', function () {
      const vec = new Vector3(10, -10, 730);
      const val = vec.emod(360);

      expect(val.x).to.equal(10);
      expect(val.y).to.equal(350);
      expect(val.z).to.equal(10);
    });
  });

  describe('#mod', function () {
    it('should `mod` all components', function () {
      const vec = new Vector3(10, -10, 730);
      const val = vec.mod(360);

      expect(val.x).to.equal(10);
      expect(val.y).to.equal(-10);
      expect(val.z).to.equal(10);
    });
  });

  describe('#rad', function () {
    it('should `rad` all components', function () {
      const vec = new Vector3(1, 2, 3);
      const val = vec.rad();

      expect(val.x).to.equal(base_rad(1));
      expect(val.y).to.equal(base_rad(2));
      expect(val.z).to.equal(base_rad(3));
    });
  });

  describe('#sign', function () {
    it('should `sign` all components', function () {
      const vec = new Vector3(10, -10, 0);
      const val = vec.sign();

      expect(val.x).to.equal(1);
      expect(val.y).to.equal(-1);
      expect(val.z).to.equal(0);
    });
  });
});
