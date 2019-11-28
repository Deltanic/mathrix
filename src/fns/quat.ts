import Quaternion from '../primitives/Quaternion';

export default function quat(x: number, y: number, z: number, w: number) {
  return new Quaternion(x, y, z, w);
}
