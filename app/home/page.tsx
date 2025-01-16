'use client'

import { Hero, Projects, Contact, CustomCursor, TicTacToe } from "../components";
import { useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from "next/app";
import {Provider} from 'react-redux';
import konteks_redux_ttt from "../components/hooks/redux/index";

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
        <Provider store={konteks_redux_ttt}>
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
                            
                            <div className="mt-1">
                                
                                <TicTacToe />
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
        </Provider>
    )
};
