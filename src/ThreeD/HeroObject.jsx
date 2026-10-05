
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function HeroObject() {
  const meshRef = useRef();

  useFrame((state) => {
    const mesh = meshRef.current;

    if (!mesh) return;

    const { mouse, clock } = state;

    // Mouse rotation
    const targetX = mouse.y * 0.35;
    const targetY = mouse.x * 0.5;

    mesh.rotation.x = THREE.MathUtils.lerp(
      mesh.rotation.x,
      targetX,
      0.035
    );

    mesh.rotation.y = THREE.MathUtils.lerp(
      mesh.rotation.y,
      targetY,
      0.035
    );

    // Very subtle continuous rotation
    mesh.rotation.z = clock.elapsedTime * 0.0015;
  });

  return (
    <group
      ref={meshRef}
      scale={1.65}
      rotation={[0.2, -0.3, 0]}
    >
      <mesh>
        <torusKnotGeometry
          args={[
            1.25,
            0.38,
            96,
            20,
            2,
            3,
          ]}
        />

        <MeshTransmissionMaterial
          samples={2}
          thickness={0.6}
          chromaticAberration={0.02}
          anisotropy={0.1}
          distortion={0.05}
          distortionScale={0.1}
          temporalDistortion={0.01}
          transmission={0.85}
          roughness={0.12}
          metalness={0.7}
          ior={1.45}
          color="#D9D9D4"
        />
      </mesh>
    </group>
  );
}

export default HeroObject;