import { Canvas } from "@react-three/fiber";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import type { NextPage } from "next";
import { motion } from 'framer-motion';
import styles from "../styles/styles.module.css"
import SphereAnimation from "../components/animations/sphere-animation";
import { initialVariant } from "../utils/utils";
const Home: NextPage = () => {
  const textVariant = {
    animate: {
      opacity: [0, 0.5, 1],
      y: [-1000, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
    initial: {
      opacity: 0,
      y: -1000,
    },
  };
  return (
    <motion.div
      variants={initialVariant}
      initial="initial"
      animate="animate"
      className={`${styles.layout} bg-neutral-900`}
    >
      <Navbar />
      <div className={`${styles.main}  `}>
        <Canvas>
          <SphereAnimation />
        </Canvas>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Home;
