import Link from "next/link";
import MenuButton from "./menu";
import LinkedinIcon from "../icons/linkedin-icon";
import GithubIcon from "../icons/github-icon";
import LeetcodeIcon from "../icons/leetcode-icon";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { delayVariant } from "../../utils/utils";
export default function Navbar() {
  const router = useRouter();

  const [active, setActive] = useState<string>("/");
  useEffect(() => {
    setActive(router.pathname);
    console.log("update");
  }, [router]);
  const links = [
    {
      link: "/",
      name: "home",
    },
    {
      link: "/projects",
      name: "projects",
    },
    {
      link: "/blogs",
      name: "blogs",
    },
  ];
  return (
    <motion.div
      variants={delayVariant}
      initial="initial"
      animate="animate"
      className=" w-full bg-blend-saturation z-10 shadow shadow-gray-700 flex px-16 py-4 justify-between  place-items-end "
    >
      <h1 className="text-xl font-bold text-white">
        Pawan <span className="text-red-600 font-bold text-4xl">.</span>{" "}
      </h1>

      <div className="lg:flex gap-12 w-1/3 mt-2 ml-24  justify-center place-content-end  hidden ">
        <LinkedinIcon className="w-6 text-red-500 h-6" />
        <GithubIcon className="w-6 text-red-500 h-6" />
        <LeetcodeIcon className="w-6 text-red-500 h-6" />
      </div>

      <div className="lg:flex gap-3 justify-self-end hidden  font-bold ">
        {links.map((link, ind) => {
          return (
            <div className=" cursor-pointer " key={link.link}>
              <Link href={link.link}>
                <motion.a className="text-white">{link.name}</motion.a>
              </Link>
              {link.link === active ? (
                <motion.div
                  className="border border-red-400 rounded-full w-full bg-red-400"
                  layoutId="underline"
                />
              ) : null}
            </div>
          );
        })}
      </div>

      <MenuButton links={links} active={active} />
    </motion.div>
  );
}
