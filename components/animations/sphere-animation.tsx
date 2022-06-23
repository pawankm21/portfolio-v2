import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame,useLoader } from '@react-three/fiber'
import { motion  } from 'framer-motion-3d';

export default function SphereAnimation(props: JSX.IntrinsicElements['mesh']) {
    const mesh = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    const base = useLoader(THREE.TextureLoader, "/metal/metal1_basecolor.jpg");

    return (

        <>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <motion.mesh
                {...props}
                ref={mesh}
                scale={active ? 1.5 : 1}
                onClick={(event) => setActive(!active)}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}>
                <sphereGeometry args={[1, 64, 64]}  />
                <meshStandardMaterial color="hotpink" />
            </motion.mesh>

        </>
    )
}