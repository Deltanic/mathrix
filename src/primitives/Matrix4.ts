import { Matrix4Array } from '../types';

export default class Matrix4 {
  public type: 'Matrix4' = 'Matrix4';

  public matrix: Matrix4Array;

  constructor(matrix: Matrix4Array) {
    this.matrix = matrix;
  }
}
