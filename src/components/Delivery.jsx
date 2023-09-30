import React from 'react'

const Delivery = () => {
    return (
        <div className='w-full bg-white px-4 py-14'>
            <h3 className='flex justify-center text-[24px] font-bold text-orange-700'>Quick Delivery Avaliable</h3>
            <div className='max-w-[1520px] mx-auto grid md:grid-cols-2'>

                <img className='w-[500px] mx-auto my-4' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp' />
                <div className='flex flex-col justify-center'>
                    <p className='text-green-600 font-bold'>Get This Now!</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>LimitLess Convenience On-Demand</h1>
                    <p className='font-mono'>Welcome to <span className='font-bold'>Num<span className='text-orange-700'>Num4U</span></span>! We are dedicated to satisfying your culinary cravings with a delectable array of dishes delivered right to your doorstep. Whether you're in the mood for a comforting classic, a daring international delight, or a healthy option that doesn't compromise on flavor, we've got you covered. Our team of talented chefs carefully craft each meal with the freshest ingredients, ensuring every bite is a delightful experience. Explore our menu and embark on a journey of taste and convenience, because at [Your Food Delivery Service Name], we believe that great food should be accessible to all. Place your order now and let us bring the flavors of the world to your table.</p>
                    <button className='w-[200px] mt-5 bg-black text-green-600 font-bold rounded-md'>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Delivery