import { Canvas } from "@react-three/fiber";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import type { NextPage } from "next";
import { motion } from 'framer-motion';
import styles from "../styles/styles.module.css"
import SphereAnimation from "../components/animations/sphere-animation";
import { initialVariant } from "../utils/utils";
import CircleAnimation from "../components/animations/circle-animation";
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
    
        <motion.div className="text-white px-12 py-8 absolute text-center w-full top-36" id="intro">
          <h1 className="text-8xl font-extrabold">Pawan Mishra</h1>
          <p className="font-bold p-2 ">Web developer.</p>
        </motion.div>
        <Canvas className=" mix-blend-difference" >
          <SphereAnimation />
        </Canvas>
     
      </div>
      <div className={styles.main}>
        
      </div>
      <Footer />
    </motion.div>
  );
};

export default Home;
