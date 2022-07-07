import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
export default function Card({ name, image, description,onClick,link }: any) {
    return <motion.div onClick={onClick}
        className=" h-full w-full bg-black lg:p-6 p-2 cursor-pointer">
       {image? <Image src={image} alt={name} width={400} height={200} layout="responsive" objectFit="cover" />:null}
        <h1 className=" lg:text-2xl text-xs capitalize font-bold text-neutral-100 lg:my-3 ">{name}</h1>
        {description ? <p className="text-[0.6rem] lg:text-base lg:h-20">{description}</p> : null}
        {link?<div className="my-4">
            <Link href={link}>
            <a className="hover:text-red-400 px-3 p-1 bg-neutral-700 rounded-full">
                <span className="underline hover:no-underline">
                Know More
                </span>
                {" ->"}</a>
            </Link>
        </div>:null}
    </motion.div>
}