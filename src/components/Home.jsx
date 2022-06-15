import React from 'react'
import {MdOutlineWavingHand} from "react-icons/md";
import {
    FaGithub,
    FaLinkedin,
  } from 'react-icons/fa';

const Home = () => {

  return (
    <div name='home' className=' min-w-full h-screen justify-center items-center  bg-[#1C0934]'>
        {/* Home Container */}
        
        <div className=' mx-auto flex flex-col justify-center items-center h-full'>
            <h1 className=' inline-flex  text-4xl sm:text-5xl font-bold justify-center items-center text-green-400 px-2'>
                Hello There  <MdOutlineWavingHand className='ml-2' />
            </h1>

            <h1 className='text-2xl sm:text-4xl font-bold text-white'>
                My name is Lauren Powell.
            </h1>
            <h1 className='text-2xl sm:text-3xl font-bold py-2 text-white'>
                Welcome to my portfolio.
            </h1>
            <p className='text-white text-center pb-4 '>
                Please feel free to look around, or visit my other pages.
            </p>

            <div className='flex justify-center items-center w-full'>
                <a  className=' flex justify-end items-center w-[15%]  text-blue-400'
                    href='https://www.linkedin.com/in/lashpowell1/' 
                    target='_blank'
                    rel="noreferrer">  <FaLinkedin size={40} />
                </a> 
                <a  className='flex justify-start items-center w-[15%] text-gray-300'
                    href='https://github.com/laurenpowell'
                    target='_blank'
                    rel="noreferrer">  <FaGithub size={40} />
                </a>
            </div>

            <p className='text-white py-4 '>
                Thanks for visiting!
            </p>
            
        </div>
        





    </div>
  )
}

export default Home
