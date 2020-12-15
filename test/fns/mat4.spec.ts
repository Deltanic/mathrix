import { expect } from 'chai';
import { AxisOrder } from '../../src/enums';
import {
  convertVector3ToMatrix4,
  convertQuaternionToMatrix4,
} from '../../src/convert';

import { Matrix4Array } from '../../src/types';
import Matrix4 from '../../src/primitives/Matrix4';
import Vector3 from '../../src/primitives/Vector3';
import Quaternion from '../../src/primitives/Quaternion';
import mat4 from '../../src/fns/mat4';

const identityMatrix: Matrix4Array = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
];

describe('fns/mat4', function () {
  it('should construct a `Matrix4`', function () {
    const a = mat4(identityMatrix);
    const b = new Matrix4(identityMatrix);

    expect(a).to.be.instanceOf(Matrix4);
    expect(a.matrix).to.deep.equal(b.matrix);
  });

  it('should convert `Vector3`', function () {
    const vec = new Vector3(1, 2, 3);
    const xyz = AxisOrder.XYZ;

    const a = mat4(vec, xyz);
    const b = convertVector3ToMatrix4(vec, xyz);

    expect(a).to.be.instanceOf(Matrix4);
    expect(a.matrix).to.deep.equal(b.matrix);
  });

  it('should convert `Quaternion`', function () {
    const quat = new Quaternion(1, 2, 3, 4);

    const a = mat4(quat);
    const b = convertQuaternionToMatrix4(quat);

    expect(a).to.be.instanceOf(Matrix4);
    expect(a.matrix).to.deep.equal(b.matrix);
  });
});
