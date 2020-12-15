import { expect } from 'chai';
import { Matrix4Array } from '../../src/types';
import {
  convertQuaternionToVector3,
  convertMatrix4ToVector3,
} from '../../src/convert';

import Matrix4 from '../../src/primitives/Matrix4';
import Vector3 from '../../src/primitives/Vector3';
import Quaternion from '../../src/primitives/Quaternion';
import vec3 from '../../src/fns/vec3';

const identityMatrix: Matrix4Array = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
];

describe('fns/vec3', function () {
  it('should construct a `Vector3`', function () {
    const a = vec3(1, 2, 3);
    const b = new Vector3(1, 2, 3);

    expect(a).to.be.instanceOf(Vector3);
    expect(a.x).to.equal(b.x);
    expect(a.y).to.equal(b.y);
    expect(a.z).to.equal(b.z);
  });

  it('should convert `Quaternion`', function () {
    const val = new Quaternion(1, 2, 3, 4);

    const a = vec3(val);
    const b = convertQuaternionToVector3(val);

    expect(a).to.be.instanceOf(Vector3);
    expect(a.x).to.equal(b.x);
    expect(a.y).to.equal(b.y);
    expect(a.z).to.equal(b.z);
  });

  it('should convert `Matrix4`', function () {
    const val = new Matrix4(identityMatrix);

    const a = vec3(val);
    const b = convertMatrix4ToVector3(val);

    expect(a).to.be.instanceOf(Vector3);
    expect(a.x).to.equal(b.x);
    expect(a.y).to.equal(b.y);
    expect(a.z).to.equal(b.z);
  });
});
