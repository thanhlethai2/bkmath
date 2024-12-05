import React, { useState, useEffect } from 'react'

const CourseInfo = () => {

    const arr = window.location.href.split("/")
    const id = arr[arr.length - 1]
    const [data, setData] = useState({})

    useEffect(() => {

        async function fetchCourse() {
            const url = `/api/courses/${id}`
            await fetch(url).then(res => res.json()).then((d) => {
                setData(d[0])
            })
        }
        fetchCourse()

    }, [])


    return (
        <div>
            <div className='py-40 bg-black text-center text-white px-4'>
                <h2 className='text-5xl lg:text-7xl leading-snug font-bold mt-5'>Single Course Page</h2>
            </div>
            <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
                <div className=''>
                    <img src={`/src/assets/images/courses/${data.image}`} alt="" className='w-full mx-auto rounded' />
                    <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{data.name}</h2>
                    <p className='mb-3 text-gray-600'>{data.code}</p>
                    <p className='mb-3 text-gray-600'>{data.content}</p>
                    <div className='text-base text-gray-500'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, exercitationem. Alias ab maxime illo incidunt odit voluptatem adipisci. Perferendis nobis vel vero quidem obcaecati enim. Facere modi repellendus voluptas rem?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi perspiciatis nemo! Provident similique esse fugiat perferendis? Maxime, corrupti iusto beatae voluptatibus, vel, culpa molestiae consectetur aspernatur sequi ratione voluptates.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quam blanditiis quaerat animi, doloremque exercitationem culpa alias cum totam voluptates magnam modi architecto assumenda debitis labore minima eius ad quisquam!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseInfo