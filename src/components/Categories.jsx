import React from 'react'
import { categories } from './data/data'

const Categories = () => {



    return (
        <div className='max-w-[1520px] max-auto px-4 py-14'>
            <h1 className='flex justify-center text-[24px] text-orange-700 font-bold sm:text-3xl mb-3'>Trending Categories</h1>
            <div className='grid grid-cols-2 md:grid-cols-6 sm:grid-cols-4 gap-5 py-5 px-2'>
                {
                    categories.map((item) => (
                        <div className='flex justify-center p-4 items-center  hover:scale-105 duration-300' key={item.id}>
                            <img src={item.image} alt={item.name} className='w-[100px] h-[25px] lg:w-[100px]' />
                        </div>
                    ))
                }
            </div>
        </div >

    )
}

export default Categories