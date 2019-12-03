import Matrix4 from './primitives/Matrix4';
import { Matrix4Array } from './types';

export const createMatrix = (x: number): Matrix4Array => ([
  [x, x, x, x],
  [x, x, x, x],
  [x, x, x, x],
  [x, x, x, x],
]);

export const toMatrix = (x: Matrix4 | number): Matrix4Array => (
  x instanceof Matrix4
    ? x.matrix
    : createMatrix(x)
);
