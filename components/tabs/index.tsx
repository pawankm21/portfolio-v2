import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
export default function Tabs({ links, active }: any) {

    return <div className="flex gap-4 ">

        {links.map((link: any, ind: number) => {
            return (
                <motion.button className="text-neutral-300"
                    onClick={() => {
                        const element = document.getElementById(link);
                        element?.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                        })
                    }}
                    key={link}>{link}</motion.button>
            );
        })}
    </div>
}
