import Link from "next/link";
import MenuButton from "./menu";
import LinkedinIcon from "../icons/linkedin-icon";
import GithubIcon from "../icons/github-icon";
import LeetcodeIcon from "../icons/leetcode-icon";
import { motion } from "framer-motion";
import { delay } from "../../utils/utils";
import Tabs from "../tabs";
export default function Navbar() {

  const homeLinks = [
    "about",
    "projects",
    "blogs",
    "contact",
  ];
  return (
    <motion.div
      variants={delay}
      initial="initial"
      animate="animate"
      className=" w-full  bg-neutral-900   sticky top-0 z-50 shadow shadow-gray-700 flex px-16 py-4 justify-between  place-items-end "
    >
      <Link href="/">

      <h1 className="text-xl font-bold text-white">
        Pawan <span className="text-red-600 font-bold text-4xl">.</span>{" "}
      </h1>
      </Link>

      <div className="lg:flex gap-12 w-1/3 mt-2 ml-24  justify-center place-content-end  hidden ">
        <Link href="https://linkedin.com/in/pawan-kumar-mishra/">
          <a>
            <LinkedinIcon className="w-6 text-red-500 h-6" />
          </a>
        </Link>
        <Link href="https://github.com/pawankm21/">
          <a>
            <GithubIcon className="w-6 text-red-500 h-6" />
          </a>
        </Link>
        <Link href="https://leetcode.com/castrocee/">
          <a>
            <LeetcodeIcon className="w-6 text-red-500 h-6" />
          </a>
        </Link>
      </div>


      <motion.div className="lg:flex gap-3 justify-self-end hidden  font-bold ">
        <Tabs links={homeLinks} />
      </motion.div>

      <MenuButton links={homeLinks} />
    </motion.div>
  );
}
