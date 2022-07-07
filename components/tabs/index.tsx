import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
export default function Tabs({ links }: any) {
    const router = useRouter();
    if (router.pathname === "/") {
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
    return <Link href="/">
        <a className="text-neutral-300">Home</a>
    </Link>
}
