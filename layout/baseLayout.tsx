import styles from "./styles.module.css"
import { motion } from "framer-motion"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import React from "react"
import Head from "next/head"
export default function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            className={`${styles.layout} bg-neutral-900`}
        >
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Pawan Mishra</title>
                <meta name="title" content="Pawan Mishra" />
                <meta name="description" content="Portfolio of Pawan Mishra" />
                <meta name="keywords" content="Portfolio, Web developer, Pawan, Mishra, Information Technology" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8 " />
                <meta name="language" content="English" />

            </Head>
            <Navbar />
            <main className={`${styles.main}`}>
                {children}
            </main>
            <Footer />
        </motion.div>
    )
}
