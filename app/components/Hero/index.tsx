'use client'
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { awsarrow, awsline, AWSSvg, MySQLSvg, NestjsSvg, PostgresSvg, PythonSvg1, PythonSvg2, TypescriptSvg } from './path/hero-svg';

export default function Hero() {

    const constraintsRef = useRef(null);



    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
            {/* HEADER */}
            <div   
                className="font-bold flex flex-col items-center text-neutral-300">
                <motion.h1 
                    initial={{ y:50, opacity:0}}
                    animate={{ y:0, opacity:1}}
                    transition={{ duration:1, ease: 'easeInOut'}}
                    className="leading-[6rem] lg:text-[6rem] md:text-[5rem]"
                >
                    SAM
                </motion.h1>
                <div className='lg:text-[1.5rem] md:text-[1rem] font-normal flex flex-row'>
                    <motion.h2
                        initial={{ y:25, opacity:0}}
                        animate={{ y:0, opacity:1}}
                        transition={{ duration:1, ease: 'easeInOut', delay:1}} 
                    >
                        Software Engineer
                    </motion.h2>
                    <motion.h2
                        initial={{ y:25, opacity:0}}
                        animate={{ y:0, opacity:1}}
                        transition={{ duration:1, ease: 'easeInOut', delay:2}}
                    >
                        , Main Backend Developer
                    </motion.h2>
                    <motion.h2
                        initial={{ y:25, opacity:0}}
                        animate={{ y:0, opacity:1}}
                        transition={{ duration:1, ease: 'easeInOut', delay:3}}
                    >
                        , and the Junior Frontend
                    </motion.h2>

                </div>
            </div>

            {/* DRAG ELEMENT */}
            <motion.div
                initial={{ y:25, opacity:0}}
                animate={{ y:0, opacity:1}}
                transition={{ duration:1, ease: 'easeInOut', delay:4}}
            >
                <motion.div ref={constraintsRef} className="border border-white p-5 rounded-full">
                    <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    className="cursor-grab bg-emerald-400 p-3 rounded-full text-white text-center text-xl"
                    >
                    Turn code into Reality
                    </motion.div>
                    <p className="mt-2 text-sm text-center text-gray-400">Drag it!</p>
                </motion.div>
                </motion.div>

            {/* PROGRAMING LANGUAGE */}
            <div className='p-6 flex flex-row gap-6 h-32 w-full justify-center'>
                <motion.div
                    initial={{ y:50, opacity:0}}
                    animate={{ y:0, opacity:1}}
                    transition={{ duration:1, ease: 'easeInOut', delay:5}}
                    className='flex justify-center'
                >
                    <div 
                        className="w-20 border bg-neutral-900 border-neutral-900 p-4 rounded-xl shadow-inner-white flex items-center  cursor-none text-white hover:bg-emerald-300 hover:text-[#3178C6] hover:p-3 transition-all ease-in-out delay-50"
                    >
                        <svg 
                            width="60" 
                            height="60" 
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="2" width="28" height="28" rx="1.312" fill='currentColor'/>
                                <path d={TypescriptSvg}/>
                        </svg>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y:50, opacity:0}}
                    animate={{ y:0, opacity:1}}
                    transition={{ duration:1, ease: 'easeInOut', delay:5.1}}
                    className='flex justify-center'
                >
                    <div
                        className="w-20 border bg-neutral-900 border-neutral-900 p-4 rounded-xl shadow-inner-white flex items-center cursor-none hover:bg-emerald-300 hover:p-3 transition-all delay-50 text-white custom-hover "
                    >
                        <svg 
                            width="60" 
                            height="60" 
                            viewBox="0 0 32 32" 
                            xmlns="http://www.w3.org/2000/svg" 
                        >
                            <path 
                                d={PythonSvg1}
                                fill="currentColor"
                                className='path-1 transition ease-in-out delay-150"'
                            />
                            <path 
                                d={PythonSvg2} 
                                fill="currentColor"
                                className='path-2 transition ease-in-out delay-150"'
                            />
                        </svg>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y:50, opacity:0}}
                    animate={{ y:0, opacity:1}}
                    transition={{ duration:1, ease: 'easeInOut', delay:5.2}}
                    className='flex justify-center'
                >
                    <div className="w-20 border bg-neutral-900 border-neutral-900 p-4 rounded-xl shadow-inner-white flex items-center  cursor-none text-white hover:bg-emerald-300 hover:text-[#336791] hover:p-3 transition-all ease-in-out delay-50"
                    >
                        <svg 
                            fill="currentColor" 
                            width="60" 
                            height="60" 
                            viewBox="0 0 32 32" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                d={PostgresSvg}
                            />
                        </svg>
                    </div>
                </motion.div>
                
                <motion.div
                    initial={{ y:50, opacity:0}}
                    animate={{ y:0, opacity:1}}
                    transition={{ duration:1, ease: 'easeInOut', delay:5.3}}
                    className='flex justify-center'
                >
                    <div className="w-20 border bg-neutral-900 border-neutral-900 p-4 rounded-xl shadow-inner-white flex items-center  cursor-none text-white hover:bg-emerald-300 hover:text-orange-500 hover:p-3 transition-all ease-in-out delay-50"
                    >
                        <svg 
                            width="60" 
                            height="60" 
                            viewBox="-8.78 0 70 70"
                            fill='currentColor'
                        >
                            <path d={MySQLSvg} transform="translate(-830.906 -943.981)"/>
                        </svg>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y:50, opacity:0}}
                    animate={{ y:0, opacity:1}}
                    transition={{ duration:1, ease: 'easeInOut', delay:5.4}}
                    className='flex justify-center'
                >
                    <div className="w-20 border bg-neutral-900 border-neutral-900 p-4 rounded-xl shadow-inner-white flex items-center  cursor-none text-white hover:bg-emerald-300 custom-hover hover:p-3 transition-all ease-in-out delay-50"
                    >
                        <svg 
                            width="60" 
                            height="60" 
                            viewBox="0 0 16 16"
                        >
                            <path fill="currentColor" className="path-3 transition ease-in-out delay-100" d={AWSSvg}/>
                            <path fill="currentColor" className="path-4 transition ease-in-out delay-100" d={awsline}/>
                            <path fill="currentColor" className="path-4 transition ease-in-out delay-100" d={awsarrow}/>
                        </svg>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y:50, opacity:0}}
                    animate={{ y:0, opacity:1}}
                    transition={{ duration:1, ease: 'easeInOut', delay:5.4}}
                    className='flex justify-center'
                >
                    <div className="w-20 border bg-neutral-900 border-neutral-900 p-4 rounded-xl shadow-inner-white flex items-center  cursor-none text-white hover:bg-emerald-300 hover:text-red-600 hover:p-3 transition-all ease-in-out delay-50"
                    >
                        <svg 
                            width="60" 
                            height="60" 
                            viewBox="0 0 16 16"
                        >
                            <path fill="currentColor" d={NestjsSvg}/>

                        </svg>
                    </div>
                </motion.div>
            </div>

            <div>
                <motion.div
                    initial={{ y:50, opacity:0}}
                    animate={{ y:0, opacity:1}}
                    transition={{ duration:1, ease: 'easeInOut', delay:10}}
                    className="text-neutral-300 hover:cursor-none"
                >
                    {/* Down Arrow */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: 10 }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 1,
                            ease: 'easeInOut'
                        }}
                        className='flex flex-col justify-center items-center transition duration-100 ease-in-out hover:drop-shadow-[0_0_3px_#888]'
                    >
                        <h1>
                            Checkout my latest Project
                        </h1>
                        <div className=" text-2xl">
                            ↓
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            {/* NESTJS, PYTHON, TS, POSTGRES, AWS S3, SQL */}
        </div>
    )
};
