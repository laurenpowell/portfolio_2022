import React from 'react'
import { projects } from "../data";
const Projects = () => {
    return (
        <div name='projects' className=' w-full z-1 pt-20 pb-20 flex grow justify-center items-center bg-[#1C0934] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
                <div className='text-right'>
                    <p className='text-4xl font-bold inline border-b-4 border-green-400 '>Projects</p>
                    <p className='py-4'>/* These are a few of the projects I've worked on */</p>
                </div>

                {/* Container */}
                
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 text-center py-8'>
                    {projects.map((project) => (
                        <div className="group  sm:w-96 flex justify-center items-center mx-auto relative cursor-pointer border-4 border-green-400 ">
                            <img 
                                key={project.image}
                                className='object-cover'
                                src={project.image}
                                alt="" 
                                href="#"
                                />
                            
                            <div className=' absolute w-full h-full  opacity-0 group-hover:opacity-100 bg-[#1C0934]'>
                                <p className='text-lg font-bold pb-2 text-green-400 tracking-wider'>
                                    {project.subtitle}
                                </p>
                                <p className='text-2xl font-bold  text-white tracking-wider'>
                                    {project.title}
                                </p>
                                <p className="leading-relaxed">{project.description}</p>
                                <div className='pt-4 text-center'>
                                    <a href={project.link} target='_blank' rel='noreferrer'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                            Demo
                                        </button>
                                    </a>
                                    <a href={project.codeLink} target='_blank' rel='noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>  
            </div>
        </div>
    )
}
  

export default Projects