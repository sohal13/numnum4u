import React from 'react'

const NewsLetter = () => {
    return (
        <div className='max-w-[1520px] max-auto px-4 py-14 bg-black text-white'>
            <div className='mx-auto grid lg:grid-cols-3 md:px-16'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='text-3xl font-bold '>Need advice on how to impove your flow?</h1>
                    <p>signUp to our newsletter and saty up to date</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input type='email' placeholder='Enter email 
                    ' className='rounded-md w-full focus:outline-none text-black p-3 flex' />
                        <button className='bg-green-600 rounded-md w-[200px] ml-4 my-6 px-6 py-3'>
                            Notify Me
                        </button>
                    </div>
                    <p className=''>We are concerned about the security of your data. Read</p>
                    <p className='text-green-600 items-start'>Privacy Policy.</p>
                </div>
                <hr className='my-8 bg-gray-600 border-1' />
            </div>
        </div>
    )
}

export default NewsLetter