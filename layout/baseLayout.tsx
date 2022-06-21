import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
};
export function BaseLayout({ children }: Props) {
  return (
    <div className="w-full h-full">
      <div className=" flex absolute place-items-center justify-center w-full h-full">
        <motion.div animate={{
          width: "100%",
          height: "100%",
          borderRadius: 0,
          backgroundColor:"bisque",
          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeInOut",
          }

        }}
          initial={{
            width: 20,
            height: 20,
            opacity: 0,
            borderRadius: "100%",
            backgroundColor:"white",
          }}
          className=" absolute "></motion.div>
      </div>
    
      <Navbar />
      <main className="w-100 h-100">{children}</main>
      <Footer />
    </div>
  );
}
