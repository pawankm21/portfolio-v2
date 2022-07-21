
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
            drag="x"
            dragConstraints={{
                left: 0,
                right: 0,
            }}
            onDrag={ i=== 0 ? (e: any, info: any) => {
                if (info.offset.x > 40) {
                    setPosition((i + position - 1 + data.length) % data.length);
                } else if (info.offset.x < -40) {
                    setPosition((i + position + 1) % data.length);
                }

            } : undefined}
            dragSnapToOrigin={true}
            dragElastic={0.3}
            initial={{
                scale: 0,
            }}

            className="lg:w-[30vw] w-[40vw] bg-black overflow-hidden absolute  hover:shadow hover:shadow-red-500 shadow-lg rounded-lg top-2 min-h-fit " id="container">
            <Card {...data[(i + position + data.length) % data.length]} />
        </motion.div>
        )))}

    </div>
}