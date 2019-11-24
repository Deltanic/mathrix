export type Matrix4Array = [
  [number, number, number, number],
  [number, number, number, number],
  [number, number, number, number],
  [number, number, number, number],
];

export default class Matrix4 {
  public matrix: Matrix4Array;

  constructor(matrix: Matrix4Array) {
    this.matrix = matrix;
  }

  toString() {
    return (
`Matrix4([
  [${this.matrix[0][0]}, ${this.matrix[0][1]}, ${this.matrix[0][2]}, ${this.matrix[0][3]}],
  [${this.matrix[1][0]}, ${this.matrix[1][1]}, ${this.matrix[1][2]}, ${this.matrix[1][3]}],
  [${this.matrix[2][0]}, ${this.matrix[2][1]}, ${this.matrix[2][2]}, ${this.matrix[2][3]}],
  [${this.matrix[3][0]}, ${this.matrix[3][1]}, ${this.matrix[3][2]}, ${this.matrix[3][3]}],
])`
    );
  }
}
