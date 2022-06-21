import Link from "next/link";
import MenuButton from "./menu";
import LinkedinIcon from "../icons/linkedin-icon";
import GithubIcon from "../icons/github-icon";
import LeetcodeIcon from "../icons/leetcode-icon";
export default function Navbar() {
  return (
    <div className="relative w-full rounded-b flex px-16 py-8 justify-between  place-items-end    ">

      <h1 className="text-2xl font-bold">Pawan<span className="text-FireOpal font-bold text-4xl">.</span> </h1>
      <div className="lg:flex gap-12 w-1/3 mt-2  justify-center place-content-end  hidden ">
        <LinkedinIcon className="w-6 text-FireOpal h-6" />
        <GithubIcon className="w-6 text-FireOpal h-6" />
        <LeetcodeIcon className="w-6 text-FireOpal h-6" />
      </div>

      <div className="lg:flex gap-2 justify-self-end hidden mt-2 text-DarkPurple ">
        <Link href="/">home</Link>
        <div>/</div>
        <Link href="/">projects</Link>
        <div>/</div>
        <Link href="/">blogs</Link>
      </div>
      <div className="lg:hidden block">
        <MenuButton  />
      </div>
    </div>
  );
}
