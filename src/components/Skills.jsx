import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Django from '../assets/django.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen flex justify-center items-center pt-28 bg-[#1C0934] text-gray-300'>
      {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
            <div className='text-right'>
                <p className='text-4xl font-bold inline border-b-4 border-green-400 '>Skills</p>
                <p className='py-4'>/* Here are a few of the technologies I've worked with */</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Django} alt="DJANGO icon" />
                    <p className='my-4'>DJANGO</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="REACT icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GITHUB icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="NODE JS icon" />
                    <p className='my-4'>NODE JS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills