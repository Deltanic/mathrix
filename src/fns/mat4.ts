import Matrix4 from '../primitives/Matrix4';
import { Matrix4Array } from '../types';

export default function mat4(matrix: Matrix4Array) {
  return new Matrix4(matrix);
}
