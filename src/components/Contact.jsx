import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen mx-auto  bg-[#1C0934] flex justify-center items-center p-4 pt-16 text-gray-300'>
        <form method='POST' action="https://getform.io/f/ff6fee4d-6469-4f4b-9950-fddb0825914f" className='flex flex-col max-w-[1000px] w-full'>
            <div className='pb-2'>
                <p className='text-4xl font-bold inline border-b-4 border-green-400 '>Contact</p>
                <p className=' py-4'>/* Submit the form below or send me an email - lash.powell0@gmail.com */</p>
            </div>
            <input className='bg-[#2F0F57] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#2F0F57]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#2F0F57] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className=' border-2  hover:border-green-400 px-4 py-3 mt-4 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact