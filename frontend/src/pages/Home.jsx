import React from 'react'
import HomePage from '../components/HomePage'

const Home = () => {

    return (
        <div>
            <div className='py-40 bg-black text-center text-white px-4'>
                <h2 className='text-5xl lg:text-7xl leading-snug font-bold mt-5'>Home Page</h2>
            </div>
            <div>
                <HomePage />
            </div>
        </div>
    )
}

export default Home