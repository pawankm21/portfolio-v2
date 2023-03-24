import { motion } from "framer-motion"
export default function CircleAnimation() {
    const circleVariant = {
        initial: {
            width: 400,
            height:400,
        },
        animate1: {
            translateX: [-10, 10, -10],
            translateY: [10, 0, 10],
            width: [200, 100, 200],
            height: [200, 100, 200],
             
            transition: {
                duration: 9,
                ease: "easeInOut",
                repeat: Infinity,
            }

        },
        animate2: {
            translateX: [10, -10, 10],
            translateY: [0, 10, 0],
            width: [100, 200, 100],
            height: [100, 200, 100],
            transition: {
                duration: 9,
                ease: "easeInOut",
                repeat: Infinity,
            }
        },


    }
    return (
        <motion.div
            className="w-full h-full flex justify-center relative filter blur-xl">

            <motion.div variants={circleVariant} initial="initial" animate="animate1" className="opacity-75  bg-red-400 absolute rounded-full  mix-blend-multiply "></motion.div> <motion.div initial="initial" variants={circleVariant} animate="animate2" className=" bg-blue-400 absolute rounded-full mix-blend-multiply  opacity-50 "></motion.div>

        </motion.div>
    )
}
