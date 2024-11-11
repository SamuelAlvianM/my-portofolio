'use client'
import Image from "next/image"
import Link from "next/link"

export default function Projects() {

    return (
        <section className="md:px-20 xl:px-80 w-full h-full flex flex-col justify-center items-start py-16 text-neutral-200">
            <h1 className="w-full font-bold text-left sm:text-[3rem] md:text-[4rem]">Projects</h1>
            
            {/* PROJECT AXIE INFINITY */}
            <article className="group transition border-t flex justify-between items-center text-neutral-700 border-neutral-800 w-full h-24 
            hover:bg-neutral-900 hover:cursor-pointer ease-in-out duration-150">
            <Link 
                href="https://futureengineeringassociation.site/"
                target="_blank"
                className="group transition border-t flex justify-between items-center text-neutral-700 border-neutral-800 w-full h-24 
                hover:bg-neutral-900 hover:cursor-pointer ease-in-out duration-150"
            >
                <h1 className="text-3xl transition-transform group-hover:translate-x-6 group-hover:text-white">Axie Infinity</h1>

                <figure className="relative pr-2 flex flex-row scale-75 transform opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150">
                    <div className="h-full w-3/4 p-6 rounded-xl flex justify-center items-center bg-neutral-900 border border-neutral-950 shadow-inner-white">
                        <Image
                            src="/axie-infinity.jpeg"
                            alt="Project Image"
                            width={500}
                            height={500}
                            className="rounded-sm"
                        />
                        <figcaption className="flex flex-col justify-end absolute top-10 right-8 gap-3">
                            <span className="bg-emerald-300 rounded-full p-2 text-s font-black text-indigo-900 text-center">HTML</span>
                            <span className="bg-emerald-300 rounded-full p-2 text-s font-black text-indigo-900 text-center">CSS</span>
                            <span className="bg-emerald-300 rounded-full p-2 text-s font-black text-indigo-900 text-center">JavaScript</span>
                        </figcaption>
                    </div>
                </figure>
            </Link>
            </article>

            {/* PROJECT VOGUE SCHOOL */}
            <Link
                href="https://vogueschool-dev-env.netlify.app/dashboard/teacher/course"
                target="_blank"
                className="group transition border-t flex justify-between items-center text-neutral-700 border-neutral-800 w-full h-24 
                hover:bg-neutral-900 hover:cursor-pointer ease-in-out duration-150"
            >
                <h1 className="text-3xl transition-transform group-hover:translate-x-6 group-hover:text-white">Vogue School</h1>

                <div className="relative pr-2 flex flex-row scale-75 transform opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-150">
                    <div className="h-full w-3/4 p-6 rounded-xl flex justify-center items-center bg-neutral-900 border border-neutral-950 shadow-inner-white">
                        <Image
                            src="/vogue-school.jpeg"
                            alt="Project Image"
                            width={500}
                            height={500}
                            className="rounded-sm"
                        >
                            
                        </Image>
                    </div>
                    {/* <div className="h-full w-1/4 flex flex-col justify-between">
                    <div className="bg-purple-500 rounded-full m-1 ml-4 p-6 text-white">Python</div>
                    <div className="bg-purple-500 rounded-full m-1 ml-4 p-6 text-white">Flask</div>
                    <div className="bg-purple-500 rounded-full m-1 ml-4 p-6 text-white">MySQL</div>
                    <div className="bg-purple-500 rounded-full m-1 ml-4 p-6 text-white">React</div>
                    <div className="bg-purple-500 rounded-full m-1 ml-4 p-6 text-white">Railway</div>
                    <div className="bg-purple-500 rounded-full m-1 ml-4 p-6 text-white">Docker</div>
                    </div> */}
                </div>
            </Link>

            {/* PROJECT WE RENT */}
            <Link
                href="https://we-rent-fe.vercel.app/register"
                target="_blank"
                className="group transition border-t flex justify-between items-center text-neutral-700 border-neutral-800 w-full h-24 
                hover:bg-neutral-900 hover:cursor-pointer ease-in-out duration-150"
            >
                <h1 className="text-3xl transition-transform group-hover:translate-x-6 group-hover:text-white">We Rent</h1>

                <div className="relative pr-2 flex flex-row scale-75 transform opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-150">
                    <div className="h-full w-3/4 p-6 rounded-xl flex justify-center items-center bg-neutral-900 border border-neutral-950 shadow-inner-white">
                        <Image
                            src="/we-rent.png"
                            alt="Project Image"
                            width={500}
                            height={500}
                            className="rounded-sm"
                        >
                            
                        </Image>
                    </div>
                    {/* <div className="h-full w-1/4 flex flex-col justify-between">
                        <div className="bg-blue-500">Test</div>
                        <div className="bg-green-500">test</div>
                        <div className="bg-purple-500">test</div>
                    </div> */}
                </div>
            </Link>

            {/* PROJECT SALEMATE */}
            <Link
                href="https://sale-mate-fe.vercel.app/"
                target="_blank"
                className="group transition border-t border-b flex justify-between items-center text-neutral-700 border-neutral-800 w-full h-24 
                hover:bg-neutral-900 hover:cursor-pointer ease-in-out duration-150"
            >
                <h1 className="text-3xl transition-transform group-hover:translate-x-6 group-hover:text-white">Salemate</h1>

                <div className="relative pr-2 flex flex-row scale-75 transform opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-150">
                    <div className="h-full w-3/4 p-6 rounded-xl flex justify-center items-center bg-neutral-900 border border-neutral-950 shadow-inner-white">
                        <Image
                            src="/salemate.jpeg"
                            alt="Project Image"
                            width={500}
                            height={500}
                            className="rounded-sm"
                        >
                            
                        </Image>
                    </div>
                    {/* <div className="h-full w-1/4 flex flex-col justify-between">
                        <div className="bg-blue-500">Test</div>
                        <div className="bg-green-500">test</div>
                        <div className="bg-purple-500">test</div>
                    </div> */}
                </div>
            </Link>

        </section>
    )
};