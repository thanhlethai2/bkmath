import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaBookOpen } from 'react-icons/fa6'

const CourseList = ({courses}) => {
    return (
        <div>
            <hr className='py-2'/>
            <div className='text-center'>
                <p className='p-4 text-2xl'>Our Objectives</p>
                <p className='p-4 text-5xl'>COURSES</p>
            </div>
            <div className='pl-24 pr-24 justify-between items-center grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
            {
                courses.map((course) => 
                <Link to={`/courses/${course.id}`} key={course.id} className='p-5 shadow-lg rounded cursor-pointer'>
                    <div>
                        <img src={`/src/assets/images/courses/${course.image}`} alt="" className='w-full' />
                    </div>
                    <div className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer text-center'>
                        {course.name}
                    </div>
                    <p className='mb-2 text-gray-600'><FaEnvelope className='mr-2 inline-flex items-center' />{course.code}</p>
                    <p className='mb-2 text-gray-600'><FaBookOpen className='mr-2 inline-flex items-center' />{course.content}</p>
                </Link>)
            }
            </div>
        </div>
    )
}

export default CourseList