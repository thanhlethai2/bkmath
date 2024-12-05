import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='bg-gray-900 text-white'>
            <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
                <div className='grid mb-8 lg:grid-cols-6'>
                    <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                        <div>
                            <p className='font-medium tracking-wide text-gray-300'>Calculus</p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Calculuc I</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Calculus II</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Calculus for Business</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Calculus for VP</a>
                                </li>
                            </ul>
                        </div>

                        {/* categories 2 */}
                        <div>
                            <p className='font-medium tracking-wide text-gray-300'>Algebra</p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Algebra</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Applied Algebra</a>
                                </li>
                                {/* <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Business</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Entertainment</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Portfolio</a>
                                </li> */}
                            </ul>
                        </div>

                        <div>
                            <p className='font-medium tracking-wide text-gray-300'>Numerical Methods</p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Numerical Methods</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Partial Differential Equations</a>
                                </li>
                                {/* <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Nonprofit</a>
                                </li> */}
                                {/* <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Education</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a>
                                </li> */}
                            </ul>
                        </div>

                        <div>
                            <p className='font-medium tracking-wide text-gray-300'>Probability & Statistics</p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Probability</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Statistics</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Probability & Statistics</a>
                                </li>
                                {/* <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Forum</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                        <p className='font-medium tracking-wide text-gray-300'>Subscribe for updates</p>
                        <form className='mt-4 flex flex-col md:flex-row'>
                            <input type='email' name='emails' id='emails' className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' />
                            <button type="submit" className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border'>Subscribe</button>
                        </form>
                        <p className='mt-4 text-gray-500 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nihil obcaecati cupiditate, corrupti eius voluptatibus repudiandae velit. Dicta quos in et deleniti temporibus, corrupti facilis voluptas! Similique accusantium ratione tenetur?</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
                    <p className='text-gray-500 text-sm'>&copy;&nbsp;Copyright by Le Thai Thanh 2025 | All right reserved.</p>
                    <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
                        {/* <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaTwitter className='h-6 w-6'/></a>
                        <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaInstagram className='h-6 w-6'/></a>
                        <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaFacebook className='h-6 w-6'/></a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer