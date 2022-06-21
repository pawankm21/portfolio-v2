import type { NextPage } from "next";
import CircleAnimation from "../components/animations/circle-animation";
import Link from "next/link";
const Home: NextPage = () => {

  return <div className="w-full lg:flex">
    <CircleAnimation />

    <div className="lg:w-1/2 h-full pl-16 relative z-10 mt-16 text-DarkPurple">
      <h1 className="text-6xl font-bold">Hi</h1>
      <h1 className="text-6xl font-bold">I am Pawan,</h1>
      <h1 className="text-6xl font-bold ">a <span className=" underline">Web Developer</span><span className="text-FireOpal">.</span></h1>
      <Link href="#"><a className="text-FireOpal  bg-White"></a></Link>




    </div>
    <div className="lg:1/2 h-full flex place-items-center relative">


    </div>

  </div>;
};

export default Home;
