import Image from "next/image"
import { motion } from "framer-motion"
export default function Card({ name, image, description,onClick }: any) {
    return <motion.div onClick={onClick}
        className=" h-full w-full bg-black lg:p-6 p-2 cursor-pointer">
        <Image src={"/icons/javascript.png"} alt={name} width={400} height={200} layout="responsive" objectFit="cover" />
        <h1 className=" lg:text-2xl text-xs capitalize font-bold text-neutral-100 lg:my-3 ">{name}</h1>
        <p className="text-[0.6rem] lg:text-base">{description}</p>
    </motion.div>
}