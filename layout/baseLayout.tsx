import Navbar from "../components/navbar";
import SlantIcon from "../components/icons/slant-icon";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import style from "./Layout.module.css";
type Props = {
  children: React.ReactNode;
};
export function BaseLayout({ children }: Props) {
  return (
    <>
      <motion.div
        animate={{
          width: "100%",
          height: "100%",
          borderTopRightRadius: ["100%", "25%", "0%"],
          borderBottomRightRadius: ["100%", "25%", "0%"],

          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        initial={{
          width: 0,
          height: 0,
          opacity: 0,
        }}
        className={`${style.layout} bg-neutral-900`}
      >
        <Navbar />
        <div className={`${style.main} bg-inherit `}>{children}</div>
        <Footer />
      </motion.div>
    </>
  );
}
