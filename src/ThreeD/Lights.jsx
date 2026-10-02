import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Lights() {
  const limeLight = useRef();

  useFrame((state) => {
    const { mouse } = state;

    if (!limeLight.current) return;

    limeLight.current.position.x = THREE.MathUtils.lerp(
      limeLight.current.position.x,
      mouse.x * 2.5,
      0.03
    );

    limeLight.current.position.y = THREE.MathUtils.lerp(
      limeLight.current.position.y,
      mouse.y * 1.5 + 1,
      0.03
    );
  });

  return (
    <>
      <ambientLight intensity={1.2} />

      <directionalLight
        position={[3, 4, 5]}
        intensity={3}
      />

      <pointLight
        ref={limeLight}
        position={[2, 2, 3]}
        intensity={12}
        distance={8}
        color="#D7FF3F"
      />

      <pointLight
        position={[-4, -2, 4]}
        intensity={8}
        distance={10}
        color="#ffffff"
      />
    </>
  );
}

export default Lights;