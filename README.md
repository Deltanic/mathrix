Mathrix
=======

Modern platform-independent math library for JavaScript.

Documentation
-------------

### Constants

- [RAD_QUAD_N](docs/api/RAD_QUAD_N.md)
- [RAD_QUAD_E](docs/api/RAD_QUAD_E.md)
- [RAD_QUAD_S](docs/api/RAD_QUAD_S.md)
- [RAD_QUAD_W](docs/api/RAD_QUAD_W.md)
- [DEG_QUAD_N](docs/api/DEG_QUAD_N.md)
- [DEG_QUAD_E](docs/api/DEG_QUAD_E.md)
- [DEG_QUAD_S](docs/api/DEG_QUAD_S.md)
- [DEG_QUAD_W](docs/api/DEG_QUAD_W.md)
- [DEG_TO_RAD](docs/api/DEG_TO_RAD.md)
- [RAD_TO_DEG](docs/api/RAD_TO_DEG.md)
- [EPSILON](docs/api/EPSILON.md)

### Classes

- [Vector2](docs/api/Vector2.md)
- [Vector3](docs/api/Vector3.md)
- [Vector4](docs/api/Vector4.md)
- [Quaternion](docs/api/Quaternion.md)
- [Matrix4](docs/api/Matrix4.md)

### Constructors

- [vec2](docs/api/vec2.md)
- [vec3](docs/api/vec3.md)
- [vec4](docs/api/vec4.md)
- [quat](docs/api/quat.md)
- [mat4](docs/api/mat4.md)

### Functions

- [clamp](docs/api/clamp.md)
- [deg](docs/api/deg.md)
- [emod](docs/api/emod.md)
- [mod](docs/api/mod.md)
- [rad](docs/api/rad.md)
- [sign](docs/api/sign.md)

### Helpers

- [ensureVec2](docs/api/ensureVec2.md)
- [ensureVec3](docs/api/ensureVec3.md)
- [ensureVec4](docs/api/ensureVec4.md)
- [ensureMat4](docs/api/ensureMat4.md)

### Internal

- [convertVector3ToQuaternion](docs/api/convertVector3ToQuaternion.md)
- [convertVector3ToMatrix4](docs/api/convertVector3ToMatrix4.md)
- [convertQuaternionToVector3](docs/api/convertQuaternionToVector3.md)
- [convertQuaternionToMatrix4](docs/api/convertQuaternionToMatrix4.md)
- [convertMatrix4ToVector3](docs/api/convertMatrix4ToVector3.md)
- [convertMatrix4ToQuaternion](docs/api/convertMatrix4ToQuaternion.md)

Examples
--------

```js
// Import Mathrix
import Mathrix from 'mathrix';

// Convert Euler angles into a quaternion
const rotation = Mathrix.vec3(0, 90, 0);
const quaternion = Mathrix.quat(rotation);
```

```js
// If you prefer individual imports
import { vec3, quat } from 'mathrix';

// Convert Euler angles into a quaternion
const rotation = vec3(0, 90, 0);
const quaternion = quat(rotation);
```

```js
// OO interface is also available
import { Vector3, vec3 } from 'mathrix';

const rotation = new Vector3(0, 90, 0);
const quaternion = rotation.toQuaternion();

// vec3 is a constructor for Vector3
const vec = vec3(1, 2, 3);
console.assert(vec instanceof Vector3);
```

```js
// Mathrix is fully compatible with the standard math library
import Math from 'mathrix';

// Math.ceil on a single number
const num = Math.ceil(0.7);
console.assert(numCeil === 1);

// Or on all components of a vec3
const vec = Math.ceil(Math.vec3(0.1, 1.7, 2.8));
console.assert(vecCeil.x === 1);
console.assert(vecCeil.y === 2);
console.assert(vecCeil.z === 3);
```
