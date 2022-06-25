//@ts-nocheck
import * as THREE from "three";
import { Suspense, useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FlakesTexture } from "three/examples/jsm/textures/FlakesTexture";
const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 4;
    controls.maxDistance = 30;
    return () => {
      controls.dispose();
    };
  }, [gl, camera]);
  return null;
};

export default function SphereAnimation(props: JSX.IntrinsicElements["mesh"]) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => meshRef.current.rotateY(delta * 0.1));
  return (
    <>
      <motion.scene>
        <CameraController />
        <motion.perspectiveCamera aspect={1} position={[0, 0, 10]} />
        <motion.pointLight
          position={[20, 20, 20]}
          color={0xef4444}
          intensity={1}
        />

        <motion.mesh ref={meshRef}>
          <motion.sphereGeometry args={[2, 64, 64]} />
          <motion.meshPhysicalMaterial
            metalness={0.9}
            clearcoat={1}
            clearcoatRoughness={0.1}
            roughness={0.5}
            color={0x8418ca}
            //   normalMap={texture}
          />
        </motion.mesh>
      </motion.scene>
    </>
  );
}
