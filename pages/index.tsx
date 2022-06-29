import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import { motion } from 'framer-motion';
import SphereAnimation from "../components/animations/sphere-animation";
import { delayVariant, sectionVariant } from "../utils/utils";
import CircleAnimation from "../components/animations/circle-animation";
const Home: NextPage = () => {

  return (
    <motion.div
      variants={delayVariant}
      animate="animate"
      initial="initial"
      className="w-full min-h-[100vh]"
    >
      <section className="w-full h-[100vh]">
        <motion.div
          className="text-white px-12 py-8 absolute text-center w-full top-36" id="intro">
          <h1 className="text-8xl font-extrabold">Pawan Mishra</h1>
          <p className="font-bold p-2 ">Web developer.</p>
        </motion.div>
        <motion.div
          className="w-full h-full" >
          <Canvas className=" mix-blend-exclusion -my-6" >
            <SphereAnimation />
          </Canvas>
        </motion.div>

      </section>
      <section className="w-full">
        <div className={`relative mt-24`} id="about-me">
          <motion.div
            className="w-full absolute h-full  bg-red-500 z-0"></motion.div>
          <motion.div
            variants={sectionVariant}
            whileInView="whileInView"
            initial="initial"
            className="relative z-10  shadow-2xl m-4 p-4 border border-neutral-500 rounded text-neutral-200 text-center bg-neutral-800">

            <h1 className="text-5xl font-bold">About Me</h1>

            <div className="lg:flex p-4 mt-5">

              <div className="lg:hidden"></div>
              <div className="lg:w-1/2 p-4 bg-neutral-900 rounded border border-neutral-500 shadow-red-400 shadow-lg hover:shadow hover:shadow-red-500 transition duration-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptates, maiores officiis magni ea voluptate nisi obcaecati sint hic cum! Optio ab exercitationem officia libero sint aut, laudantium quas ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, obcaecati nihil minima libero possimus nemo earum cumque eveniet sapiente maxime ipsam ullam velit placeat sit. Aspernatur quis ipsam enim corporis?
              </div>
              <div className="lg:w-1/2 lg:block hidden">
                <div className=" flex justify-center -z-10 h-full">
                  <CircleAnimation />
                </div>
              </div>
            </div>


          </motion.div>
        </div>
      </section>

    </motion.div>

  );
};

export default Home;
