
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import type { NextPage } from "next";
import styles from "../styles/styles.module.css";
const Projects: NextPage = () => {

  return (
    <div
      className={`${styles.layout} bg-neutral-900`}
    >
      <Navbar />
      <div className={`${styles.main}  `}>

      </div>
      <Footer />
    </div>
  );
};

export default Projects;
