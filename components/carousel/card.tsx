import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
export default function Card({ name, image, description,link }: any) {
    return <motion.div 
        className=" h-full w-full bg-black lg:p-6 p-2 cursor-pointer">
       {image? <Image draggable={false} src={image} alt={name} width={400} height={200} layout="responsive" objectFit="cover" />:null}
        <h1 className=" lg:text-2xl text-xs capitalize font-bold text-neutral-100 lg:my-3 mt-3">{name}</h1>
        {description ? <p className="text-xs lg:text-base lg:h-20   h-12 text-ellipsis overflow-hidden">{description}</p> : null}
        {link?<div className="my-4 lg:mx-0 ml-2">
            <Link href={link}>
            <a className="hover:text-red-400 px-3 p-1 bg-neutral-700 text-sm lg:text-base rounded-full">
                <span className="underline hover:no-underline lg:text-base text-xs">
                Know More
                </span>
                {" ->"}</a>
            </Link>
        </div>:null}
    </motion.div>
}