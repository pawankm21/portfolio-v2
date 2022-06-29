import Link from 'next/link';
import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import { motion } from 'framer-motion';
import SphereAnimation from "../components/animations/sphere-animation";
import { delayVariant, sectionVariant } from "../utils/utils";
import CircleAnimation from "../components/animations/circle-animation";
import Skill from "../components/skills";
import { useRef } from 'react';
const Home: NextPage = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const handleScroll = (ref:any ) => { 
    ref.current.scrollIntoView({ behavior: 'smooth', block:"nearest" });
  }
  return (
    <motion.div
      variants={delayVariant}
      animate="animate"
      initial="initial"
      className="w-full min-h-[100vh]"
    >
      <section className="w-full h-[100vh]">
        <motion.div
          className="text-white px-12 py-8 absolute text-center flex justify-center w-full top-36" id="intro">
          <div>
            <p className="lg:text-left lg:text-red-400 font-bold "> Hi, my name is</p>
            <h1 className="text-8xl font-extrabold">Pawan Mishra.</h1>
            <p className="font-bold p-2 ">I am a Web developer.</p>
          </div>
        </motion.div>
        <motion.div
          className="w-full h-full" >
          <Canvas className=" mix-blend-exclusion -my-6" >
            <SphereAnimation />
          </Canvas>
        </motion.div>
        <motion.button
          onClick={() => handleScroll(aboutRef)}
          className="absolute text-white py-4 border bottom-6 border-neutral-400 px-6 lg:bottom-12 lg:left-6 left-4">
          Continue
        </motion.button>
      </section>

      <section className="w-full mt-32 " id="about-me"  >
        <div className={`relative`} >
          <motion.div
            className="w-full absolute h-full bg-red-500 z-0" ref={aboutRef}></motion.div>
          <motion.div
            variants={sectionVariant}
            whileInView="whileInView"
            initial="initial"
            className="relative z-10  shadow-2xl m-4 p-4 border border-neutral-500 rounded text-neutral-200  bg-neutral-800">

            <h1 className="text-5xl font-bold px-8">About me</h1>

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
      <section className="w-full h-full" ref={skillsRef} id="skills">
        <div className={`relative mt-24`} >
          <motion.div
            className="w-full absolute h-full  bg-red-500 z-0"></motion.div>
          <motion.div
            variants={sectionVariant}
            whileInView="whileInView"
            initial="initial"
            className="relative z-10  shadow-2xl m-4 p-4 border border-neutral-500 rounded text-neutral-200 bg-neutral-800">

            <h1 className="text-5xl font-bold px-8">Skills</h1>
            <div className="m-6 p-4 bg-neutral-900 rounded border border-neutral-500 shadow-red-400 shadow-lg hover:shadow hover:shadow-red-500 transition duration-300 relative grid lg:grid-cols-8 grid-cols-4   place-content-center">
              <Skill name="HTML" image="html.png" color="#e34f26" />
              <Skill name="CSS" image="css.png" color="#264fe3" />
              <Skill name="JavaScript" image="javascript.png" color="#61dafb" />
              <Skill name="TypeScript" image="typescript.webp" color="#EE4266" />
              <Skill name="Python" image="python.png" color="#00A5E0" />
              <Skill name="C++/C" image="c++.png" color="#FFD23F" />

              <Skill name="React" image="react.png" color="#540D6E" />
              <Skill name="NodeJS" image="nodejs.png" color="#264fe3" />
              <Skill name="NextJS" image="nextjs.png" color="#F3FCF0" />
              <Skill name="Tailwindcss" image="tailwindcss.png" color="#61dafb" />
              <Skill name="Django" image="django.png" color="#E8E9F3" />
              <Skill name="Flask" image="flask.png" color="#B1E5F2" />
              <Skill name="MongoDB" image="mongodb.png" color="#C98BB9" />
              <Skill name="PostgreSQL" image="postgresql.png" color="#F86624" />
              <Skill name="Firebase" image="firebase.png" color="#6564DB" />
              <Skill name="Git" image="git.png" color="#41E2BA" />
              <Skill name="Linux" image="linux.png" color="#DDFBD2" />
              <Skill name="Docker" image="docker.png" color="#f3e945" />
              <Skill name="GitHub" image="github.png" color="#77FF94" />
              <Skill name="GraphQL" image="graphql.png" color="#264fe3" />
              <Skill name="Three.js" image="three.png" color="#e34f26" />


            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>

  );
};

export default Home;
