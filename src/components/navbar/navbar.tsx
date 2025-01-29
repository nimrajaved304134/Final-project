import React from 'react'
import { IoSearchOutline , IoCartOutline  } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import Menu from './menu';
import Header from './header';
import Link from 'next/link';


const Navbar = () => {
  return (
<nav className=''>

    <div className='flex flex-row justify-between items-center  px-6 5xl:px-20 w-screen text-[24px] leading-[29.52px] py-3 sm:text-[26px] sm:leading-[31.52px] md:border-b-[1px] md:border-[#dbd6d6fb]'>
    <div className='hidden md:flex '>
    <IoSearchOutline />
    </div>


    <div>
    <Link href={'/'}>Avion</Link>
    </div>


    <div className='hidden md:flex md:flex-row md:gap-5 md:justify-center md:items-center'>
    <Link href="/cart"><IoCartOutline /></Link>
    <FaRegUserCircle />
    </div>

    <div className='flex flex-row justify-center items-center gap-5 md:hidden'>
        <IoSearchOutline className='w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]'/>
        <Menu/>
    </div>
    </div>

    <div className='hidden md:flex md:justify-center md:items-center md:py-5'>
        <Header/>
    </div>


</nav>
  )
}

export default Navbar