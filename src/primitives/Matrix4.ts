import { Matrix4Array } from '../types';

const createMatrix = (x: number): Matrix4Array => ([
  [x, x, x, x],
  [x, x, x, x],
  [x, x, x, x],
  [x, x, x, x],
]);

const toMatrix = (x: Matrix4 | number): Matrix4Array => (
  x instanceof Matrix4
    ? x.matrix
    : createMatrix(x)
);

export default class Matrix4 {
  public matrix: Matrix4Array;

  constructor(matrix: Matrix4Array) {
    this.matrix = matrix;
  }

  add(m: Matrix4 | number) {
    const x = this.matrix;
    const y = toMatrix(m);

    return new Matrix4([[
      x[0][0] + y[0][0],
      x[0][1] + y[0][1],
      x[0][2] + y[0][2],
      x[0][3] + y[0][3],
    ], [
      x[1][0] + y[1][0],
      x[1][1] + y[1][1],
      x[1][2] + y[1][2],
      x[1][3] + y[1][3],
    ], [
      x[2][0] + y[2][0],
      x[2][1] + y[2][1],
      x[2][2] + y[2][2],
      x[2][3] + y[2][3],
    ], [
      x[3][0] + y[3][0],
      x[3][1] + y[3][1],
      x[3][2] + y[3][2],
      x[3][3] + y[3][3],
    ]]);
  }

  sub(m: Matrix4 | number) {
    const x = this.matrix;
    const y = toMatrix(m);

    return new Matrix4([[
      x[0][0] - y[0][0],
      x[0][1] - y[0][1],
      x[0][2] - y[0][2],
      x[0][3] - y[0][3],
    ], [
      x[1][0] - y[1][0],
      x[1][1] - y[1][1],
      x[1][2] - y[1][2],
      x[1][3] - y[1][3],
    ], [
      x[2][0] - y[2][0],
      x[2][1] - y[2][1],
      x[2][2] - y[2][2],
      x[2][3] - y[2][3],
    ], [
      x[3][0] - y[3][0],
      x[3][1] - y[3][1],
      x[3][2] - y[3][2],
      x[3][3] - y[3][3],
    ]]);
  }

  mul(m: Matrix4 | number) {
    const x = this.matrix;
    const y = toMatrix(m);

    return new Matrix4([[
      (x[0][0] * y[0][0]) + (x[1][0] * y[0][1]) + (x[2][0] * y[0][2]) + (x[3][0] * y[0][3]),
      (x[0][1] * y[0][0]) + (x[1][1] * y[0][1]) + (x[2][1] * y[0][2]) + (x[3][1] * y[0][3]),
      (x[0][2] * y[0][0]) + (x[1][2] * y[0][1]) + (x[2][2] * y[0][2]) + (x[3][2] * y[0][3]),
      (x[0][3] * y[0][0]) + (x[1][3] * y[0][1]) + (x[2][3] * y[0][2]) + (x[3][3] * y[0][3]),
    ], [
      (x[0][0] * y[1][0]) + (x[1][0] * y[1][1]) + (x[2][0] * y[1][2]) + (x[3][0] * y[1][3]),
      (x[0][1] * y[1][0]) + (x[1][1] * y[1][1]) + (x[2][1] * y[1][2]) + (x[3][1] * y[1][3]),
      (x[0][2] * y[1][0]) + (x[1][2] * y[1][1]) + (x[2][2] * y[1][2]) + (x[3][2] * y[1][3]),
      (x[0][3] * y[1][0]) + (x[1][3] * y[1][1]) + (x[2][3] * y[1][2]) + (x[3][3] * y[1][3]),
    ], [
      (x[0][0] * y[2][0]) + (x[1][0] * y[2][1]) + (x[2][0] * y[2][2]) + (x[3][0] * y[2][3]),
      (x[0][1] * y[2][0]) + (x[1][1] * y[2][1]) + (x[2][1] * y[2][2]) + (x[3][1] * y[2][3]),
      (x[0][2] * y[2][0]) + (x[1][2] * y[2][1]) + (x[2][2] * y[2][2]) + (x[3][2] * y[2][3]),
      (x[0][3] * y[2][0]) + (x[1][3] * y[2][1]) + (x[2][3] * y[2][2]) + (x[3][3] * y[2][3]),
    ], [
      (x[0][0] * y[3][0]) + (x[1][0] * y[3][1]) + (x[2][0] * y[3][2]) + (x[3][0] * y[3][3]),
      (x[0][1] * y[3][0]) + (x[1][1] * y[3][1]) + (x[2][1] * y[3][2]) + (x[3][1] * y[3][3]),
      (x[0][2] * y[3][0]) + (x[1][2] * y[3][1]) + (x[2][2] * y[3][2]) + (x[3][2] * y[3][3]),
      (x[0][3] * y[3][0]) + (x[1][3] * y[3][1]) + (x[2][3] * y[3][2]) + (x[3][3] * y[3][3]),
    ]]);
  }

  transpose() {
    return new Matrix4([
      [this.matrix[0][0], this.matrix[1][0], this.matrix[2][0], this.matrix[3][0]],
      [this.matrix[0][1], this.matrix[1][1], this.matrix[2][1], this.matrix[3][1]],
      [this.matrix[0][2], this.matrix[1][2], this.matrix[2][2], this.matrix[3][2]],
      [this.matrix[0][3], this.matrix[1][3], this.matrix[2][3], this.matrix[3][3]],
    ]);
  }

  eq(m: Matrix4, epsilon = 0) {
    return (
      Math.abs(this.matrix[0][0] - m.matrix[0][0]) <= epsilon &&
      Math.abs(this.matrix[0][1] - m.matrix[0][1]) <= epsilon &&
      Math.abs(this.matrix[0][2] - m.matrix[0][2]) <= epsilon &&
      Math.abs(this.matrix[0][3] - m.matrix[0][3]) <= epsilon &&

      Math.abs(this.matrix[1][0] - m.matrix[1][0]) <= epsilon &&
      Math.abs(this.matrix[1][1] - m.matrix[1][1]) <= epsilon &&
      Math.abs(this.matrix[1][2] - m.matrix[1][2]) <= epsilon &&
      Math.abs(this.matrix[1][3] - m.matrix[1][3]) <= epsilon &&

      Math.abs(this.matrix[2][0] - m.matrix[2][0]) <= epsilon &&
      Math.abs(this.matrix[2][1] - m.matrix[2][1]) <= epsilon &&
      Math.abs(this.matrix[2][2] - m.matrix[2][2]) <= epsilon &&
      Math.abs(this.matrix[2][3] - m.matrix[2][3]) <= epsilon &&

      Math.abs(this.matrix[3][0] - m.matrix[3][0]) <= epsilon &&
      Math.abs(this.matrix[3][1] - m.matrix[3][1]) <= epsilon &&
      Math.abs(this.matrix[3][2] - m.matrix[3][2]) <= epsilon &&
      Math.abs(this.matrix[3][3] - m.matrix[3][3]) <= epsilon
    );
  }

  toArray() {
    return [
      [this.matrix[0][0], this.matrix[0][1], this.matrix[0][2], this.matrix[0][3]],
      [this.matrix[1][0], this.matrix[1][1], this.matrix[1][2], this.matrix[1][3]],
      [this.matrix[2][0], this.matrix[2][1], this.matrix[2][2], this.matrix[2][3]],
      [this.matrix[3][0], this.matrix[3][1], this.matrix[3][2], this.matrix[3][3]],
    ];
  }

  toString() {
    const str = [
      this.matrix[0].map(x => x.toString()),
      this.matrix[1].map(x => x.toString()),
      this.matrix[2].map(x => x.toString()),
      this.matrix[3].map(x => x.toString()),
    ];

    const pad = [
      Math.max(...str.map(x => x[0].length)),
      Math.max(...str.map(x => x[1].length)),
      Math.max(...str.map(x => x[2].length)),
      Math.max(...str.map(x => x[3].length)),
    ];

    return (
`Matrix4([
  [${str[0].map((x, i) => x.padStart(pad[i], ' ')).join(', ')}],
  [${str[1].map((x, i) => x.padStart(pad[i], ' ')).join(', ')}],
  [${str[2].map((x, i) => x.padStart(pad[i], ' ')).join(', ')}],
  [${str[3].map((x, i) => x.padStart(pad[i], ' ')).join(', ')}],
])`
    );
  }
}
