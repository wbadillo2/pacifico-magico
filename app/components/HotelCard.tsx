'use client'
import { StarIcon, ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarFavicon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React, { useState } from 'react'

interface Hotel {
    id: number;
    name: string;
    description: string;
    location: string;
    pricePerNight: number;
    distance: number;
    images: Array<any>;
    ranking: number,
}

const Card: React.FC<{ hotel: Hotel }> = ({ hotel }) => {

    const [count, setCount] = useState(0);

    const slideLeft = () => {
        if (count > 1) {
            setCount(count - 1)
        }
        else{
            setCount(hotel.images.length - 1)
        }
    }
    const slideRight = () => {
        if (count < hotel.images.length - 1) {
            setCount(count + 1)
        }
        else{
            setCount(0)
        }
    }

    return (
        <section className="container ">
            <div className="flex flex-row justify-content-center align-items-center ">
                <div className="card w-[21rem] h-[27rem] relative ">
                    <button title={`marcar como favorito-${hotel.name}`} type='button' className='absolute z-10 right-3 top-3 w-6'>
                        <StarFavicon className='w-7 text-white/95 fill-gray-900/30 hover:fill-gray-200 hover:scale-125 duration-200 ' />
                    </button>
                    <div className='h-[336px] w-[336px] rounded-xl relative'>
                        <Image width={336} height={336} src={hotel.images[count]} className="z-0 rounded-xl w-full h-full object-cover" alt="..." />
                        <button type='button' onClick={slideLeft} className='absolute flex justify-center items-center top-[50%]  rounded-full w-8 h-8' title={`leftSlide-${hotel.name}`}>
                            <div className='bg-black  w-7 h-7 absolute rounded-full'></div>
                            <ArrowLeftCircleIcon className='absolute w-9  fill-white/75 hover:fill-white duration-200' />
                        </button>
                        <button type='button' onClick={slideRight} className='absolute flex justify-center items-center top-[50%] right-0 rounded-full w-8 h-8' title={`rightSlide-${hotel.name}`}>
                            <div className='bg-black  w-7 h-7 absolute rounded-full'></div>
                            <ArrowRightCircleIcon className='absolute w-9  fill-white/75 hover:fill-white duration-200' />
                        </button>
                    </div>
                    <div className="card-body text-sm py-2">
                        <div className='flex justify-between font-medium '>
                            <h5 className="card-title ">{hotel.name} </h5>
                            <div className='flex flex-row w-10 h-6 items-center justify-end'>
                                <StarIcon className='w-4' />
                                <span>{hotel.ranking}</span>
                            </div>
                        </div>
                        <p className="card-text text-gray-900 font-light">Distancia desde el casco urbano: {hotel.distance} km</p>
                        <p className="card-text text-gray-900 font-light flex flex-row gap-2">
                            <span className='font-semibold'>$ {hotel.pricePerNight}</span>
                            <span className='font-semibold'>COP</span>
                            <span>noche</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card