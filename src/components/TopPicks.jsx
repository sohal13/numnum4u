import React from 'react'
import { topPicks } from './data/data';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import img from '../assets/img.jpg'

const TopPicks = () => {
    return (
        <div className='w-full bg-white px-4 py-14'>
            <h1 className='flex justify-center text-[24px] text-orange-700 font-bold sm:text-3xl  '>Top Picks</h1>
            <div className='flex max-w-[1520px] m-auto py-2 px-2'>
                <Splide options={{ perPage: 3, gap: "0.5rem", drag: 'free', arrows: false }} aria-label="React Splide Example">
                    {
                        topPicks.map((item) => {
                            return (
                                <SplideSlide key={item.id}>
                                    <div className='rounded-2xl relative'>
                                        <div className='absolute w-full h-full bg-black/50 rounded-2xl text-white'>
                                            <p className='px-2 font-bold'>{item.title}</p>
                                            <p className='px-2 font-bold'>{item.price}</p>
                                            <button className='border-dotted border-white text-white mx-2 absolute bottom-1'>Add To Cart</button>
                                        </div>
                                        <img src={item.img} alt={item.id} className='h-[200px] w-full object-cover cursor-pointer rounded-2xl hover:scale-100 ease-out duration-200' />
                                    </div>
                                </SplideSlide>
                            )
                        })
                    }
                </Splide>
            </div>
        </div>
    )
}

export default TopPicks