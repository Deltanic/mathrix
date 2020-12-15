import { expect } from 'chai';
import { AxisOrder } from '../../src/enums';
import { Matrix4Array } from '../../src/types';
import {
  convertVector3ToQuaternion,
  convertMatrix4ToQuaternion,
} from '../../src/convert';

import Matrix4 from '../../src/primitives/Matrix4';
import Vector3 from '../../src/primitives/Vector3';
import Quaternion from '../../src/primitives/Quaternion';
import quat from '../../src/fns/quat';

const identityMatrix: Matrix4Array = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
];

describe('fns/quat', function () {
  it('should construct a `Quaternion`', function () {
    const a = quat(1, 2, 3, 4);
    const b = new Quaternion(1, 2, 3, 4);

    expect(a).to.be.instanceOf(Quaternion);
    expect(a.x).to.equal(b.x);
    expect(a.y).to.equal(b.y);
    expect(a.z).to.equal(b.z);
    expect(a.w).to.equal(b.w);
  });

  it('should convert `Vector3`', function () {
    const vec = new Vector3(1, 2, 3);
    const xyz = AxisOrder.XYZ;

    const a = quat(vec, xyz);
    const b = convertVector3ToQuaternion(vec, xyz);

    expect(a).to.be.instanceOf(Quaternion);
    expect(a.x).to.equal(b.x);
    expect(a.y).to.equal(b.y);
    expect(a.z).to.equal(b.z);
    expect(a.w).to.equal(b.w);
  });

  it('should convert `Matrix4`', function () {
    const mat = new Matrix4(identityMatrix);

    const a = quat(mat);
    const b = convertMatrix4ToQuaternion(mat);

    expect(a).to.be.instanceOf(Quaternion);
    expect(a.x).to.equal(b.x);
    expect(a.y).to.equal(b.y);
    expect(a.z).to.equal(b.z);
    expect(a.w).to.equal(b.w);
  });
});
