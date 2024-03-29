import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import { motion } from 'framer-motion';
import SphereAnimation from "../components/animations/sphere-animation";
import { delay, section } from "../utils/utils";
import Card from "../components/carousel/card";
import CircleAnimation from "../components/animations/circle-animation";
import Skill from "../components/skills";
import { useRef } from 'react';
import Carousel from '../components/carousel';

const Home: NextPage = ({ blogs, projects, skills }: any) => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const handleScroll = (ref: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  return (
    <motion.div
      variants={delay}
      animate="animate"
      initial="initial"
      className="w-full min-h-[100vh]"
    >
      <section className="w-full h-[100vh]">
        <motion.div
          className="text-white px-12 py-8 absolute text-center flex justify-center w-full top-36" id="intro">
          <div>
            <p className="lg:text-left lg:text-red-400 font-bold ml-1"> Hi, my name is</p>
            <h1 className="text-8xl font-extrabold">Pawan Mishra.</h1>
            <p className="font-bold p-2 ">I am a Software Engineer.</p>
          </div>
        </motion.div>

        <motion.div
          className="w-full h-full" >
          <Canvas className=" mix-blend-exclusion -my-6" >
            <SphereAnimation />
          </Canvas>
        </motion.div>

        <motion.button
          whileHover={{
            translateY: -5,
            translateX: 5,
          }}
          onClick={() => handleScroll(aboutRef)}
          className="absolute text-white py-4 border bottom-6 border-neutral-400 px-6 lg:bottom-12 lg:left-6 left-4">
          Continue
        </motion.button>
      </section>

      <section className="w-full mt-32 " id="about"  >
        <div className={`relative`} >
          <motion.div
            className="w-full absolute h-full bg-red-500 z-0" ref={aboutRef} />
          <motion.div
            variants={section}
            whileInView="whileInView"
            initial="initial"
            className="relative z-10  shadow-2xl m-4 p-4 border border-neutral-500 rounded text-neutral-200  bg-neutral-800">
            <motion.h1 layout className="text-5xl font-bold px-8">About me</motion.h1>
            <motion.div layout className="lg:flex p-4 mt-5">
              <motion.div className="lg:w-1/2 p-4 bg-neutral-900 rounded border border-neutral-500 shadow-red-400 shadow-lg hover:shadow hover:shadow-red-500 transition duration-300">
                <h1 className="text-white text-lg font-bold"> Hi!</h1>
                <p className="text-neutral-300">
                  I am a <span className="font-semibold text-red-300">Software Engineer </span> from India.
                  I have been learning  and working with the <span className="font-semibold text-red-300">React&rsquo; s ecosystem</span> since 2 years. I like to code things that are <span className="font-semibold text-red-300">user-friendly</span> and <span className="font-semibold text-red-300">
                    {" "}
                    responsive
                  </span>
                </p>
                <p className="text-neutral-300 my-1">
                  This is my website where I share my projects, blogs and other stuff.
                  <span className="font-semibold text-red-300"> Hope you like it 😀!</span>
                </p>

              </motion.div>
              <motion.div className="lg:w-1/2 lg:block hidden">
                <div className=" flex justify-center align-top -z-10 h-full relative lg:min-h-[250px]">
                  <CircleAnimation />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="w-full mt-32" ref={skillsRef} id="skills">
        <div className={`relative mt-24`} >
          <motion.div
            className="w-full absolute h-full  bg-red-500 z-0"></motion.div>
          <motion.div
            variants={section}
            whileInView="whileInView"
            initial="initial"
            className="relative z-10  shadow-2xl m-4 p-4 border border-neutral-500 rounded text-neutral-200 bg-neutral-800">
            <motion.h1 layout className="text-5xl font-bold px-8">Skills</motion.h1>
            <motion.div layout className="m-6 p-4 bg-neutral-900 rounded border border-neutral-500 shadow-red-400 shadow-lg hover:shadow hover:shadow-red-500 transition duration-300 relative grid lg:grid-cols-8 sm:grid-cols-4  grid-cols-3
              place-items-center "

            >
              {skills.map((skill: any) => {
                return <Skill key={skill.name} {...skill} />
              })}

            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="w-full  mt-32" id="projects">
        <div className={`relative mt-24 lg:h-[100vh]`} >
          <motion.div
            className="w-full h-full absolute   bg-red-500 z-0"></motion.div>
          <motion.div
            variants={section}
            whileInView="whileInView"
            initial="initial"
            className="relative z-10  shadow-2xl m-4 p-4 border border-neutral-500 rounded text-neutral-200 bg-neutral-800">
            <motion.h1 layout className="text-5xl font-bold px-8 ">Projects</motion.h1>
            <motion.p
              layout
              className="px-8 text-sm mt-4"
            >Swipe to view projects</motion.p>
            <motion.div
              layout
              className="w-full absolute bg-red-500 z-0"></motion.div>
            <motion.div layout className="lg:w-[90vw] m-6 p-4 bg-neutral-900 rounded border border-neutral-500 shadow-red-400 shadow-lg  lg:h-[75vh] md:h-[60vh] h-[38vh] overflow-hidden flex justify-center  mx-auto relative">

              <Carousel data={projects} />
            </motion.div>

          </motion.div>
        </div>

      </section>

      <section className="w-full  mt-32" id="blogs">
        <div className={`relative mt-24 lg:h-[100vh]`} >
          <motion.div
            className="w-full h-full absolute bg-red-500 z-0"></motion.div>
          <motion.div
            variants={section}
            whileInView="whileInView"
            initial="initial"
            className="relative z-10  shadow-2xl m-4 p-4 border border-neutral-500 rounded text-neutral-200 bg-neutral-800">
            <motion.h1 layout className="text-5xl font-bold px-8 ">Blogs</motion.h1>
            <motion.div layout
              className="w-full absolute bg-red-500 z-0"></motion.div>
            <motion.div layout className="m-6 p-10 bg-neutral-900 rounded border border-neutral-500 shadow-red-400 shadow transition duration-300 relative grid gap-4 lg:grid-cols-2">
              {blogs.map((blog: any) => (
                <motion.div key={blog.name} className="hover:shadow hover:shadow-red-500 shadow-lg p-2 bg-black rounded-lg">
                  <Card  {...blog} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

    </motion.div>

  );
};

export default Home;

export async function getStaticProps() {
  const blogs = await require(`../data/blogs.json`)
  const projects = await require(`../data/projects.json`)
  const skills = await require(`../data/skills.json`)
  return {
    props: {
      blogs,
      projects,
      skills
    }
  }
}
