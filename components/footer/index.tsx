import { motion } from "framer-motion";
import { delay } from "../../utils/utils";
import GithubIcon from "../icons/github-icon";
import LinkedinIcon from "../icons/linkedin-icon";
import MailIcon from "../icons/mail-icon";
import TwitterIcon from "../icons/twitter-icon";
import Image from "next/image"

export default function Footer() {
  return (
    <motion.div
      variants={delay}
      animate="animate"
      initial="initial"
      className="w-full relative mt-48"
      id="contact"
    >
      <div className="w-full absolute bg-neutral-900 bottom-0">
        <Image src="/assets/divider.png" width="1920" height="800" objectFit="cover" alt="footer" objectPosition={"end"} />
      </div>
      <motion.div

        className=" lg:h-20 flex h-12 place-items-center justify-center text-neutral-400 gap-4 pointer-events-auto relative z-0"
      >

        <a href="https://twitter.com/pawanKM21" rel="noreferrer" target="_blank">
          <TwitterIcon className="w-6 h-6 text-white" /></a>
        <a href="https://linkedin.com/in/pawan-kumar-Mishra" rel="noreferrer" target="_blank">
          <LinkedinIcon className="w-6 h-6 text-white" />
        </a>
        <a href="https://github.com/pawankm21" rel="noreferrer" target="_blank">
          <GithubIcon className="w-6 h-6 text-white" />
        </a>
        <a href="mailto:pawan994567@gmail.com" rel="noreferrer" target="_blank">
          <MailIcon className="w-6 h-6 text-white" />
        </a>
      </motion.div>
    </motion.div>
  );
}
