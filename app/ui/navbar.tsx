import React from 'react'
import Link from 'next/link';
import logo from '@/public/logo.svg';
import Image from 'next/image';
import { varela } from './fonts';


const Navbar = () => {
    return (

        <nav className='fixed z-20 p-2 px-20 flex flex-row justify-between h-20 text-white bg-opacity-70  bg-black w-full'>
            <div className='w-80 pr-4 flex flex-row justify-between align-middle items-center relative gap-4'>
                <div>
                    <Image src={logo} alt="logo pacifico mágico" width={100} className='absolute -top-2' />
                </div>
                <div className={`${varela.className} text-2xl upp`}>pacifico mágico</div>
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <Link href={'plans'} className='flex flex-row justify-center items-center text-white hover:text-blue-300'>Planes </Link>
                <Link href={'contact'} className='flex flex-row justify-center items-center text-white hover:text-blue-300'>Contacto </Link>
                <Link href={'faq'} className='flex flex-row justify-center items-center text-white hover:text-blue-300'>FAQ </Link>
                <Link href={'login'} className='flex flex-row justify-center items-center text-white hover:text-blue-300'>Iniciar sesión </Link>
                <Link href={'about'} className='bg-transparent hover:bg-blue-900 border-2 hover:border-blue-600 rounded-full h-10 px-4  flex flex-row items-center'>Realizar reserva </Link>
            </div>
        </nav>
    )
}

export default Navbar

