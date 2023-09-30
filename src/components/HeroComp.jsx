import React, { useState } from 'react'
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs'
import { PiDotOutlineBold } from 'react-icons/pi'
const HeroComp = () => {
    const sliders = [
        {
            url: 'https://food-images.files.bbci.co.uk/food/recipes/black_and_blue_burger_95881_16x9.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
        },
        {
            url: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F3070%2Ftrend20210218124824.jpg'
        },
        {
            url: 'https://www.cuddlynest.com/blog/wp-content/uploads/2022/10/best_thai_food_featured_image.jpg'
        }

    ]

    const [currentImg, setCurrentImg] = useState(0)

    const lastSlider = () => {
        const isFirstSlide = currentImg === 0
        const newIndex = isFirstSlide ? sliders.length - 1 : currentImg - 1
        setCurrentImg(newIndex)
    }

    const moveToSlide = (currentImg) => {
        setCurrentImg(currentImg)
    }


    return (
        <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                style={{ backgroundImage: `url(${sliders[currentImg].url})` }}
            >
            </div>
            <div className='hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[50%] left-5 text-2xl 
            rounded-full p-2 bg-orange-700 cursor-pointer duration-300'>
                <BsChevronDoubleLeft size={25} onClick={lastSlider} />
            </div>
            <div className='hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[50%] right-5 text-2xl 
            rounded-full p-2 bg-orange-700 cursor-pointer duration-300'>
                <BsChevronDoubleRight size={25} onClick={lastSlider} />
            </div>
            <div className='flex top-4 justify-center lg:py-4'>
                {
                    sliders.map((sliderItems, currentImg) => (
                        <div className='text-2xl cursor-pointer' key={currentImg}
                            onClick={() => moveToSlide(currentImg)}>
                            <PiDotOutlineBold />
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default HeroComp