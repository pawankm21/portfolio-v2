//@ts-nocheck
import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { useFrame,  useLoader } from "@react-three/fiber";
import { motion } from "framer-motion-3d";




export default function SphereAnimation(props: JSX.IntrinsicElements["mesh"]) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useLoader(THREE.TextureLoader, "/textures/golf.png")
  useFrame(() => (meshRef.current.rotation.y += 0.01));

  function pointerMove(e) {
    const mouseX = (e.clientX - window.innerWidth / 2);
    const mouseY = (e.clientY - window.innerHeight / 2);
    meshRef.current.rotation.y += 0.0002*(mouseX - meshRef.current.rotation.y);
    meshRef.current.rotation.x += 0.0002 * (mouseY - meshRef.current.rotation.x);
    meshRef.current.position.z =  0.001 * (mouseX - meshRef.current.rotation.y);

  }
  return (
    <Suspense fallback={null}>
      <motion.scene
        ref={meshRef}
        onPointerMove={pointerMove}

      >

        <motion.perspectiveCamera aspect={1} position={[0, 0, 10]} />
        <motion.pointLight
          position={[20, -10, 10]}
          color={0xEF4444}
          intensity={1}
        />
        <motion.pointLight
          position={[-20, 10, -10]}
          color={"blue"}
          intensity={1}
        />

        <motion.mesh
        
        >
          <motion.sphereGeometry args={[2.5, 64, 64]}
          />

          <motion.meshPhysicalMaterial
            metalness={0.9}
            // clearcoat={1}
            // clearcoatRoughness={0.1}
            roughness={0.5}
            color={"#f0f0f0"}
            normalMap={texture}
          />
        </motion.mesh>

      </motion.scene>
    </Suspense>
  );
}
