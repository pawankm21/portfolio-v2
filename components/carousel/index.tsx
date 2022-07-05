import projects from "../../data/projects.json"
import Link from 'next/link';
import { motion } from "framer-motion"
import Card from "./card"
import { useState } from "react"
export default function Carousel() {
    const [position, setPosition] = useState(1);
    const range = [-1, 0, 1];

    return <div className="relative" id="row">
        {range.map((i: number) => ((<motion.div
            key={projects[(i + position + projects.length) % projects.length].name}
            animate={{
                scale: i === 0 ? 1 : 0.8,
                left: `${(i) * 40 - 15}vw`,
        
            }}
            whileHover={{
                rotate: i === 0 ? 0 : i === 1 ? -10 : 10,
            }}
            initial={{
                scale: 0,
            }}
   
            className="lg:w-[30vw] w-[40vw] bg-black overflow-hidden absolute  hover:shadow hover:shadow-red-500 shadow-lg rounded-lg top-4 min-h-fit " id="container">
            <Card onClick={() => {
                if (i === 0) return;
                setPosition((i + position + projects.length) % projects.length);
            }}{...projects[(i + position + projects.length) % projects.length]} />
            <Link href="/" >
                <a className="px-6  hover:text-red-400">
                    <span className="underline hover:no-underline">
                        View More 
                    </span>
                    {" ->"}</a>
            </Link>
        </motion.div>
        )))}

    </div>
}