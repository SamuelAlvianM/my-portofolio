

import Link from "next/link";
import { githubPath } from './paths/githubPath';
import { linkedinPath } from "./paths/linkedinPath";
import { emailPath } from "./paths/emailPath";

export default function Contact() {

    return (
        <div className="m-5 h-full flex flex-col items-center">
            <div className="text-neutral-300 m-5 py-20 px-40 gap-8 bg-neutral-950 h-[40vh] w-full rounded-xl border-1 border-neutral-950 flex flex-col justify-start items-center">
                <h1 className="text-5xl font-bold">Let's get in touch</h1>
                <div className="w-full flex flex-row justify-center gap-10">
                    
                    {/* GITHUB LINK */}
                    <div>
                        <div className="border bg-neutral-900 border-neutral-950 p-6 rounded-xl shadow-inner-white relative group">
                            <div className="flex flex-col gap-4">
                                <div className="bg-gray-950 rounded-md h-36 w-60 flex justify-center items-center ">
                                    <svg height="80" width="80"  viewBox="0 0 24 24" fill="white">
                                        <path d={githubPath} />
                                    </svg>
                                </div>
                                <h1 className="text-3xl font-bold">
                                    Github
                                </h1>
                            </div>
                            <div className="h-0 overflow-hidden opacity-0 translate-y-[-20px] transition-all ease-in-out duration-300 group-hover:h-6 group-hover:translate-y-0 group-hover:opacity-100">
                                <Link 
                                    href="https://github.com/SamuelAlvianM" 
                                    className="text-neutral-300 text-xs hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    github.com/SamuelAlvianM
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* LINKEDIN LINK */}
                    <div>
                        <div className="border bg-neutral-900 border-neutral-950 p-6 rounded-xl shadow-inner-white relative group">
                            <div className="flex flex-col gap-4">
                                <div className="bg-[#136e96] rounded-md h-36 w-60 flex justify-center items-center ">
                                    <svg height="100" width="8=100"  viewBox="0 0 24 24" fill="white">
                                        <path d={linkedinPath} />
                                    </svg>
                                </div>
                                <h1 className="text-3xl font-bold">
                                    LinkedIn
                                </h1>
                            </div>
                            <div className="h-0 overflow-hidden opacity-0 translate-y-[-20px] transition-all ease-in-out duration-300 group-hover:h-6 group-hover:translate-y-0 group-hover:opacity-100">
                                <Link 
                                    href="https://www.linkedin.com/in/samuel-alvian-m/" 
                                    className="text-neutral-300 text-xs hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    linkedin.com/in/samuel-alvian-m
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* EMAIL LINK */}
                    <div>
                        <div className="border bg-neutral-900 border-neutral-950 p-6 rounded-xl shadow-inner-white relative group">
                            <div className="flex flex-col gap-4">
                                <div className="bg-[#bb3131] rounded-md h-36 w-60 flex justify-center items-center ">
                                    <svg height="80" width="80" viewBox="0 0 32 32" fill="white" >
                                        <path d={emailPath} />
                                    </svg>
                                </div>
                                <h1 className="text-3xl font-bold">
                                    Email
                                </h1>
                            </div>
                            <div className="h-0 overflow-hidden opacity-0 translate-y-[-20px] transition-all ease-in-out duration-300 group-hover:h-6 group-hover:translate-y-0 group-hover:opacity-100">
                                <Link 
                                    href="mailto:oensam07@gmail.com" 
                                    className="text-neutral-300 text-xs hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    oensam07@gmail.com
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}