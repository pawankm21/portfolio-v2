import Navbar from "../components/navbar";
import Footer from "../components/footer";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import styles from "../styles/styles.module.css";
import { initialVariant } from "../utils/utils";
const Blogs: NextPage = () => {
  return (
    <motion.div
      className={`${styles.layout} bg-neutral-900`}
    >
      <Navbar />
      <div className={`${styles.main}  `}></div>
      <Footer />
    </motion.div>
  );
};

export default Blogs;
