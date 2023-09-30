import React from 'react'
import { AiFillInstagram, AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1520px] max-auto px-4 bg-black text-white'>
            <div className='flex md:justify-around flex-col md:flex-row gap-2'>
                <div className='md:w-2/6 w-full'>
                    <h1 className='text-3xl text-orange-700 font-bold mb-2'>NumNum4U.</h1>
                    <p>Num<span className='text-orange-700'>Num4U</span>! We are dedicated to satisfying your culinary cravings with a delectable array of dishes delivered right to your doorstep. Whether you're in the mood for a comforting classic, a daring international delight, or a healthy option that doesn't compromise on flavor, we've got you covered. </p>

                    <ul className='flex justify-between w-4/6 my-2 text-2xl cursor-pointer'>
                        <li className=' hover:scale-125'><a href='https://www.instagram.com/sohal_rahaman_/'><AiFillInstagram /></a></li>
                        <li className=' hover:scale-125'><a href='https://www.facebook.com/sohal.rahaman.338'><AiFillFacebook /></a></li>
                        <li className=' hover:scale-125'><a href='https://twitter.com/Sohal__Rahaman'><AiFillTwitterSquare /></a></li>
                        <li className=' hover:scale-125'><a href='https://www.linkedin.com/in/sohal-rahaman-540941245/'><AiFillLinkedin /></a></li>
                        <li className=' hover:scale-125'><a href='https://github.com/sohal13'><FaGithubSquare /></a></li>

                    </ul>

                </div>
                <div>
                    <ul>
                        <li className='mb-5 text-[20px]'>LOCATION</li>
                        <li>New York</li>
                        <li>USA</li>
                        <li>India</li>
                        <li>Canada</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='mb-5 text-[20px]'>SUPPORT</li>
                        <li>Pricing</li>
                        <li>Documents</li>
                        <li>Guides</li>
                        <li>API Status</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='mb-5 text-[20px]'>COMPANY</li>
                        <li>About</li>
                        <li>Career</li>
                        <li>FAQS</li>
                        <li>User Policy</li>
                    </ul>
                </div>
                <div>
                    <ul className='cursor-pointer'>
                        <li className='mb-5 text-[20px]'>LEGAL</li>
                        <li>Claim</li>
                        <li>Policy</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Footer