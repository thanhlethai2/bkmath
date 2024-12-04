import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaBookOpen } from 'react-icons/fa6'

const HomePage = () => {

    const [teachers, setTeachers] = useState([])
    const [courses, setCourses] = useState([])

    useEffect(() => {

        async function fetchTeachers() {
            const url = "/api/users"
            await fetch(url).then(res => res.json()).then((data) => {
                // console.log(data);
                setTeachers(data.filter((user => user.role === 'teacher' && user.status === 'on')))
            })
        }
        async function fetchCourses() {
            const url = "/api/courses"
            await fetch(url).then(res => res.json()).then((data) => {
                // console.log(data);
                setCourses(data.filter((course => course.status === 'on')))
            })
        }

        fetchTeachers()
        fetchCourses()

    }, [])

    return (
        <div className='lg:flex'>
            <div className='lg:w-3/4'>
                <div className='text-5xl py-3 bg-cyan-600 text-gray-100 text-center'>
                    Our Teachers
                </div>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
                    {
                        teachers.map((teacher) => 
                        <Link to={`/users/${teacher.id}`} key={teacher.id} className='p-5 shadow-lg rounded cursor-pointer'>
                            <div>
                                <img src={`/src/assets/images/users/${teacher.image}`} alt="" className='w-full' />
                            </div>
                            <div className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer text-center'>
                                {teacher.name}
                            </div>
                            <p className='mb-2 text-gray-600'><FaEnvelope className='mr-2 inline-flex items-center' />{teacher.email}</p>
                            <p className='mb-2 text-gray-600'><FaBookOpen className='mr-2 inline-flex items-center' />{teacher.courses}</p>
                        </Link>)
                    }
                </div>
            </div>
            <div className='lg:w-1/4'>
                <div className='text-5xl py-3 bg-cyan-700 text-gray-200 text-center'>
                    Our Courses
                </div>
                <div className='mx-2 my-2 grid grid-cols-1 gap-8'>
                    {
                        courses.map((course) => 
                        <div className='p-2 shadow-lg rounded border'>
                            <p className='text-center font-semibold mb-2'>{course.name}&nbsp;&nbsp;({course.code})</p>
                            <p className='text-sm text-gray-600'>{course.content}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage