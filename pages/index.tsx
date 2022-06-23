import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import CircleAnimation from "../components/animations/circle-animation";
import SphereAnimation from "../components/animations/sphere-animation";
const Home: NextPage = () => {
  const textVariant = {
    animate: {
      opacity: [0, 0.5, 1],
      y: [-1000, 0],
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    },
    initial: {
      opacity: 0,
      y: -1000,
    }
  }
  return (
    <div className="w-full h-[100vh] ">
      <Canvas>
      <SphereAnimation/>
      </Canvas>
    </div>);
};

export default Home;
