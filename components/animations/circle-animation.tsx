import { motion } from "framer-motion"
export default function CircleAnimation() {
    const circleVariant = {
        initial: {
            width: 400,
            height:400,
        },
        animate1: {
            translateX: [-100, 100, -100],
            translateY: [100, 0, 100],
            width: [400, 300, 400],
            height: [400, 300, 400],
             
            transition: {
                duration: 9,
                ease: "easeInOut",
                repeat: Infinity,
            }

        },
        animate2: {
            translateX: [100, -100, 100],
            translateY: [0, 100, 0],
            width: [300, 400, 300],
            height: [300, 400, 300],
            transition: {
                duration: 9,
                ease: "easeInOut",
                repeat: Infinity,
            }
        },


    }
    return (
        <motion.div
            animate={{
                filter: "blur(24px)",
                transition: {
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                },
            
            }}
            className="w-full h-full flex justify-center relative z-10">

            <motion.div variants={circleVariant} initial="initial" animate="animate1" className="opacity-75 rounded-full bg-purple-300 absolute  mix-blend-multiply "></motion.div> <motion.div initial="initial" variants={circleVariant} animate="animate2" className=" rounded-full bg-red-300 absolute  mix-blend-multiply  opacity-50 "></motion.div>

        </motion.div>
    )
}
