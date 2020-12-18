Mathrix
=======

Modern platform-independent math library for JavaScript.

About
-----

Mathrix is optimized for immutable operations, and suitable for high-level scripting environments. If you work with WebGL, prefer a mutable interface, or use workloads that benefit from array-based performance, consider using [gl-matrix][gl-matrix] instead.

Examples
--------

```js
// Import Mathrix
import Mathrix from 'mathrix';

// Add two vectors together
const v1 = Mathrix.vec3(1, 2, 3);
const v2 = Mathrix.vec3(1, 2, 3);
const v3 = Mathrix.add(v1, v2);

// Convert Euler angles into a quaternion
const rotation = Mathrix.vec3(0, 90, 0);
const quaternion = Mathrix.quat(rotation);
```

```js
// If you prefer individual imports
import { add, vec3, quat } from 'mathrix';

// Add two vectors together
const v1 = vec3(1, 2, 3);
const v2 = vec3(1, 2, 3);
const v3 = add(v1, v2);

// Convert Euler angles into a quaternion
const rotation = vec3(0, 90, 0);
const quaternion = quat(rotation);
```

```js
// OO interface is also available
import { Vector3, vec3 } from 'mathrix';

// Add two vectors together
const v1 = new Vector3(1, 2, 3);
const v2 = new Vector3(1, 2, 3);
const v3 = v1.add(v2);

// Convert Euler angles into a quaternion
const rotation = new Vector3(0, 90, 0);
const quaternion = rotation.toQuaternion();

// vec3 is a constructor for Vector3
const vec = vec3(1, 2, 3);
console.assert(vec instanceof Vector3);
```

```js
// Mathrix is fully compatible with the standard JavaScript math library
import Math from 'mathrix';

// Math.floor on a single number
const num = Math.floor(1.7);
console.assert(num === 1);

// Or on all components of a vec3
const vec = Math.floor(Math.vec3(1.1, 2.7, 3.8));
console.assert(vec.x === 1);
console.assert(vec.y === 2);
console.assert(vec.z === 3);
```

More examples can be found [here](docs/examples/index.md).


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

### Internals

- [convertVector3ToQuaternion](docs/api/convertVector3ToQuaternion.md)
- [convertVector3ToMatrix4](docs/api/convertVector3ToMatrix4.md)
- [convertQuaternionToVector3](docs/api/convertQuaternionToVector3.md)
- [convertQuaternionToMatrix4](docs/api/convertQuaternionToMatrix4.md)
- [convertMatrix4ToVector3](docs/api/convertMatrix4ToVector3.md)
- [convertMatrix4ToQuaternion](docs/api/convertMatrix4ToQuaternion.md)

[gl-matrix]: http://glmatrix.net/
