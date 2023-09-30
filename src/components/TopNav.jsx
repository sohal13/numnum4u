import React, { useState } from 'react'
import { FaBars, FaSearch, FaShoppingCart, FaWallet } from 'react-icons/fa'
import { AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite } from "react-icons/md"
import { IoMdHelpCircle } from 'react-icons/io'
import Categories from './Categories'
import Delivery from './Delivery'
import Footer from './Footer'
import HeroComp from './HeroComp'
import Meal from './Meal'
import NewsLetter from './NewsLetter'
import TopPicks from './TopPicks'
import { mealData } from './data/data'

const TopNav = () => {

    const [sidNev, setSideNev] = useState(false);
    const [data, setData] = useState(mealData);
    const [filterItem, setFilterItem] = useState([])

    function onChange(e) {
        const value = e.target.value;
        setFilterItem(data.filter(item =>
            item.name.toLowerCase().includes(value.toLowerCase())))
        if (value === "") {
            setFilterItem("")
        }
    }

    return (
        <>
            <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
                <div className='flex items-center lg:gap-x-3'>
                    <div onClick={() => setSideNev(!sidNev)} className='cursor-pointer'>
                        <FaBars size={25} />
                    </div>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl text-orange-700 font-bold'>Nom<span className='font-bold text-black'>Nom4U</span></h1>
                    <div className='hidden lg:flex text-center bg-gray-200 rounded-full p-1 text-[14px]'>
                        <p className='bg-orange-700 px-2 py-2 rounded-full text-white text-bold'>Free</p>
                        <p className='px-2 py-2 font-bold'>Delivery</p>
                    </div>
                </div>
                <div className='flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                    <FaSearch size={25} className='cursor-pointer' />
                    <input className='bg-transparent p-2 w-full focus:outline-none'
                        style={{ textTransform: "lowercase" }}
                        type='search'
                        placeholder='Search Meals'
                        onChange={onChange}
                    />
                </div>
                <button
                    className='bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full gap-x-1 '>
                    Cart<FaShoppingCart />
                </button>
                {
                    sidNev ? (<div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0' onClick={() => setSideNev(!sidNev)}>
                        <div className='fixed top-0 left-0 w-[300px] h-screen bg-white z-10 '>
                            <AiOutlineClose onClick={() => setSideNev(!sidNev)} size={25} className='absolute right-4 top-4 cursor-pointer' />
                            <h2 className='text-2xl p-4 text-orange-700 font-bold'>Nom<span className='font-bold text-black'>Nom4U</span></h2>
                            <nav>
                                <ul className='flex flex-col p-4 text-gray-900 font-bold'>
                                    <li className='text-xl py-4 flex '>
                                        <BsPersonCircle size={25} className='mr-4  text-black bg-orange-700 rounded-full' />
                                        My Account
                                    </li>
                                    <li className='text-xl py-4 flex'>
                                        <TbTruckDelivery size={25} className='mr-4 text-black bg-orange-700 rounded-full' />
                                        Delivery
                                    </li>
                                    <li className='text-xl py-4 flex'>
                                        <MdFavorite size={25} className='mr-4  text-black bg-orange-700 rounded-full' />
                                        My Favorite
                                    </li>
                                    <li className='text-xl py-4 flex'>
                                        <FaWallet size={25} className='mr-4  text-black bg-orange-700 rounded-full' />
                                        Wallet
                                    </li>
                                    <li className='text-xl py-4 flex'>
                                        <IoMdHelpCircle size={25} className='mr-4  text-black bg-orange-700 rounded-full' />
                                        NeedHelp?
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>) : ("")
                }
            </div>
            <div>

                {
                    filterItem ? (
                        <div className='max-w-[1520px]'>
                            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4 px-2'>
                                {filterItem.map((item) =>
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
                                )
                                }
                            </div>
                        </div>

                    )
                        : (
                            <>
                            </>
                        )
                }
                <div style={{ display: filterItem == "" ? "block" : "none" }}>
                    <HeroComp />
                    <Delivery />
                    <TopPicks />
                    <Meal />
                    <Categories />
                    <NewsLetter />
                    <Footer />
                </div>
            </div >
        </>
    )
}

export default TopNav