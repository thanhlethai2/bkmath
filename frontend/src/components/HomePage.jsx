import React, { useState, useEffect } from 'react'
import TeacherList from './TeacherList'
import CourseList from './CourseList'

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
        <div>
            <div className=''>
                <TeacherList teachers={teachers} />
            </div>
            <div className=''>
                <CourseList courses={courses} />
            </div>
        </div>
    )
}

export default HomePage