import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { motion } from 'framer-motion-3d';

export default function SphereAnimation(props: JSX.IntrinsicElements['mesh']) {
    const mesh = useRef<THREE.Mesh>(null!);
    const map=useLoader(THREE.TextureLoader,"/NormalMap (3).png")
    return (

        <>
          
            <pointLight position={[2, 3, 4]} intensity={1} />
            <pointLight position={[0, 5, 6]} intensity={1} color="#EF4444" />
            <Suspense fallback={null}>

                <motion.mesh
                    {...props}
                    ref={mesh}>
                    <sphereGeometry args={[1.5, 64, 64]} />
                    <meshStandardMaterial metalness={0.7} roughness={0.3} 
                        color={"0x292929"}
 />
                </motion.mesh>
            </Suspense>

        </>
    )
}