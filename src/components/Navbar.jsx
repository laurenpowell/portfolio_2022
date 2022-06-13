import React, {useState} from 'react';
import Logo from '../assets/logo.png';
import LogoImage from '../assets/logoImage.png';
import { Link } from 'react-scroll';

import {
    FaBars,
    FaTimes,
  } from 'react-icons/fa';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center mx-auto bg-[#2F0F57] text-gray-300 z-10'>
        
        {/* Profile Image */}
        <div className='hidden md:flex '>
            <img src={LogoImage} alt='Logo' style={{ width: '112px' }} />
        </div>

        {/* Page Menu */}
        <ul className='hidden text-lg md:flex'>
            <li>
                <Link to="home" smooth={true} duration={500} >
                    Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500} >
                    About
                </Link>
            </li>
            <li>
                <Link to="projects" smooth={true} duration={500} >
                    Projects
                </Link>
            </li>
            <li>
                <Link to="education" smooth={true} duration={500} >
                    Education
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500} >
                    Skills
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500} >
                    Contact
                </Link>
            </li>
        </ul>

        {/* Logo Image */}
        <div>
            <img src={Logo} alt='Logo' style={{ width: '105px' }} />
        </div>

        {/* Open Menu for mobile*/}
        <div onClick={handleClick} className='p-5 md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Page Menu for mobile */}
        <ul className={ 
            !nav ? 'hidden' : 
            'absolute top-[80px] left-0 w-full h-[150px] bg-[#2F0F57] flex flex-col justify-center items-center border-t-4 border-green-400 md:hidden'}>
        <li>
                <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                    Home
                </Link>
            </li>
            <li>
                <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                    About
                </Link>
            </li>
            <li>
                <Link onClick={handleClick} to="projects" smooth={true} duration={500} >
                    Projects
                </Link>
            </li>
            <li>
                <Link onClick={handleClick} to="education" smooth={true} duration={500} >
                    Education
                </Link>
            </li>
            <li>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                    Skills
                </Link>
            </li>
            <li>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                    Contact
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar