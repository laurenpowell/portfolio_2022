import React from 'react'

const Education = () => {
  return (
    <div name='education' className=' w-full h-screen  bg-[#1C0934] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          
            <div className=' max-w-[1000px]  w-full flex text-left items-center pl-2 pb-12'>
                <p className=' text-4xl font-bold border-b-4 border-green-400'>
                  Education
                </p>
            </div>
            <div className='max-w-[1000px] w-full grid lg:grid-cols-2 gap-8 px-4 '>
                <div className=' w-full flex flex-col justify-center items-center '>
                    <p className='text-xl sm:text-2xl pt-2 font-bold  border-b-4 border-green-400'>
                        Master of Science in Computer Science
                    </p>
                    <p className='text-xl pt-2'>
                        <li> Jacksonville State University</li>
                        <li> Overall GPA: 3.81</li>
                        <li> Date: May 2021</li>
                    </p>
                </div>
                <div className=' w-full flex flex-col justify-center items-center '>
                    <p className='text-xl sm:text-2xl pt-2 font-bold  border-b-4 border-green-400'>
                        Bachelor of Science in Computer Science
                    </p>
                    <p className='text-xl pt-2'>
                        <li> Jacksonville State University</li>
                        <li> Special Honors in Computer Science</li>
                        <li> Date: May 2019</li>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education