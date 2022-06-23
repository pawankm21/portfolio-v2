import Navbar from "../components/navbar";
import SlantIcon from "../components/icons/slant-icon";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import style from "./Layout.module.css"
import LoadingAnimation from "../components/animations/loading-animation";
type Props = {
  children: React.ReactNode;
};
export function BaseLayout({ children }: Props) {
  return (<>
    <motion.div
      animate={{
        display: "block",
        opacity: [0, 1],
        transition: {
          duration: 2,
        }
      }}
      initial={{
        opacity: 0,
      }}
      className={`${style.layout}`}>
        <LoadingAnimation/>
      <Navbar />
      <div className={`${style.main} bg-inherit `}>{children}</div>
     
    </motion.div>
        </>
  );
}
