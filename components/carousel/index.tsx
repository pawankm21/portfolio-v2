
import Link from 'next/link';
import { motion } from "framer-motion"
import Card from "./card"
import { useState } from "react"
export default function Carousel(props: any) {
    const [position, setPosition] = useState(1);
    const range = [-1, 0, 1];
    const data = props.data;
    return <div className="relative" id="row">
        {range.map((i: number) => ((<motion.div
            key={data[(i + position + data.length) % data.length].name}
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

            className="lg:w-[30vw] w-[40vw] bg-black overflow-hidden absolute  hover:shadow hover:shadow-red-500 shadow-lg rounded-lg top-2 min-h-fit " id="container">
            <Card onClick={() => {
                if (i === 0) return;
                setPosition((i + position + data.length) % data.length);
            }}{...data[(i + position + data.length) % data.length]} />
        </motion.div>
        )))}

    </div>
}