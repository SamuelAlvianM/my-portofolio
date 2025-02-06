'use client'

import { Hero, Projects, Contact, CustomCursor} from "../components";
import { useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from "next/app";
import Image from 'next/image';
import Link from "next/link";

export default function Homepage() {
    useEffect( () => {

        (
            async () => {
                const LocomotiveScroll = (await import ('locomotive-scroll')).default;
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])
    
    return (
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative h-[350vh] overflow-y-scroll">
                        <div>
                            <CustomCursor />
                        </div>
                        <div>
                            <Hero />
                        </div>
                        <section className="text-center py-10">
                            <h1 className="text-2xl font-bold mb-5">My Games</h1>
                            <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/tic-tac-toe-p">
                                <motion.div
                                    whileHover={{ y: [-5, 5, -5], transition: { duration: 1, repeat: Infinity, repeatType: "reverse" } }}
                                    className="flex flex-col items-center cursor-pointer"
                                >
                                    <Image
                                        src="/o.png"
                                        alt="Tic-Tac-Toe"
                                        width={200}
                                        height={200}
                                        className="rounded-full"
                                    />
                                    <p className="text-xl font-bold text-yellow-400">Tic-Tac-Toe</p>
                                </motion.div>
                            </Link>
                            </div>
                        </section>
                        <div>
                            <Projects />
                        </div>
                        <div>
                            <Contact />
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

    )
};
