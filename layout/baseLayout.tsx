import styles from "./styles.module.css"
import { motion } from "framer-motion"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import React from "react"
export default function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <motion.div

            className={`${styles.layout} bg-neutral-900`}
        >
            <Navbar />
            <div className={`${styles.main}`}>
                {children}
            </div>
            <Footer />
        </motion.div>
    )
}
