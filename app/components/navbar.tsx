import React, { useState } from 'react'
import Link from 'next/link';
import logo from '@/public/logo.svg';
import Image from 'next/image';
import { varela } from '../ui/fonts';


const Navbar = () => {

/*     const [bgColor, setBgColor] = useState(false)

    const changeBgColor = () => {
        if(window.scrollY >= 50) {
            setBgColor(true);
        }
        else{
            setBgColor(false)
        }
    }

    window.addEventListener('scroll', changeBgColor)
 */

    return (

        <nav className='fixed z-20 p-2 px-20 flex flex-row justify-between h-20 text-white bg-opacity-70  bg-black w-full'>
            <div className='w-80 pr-4 flex flex-row justify-between align-middle items-center relative gap-4'>
                <div>
                    <Image src={logo} alt="logo pacifico mágico" width={100} className='absolute -top-2' />
                </div>
                <div className={`${varela.className} text-2xl upp`}>pacifico mágico</div>
            </div>
            <div className='flex flex-row gap-4 items-center text-sm'>
                <Link href={'plans'} className='flex flex-row justify-center items-center text-white hover:text-blue-300'>Planes </Link>
                <Link href={'hotels'} className='flex flex-row justify-center items-center text-white hover:text-blue-300'>Hoteles </Link>
                <Link href={'places'} className='flex flex-row justify-center items-center text-white hover:text-blue-300'>Lugares de interés </Link>
                <Link href={'contact'} className='flex flex-row justify-center items-center text-white hover:text-blue-300'>Contacto </Link>
                <Link href={'about'} className='bg-transparent hover:bg-blue-900 border-2 hover:border-blue-600 rounded-full h-10 px-4  flex flex-row items-center'>Realizar reserva </Link>
            </div>
        </nav>
    )
}

export default Navbar

