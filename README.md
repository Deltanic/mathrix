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

- [RAD_QUAD_N](docs/reference/RAD_QUAD_N.md)
- [RAD_QUAD_E](docs/reference/RAD_QUAD_E.md)
- [RAD_QUAD_S](docs/reference/RAD_QUAD_S.md)
- [RAD_QUAD_W](docs/reference/RAD_QUAD_W.md)
- [DEG_QUAD_N](docs/reference/DEG_QUAD_N.md)
- [DEG_QUAD_E](docs/reference/DEG_QUAD_E.md)
- [DEG_QUAD_S](docs/reference/DEG_QUAD_S.md)
- [DEG_QUAD_W](docs/reference/DEG_QUAD_W.md)
- [DEG_TO_RAD](docs/reference/DEG_TO_RAD.md)
- [RAD_TO_DEG](docs/reference/RAD_TO_DEG.md)
- [EPSILON](docs/reference/EPSILON.md)

### Classes

- [Vector2](docs/reference/Vector2.md)
- [Vector3](docs/reference/Vector3.md)
- [Vector4](docs/reference/Vector4.md)
- [Quaternion](docs/reference/Quaternion.md)
- [Matrix4](docs/reference/Matrix4.md)

### Constructors

- [vec2](docs/reference/vec2.md)
- [vec3](docs/reference/vec3.md)
- [vec4](docs/reference/vec4.md)
- [quat](docs/reference/quat.md)
- [mat4](docs/reference/mat4.md)

### Functions

- [clamp](docs/reference/clamp.md)
- [deg](docs/reference/deg.md)
- [emod](docs/reference/emod.md)
- [mod](docs/reference/mod.md)
- [rad](docs/reference/rad.md)
- [sign](docs/reference/sign.md)

### Helpers

- [ensureVec2](docs/reference/ensureVec2.md)
- [ensureVec3](docs/reference/ensureVec3.md)
- [ensureVec4](docs/reference/ensureVec4.md)
- [ensureMat4](docs/reference/ensureMat4.md)

### Internals

- [convertVector3ToQuaternion](docs/reference/convertVector3ToQuaternion.md)
- [convertVector3ToMatrix4](docs/reference/convertVector3ToMatrix4.md)
- [convertQuaternionToVector3](docs/reference/convertQuaternionToVector3.md)
- [convertQuaternionToMatrix4](docs/reference/convertQuaternionToMatrix4.md)
- [convertMatrix4ToVector3](docs/reference/convertMatrix4ToVector3.md)
- [convertMatrix4ToQuaternion](docs/reference/convertMatrix4ToQuaternion.md)

[gl-matrix]: http://glmatrix.net/
