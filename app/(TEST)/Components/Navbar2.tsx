'use client'
import Link from 'next/link'
import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {useState,useEffect} from 'react'
const Navbar2 = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textcolor, setTextColor] = useState('#FF6000');
    const handleNav = () => {
        setNav(!nav);        
    }

    useEffect(()=>{
        const changeColor = () =>{
            if(window.scrollY >= 90){
                setColor('#000000');
                setTextColor('#ffffff');
            }else{
                setColor('transparent');
                setTextColor('#FF6000');
            }
            
        }
        window.addEventListener('scroll', changeColor);
        return () => {
            window.removeEventListener('scroll', changeColor);
        }
    },[])
  
  return (
    <div className=' '>
      <div style={{backgroundColor:`${color}`}} className=' text-2xl fixed left-0   z-10 ease-in duration-500 w-full  '>
        <div className="flex justify-between px-10 items-center w-full max-w-[1280px] m-auto text-white p-4 ">
            <div style={{color:`${textcolor}`}} className="text-orange-500 font-bold text-3xl ">LOGO </div>
            <ul style={{color:`${textcolor}`}}className='hidden sm:flex gap-3 '>
                <Link href="/">
                    <li>Home</li>
                </Link>
                <Link href="/">
                    <li>Blog</li>
                </Link>
                <Link href="/">
                    <li>About</li>
                </Link>
                <Link href="/">
                    <li>Contact</li>
                </Link>
            </ul>
            <div style={{color:`${textcolor}`}}  className=" sm:hidden z-10  " onClick={handleNav}>
            {nav?<AiOutlineClose size={25}/>:<AiOutlineMenu size={25}/>}
            </div>
            <div className={nav?'sm:hidden absolute top-0 left-0 bottom-0 right-0   bg-black flex justify-center items-center w-full h-screen border text-white text-4xl  border-gray-950 ease-in duration-300':'sm:hidden absolute top-0 left-[-100%] bottom-0 right-0   bg-black flex justify-center items-center w-full h-screen border text-white text-4xl  border-gray-950 ease-in duration-300'}>
            <ul style={{color:`${textcolor}`}} >
                <Link href="/">
                    <li className='p-4 hover:text-gray-600  text-white'>Home</li>
                </Link>
                <Link href="/">
                    <li className='p-4 hover:text-gray-600 text-white'>Blog</li>
                </Link>
                <Link href="/">
                    <li className='p-4 hover:text-gray-600 text-white'>About</li>
                </Link>
                <Link href="/">
                    <li className='p-4 hover:text-gray-600 text-white'>Contact</li>
                </Link>
            </ul>
            </div>
        </div>
    </div>   
    </div>
   
  )
}

export default Navbar2