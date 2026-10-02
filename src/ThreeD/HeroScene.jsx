// import { Canvas } from "@react-three/fiber";
// import { Environment, Float } from "@react-three/drei";

// import HeroObject from "./HeroObject";
// import Lights from "./Lights";

// function HeroScene() {
//   return (
//     <Canvas
//       camera={{
//         position: [0, 0, 5],
//         fov: 35,
//       }}
//       dpr={[1, 1.5]}
//       gl={{
//         antialias: true,
//         alpha: true,
//         powerPreference: "high-performance",
//       }}
//     >
//       <Lights />

//       <Environment preset="studio" />

//       <Float
//         speed={1.2}
//         rotationIntensity={0.12}
//         floatIntensity={0.18}
//       >
//         <HeroObject />
//       </Float>
//     </Canvas>
//   );
// }

// export default HeroScene;



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