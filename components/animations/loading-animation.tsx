import { motion } from "framer-motion"

export default function LoadingAnimation() {
    return (
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
                }
            }}
            initial={{
                width: 0,
                height: 0,
                opacity: 0,

            }}
            className=" bg-neutral-900 absolute top-0 left-0 -z-10"
        ></motion.div>
    )
}
