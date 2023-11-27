import React, { Children } from 'react'
import HotelCard from './HotelCard';

const HeroSection = ({
    children, props
  }: {
    children: React.ReactNode;
    props: any
  }) => {
    
    return (
        <section className='bg-white min-h-screen'>
            <div className="container mx-auto px-6 py-20">
            <h1 className="text-center"> {props.name} </h1>
              {children}
            </div>
        </section>
    )
}

export default HeroSection