import { motion } from "framer-motion";
import { delayVariant } from "../../utils/utils";
export default function Footer() {
  return (
    <motion.div
      variants={delayVariant}
      animate="animate"
      initial="initial"
      className="bg-zinc-800 p-4 text-neutral-400"
    ></motion.div>
  );
}
