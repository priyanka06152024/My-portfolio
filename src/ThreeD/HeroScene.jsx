
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import HeroObject from "./HeroObject";
import Lights from "./Lights";

function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 35,
      }}
      dpr={[1, 1.25]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <Lights />

      <Environment
        preset="studio"
        resolution={256}
      />

      <HeroObject />
    </Canvas>
  );
}

export default HeroScene;