import React from 'react'

const About = () => {
    return (
        <div name='about' className=' w-full h-screen flex grow pt-32 pb-20 bg-[#1C0934] text-gray-300 cursor-default '>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full flex  items-center'>
                    <div className='text-left  pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-green-400'>
                        About
                        </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4'>
                    <div className='text-lg text-center  md:text-right md:text-xl '>
                        <div className='flex flex-col'>
                            <p className='text-2xl font-bold border-b-2 border-green-400'>Basics</p>
                            <p className='pt-2'>
                                <span className='font-bold underline'>Name:</span>
                                <span className='pl-2 '>Lauren Powell</span>
                            </p>
                            <p>
                                <span className='font-bold underline'>Location:</span>
                                <span className='pl-2 '>Rainsville, Alabama</span>
                            </p>
                            <p>
                                <span className='font-bold underline'>Favorite Languages:</span>
                                <span className='pl-2 '>Javascript and Python </span>
                            </p>
                            <p>
                                <span className='font-bold underline'>Favorite Frameworks:</span>
                                <span className='pl-2 '>React and Django</span>
                            </p>

                        </div>
                    </div>
                    <div className='text-lg md:text-left md:text-xl '>
                        <div className='flex flex-col'>
                            <div className='grid grid-cols-2 gap-2 items-center '>
                                <div>
                                    <p className=' text-center text-2xl font-bold border-b-2 border-green-400'> Likes </p>
                                    <ul className='sm:pl-8 pt-2 sm:list-disc '> 
                                        <li> Coding </li>
                                        <li> Learning </li>
                                        <li> Gaming </li>
                                        <li> Problem Solving </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className=' text-center text-2xl font-bold border-b-2 border-green-400'> Dislikes </p>
                                    <ul className='sm:pl-8 pt-2 sm:list-disc'> 
                                        <li> Disorganization </li>
                                        <li> 90° weather</li>
                                        <li> Interviews  </li>
                                        <li> Public Speaking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className='max-w-[1000px] w-full px-4'>
                    <div className='text-lg text-center pt-8  md:text-xl '>
                        <div className='flex flex-col'>
                            <p className='text-2xl font-bold border-b-2 border-green-400'>Summary</p>
                            <p className='pt-2'>
                                I am Computer Science graduate with experience in many areas.
                                I am looking forward to finding a place of employment that allows me to use the knowledge I have
                                acquired, while being able to learn new concepts, and further expand my areas of expertise. 
                            </p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default About