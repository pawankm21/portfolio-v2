import { motion } from "framer-motion";
import { delayVariant } from "../../utils/utils";
import GithubIcon from "../icons/github-icon";
import LinkedinIcon from "../icons/linkedin-icon";
import MailIcon from "../icons/mail-icon";
import TwitterIcon from "../icons/twitter-icon";
export default function Footer() {
  return (
    <motion.div
      variants={delayVariant}
      animate="animate"
      initial="initial"
      className="bg-zinc-800 h-20 flex place-items-center justify-center text-neutral-400 gap-4"
    >
      <TwitterIcon className="w-6 h-6" />
      <GithubIcon className="w-6 h-6"/>
      <LinkedinIcon className="w-6 h-6" />
      <MailIcon className="w-6 h-6"/>
    </motion.div>
  );
}
