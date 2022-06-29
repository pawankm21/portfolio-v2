import React from 'react'
import { SkillProps } from '../../types/prop-types'
import { motion } from 'framer-motion'
import { useLoader, Canvas } from '@react-three/fiber'
import Image from 'next/image'
export default function Skill({ name, image, color,className }: SkillProps) {
    return (
        <motion.div
            style={{
                backgroundColor: color,
            }}
        >

            <motion.div
                whileHover={{
                    translateY: -10,
                    translateX: 10,
                    translateZ:2,
                    color: "white",
                }}
                className={` ${className} p-4 text-neutral-400
                 bg-neutral-900 grid grid-col-2 place-items-center justify-center w-full   h-full`}>
                <Image src={"/icons/" + image} layout="fixed" width={36} height={36} alt={name}
                objectFit="contain"
                />
                <p className='ml-2'>
                    {name}

                </p>
            </motion.div>
        </motion.div>
    )
}
