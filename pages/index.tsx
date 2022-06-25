import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import SphereAnimation from "../components/animations/sphere-animation";
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
    <div className="w-full h-full text-white">

      {/* <Canvas className="w-full h-full">
        <SphereAnimation />
      </Canvas> */}
    </div>
  );
};

export default Home;
