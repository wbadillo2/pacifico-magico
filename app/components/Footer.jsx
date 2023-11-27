import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <footer className='fixed bottom-0 bg-white/50 w-full h-16 flex justify-between items-center px-20'>
            <div>© 2023 Pacífico mágico, derechos reservados</div>
            <div className='flex gap-x-8'>
                <FaFacebookF size={24} />
                <FaTwitter size={24} />
                <FaInstagram size={24} />
                <IoMdMail size={24}/>
            </div>
        </footer>
    )
}

export default Footer