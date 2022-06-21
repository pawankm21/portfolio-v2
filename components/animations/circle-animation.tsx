import { motion } from "framer-motion";
export default function CircleAnimation() {
    const circleVariant = {
        animate1: {
            translateX: [0, 100, 0, -100, 0],
            transition: {
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
            }

        },
        animate2: {
            translateX: [0, -100, 0, 100, 0],
            transition: {
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
            }
        },


    }
    return (
        <motion.div
            animate={{
                filter: "blur(44px)",
                transition: {
                    duration: 1,
                    ease: "easeInOut",
                },
            }}
            className="w-full h-full absolute flex justify-center overflow-hidden ">
            <div className="relative ">
                <motion.div variants={circleVariant} animate="animate1" className="w-96 h-96 opacity-75 rounded-full bg-MiddlePurple absolute  mix-blend-multiply left-0 "></motion.div> <motion.div variants={circleVariant} animate="animate2" className=" w-96 h-96 rounded-full bg-FireOpal absolute  mix-blend-multiply  opacity-50  left-0"></motion.div>
               
            </div>
        </motion.div>
    )
}
