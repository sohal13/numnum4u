import React, { useState } from 'react'
import { mealData } from './data/data'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Meal = () => {

    const [foods, setFoods] = useState(mealData);

    const fillterCat = (cat) => {
        setFoods(
            mealData.filter((item) => {
                return item.category === cat || item.price === cat;;
            })
        )
    };
    const [foodsprice, setFoodsprice] = useState(mealData)
    const filterPric = (prc) => {
        setFoodsprice(
            mealData.filter((item) => {
                return item.price === prc;
            })
        )
    }

    return (

        <>
            <div className='max-w-[1520px] max-auto px-4 py-14'>
                <h1 className='flex justify-center text-[24px] text-orange-700 font-bold sm:text-3xl mb-3'>Oue Menu</h1>
                <div className='flex flex-col gap-y-2 lg:flex-row justify-between'>
                    <div className='flex justify-center md:justify-center gap-x-2'>
                        <button
                            onClick={() => setFoods(mealData)}
                            className='bg-orange-700 border-orange-700 text-white font-bold mg-1 hover:bg-white  hover:text-orange-700'>
                            All</button>
                        <button
                            onClick={() => fillterCat("pizza")}
                            className='bg-orange-700  border-orange-700 text-white font-bold mg-1 hover:bg-white hover:text-orange-700'>
                            Pizza</button>
                        <button
                            onClick={() => fillterCat("salad")}
                            className='bg-orange-700  border-orange-700 text-white font-bold mg-1 hover:bg-white hover:text-orange-700'>
                            Salad</button>
                        <button
                            onClick={() => fillterCat("chicken")}
                            className='bg-orange-700  border-orange-700 text-white font-bold mg-1 hover:bg-white hover:text-orange-700'>
                            Chicken</button>
                    </div>
                    <div className='flex justify-center md:justify-center gap-x-3'>
                        <button
                            onClick={() => fillterCat("₹100")}
                            className='bg-orange-700 border-orange-700 text-white font-bold mg-1 hover:bg-white  hover:text-orange-700'>
                            ₹100
                        </button>
                        <button
                            onClick={() => fillterCat("₹200")}
                            className='bg-orange-700 border-orange-700 text-white font-bold mg-1 hover:bg-white  hover:text-orange-700'>
                            ₹200
                        </button>
                        <button
                            onClick={() => fillterCat("₹300")}
                            className='bg-orange-700 border-orange-700 text-white font-bold mg-1 hover:bg-white  hover:text-orange-700'>
                            ₹300
                        </button>
                        <button
                            onClick={() => fillterCat("₹400")}
                            className='bg-orange-700 border-orange-700 text-white font-bold mg-1 hover:bg-white  hover:text-orange-700'>
                            ₹400
                        </button>
                    </div>
                </div>
                <div className='bg-orange-100 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4 px-2'>
                    {
                        foods.map((item) => (
                            <div className='border-none hover:scale-105 duration-300' key={item.id}>
                                <img src={item.image} alt={item.name} className='w-full h-[150px] object-cover rounded-lg' />
                                <div className='bg-white/50  flex justify-between py-2 px-4'>
                                    <p className='font-bold pl-1'>{item.name}</p>
                                    <p className='bg-orange-700 h-18 w-18 rounded-full -mt-10 px-2 py-4 text-white font-bold border-8'>{item.price}</p>
                                </div>
                                <div className='pl-0 py-1 -mt-7'>
                                    <button className='flex border-none items-center text-indigo-900 text-[14px]'>View More<AiOutlineArrowRight className='w-5 ml-1 mt-1' /></button>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Meal